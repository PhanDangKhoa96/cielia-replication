import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import lottie, {AnimationItem, AnimationConfigWithPath} from "lottie-web";

interface PlayheadType {
    frame: number;
}

type SpeedOptions = {
    readonly slow: string;
    readonly medium: string;
    readonly fast: string;
};

type RendererSettings = {
    preserveAspectRatio: string;
    [key: string]: unknown;
};

interface LottieScrollTriggerVars {
    target: string | Element | Element[];
    path: string;
    speed?: keyof SpeedOptions;
    renderer?: "svg";
    rendererSettings?: RendererSettings;
    [key: string]: unknown;
}

interface ScrollTriggerConfig {
    trigger: Element;
    pin: boolean;
    start: string;
    end: string;
    scrub: number;
    [key: string]: unknown;
}

interface GSAPContext {
    add: (fn: () => void) => void;
}

function LottieScrollTrigger(vars: LottieScrollTriggerVars): AnimationItem {
    const playhead: PlayheadType = {frame: 0};
    const target = gsap.utils.toArray(vars.target)[0] as Element;

    const speeds: SpeedOptions = {
        slow: "+=2000",
        medium: "+=1000",
        fast: "+=500",
    } as const;

    const st: ScrollTriggerConfig = {
        trigger: target,
        pin: false,
        start: "top 60%",
        end: "top -40%",
        scrub: 1,
    };

    const ctx = (gsap.context && gsap.context()) as GSAPContext | undefined;

    const animationConfig: AnimationConfigWithPath = {
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const animation: AnimationItem = lottie.loadAnimation(animationConfig);

    // Add ScrollTrigger properties from vars
    for (const p in vars) {
        if (Object.prototype.hasOwnProperty.call(vars, p)) {
            st[p] = vars[p];
        }
    }

    animation.addEventListener("DOMLoaded", function (): void {
        const createTween = function (): () => void {
            (
                animation as AnimationItem & {frameTween?: gsap.core.Tween}
            ).frameTween = gsap.to(playhead, {
                frame: animation.totalFrames - 1,
                ease: "none",
                onUpdate: () =>
                    animation.goToAndStop(Math.round(playhead.frame), true),
                scrollTrigger: st,
            });

            return () => {
                if (typeof animation.destroy === "function") {
                    animation.destroy();
                }
            };
        };

        if (ctx?.add) {
            ctx.add(createTween);
        } else {
            createTween();
        }

        ScrollTrigger.sort();
        ScrollTrigger.refresh();
    });

    return animation;
}

export default LottieScrollTrigger;

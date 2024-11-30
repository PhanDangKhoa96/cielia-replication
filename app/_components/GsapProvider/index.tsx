"use client";

import Tempus from "@darkroom.engineering/tempus";
import gsap from "gsap";
import {useEffect, useLayoutEffect, useState} from "react";
import {ScrollTriggerConfig} from "./ScrollTriggerConfig";

export function GsapProvider({scrollTrigger = false}) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        gsap.defaults({ease: "none"});

        // merge rafs
        gsap.ticker.lagSmoothing(0);
        gsap.ticker.remove(gsap.updateRoot);
        Tempus?.add((time: number) => {
            gsap.updateRoot(time / 1000);
        }, 0);

        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return scrollTrigger && <ScrollTriggerConfig />;
}

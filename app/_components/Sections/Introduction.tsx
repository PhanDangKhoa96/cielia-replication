"use client";

import React, {useRef} from "react";
import SectionHeader from "./SectionHeader";
import {useGSAP} from "@gsap/react";
import LottieScrollTrigger from "@/app/_utilities/LottieScrollTrigger";
import gsap from "gsap";

const Introduction = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Layout animation
            LottieScrollTrigger({
                target: "#lottie-container",
                path: "/lottie.json",
            });

            const layoutTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#lottie-container",
                    start: "top 60%",
                    end: "top -40%",
                    scrub: 1,
                },
            });
            layoutTimeline.to(
                ".mask-right",
                {
                    scaleX: 0,
                    transformOrigin: "right",
                },
                "<"
            );
            layoutTimeline.to(
                ".mask-top",
                {
                    scaleY: 0,
                    transformOrigin: "top",
                },
                "<"
            );
            layoutTimeline.fromTo(
                ".title",
                {
                    xPercent: 30,
                    y: "10vh",
                },
                {
                    y: 0,
                    xPercent: 0,
                },
                "<"
            );
            layoutTimeline.fromTo(
                ".content",
                {
                    transform: "translate(30%,10vh)",
                },
                {
                    transform: "translate(0%,0%)",
                },
                "<"
            );
            layoutTimeline.fromTo(
                "#lottie-container",
                {
                    transform: "translateY(20vh)",
                },
                {
                    transform: "translateY(0vh)",
                },
                "<"
            );

            // Image animation
            const contentImages = gsap.utils.toArray(
                ".content-image"
            ) as HTMLDivElement[];
            contentImages.forEach((contentImage) => {
                const overlay = contentImage.querySelector(".overlay");
                const imageWrapper = contentImage.querySelector(".image");
                const image = contentImage.querySelector(".image img");

                const overlayTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: contentImage,
                        start: "top 100%",
                        end: "top 80%",
                        toggleActions: "play play reverse none",
                    },
                    defaults: {
                        duration: 0.6,
                    },
                });

                overlayTimeline.fromTo(
                    overlay,
                    {
                        clipPath:
                            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    },
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }
                );
                overlayTimeline.fromTo(
                    imageWrapper,
                    {
                        clipPath:
                            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    },
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }
                );

                var imageTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: contentImage,
                        start: "top 100%",
                        end: "bottom 0%",
                        scrub: true,
                    },
                });

                gsap.set(image, {scale: 1.1});
                imageTimeline.fromTo(
                    image,
                    {
                        yPercent: -5,
                    },
                    {
                        yPercent: 5,
                    }
                );
            });
        },
        {scope: sectionRef}
    );

    return (
        <section id="introduction" className="overflow-hidden" ref={sectionRef}>
            <SectionHeader>Introduction</SectionHeader>
            <div className="relative bg-[#6a6a6a] pb-64 pt-[calc(70vh+120px)]">
                <div className="mask-top absolute left-0 top-0 h-[60vh] w-full bg-white"></div>
                <div
                    className="absolute left-0 top-0 w-full"
                    id="lottie-container"></div>
                <div className="mask-right absolute right-0 top-0 h-full w-[70vw] bg-white"></div>
                <div className="container space-y-52 leading-normal text-white">
                    <h2 className="title fs-25-43">
                        Live the way you are
                        <br />
                        Enjoy the joy of being yourself.
                    </h2>
                    <div className="content ml-auto flex w-[66vw] justify-between">
                        <p>
                            If you're unsure, choose the fun option’—a great
                            saying
                            <br />
                            But when it comes to living spaces, it's a different
                            matter
                            <br />
                            Even when chosen intuitively, people change.
                            <br />
                            And they will continue to change.
                        </p>

                        <div className="content-image relative aspect-square w-[23vw] overflow-hidden">
                            <div className="overlay absolute h-full w-full bg-[#1c1c1c]"></div>
                            <div className="image relative h-full w-full">
                                <img
                                    src="/intro-1.jpg"
                                    className="object-cover"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-x-[18vw]">
                        <div className="content-image relative aspect-square w-[46vw] overflow-hidden">
                            <div className="overlay absolute h-full w-full bg-[#1c1c1c]"></div>
                            <div className="image relative h-full w-full">
                                <img
                                    src="/intro-2.jpg"
                                    className="object-cover"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                        </div>
                        <p>
                            So, when thinking about your home,
                            <br />
                            I hope you'll pause for just a moment,
                            <br />
                            and take a long-term view, looking far into the
                            future.
                            <br />
                            Thinking about the future may feel a little
                            overwhelming,
                            <br />
                            <br />
                            but when you think of it as being for your future,
                            <br />
                            you’ll find your heart mysteriously uplifted.
                        </p>
                    </div>

                    <div className="ml-auto flex w-[85vw] justify-between">
                        <p>
                            In the ordinary moments of everyday life,
                            <br />
                            you suddenly feel a sense of being yourself.
                            <br />
                            into each aspect of your home.
                            <br />
                            <br />
                            So, where shall we begin together?
                            <br />
                            First, let us hear your story.
                            <br />
                        </p>

                        <div className="content-image relative aspect-square w-[35vw] overflow-hidden">
                            <div className="overlay absolute h-full w-full bg-[#1c1c1c]"></div>
                            <div className="image relative h-full w-full">
                                <img
                                    src="/intro-3.jpg"
                                    className="object-cover"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-x-[12vw]">
                        <div className="content-image relative aspect-square w-[35vw] overflow-hidden">
                            <div className="overlay absolute h-full w-full bg-[#1c1c1c]"></div>
                            <div className="image relative h-full w-full">
                                <img
                                    src="/intro-4.jpg"
                                    className="object-cover"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="content-image relative mt-52 aspect-square w-[26vw] overflow-hidden">
                            <div className="overlay absolute h-full w-full bg-[#1c1c1c]"></div>
                            <div className="image relative h-full w-full">
                                <img
                                    src="/intro-5.jpg"
                                    className="object-cover"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;

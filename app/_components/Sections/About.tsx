"use client";

import React, {useRef} from "react";
import SectionHeader from "./SectionHeader";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const introMovAnim = gsap.timeline({
                scrollTrigger: {
                    trigger: introRef.current,
                    start: "top 0%",
                    endTrigger: textRef.current,
                    end: "top center",
                    scrub: true,
                },
            });
            gsap.set(imgRef.current, {
                transformOrigin: "left bottom",
            });
            introMovAnim.to(imgRef.current, {
                scale: 0.5,
            });
        },
        {scope: sectionRef}
    );
    return (
        <section ref={sectionRef} id="#about">
            <SectionHeader>About Section</SectionHeader>

            <div className="sticky top-0 z-10 h-screen w-full" ref={introRef}>
                <div className="h-full">
                    <img
                        ref={imgRef}
                        src="/about.jpeg"
                        alt="about section image"
                        loading="lazy"
                        className="h-full w-full object-cover object-[50%_35%]"
                    />
                </div>
            </div>
            <div
                className="container relative z-0 pb-[500px] pt-40"
                ref={textRef}>
                <div className="sticky top-0 isolate z-20 grid h-[50vh] place-items-center">
                    <h2 className="mx-auto max-w-screen-md text-center fs-25-43">
                        Choosing what matters most and adding it mindfully
                        creates a life true to yourself.
                    </h2>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgb(255,255,255)] from-75% to-[rgba(255,255,255,0)] to-100%"></div>
                </div>

                <div className="ml-auto w-1/2 pl-[10vw] pt-36 pb-40">
                    <p>
                        Many feel suffocated by the pressure to seek more than
                        necessary or follow others' choices.
                        <br />
                        <br />
                        In the rush of daily life, it’s time to rethink what
                        truly brings fulfillment.
                        <br />
                        <br />
                        The scent of fresh greenery carried by the wind,
                        <br />
                        <br />
                        the warmth of sunlight,
                        <br />
                        <br />
                        the cheerful chirping of birds—moments like these enrich
                        our senses and transform a house into a cherished home.
                        <br />
                        <br />
                        <br />
                        By focusing on what truly matters and adding thoughtful
                        details,
                        <br />
                        <br />
                        we create spaces that reflect individuality.
                        <br />
                        <br />
                        we craft homes with this vision at heart.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

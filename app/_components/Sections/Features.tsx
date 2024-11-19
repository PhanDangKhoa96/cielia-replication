"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import React, {useRef} from "react";

const features = [
    {
        id: "01",
        totalItems: "03",
        title: "EQUIPMENT",
        subtitle: "Features & Specifications",
        description:
            "Carefully curated equipment and specifications\nthat adapt seamlessly to your individual lifestyle",
        image: "/feature-1.jpeg",
    },
    {
        id: "02",
        totalItems: "03",
        title: "STORAGE",
        subtitle: "Storage Solutions",
        description:
            "Refined storage systems that create\nspace and harmony in your daily life",
        image: "/feature-2.jpeg",
    },
    {
        id: "03",
        totalItems: "03",
        title: "KITCHEN",
        subtitle: "Kitchen Design",
        description:
            "Functional kitchen spaces that elevate\nyour culinary experience",
        image: "/feature-3.jpeg",
    },
];

const Features = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const features = gsap.utils.toArray(".feature") as HTMLDivElement[];

            features.forEach((feature) => {
                gsap.to(feature, {
                    yPercent: 20,
                    startAt: {
                        filter: "brightness(1)",
                    },
                    filter: "brightness(0.5)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: feature,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        // markers: true,
                    },
                });
            });
        },
        {scope: sectionRef}
    );
    return (
        <section ref={sectionRef} className="overflow-hidden">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="feature relative isolate overflow-hidden">
                    <div className="container grid min-h-[60vh] place-items-center py-28 text-white lg:min-h-[80vh]">
                        <div className="flex h-full w-full flex-col items-center justify-between">
                            <div className="flex w-full items-start justify-between gap-x-[20vw] border-t border-white pt-5 lg:mr-auto lg:max-w-[40vw] xl:max-w-[30vw]">
                                <div>
                                    <span className="fs-38-56">
                                        0{index + 1}
                                    </span>
                                    <span className="text-xs">
                                        /0{features.length}
                                    </span>
                                </div>
                                <p className="text-xxs">Number of contents.</p>
                            </div>
                            <div className="text-center">
                                <h2 className="fs-40-85 mb-2 uppercase">
                                    {feature.title}
                                </h2>
                                <p>{feature.subtitle}</p>
                            </div>

                            <div className="flex w-full items-start justify-between gap-x-[20vw] border-t border-white pt-5 lg:ml-auto lg:w-fit lg:max-w-[48vw] xl:max-w-[35vw]">
                                <p className="text-xs">{feature.description}</p>
                                <p className="text-xxs">Description.</p>
                            </div>
                        </div>
                    </div>

                    <img
                        src={feature.image}
                        alt="feature image"
                        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
                        loading="lazy"
                    />
                </div>
            ))}
        </section>
    );
};

export default Features;

"use client";

import React, {useRef} from "react";
import SectionHeader from "./SectionHeader";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
const features = [
    {
        title: "EQUIPMENT",
        subtitle: "Home Features and Storage Solutions",
        description:
            "Tailored living spaces with thoughtfully designed home features and storage options to seamlessly suit every lifestyle.",
        img: "/service-1.jpeg",
    },
    {
        title: "PLAN DESIGN",
        subtitle: "Floor Plan Design",
        description:
            "Creating spaces that feel like home, with floor plans meticulously crafted to enhance comfort, including considerations for furniture placement and functional flow.",
        img: "/service-2.jpeg",
    },
    {
        title: "PRIVATE GARDEN",
        subtitle: "Exclusive Garden Design",
        description:
            "Expanding your lifestyle with private garden spaces, perfect for sunny days as an additional living area where you can bring your ideal outdoor experiences to life.",
        img: "/service-3.jpeg",
    },
];

const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const services = gsap.utils.toArray(".service") as HTMLDivElement[];
            services.forEach((service) => {
                const img = service.querySelector(
                    ".bg-img"
                ) as HTMLImageElement;
                gsap.to(img, {
                    yPercent: 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: service,
                        start: "top 0%",
                        end: "bottom -50%",
                        scrub: true,
                        markers: true,
                    },
                });
            });
        },
        {scope: sectionRef}
    );
    return (
        <section ref={sectionRef}>
            <SectionHeader>Services</SectionHeader>
            <div>
                {features.map(({title, description, subtitle, img}, index) => {
                    const isFirstAndLast =
                        !index || index === features.length - 1;
                    return (
                        <div
                            key={index}
                            className="service relative h-screen w-full text-white will-change-[contain] contain-paint">
                            <div
                                className="absolute w-full"
                                style={{
                                    // The height of middle items should cover the previous and next item
                                    height: isFirstAndLast ? `200vh` : "300vh",
                                    top: index ? `-100vh` : "0",
                                }}>
                                <div className="sticky top-0 isolate h-screen w-full">
                                    <div className="container flex h-full justify-between gap-x-[150px] py-[20vh]">
                                        <div className="flex flex-[668] flex-col justify-between">
                                            <div className="flex justify-between border-t border-t-white pt-2.5">
                                                <div>
                                                    <span className="fs-25-43">
                                                        0{index + 1}
                                                    </span>
                                                    /0
                                                    {features.length}
                                                </div>
                                                <p className="text-xs">
                                                    Number of products.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="mb-3 uppercase fs-38-56">
                                                    {title}
                                                </h3>
                                                <p className="fs-17-20">
                                                    {subtitle}
                                                </p>
                                            </div>

                                            <p className="text-2xl">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="flex-[768] bg-black">
                                            <img
                                                src={img}
                                                alt={title}
                                                loading="lazy"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-img absolute inset-0 top-auto -z-10 brightness-50 grayscale will-change-transform">
                                <img
                                    src={img}
                                    alt={title}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;

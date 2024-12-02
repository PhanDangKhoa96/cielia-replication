"use client";

import Image from "next/image";
import React, {MouseEvent, useEffect, useRef} from "react";
import SectionHeader from "./SectionHeader";

const tiles = [
    {
        image: "/improve-1.jpeg",
        styles: {
            backgroundColor: "#D5D5D5 ",
            top: "22%",
            left: "28%",
            aspectRatio: 16 / 11,
            width: "15%",
        },
    },

    {
        image: "/improve-2.jpeg",
        styles: {
            backgroundColor: "#D5D5D5 ",
            top: "19%",
            left: "50%",
            width: "8%",
            aspectRatio: 9 / 11,
        },
    },

    {
        image: "/improve-3.jpeg",
        styles: {
            backgroundColor: "#EDEDED",
            top: "50%",
            left: "24%",
            width: "12%",
            aspectRatio: 4 / 3,
        },
    },
    {
        image: "/improve-4.jpeg",
        styles: {
            backgroundColor: "#E5E5E5 ",
            top: "71%",
            left: "26%",
            width: "12%",
            aspectRatio: 4 / 3,
        },
    },

    {
        image: "/improve-5.jpeg",
        styles: {
            backgroundColor: "#E5E5E5 ",
            top: "63%",
            left: "46%",
            width: "15%",
            aspectRatio: 4 / 3,
        },
    },

    {
        image: "/improve-6.jpeg",
        styles: {
            backgroundColor: "#EDEDED",
            top: "36%",
            left: "64%",
            width: "12%",
            aspectRatio: 4 / 6,
        },
    },

    {
        image: "/improve-7.jpeg",
        styles: {
            backgroundColor: "#F0F0F0",
            top: "71%",
            left: "73%",
            width: "6%",
            aspectRatio: 4 / 6,
        },
    },
    {
        image: "/improve-8.jpeg",
        styles: {
            backgroundColor: "#EDEDED",
            top: "54%",
            left: "82%",
            width: "10%",
            aspectRatio: 16 / 14,
        },
    },
    {
        image: "/improve-9.jpeg",
        styles: {
            backgroundColor: "#E9E9E9",
            top: "9%",
            left: "74%",
            width: "8%",
            aspectRatio: 9 / 10,
        },
    },
    {
        image: "/service-1.jpeg",
        styles: {
            backgroundColor: "#E5E5E5",
            top: "12%",
            left: "15%",
            width: "6%",
            aspectRatio: 9 / 12,
        },
    },
    {
        image: "/service-2.jpeg",
        styles: {
            backgroundColor: "#E1E1E1",
            top: "40%",
            left: "11%",
            width: "7%",
            aspectRatio: 10 / 16,
        },
    },

    {
        image: "/service-3.jpeg",
        styles: {
            backgroundColor: "#DDDDDD",
            top: "69%",
            left: "5%",
            width: "15%",
            aspectRatio: 20 / 16,
        },
    },
    {
        image: "/intro-1.jpg",
        styles: {
            backgroundColor: "#D5D5D5",
            top: "10%",
            left: "4%",
            width: "10%",
            aspectRatio: 16 / 23,
        },
    },
    {
        image: "/intro-2.jpg",
        styles: {
            backgroundColor: "#D9D9D9",
            top: "30%",
            left: "80%",
            width: "17%",
            aspectRatio: 16 / 9,
        },
    },
];

const Gallery = () => {
    const $backdrop = useRef<HTMLDivElement>(null);
    const vw = useRef(0);
    const vh = useRef(0);

    const handleOnMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const percentageX = ((mouseX / vw.current - 0.5) * -100) / 4;
        const percentageY = ((mouseY / vh.current - 0.5) * -100) / 4;

        $backdrop.current?.animate(
            {
                transform: `translateX(${percentageX}%) translateY(${percentageY}%)`,
            },
            {fill: "forwards", duration: 4000, easing: "ease"}
        );
    };

    const updateViewDimension = () => {
        vw.current = window.innerWidth;
        vh.current = window.innerHeight;
    };
    useEffect(() => {
        vw.current = window.innerWidth;
        vh.current = window.innerHeight;

        window.addEventListener("resize", updateViewDimension);

        return () => {
            window.removeEventListener("resize", updateViewDimension);
        };
    }, []);

    return (
        <section>
            <SectionHeader>Gallery</SectionHeader>
            <div className="relative grid h-screen place-items-center overflow-hidden bg-[#F6F6F6]">
                <div className="relative z-10 inline-block text-center text-gray-700">
                    <h1 className="text-gray-700 fs-38-56">Gallery</h1>
                </div>
                <div
                    className="absolute -bottom-[20vh] -left-[20vw] -right-[20vw] -top-[20vh]"
                    ref={$backdrop}>
                    <div
                        className="relative h-full w-full"
                        onMouseMove={handleOnMouseMove}>
                        {tiles.map((tile, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{...tile.styles}}
                                    className="absolute overflow-hidden rounded-2xl transition-transform duration-700 ease-out hover:scale-105">
                                    <div className="relative h-full w-full opacity-0 transition-all duration-700 ease-out hover:opacity-100">
                                        <img
                                            src={tile.image}
                                            className="h-full w-full object-cover"
                                            alt="Tile images"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

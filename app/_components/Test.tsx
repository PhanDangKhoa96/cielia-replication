"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React, {useRef} from "react";

// gsap.registerPlugin(ScrollTrigger);

const Test = () => {
    const ref = useRef(null);
    const square = useRef(null);
    useGSAP(
        () => {
            gsap.to(square.current, {
                x: 100,
                duration: 2,
                scrollTrigger: {
                    scrub: true,
                    markers: true,
                    trigger: ref.current,
                    start: "top center",
                    end: "bottom center",
                },
            });
        },
        {scope: ref}
    );

    return (
        <div className="grid h-screen place-items-center bg-red-400" ref={ref}>
            <div className="size-20 bg-black" ref={square}></div>
        </div>
    );
};

export default Test;

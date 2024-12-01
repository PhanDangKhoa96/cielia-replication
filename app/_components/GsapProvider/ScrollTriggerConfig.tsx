"use client";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLenis} from "lenis/react";
import {useEffect, useLayoutEffect} from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTriggerConfig() {
    const lenis = useLenis(ScrollTrigger.update);

    useEffect(() => {
        ScrollTrigger.clearScrollMemory("manual");

        return () => {
            ScrollTrigger.clearScrollMemory("manual");
        };
    }, []);

    useEffect(() => ScrollTrigger.refresh(), [lenis]);

    return null;
}

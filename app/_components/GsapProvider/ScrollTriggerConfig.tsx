"use client";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLenis} from "lenis/react";
import {useEffect, useLayoutEffect} from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTriggerConfig() {
    useLayoutEffect(() => {
        ScrollTrigger.clearScrollMemory("manual");
    }, []);

    const lenis = useLenis(ScrollTrigger.update);
    useEffect(() => ScrollTrigger.refresh(), [lenis]);

    return null;
}

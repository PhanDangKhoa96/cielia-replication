"use client";

import "lenis/dist/lenis.css";
import {ReactLenis} from "lenis/react";
import {PropsWithChildren} from "react";

export function LenisProvider({children}: PropsWithChildren) {
    return <ReactLenis root>{children}</ReactLenis>;
}

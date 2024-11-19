import type {Metadata} from "next";
import "./globals.css";
import {LenisProvider} from "./_components/LenisProvider";
import {GsapProvider} from "./_components/GsapProvider";
import localFont from "next/font/local";

export const metadata: Metadata = {
    title: "Khoa Phan Playground",
    description: "Khoa Phan's Playground",
};

const cabinetGrotesk = localFont({
    src: [
        {
            path: "./fonts/CabinetGrotesk-Thin.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/CabinetGrotesk-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/CabinetGrotesk-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/CabinetGrotesk-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/CabinetGrotesk-Extralight.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/CabinetGrotesk-Extrabold.otf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/CabinetGrotesk-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/CabinetGrotesk-Black.otf",
            weight: "900",
            style: "normal",
        },
    ],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cabinetGrotesk.className}>
            <body className={`antialiased`}>
                <LenisProvider>{children}</LenisProvider>
                <GsapProvider scrollTrigger />
            </body>
        </html>
    );
}

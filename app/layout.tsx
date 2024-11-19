import type {Metadata} from "next";
import "./globals.css";
import { LenisProvider } from "./_components/LenisProvider";
import { GsapProvider } from "./_components/GsapProvider";

export const metadata: Metadata = {
    title: "Khoa Phan Playground",
    description: "Khoa Phan's Playground",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <LenisProvider>{children}</LenisProvider>
                <GsapProvider scrollTrigger />
            </body>
        </html>
    );
}

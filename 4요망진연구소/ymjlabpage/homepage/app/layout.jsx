"use client";

import "./globals.css";
import Image from "next/image";
import { Navbar, Footer } from "../components";
import { usePathname } from "next/navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="en">
            <head />
            <body>
                <div className="bg-container">
                    {pathname === "/" && (
                        <div className="bgwrap">
                            <Image className="rotate-img" src="/images/Rectangle.svg" width={1200} height={500} quality={100} priority />
                        </div>
                    )}
                </div>
                <div className="wrap">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

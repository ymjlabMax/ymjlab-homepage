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
                <div className="wrap">
                    <div className="bg-container">
                        {pathname === "/" && (
                            <div className="bg-wrap">
                                <Image className="rotate-img" alt="메인이미지" src="/images/Rectangle.svg" width={1200} height={1200} quality={100} priority />
                            </div>
                        )}
                    </div>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

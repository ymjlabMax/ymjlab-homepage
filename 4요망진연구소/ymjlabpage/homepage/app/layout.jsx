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
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

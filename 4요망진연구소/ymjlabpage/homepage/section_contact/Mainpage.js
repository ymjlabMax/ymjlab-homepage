"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Mainpage = () => {
    return (
        <section>
            <div className="title">
                <h1>Contact</h1>
            </div>
            <form></form>
            <style jsx>{`
                section {
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 136px;
                }

                h1 {
                    font-weight: var(--bold);
                    font-size: 48px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: var(--font_500);
                    margin-bottom: 16px;
                }
                h2 {
                    font-size: 32px;
                    line-height: 40px;
                    color: #ffffff;
                }

                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .yellow-color {
                    color: #ffb800;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
};

export default Mainpage;

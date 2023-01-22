"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Mainpage.module.css";
import Metaverse from "../public/images/metaverse_bg.jpg";

const Mainpage = () => {
    const styling = {
        backgroundImage: `url('${Metaverse}')`,
        width: "100%",
        height: "100%",
    };

    return (
        <section>
            <div
                style={{
                    backgroundImage: `url(${Metaverse.src})`,
                    width: "100%",
                    height: "768px",
                    backgroundRepeat: "no-repeat",
                    zIndex: -1,
                    backgroundSize: "cover",
                }}
            >
                <div className="title">
                    <h1>메타버스</h1>
                </div>
            </div>
            <style jsx>{`
                section {
                    width: 100%;
                    height: 768px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    font-family: "Spoqa Han Sans Neo";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: #ffffff;
                }

                .title {
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
};

export default Mainpage;

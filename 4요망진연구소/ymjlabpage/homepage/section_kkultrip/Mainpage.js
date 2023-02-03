"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Mainpage.module.css";
import kkultrip_main from "../public/images/kkultrip_img/kkultrip_main.svg";

const Mainpage = () => {
    return (
        <section>
            <motion.div variants={navVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="title">
                    <h1>내가 신경쓰지 않아도 할인 받는</h1>
                    <h1>
                        <span className="yellow-color">꿀 같은</span> 여행 앱
                    </h1>
                </div>
            </motion.div>
            <div className="main-img-box">
                <Image src={kkultrip_main} alt="꿀트립 메인이미지" width={1000} height={1000} />
            </div>
            <style jsx>{`
                section {
                    width: 100vw;
                    height: var(--page_height);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 190px;
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

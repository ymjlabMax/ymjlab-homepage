"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Mainpage.module.css";
import Metaverse from "../public/images/kkultrip_img/kkultrip_main.png";

const Mainpage = () => {
    return (
        <section>
            <div className={styles.bgWrap}>
                <Image
                    alt="Mountains"
                    src={Metaverse}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100%"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="title">
                <h1>내가 신경쓰지 않아도</h1>
                <h2>할인 받는 꿀 같은 여행 앱</h2>
                <p>관광데이터 기반 사후정산 솔류션 꿀트립</p>
            </div>

            <style jsx>{`
                section {
                    width: 100%;
                    height: var(--page_height);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    font-weight: var(--bold);
                    font-size: 32px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: var(--white);
                }
                h2 {
                    font-size: 32px;
                    line-height: 40px;
                    color: #ffffff;
                }

                .bg-img {
                    object-fit: cover;
                    object-position: "center";
                }

                .title {
                    position: absolute;
                    z-index: 1;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
};

export default Mainpage;

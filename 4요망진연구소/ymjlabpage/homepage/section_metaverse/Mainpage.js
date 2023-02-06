"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Mainpage.module.css";
import metaverse_main from "../public/images/metaverse_img/metaverse_main_img2x1.svg";

const Mainpage = () => {
    return (
        <section>
            <div className={styles.bgWrap}>
                <Image
                    alt="Mountains"
                    src={metaverse_main}
                    // placeholder="blur"
                    quality={100}
                    fill
                    sizes="100%"
                    // style={{
                    //     objectFit: "cover",
                    // }}
                />
            </div>
            <div className="title">
                <h1>메타버스 에이전시</h1>
                <h2>공공 및 기업을 위한 메타버스 마케팅 솔루션 </h2>
            </div>

            <style jsx>{`
                section {
                    /* width: 100vw; */
                    height: 768px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: "Spoqa Han Sans Neo";
                    font-style: normal;
                }

                h1 {
                    font-family: "Spoqa Han Sans Neo";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 72px;
                    line-height: 90px;
                    letter-spacing: -0.015em;
                    color: #ffffff;
                    /* border: 0.5px solid #ffffff; */
                    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
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

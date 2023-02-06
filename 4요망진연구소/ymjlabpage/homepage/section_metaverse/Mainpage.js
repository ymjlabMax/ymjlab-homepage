"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Mainpage.module.css";
import metaverse_main from "../public/images/metaverse_img/metaverse_main_img.svg";

const Mainpage = () => {
    return (
        <section>
            <div className={styles.bgWrap}>
                <div className="img-box-pc">
                    <Image
                        alt="메타버스메인이미지"
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
                <div className="img-box-mol">
                    <Image
                        alt="메타버스메인이미지"
                        src={metaverse_main}
                        // placeholder="blur"
                        quality={100}
                        fill
                        sizes="100%"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
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
                    font-weight: 700;
                    font-size: 72px;
                    line-height: 90px;
                    letter-spacing: -0.015em;
                    color: #ffffff;
                    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                }
                h2 {
                    font-size: 32px;
                    line-height: 40px;
                    color: #ffffff;
                    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
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
                    justify-content: flex-start;
                    align-items: center;
                }
                .img-box-mol {
                    display: none;
                }

                @media only screen and (max-width: 1300px) {
                    h1 {
                        font-size: 72px;
                    }
                    .img-box-pc {
                        display: none;
                    }

                    .img-box-mol {
                        display: block;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .title {
                        width: auto;
                    }

                    h1 {
                        font-weight: 700;
                        font-size: 32px;
                        line-height: 90px;
                        letter-spacing: -0.015em;
                        color: #ffffff;
                        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                    }
                    h2 {
                        font-size: 18px;
                        line-height: 40px;
                        color: #ffffff;
                        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                    }
                }
            `}</style>
        </section>
    );
};

export default Mainpage;

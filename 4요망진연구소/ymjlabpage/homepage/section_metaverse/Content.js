"use client";

import { motion } from "framer-motion";
import { navVariants, fadeIn, staggerContainer } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import { MetaverseContentInfo } from "../constants";

export default function Content() {
    return (
        <section>
            <motion.div className="section-box" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                {MetaverseContentInfo.map((el, index) => (
                    <motion.div key={index} variants={fadeIn("right", "tween", index * 0.5, 0.5)}>
                        <div className="meta-content-box">
                            <div className="meta-content-box-title">
                                <h1>{el.title}</h1>
                                <h2>{el.subtitle}</h2>
                            </div>
                            <div className="meta-content-box-img">
                                <Image src={el.url} width={270} height={280} alt="맞춤형" />
                            </div>
                            <div className="meta-content-box-content">{el.content}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <style jsx>{`
                section {
                    width: 100%;
                    height: 562px;
                    background: #4d3e59;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 200px;
                }

                .meta-content-box {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    width: 360px;
                    height: 360px;
                    background: #ffffff;
                    border: 1px solid #f2f2f2;
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    border-radius: 24px;
                    padding: 16px 24px 16px 24px;
                    margin: 0 8px 0 8px;
                    overflow: hidden;
                }
                .meta-content-box-title > h1 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    color: #181818;
                    margin-bottom: 4px;
                }
                .meta-content-box-title > h2 {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                    color: #181818;
                    margin-bottom: 8px;
                }

                .meta-content-box-img {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 8px;
                }

                .meta-content-box-content {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 15px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #181818;
                }

                .meta-content-box-content-box {
                    width: 100%;
                }
                /* 테블릿 사이즈 */
                @media only screen and (max-width: 1300px) {
                    section {
                        height: auto;
                        padding: 80px 0 80px 0;
                    }

                    .content-wrap {
                        flex-direction: column;
                    }
                    .meta-content-box {
                        margin-bottom: 32px;
                    }
                }
                /* 휴대폰 사이즈 */
                @media only screen and (max-width: 600px) {
                    .content-wrap {
                        flex-direction: column;
                        height: 1000px;
                    }
                    .meta-content-box {
                        margin-bottom: 32px;
                        width: 300px;
                        height: 330px;
                    }
                }
            `}</style>
        </section>
    );
}

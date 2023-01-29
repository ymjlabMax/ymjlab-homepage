"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Servicepage = () => (
    <section>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <motion.h1 variants={textVariant(0.5)}>
                <div className="title">요망진연구소 서비스</div>
            </motion.h1>
            <div className="first-box">
                <motion.div variants={slideIn("left", "tween", 0.1, 0.5)}>
                    <div className="kkultrip-left">
                        <div className="side-img">
                            <Image src="/images/img_mountain.svg" width={300} height={300} alt="꿀트립 사이드 이미지" />
                        </div>
                        <div>
                            <Image src="/images/mockup_trip_bg.gif" width={200} height={200} alt="꿀트립 이미지" />
                        </div>
                    </div>
                </motion.div>
                <div className="right">
                    <motion.div variants={slideIn("right", "tween", 0.1, 1)}>
                        <h3>꿀트립 서비스</h3>
                        <p>관광데이터 기반 사후정산 솔루션</p>
                        <Link href="/kkultrip">
                            <button>꿀트립 알아보기</button>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className="second-box">
                <div className="meta-left">
                    <motion.div variants={slideIn("left", "tween", 0.1, 1)}>
                        <h3>메타버스 에이전시 서비스</h3>
                        <p>공공 및 기업을 위한 메타버스 마케팅 솔루션</p>
                        <Link href="/metaverse">
                            <button>메타버스 알아보기</button>
                        </Link>
                    </motion.div>
                </div>

                <div className="right">
                    <motion.div variants={slideIn("right", "tween", 0.1, 1)}>
                        <Image src="/images/metaverse_img.svg" width={500} height={700} alt="메타버스 이미지" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
        <style jsx>{`
            section {
                /* width: 100%; */
                height: 1000px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                overflow: hidden;
                margin-bottom: var(--section-margin);
            }
            .title {
                font-weight: var(--bold);
                font-size: var(--font_32);
                line-height: 40px;
                /* identical to box height */
                letter-spacing: -0.015em;
                /* f_500 */
                color: var(font_500);
                text-align: center;
                margin-bottom: var(--component-margin);
            }
            h3 {
                font-weight: 700;
                font-size: 24px;
                letter-spacing: -0.015em;
                text-align: left;
            }

            p {
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 10px;
            }

            .first-box {
                display: flex;
                justify-content: center;
                margin-bottom: var(--component-margin);
            }

            .second-box {
                display: flex;
                justify-content: center;
            }

            .right {
                display: flex;
                flex-direction: column;
                /* align-items: center; */
                justify-content: center;
                margin-left: 50px;
            }

            button {
                width: 240px;
                height: 56px;
                background: ##ffffff;
                border: 1px solid #ff8f0b;
                border-radius: 6px;
                color: #ff8f0b;
                /* margin: 0 50px 30px 50px; */
            }

            button:hover {
                background: #ff8f0b;
                border: 2px solid #ff8f0b;
                color: #ffffff;
                transition: all 0.3s;
            }

            .active {
                background: #ff8f0b;
                border: 1px solid #ff8f0b;
                color: #ffffff;
            }

            .main_color {
                color: #ff8f0b;
            }

            .meta-left {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                margin-left: 50px;
            }

            .kkultrip-left {
                display: flex;
            }

            .side-img {
                display: flex;
                justify-content: flex-end;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Servicepage;

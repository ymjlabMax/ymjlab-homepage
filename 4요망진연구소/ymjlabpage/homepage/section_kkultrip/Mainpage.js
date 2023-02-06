"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import Image from "next/image";
import kkultrip_main from "../public/images/kkultrip_img/img_b_bg_kt.svg";
import { TypingText } from "../components";

const Mainpage = () => {
    return (
        <motion.div className="section-box-col" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <section>
                <div className="main-img-box">
                    <Image src={kkultrip_main} alt="꿀트립 메인이미지" width={800} height={1000} />
                </div>
                <div className="title">
                    <h1>꿀 같은 여행</h1>
                    <h1>더 달콤하게 누리세요!</h1>
                    <TypingText className="sub-title" title="신경쓰지 않아도 할인받은 꿀같은 여행앱" />
                    <div className="width-div">&nbsp;</div>
                </div>
                <style jsx>{`
                    section {
                        width: 100vw;
                        height: var(--page_height);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        background: #fff8dd;
                    }
                    .main-img-box {
                        position: relative;
                        margin-top: 230px;
                    }
                    .title {
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: 120px;
                        z-index: 10;
                    }
                    .width-div {
                        width: 900px;
                    }

                    h1 {
                        font-family: "Gmarket Sans";
                        font-style: normal;
                        font-weight: 800;
                        font-size: 60px;
                        line-height: 40px;
                        letter-spacing: -0.015em;
                        color: var(--font_500);
                        margin-bottom: 16px;
                        font-stretch: expanded;
                    }

                    @media only screen and (max-width: 900px) {
                        .width-div {
                            display: none;
                        }

                        h1 {
                            font-size: 48px;
                        }
                    }

                    @media only screen and (max-width: 600px) {
                        section {
                            height: auto;
                            padding-bottom: 100px;
                        }

                        h1 {
                            font-size: 32px;
                            line-height: 22px;
                        }
                    }
                `}</style>
            </section>
        </motion.div>
    );
};

export default Mainpage;

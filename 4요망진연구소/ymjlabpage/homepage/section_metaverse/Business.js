"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";
import { TypingText } from "../components";

export default function Business() {
    return (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
            <section>
                <div className="business-wrap">
                    <div className="left-box">
                        <h1>
                            <TypingText title="비지니스 모델" />
                        </h1>
                        <motion.div variants={fadeIn("right", "tween", 0.5, 0.5)}>
                            <div className="content-box">
                                <p>메타버스 플랫폼 컨설팅 및 메타버스 공간 구현, 규격화 된 메타버스 Asset</p>
                                <p>렌탈, 메타버스 공간 운영 및 홍보 등 토탈 서비스 제공</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="right-box">
                        <motion.div variants={fadeIn("left", "tween", 1, 0.5)}>
                            <Image src="/images/metaverse_img/img_business_meta.svg" alt="메타버스 비지니스 모델" width={600} height={700} />
                        </motion.div>
                    </div>
                </div>
                <div className="business-wrap">
                    <div className="left-box">
                        <motion.div variants={fadeIn("right", "tween", 1, 0.5)}>
                            <Image src="/images/metaverse_img/img_strategy_meta.svg" alt="메타버스 사업 확장 전략" width={600} height={700} />
                        </motion.div>
                    </div>
                    <div className="right-box">
                        <h1 className="pull-right">
                            <TypingText title="사업 확장 전략" />
                        </h1>
                        <motion.div variants={fadeIn("left", "tween", 0.5, 0.5)}>
                            <div className="content-box">
                                <p>
                                    공공 및 기업을 위한 맞춤형 메타버스 개발과 중소 영세사업자를 위한 규격형메타버스 렌탈을 통해 유형별 다양한 메타버스 서비스를
                                    제공할 수 있는 에이전시 서비스로 자리매김
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <style jsx>{`
                    section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .business-wrap {
                        display: flex;
                        justify-content: center;
                        margin: 0 0 200px 0;
                    }

                    .left-box {
                        display: flex;
                        flex-direction: column;
                    }
                    .right-box {
                        padding-left: 100px;
                    }
                    h1 {
                        font-weight: var(--bold);
                        font-size: var(--font_40);
                        line-height: 50px;
                        display: flex;
                        align-items: center;
                        color: var(--font_500);
                        margin-bottom: 18px;
                    }
                    p {
                        font-weight: var(--regular);
                        font-size: var(--font_18);
                        line-height: 32px;
                        color: var(--font_500);
                    }
                    span {
                        color: var(--main_orange);
                    }
                    .content-box {
                        width: 600px;
                        line-height: 23px;
                    }

                    .pull-right {
                        justify-content: flex-end;
                    }

                    @media only screen and (max-width: 600px) {
                    }
                `}</style>
            </section>
        </motion.div>
    );
}

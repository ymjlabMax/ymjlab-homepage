"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

import { TypingText } from "../components";

export default function Business() {
    return (
        <section>
            <motion.div className="section-box-col" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                <div className="business-wrap">
                    <motion.div variants={fadeIn("right", "tween", 0.1, 0.5)}>
                        <div className="left-box">
                            <h1>
                                <TypingText title="비지니스 모델" />
                            </h1>
                            <div className="content-box">
                                <p>
                                    여행객에게 관광지정보와 할인혜택을 제공하여 자연스럽게 얻어진 관광 소비정보 데이터를 지자체 또는 관광기업에게 제공합니다.{" "}
                                </p>
                                <p>
                                    관광 소비정보 데이터로 검증된 소비효과를 통해 지자체 및 관광기업이 지속적인 관광홍보 예산 및 보조금을 제공, 할인 혜택을 지속
                                    제공합니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn("left", "tween", 0.1, 0.5)}>
                        <div className="right-box">
                            <Image src="/images/kkultrip_img/img_business_kt.svg" alt="꿀트립 앱 이미지" width={600} height={700} />
                        </div>
                    </motion.div>
                </div>
                <div className="business-wrap2">
                    <motion.div variants={fadeIn("right", "tween", 0.1, 0.5)}>
                        <div className="left-box">
                            <Image src="/images/kkultrip_img/img_strategy_kt.svg" alt="꿀트립 앱 이미지" width={600} height={700} />
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn("left", "tween", 0.1, 0.5)}>
                        <div className="right-box">
                            <h1 className="pull-right">
                                <TypingText title="사업 확장 전략" />
                            </h1>
                            <div className="content-box">
                                <p>
                                    꿀트립 서비스의 할인혜택을 통한 관광 소비데이터 수집으로 보다 양질의 빅데이터 기반 분석을 통해 관광상품 개발/판매, 빅데이터
                                    분석 리포트, AI 서비스 등을 수익모델로 확대 마련하여 스마트관광 서비스로서의 데이터, 기술 기반 서비스로 확대해 나아가고자
                                    합니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
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
                .business-wrap2 {
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
                    font-size: var(--font_32);
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
                @media only screen and (max-width: 1030px) {
                    .business-wrap {
                        flex-direction: column;
                        align-items: center;
                    }
                    .business-wrap2 {
                        flex-direction: column-reverse;
                        align-items: center;
                    }
                    .left-box {
                        margin-bottom: 32px;
                    }
                    .right-box {
                        margin-bottom: 32px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .business-wrap {
                        flex-direction: column;
                        align-items: center;
                    }
                    .business-wrap2 {
                        flex-direction: column-reverse;
                        align-items: center;
                    }
                    .left-box {
                        margin-bottom: 32px;
                    }
                    .right-box {
                        margin-bottom: 32px;
                    }
                }
            `}</style>
        </section>
    );
}

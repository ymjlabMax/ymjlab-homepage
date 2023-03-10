"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText } from "../components";

import Summary from "./Companypage/summary";
import Affiliation from "./Companypage/Affiliation";
import Partner from "./Companypage/Partner";
import History from "./Companypage/History.js";

export default function Companypage() {
    const [companyInfo, setCompanyInfo] = useState("Summary");

    const companyInfoHandler = (choice) => {
        setCompanyInfo(choice);
    };

    return (
        <section id="content">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                <div className="title">
                    <TypingText title="요망진연구소 소개" />
                </div>
                <motion.div variants={fadeIn("up", "tween", 0.1, 0.5)}>
                    <div className="content-box">
                        <p>
                            우리는 스마트관광 산업에 획기적인 변화를 이끌고, 새로운 가치를 창출하기 위해 관광 소비데이터를 활용한 AI Holistic benefit 서비스를
                            제공하고자 합니다.
                        </p>
                        <p>이를 위하여 정체되고 낙후된 관광지 할인 쿠폰 분야를 혁신하고, </p>
                        <p>실시간 관광객 소비데이터를 수집/분석/활용 할 수 있는 시스템을 구축하여 관광객 편의 중심의 스마트관광 솔루션을 개발하고 있습니다.</p>
                    </div>
                    <div className="btn-list">
                        <button
                            className={companyInfo === "Summary" && "active"}
                            onClick={() => {
                                companyInfoHandler(() => "Summary");
                            }}
                        >
                            개요
                        </button>
                        <button
                            className={companyInfo === "History" && "active"}
                            onClick={() => {
                                companyInfoHandler(() => "History");
                            }}
                        >
                            연혁
                        </button>
                        <button
                            className={companyInfo === "Affiliation" && "active"}
                            onClick={() => {
                                setCompanyInfo(() => "Affiliation");
                            }}
                        >
                            소속
                        </button>
                        <button
                            className={companyInfo === "Partner" && "active"}
                            onClick={() => {
                                setCompanyInfo(() => "Partner");
                            }}
                        >
                            파트너
                        </button>
                    </div>
                    <div>
                        {companyInfo === "Summary" && <Summary />}
                        {companyInfo === "History" && <History />}
                        {companyInfo === "Affiliation" && <Affiliation />}
                        {companyInfo === "Partner" && <Partner />}
                    </div>
                </motion.div>
            </motion.div>
            <style jsx>{`
                section {
                    /* width: 100%; */
                    /* height: 768px; */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 50px;
                    margin-bottom: 150px;
                }
                .title {
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: #181818;
                    text-align: center;
                    margin-bottom: var(--title-margin);
                }
                .content-box {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    text-align: center;
                    letter-spacing: -0.015em;
                    color: #181818;
                    margin-bottom: var(--component-margin);
                }
                .btn-list {
                    display: flex;
                    justify-content: center;
                }
                button {
                    width: 190px;
                    height: 56px;
                    background: #ffffff;
                    border: 1px solid #ff8f0b;
                    border-radius: 6px;
                    color: #ff8f0b;
                    margin: 0 40px 30px 50px;
                }

                button:hover {
                    background: #ff8f0b;
                    border: 1px solid #ff8f0b;
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
                /* 테블릿 사이즈 */
                @media only screen and (max-width: 1060px) {
                    .content-box {
                        width: auto;
                        padding: 0 16px 0 16px;
                        font-size: 14px;
                        margin-bottom: 40px;
                    }

                    button {
                        width: 100px;
                        height: 46px;
                        margin: 0 20px 30px 20px;
                        font-size: 14px;
                    }
                }
                /* 휴대폰 사이즈 */
                @media only screen and (max-width: 600px) {
                    .container {
                        text-align: left;
                    }

                    .content-box {
                        font-size: 14px;
                        text-align: left;
                    }

                    button {
                        width: 70px;
                        height: 40px;
                        margin: 0 10px 30px 10px;
                    }
                }
            `}</style>
        </section>
    );
}

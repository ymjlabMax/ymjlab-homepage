"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navVariants, staggerContainer, textVariant } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

import Summary from "./Companypage/summary";
import Affiliation from "./Companypage/Affiliation";
import Partner from "./Companypage/Partner";
import History from "./Companypage/History.js";

// import { Summary, Affiliation, Partner, History } from "./Companypage";

export default function Companypage() {
    const [companyInfo, setCompanyInfo] = useState("Summary");

    const companyInfoHandler = (choice) => {
        setCompanyInfo(choice);
    };

    return (
        <section id="content">
            <div className="title">요망진연구소 소개</div>
            <content className="content">
                <p>
                    우리는 스마트관광 산업에 획기적인 변화를 이끌고, 새로운 가치를 창출하기 위해 관광 소비데이터를 활용한 AI Holistic benefit 서비스를
                    제공하고자 합니다.
                </p>
                <p>이를 위하여 정체되고 낙후된 관광지 할인 쿠폰 분야를 혁신하고, 실시간 관광객 소비데이터를 수집/분석/활용 할 수 있는 시스템을 구축하여</p>
                <p> 관광객 편의 중심의 스마트관광 솔루션을 개발하고 있습니다.</p>
            </content>
            <div className="btn_list">
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
            <style jsx>{`
                section {
                    width: 100%;
                    height: 768px;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    font-family: "Spoqa Han Sans Neo";
                    font-style: normal;
                }
                .title {
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    /* identical to box height */
                    letter-spacing: -0.015em;
                    /* f_500 */
                    color: #181818;
                    text-align: center;
                }
                .content {
                    margin-top: 32px;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    text-align: center;
                    /* letter-spacing: -0.015em; */
                    /* f_500 */
                    color: #181818;
                }
                .btn_list {
                    display: flex;
                    justify-content: center;
                    margin-top: 80px;
                }
                button {
                    width: 190px;
                    height: 56px;
                    background: ##ffffff;
                    border: 1px solid #ff8f0b;
                    border-radius: 6px;
                    color: #ff8f0b;
                    margin: 0 50px 30px 50px;
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

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Locationpage = () => (
    <section>
        <div className="title">요망진연구소 찾아오시는길</div>
        <div>
            <div className="left-box">
                <p>
                    <span>회 사 명</span>
                    &nbsp;&nbsp;&nbsp;주식회사 요망진 연구소
                </p>
                <p>
                    <span>대표 이사</span>
                    &nbsp;&nbsp;&nbsp;최성기
                </p>
                <p>
                    <span>주요서비스</span>
                    &nbsp;&nbsp;&nbsp;관광 소비데이터 기반 사후정산 서비스 {`"꿀트립", 에이전시 서비스 "UMH"`} 등
                </p>
                <p>
                    <span>주요 사업</span>
                    &nbsp;&nbsp;&nbsp;서비스(꿀트립, 메타버스 에이전시 마케팅)및 콘텐츠 개발
                </p>
                <p>
                    <span>설 립 일</span>
                    &nbsp;&nbsp;&nbsp;2020년 12월 23일
                </p>
                <p>
                    <span>직 원 수</span>
                    &nbsp;&nbsp;&nbsp;10명 (2022.11 기준)
                </p>
            </div>
            <div className="right-box"></div>
        </div>

        <style jsx>{`
            section {
                margin-top: 100px;
                width: 100%;
                /* height: 768px; */
                display: flex;
                justify-content: center;
                align-items: center;
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
                margin-bottom: 70px;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Locationpage;

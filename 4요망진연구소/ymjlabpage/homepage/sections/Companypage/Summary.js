"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Summary = () => (
    <section>
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
        <div className="right-box">
            <img src="/images/summary_img.svg" alt="개요 이미지" />
        </div>

        <style jsx>{`
            section {
                width: 100%;
                height: 360px;
                display: flex;
                justify-content: center;
                font-family: "Spoqa Han Sans Neo";
                font-style: normal;
                font-size: 16px;

                padding: 0 50px 0 50px;
            }
            .left-box {
                display: flex;
                flex-direction: column;
                /* justify-content: center;
                align-items: center; */
                width: 60%;
                height: 100%;
                padding: 30px 0 0 200px;
                line-height: 20px;
            }
            .right-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40%;
                height: 100%;
                padding-right: 100px;
            }
            span {
                font-weight: 700;
            }
            p {
                margin: 12px 12px 12px 12px;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Summary;

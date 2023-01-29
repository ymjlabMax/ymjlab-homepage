"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";

export default function Summary() {
    return (
        <section>
            <div className="left-box">
                <h1>관광데이터 기반 사후 정산 솔루션</h1>
                <p>꿀트립서비시는 정체되고 낙후된 관광지 할인 쿠폰 서비스를</p>
                <p>관광객 편의 중심으로 혁신하고 실시간 관광객의 소비 데이터를 </p>
                <p>수집/분석/활용하는 스마트관광 빅데이터 서비스 입니다.</p>
                <div className="btn-container">
                    <div className="btn-box">Asset</div>
                    <div className="btn-box">world</div>
                </div>
            </div>
            <div className="right-box">
                <div className="map-box"></div>
            </div>
            <style jsx>{`
                section {
                    width: 100%;
                    height: var(--page_height);
                    display: flex;
                    justify-content: center;
                }
                .left-box {
                    width: 50%;
                    height: 100%;
                    line-height: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .right-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height: 100%;
                }

                span {
                    font-weight: 700;
                }
                .map-box {
                    width: 500px;
                    height: 490px;
                    background: #eeeeee;
                }

                h1 {
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: #181818;
                    margin-bottom: 10px;
                }

                .btn-container {
                    display: flex;
                    margin-top: 54px;
                }

                .btn-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 200px;
                    height: 105px;
                    border: 1px solid #181818;
                    margin-right: 10px;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

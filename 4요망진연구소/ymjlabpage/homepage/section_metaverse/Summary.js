"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";

export default function Summary() {
    return (
        <section>
            <div className="left-box">
                <h1>Unified Metaverse Hub One Source </h1>
                <p>
                    메타버스 시대에 공공 및 기업이 메타버스를 활용한 새로운 비즈니스 영역으로 효과적으로 진입할 수 있도록 UMH 기반 메타버스 마케팅 솔루션을
                    제공합니다.
                </p>
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
                    margin-bottom: 100px;
                    width: 100%;
                    height: 768px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 190px 255px 150px 255px;
                }
                .left-box {
                    /* display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center; */
                    width: 50%;
                    height: 100%;
                    line-height: 20px;
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

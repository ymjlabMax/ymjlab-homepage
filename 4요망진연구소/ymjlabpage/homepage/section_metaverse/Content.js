"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";

export default function Content() {
    return (
        <section>
            <div className="title">
                <h1>
                    국내외 유명 메타버스 플랫폼에 대한 철저한 분석과 개발툴 분석, Asset 개발 등을 통해 공공 및 기업의 디지털 마케팅 신시장 개척을 위한 메타버스
                    공간 개발은 물론 규격형 메타버스 렌탈을 통한 빠르고 저렴한 메타버스 보급, 메타버스를 활용한 홍보·마케팅 솔루션을 제공하여 성공적인 메타버스
                    시대로의 진입을 돕습니다.
                </h1>
            </div>
            <div className="content-wrap">
                <div className="content-box">
                    <h3></h3>
                    <div></div>
                </div>
            </div>
            <style jsx>{`
                section {
                    padding: 60px 255px 60px 255px;
                    width: 100%;
                    height: 768px;
                    display: flex;
                    justify-content: center;
                    background: #4d3e59;
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
                .title {
                    padding: 0 100px 0 100px;
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
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: #ffffff;
                }

                .content-wrap {
                    display: flex;
                    margin-top: 120px;
                }

                .content-box {
                    margin-right: 15px;
                    background: #ffffff;
                    width: 300px;
                    height: 300px;
                }

                .btn-box {
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

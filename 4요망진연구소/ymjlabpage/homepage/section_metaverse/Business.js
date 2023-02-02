"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function Business() {
    return (
        <section>
            <div className="business-wrap">
                <div className="left-box">
                    <h1>비지니스 모델</h1>
                    <div className="content-box">
                        <p>메타버스 플랫폼 컨설팅 및 메타버스 공간 구현, 규격화 된 메타버스 Asset</p>
                        <p>렌탈, 메타버스 공간 운영 및 홍보 등 토탈 서비스 제공</p>
                    </div>
                </div>
                <div className="right-box">
                    <Image src="/images/metaverse_img/img_business_meta.svg" alt="메타버스 비지니스 모델" width={600} height={700} />
                </div>
            </div>
            <div className="business-wrap">
                <div className="left-box">
                    <Image src="/images/metaverse_img/img_strategy_meta.svg" alt="메타버스 사업 확장 전략" width={600} height={700} />
                </div>
                <div className="right-box">
                    <h1 className="pull-right">사업 확장 전략</h1>
                    <div className="content-box">
                        <p>
                            공공 및 기업을 위한 맞춤형 메타버스 개발과 중소 영세사업자를 위한 규격형메타버스 렌탈을 통해 유형별 다양한 메타버스 서비스를 제공할
                            수 있는 에이전시 서비스로 자리매김
                        </p>
                    </div>
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
    );
}

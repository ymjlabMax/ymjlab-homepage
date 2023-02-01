"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import { MetaverseSummaryInfo } from "../constants";

export default function Summary() {
    return (
        <section>
            <div className="left-box">
                <h1>Unified Metaverse Hub One Source</h1>
                <div className="content-box">
                    <p>메타버스 시대에 공공 및 기업이 메타버스를 활용한 새로운 비즈니스 영역으로 </p>
                    <p>효과적으로 진입할 수 있도록 UMH 기반 메타버스 마케팅 솔루션을 제공합니다.</p>
                </div>
                <div className="summary-wrap">
                    {MetaverseSummaryInfo.map((el, index) => (
                        <div key={index} className="summary-box">
                            <Image src={el.url} alt={el.content} width={170} height={170} />
                            <p>{el.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-box">
                <Image src="/images/metaverse_img/big_building_meta.svg" alt="꿀트립 앱 이미지" width={500} height={200} />
            </div>
            <style jsx>{`
                section {
                    height: var(--page_height);
                    display: flex;
                    justify-content: center;
                    padding: 200px 0 100px 0;
                    margin-bottom: 100px;
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
                    line-height: 23px;
                    color: var(--font_500);
                }

                .summary-wrap {
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                }

                .summary-box {
                    width: 180px;
                    height: 180px;
                    /* background: var(--white);
                    border: 1px solid var(--gray_100);
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    border-radius: 24px; */
                    margin: 96px 16px 0 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 8px 8px 8px 8px;
                }

                .summary-box > p {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    text-align: center;
                    color: #181818;
                    margin-top: 24px;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

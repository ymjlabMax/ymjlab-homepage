"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import { KkultripSummaryInfo } from "../constants";

export default function Summary() {
    return (
        <section>
            <div className="left-box">
                <h1>관광데이터 기반 사후 정산 솔루션</h1>
                <p>꿀트립서비시는 정체되고 낙후된 관광지 할인 쿠폰 서비스를</p>
                <p>
                    <span>관광객 편의 중심</span>으로 혁신하고 실시간 관광객의 소비 데이터를{" "}
                </p>
                <p>
                    수집/분석/활용하는 <span>스마트관광 빅데이터 서비스</span> 입니다.
                </p>
                <div className="summary-box">
                    {KkultripSummaryInfo.map((el, index) => (
                        <div className="item-box" key={index}>
                            <Image src={el.url} width={40} height={40} alt={el.content} />
                            <p className="item-content">{el.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-box">
                <Image src="/images/kkultrip_img/kkultrip_phone.svg" alt="꿀트립 앱 이미지" width={200} height={200} />
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
                    padding-left: 176px;
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

                span {
                    color: var(--main_orange);
                }

                .summary-box {
                    display: grid;
                    grid-template-columns: repeat(2, 220px);
                    grid-template-rows: repeat(2, 70px);
                    margin-top: 100px;
                }

                .item-box {
                    display: flex;
                    align-items: center;
                    padding: 10px 10px 10px 10px;
                }
                .item-content {
                    margin-left: 8px;
                    font-style: normal;
                    font-weight: var(--medium);
                    font-size: var(--font_20);
                    line-height: 25px;
                    color: var(--font_400);
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

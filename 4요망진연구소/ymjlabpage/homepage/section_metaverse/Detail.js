"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import { MetaverseDetail_1, MetaverseDetail_2, MetaverseDetail_3 } from "../constants";

export default function Detail() {
    return (
        <section>
            {/* {MetaverseContentInfo.map((el, index) => (
                <div key={index} className="meta-content-box">
                    <div className="meta-content-box-title">
                        <h1>{el.title}</h1>
                        <h2>{el.subtitle}</h2>
                    </div>
                    <div className="meta-content-box-img">
                        <Image src={el.url} width={270} height={280} alt="맞춤형" />
                    </div>
                    <div className="meta-content-box-content">{el.content}</div>
                </div>
            ))} */}

            <div className="detail-box">
                <div className="detail-title">
                    <h1>맞춤형</h1>
                    <h2>메타버스 맞춤 개발</h2>
                </div>
                <div className="detail-content-box">
                    {MetaverseDetail_1.map((el, index) => (
                        <div key={index} className="detail-content-box-content">
                            <Image src="/images/metaverse_img/check.svg" width={20} height={20} alt="확인" />
                            <p>{el.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="detail-box">
                <div className="detail-title">
                    <h1>규격형</h1>
                    <h2>메타버스 렌탈</h2>
                </div>
                <div className="detail-content-box">
                    {MetaverseDetail_2.map((el, index) => (
                        <div key={index} className="detail-content-box-content">
                            <Image src="/images/metaverse_img/check.svg" width={20} height={20} alt="확인" />
                            <p>{el.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="detail-box">
                <div className="detail-title">
                    <h1>홍보마케팅</h1>
                    <h2>메타버스 홍보·마케팅</h2>
                </div>
                <div className="detail-content-box">
                    {MetaverseDetail_3.map((el, index) => (
                        <div key={index} className="detail-content-box-content">
                            <Image src="/images/metaverse_img/check.svg" width={20} height={20} alt="확인" />
                            <p>{el.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                section {
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 200px 0 100px 0;
                }
                .detail-box {
                    box-sizing: border-box;
                    width: 1000px;
                    height: 324px;
                    left: 0px;
                    top: 0px;
                    background: #fafafa;
                    border: 1px solid #f2f2f2;
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    border-radius: 20px;
                    margin-bottom: 100px;
                    padding: 30px 90px 0 90px;
                }

                .detail-title {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 60px;
                }

                h1 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    color: #181818;
                }

                h2 {
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 30px;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.015em;
                    color: #181818;
                    margin-left: 8px;
                }
                .detail-content-box {
                    text-align: center;
                    display: grid;
                    grid-template-columns: repeat(2, 300px);
                    grid-template-rows: repeat(3, 24px);
                    gap: 20px 160px;
                }

                .detail-content-box-content {
                    width: 360px;
                    display: flex;
                }
                .detail-content-box-content > p {
                    margin-left: 16px;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 23px;
                    color: #181818;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

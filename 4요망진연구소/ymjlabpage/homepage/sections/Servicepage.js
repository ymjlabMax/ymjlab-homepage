"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Servicepage = () => (
    <section>
        <div className="title">요망진연구소의 서비스를 소개합니다.</div>
        <div className="first-box">
            <div className="left">
                <Image src="/images/kkultrip_img.svg" width={500} height={500} alt="꿀트립 이미지" />
            </div>
            <div className="right">
                <h3>꿀트립 서비스</h3>
                <p>관광데이터 기반 사후정산 솔루션</p>
                <Link href="/kkultrip">
                    <button>꿀트립 알아보기</button>
                </Link>
            </div>
        </div>
        <div className="second-box">
            <div className="meta-left">
                <h3>메타버스 에이전시 서비스</h3>
                <p>공공 및 기업을 위한 메타버스 마케팅 솔루션</p>
                <Link href="/metaverse">
                    <button>메타버스 알아보기</button>
                </Link>
            </div>
            <div className="right">
                <Image src="/images/metaverse_img.svg" width={500} height={700} alt="메타버스 이미지" />
            </div>
        </div>
        <style jsx>{`
            section {
                margin-top: 150px;
                width: 100%;
                height: 1536px;
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
            h3 {
                font-weight: 700;
                font-size: 24px;
                letter-spacing: -0.015em;
                text-align: left;
            }

            p {
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 10px;
            }

            .first-box {
                display: flex;
                justify-content: center;
                margin-top: 100px;
            }

            .second-box {
                display: flex;
                justify-content: center;
                margin-top: 100px;
            }

            .right {
                display: flex;
                flex-direction: column;
                /* align-items: center; */
                justify-content: center;
                margin-left: 50px;
            }

            button {
                width: 240px;
                height: 56px;
                background: ##ffffff;
                border: 1px solid #ff8f0b;
                border-radius: 6px;
                color: #ff8f0b;
                /* margin: 0 50px 30px 50px; */
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

            .meta-left {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Servicepage;

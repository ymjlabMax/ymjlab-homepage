"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Startpage = () => (
    <section>
        <div className="left-box">
            <content>
                <h1>요망진 연구소는</h1>
                <h1>
                    여행에 <span className="main-color">짐이 되지 않는 여행편의 서비스</span> 를
                </h1>
                <h1>제공하기 위해 노력하겠습니다. </h1>
            </content>
        </div>
        <div className="right-box">
            <Image src="/images/main_image.svg" alt="메인이미지" width={500} height={500} priority quality={100} />
        </div>

        <style jsx>{`
            section {
                width: 100%;
                height: 768px;
                display: flex;
                justify-content: center;
            }
            .bgWrap {
                position: fixed;
                /* overflow: hidden; */
                right: 0;
                left: 0;
                z-index: -3;
            }
            .circle {
                border-radius: 50%;
                border: 5px solid transparent;
                background-image: transparent, linear-gradient(#8acfc6, #6db8b6, #58a8ab, #4c9ea4, #489ba2);
                background-origin: border-box;
                background-clip: content-box, border-box;
            }
            .left-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
            }
            .right-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
            }
            h1 {
                font-family: "Spoqa Han Sans Neo";
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 40px;
                letter-spacing: -0.015em;
                color: #232323;
            }
            .main-color {
                color: #ff8f0b;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Startpage;

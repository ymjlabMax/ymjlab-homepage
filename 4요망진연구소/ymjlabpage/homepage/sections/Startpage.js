"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const Startpage = () => (
    <>
        <section>
            <div className="left-box">
                <div className="btn-12">
                    <content>
                        <h1>
                            요망지다라는 말은 <span className="main-color">&quot;똑똑하다, 야무지다&quot;</span>
                        </h1>
                        <h1>라는 의미의 제주도 방언 입니다.</h1>
                    </content>
                    <content>
                        <h1>요망진연구소는</h1>
                        <h1>
                            여행에 <span className="main-color">짐이 되지 않는 여행편의 서비스</span> 를
                        </h1>
                        <h1>제공하기 위해 노력하겠습니다. </h1>
                    </content>
                </div>
            </div>
            <div className="right-box">
                <Image src="/images/img_main.svg" alt="메인이미지" width={500} height={500} priority quality={100} />
            </div>
            <style jsx>{`
                section {
                    width: 100%;
                    height: var(--page_height);
                    display: flex;
                    justify-content: center;
                }

                .left-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height: 100%;
                    position: relative;
                }
                .right-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                h1 {
                    font-weight: var(--bold);
                    font-size: var(--font_32);
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: var(--font_500);
                }
                .main-color {
                    color: var(--main_orange);
                }

                .btn-12 {
                    width: 100%;
                    cursor: pointer;
                }
                .btn-12 content {
                    display: block;
                    position: absolute;
                    left: 20px;
                    top: 320px;
                    margin: 0;
                    text-align: left;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    -webkit-transition: all 0.5s;
                    transition: all 0.5s;
                }
                .btn-12 content:nth-child(1) {
                    /* box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001; */
                    -webkit-transform: rotateX(90deg);
                    -moz-transform: rotateX(90deg);
                    transform: rotateX(90deg);
                    -webkit-transform-origin: 50% 50% -20px;
                    -moz-transform-origin: 50% 50% -20px;
                    transform-origin: 50% 50% -20px;
                }
                .btn-12 content:nth-child(2) {
                    -webkit-transform: rotateX(0deg);
                    -moz-transform: rotateX(0deg);
                    transform: rotateX(0deg);
                    -webkit-transform-origin: 50% 50% -50px;
                    -moz-transform-origin: 50% 50% -50px;
                    transform-origin: 50% 50% -50px;
                }
                .btn-12:hover content:nth-child(1) {
                    -webkit-transform: rotateX(0deg);
                    -moz-transform: rotateX(0deg);
                    transform: rotateX(0deg);
                }
                .btn-12:hover content:nth-child(2) {
                    /* background: #e0e5ec;
                color: #e0e5ec; */
                    -webkit-transform: rotateX(-90deg);
                    -moz-transform: rotateX(-90deg);
                    transform: rotateX(-90deg);
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
        <div className="scroll-box">
            <AnchorLink offset={() => 30} href="#content">
                <Image className="scroll-img" src="/images/scroll.svg" width={40} height={40} alt="이동 스크롤" />
            </AnchorLink>
            <div>
                <p className="scroll-text">Scroll</p>
            </div>
            <style jsx>{`
                .scroll-text {
                    margin-top: 15px;
                    color: var(--disable);
                    font-size: var(--font_18);
                    font-weight: var(--regular);
                }
            `}</style>
        </div>
    </>
);

export default Startpage;

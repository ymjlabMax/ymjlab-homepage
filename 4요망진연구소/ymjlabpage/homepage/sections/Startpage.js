"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

import { usePathname } from "next/navigation";

export default function Startpage() {
    const pathname = usePathname();

    return (
        <>
            <section>
                <div className="left-box">
                    <div className="btn-12">
                        <div>
                            <h1>
                                요망지다라는 말은 <span className="main-color">&quot;똑똑하다, 야무지다&quot;</span>
                            </h1>
                            <h1>라는 의미의 제주도 방언 입니다.</h1>
                        </div>
                        <div>
                            <h1>요망진연구소는</h1>
                            <h1>
                                여행에 <span className="main-color">짐이 되지 않는 여행편의 서비스</span> 를
                            </h1>
                            <h1>제공하기 위해 노력하겠습니다. </h1>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <div className="bg-container">
                        <Image src="/images/img_main.svg" alt="메인이미지" width={600} height={600} priority quality={100} />
                        {pathname === "/" && (
                            <div className="bg-wrap">
                                <Image
                                    className="rotate-img"
                                    alt="메인이미지 동그라미"
                                    src="/images/Rectangle.svg"
                                    width={2000}
                                    height={2000}
                                    quality={100}
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </div>
                <style jsx>{`
                    section {
                        /* width: 100vw; */
                        height: var(--page_height);
                        display: flex;
                        justify-content: center;
                        z-index: -1;
                        /* padding: 0 100px 0 100px; */
                    }

                    .left-box {
                        width: 50%;
                        /* height: 100%; */
                        display: flex;
                        justify-content: flex-end;
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
                        /* width: 100%; */
                        cursor: pointer;
                        z-index: 999;
                    }
                    .btn-12 div {
                        display: block;
                        position: absolute;
                        left: 20px;
                        top: 330px;
                        margin: 0;
                        text-align: left;
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        -webkit-transition: all 0.5s;
                        transition: all 0.5s;
                    }
                    .btn-12 div:nth-child(1) {
                        /* box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001; */
                        -webkit-transform: rotateX(90deg);
                        -moz-transform: rotateX(90deg);
                        transform: rotateX(90deg);
                        -webkit-transform-origin: 50% 50% -20px;
                        -moz-transform-origin: 50% 50% -20px;
                        transform-origin: 50% 50% -20px;
                    }
                    .btn-12 div:nth-child(2) {
                        -webkit-transform: rotateX(0deg);
                        -moz-transform: rotateX(0deg);
                        transform: rotateX(0deg);
                        -webkit-transform-origin: 50% 50% -50px;
                        -moz-transform-origin: 50% 50% -50px;
                        transform-origin: 50% 50% -50px;
                    }
                    .btn-12:hover div:nth-child(1) {
                        -webkit-transform: rotateX(0deg);
                        -moz-transform: rotateX(0deg);
                        transform: rotateX(0deg);
                    }
                    .btn-12:hover div:nth-child(2) {
                        /* background: #e0e5ec;
                        color: #e0e5ec; */
                        -webkit-transform: rotateX(-90deg);
                        -moz-transform: rotateX(-90deg);
                        transform: rotateX(-90deg);
                    }

                    /* 테블릿 사이즈 */
                    @media only screen and (max-width: 1520px) {
                        section {
                            width: 100vw;
                        }

                        .left-box {
                            width: 40%;
                            transition: all 0.3s;
                        }

                        .right-box {
                            width: 40%;
                            transition: all 0.3s;
                        }
                    }

                    @media only screen and (max-width: 1322px) {
                        .left-box {
                            width: 50%;
                            transition: all 0.3s;
                        }
                    }

                    @media only screen and (max-width: 1062px) {
                        .left-box {
                            width: 60%;
                            transition: all 0.3s;
                        }
                    }

                    @media only screen and (max-width: 840px) {
                        .left-box {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 200px;
                            transition: all 0.3s;
                        }

                        .right-box {
                            position: relative;
                            width: 90%;
                            transition: all 0.3s;
                        }
                    }

                    /* 휴대폰 사이즈 */
                    @media only screen and (max-width: 600px) {
                        .left-box {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 200px;
                            transition: all 0.3s;
                        }

                        h1 {
                            font-size: var(--font_26);
                            transition: all 0.3s;
                            line-height: 34px;
                        }

                        .right-box {
                            position: relative;
                            width: 100%;
                            transition: all 0.3s;
                        }

                        .btn-12 {
                            z-index: 998;
                        }
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
            </div>
        </>
    );
}

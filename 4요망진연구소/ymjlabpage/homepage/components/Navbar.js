"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

import { usePathname } from "next/navigation";

export default function Navbar() {
    // 토글 버튼 넣기
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav>
            <Link href="/" scroll={false} shallow={true}>
                <Image className="logo-img" src="/images/logo_ymj.svg" alt="logo" width={80} height={80} />
            </Link>
            <ul className="nav-bar">
                {pathname === "/" ? (
                    <AnchorLink offset={() => 100} href="#content">
                        <li className="active-nav">회사소개</li>
                    </AnchorLink>
                ) : (
                    <Link href="/" scroll={true} shallow={true}>
                        {pathname === "/" ? <li className="acitve-nav">회사소개</li> : <li>회사소개</li>}
                    </Link>
                )}
                <Link href="/kkultrip" scroll={true} shallow={true}>
                    {pathname === "/kkultrip" ? <li className="active-nav">꿀트립 서비스</li> : <li>꿀트립 서비스</li>}
                </Link>
                <Link href="/metaverse" scroll={true} shallow={true}>
                    {pathname === "/metaverse" ? <li className="active-nav">메타버스 에이전시</li> : <li>메타버스 에이전시</li>}
                </Link>
                <li>Contact</li>
            </ul>

            <ul className="reponsive-nav-bar">
                <div onClick={() => setIsOpen(!isOpen)}>
                    <Image src="/images/toggle.svg" width={30} height={30} alt="토글버튼" />
                </div>
                {isOpen ? (
                    <div className="reponsive-nav-bar-box">
                        <Link href="/">
                            <div className="reponsive-nav-bar-box-div">회사소개</div>
                        </Link>
                        <Link href="/kkultrip" scroll={true} shallow={true}>
                            <div className="reponsive-nav-bar-box-div">꿀트립 서비스</div>
                        </Link>
                        <Link href="/metaverse" scroll={true} shallow={true}>
                            <div className="reponsive-nav-bar-box-div">메타버스 에이전시</div>
                        </Link>
                        <div className="reponsive-nav-bar-box-div">Contact</div>
                    </div>
                ) : (
                    <></>
                )}
            </ul>
            <style jsx>{`
                nav {
                    width: 100vw;
                    padding: 12px 80px 12px 80px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: #ffffffc1;
                    z-index: 999;
                    font-weight: var(--medium);
                    font-size: var(--font_15);
                    color: var(--font_500);
                    line-height: 19px;
                }
                li {
                    float: left;
                    margin-left: 20px;
                }
                .logo-img {
                    margin-left: 30px;
                    opacity: 1;
                }
                .reponsive-nav-bar {
                    display: none;
                }

                /* 휴대폰 사이즈 */
                @media only screen and (max-width: 600px) {
                    nav {
                        padding: 12px 40px 12px 40px;
                        box-shadow: 0px;
                    }

                    .nav-bar {
                        display: none;
                    }

                    .reponsive-nav-bar {
                        display: block;
                    }
                    .reponsive-nav-bar-box {
                        position: absolute;
                        width: 100%;
                        top: 66px;
                        left: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background: #ffffff;
                        box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                        z-index: 999;
                    }
                    .reponsive-nav-bar-box-div {
                        padding: 16px 16px 16px 16px;
                    }
                }
            `}</style>
        </nav>
    );
}

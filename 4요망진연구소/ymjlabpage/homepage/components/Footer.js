"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import Image from "next/image";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Link from "next/link";

const Footer = () => (
    <footer>
        <div className="left">
            <p className="title">(주)요망진연구소</p>
            <div className="content">
                <p>
                    <span className="bold">주소</span>&nbsp;&nbsp;제주특별자치도 제주시 신산로82, B103호
                </p>
                <p>
                    <span className="bold">대표</span>&nbsp;&nbsp;최성기&nbsp;&nbsp;<span className="bold">사업자번호</span>&nbsp;&nbsp;183-81-02296
                </p>
                <p>
                    <span className="bold">이메일</span>&nbsp;&nbsp;admin@ymjlab.com
                </p>
            </div>
            <div className="bottom">
                <div className="sub-title">Copyright © YMJLAB Inc. 2023</div>
            </div>
        </div>
        <div className="right">
            <div className="logo">
                {socials.map((social, index) => (
                    <div key={index} className="logo-margin">
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <Link href={social.link} target="_blank">
                                <Image src={social.url} alt={social.name} width={50} height={50} />
                            </Link>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="responsive-bottom">
                <div className="sub-title">Copyright © YMJLAB Inc. 2023</div>
            </div>
        </div>

        <style jsx>{`
            footer {
                width: 100vw;
                height: 250px;
                background: #f2f2f2;
                padding: 40px 80px 40px 80px;
                display: flex;
                justify-content: space-between;
                font-family: "Spoqa Han Sans Neo";
                font-style: normal;
            }
            .left {
                text-align: left;
            }
            .title {
                font-weight: 700;
                font-size: 14px;
                line-height: 18px;
                color: #6d6d6d;
                margin-bottom: 32px;
            }
            .content {
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
                letter-spacing: -0.015em;
                color: #6d6d6d;
                margin-bottom: 45px;
            }
            .bold {
                font-weight: 700;
            }
            .bottom {
                display: flex;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
            }
            .sub-title {
                margin-right: 20px;
                color: #181818;
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }
            .logo {
                display: flex;
            }
            .logo-margin {
                margin-right: 10px;
            }
            .content > p {
                margin-bottom: 6px;
            }
            .responsive-bottom {
                display: none;
            }

            /* 테블릿 사이즈 */
            @media only screen and (max-width: 1225px) {
            }

            /* 휴대폰 사이즈 */
            @media only screen and (max-width: 600px) {
                footer {
                    flex-direction: column;
                    height: auto;
                    align-items: center;
                    text-align: center;
                    padding: 20px 20px 20px 20px;
                }

                .logo-margin {
                    width: 20%;
                    margin: 0 10px 0 10px;
                }
                .bottom {
                    display: none;
                }
                .responsive-bottom {
                    display: block;
                    color: #181818;
                    font-size: 14px;
                    margin-top: 16px;
                }
                .content {
                    text-align: center;
                }
                p {
                    text-align: center;
                }
            }
        `}</style>
    </footer>
);

export default Footer;

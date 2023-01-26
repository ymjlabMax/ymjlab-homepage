"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import Image from "next/image";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
    // <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
    //     <div className="footer-gradient" />
    //     <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
    //         <div className="flex items-center justify-between flex-wrap gap-5">
    //             <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h4>
    //             <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
    //                 <img src="/images/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
    //                 <span className="font-normal text-[16px] text-white">Enter Metaverse</span>
    //             </button>
    //         </div>

    //         <div className="flex flex-col">
    //             <div className="mb-[50px] h-[2px] bg-white opacity-10" />

    //             <div className="flex items-center justify-between flex-wrap gap-4">
    //                 <h4 className="font-extrabold text-[24px] ">요망진연구소</h4>
    //                 <p className="font-normal text-[14px] opacity-50">Copyright © 2020 ymjlab. All rights reserved.</p>

    //                 <div className="flex gap-4">
    //                     {socials.map((social) => (
    //                         <img key={social.name} src={social.url} alt={social.name} className="w-[24px] h-[24px] object-contain cursor-pointer" />
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </motion.footer>
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
                    <span className="bold">이메일</span>&nbsp;&nbsp;support@ymjlab.com
                </p>
            </div>
            <div className="bottom">
                {/* <div className="sub-title">이용약관</div>
                <div className="sub-title">개인정보처리방침</div> */}
                <div className="sub-title">Copyright © YMJLAB Inc. 2023</div>
            </div>
        </div>
        <div className="right">
            <div className="logo">
                {socials.map((social, index) => (
                    <div key={index} className="logo-margin">
                        <Image src={social.url} alt={social.name} width={50} height={50} />
                    </div>
                ))}
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
        `}</style>
    </footer>
);

export default Footer;

"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import { kkultrip_socials } from "../constants";

export default function Social() {
    return (
        <section>
            <div className="title">
                <h1>SNS 활동</h1>
            </div>
            <div className="content-wrap">
                {/* <div className="social-box">
                    <Image src="/images/kkultrip_img/img_logo_instagram.svg" alt="인스타그램" width={70} height={50} />
                </div>
                <div className="social-box">
                    <Image src="/images/kkultrip_img/img_logo_youtube.svg" alt="유튜브" width={70} height={50} />
                </div> */}
                {kkultrip_socials.map((social, index) => (
                    <div key={index} className="social-box">
                        <Link href={social.link} target="_blank">
                            <Image src={social.url} alt={social.name} width={70} height={70} />
                        </Link>
                    </div>
                ))}
            </div>
            <style jsx>{`
                section {
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 0 100px 0;
                }
                .title {
                    margin-bottom: 32px;
                }
                h1 {
                    font-weight: 700;
                    font-size: 40px;
                    line-height: 40px;
                    display: flex;
                    align-items: center;
                    color: #000000;
                }
                .social-box {
                    margin: 0 16px 0 16px;
                }
                .content-wrap {
                    display: flex;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

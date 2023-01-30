"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function Content() {
    return (
        <section>
            <div className="meta-content-bg">
                <div className="meta-content-box">
                    <div className="meta-content-box-title">
                        <h1>맞춤형</h1>
                        <p>메타버스 공간,에셋 개발 운영</p>
                    </div>
                    <div className="meta-content-box-img">
                        <Image src="/images/metaverse_img/metaverse_content_1.png" width={200} height={200} alt="맞춤형" />
                    </div>
                    <div className="meta-content-box-content">
                        <div className="meta-content-box-content-box"></div>
                    </div>
                </div>
                <div className="meta-content-box"></div>
                <div className="meta-content-box"></div>
            </div>
            <style jsx>{`
                section {
                    width: 100%;
                    height: 768px;
                    background: #4d3e59;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .meta-content-bg {
                    width: 70%;
                    display: flex;
                    justify-content: center;
                    background-color: var(--gray_100);
                    padding: 16px 16px 16px 16px;
                    border: 1px solid var(--white);
                    border-radius: 12px;
                }

                .meta-content-box {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    width: 300px;
                    height: 600px;
                    background: var(--white);
                    border: 1px solid var(--gray_100);
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    border-radius: 12px;
                    margin: 0 24px 0 24px;
                    overflow: hidden;
                }

                .meta-content-box-title {
                    width: 100%;
                    height: 25%;
                    background-color: #1400ff;
                    padding: 30px 20px 20px 20px;
                    color: var(--white);
                }
                .meta-content-box-title > h1 {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 32px;
                }

                .meta-content-box-img {
                    display: flex;
                    height: 50%;
                    justify-content: center;
                    align-items: center;
                }

                .meta-content-box-content {
                    display: flex;
                    justify-content: center;
                }

                .meta-content-box-content-box {
                    width: 100%;
                }
                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

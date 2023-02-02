"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function ServiceBg() {
    return (
        <section>
            <div className="title">
                <h1>서비스 배경</h1>
            </div>
            <div className="content-wrap">
                <Image src="images/metaverse_img/img_servicebg_meta.svg" alt="메타버스 서비스 배경" width={1000} height={500} />
            </div>
            <style jsx>{`
                section {
                    height: var(--page_height);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 0 100px 0;
                }
                .title {
                    margin-bottom: 80px;
                }
                h1 {
                    font-weight: var(--bold);
                    font-size: var(--font_40);
                    line-height: 40px;
                    display: flex;
                    color: var(--font_400);
                }

                .content-wrap {
                    display: flex;
                    justify-content: center;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

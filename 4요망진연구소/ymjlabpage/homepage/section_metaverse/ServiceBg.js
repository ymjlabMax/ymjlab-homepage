"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";
import { TypingText } from "../components";

export default function ServiceBg() {
    return (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <section>
                <div className="title">
                    <h1>
                        <TypingText title="서비스 배경" />
                    </h1>
                </div>
                <motion.div variants={fadeIn("up", "tween", 0.1, 0.5)}>
                    <div className="content-wrap">
                        <Image src="images/metaverse_img/img_servicebg_meta.svg" alt="메타버스 서비스 배경" width={1000} height={500} />
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("up", "tween", 0.1, 0.5)}>
                    <div className="content-wrap-mob">
                        <Image src="images/metaverse_img/img_servicebg_meta_mob.svg" alt="메타버스 서비스 배경" width={300} height={500} />
                    </div>
                </motion.div>
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
                        font-size: var(--font_32);
                        line-height: 40px;
                        display: flex;
                        color: var(--font_400);
                    }

                    .content-wrap {
                        display: flex;
                        justify-content: center;
                    }
                    .content-wrap-mob {
                        display: none;
                    }

                    /* 테블릿 사이즈 */
                    @media only screen and (max-width: 1300px) {
                        section {
                            height: auto;
                            padding: 0 0 200px 0;
                        }

                        .content-wrap {
                            display: none;
                        }
                        .meta-content-box {
                            margin-bottom: 32px;
                        }
                        .content-wrap-mob {
                            display: block;
                        }
                    }
                    /* 휴대폰 사이즈 */
                    @media only screen and (max-width: 600px) {
                        .content-wrap {
                            flex-direction: column;
                            height: 1000px;
                        }
                        .meta-content-box {
                            margin-bottom: 32px;
                            width: 300px;
                            height: 330px;
                        }
                    }
                `}</style>
            </section>
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { slideIn, textVariant, staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";
import { TypingText } from "../components";

import { MemberInfo } from "../constants";

const Members = () => (
    <section>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <div className="title">
                <TypingText title="팀원 소개" />
            </div>
            <motion.div variants={fadeIn("up", "tween", 0.1, 0.5)}>
                <div className="member-wrap">
                    <div className="container">
                        {MemberInfo.map((el, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.2 }}>
                                <Image key={el.name} src={el.imgUrl} alt={el.name} width={140} height={140} />
                                <div className="content">
                                    <p>
                                        <span className="bold">{el.name}</span> | {el.position}
                                    </p>
                                    {el.name === "Mando" ? (
                                        <p className="small">
                                            bestdeveloper.jo
                                            <br />
                                            @ymjlab.com
                                        </p>
                                    ) : (
                                        <p className="small">{el.email}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>

        <style jsx>{`
            section {
                /* width: 100%; */
                height: 768px;
                display: flex;
                align-items: center;
                flex-direction: column;
                margin-bottom: 100px;
            }
            .title {
                font-weight: 700;
                font-size: 32px;
                line-height: 40px;
                letter-spacing: -0.015em;
                color: #181818;
                text-align: center;
                margin-bottom: var(--component-margin);
            }
            .member-wrap {
                display: flex;
                justify-content: center;
                max-width: 100%;
            }

            .container {
                text-align: center;
                display: grid;
                grid-template-columns: repeat(5, 140px);
                grid-template-rows: repeat(2, 202px);
                gap: 80px 80px;
            }

            .item {
                width: 100%;
                height: 100%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .content {
                margin-top: 8px;
            }

            .bold {
                font-weight: 700;
            }

            .small {
                color: #767676;
            }

            /* 테블릿 사이즈 */
            @media only screen and (max-width: 1225px) {
                .container {
                    grid-template-columns: repeat(3, 140px);
                    grid-template-rows: repeat(4, 202px);
                    gap: 80px 80px;
                }
                section {
                    width: auto;
                    height: auto;
                }
            }

            /* 휴대폰 사이즈 */
            @media only screen and (max-width: 600px) {
                .container {
                    grid-template-columns: repeat(2, 140px);
                    grid-template-rows: repeat(5, 202px);
                    gap: 60px 60px;
                }
            }
        `}</style>
    </section>
);

export default Members;

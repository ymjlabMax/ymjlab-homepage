"use client";

import { motion } from "framer-motion";
import { navVariants, textVariant, staggerContainer } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

import { MemberInfo } from "../constants";

const Members = () => (
    <section>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
            <motion.h1 variants={textVariant(0.5)}>
                <div className="title">요망진연구소 멤버를 소개합니다.</div>
                <div>
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
            </motion.h1>
        </motion.div>

        <style jsx>{`
            section {
                width: 100%;
                height: 768px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .title {
                font-weight: 700;
                font-size: 32px;
                line-height: 40px;
                letter-spacing: -0.015em;
                color: #181818;
                text-align: center;
                margin-bottom: 70px;
            }
            .container {
                text-align: center;
                display: grid;
                grid-template-columns: repeat(5, 140px);
                grid-template-rows: repeat(2, 202px);
                gap: 40px 60px;
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

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Members;

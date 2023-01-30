"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { SummaryInfo } from "../../constants";

const Summary = () => (
    <section>
        <div className="left-box">
            <table className="summary-table">
                <tbody>
                    {SummaryInfo.map((el, index) => (
                        <tr key={index}>
                            <td className="title-td">{el.title}</td>
                            <td className="content-td">{el.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="right-box">
            <motion.div whileHover={{ scale: 1.4 }}>
                <Image src="/images/summary_img.svg" alt="개요 이미지" width={150} height={150} />
            </motion.div>
        </div>

        <style jsx>{`
            section {
                width: 100%;
                height: 360px;
                display: flex;
                justify-content: center;
                font-size: var(--font_16);
                /* padding: 0 50px 0 150px; */
            }
            .left-box {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }
            .right-box {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 20px 20px;
            }

            .title-td {
                width: 74px;
                text-align: justify;
                text-align-last: justify;
                color: var(--font_500);
                font-size: var(--font_16);
                font-weight: var(--bold);
            }
            tr {
                height: 20px;
            }

            .content-td {
                width: 500px;
                color: var(--font_500);
                font-size: var(--font_16);
                font-weight: var(--regular);
            }

            /* 테블릿 사이즈 */
            @media only screen and (max-width: 1060px) {
                section {
                    width: auto;
                }
            }

            @media only screen and (max-width: 760px) {
                section {
                    flex-direction: column-reverse;
                    margin-top: 40px;
                }

                .left-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 20px 20px;
                }

                .title-td {
                    width: 120px;
                    text-align: justify;
                    text-align-last: justify;
                    color: var(--font_500);
                    font-size: var(--font_14);
                    font-weight: var(--bold);
                }
                tr {
                    height: 24px;
                }

                .content-td {
                    color: var(--font_500);
                    font-size: var(--font_14);
                    font-weight: var(--regular);
                }
            }

            /* 휴대폰 사이즈 */
            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Summary;

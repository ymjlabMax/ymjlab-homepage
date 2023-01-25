"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { HistoryInfo_2022, HistoryInfo_2021, HistoryInfo_2020 } from "../../constants";

export default function History() {
    const { scrollYProgress } = useScroll();

    return (
        <section>
            <h1>요망진 연구소가 걸어온 길</h1>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <div className="history-box">
                {/* <div className="year-box">
                    <h2>2022</h2>
                    <div className="grid-container">
                        {HistoryInfo_2022.map((el, index) => (
                            <div className="line-box" key={index}>
                                <h3>{el.title}</h3>
                                <p>{el.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="year-box">
                    <h2>2021</h2>
                    <div className="grid-container">
                        {HistoryInfo_2021.map((el, index) => (
                            <div className="line-box" key={index}>
                                <h3>{el.title}</h3>
                                <p>{el.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="year-box">
                    <h2>2020</h2>
                    <div className="grid-container">
                        {HistoryInfo_2020.map((el, index) => (
                            <div className="line-box" key={index}>
                                <h3>{el.title}</h3>
                                <p>{el.content}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="md-width">
                    <h2>2022</h2>
                    <div className="flex-container">
                        <div className="flex-line-box">
                            <div className="flex-line-box-content">
                                {HistoryInfo_2022.map((el, index) => (
                                    <div key={index}>
                                        <h3>{el.title}</h3>
                                        <p>{el.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ld-width">
                    <h2>2021</h2>
                    <div className="flex-container">
                        <div className="flex-line-box">
                            <div className="flex-line-box-content">
                                {HistoryInfo_2021.map((el, index) => (
                                    <div key={index}>
                                        <h3>{el.title}</h3>
                                        <p>{el.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sd-width">
                    <h2>2020</h2>
                    <div className="flex-container">
                        <div className="flex-line-box">
                            <div className="flex-line-box-content">
                                {HistoryInfo_2020.map((el, index) => (
                                    <div key={index}>
                                        <h3>{el.title}</h3>
                                        <p>{el.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    width: 100%;
                    height: 360px;
                    display: flex;
                    flex-direction: column;
                    padding: 40px 50px 10px 50px;
                    /* justify-content: center;
                    align-items: center;
                    font-family: "Spoqa Han Sans Neo";
                    font-style: normal;
                    font-size: 16px; */
                }
                h1 {
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: #181818;
                }

                .history-box {
                    width: 1000px;
                    height: 100%;
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-start;
                    white-space: nowrap;
                    overflow-x: scroll;
                    overflow-y: hidden;
                }

                .progress-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 10px;
                    background: var(--red);
                    transform-origin: 0%;
                }

                h2 {
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: #ff8f0b;
                    border-bottom: 2px solid #ff8f0b;
                }

                h3 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 19px;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.015em;
                    color: #181818;
                    margin-top: 10px;
                }
                p {
                    font-family: "Spoqa Han Sans Neo";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 16px;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.015em;
                    color: #767676;
                    /* margin-left: 38px; */
                }

                .month-box {
                    display: flex;
                }
                .line-box {
                    padding: 0px 20px 20px 0px;
                }

                .grid-container {
                    text-align: center;
                    display: grid;
                    grid-template-columns: repeat(2, 320px);
                    grid-template-rows: repeat(6, 22px);
                    gap: 20px;
                }
                .flex-container {
                    display: flex;
                    flex-direction: column;
                }

                .flex-line-box {
                    display: flex;
                    flex-direction: column;
                }
                .flex-line-box-content {
                    display: flex;
                    margin-right: 10px;
                    height: 150px;
                    flex-direction: column;
                    flex-wrap: wrap;
                }

                .md-width {
                    min-width: 600px;
                }
                .ld-width {
                    min-width: 1000px;
                }
                .sd-width {
                    min-width: 300px;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

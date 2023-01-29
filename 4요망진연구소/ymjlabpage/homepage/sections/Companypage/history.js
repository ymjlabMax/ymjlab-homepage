"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { HistoryInfo_2022, HistoryInfo_2021, HistoryInfo_2020 } from "../../constants";

export function HistoryContent() {
    return (
        <>
            <div className="scroll-box-history">
                <div>
                    <p className="scroll-text-history">Scroll</p>
                </div>
                <Image className="scroll-img-history" src="/images/scroll.svg" width={20} height={20} alt="이동 스크롤" />
            </div>
            <div className="history-box">
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
                <style jsx>{`
                    .history-box {
                        width: 1030px;
                        height: 100%;
                        margin-top: 20px;
                        display: flex;
                        justify-content: flex-start;
                        white-space: nowrap;
                        overflow-x: scroll;
                        overflow-y: hidden;
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
                        min-width: 1000px;
                    }
                    .ld-width {
                        min-width: 1250px;
                    }
                    .sd-width {
                        min-width: 300px;
                    }
                `}</style>
            </div>
        </>
    );
}

export default function History() {
    // const [Dataitem, setDataItem] = useState(null);

    // useEffect(() => {
    //     setDataItem(<HistoryContent />);
    // }, []);

    return (
        <section>
            <HistoryContent />
            <style jsx>{`
                section {
                    width: 100%;
                    height: 360px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    /* padding: 40px 50px 10px 50px; */
                    font-size: var(--font_16);
                }
                h1 {
                    font-weight: var(--bold);
                    font-size: var(--font_28);
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: var(--font_500);
                    display: flex;
                    justify-content: flex-start;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

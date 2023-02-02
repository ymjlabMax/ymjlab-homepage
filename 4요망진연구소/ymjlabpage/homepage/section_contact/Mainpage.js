"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Mainpage = () => {
    return (
        <section>
            <div className="title">
                <h1>Contact</h1>
            </div>
            <form className="pc-form"></form>
            <div className="btn-list">
                <button>취소</button>
                <button>확인</button>
            </div>
            <style jsx>{`
                section {
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 136px;
                }
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 80px;
                }
                h1 {
                    font-weight: var(--bold);
                    font-size: 48px;
                    line-height: 40px;
                    letter-spacing: -0.015em;
                    color: var(--font_400);
                    margin-bottom: 16px;
                }
                .pc-form {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 1000px;
                    height: 498px;
                    background: #fafafa;
                    border-width: 1px 0px;
                    border-style: solid;
                    border-color: #dddddd;
                    margin-bottom: 32px;
                }
                .btn-list {
                    display: flex;
                    justify-content: center;
                }
                button {
                    width: 190px;
                    height: 56px;
                    background: #ffffff;
                    border: 1px solid #ff8f0b;
                    border-radius: 6px;
                    color: #ff8f0b;
                    margin: 0 20px 80px 20px;
                }

                button:hover {
                    background: #ff8f0b;
                    border: 1px solid #ff8f0b;
                    color: #ffffff;
                    transition: all 0.3s;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
};

export default Mainpage;

"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

import { MemberInfo } from "../constants";

const Members = () => (
    <section>
        <div className="title">요망진연구소 멤버를 소개합니다.</div>
        <div className="container">
            {MemberInfo.map((el, index) => (
                <div key={index}>
                    <Image key={el.name} src={el.imgUrl} alt={el.name} width={140} height={140} />
                    <div className="content">
                        <p>
                            <span className="bold">{el.name}</span> {el.position}
                        </p>
                        <p className="small">{el.email}</p>
                    </div>
                </div>
            ))}
        </div>

        <style jsx>{`
            section {
                margin-top: 100px;
                width: 100vw;
                /* height: 768px; */
                display: flex;
                justify-content: center;
                flex-direction: column;
                font-family: "Spoqa Han Sans Neo";
                font-style: normal;
            }
            .title {
                font-weight: 700;
                font-size: 32px;
                line-height: 40px;
                /* identical to box height */
                letter-spacing: -0.015em;
                /* f_500 */
                color: #181818;
                text-align: center;
                margin-bottom: 70px;
            }
            .container {
                display: grid;
                grid-template-columns: repeat(5, 140px);
                grid-template-rows: repeat(2, 202px);
                gap: 70px 100px;
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

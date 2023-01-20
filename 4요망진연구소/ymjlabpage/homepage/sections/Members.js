"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

import { MemberInfo } from "../constants";

const Members = () => (
    <section>
        <div className="title">요망진연구소 멤버를 소개합니다.</div>
        <div className="grid grid-cols-5 gap-5">
            {MemberInfo.map((el) => (
                <Image key={el.name} src={el.imgUrl} alt={el.name} width={140} height={140} />
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
            }
            .container {
                display: grid;
                gird-template-colums: 140px 140px 140px 140px 140px;
                gird-template-row: 202px 202px;
                column-gap: 30px;
                row-gap: 20px;
                margin-top: 100px;
            }

            .item {
                width: 100%;
                height: 100%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Members;

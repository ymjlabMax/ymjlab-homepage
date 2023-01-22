"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { PartnerInfo } from "../../constants";

const Partner = () => (
    <section>
        {PartnerInfo.map((el, index) => (
            <div className="aff-box" key={index}>
                <Image src={el.url} alt={el.name} width={150} height={150} />
            </div>
        ))}
        <style jsx>{`
            section {
                width: 100%;
                height: 360px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: "Spoqa Han Sans Neo";
                font-style: normal;
                font-size: 16px;
            }
            .aff-box {
                display: flex;
                justify-content: center;
                margin-right: 50px;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Partner;

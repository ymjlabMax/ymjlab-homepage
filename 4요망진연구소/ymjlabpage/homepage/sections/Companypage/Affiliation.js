"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { AffInfo } from "../../constants";

const Affiliation = () => (
    <section>
        {AffInfo.map((el, index) => (
            <motion.div key={index} whileHover={{ scale: 1.4 }}>
                <div className="aff-box">
                    <Image src={el.url} alt={el.name} width={180} height={100} />
                </div>
            </motion.div>
        ))}
        <style jsx>{`
            section {
                max-width: 1120px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                padding-top: 40px;
            }
            .aff-box {
                display: flex;
                justify-content: center;
                width: 180px;
                height: 100px;
                margin: 0 32px 16px 32px;
            }

            @media only screen and (max-width: 600px) {
                /* section {
                    height: 720px;
                } */
            }
        `}</style>
    </section>
);

export default Affiliation;

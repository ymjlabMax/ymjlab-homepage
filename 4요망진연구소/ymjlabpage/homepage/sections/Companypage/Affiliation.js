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
                    <Image src={el.url} alt={el.name} width={180} height={200} />
                </div>
            </motion.div>
        ))}
        <style jsx>{`
            section {
                max-width: 1200px;
                height: 360px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
            .aff-box {
                display: flex;
                justify-content: center;
                margin-right: 40px;
                margin-left: 40px;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Affiliation;

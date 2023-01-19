"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Mainpage = () => (
    // <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
    //     {/* after importing motion we can use its properties like nav, div etc */}
    //     {/* we can simply write navVariants imported properties here too but it'll take a lot of space so.. */}
    //     <div className="absolute w-[50%] inset-0 gradient-01 " />
    //     <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
    //         <img src="/images/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
    //         <h2 className="font-extrabold text-[24px] leading-[30px] text-black">METAVERSUS</h2>
    //         <img src="/images/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
    //     </div>
    // </motion.nav>
    <section>
        <div className="left-box">111</div>
        <div className="right-box">
            <Image src="/images/main_image.png" width={500} height={100} alt="메인이미지"></Image>
        </div>

        <style jsx>{`
            section {
                width: 100vw;
                max-height: 768px;
                display: flex;
                justify-content: center;
            }
            .left-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
            }
            .right-box {
                padding: 100px 100px 100px 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
            }

            @media only screen and (max-width: 600px) {
            }
        `}</style>
    </section>
);

export default Mainpage;

"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
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
    <nav>
        <Link href="/">
            <img className="logo_img" src="/images/logo_ymj.svg" alt="logo" width="100" height="50" />
        </Link>
        <ul>
            <li>
                <Link href="/">회사소개</Link>
            </li>
            <li>위치</li>
            <li>Contact</li>
            <li>
                <Link href="/kkultrip">꿀트립 서비스</Link>
            </li>
            <li>
                <Link href="/kkultrip">메타버스 서비스</Link>
            </li>
        </ul>
        <style jsx>{`
            nav {
                max-width: 100vw;
                padding: 10px 50px 10px 50px;
                height: 100%;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                position: sticky;
                top: 0;
                background: #ffffffc1;
                z-index: 1;
            }
            li {
                float: left;
                margin-left: 20px;
            }
            .logo_img {
                margin-left: 30px;
                opacity: 1;
            }

            @media only screen and (max-width: 600px) {
                nav {
                    background-color: black;
                }
            }
        `}</style>
    </nav>
);

export default Navbar;

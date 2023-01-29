"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

import { usePathname } from "next/navigation";

export default function Navbar() {
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
    // <motion.nav variants={navVariants} initial="hidden" whileInView="show">

    const linkHandler = () => {
        console.log("작동");

        // </AnchorLink>;
    };

    const pathname = usePathname();

    return (
        <nav>
            <Link href="/" scroll={false} shallow={true}>
                <Image className="logo-img" src="/images/logo_ymj.svg" alt="logo" width={80} height={80} />
            </Link>
            <ul>
                {pathname === "/" ? (
                    <AnchorLink offset={() => 100} href="#content">
                        <li className="active-nav">회사소개</li>
                    </AnchorLink>
                ) : (
                    <Link href="/" scroll={true} shallow={true}>
                        {pathname === "/" ? <li className="acitve-nav">회사소개</li> : <li>회사소개</li>}
                    </Link>
                )}
                <Link href="/kkultrip" scroll={true} shallow={true}>
                    {pathname === "/kkultrip" ? <li className="active-nav">꿀트립 서비스</li> : <li>꿀트립 서비스</li>}
                </Link>
                <Link href="/metaverse" scroll={true} shallow={true}>
                    {pathname === "/metaverse" ? <li className="active-nav">메타버스 서비스</li> : <li>메타버스 서비스</li>}
                </Link>
                {/* {pathname === "/" ? (
                    <AnchorLink offset={() => 100} href="#location">
                        <li>위치</li>
                    </AnchorLink>
                ) : (
                    <Link href="/">
                        <li>위치</li>
                    </Link>
                )} */}
                <li>Contact</li>
            </ul>
            <style jsx>{`
                nav {
                    width: 100vw;
                    padding: 12px 80px 12px 80px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: #ffffffc1;
                    z-index: 999;
                    font-weight: var(--medium);
                    font-size: var(--font_15);
                    color: var(--font_500);
                    line-height: 19px;
                }
                li {
                    float: left;
                    margin-left: 20px;
                }
                .logo-img {
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
}

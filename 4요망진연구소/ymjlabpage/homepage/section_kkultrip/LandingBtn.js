"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingBtn() {
    return (
        <>
            <div className="btn">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <Link href="http://kkultrip.com" target="_blank">
                        <div className="btn-img">
                            <Image className="btn-img" src="/images/kkultrip_img/bt_img_floating_kt.svg" width={50} height={50} alt="랜딩버튼" />
                        </div>
                    </Link>
                    <p>꿀트립</p>
                </motion.div>
                <style jsx>{`
                    .btn {
                        position: fixed;
                        right: 30px;
                        top: 80px;
                        cursor: pointer;
                        transition: 0.3s;
                        background: none;
                    }
                    p {
                        font-size: 13px;
                        text-align: center;
                    }
                    .btn-img {
                        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
                    }
                    @media only screen and (max-width: 600px) {
                        .btn {
                            display: none;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

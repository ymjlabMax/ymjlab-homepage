"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingBtn() {
    return (
        <>
            <div className="btn">
                <Link href="http://kkultrip.com" target="_blank">
                    <Image src="/images/kkultrip_img/kkultrip_app_img.svg" width={50} height={50} alt="랜딩버튼" />
                </Link>
                <p>꿀트립</p>
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
                `}</style>
            </div>
        </>
    );
}

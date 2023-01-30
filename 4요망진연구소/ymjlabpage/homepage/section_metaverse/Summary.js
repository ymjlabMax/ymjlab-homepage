"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function Summary() {
    return (
        <section>
            {/* <div className="left-box">
                <h1>Unified Metaverse Hub One Source </h1>
                <p>
                    메타버스 시대에 공공 및 기업이 메타버스를 활용한 새로운 비즈니스 영역으로 효과적으로 진입할 수 있도록 UMH 기반 메타버스 마케팅 솔루션을
                    제공합니다.
                </p>
                <div className="btn-container">
                    <div className="btn-box">Asset</div>
                    <div className="btn-box">world</div>
                </div>
            </div>
            <div className="right-box">
                <div className="map-box"></div>
            </div> */}
            <div className="left-box">
                <h1>Unified Metaverse Hub One Source</h1>
                <p>메타버스 시대에 공공 및 기업이 메타버스를 활용한 </p>
                <p>새로운 비즈니스 영역으로 효과적으로 진입할 수 있도록</p>
                <p>UMH 기반 메타버스 마케팅 솔루션을 제공합니다.</p>
                <div className="summary-box"></div>
            </div>
            <div className="right-box">
                <Image src="/images/kkultrip_img/kkultrip_phone.svg" alt="꿀트립 앱 이미지" width={200} height={200} />
            </div>
            <style jsx>{`
                section {
                    height: var(--page_height);
                    display: flex;
                    justify-content: center;
                    padding: 200px 0 100px 0;
                    margin-bottom: 100px;
                }
                .left-box {
                    display: flex;
                    flex-direction: column;
                }
                .right-box {
                    padding-left: 176px;
                }

                span {
                    font-weight: 700;
                }
                .map-box {
                    width: 500px;
                    height: 490px;
                    background: #eeeeee;
                }

                h1 {
                    font-weight: var(--bold);
                    font-size: var(--font_40);
                    line-height: 50px;
                    display: flex;
                    align-items: center;
                    color: var(--font_500);
                    margin-bottom: 18px;
                }

                p {
                    font-weight: var(--regular);
                    font-size: var(--font_18);
                    line-height: 23px;
                    color: var(--font_500);
                }

                .btn-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 200px;
                    height: 105px;
                    border: 1px solid #181818;
                    margin-right: 10px;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

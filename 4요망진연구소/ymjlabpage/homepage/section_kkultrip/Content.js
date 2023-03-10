"use client";

import { motion } from "framer-motion";
import { navVariants, staggerContainer, textVariant, slideIn, fadeIn } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import { TypingText } from "../components";

export default function Content() {
    return (
        <section>
            <motion.div className="section-box-col" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                <div className="title">
                    <h1>
                        <TypingText title="서비스 배경" />
                    </h1>
                </div>
                <div className="content-wrap">
                    <motion.div variants={fadeIn("right", "spring", 0.5, 0.5)}>
                        <div className="content-box">
                            <h2>Problem</h2>
                            <h3>① 관광소비 빅데이터 수집</h3>
                            <p>관광인센티브 및 소비 활력 제고 예산의 운영 방식</p>
                            <h3>② 사용자 편의 혁신</h3>
                            <p>정체되고 낙후된 관광지 할인 쿠폰 서비스 </p>
                            <h3>③실시간 수집/분석/활용 시스템</h3>
                            <p>실시간 관광객 소비데이터 수집/분석/활용 시스템 부재 </p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn("right", "spring", 1, 0.5)}>
                        <div className="content-box  gray-background ">
                            <h2>Why</h2>
                            <h3 className="danger-color">① 단순 부정 사용 방지 수준의 데이터 수집/활용</h3>
                            <p>&nbsp;</p>
                            <h3 className="danger-color">② 관광객 편의 중심 혁신 필요</h3>
                            <p>&nbsp;</p>
                            <h3 className="danger-color">③ 실시간 관광객 소비데이터 수집/분석/활용 시스템 부재</h3>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn("right", "spring", 1.5, 0.5)}>
                        <div className="final-box">
                            <Link href="https://kkultrip.com" target="_blank">
                                <Image src="/images/kkultrip_img/kkultrip_app_img.svg" width={170} height={100} alt="꿀트립 앱 이미지" />
                            </Link>
                            <p>관광소비 빅데이터 기반 상호 연계성을 활용한 </p>
                            <h3>Holistic BeneFIT 관광 서비스</h3>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <style jsx>{`
                section {
                    height: var(--page_height);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 0 100px 0;
                }
                .title {
                    margin-bottom: 80px;
                }
                h1 {
                    font-weight: var(--bold);
                    font-size: var(--font_32);
                    line-height: 40px;
                    display: flex;
                    color: var(--font_400);
                }

                .content-wrap {
                    display: flex;
                    justify-content: space-around;
                }

                .content-box {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    padding: 32px 8px 16px 16px;
                    gap: 8px;
                    width: 300px;
                    height: 300px;
                    background: var(--white);
                    border: 1px solid var(--gray_100);
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    border-radius: 24px;
                    margin: 0 24px 0 24px;
                }
                .final-box {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 32px 8px 16px 16px;
                    gap: 8px;
                    width: 300px;
                    height: 300px;
                    background: var(--main_yellow_200);
                    /* border: 1px solid var(--gray_100); */
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    border-radius: 24px;
                    margin: 0 24px 0 24px;
                }

                h2 {
                    font-weight: var(--bold);
                    font-size: var(--font_24);
                    line-height: 30px;
                    display: flex;
                    align-items: center;
                    color: var(--font_500);
                }

                h3 {
                    font-weight: var(--bold);
                    font-size: var(--font_14);
                    line-height: 18px;
                    display: flex;
                    align-items: center;
                    color: var(--font_500);
                    margin-top: 16px;
                }

                p {
                    font-weight: var(--regular);
                    font-size: var(--font_12);
                    line-height: 15px;
                    display: flex;
                    align-items: center;
                    color: var(--font_500);
                }

                .danger-color {
                    color: #f92417;
                }

                .gray-background {
                    background: #fafafa;
                }

                .final-box > h3 {
                    margin-top: 4px;
                    font-size: 16px;
                }
                /* 테블릿 사이즈 */
                @media only screen and (max-width: 1020px) {
                    section {
                        height: auto;
                    }

                    .content-wrap {
                        flex-direction: column;
                        height: 1000px;
                    }
                }
                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

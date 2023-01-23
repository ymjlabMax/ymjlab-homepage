"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";

export default function Summary() {
    return (
        <section>
            <div className="title">요망진연구소 찾아오시는길</div>
            <div className="location-box">
                <div className="left-box">
                    <p>
                        <span>주 소</span>
                        &nbsp;&nbsp;&nbsp;제주시 신산로 82, B103호(제주콘텐츠코리아랩 지하)
                    </p>
                    <p>
                        <span>팩 스</span>
                        &nbsp;&nbsp;&nbsp;1111-2222
                    </p>
                    <p>
                        <span>이메일</span>
                        &nbsp;&nbsp;&nbsp;support@ymjlab.com
                    </p>
                    <p>
                        <span>전화 번호</span>
                        &nbsp;&nbsp;&nbsp;010-2222-2222
                    </p>
                </div>
                <div className="right-box">
                    <div className="map-box"></div>
                </div>
            </div>
4
            <style jsx>{`
                section {
                    padding-top: 100px;
                    margin-bottom: 100px;
                    width: 100%;
                    height: 768px;
                    display: flex;
                    /* justify-content: center; */
                    /* align-items: center; */
                    flex-direction: column;
                    font-family: "Spoqa Han Sans Neo";
                    font-style: normal;
                }
                .title {
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    /* identical to box height */
                    letter-spacing: -0.015em;
                    /* f_500 */
                    color: #181818;
                    text-align: center;
                    margin-bottom: 70px;
                }
                .left-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 60%;
                    height: 100%;
                    line-height: 20px;
                    margin-left: 150px;
                }
                .right-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40%;
                    height: 100%;
                }

                .location-box {
                    display: flex;
                }

                span {
                    font-weight: 700;
                }
                p {
                    margin: 12px 12px 12px 12px;
                }

                .map-box {
                    width: 500px;
                    height: 300px;
                    background-color: #eeeeee: ;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

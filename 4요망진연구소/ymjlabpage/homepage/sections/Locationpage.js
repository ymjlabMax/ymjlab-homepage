"use client";
/*global kakao*/

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";

import { LocationInfo } from "../constants";

export default function Locationpage() {
    const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(script);

        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById("map");
                const mapOptions = {
                    //지도를 생성할 때 필요한 기본 옵션
                    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                    level: 3, //지도의 레벨(확대, 축소 정도)
                };

                new window.kakao.maps.Map(mapContainer, mapOptions);
            });
        });
    }, []);

    return (
        <section id="location">
            <div className="title">찾아오시는길</div>
            <div className="location-box">
                <div className="left-box">
                    <table className="summary-table">
                        <tbody>
                            {LocationInfo.map((el, index) => (
                                <tr key={index}>
                                    <td className="title-td">
                                        <img src={el.url} alt={el.name} />
                                    </td>
                                    <td className="content-td">{el.content}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="right-box">
                    <div className="map-box" id="map"></div>
                </div>
            </div>

            <style jsx>{`
                section {
                    width: 100%;
                    height: 450px;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: var(--section-margin);
                }
                .title {
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    /* identical to box height */
                    letter-spacing: -0.015em;
                    /* f_500 */
                    color: var(--font_500);
                    text-align: center;
                    margin-bottom: var(--component-margin);
                }
                .left-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
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

                table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 20px 20px;
                }

                .title-td {
                    width: 5px;
                    color: var(--font_500);
                    width: var(--font_36);
                }
                tr {
                    height: 20px;
                }

                .content-td {
                    color: var(--font_500);
                    font-size: var(--font_16);
                    font-weight: var(--regular);
                }

                .location-box {
                    display: flex;
                }
                .map-box {
                    width: 560px;
                    height: 360px;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

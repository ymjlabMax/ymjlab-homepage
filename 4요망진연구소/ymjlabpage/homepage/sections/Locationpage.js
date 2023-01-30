"use client";
/*global kakao*/

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

import { LocationInfo } from "../constants";

export default function Locationpage() {
    const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
        // script.src = "/kakaomap";
        document.head.appendChild(script);

        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById("map");

                //요망진연구소 경도 위도
                const lat = 33.50595489264287;
                const lon = 126.53438882083911;

                const mapOptions = {
                    //지도를 생성할 때 필요한 기본 옵션
                    center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
                    level: 6, //지도의 레벨(확대, 축소 정도)
                };

                let map = new window.kakao.maps.Map(mapContainer, mapOptions);

                let zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                let marker = new kakao.maps.Marker({
                    // 지도 중심좌표에 마커를 생성합니다
                    position: map.getCenter(),
                });

                marker.setMap(map);

                // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                let content =
                    '<div class="customoverlay">' +
                    '  <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=1479632325" target="_blank">' +
                    '    <span class="title">(주)요망진연구소</span>' +
                    "  </a>" +
                    "</div>";

                // 커스텀 오버레이가 표시될 위치입니다
                let position = new kakao.maps.LatLng(lat, lon);

                // 커스텀 오버레이를 생성합니다
                let customOverlay = new kakao.maps.CustomOverlay({
                    map: map,
                    position: position,
                    content: content,
                    yAnchor: 0,
                });
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
                                        <Image src={el.url} alt={el.name} width={40} height={50} />
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
                    /* width: 100%; */
                    height: 520px;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 50px;
                }
                .title {
                    font-weight: var(--bold);
                    font-size: var(--font_32);
                    line-height: 40px;
                    /* identical to box height */
                    letter-spacing: -0.015em;
                    /* f_500 */
                    color: var(--font_500);
                    text-align: center;
                    margin-bottom: var(--component-margin);
                }

                .location-box {
                    display: flex;
                    justify-content: center;
                }
                .left-box {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    line-height: 20px;
                }

                .right-box {
                    height: 100%;
                    padding-left: 100px;
                }
                table {
                    border-collapse: separate;
                    border-spacing: 8px 20px;
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

                .map-box {
                    width: 600px;
                    height: 350px;
                }

                /* 테블릿 사이즈 */
                @media only screen and (max-width: 1060px) {
                    section {
                        width: auto;
                        height: auto;
                    }

                    .location-box {
                        display: flex;
                        flex-direction: column-reverse;
                        align-items: center;
                    }

                    .right-box {
                        height: 100%;
                        padding-left: 0;
                    }
                }
                /* 휴대폰 사이즈 */
                @media only screen and (max-width: 600px) {
                    .location-box {
                        display: flex;
                        flex-direction: column-reverse;
                        align-items: center;
                    }

                    .right-box {
                        height: 100%;
                        padding-left: 0;
                    }

                    .map-box {
                        width: 350px;
                    }
                }
            `}</style>
        </section>
    );
}

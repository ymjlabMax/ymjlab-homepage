"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";

import { Metaverse_project_01, Metaverse_project_img_01, Metaverse_project_icon_01, Metaverse_project_icon_02 } from "../constants";

export const Gallery = () => {
    return (
        <div className="grid-box">
            {Metaverse_project_img_01.map((el, index) => (
                <Image key={index} src={el.url} width={295} height={200} alt={el.name} />
            ))}
            <style jsx>{`
                .grid-box {
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    grid-template-rows: repeat(2, 160px);
                    gap: 4px 4px;
                    place-items: center;
                }
            `}</style>
        </div>
    );
};

export const Waybox = () => {
    return (
        <div className="way-box">
            <h2>이용방법</h2>
            <ul>
                <li>① 제페토 설치</li>
                <li>② 제페토에서 “리얼제주오름＂검색 </li>
                <li>③ “리얼제주오름”이용을 통해 이수증 획득</li>
            </ul>
            <style jsx>{`
                .way-box {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 40px 0px 16px 24px;
                    gap: 32px;
                    width: 450px;
                    height: 324px;
                    background: #ffffff;
                    border: 1px solid #f2f2f2;
                    border-radius: 12px;
                    flex: none;
                    order: 0;
                    flex-grow: 0;
                }

                h2 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    display: flex;
                    align-items: center;
                    color: #181818;
                    align-self: stretch;
                    flex-grow: 0;
                }

                li {
                    margin: 16px 0 16px 0;
                }
            `}</style>
        </div>
    );
};

export const SummaryBox = () => {
    return (
        <div className="box">
            <div className="left-box">
                <h3>메타버스 공간 구성</h3>
                <p>홈(센터)에서 거문오름과 다랑쉬오름을 자유롭게 이동</p>
                <div className="img-box">
                    <Image src="images/metaverse_img/img_space_meta.svg" width={450} height={300} alt="메타버스 공간 구성" />
                </div>
            </div>
            <div className="right-box">
                <h3>주요기능</h3>
                <div className="fun-box">
                    {Metaverse_project_icon_01.map((el, index) => (
                        <div className="icon-box" key={el.index}>
                            <Image alt={el.name} src={el.url} width={70} height={50} />
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
                <div className="fun-box-bottom">
                    {Metaverse_project_icon_02.map((el, index) => (
                        <div className="icon-box" key={el.index}>
                            <Image alt={el.name} src={el.url} width={70} height={50} />
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .box {
                    display: flex;
                }
                .left-box {
                    display: flex;
                    flex-direction: column;
                    margin: 0 16px 0 16px;
                }
                .right-box {
                    display: flex;
                    flex-direction: column;
                    margin: 0 16px 0 16px;
                    align-items: flex-start;
                }

                h3 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    color: #181818;
                }
                .right-box > h3 {
                    margin-bottom: 32px;
                }
                .img-box {
                    margin-top: 40px;
                }

                .fun-box {
                    display: flex;
                }
                .fun-box-bottom {
                    margin-top: 24px;
                    display: flex;
                }

                .icon-box {
                    margin-right: 68px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .icon-box > p {
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 19px;
                    color: #404040;
                    margin-top: 8px;
                }
            `}</style>
        </div>
    );
};

export default function ProjectPage() {
    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts = {
        height: "330",
        width: "600",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <section>
            <div className="title">
                <h1>프로젝트</h1>
            </div>
            <div className="project-bg">
                <div className="project-wrap">
                    <div className="left-box">
                        <div className="project-box-title">
                            <h3>Project 01.</h3>
                            <h2>제주오름 메타버스 콘텐츠 개발</h2>
                        </div>
                        <div className="project-box-image">
                            {/* <Image src="/images/metaverse_img/project_1.png" alt="프로젝트1" width={620} height={400} /> */}
                            <YouTube videoId="jYzaUheUxPY" opts={opts} onReady={onPlayerReady} />
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="project-box-title">
                            <h3>&nbsp;</h3>
                            <h2>&nbsp;</h2>
                        </div>
                        <div className="project-box-image">
                            <div className="project-box-app-top">
                                <Image src="/images/metaverse_img/img_realjeju_meta.svg" width={150} height={150} alt="제주오름" />
                                <Image src="/images/metaverse_img/img_darangshi_meta.svg" width={150} height={150} alt="제주오름" />
                                <div className="project-box-app-top-right">
                                    <div className="icon-box">
                                        <Image
                                            className="icon-bottom"
                                            src="/images/metaverse_img/img_unity_meta.svg"
                                            width={50}
                                            height={50}
                                            alt="제페토 아이콘"
                                        />
                                        <div className="icon-box-title">
                                            <p>개발환경</p>
                                            <p>Unity</p>
                                        </div>
                                    </div>
                                    <div className="icon-box">
                                        <Image src="/images/metaverse_img/img_zepeto_meta.svg" width={50} height={50} alt="제페토 아이콘" />
                                        <div className="icon-box-title">
                                            <p>플랫폼</p>
                                            <p>ZEPETO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box-app-bottom">
                                <ul>
                                    {Metaverse_project_01.map((el, index) => (
                                        <li key={index}>
                                            <span>{el.title}:</span>
                                            &nbsp;{el.content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrap">
                    <div className="left-box">
                        <Waybox />
                    </div>
                    <div className="right-box">
                        <Gallery />
                    </div>
                </div>
                <div className="summary-wrap">
                    <div className="summary-box">
                        <SummaryBox />
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    height: auto;
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
                    font-size: var(--font_40);
                    line-height: 40px;
                    display: flex;
                    color: var(--font_400);
                }
                .project-bg {
                    width: 100%;
                    height: auto;
                    background: var(--gray_100);
                    padding: 0 0 80px 0;
                    display: flex;
                    flex-direction: column;
                }
                .project-wrap {
                    display: flex;
                    justify-content: center;
                    margin-top: 80px;
                }
                .left-box {
                    display: flex;
                    flex-direction: column;
                    margin: 0 16px 0 32px;
                }
                .project-box-title {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 16px;
                }
                .project-box-image {
                    /* margin: 0 16px 0 16px; */
                }

                h3 {
                    font-weight: var(--bold);
                    font-size: var(--font_20);
                    line-height: 25px;
                    color: var(--font_500);
                    display: flex;
                    justify-content: flex-start;
                }
                h2 {
                    font-weight: var(--bold);
                    font-size: var(--font_26);
                    line-height: 33px;
                    color: var(--font_500);
                }

                .project-box-app {
                    /* padding: 16px 0 0 32px; */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .project-box-app-top {
                    padding-bottom: 16px;
                    display: flex;
                }
                .project-box-app-top-right {
                    display: flex;
                    flex-direction: column;
                    margin-left: 32px;
                    justify-content: space-around;
                }
                .icon-box {
                    display: flex;
                }

                .icon-box-title {
                    margin-left: 8px;
                }
                span {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 20px;
                    color: #181818;
                }

                .project-box-app-bottom > ul > li {
                    margin: 16px 0 16px 0;
                }

                .summary-wrap {
                    display: flex;
                    justify-content: center;
                    margin-top: 40px;
                }

                .summary-box {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 32px;
                    gap: 48px;
                    background: #ffffff;
                    border: 1px solid #f2f2f2;
                    border-radius: 12px;
                    min-width: 1040px;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

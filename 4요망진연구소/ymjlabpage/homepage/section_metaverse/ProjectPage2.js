"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";

import { Metaverse_project_02, Metaverse_project_img_02 } from "../constants";

export const Gallery = () => {
    return (
        <div className="grid-box">
            {Metaverse_project_img_02.map((el, index) => (
                <div className="margin-box" key={index}>
                    <Image src={el.url} width={280} height={200} alt={el.name} />
                </div>
            ))}
            <style jsx>{`
                .grid-box {
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    grid-template-rows: repeat(2, 170px);
                    gap: 16px 4px;
                    place-items: center;
                }
                /* .Garrery-box {
                    display: flex;
                }
                .margin-box {
                    margin-left: 8px;
                } */
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
                <li>② 제페토에서 “DMZ 평화의 길＂검색 </li>
            </ul>
            <style jsx>{`
                .way-box {
                    display: flex;
                    flex-direction: column;
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
                    margin-bottom: 40px;
                }
                li {
                    margin: 16px 0 16px 0;
                }
            `}</style>
        </div>
    );
};

export const SummaryBox2 = () => {
    return (
        <div className="box">
            <div className="left-box">
                <Waybox />
            </div>
            <div className="right-box">
                <Gallery />
            </div>
            <style jsx>{`
                .box {
                    display: flex;
                    justify-content: space-between;
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
    return (
        <section>
            <div className="project-bg">
                <div className="project-wrap">
                    <div className="left-box">
                        <div className="project-box-title">
                            <h3>Project 02.</h3>
                            <h2>DMZ평화의 길 메타버스 콘텐츠 개발</h2>
                        </div>
                        <div className="project-box-image">
                            <Image src="/images/metaverse_img/dmz_main_meta.svg" alt="DMZ 프로젝트" width={650} height={400} />
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="project-box-title">
                            <h3>&nbsp;</h3>
                            <h2>&nbsp;</h2>
                        </div>
                        <div className="project-box-image">
                            <div className="project-box-app-top">
                                <Image src="/images/metaverse_img/img_dmz_cover_meta.svg" width={150} height={150} alt="DMZ 어플 아이콘" />
                                <div className="project-box-app-top-right">
                                    <div className="icon-box">
                                        <Image src="/images/metaverse_img/img_zepeto_meta.svg" width={50} height={50} alt="제페토 아이콘" />
                                        <div className="icon-box-title">
                                            <p>개발환경</p>
                                            <p>ZEPETO Build it</p>
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
                                    {Metaverse_project_02.map((el, index) => (
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
                {/* <div className="project-wrap">
                    <div className="left-box">
                        <Waybox />
                    </div>
                    <div className="img-right-box">
                        <Gallery />
                    </div>
                </div> */}
                <div className="summary-wrap">
                    <div className="summary-box">
                        <SummaryBox2 />
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
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
                    padding: 100px 0 100px 0;
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
                    padding: 32px;
                    background: #ffffff;
                    border: 1px solid #f2f2f2;
                    border-radius: 12px;
                    width: 1000px;
                }

                .img-right-box {
                    display: flex;
                    align-items: center;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

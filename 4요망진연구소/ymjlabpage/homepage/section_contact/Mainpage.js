"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function ContactPage({ children }) {
    const sendEmailHandler = () => {
        axios.get("/api/email").then((res) => {
            console.log(res.data);
        });
    };

    return (
        <section>
            <div className="contact-wrap">
                <div className="left-box">
                    <div className="title">
                        <h1>Contact</h1>
                    </div>
                    <div className="sub-title">
                        <h4>요망진연구소는 다양한 분야에서 기업간의 제휴를 통해 상생하는 비즈니스 참여를 기다립니다.</h4>
                    </div>
                    <Image src="/images/img_mail_cont.svg" width={300} height={300} alt="contact-이미지" />
                </div>
                <div className="right-box">
                    <label>문의</label>
                    <select>
                        <option value="">문의유형을 선택해주세요.</option>
                        <option value="꿀트립 서비스">꿀트립 서비스</option>
                        <option value="메타버스 에이전시">메타버스 에이전시</option>
                        <option value="기타">기타</option>
                    </select>
                    <label>이름</label>
                    <input />
                    <label>이메일</label>
                    <div className="email-box">
                        <input /> @ <input />
                    </div>
                    <label>연락처</label>
                    <div className="phone-box">
                        <input /> - <input /> - <input />
                    </div>
                    <label>제목 </label>
                    <input />
                    <label>문의내용</label>
                    <textarea />
                </div>
            </div>
            <div className="check-wrap">
                <div className="check-box">
                    <input type="checkbox" />
                    개인정보 수집,이용 동의 <span>내용보기</span>
                </div>
                <div className="btn-list">
                    <button>취소</button>
                    <button onClick={() => sendEmailHandler()}>확인</button>
                </div>
            </div>

            <style jsx>{`
                section {
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 146px;
                }
                .left-box {
                    margin-right: 32px;
                }
                .contact-wrap {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 22px;
                }
                .check-wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                h1 {
                    font-weight: var(--bold);
                    font-size: 32px;
                    line-height: 40px;
                    display: flex;
                    color: var(--font_400);
                }
                select {
                    padding: 8px;
                    width: 328px;
                    height: 42px;
                    background: #ffffff;
                    border: 1px solid #dddddd;
                    color: var(--font_100);
                }
                h4 {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 20px;
                    color: #000000;
                }

                .title {
                    margin-bottom: 16px;
                }
                .sub-title {
                    width: 350px;
                    margin-bottom: 260px;
                }
                .right-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                }

                textarea {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    padding: 8px;
                    gap: 10px;
                    width: 588px;
                    height: 116px;
                    background: #ffffff;
                    border: 1px solid #dddddd;
                    flex: none;
                    order: 1;
                    flex-grow: 0;
                }
                label {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 20px;
                    color: #404040;
                    margin: 14px 0 4px 0;
                }
                option {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    display: flex;
                    color: #767676;
                }
                .email-box > input {
                    width: 200px;
                }
                .phone-box > input {
                    width: 100px;
                }
                .check-box {
                    display: flex;
                }
                .check-box > input {
                    width: 16px;
                    margin-right: 8px;
                }

                .btn-list {
                    margin-top: 16px;
                }
                input {
                    box-sizing: border-box;
                    padding: 8px;
                    background: #ffffff;
                    border: 1px solid #dddddd;
                    width: 328px;
                    border-radius: 5px;
                }

                button {
                    width: 190px;
                    height: 56px;
                    background: #ffffff;
                    border: 1px solid #ff8f0b;
                    border-radius: 6px;
                    color: #ff8f0b;
                    margin: 0 20px 80px 20px;
                }
                button:hover {
                    background: #ff8f0b;
                    border: 1px solid #ff8f0b;
                    color: #ffffff;
                    transition: all 0.3s;
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

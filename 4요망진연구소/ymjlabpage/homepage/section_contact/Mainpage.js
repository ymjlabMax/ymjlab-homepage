"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const options = [
    { value: "꿀트립서비스", label: "꿀트립서비스" },
    { value: "메타버스에이전시", label: "메타버스에이전시" },
    { value: "기타", label: "기타" },
];

const mailOptions = [
    {
        value: "",
        label: "직접입력",
    },
    {
        value: "naver.com",
        label: "naver.com",
    },
    {
        value: "daum.net",
        label: "daum.net",
    },
    {
        value: "hanmail.net",
        label: "hanmail.net",
    },
    {
        value: "gmail.com",
        label: "gmail.com",
    },
    {
        value: "hotmail.com",
        label: "hotmail.com",
    },
    {
        value: "nate.com",
        label: "nate.com",
    },
];

export default function ContactPage({ children }) {
    const router = useRouter();
    // 연락정보 상태 관리
    const [contactInfo, setContactInfo] = useState({
        type: "",
        name: "",
        email: "",
        title: "",
        content: "",
        agree: "",
    });
    //전화번호 상태 관리
    const [phoneNum, setPhoneNum] = useState({ num1: "", num2: "", num3: "" });
    // 문의유형 관리
    const [type, setType] = useState("");
    // 이메일 도메인 관리
    const [server2, setServer2] = useState("");

    //동의하기 모달창 관리
    const [isModal, setIsModal] = useState(false);

    /** 입력된 텍스트 관리 */
    const handleInputValue = (key) => (e) => {
        setContactInfo({ ...contactInfo, [key]: e.target.value });
    };
    /** 입력된 전화번호 관리 */
    const handleInputValueNum = (key) => (e) => {
        setPhoneNum({ ...phoneNum, [key]: e.target.value });
    };

    // const handleEmailServer = (e) => {
    //     console.log("실행되나요?", contactInfo.emailServer.length);
    //     if (contactInfo.emailServer.length > 0) {
    //         setContactInfo({ ...contactInfo, emailServer: "" });
    //         console.log("실행되나요?33333333", contactInfo.emailServer.length);
    //         // setServer2(e.value);
    //     } else {
    //         console.log("실행되나요?2222", e);
    //         setServer2(e.value);
    //     }
    // };

    /** smtp 실행 */
    const sendEmailHandler = () => {
        let sendInfo = {};

        if (contactInfo.agree === "on") {
            sendInfo = {
                type: type.value,
                name: contactInfo.name,
                phone: phoneNum.num1 + "-" + phoneNum.num2 + "-" + phoneNum.num3,
                email: contactInfo.email + server2.value,
                title: contactInfo.title,
                content: contactInfo.content,
            };

            // smpt 서비스 실시
            axios
                .post("/api/email", sendInfo, {
                    headers: {
                        "Content-type": "application/json",
                    },
                })
                .then((res) => {
                    if (res.data.message === "ok") {
                        confirm("문의하신 내용이 접수 되었습니다.");
                        router.reload();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            confirm("개인정보 수집 및 이용에 동의해주시기 바랍니다.");
        }
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
                    <div className="select-box">
                        <label>문의</label>
                        <CreatableSelect
                            instanceId="select-box"
                            options={options}
                            placeholder="문의유형을 선택해주세요."
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 5,
                                colors: {
                                    ...theme.colors,
                                    primary25: "#ffe561",
                                    primary: "#ff8f0b",
                                },
                            })}
                            onChange={setType}
                        />
                    </div>
                    <label>이름</label>
                    <input onChange={handleInputValue("name")} />
                    <label>이메일</label>
                    <div className="email-box">
                        {/* <input onChange={handleInputValue("email")} /> @ <input defaultValue={server2} onChange={handleInputValue("emailServer")} />{" "} */}
                        <input onChange={handleInputValue("email")} /> @
                        <div className="server-box">
                            <CreatableSelect
                                instanceId="select-box"
                                defaultValue={mailOptions[0]}
                                isClearable
                                options={mailOptions}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 5,
                                    colors: {
                                        ...theme.colors,
                                        primary25: "#ffe561",
                                        primary: "#ff8f0b",
                                    },
                                })}
                                onChange={setServer2}
                            />
                        </div>
                    </div>
                    <label>연락처</label>
                    <div className="phone-box">
                        <input onChange={handleInputValueNum("num1")} /> - <input onChange={handleInputValueNum("num2")} /> -{" "}
                        <input onChange={handleInputValueNum("num3")} />
                    </div>
                    <label>제목 </label>
                    <input onChange={handleInputValue("title")} />
                    <label>문의내용</label>
                    <textarea onChange={handleInputValue("content")} />
                </div>
            </div>
            <div className="check-wrap">
                <div className="check-box">
                    <input type="checkbox" onChange={handleInputValue("agree")} />
                    개인정보 수집,이용동의&nbsp;&nbsp;&nbsp;<span className="bold-span">내용보기</span>
                </div>
                <div className="btn-list">
                    <Link href="/">
                        <button>취소</button>
                    </Link>
                    <button className="active-btn" onClick={() => sendEmailHandler()}>
                        확인
                    </button>
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
                    flex-direction: column;
                    justify-content: flex-start;
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
                .select-box {
                    width: 328px;
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
                    margin-bottom: 210px;
                }
                .right-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    width: 50%;
                }

                textarea {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    padding: 8px;
                    gap: 10px;
                    width: 550px;
                    height: 150px;
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
                .email-box {
                    display: flex;
                    align-items: center;
                }
                .server-box {
                    margin-left: 8px;
                    width: 280px;
                }

                .email-box > input {
                    width: 180px;
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
                    padding: 7px;
                    background: #ffffff;
                    border: 1px solid #dddddd;
                    width: 328px;
                    border-radius: 5px;
                }

                input:focus {
                    border: 1px solid var(--main_orange);
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
                .bold-span {
                    font-weight: 500;
                    font-size: 16px;
                    color: #404040;
                }

                .active-btn {
                    background: var(--main_orange);
                    color: var(--white);
                }

                @media only screen and (max-width: 600px) {
                }
            `}</style>
        </section>
    );
}

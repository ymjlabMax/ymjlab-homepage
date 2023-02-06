"use client";
import React, { useState } from "react";

export default function ModalPage({ setIsOpenModal }) {
    return (
        <section onClick={() => setIsOpenModal()}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h1>개인정보 수집·이용 동의서</h1>
                <p>주식회사 요망진구소는(이하 &quot;회사&quot;) 회사에 문의하시는 분들을 대상으로 아래와 같이 개인정보를 수집·이용하고 있습니다.</p>
                <p>수집한 개인정보는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률‘ 및 기타 관계 법령에 의거하여 보호 됩니다.</p>
                <br />
                <p>1. 개인정보의 수집 및 이용 목적:</p>
                <p>꿀트립서비스, 메타버스에이전시, 기타 문의에 따른 본인확인 및 고지사항의 전달, 문의사항에 대한 응대, 원활한 의사소통의 경로확보 </p>
                <br />
                <p>2. 수집하는 개인정보의 항목:</p>
                <p>(필수) 수집항목: 이름, 이메일, 연락처</p>
                <br />
                <p>3. 개인정보의 보유 및 이용기간:</p>
                <p>문의 접수일로부터 1년(단, 문의자께서 개인정보의 삭제를 요청하시는 경우 지체없이 이를 삭제 합니다)</p>
                <br />
                <p>4. 동의를 거부할 권리 및 동의 거부에 따른 불이익:</p>
                <p>문의자는 개인정보의 수집·이용 등과 관련한 위 사항에 대하여 원하지 않는 경우 동의를 거부할 수 있습니다.</p>
                <p>다만, 수집하는 개인정보의 항목에서 필수 정보에 대한 수집 및 이용에 대하여 동의하지 않는 경우는 문의 응대에 제한이 있을 수 있습니다.</p>
                <br />
                <p>이에 회사는 꿀트립서비스, 메타버스에이전시, 기타 문의의 개인정보 수집·이용을 위하여 개인정보 보호법에 따라 귀하의 동의를 받고자 합니다.</p>
                <div className="btn-list">
                    <button onClick={() => setIsOpenModal()}>닫기</button>
                </div>
            </div>
            <style jsx>{`
                section {
                    position: fixed;
                    z-index: 999;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.4);
                }

                .modal-box {
                    role: dialog;
                    /* width: 1080px; */
                    background: var(--white);
                    border-radius: 8px;
                    padding: 20px 32px 20px 32px;
                    overflow: hidden;
                }

                h1 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    display: flex;
                    justify-content: center;
                    color: #181818;
                    margin-bottom: 39px;
                }
                p {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #181818;
                }

                .btn-list {
                    display: flex;
                    justify-content: center;
                }
                button {
                    width: 190px;
                    height: 56px;
                    background: #ffffff;
                    border: 1px solid #ff8f0b;
                    border-radius: 6px;
                    color: #ff8f0b;
                    margin: 32px 0px 8px 0px;
                }
                button:hover {
                    background: #ff8f0b;
                    border: 1px solid #ff8f0b;
                    color: #ffffff;
                    transition: all 0.3s;
                }
            `}</style>
        </section>
    );
}

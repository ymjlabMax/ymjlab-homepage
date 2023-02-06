"use client";
import React, { useState } from "react";

export default function ModalPage({ setIsOpenModal }) {
    return (
        <section onClick={() => setIsOpenModal()}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h1>개인정보 수집·이용 동의서</h1>
                <p>1.수집하는 개인정보 항목</p>
                <br />
                <p> 회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                <p> 1) 수집항목 : 이름, 이메일, 연락처, 쿠키 </p>
                <p> 2) 개인정보 수집방법 : 홈페이지(CONTACT) </p>
                <br />
                <p> 2. 개인정보의 수집 및 이용목적 </p>
                <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                <br />
                <p> 1) 서비스 제공에 관한 계약 이행 및 접수내역 관리 </p>
                <p>- 콘텐츠 제공, 문의 및 불만사항 처리 </p>
                <br />
                <p>3.개인정보의 보유 및 이용기간</p>
                <p>
                    원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우
                    회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.{" "}
                </p>
                <br />
                <p>1) 보존 항목 : 이름, 연락처, 이메일</p>
                <p>2) 보존 근거 : 서비스 이용의 혼선 방지 </p>
                <p>
                    3) 보존 기간 : 5년 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서
                    정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
                </p>
                <br />
                <p>- 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                <p>- 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                <p>- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                <p>- 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)</p>
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
                    width: 1080px;
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

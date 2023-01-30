import Link from "next/link";
import Image from "next/image";

export default function Errorpage({ statusCode }) {
    return (
        <section>
            {/* <nav>
                <Link href="/" scroll={false} shallow={true}>
                    <Image className="logo-img" src="/images/logo_ymj.svg" alt="logo" width={80} height={80} />
                </Link>
                <ul className="nav-bar">
                    <Link href="/" scroll={true} shallow={true}>
                        <li>회사 소개</li>
                    </Link>

                    <Link href="/kkultrip" scroll={true} shallow={true}>
                        <li>꿀트립 서비스</li>
                    </Link>
                    <Link href="/metaverse" scroll={true} shallow={true}>
                        <li>메타버스 서비스</li>
                    </Link>
                    <li>Contact</li>
                </ul>
            </nav> */}
            <h1>{statusCode}</h1>
            <h3>😣 죄송합니다. 원하시는 페이지를 찾을수 없습니다.</h3>
            <div>존재하지 않은 주소를 입력하셨거나,</div>
            <div>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</div>
            <div>
                <Link href="/">
                    <button>홈으로 이동하기</button>
                </Link>
            </div>
            <style jsx>{`
                section {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                nav {
                    width: 100vw;
                    padding: 12px 80px 12px 80px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: #ffffffc1;
                    z-index: 999;
                    font-weight: 500;
                    font-size: 15;
                    color: #181818;
                    line-height: 19px;
                }
                li {
                    float: left;
                    margin-left: 20px;
                }
                .logo-img {
                    margin-left: 30px;
                    opacity: 1;
                }

                /* 휴대폰 사이즈 */
                @media only screen and (max-width: 600px) {
                    .reponsive-nav-bar {
                        display: block;
                    }
                    .reponsive-nav-bar-box {
                    }
                }

                h1 {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 150px;
                    color: #c9c9c9;
                    margin-bottom: 16px;
                }
                h3 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    text-align: center;
                    color: #181818;
                }

                button {
                    width: 240px;
                    height: 56px;
                    background: #ffffff;
                    border: 1px solid #ff8f0b;
                    border-radius: 6px;
                    color: #ff8f0b;
                    font-size: 16px;
                    margin-top: 50px;
                }

                button:hover {
                    background: #ff8f0b;
                    border: 2px solid #ff8f0b;
                    color: #ffffff;
                    transition: all 0.3s;
                }
            `}</style>
        </section>
    );
}

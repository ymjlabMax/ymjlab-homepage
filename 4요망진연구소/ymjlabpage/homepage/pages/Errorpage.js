import Link from "next/link";

export default function Errorpage({ statusCode }) {
    return (
        <section>
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

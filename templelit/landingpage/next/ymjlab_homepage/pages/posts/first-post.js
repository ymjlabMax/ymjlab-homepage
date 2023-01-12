import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";

const YourComponent = () => {
    return (
        <>
            <Image src="/asset/images/jason.png" height={144} width={144} alt="Max" />
            <h1>22222</h1>
        </>
    );
};

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>첫번째 페이지</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
                />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <YourComponent />
            <Image src="/asset/images/Max.png" height={144} width={144} alt="Max" />;
        </Layout>
    );
}

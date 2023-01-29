/** @type {import('next').NextConfig} */

const API_KEY = process.env.KAKAO_API_KEY;

const nextConfig = {
    experimental: {
        appDir: true,
    },

    env: {
        kakaoApiKey: API_KEY,
    },

    // exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    //     return {
    //         "/": { page: "/" },
    //         "/kkultrip": { page: "/kkultrip" },
    //         "/metaverse": { page: "/metaverse" },
    //     };
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: "/contact",
    //             destination: "https://www.naver.com",
    //             permanent: false,
    //         },
    //     ];
    // },
    // async rewrites() {
    //     return [
    //         {
    //             source: "/kakaomap",
    //             destination: `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`,
    //         },
    //     ];
    // },
};

module.exports = nextConfig;

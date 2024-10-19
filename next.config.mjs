/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*', // 서버의 API 엔드포인트
            },
        ];
    },
    images: {
        domains: ['github.com'], // GitHub 도메인 추가
    },
};

export default nextConfig;

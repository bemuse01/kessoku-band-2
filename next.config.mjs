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
};

export default nextConfig;

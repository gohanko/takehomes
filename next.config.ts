import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/authentication/login',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;

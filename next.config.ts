import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/authentication/login',
                permanent: true,
            },
            {
                source: '/authentication',
                destination: '/authentication/login',
                permanent: true,
            },
            {
                source: '/profile',
                destination: '/profile/basic_details',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.public.blob.vercel-storage.com",
                port: "",
            }
        ]
    }
};

export default nextConfig;

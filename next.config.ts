import { routesConfig } from "@/configs/routes-config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: routesConfig.authentication_login.route,
                permanent: true,
            },
            {
                source: '/authentication',
                destination: routesConfig.authentication_login.route,
                permanent: true,
            },
            {
                source: '/user/profile',
                destination: routesConfig.user_profile_basic_details.route,
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
            },
            {
                protocol: "https",
                hostname: "api.dicebear.com"
            }
        ]
    }
};

export default nextConfig;

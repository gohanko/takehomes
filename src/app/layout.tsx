import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "React/NextJS Take Home Application",
    description: "A takehome application to demonstrate React/NextJS abilities",
};

const Layout = ({
    children
}: TLayoutProps) => (
    <html lang="en" data-theme="dark">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
            {children}
        </body>
    </html>
);

export default Layout;

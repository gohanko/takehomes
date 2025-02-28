import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Convertium TakeHome Application",
    description: "A takehome application for Convertium",
};

const RootLayout = ({
    children
}: TLayoutProps) => (
    <html lang="en" data-theme="dark">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
        </body>
    </html>
);

export default RootLayout;

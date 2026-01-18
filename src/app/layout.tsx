import type { Metadata } from "next";
import { Fragment_Mono, Fraunces, Noto_Sans_Bengali } from "next/font/google";
import React from "react";
import "./globals.css";

const display = Fraunces({
	subsets: ["latin"],
	variable: "--font-display",
	style: ["normal", "italic"],
});

const mono = Fragment_Mono({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-mono",
});

const bengali = Noto_Sans_Bengali({
	subsets: ["bengali"],
	weight: ["400", "700"],
	variable: "--font-bn",
});

export const metadata: Metadata = {
	title: "My Next.js — Animated Starter",
	description: "A distinctive, motion-forward Next.js landing page.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`${display.variable} ${mono.variable} ${bengali.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

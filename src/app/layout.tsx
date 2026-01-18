import type { Metadata } from "next";
import { Fragment_Mono, Fraunces } from "next/font/google";
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
				className={`${display.variable} ${mono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

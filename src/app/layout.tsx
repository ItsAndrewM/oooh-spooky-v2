import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Analytics from "@/components/analytics";
import SpeedInsights from "@/components/speed-insights";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "black",
	colorScheme: "dark",
};

export const metadata: Metadata = {
	title: {
		template: "%s | Oooh, Spooky Podcast",
		default: "Oooh, Spooky - The Comedy Horror Podcast",
	},
	description:
		"Join Adam Knox, Luka Muller and Peter Jones on Oooh, Spooky - the hilarious comedy horror podcast exploring all things spooky and weird.",
	keywords: [
		"horror podcast",
		"comedy podcast",
		"Oooh Spooky",
		"Adam Knox",
		"Luka Muller",
		"Peter Jones",
		"funny podcast",
		"scary stories",
	],
	authors: [
		{ name: "Adam Knox" },
		{ name: "Luka Muller" },
		{ name: "Peter Jones" },
	],
	creator: "Oooh, Spooky Team",
	publisher: "Oooh, Spooky Productions",
	alternates: {
		canonical: "https://ooohspooky.com",
	},
	openGraph: {
		title: "Oooh, Spooky - The Comedy Horror Podcast",
		description:
			"Join Adam Knox, Luka Muller and Peter Jones on Oooh, Spooky - the hilarious comedy horror podcast exploring all things spooky and weird.",
		url: "https://ooohspooky.com",
		siteName: "Oooh, Spooky Podcast",
		images: [
			{
				url: "/oooh-spooky.png",
				width: 1200,
				height: 630,
				alt: "Oooh, Spooky Podcast Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Oooh, Spooky - The Comedy Horror Podcast",
		description:
			"Join Adam Knox, Luka Muller and Peter Jones on Oooh, Spooky - the hilarious comedy horror podcast exploring all things spooky and weird.",
		images: ["/oooh-spooky.png"],
		creator: "@OoohSpookyPod",
	},
	icons: {
		icon: "/oooh-spooky.png",
		shortcut: "/oooh-spooky.png",
		apple: "/oooh-spooky.png",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/oooh-spooky.png" />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
				<Toaster />
			</body>
		</html>
	);
}

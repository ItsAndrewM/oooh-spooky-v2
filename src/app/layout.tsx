import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Analytics from "@/components/analytics";
import SpeedInsights from "@/components/speed-insights";
import { Toaster } from "sonner";
import { HighlightInit } from "@highlight-run/next/client";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "black",
	colorScheme: "dark",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://www.ooohspooky.com"),
	title: {
		template: "%s | Oooh, Spooky Podcast",
		default:
			"Oooh, Spooky - Comedy Horror Podcast with Adam Knox, Luka Muller and Peter Jones",
	},
	description:
		"Oooh, Spooky Podcast - Join comedians Adam Knox, Luka Muller and Peter Jones as they explore paranormal mysteries, ghosts, UFOs and unexplained phenomena with humor. New episodes weekly!",
	keywords: [
		"Oooh, Spooky",
		"Oooh, Spooky podcast",
		"Adam Knox",
		"Luka Muller",
		"Peter Jones",
		"comedy horror podcast",
		"paranormal comedy",
		"ghost stories",
		"unexplained mysteries",
		"UFO stories",
		"Melbourne comedians",
		"Australian comedy podcast",
		"weekly horror podcast",
	],
	authors: [
		{ name: "Adam Knox" },
		{ name: "Luka Muller" },
		{ name: "Peter Jones" },
	],
	creator: "Oooh, Spooky Team",
	publisher: "Oooh, Spooky Productions",
	category: "Comedy",
	alternates: {
		canonical: "https://www.ooohspooky.com",
		types: {
			"application/rss+xml": "https://ooohspooky.libsyn.com/rss",
		},
	},
	applicationName: "Oooh, Spooky Podcast",
	referrer: "origin-when-cross-origin",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title:
			"Oooh, Spooky - Comedy Horror Podcast with Adam Knox, Luka Muller and Peter Jones",
		description:
			"Oooh, Spooky Podcast - Join comedians Adam Knox, Luka Muller and Peter Jones as they explore paranormal mysteries, ghosts, UFOs and unexplained phenomena with humor. New episodes weekly!",
		url: "https://www.ooohspooky.com",
		siteName: "Oooh, Spooky Podcast",
		images: [
			{
				url: "/images/hero-image.png",
				width: 1200,
				height: 630,
				alt: "Oooh, Spooky Podcast Logo",
			},
		],
		locale: "en_US",
		type: "website",
		countryName: "Australia",
		emails: ["ooohspookypodcast@gmail.com"],
		audio: "https://ooohspooky.libsyn.com/rss",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Oooh, Spooky - Comedy Horror Podcast with Adam Knox, Luka Muller and Peter Jones",
		description:
			"Oooh, Spooky Podcast - Join comedians Adam Knox, Luka Muller and Peter Jones as they explore paranormal mysteries, ghosts, UFOs and unexplained phenomena with humor. New episodes weekly!",
		creator: "@OoohSpookyPod",
		site: "@OoohSpookyPod",
		images: [
			{
				url: "/images/hero-image.png",
				width: 1200,
				height: 630,
				alt: "Oooh, Spooky Podcast Logo",
			},
		],
	},
	icons: {
		icon: "/oooh-spooky.png",
		shortcut: "/oooh-spooky.png",
		apple: "/oooh-spooky.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/oooh-spooky.png",
		},
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	appLinks: {
		ios: {
			url: "https://podcasts.apple.com/us/podcast/oooh-spooky/id1440546225",
			app_store_id: "id1440546225",
		},
		android: {
			package: "com.spotify.music",
			url: "https://open.spotify.com/show/2Mz6GRNnR4n1s2aVs6phDk",
		},
	},
	verification: {
		google: "verify_code_from_google",
		yandex: "verify_code_from_yandex",
		yahoo: "verify_code_from_yahoo",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<HighlightInit
				projectId={process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
				serviceName="oooh-spooky"
				tracingOrigins
				networkRecording={{
					enabled: true,
					recordHeadersAndBody: true,
					urlBlocklist: [],
				}}
			/>
			<html lang="en" suppressHydrationWarning>
				<head>
					<link rel="icon" href="/oooh-spooky.png" />
					<meta property="og:site_name" content="Oooh, Spooky Podcast" />
					<meta property="og:image" content="/images/hero-image.png" />
					<link
						rel="alternate"
						type="application/rss+xml"
						title="Oooh, Spooky Podcast RSS Feed"
						href="https://ooohspooky.libsyn.com/rss"
					/>
					<meta
						name="apple-itunes-app"
						content="app-id=1440546225, app-argument=https://podcasts.apple.com/us/podcast/oooh-spooky/id1440546225"
					/>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black" />
					<meta name="apple-mobile-web-app-title" content="Oooh, Spooky" />
					<meta name="application-name" content="Oooh, Spooky" />
				</head>
				<body className={`${inter.className} ${jetbrainsMono.variable}`}>
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
		</>
	);
}

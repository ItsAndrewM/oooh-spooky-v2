import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date);
}

export const platforms = [
	{
		name: "Spotify",
		url: "https://open.spotify.com/show/2Mz6GRNnR4n1s2aVs6phDk?si=c3bd3809c100447f",
		icon: "/icons/spotify.svg",
	},
	{
		name: "Apple Podcasts",
		url: "https://podcasts.apple.com/us/podcast/oooh-spooky/id1440546225",
		icon: "/icons/apple-podcasts.svg",
	},
	// {
	// 	name: "Google Podcasts",
	// 	url: "https://podcasts.google.com/feed/your-google-id",
	// 	icon: "/icons/google-podcasts.svg",
	// },
	// {
	// 	name: "YouTube",
	// 	url: "https://www.youtube.com/@OoohSpooky",
	// 	icon: "/images/youtube.png",
	// },
	{
		name: "Patreon",
		url: "https://www.patreon.com/ooohspooky",
		icon: "/icons/patreon.svg",
	},
	{
		name: "RSS Feed",
		url: "https://ooohspooky.libsyn.com/rss",
		icon: "/icons/rss.svg",
	},
];

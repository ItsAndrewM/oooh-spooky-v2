import { XMLParser } from "fast-xml-parser";

export interface Episode {
	guid: string;
	title: string;
	description: string;
	pubDate: string;
	enclosure?: {
		url: string;
		type: string;
		length: string;
	};
	image?: string;
}

export interface Host {
	id: number;
	name: string;
	image: string;
	bio: string;
	social: {
		twitter?: string;
		instagram?: string;
		facebook?: string;
		website?: string;
		youtube?: string;
		tiktok?: string;
	};
}

export interface Podcast {
	id: number;
	title: string;
	description: string;
	image: string;
	url: string;
	isPremium: boolean;
}

export interface PodcastItem {
	title?: string;
	description?: string;
	pubDate?: string;
	guid?: { "#text": string } | string;
	enclosure?: {
		"@_url": string;
		"@_type": string;
		"@_length": string;
	};
	"itunes:image"?: {
		"@_href": string;
	};
}

export async function getPodcastEpisodes(): Promise<Episode[]> {
	try {
		const response = await fetch("https://ooohspooky.libsyn.com/rss", {
			next: { revalidate: 3600 },
		});
		const text = await response.text();

		// Parse the XML using fast-xml-parser
		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: "@_",
		});
		const result = parser.parse(text);

		// Extract episodes from the parsed XML
		const items = result.rss.channel.item || [];
		const episodes: Episode[] = [];

		// Ensure items is always an array
		const itemsArray = Array.isArray(items) ? items : [items];

		itemsArray.forEach((item: PodcastItem) => {
			const title = item.title || "";
			const description = item.description || "";
			const pubDate = item.pubDate || "";

			// Handle different guid formats
			let guid: string;
			if (typeof item.guid === "object" && item.guid && "#text" in item.guid) {
				guid = item.guid["#text"];
			} else if (typeof item.guid === "string") {
				guid = item.guid;
			} else {
				guid = Math.random().toString();
			}

			let enclosureData = undefined;
			if (item.enclosure) {
				enclosureData = {
					url: item.enclosure["@_url"] || "",
					type: item.enclosure["@_type"] || "",
					length: item.enclosure["@_length"] || "",
				};
			}

			// Try to get image from itunes:image
			const image = item["itunes:image"]?.["@_href"] || "";

			episodes.push({
				guid,
				title,
				description,
				pubDate,
				enclosure: enclosureData,
				image,
			});
		});

		return episodes;
	} catch (error) {
		console.error("Error fetching podcast feed:", error);
		return [];
	}
}

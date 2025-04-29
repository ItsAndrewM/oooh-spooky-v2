import { MetadataRoute } from "next";
import { getPodcastEpisodes } from "@/lib/podcast";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://ooohspooky.com";

	// Static routes
	const routes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/episodes`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/listen`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];

	// Dynamic episode routes
	try {
		const episodes = await getPodcastEpisodes();

		const episodeRoutes = episodes.map((episode) => ({
			url: `${baseUrl}/episodes/${episode.guid}`,
			lastModified: new Date(episode.pubDate || new Date()),
			changeFrequency: "never",
			priority: 0.7,
		}));

		return [...routes, ...episodeRoutes] as MetadataRoute.Sitemap;
	} catch (error) {
		console.error("Failed to generate episode routes for sitemap:", error);
		return routes as MetadataRoute.Sitemap;
	}
}

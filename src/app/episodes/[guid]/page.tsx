import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPodcastEpisodes } from "@/lib/podcast";
import { formatDate } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

type Params = Promise<{
	guid: string;
}>;

// Generate dynamic metadata for each episode
export async function generateMetadata({
	params,
}: {
	params: { guid: string };
}): Promise<Metadata> {
	const episodes = await getPodcastEpisodes();
	const episode = episodes.find((ep) => ep.guid === params.guid);

	if (!episode) {
		return {
			title: "Episode Not Found | Oooh, Spooky Podcast",
			description: "The requested episode could not be found.",
		};
	}

	// Strip HTML tags from description for clean meta description
	const stripHtml = (html: string) => {
		return html?.replace(/<[^>]*>?/gm, "") || "";
	};

	const cleanDescription = stripHtml(episode.description || "").substring(
		0,
		160
	);

	return {
		title: `${episode.title} | Oooh, Spooky Podcast`,
		description: cleanDescription,
		keywords: [
			"Oooh Spooky",
			"podcast episode",
			"comedy horror",
			episode.title,
		],
		openGraph: {
			title: episode.title,
			description: cleanDescription,
			url: `https://ooohspooky.com/episodes/${episode.guid}`,
			type: "article",
			images: [
				{
					url: episode.image || "/oooh-spooky.png",
					width: 1200,
					height: 630,
					alt: episode.title,
				},
			],
			publishedTime: episode.pubDate,
		},
		twitter: {
			card: "summary_large_image",
			title: episode.title,
			description: cleanDescription,
			images: [episode.image || "/oooh-spooky.png"],
		},
	};
}

export default async function EpisodeDetailPage({
	params,
}: {
	params: Params;
}) {
	const { guid } = await params;
	const episodes = await getPodcastEpisodes();
	const episode = episodes.find((ep) => ep.guid === guid);

	if (!episode) {
		return (
			<main className="min-h-screen flex flex-col">
				<Header />
				<div className="container mx-auto px-4 py-16 flex-grow">
					<h1 className="text-4xl font-bold mb-8 text-center spooky-title">
						Episode Not Found
					</h1>
					<p className="text-center mb-8">
						Sorry, we couldn&apos;t find the episode you&apos;re looking for.
					</p>
					<div className="flex justify-center">
						<Link href="/episodes" className="cta-button">
							Back to Episodes
						</Link>
					</div>
				</div>
				<Footer />
			</main>
		);
	}

	return (
		<main className="min-h-screen flex flex-col">
			<Header />

			<div className="container mx-auto px-4 py-12">
				<div className="max-w-4xl mx-auto">
					<Link
						href="/episodes"
						className="text-primary hover:text-accent mb-6 inline-block"
					>
						← Back to Episodes
					</Link>

					<div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg mb-8">
						<div className="md:flex">
							<div className="md:w-1/3 bg-black p-6 flex items-center justify-center">
								{episode.image ? (
									<Image
										src={episode.image || "/placeholder.svg"}
										alt={episode.title}
										className="w-full max-w-[300px] rounded-md"
										width={300}
										height={300}
									/>
								) : (
									<div className="aspect-square w-full max-w-[300px] bg-black rounded-md flex items-center justify-center">
										<div className="text-4xl font-bold text-primary spooky-title p-4 text-center">
											OOOH, SPOOKY
										</div>
									</div>
								)}
							</div>
							<div className="md:w-2/3 p-6">
								<h1 className="text-2xl md:text-3xl font-bold mb-2">
									{episode.title}
								</h1>
								<p className="text-muted-foreground mb-6">
									{formatDate(new Date(episode.pubDate))}
								</p>

								<div className="flex flex-wrap gap-3 mb-6">
									{episode.enclosure?.url && (
										<a
											href={episode.enclosure.url}
											target="_blank"
											rel="noopener noreferrer"
											className="cta-button flex items-center gap-2"
										>
											<Play size={16} />
											Listen Now
										</a>
									)}
									<a
										href={`https://open.spotify.com/show/your-spotify-id`}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium py-2 px-6 rounded-md transition-colors duration-300"
									>
										Spotify
									</a>
									<a
										href={`https://podcasts.apple.com/podcast/your-apple-id`}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium py-2 px-6 rounded-md transition-colors duration-300"
									>
										Apple Podcasts
									</a>
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-border">
							<h2 className="text-xl font-bold mb-4">Episode Description</h2>
							<div
								dangerouslySetInnerHTML={{ __html: episode.description || "" }}
							/>
						</div>
					</div>

					<div className="bg-black p-6 rounded-lg">
						<h2 className="text-xl font-bold mb-4 text-primary">
							Share This Episode
						</h2>
						<div className="flex gap-4">
							<button className="bg-[#1DA1F2] text-white p-2 rounded-md hover:bg-[#1DA1F2]/80">
								Twitter
							</button>
							<button className="bg-[#4267B2] text-white p-2 rounded-md hover:bg-[#4267B2]/80">
								Facebook
							</button>
							<button className="bg-secondary text-secondary-foreground p-2 rounded-md hover:bg-secondary/80">
								Copy Link
							</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}

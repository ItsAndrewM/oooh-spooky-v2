import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPodcastEpisodes } from "@/lib/podcast";
import { formatDate, guidPlatforms } from "@/lib/utils";
import { Facebook, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { X } from "@/components/icons/x";
import { CopyButton } from "@/components/copy-button";

type Params = Promise<{
	guid: string;
}>;

// Generate dynamic metadata for each episode
export async function generateMetadata(props: {
	params: Params;
}): Promise<Metadata> {
	const { guid } = await props.params;
	const episodes = await getPodcastEpisodes();
	const episode = episodes.find((ep) => ep.guid === guid);

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
					url: episode.image || "/images/hero-image.png",
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
			images: [episode.image || "/images/hero-image.png"],
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
						<Link href="/episodes" className="cta-button" prefetch>
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
					<Button asChild className=" mb-6 inline-block">
						<Link href="/episodes" prefetch>
							← Back to Episodes
						</Link>
					</Button>

					<div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg mb-8">
						<div className="md:flex">
							<div className="md:w-1/3 bg-black p-6 flex items-center justify-center">
								<Image
									src={episode.image || "/images/hero-image.png"}
									alt={episode.title}
									className="w-full rounded-md"
									width={300}
									height={300}
								/>
							</div>
							<div className="md:w-2/3 p-6">
								<h1 className="text-2xl md:text-3xl font-bold mb-2">
									{episode.title}
								</h1>
								<p className="text-muted-foreground mb-6">
									{formatDate(new Date(episode.pubDate))}
								</p>

								<div className="flex flex-wrap items-center gap-3 mb-6">
									{episode.enclosure?.url && (
										<Button
											asChild
											className="cta-button flex items-center gap-2"
										>
											<a
												href={episode.enclosure.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Play size={24} />
												Listen Now
											</a>
										</Button>
									)}
									{guidPlatforms.map((platform) => (
										<Button
											asChild
											key={platform.name}
											className="w-16 h-16 mb-2 bg-inherit rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:bg-transparent"
										>
											<a
												key={platform.name}
												href={platform.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src={platform.icon}
													alt={platform.name}
													className="size-8"
													width={40}
													height={40}
												/>
											</a>
										</Button>
									))}
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
							<CopyButton
								url={`https://x.com/share?url=${encodeURIComponent(
									episode.enclosure?.url || ""
								)}`}
								className="text-[#4267B2] p-5 rounded-full h-10 w-10"
							>
								<X className="size-5" fill="black" />
							</CopyButton>
							<CopyButton
								url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
									episode.enclosure?.url || ""
								)}`}
								className="text-[#4267B2] p-5 rounded-full h-10 w-10"
							>
								<Facebook className="size-5" />
							</CopyButton>
							<CopyButton
								url={episode.enclosure?.url || ""}
								className="p-5 rounded-full"
							>
								Copy Link
							</CopyButton>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}

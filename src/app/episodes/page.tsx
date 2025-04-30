import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import PodcastListContainer from "@/components/podcast-list-container";
import { Suspense } from "react";
import { SearchEpisodes } from "@/components/search-episodes";
import PodcastListSkeleton from "@/components/podcast-list-skeleton";

export const metadata: Metadata = {
	title: "All Episodes | Oooh, Spooky Podcast",
	description:
		"Browse and listen to all episodes of Oooh, Spooky podcast - the comedy horror podcast featuring ghost stories, UFOs, and paranormal mysteries with Adam Knox, Luka Muller and Peter Jones.",
	keywords: [
		"Oooh, Spooky episodes",
		"Oooh, Spooky podcast",
		"comedy horror podcast episodes",
		"ghost story podcast",
		"paranormal podcast episodes",
		"UFO stories podcast",
		"Adam Knox podcast",
		"Luka Muller podcast",
		"Peter Jones podcast",
		"Melbourne comedy podcast",
		"spooky podcast archive",
		"all episodes",
		"Oooh, Spooky podcast episodes",
		"all Oooh, Spooky episodes",
	],
	openGraph: {
		title: "All Episodes | Oooh, Spooky Podcast",
		description:
			"Browse and listen to all episodes of Oooh, Spooky podcast - the comedy horror podcast featuring ghost stories, UFOs, and paranormal mysteries with Adam Knox, Luka Muller and Peter Jones.",
		url: "https://ooohspooky.com/episodes",
		type: "website",
	},
	alternates: {
		canonical: "https://ooohspooky.com/episodes",
	},
};

type PageParams = {
	searchParams: Promise<{ search: string }>;
};

export default async function EpisodesPage(props: PageParams) {
	const search = await props.searchParams;
	return (
		<main className="min-h-screen flex flex-col">
			<Header />

			<section className="py-16 flex-grow">
				<div className="container mx-auto px-4 flex flex-col gap-4">
					<h1 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
						All Episodes
					</h1>
					<SearchEpisodes />
					<Suspense fallback={<PodcastListSkeleton />}>
						<PodcastListContainer search={search?.search || ""} />
					</Suspense>
				</div>
			</section>

			<Footer />
		</main>
	);
}

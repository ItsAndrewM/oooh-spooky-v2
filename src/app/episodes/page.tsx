import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import PodcastListContainer from "@/components/podcast-list-container";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "All Episodes | Oooh, Spooky Podcast",
	description:
		"Browse and listen to all episodes of Oooh, Spooky - the hilarious comedy horror podcast with Adam Knox, Luka Muller and Peter Jones.",
	keywords: [
		"podcast episodes",
		"Oooh Spooky episodes",
		"comedy horror podcast",
		"scary stories",
		"podcast archive",
	],
	openGraph: {
		title: "All Episodes | Oooh, Spooky Podcast",
		description:
			"Browse and listen to all episodes of Oooh, Spooky - the hilarious comedy horror podcast with Adam Knox, Luka Muller and Peter Jones.",
		url: "https://ooohspooky.com/episodes",
		type: "website",
	},
};

export default async function EpisodesPage() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />

			<section className="py-16 flex-grow">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
						All Episodes
					</h1>
					<Suspense fallback={<div>Loading...</div>}>
						<PodcastListContainer />
					</Suspense>
				</div>
			</section>

			<Footer />
		</main>
	);
}

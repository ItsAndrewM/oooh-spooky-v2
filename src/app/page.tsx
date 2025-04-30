import { getPodcastEpisodes } from "@/lib/podcast";
import { Facebook, Instagram, Rss } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PodcastList from "@/components/podcast-list";
import HeroBanner from "@/components/hero-banner";
import PodcastGrid from "@/components/podcast-grid";
// import FeaturedVideos from "@/components/featured-videos";
import HostsSection from "@/components/hosts-section";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
	PodcastJsonLd,
	OrganizationJsonLd,
	LocalBusinessJsonLd,
} from "./components/json-ld";
import { CallToAction } from "@/components/call-to-action";
import { X } from "@/components/icons/x";

export const metadata: Metadata = {
	title: "Oooh, Spooky - Comedy Horror Podcast from Melbourne, Australia",
	description:
		"Oooh, Spooky podcast with Adam Knox, Luka Muller, and Peter Jones - exploring paranormal mysteries, ghost stories, and unexplained phenomena with comedy and humor. Listen to new episodes weekly!",
	keywords: [
		"Oooh, Spooky",
		"Oooh, Spooky podcast",
		"Adam Knox",
		"Luka Muller",
		"Peter Jones",
		"Melbourne comedians",
		"Australian comedy podcast",
		"paranormal comedy",
		"ghost stories podcast",
		"unexplained mysteries",
		"comedy horror podcast",
		"best spooky podcast",
	],
	openGraph: {
		title: "Oooh, Spooky - Comedy Horror Podcast from Melbourne, Australia",
		description:
			"Oooh, Spooky podcast with Adam Knox, Luka Muller, and Peter Jones - exploring paranormal mysteries, ghost stories, and unexplained phenomena with comedy and humor. Listen to new episodes weekly!",
		url: "https://ooohspooky.com",
		type: "website",
	},
	alternates: {
		canonical: "https://ooohspooky.com",
	},
};

export default async function Home() {
	const episodes = await getPodcastEpisodes();

	return (
		<main className="min-h-screen flex flex-col">
			<PodcastJsonLd
				url="https://ooohspooky.com"
				name="Oooh, Spooky - Comedy Horror Podcast"
				description="Three brave explorers of the unknown read excerpts from a haunted book of the paranormal. Adam Knox, Luka Muller and Peter Jones are comedians from Melbourne, Australia whose souls are on the line for the podcast about ghosts, ghouls, UFOs and often a group of easily excited villagers who've just seen something slightly weird, but not really that weird. Listener beware! You're in for a chuckle."
				author="Adam Knox, Luka Muller, Peter Jones"
				imageUrl="https://ooohspooky.com/oooh-spooky.png"
			/>
			<OrganizationJsonLd
				name="Oooh, Spooky Podcast"
				url="https://ooohspooky.com"
				logo="https://ooohspooky.com/oooh-spooky.png"
				description="A comedy podcast that explores the mysterious and unexplained. Hosted by Adam Knox, Luka Muller, and Peter Jones from Melbourne, Australia."
				sameAs={[
					"https://twitter.com/OoohSpooky",
					"https://www.instagram.com/ooohspooky/",
					"https://www.facebook.com/ooohspooky/",
					"https://ooohspooky.libsyn.com/rss",
				]}
			/>
			<LocalBusinessJsonLd />
			<Header />
			<HeroBanner />

			{/* Social Links */}
			<div className="bg-black py-6">
				<div className="container mx-auto flex justify-center">
					<div className="social-links text-primary flex justify-center items-center gap-4">
						<a
							href="https://twitter.com/OoohSpooky"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							className="hover:scale-110 transition-all duration-300"
						>
							<X className="size-5" fill="#d7d700" />
						</a>
						<a
							href="https://www.instagram.com/ooohspooky/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="hover:scale-110 transition-all duration-300"
						>
							<Instagram />
						</a>
						<a
							href="https://www.facebook.com/ooohspooky/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className="hover:scale-110 transition-all duration-300"
						>
							<Facebook />
						</a>
						{/* <a
							href="https://www.youtube.com/@OoohSpooky"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
							className="hover:scale-110 transition-all duration-300"
						>
							<Youtube />
						</a> */}
						<a
							href="https://ooohspooky.libsyn.com/rss"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RSS Feed"
							className="hover:scale-110 transition-all duration-300"
						>
							<Rss />
						</a>
					</div>
				</div>
			</div>

			{/* Latest Episodes */}
			<section className="py-16 bg-background">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
						Latest Episodes
					</h2>
					<PodcastList episodes={episodes.slice(0, 5)} />
					<div className="flex justify-center mt-10">
						<Button asChild className="cta-button ">
							<Link href="/episodes" prefetch>
								View All Episodes
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Patreon Shows */}
			<section className="py-16 bg-muted-background">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
						Our Podcasts
					</h2>
					<PodcastGrid />
				</div>
			</section>

			{/* Featured Videos */}
			{/* <FeaturedVideos /> */}

			{/* Hosts Section */}
			<HostsSection />

			{/* Call to Action */}
			<CallToAction />

			<Footer />
		</main>
	);
}

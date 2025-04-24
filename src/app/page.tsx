import { getPodcastEpisodes } from "@/lib/podcast";
import { Facebook, Instagram, Rss, Twitter } from "lucide-react";
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
import { PodcastJsonLd, OrganizationJsonLd } from "./components/json-ld";
import { CallToAction } from "@/components/call-to-action";

export const metadata: Metadata = {
	title: "Oooh, Spooky - The Comedy Horror Podcast",
	description:
		"Listen to Oooh, Spooky - the #1 comedy horror podcast hosted by Adam Knox, Luka Muller and Peter Jones. New episodes weekly!",
	keywords: [
		"horror comedy podcast",
		"Oooh Spooky",
		"scary stories",
		"comedy podcast",
		"Adam Knox",
		"Luka Muller",
		"Peter Jones",
	],
	openGraph: {
		title: "Oooh, Spooky - The Comedy Horror Podcast",
		description:
			"Listen to Oooh, Spooky - the #1 comedy horror podcast hosted by Adam Knox, Luka Muller and Peter Jones. New episodes weekly!",
		url: "https://ooohspooky.com",
		type: "website",
	},
};

export default async function Home() {
	const episodes = await getPodcastEpisodes();

	return (
		<main className="min-h-screen flex flex-col">
			<PodcastJsonLd
				url="https://ooohspooky.com"
				name="Oooh, Spooky - The Comedy Horror Podcast"
				description="A comedy podcast that explores the mysterious and unexplained with Adam Knox, Luka Muller, and Peter Jones."
				author="Adam Knox, Luka Muller, Peter Jones"
				imageUrl="https://ooohspooky.com/oooh-spooky.png"
			/>
			<OrganizationJsonLd
				name="Oooh, Spooky Podcast"
				url="https://ooohspooky.com"
				logo="https://ooohspooky.com/oooh-spooky.png"
				description="A comedy podcast that explores the mysterious and unexplained."
				sameAs={[
					"https://twitter.com/OoohSpooky",
					"https://www.instagram.com/ooohspooky/",
					"https://www.facebook.com/ooohspooky/",
					"https://ooohspooky.libsyn.com/rss",
				]}
			/>
			<Header />
			<HeroBanner />

			{/* Social Links */}
			<div className="bg-black py-6">
				<div className="container mx-auto flex justify-center">
					<div className="social-links text-primary">
						<a
							href="https://twitter.com/OoohSpooky"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
						>
							<Twitter />
						</a>
						<a
							href="https://www.instagram.com/ooohspooky/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<Instagram />
						</a>
						<a
							href="https://www.facebook.com/ooohspooky/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
						>
							<Facebook />
						</a>
						{/* <a
							href="https://www.youtube.com/@OoohSpooky"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
						>
							<Youtube />
						</a> */}
						<a
							href="https://ooohspooky.libsyn.com/rss"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RSS Feed"
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

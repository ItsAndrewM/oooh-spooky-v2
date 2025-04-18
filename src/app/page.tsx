import { getPodcastEpisodes } from "@/lib/podcast";
import { Facebook, Instagram, Rss, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PodcastList from "@/components/podcast-list";
import HeroBanner from "@/components/hero-banner";
import PodcastGrid from "@/components/podcast-grid";
import FeaturedVideos from "@/components/featured-videos";
import HostsSection from "@/components/hosts-section";

export default async function Home() {
	const episodes = await getPodcastEpisodes();

	return (
		<main className="min-h-screen flex flex-col">
			<Header />
			<HeroBanner />

			{/* Social Links */}
			<div className="bg-black py-6">
				<div className="container mx-auto flex justify-center">
					<div className="social-links">
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
						<a
							href="https://www.youtube.com/@OoohSpooky"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
						>
							<Youtube />
						</a>
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
					<h2 className="text-4xl font-bold mb-12 text-center spooky-title">
						Latest Episodes
					</h2>
					<PodcastList episodes={episodes.slice(0, 5)} />
					<div className="flex justify-center mt-10">
						<Link href="/episodes" className="cta-button">
							View All Episodes
						</Link>
					</div>
				</div>
			</section>

			{/* Patreon Shows */}
			<section className="py-16 bg-muted">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12 text-center spooky-title">
						Our Podcasts
					</h2>
					<PodcastGrid />
				</div>
			</section>

			{/* Featured Videos */}
			<FeaturedVideos />

			{/* Hosts Section */}
			<HostsSection />

			{/* Call to Action */}
			<section className="py-16 bg-primary">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-6 text-black">
						Support Us On Patreon
					</h2>
					<p className="text-black text-xl max-w-2xl mx-auto mb-8">
						Get exclusive content, bonus episodes, and more by supporting us on
						Patreon!
					</p>
					<a
						href="https://www.patreon.com/ooohspooky"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-black text-primary hover:bg-gray-900 font-bold py-3 px-8 rounded-md text-xl transition-colors duration-300"
					>
						Join Our Patreon
					</a>
				</div>
			</section>

			<Footer />
		</main>
	);
}

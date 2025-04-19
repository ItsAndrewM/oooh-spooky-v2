import Header from "@/components/header";
import Footer from "@/components/footer";
import HostsSection from "@/components/hosts-section";
import { Facebook, Instagram, Twitter, Rss } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Oooh, Spooky Podcast",
	description:
		"Learn about Oooh, Spooky - the comedy podcast hosted by Adam Knox, Luka Muller, and Peter Jones exploring mysterious and unexplained phenomena.",
	keywords: [
		"about Oooh Spooky",
		"comedy podcast",
		"Adam Knox",
		"Luka Muller",
		"Peter Jones",
		"unexplained mysteries podcast",
	],
	openGraph: {
		title: "About | Oooh, Spooky Podcast",
		description:
			"Learn about Oooh, Spooky - the comedy podcast hosted by Adam Knox, Luka Muller, and Peter Jones exploring mysterious and unexplained phenomena.",
		url: "https://ooohspooky.com/about",
		type: "website",
	},
};

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />

			<section className="py-16 bg-background">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
						About Oooh, Spooky
					</h1>

					<div className="max-w-3xl mx-auto mb-16">
						<p className="text-lg mb-6">
							Oooh, Spooky is a comedy podcast that explores the mysterious and
							unexplained. Each week, hosts Adam Knox, Luka Muller, and Peter
							Jones read five unexplained mysteries from a big book of Mysteries
							of the Unexplained.
						</p>
						<p className="text-lg mb-6">
							With a perfect blend of humor and intrigue, the hosts dive into
							strange phenomena, historical oddities, and supernatural
							occurrences that have puzzled people for generations.
						</p>
						<p className="text-lg">
							Whether you&apos;re a skeptic or a believer, Oooh, Spooky offers
							an entertaining look at the weird and wonderful world of
							unexplained mysteries.
						</p>
					</div>

					<div className="bg-black p-8 rounded-lg mb-16">
						<h2 className="text-3xl font-bold mb-6 text-center text-primary spooky-title">
							Follow Us
						</h2>
						<div className="flex justify-center space-x-8">
							<Link
								href="https://twitter.com/OoohSpooky"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
								className="text-primary hover:text-accent"
							>
								<Twitter size={32} />
							</Link>
							<Link
								href="https://www.instagram.com/ooohspooky/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="text-primary hover:text-accent"
							>
								<Instagram size={32} />
							</Link>
							<Link
								href="https://www.facebook.com/ooohspooky/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="text-primary hover:text-accent"
							>
								<Facebook size={32} />
							</Link>
							{/* <Link
								href="https://www.youtube.com/@OoohSpooky"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="text-primary hover:text-accent"
							>
								<Youtube size={32} />
							</Link> */}
							<Link
								href="https://ooohspooky.libsyn.com/rss"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="RSS Feed"
								className="text-primary hover:text-accent"
							>
								<Rss size={32} />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<HostsSection />

			<Footer />
		</main>
	);
}

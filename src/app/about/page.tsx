import Header from "@/components/header";
import Footer from "@/components/footer";
import HostsSection from "@/components/hosts-section";
import { Facebook, Instagram, Rss } from "lucide-react";
import { Metadata } from "next";
import { X } from "@/components/icons/x";
import { FAQJsonLd } from "../components/json-ld";

export const metadata: Metadata = {
	title: "About | Oooh, Spooky Podcast",
	description:
		"Learn about Oooh, Spooky - The comedy horror podcast hosted by Adam Knox, Luka Muller, and Peter Jones from Melbourne, Australia. Exploring ghosts, UFOs, mysteries and paranormal stories weekly.",
	keywords: [
		"Oooh, Spooky",
		"about Oooh, Spooky",
		"Oooh, Spooky podcast",
		"comedy podcast Australia",
		"Adam Knox",
		"Luka Muller",
		"Peter Jones",
		"Melbourne comedians",
		"paranormal comedy podcast",
		"unexplained mysteries podcast",
		"ghost stories comedy",
	],
	openGraph: {
		title: "About | Oooh, Spooky Podcast",
		description:
			"Learn about Oooh, Spooky - The comedy horror podcast hosted by Adam Knox, Luka Muller, and Peter Jones from Melbourne, Australia. Exploring ghosts, UFOs, mysteries and paranormal stories weekly.",
		url: "https://ooohspooky.com/about",
		type: "website",
	},
};

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />
			<FAQJsonLd
				questions={[
					{
						question: "What is Oooh, Spooky podcast?",
						answer:
							"Oooh, Spooky is a comedy podcast that explores the mysterious and unexplained. Each week, hosts Adam Knox, Luka Muller, and Peter Jones read five unexplained mysteries from a book of Mysteries of the Unexplained, bringing humor to paranormal phenomena, historical oddities, and supernatural occurrences.",
					},
					{
						question: "Who hosts Oooh, Spooky podcast?",
						answer:
							"Oooh, Spooky is hosted by three comedians from Melbourne, Australia: Adam Knox, Luka Muller, and Peter Jones.",
					},
					{
						question: "How often are new Oooh, Spooky episodes released?",
						answer:
							"New episodes of Oooh, Spooky are released weekly, exploring new mysterious and paranormal stories with a comedic twist.",
					},
					{
						question: "Where can I listen to Oooh, Spooky podcast?",
						answer:
							"You can listen to Oooh, Spooky on all major podcast platforms including Apple Podcasts, Spotify, and directly on our website at ooohspooky.com.",
					},
					{
						question: "Does Oooh, Spooky have a Patreon?",
						answer:
							"Yes, Oooh, Spooky has a Patreon where fans can support the show and get access to exclusive content, bonus episodes, and more.",
					},
				]}
			/>

			<section className="py-16 bg-background">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
						About Oooh, Spooky
					</h1>

					<div className="max-w-3xl mx-auto mb-16">
						<p className="text-lg mb-6">
							<strong>Oooh, Spooky</strong> is a comedy podcast that explores
							the mysterious and unexplained. Each week, hosts{" "}
							<strong>Adam Knox</strong>, <strong>Luka Muller</strong>, and{" "}
							<strong>Peter Jones</strong> read five unexplained mysteries from
							a big book of Mysteries of the Unexplained.
						</p>
						<p className="text-lg mb-6">
							Based in Melbourne, Australia, our three comedians brave the
							unknown with their unique blend of humor and skepticism. From
							ghost stories and UFO sightings to bizarre historical oddities and
							supernatural phenomena, nothing is off-limits for the Oooh, Spooky
							team.
						</p>
						<p className="text-lg mb-6">
							With a perfect blend of humor and intrigue, the hosts dive into
							strange phenomena, historical oddities, and supernatural
							occurrences that have puzzled people for generations.
						</p>
						<p className="text-lg">
							Whether you&apos;re a skeptic or a believer, Oooh, Spooky offers
							an entertaining look at the weird and wonderful world of
							unexplained mysteries, often featuring easily excited villagers
							who&apos;ve seen something slightly weird, but not really that
							weird. Listener beware! You&apos;re in for a chuckle.
						</p>

						<div className="mt-8 p-6 bg-black/50 rounded-lg">
							<h2 className="text-2xl font-bold mb-4 text-primary">
								Listen to Oooh, Spooky
							</h2>
							<p className="text-lg mb-4">
								You can find Oooh, Spooky on all major podcast platforms:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<a
										href="https://podcasts.apple.com/us/podcast/oooh-spooky/id1440546225"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Apple Podcasts
									</a>
								</li>
								<li>
									<a
										href="https://open.spotify.com/show/2Mz6GRNnR4n1s2aVs6phDk"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Spotify
									</a>
								</li>
								<li>
									<a
										href="https://ooohspooky.libsyn.com/rss"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										RSS Feed
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="bg-black p-8 rounded-lg mb-16">
						<h2 className="text-3xl font-bold mb-6 text-center text-primary spooky-title">
							Follow Us
						</h2>
						<div className="flex justify-center space-x-8 items-center">
							<a
								href="https://twitter.com/OoohSpooky"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
								className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
							>
								<X className="size-6 " fill="#d7d700" />
							</a>
							<a
								href="https://www.instagram.com/ooohspooky/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
							>
								<Instagram size={32} />
							</a>
							<a
								href="https://www.facebook.com/ooohspooky/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
							>
								<Facebook size={32} />
							</a>
							{/* <Link
								href="https://www.youtube.com/@OoohSpooky"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="text-primary hover:text-accent"
							>
								<Youtube size={32} />
							</Link> */}
							<a
								href="https://ooohspooky.libsyn.com/rss"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="RSS Feed"
								className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
							>
								<Rss size={32} />
							</a>
						</div>
					</div>
				</div>
			</section>

			<HostsSection />

			<Footer />
		</main>
	);
}

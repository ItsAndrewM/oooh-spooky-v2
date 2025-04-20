import Link from "next/link";
import { Facebook, Instagram, Twitter, Rss } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h2 className="text-3xl font-bold mb-6 spooky-title text-primary">
							OOOH, SPOOKY
						</h2>
						<p className="text-gray-300 mb-4">
							Spooky comedy podcast. Each week Adam Knox, Luka Muller and Peter
							Jones read five unexplained mysteries from a big book of Mysteries
							of the Unexplained.
						</p>
						<p className="text-gray-400">
							© {new Date().getFullYear()} Oooh, Spooky
						</p>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4 text-primary">Links</h3>
						<div className="footer-links">
							<Link href="/" prefetch>
								Home
							</Link>
							<Link href="/episodes" prefetch>
								Episodes
							</Link>
							<Link href="/listen" prefetch>
								Listen
							</Link>
							<Link href="/about" prefetch>
								About
							</Link>
							<Link
								href="https://www.patreon.com/ooohspooky"
								target="_blank"
								rel="noopener noreferrer"
							>
								Patreon
							</Link>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4 text-primary">Follow Us</h3>
						<div className="social-links text-primary">
							<Link
								href="https://twitter.com/OoohSpooky"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<Twitter />
							</Link>
							<Link
								href="https://www.instagram.com/ooohspooky/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<Instagram />
							</Link>
							<Link
								href="https://www.facebook.com/ooohspooky/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<Facebook />
							</Link>
							{/* <Link
								href="https://www.youtube.com/@OoohSpooky"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
							>
								<Youtube />
							</Link> */}
							<Link
								href="https://ooohspooky.libsyn.com/rss"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="RSS Feed"
							>
								<Rss />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

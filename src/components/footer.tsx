import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Rss } from "lucide-react";
import { X } from "./icons/x";

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
						<a
							href="https://dinocode.app"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity mt-2"
						>
							<Image
								src="https://dinocode.app/images/dinocode-logo-outline-white.svg"
								alt="dinocode logo"
								width={32}
								height={32}
								className="h-8 w-auto"
							/>
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-sm">
								Built by dinocode
							</span>
						</a>
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
							<a
								href="https://www.patreon.com/ooohspooky"
								target="_blank"
								rel="noopener noreferrer"
							>
								Patreon
							</a>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4 text-primary">Follow Us</h3>
						<div className="social-links text-primary flex justify-start items-center gap-4">
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
							{/* <Link
								href="https://www.youtube.com/@OoohSpooky"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="hover:scale-110 transition-all duration-300"
							>
								<Youtube />
							</Link> */}
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
			</div>
		</footer>
	);
}

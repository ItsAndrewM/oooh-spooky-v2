"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-black text-white">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<Link href="/" className="flex items-center" prefetch>
						<h1 className="text-4xl font-bold spooky-title text-primary">
							OOOH, SPOOKY
						</h1>
					</Link>

					{/* Mobile menu button */}
					<Button
						className="md:hidden text-white"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</Button>

					{/* Desktop navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link href="/listen" className="nav-link" prefetch>
							Listen
						</Link>
						<Link href="/episodes" className="nav-link" prefetch>
							Episodes
						</Link>
						<Link href="/about" className="nav-link" prefetch>
							About
						</Link>
						<Link href="/contact" className="nav-link" prefetch>
							Contact
						</Link>
						<Button asChild className="cta-button">
							<Link
								href="https://www.patreon.com/ooohspooky"
								target="_blank"
								rel="noopener noreferrer"
							>
								Patreon
							</Link>
						</Button>
					</nav>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<nav className="md:hidden py-4 border-t border-gray-800">
						<ul className="space-y-4 pb-4">
							<li>
								<Link
									href="/listen"
									className="block py-2 nav-link"
									onClick={() => setIsMenuOpen(false)}
									prefetch
								>
									Listen
								</Link>
							</li>
							<li>
								<Link
									href="/episodes"
									className="block py-2 nav-link"
									onClick={() => setIsMenuOpen(false)}
									prefetch
								>
									Episodes
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="block py-2 nav-link"
									onClick={() => setIsMenuOpen(false)}
									prefetch
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="block py-2 nav-link"
									onClick={() => setIsMenuOpen(false)}
									prefetch
								>
									Contact
								</Link>
							</li>
							<li>
								<Button
									asChild
									className="py-2 cta-button inline-block mt-2 bg-primary"
									onClick={() => setIsMenuOpen(false)}
								>
									<Link
										href="https://www.patreon.com/ooohspooky"
										target="_blank"
										rel="noopener noreferrer"
									>
										Patreon
									</Link>
								</Button>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}

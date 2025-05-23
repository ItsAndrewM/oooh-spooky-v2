import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroBanner() {
	return (
		<div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
			<div className="absolute inset-0">
				<Image
					src="/images/hero-image.png"
					alt="Oooh, Spooky Podcast - Comedy horror podcast with Adam Knox, Luka Muller and Peter Jones"
					fill
					priority
					className="object-cover brightness-50"
					fetchPriority="high"
				/>
			</div>

			<div className="absolute inset-0 flex items-center justify-center">
				<div className="container mx-auto px-4 text-center">
					<div className="max-w-3xl mx-auto">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 spooky-title text-primary">
							OOOH, SPOOKY
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-white">
							Each week Adam Knox, Luka Muller and Peter Jones read five
							unexplained mysteries from a big book of Mysteries of the
							Unexplained.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild>
								<Link href="/episodes" className="cta-button" prefetch>
									Listen Now
								</Link>
							</Button>
							<Button
								asChild
								className="bg-black text-primary hover:bg-gray-900 font-bold py-2 px-6 rounded-md transition-colors duration-300"
							>
								<a
									href="https://www.patreon.com/ooohspooky"
									target="_blank"
									rel="noopener noreferrer"
								>
									Join Our Patreon
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import Link from "next/link";
import { Button } from "./ui/button";

export function CallToAction() {
	return (
		<section className="py-16 bg-primary">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold mb-6 text-black">
					Support Us On Patreon
				</h2>
				<p className="text-black text-xl max-w-2xl mx-auto mb-8">
					Get exclusive content, bonus episodes, and more by supporting us on
					Patreon!
				</p>
				<Button
					asChild
					className="bg-black text-primary hover:bg-gray-900 font-bold py-3 px-8 rounded-md text-xl transition-colors duration-300"
				>
					<Link
						href="https://www.patreon.com/ooohspooky"
						target="_blank"
						rel="noopener noreferrer"
					>
						Join Our Patreon
					</Link>
				</Button>
			</div>
		</section>
	);
}

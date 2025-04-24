import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ghost, Home, Search } from "lucide-react";

export default function NotFound() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />

			<div className="container mx-auto px-4 py-16 flex-grow flex flex-col items-center justify-center">
				<div className="max-w-2xl w-full bg-black p-8 border border-primary rounded-lg shadow-xl">
					<div className="text-center">
						<div className="mb-8 flex justify-center">
							<Ghost className="size-32 text-primary animate-pulse" />
						</div>

						<h1 className="text-5xl md:text-7xl font-bold mb-4 spooky-title text-primary">
							404
						</h1>
						<h2 className="text-2xl md:text-3xl font-bold mb-6 spooky-title text-white">
							PAGE NOT FOUND
						</h2>
						<p className="text-lg text-gray-300 mb-8">
							Oooh, spooky! The page you&apos;re looking for has vanished into
							the unknown. It may have been moved, deleted, or perhaps never
							existed at all.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								className="cta-button flex items-center gap-2"
								size="lg"
							>
								<Link href="/" prefetch>
									<Home size={20} />
									Back to Home
								</Link>
							</Button>
							<Button
								asChild
								className="bg-black text-primary hover:bg-gray-900 font-bold border border-primary rounded-md transition-colors duration-300"
								size="lg"
							>
								<Link href="/episodes" prefetch>
									<Search size={20} className="mr-2" />
									Browse Episodes
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}

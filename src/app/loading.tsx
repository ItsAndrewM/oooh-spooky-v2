import Header from "@/components/header";
import Footer from "@/components/footer";
import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />

			<div className="flex-grow flex items-center justify-center">
				<div className="text-center">
					<Loader2 className="size-24 text-primary animate-spin mx-auto mb-4" />
					<h2 className="text-2xl font-bold spooky-title text-primary">
						LOADING...
					</h2>
					<p className="text-muted-foreground">
						Summoning content from the beyond...
					</p>
				</div>
			</div>

			<Footer />
		</main>
	);
}

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
			<div className="max-w-2xl w-full bg-black p-8 border border-destructive rounded-lg shadow-xl">
				<div className="text-center">
					<div className="mb-8 flex justify-center">
						<AlertTriangle className="size-32 text-destructive animate-pulse" />
					</div>

					<h1 className="text-4xl md:text-6xl font-bold mb-4 spooky-title text-destructive">
						SOMETHING WENT WRONG
					</h1>

					<p className="text-lg text-gray-300 mb-8">
						Oooh, spooky! Something unexpected happened. Don&apos;t worry,
						we&apos;ve been notified and are looking into it.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							variant="destructive"
							onClick={reset}
							className="flex items-center gap-2"
							size="lg"
						>
							<RefreshCcw size={20} />
							Try Again
						</Button>
						<Button
							asChild
							className="bg-black text-white hover:bg-gray-900 font-bold border border-white rounded-md transition-colors duration-300"
							size="lg"
						>
							<Link href="/">
								<Home size={20} className="mr-2" />
								Back to Home
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

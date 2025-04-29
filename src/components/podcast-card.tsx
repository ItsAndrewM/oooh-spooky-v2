import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Lock } from "lucide-react";
import { Podcast } from "@/lib/podcast";

export function PodcastCard({ podcast }: { podcast: Podcast }) {
	return (
		<Card
			key={podcast.id}
			className="overflow-hidden h-full border-none flex flex-col"
		>
			<div className="flex-grow flex flex-col">
				<div className="block relative group">
					<div className="aspect-square w-full overflow-hidden">
						<Image
							src={podcast.image || "/placeholder.svg"}
							alt={podcast.title}
							className="podcast-image group-hover:scale-105 transition-transform duration-300"
							width={400}
							height={400}
						/>
					</div>
					{podcast.isPremium ? (
						<a
							href={podcast.url}
							target="_blank"
							rel="noopener noreferrer"
							className="absolute inset-0 z-[1] cursor-pointer"
							aria-label={`View ${podcast.title}`}
						/>
					) : (
						<Link
							href={podcast.url}
							className="absolute inset-0 z-[1] cursor-pointer"
							prefetch
							aria-label={`View ${podcast.title}`}
						/>
					)}
					{podcast.isPremium && (
						<a
							href={podcast.url}
							target="_blank"
							rel="noopener noreferrer"
							className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 z-[2]"
							/* Add z-[2] to ensure it stays above the overlay */
						>
							<Lock size={14} />
							<span className="text-sm font-medium">Patreon</span>
						</a>
					)}
				</div>

				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						{podcast.isPremium && <Lock size={16} className="text-primary" />}
						{podcast.title}
					</CardTitle>
					<CardDescription className="text-muted-foreground">
						{podcast.description}
					</CardDescription>
				</CardHeader>
			</div>
			<CardFooter className="mt-auto pt-4">
				{podcast.isPremium ? (
					<Button
						asChild
						className="w-full bg-black text-primary hover:bg-gray-900 font-bold py-2 px-4 rounded-md transition-colors duration-300 text-center"
					>
						<a href={podcast.url} target="_blank" rel="noopener noreferrer">
							Listen on Patreon
						</a>
					</Button>
				) : (
					<Button asChild className="w-full cta-button text-center block">
						<Link href={podcast.url} prefetch>
							Stream Episodes
						</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}

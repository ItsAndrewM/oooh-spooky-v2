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
import { Play } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Episode } from "@/lib/podcast";

export function EpisodeCard({
	episode,
	index,
}: {
	episode: Episode;
	index: number;
}) {
	return (
		<Card
			key={episode.guid}
			className="overflow-hidden podcast-list-item border-muted "
		>
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/4 lg:w-1/5 bg-muted p-4 flex items-center justify-center relative group">
					<div className="aspect-square w-full max-w-[200px] relative bg-black rounded-md overflow-hidden flex items-center justify-center">
						<Image
							src={episode.image || "/images/hero-image.png"}
							alt={episode.title}
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							width={200}
							height={200}
							priority={index === 0}
							fetchPriority={index === 0 ? "high" : "low"}
						/>
					</div>
					<Link
						href={`/episodes/${episode.guid}`}
						prefetch
						className="absolute inset-0 z-[1] cursor-pointer"
					/>
				</div>
				<div className="md:w-3/4 lg:w-4/5 p-6">
					<CardHeader className="p-0 pb-4">
						<CardTitle className="text-xl md:text-2xl">
							{episode.title}
						</CardTitle>
						<CardDescription>
							{formatDate(new Date(episode.pubDate))}
						</CardDescription>
					</CardHeader>
					<CardContent className="p-0 pb-4">
						<div
							className="line-clamp-3 text-muted-foreground"
							dangerouslySetInnerHTML={{
								__html: episode.description || "",
							}}
						/>
					</CardContent>
					<CardFooter className="p-0 flex flex-wrap gap-3">
						<Button asChild>
							<a
								href={episode.enclosure?.url || "#"}
								target="_blank"
								rel="noopener noreferrer"
								className="cta-button flex items-center gap-2"
							>
								<Play size={16} />
								Listen Now
							</a>
						</Button>
						<Button
							asChild
							className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium py-2 px-6 rounded-md transition-colors duration-300"
						>
							<Link href={`/episodes/${episode.guid}`} prefetch>
								View Details
							</Link>
						</Button>
					</CardFooter>
				</div>
			</div>
		</Card>
	);
}

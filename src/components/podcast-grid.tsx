import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const podcasts = [
	{
		id: 1,
		title: "Oooh, Spooky",
		description:
			"Each week Adam Knox, Luka Muller and Peter Jones read five unexplained mysteries from a big book of Mysteries of the Unexplained.",
		image: "/images/hero-image.png",
		url: "/episodes",
		isPremium: false,
	},
	{
		id: 2,
		title: "Oooh, Lukey",
		description:
			"A Patreon exclusive podcast featuring Luka Muller and special guests.",
		image: "/images/oooh-lukey.png",
		url: "https://www.patreon.com/ooohspooky",
		isPremium: true,
	},
	{
		id: 3,
		title: "Oooh, Nooo",
		description:
			"A Patreon exclusive podcast where the hosts discuss things that went terribly wrong.",
		image: "/images/oooh-nooo.png",
		url: "https://www.patreon.com/ooohspooky",
		isPremium: true,
	},
	{
		id: 4,
		title: "Oooh's Your Own Adventure",
		description: "A Patreon exclusive choose-your-own-adventure style podcast.",
		image: "/images/ooohs-your-own-adventure.png",
		url: "https://www.patreon.com/ooohspooky",
		isPremium: true,
	},
	{
		id: 5,
		title: "Oooh, Movie",
		description:
			"A Patreon exclusive podcast where the hosts discuss spooky movies.",
		image: "/images/oooh-movie.png",
		url: "https://www.patreon.com/ooohspooky",
		isPremium: true,
	},
];

export default function PodcastGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{podcasts.map((podcast) => (
				<Card key={podcast.id} className="overflow-hidden h-full border-none">
					<Link
						href={podcast.url}
						target={podcast.isPremium ? "_blank" : "_self"}
						rel={podcast.isPremium ? "noopener noreferrer" : ""}
						className="block relative"
					>
						<div className="aspect-square w-full overflow-hidden">
							<Image
								src={podcast.image || "/placeholder.svg"}
								alt={podcast.title}
								className="podcast-image hover:scale-105 transition-transform duration-300"
								width={400}
								height={400}
							/>
						</div>
						{podcast.isPremium && (
							<div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1">
								<Lock size={14} />
								<span className="text-sm font-medium">Patreon</span>
							</div>
						)}
					</Link>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							{podcast.isPremium && <Lock size={16} className="text-primary" />}
							{podcast.title}
						</CardTitle>
						<CardDescription className="text-muted-foreground">
							{podcast.description}
						</CardDescription>
					</CardHeader>
					<CardFooter>
						{podcast.isPremium ? (
							<Button
								asChild
								className="w-full bg-black text-primary hover:bg-gray-900 font-bold py-2 px-4 rounded-md transition-colors duration-300 text-center"
							>
								<Link
									href={podcast.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									Listen on Patreon
								</Link>
							</Button>
						) : (
							<Button asChild className="w-full cta-button text-center block">
								<Link href={podcast.url}>Stream Episodes</Link>
							</Button>
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	);
}

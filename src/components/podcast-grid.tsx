import { PodcastCard } from "./podcast-card";
import { Podcast } from "@/lib/podcast";

const podcasts: Podcast[] = [
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
				<PodcastCard key={podcast.id} podcast={podcast} />
			))}
		</div>
	);
}

import { getPodcastEpisodes } from "@/lib/podcast";
import PodcastList from "./podcast-list";

export const revalidate = 3600;

export default async function PodcastListContainer({
	search,
}: {
	search: string;
}) {
	const allEpisodes = await getPodcastEpisodes();

	const episodes = allEpisodes.filter((episode) =>
		episode.title.toLowerCase().includes(search.toLowerCase())
	);

	return <PodcastList episodes={episodes} />;
}

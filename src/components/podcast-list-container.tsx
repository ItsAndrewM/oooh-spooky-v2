import { getPodcastEpisodes } from "@/lib/podcast";
import PodcastList from "./podcast-list";

export const revalidate = 3600;

export default async function PodcastListContainer() {
	const episodes = await getPodcastEpisodes();

	return <PodcastList episodes={episodes} />;
}

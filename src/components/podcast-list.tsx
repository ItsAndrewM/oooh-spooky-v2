import type { Episode } from "@/lib/podcast";
import { EpisodeCard } from "./episode-card";

export default function PodcastList({ episodes }: { episodes: Episode[] }) {
	return (
		<div className="space-y-6 podcast-list">
			{episodes.map((episode, index) => (
				<EpisodeCard key={episode.guid} episode={episode} index={index} />
			))}
		</div>
	);
}

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Play } from "lucide-react";
import type { Episode } from "@/lib/podcast";
import Image from "next/image";
import { Button } from "./ui/button";
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

import { Button } from "./ui/button";
import Link from "next/link";
const featuredVideos = [
	{
		id: 1,
		title: "The Mysterious Disappearance of the Sodder Children",
		description:
			"Adam, Luka and Peter discuss one of the most baffling disappearances in American history.",
		embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube embed URL
	},
	{
		id: 2,
		title: "The Dyatlov Pass Incident",
		description:
			"The team explores the mysterious deaths of nine Russian hikers in the Ural Mountains.",
		embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube embed URL
	},
	{
		id: 3,
		title: "The Mysterious Case of the Somerton Man",
		description:
			"Adam, Luka and Peter investigate the unidentified man found on Somerton beach in 1948.",
		embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube embed URL
	},
];

export default function FeaturedVideos() {
	return (
		<section className="py-16 bg-black">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
					Featured Videos
				</h2>

				<div className="space-y-8">
					{featuredVideos.map((video) => (
						<div
							key={video.id}
							className="grid md:grid-cols-2 gap-6 items-center"
						>
							<div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
								<iframe
									width="100%"
									height="100%"
									src={video.embedUrl}
									title={video.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="w-full h-full"
								></iframe>
							</div>

							<div className="p-4">
								<h3 className="text-2xl font-bold mb-3 text-primary">
									{video.title}
								</h3>
								<p className="text-gray-300 mb-4">{video.description}</p>
								<Button asChild>
									<Link
										href={video.embedUrl.replace("embed/", "watch?v=")}
										target="_blank"
										rel="noopener noreferrer"
										className="cta-button inline-block"
									>
										Watch on YouTube
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Button asChild>
						<Link
							href="https://www.youtube.com/@OoohSpooky"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-primary text-primary-foreground hover:bg-accent font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300"
						>
							View All Videos
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

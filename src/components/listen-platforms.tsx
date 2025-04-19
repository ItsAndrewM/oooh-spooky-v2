import { platforms } from "@/app/listen/page";

export default function ListenPlatforms() {
	return (
		<div className="bg-black p-8 rounded-lg">
			<h2 className="text-2xl font-bold mb-6 text-center text-primary">
				Listen on Your Favorite Platform
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-5 gap-6">
				{platforms.map((platform) => (
					<a
						key={platform.name}
						href={platform.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
					>
						<div className="w-16 h-16 mb-2 bg-muted rounded-full flex items-center justify-center text-primary">
							{platform.icon}
						</div>
						<span className="text-center text-primary">{platform.name}</span>
					</a>
				))}
			</div>
		</div>
	);
}

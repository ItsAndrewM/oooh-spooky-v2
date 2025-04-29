import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "./ui/card";
import Image from "next/image";
import { Instagram, Facebook, Globe, Youtube } from "lucide-react";
import { TikTok } from "./icons/tiktok";
import { X } from "./icons/x";
import { Host } from "@/lib/podcast";

export function HostCard({ host }: { host: Host }) {
	return (
		<Card
			key={host.id}
			className="overflow-hidden h-full border-muted flex flex-col"
		>
			<div className="flex-grow flex flex-col">
				<div className="aspect-square w-full ">
					<Image
						src={host.image || "/placeholder.svg"}
						alt={host.name}
						className="w-full h-full object-cover"
						width={400}
						height={400}
					/>
				</div>
				<CardHeader>
					<CardTitle className="text-xl">{host.name}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">{host.bio}</p>
				</CardContent>
			</div>
			<CardFooter className="mt-auto pt-4">
				<div className="flex space-x-4 justify-start items-center w-full">
					{host.social.twitter && (
						<a
							href={host.social.twitter}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${host.name}'s Twitter`}
							className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
						>
							<X className="size-4" fill="#d7d700" />
						</a>
					)}
					{host.social.instagram && (
						<a
							href={host.social.instagram}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${host.name}'s Instagram`}
							className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
						>
							<Instagram size={20} />
						</a>
					)}
					{host.social.facebook && (
						<a
							href={host.social.facebook}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${host.name}'s Facebook`}
							className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
						>
							<Facebook size={20} />
						</a>
					)}
					{host.social.website && (
						<a
							href={host.social.website}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${host.name}'s Website`}
							className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
						>
							<Globe size={20} />
						</a>
					)}
					{host.social.youtube && (
						<a
							href={host.social.youtube}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${host.name}'s YouTube`}
							className="text-primary hover:text-accent hover:scale-110 transition-all duration-300"
						>
							<Youtube size={20} />
						</a>
					)}
					{host.social.tiktok && (
						<a
							href={host.social.tiktok}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${host.name}'s TikTok`}
							className="text-primary hover:text-accent flex items-center justify-center hover:scale-110 transition-all duration-300"
						>
							<TikTok className="w-6 h-6 text-primary fill-current" />
						</a>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}

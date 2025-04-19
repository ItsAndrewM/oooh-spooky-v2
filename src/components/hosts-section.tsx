import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Globe, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TikTok } from "./icons/tiktok";

const hosts = [
	{
		id: 1,
		name: "Adam Knox",
		bio: "Adam Knox is a Melbourne-based comedian and podcaster. He's a co-host of the Oooh, Spooky podcast where he explores mysterious and unexplained phenomena with a comedic twist.",
		image: "/images/adam-knox.webp",
		social: {
			instagram: "https://www.instagram.com/adamgknox/",
		},
	},
	{
		id: 2,
		name: "Luka Muller",
		bio: "Luka Muller is a comedian, writer, podcaster and radio presenter who hosts Breakfast on Triple J with Concetta Caristo. His comedy special 'Five Top Smells I Smelled Before' is available on YouTube, featuring an optional scratch and sniff experience.",
		image: "/images/luka-muller.jpg",
		social: {
			twitter: "https://x.com/LukaCMuller",
			instagram: "https://www.instagram.com/lukacmuller/",
			facebook: "https://www.facebook.com/LukaMullerTheComedian/",
			website: "https://www.lukacmuller.com/",
			youtube: "https://www.youtube.com/LukaCameronMuller",
			tiktok: "https://www.tiktok.com/@lukacmuller",
		},
	},
	{
		id: 3,
		name: "Peter Jones",
		bio: "Peter Jones is a stand-up comedian from Australia now based in London. He won the 2023 Beat the Frog World Series in his first year in the UK. His comedy has been featured on TV and he's written for various Australian shows. He co-hosts the podcast Oooh, Spooky.",
		image: "/images/peter-jones.jpeg",
		social: {
			twitter: "https://twitter.com/peterthejones",
			instagram: "https://www.instagram.com/peterthejones/",
			website: "https://www.peterjonescomedy.com/",
			youtube: "https://www.youtube.com/@peterthejones",
			tiktok: "https://www.tiktok.com/@thepeterthejones",
		},
	},
];

export default function HostsSection() {
	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold mb-12 text-center spooky-title text-primary">
					Meet The Hosts
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{hosts.map((host) => (
						<Card key={host.id} className="overflow-hidden">
							<div className="aspect-square w-full relative">
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
							<CardFooter>
								<div className="flex space-x-4 justify-center">
									{host.social.twitter && (
										<Link
											href={host.social.twitter}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${host.name}'s Twitter`}
											className="text-primary hover:text-accent"
										>
											<Twitter size={20} />
										</Link>
									)}
									{host.social.instagram && (
										<Link
											href={host.social.instagram}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${host.name}'s Instagram`}
											className="text-primary hover:text-accent"
										>
											<Instagram size={20} />
										</Link>
									)}
									{host.social.facebook && (
										<Link
											href={host.social.facebook}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${host.name}'s Facebook`}
											className="text-primary hover:text-accent"
										>
											<Facebook size={20} />
										</Link>
									)}
									{host.social.website && (
										<Link
											href={host.social.website}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${host.name}'s Website`}
											className="text-primary hover:text-accent"
										>
											<Globe size={20} />
										</Link>
									)}
									{host.social.youtube && (
										<Link
											href={host.social.youtube}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${host.name}'s YouTube`}
											className="text-primary hover:text-accent"
										>
											<Youtube size={20} />
										</Link>
									)}
									{host.social.tiktok && (
										<Link
											href={host.social.tiktok}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${host.name}'s TikTok`}
											className="text-primary hover:text-accent flex items-center justify-center"
										>
											<TikTok className="w-6 h-6 text-primary fill-current" />
										</Link>
									)}
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

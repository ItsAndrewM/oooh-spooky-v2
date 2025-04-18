import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"
import Link from "next/link"

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
    description: "A Patreon exclusive podcast featuring Luka Muller and special guests.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
  {
    id: 3,
    title: "Oooh, Nooo",
    description: "A Patreon exclusive podcast where the hosts discuss things that went terribly wrong.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
  {
    id: 4,
    title: "Oooh's Your Own Adventure",
    description: "A Patreon exclusive choose-your-own-adventure style podcast.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
  {
    id: 5,
    title: "Oooh, Movie",
    description: "A Patreon exclusive podcast where the hosts discuss spooky movies.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
]

export default function PodcastGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {podcasts.map((podcast) => (
        <Card key={podcast.id} className="podcast-card flex flex-col h-full">
          <div className="relative">
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={podcast.image || "/placeholder.svg"}
                alt={podcast.title}
                className="podcast-image"
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
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{podcast.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">{podcast.description}</p>
          </CardContent>
          <CardFooter>
            {podcast.isPremium ? (
              <a
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-primary hover:bg-gray-900 font-bold py-2 px-4 rounded-md transition-colors duration-300 text-center"
              >
                Listen on Patreon
              </a>
            ) : (
              <Link href={podcast.url} className="w-full cta-button text-center">
                Listen Now
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

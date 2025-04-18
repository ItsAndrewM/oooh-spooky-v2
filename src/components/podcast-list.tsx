import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { Play } from "lucide-react"
import type { Episode } from "@/lib/podcast"

export default function PodcastList({ episodes }: { episodes: Episode[] }) {
  return (
    <div className="space-y-6">
      {episodes.map((episode) => (
        <Card key={episode.guid} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 lg:w-1/5 bg-muted p-4 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[200px] relative bg-black rounded-md overflow-hidden flex items-center justify-center">
                {episode.image ? (
                  <img
                    src={episode.image || "/placeholder.svg"}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl font-bold text-primary spooky-title p-4 text-center">OOOH, SPOOKY</div>
                )}
              </div>
            </div>
            <div className="md:w-3/4 lg:w-4/5 p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl md:text-2xl">{episode.title}</CardTitle>
                <CardDescription>{formatDate(new Date(episode.pubDate))}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 pb-4">
                <div
                  className="line-clamp-3 text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: episode.description || "" }}
                />
              </CardContent>
              <CardFooter className="p-0 flex flex-wrap gap-3">
                <a
                  href={episode.enclosure?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button flex items-center gap-2"
                >
                  <Play size={16} />
                  Listen Now
                </a>
                <Link
                  href={`/episodes/${episode.guid}`}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium py-2 px-6 rounded-md transition-colors duration-300"
                >
                  View Details
                </Link>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

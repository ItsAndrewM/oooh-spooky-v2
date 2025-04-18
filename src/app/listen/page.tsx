import Header from "@/components/header"
import Footer from "@/components/footer"
import { Lock } from "lucide-react"
import Link from "next/link"

// Podcast platforms
const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/your-spotify-id",
    icon: "/images/spotify.png",
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/podcast/your-apple-id",
    icon: "/images/apple-podcasts.png",
  },
  {
    name: "Google Podcasts",
    url: "https://podcasts.google.com/feed/your-google-id",
    icon: "/images/google-podcasts.png",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@OoohSpooky",
    icon: "/images/youtube.png",
  },
  {
    name: "RSS Feed",
    url: "https://ooohspooky.libsyn.com/rss",
    icon: "/images/rss.png",
  },
]

// Podcast shows
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
    description:
      "A Patreon exclusive podcast featuring Luka Muller and special guests diving into spooky stories and urban legends.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
  {
    id: 3,
    title: "Oooh, Nooo",
    description:
      "A Patreon exclusive podcast where the hosts discuss paranormal encounters and experiences that went terribly wrong.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
  {
    id: 4,
    title: "Ooohs Your Own Adventure",
    description:
      "A Patreon exclusive choose-your-own-adventure style podcast where listeners decide how the spooky story unfolds.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
  {
    id: 5,
    title: "Oooh, Movie",
    description: "A Patreon exclusive podcast where the hosts discuss and review horror and supernatural movies.",
    image: "/placeholder.svg?height=400&width=400",
    url: "https://www.patreon.com/ooohspooky",
    isPremium: true,
  },
]

export default function ListenPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center spooky-title">Listen</h1>

        {/* Listening Platforms */}
        <section className="mb-16">
          <div className="bg-black p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">Listen on Your Favorite Platform</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-16 h-16 mb-2 bg-muted rounded-full flex items-center justify-center">
                    {platform.icon ? (
                      <img src={platform.icon || "/placeholder.svg"} alt={platform.name} className="w-10 h-10" />
                    ) : (
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <span className="text-center text-primary">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Our Podcasts */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center spooky-title">OUR PODCASTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="podcast-card flex flex-col h-full">
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
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">
                    {podcast.isPremium && <Lock size={16} className="inline mr-2 text-primary" />}
                    {podcast.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{podcast.description}</p>
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
                    <Link href={podcast.url} className="w-full cta-button text-center block">
                      Stream Episodes
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patreon Callout */}
        <section className="bg-black p-8 rounded-lg mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Patreon Exclusive Content"
                className="rounded-lg w-full max-w-[300px] mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-primary spooky-title">Get Exclusive Content</h2>
              <p className="text-white mb-6">
                Join our Patreon to get access to four exclusive podcasts and bonus episodes of Oooh, Spooky. Our
                Patreon supporters get early access to episodes, ad-free listening, and much more!
              </p>
              <a
                href="https://www.patreon.com/ooohspooky"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block"
              >
                Join Our Patreon
              </a>
            </div>
          </div>
        </section>

        {/* Latest Episodes */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center spooky-title">LATEST EPISODES</h2>
          <div className="text-center mb-8">
            <Link href="/episodes" className="cta-button inline-block">
              View All Episodes
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

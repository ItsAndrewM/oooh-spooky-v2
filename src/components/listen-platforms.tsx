import { Apple, AirplayIcon as Spotify, Youtube, Rss } from "lucide-react"

const platforms = [
  {
    name: "Spotify",
    icon: <Spotify className="w-6 h-6" />,
    url: "https://open.spotify.com/show/your-spotify-id",
  },
  {
    name: "Apple Podcasts",
    icon: <Apple className="w-6 h-6" />,
    url: "https://podcasts.apple.com/podcast/your-apple-id",
  },
  {
    name: "Google Podcasts",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
      </svg>
    ),
    url: "https://podcasts.google.com/feed/your-google-id",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
    url: "https://www.youtube.com/@OoohSpooky",
  },
  {
    name: "RSS Feed",
    icon: <Rss className="w-6 h-6" />,
    url: "https://ooohspooky.libsyn.com/rss",
  },
]

export default function ListenPlatforms() {
  return (
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
            <div className="w-16 h-16 mb-2 bg-muted rounded-full flex items-center justify-center text-primary">
              {platform.icon}
            </div>
            <span className="text-center text-primary">{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

import Header from "@/components/header"
import Footer from "@/components/footer"
import PodcastList from "@/components/podcast-list"
import { getPodcastEpisodes } from "@/lib/podcast"

export default async function EpisodesPage() {
  const episodes = await getPodcastEpisodes()

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center spooky-title">All Episodes</h1>
          <PodcastList episodes={episodes} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

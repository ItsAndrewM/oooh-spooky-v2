export interface Episode {
  guid: string
  title: string
  description: string
  pubDate: string
  enclosure?: {
    url: string
    type: string
    length: string
  }
  image?: string
}

export async function getPodcastEpisodes(): Promise<Episode[]> {
  try {
    const response = await fetch("https://ooohspooky.libsyn.com/rss", { next: { revalidate: 3600 } })
    const text = await response.text()

    // Parse the XML
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(text, "text/xml")

    const items = xmlDoc.querySelectorAll("item")
    const episodes: Episode[] = []

    items.forEach((item) => {
      const title = item.querySelector("title")?.textContent || ""
      const description = item.querySelector("description")?.textContent || ""
      const pubDate = item.querySelector("pubDate")?.textContent || ""
      const guid = item.querySelector("guid")?.textContent || Math.random().toString()

      const enclosure = item.querySelector("enclosure")
      let enclosureData = undefined

      if (enclosure) {
        enclosureData = {
          url: enclosure.getAttribute("url") || "",
          type: enclosure.getAttribute("type") || "",
          length: enclosure.getAttribute("length") || "",
        }
      }

      // Try to get image from itunes:image
      const image = item.querySelector("itunes\\:image")?.getAttribute("href") || ""

      episodes.push({
        guid,
        title,
        description,
        pubDate,
        enclosure: enclosureData,
        image,
      })
    })

    return episodes
  } catch (error) {
    console.error("Error fetching podcast feed:", error)
    return []
  }
}

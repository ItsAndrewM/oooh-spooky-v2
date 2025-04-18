import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Globe } from "lucide-react"

const hosts = [
  {
    id: 1,
    name: "Adam Knox",
    bio: "Adam Knox is a Melbourne-based comedian and podcaster. He's a co-host of the Oooh, Spooky podcast where he explores mysterious and unexplained phenomena with a comedic twist.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/adamgknox",
      instagram: "https://www.instagram.com/adamgknox/",
      website: "https://adamknox.com",
    },
  },
  {
    id: 2,
    name: "Luka Muller",
    bio: "Luka Muller is a comedian and podcast host known for his work on Oooh, Spooky. His unique perspective and humor bring the mysterious stories to life each week.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/lukacmuller",
      instagram: "https://www.instagram.com/lukacmuller/",
      facebook: "https://www.facebook.com/lukacmuller",
    },
  },
  {
    id: 3,
    name: "Peter Jones",
    bio: "Peter Jones is a comedian and podcaster who co-hosts Oooh, Spooky. His wit and insights add depth to the exploration of unexplained mysteries on the show.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/peterthejones",
      instagram: "https://www.instagram.com/peterthejones/",
      website: "https://peterjones.com",
    },
  },
]

export default function HostsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center spooky-title">Meet The Hosts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hosts.map((host) => (
            <Card key={host.id} className="overflow-hidden">
              <div className="aspect-square w-full relative">
                <img
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
                <div className="flex space-x-4">
                  {host.social.twitter && (
                    <a
                      href={host.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${host.name}'s Twitter`}
                      className="text-primary hover:text-accent"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {host.social.instagram && (
                    <a
                      href={host.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${host.name}'s Instagram`}
                      className="text-primary hover:text-accent"
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
                      className="text-primary hover:text-accent"
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
                      className="text-primary hover:text-accent"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

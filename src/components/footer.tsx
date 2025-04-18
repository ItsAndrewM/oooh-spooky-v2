import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Rss } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 spooky-title text-primary">OOOH, SPOOKY</h2>
            <p className="text-gray-300 mb-4">
              Spooky comedy podcast. Each week Adam Knox, Luka Muller and Peter Jones read five unexplained mysteries
              from a big book of Mysteries of the Unexplained.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} Oooh, Spooky</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Links</h3>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/episodes">Episodes</Link>
              <Link href="/videos">Videos</Link>
              <Link href="/about">About</Link>
              <a href="https://www.patreon.com/ooohspooky" target="_blank" rel="noopener noreferrer">
                Patreon
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Follow Us</h3>
            <div className="social-links">
              <a href="https://twitter.com/OoohSpooky" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/ooohspooky/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/ooohspooky/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com/@OoohSpooky"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube />
              </a>
              <a
                href="https://ooohspooky.libsyn.com/rss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RSS Feed"
              >
                <Rss />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

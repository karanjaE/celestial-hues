import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/lovable-uploads/1d74316e-7b79-4e5b-8d30-17db7d912482.png"
            alt="BantuTech Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-orange hover:text-white transition-colors">
            Find Talent
          </Button>
          <Button className="bg-orange text-white hover:bg-orange/90 transition-colors">
            Get Hired
          </Button>
        </div>
      </div>
    </nav>
  )
}
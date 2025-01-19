import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  Company: ["About us", "Our Team", "Careers"],
  Resources: ["Blog", "Success Stories", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Contact Us"],
}

export function Footer() {
  return (
    <footer className="bg-gray text-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="BantuTech Logo"
              width={32}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm">Connecting African talent with global opportunities.</p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-navy mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm hover:text-navy transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate/10 text-sm text-center">
          <p>© {new Date().getFullYear()} BantuTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
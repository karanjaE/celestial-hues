import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BantuTech",
  description: "Connecting Africa's Brightest Talent with Leading Tech Opportunities",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  )
}
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    title: "For Companies",
    description: "Access a curated pool of top African tech talent, vetted and ready to contribute to your team's success.",
    action: "Post a Job",
  },
  {
    title: "For Talent",
    description: "Discover exciting opportunities with leading tech companies and take your career to the next level.",
    action: "Find Jobs",
  },
  {
    title: "For Growth",
    description: "Join a community of professionals, access resources, and grow your skills with our development programs.",
    action: "Learn More",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray border border-slate/20 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold text-navy mb-4">{feature.title}</h3>
              <p className="text-blue mb-6">{feature.description}</p>
              <Button
                variant="ghost"
                className="text-blue hover:text-navy hover:bg-gray/50 group-hover:translate-x-2 transition-all duration-300"
                asChild
              >
                <Link href="#">{feature.action} →</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
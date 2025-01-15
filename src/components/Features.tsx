import { Button } from "@/components/ui/button";

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
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-flash-50 border border-flash-200 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold text-yinmn-500 mb-4">{feature.title}</h3>
              <p className="text-berkeley-400 mb-6">{feature.description}</p>
              <Button
                variant="ghost"
                className="text-berkeley-500 hover:text-berkeley-600 hover:bg-berkeley-50 group-hover:translate-x-2 transition-all duration-300"
              >
                {feature.action} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
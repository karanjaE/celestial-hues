import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-yinmn-500 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-berkeley-400 via-yinmn-500 to-yinmn-500"></div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Connecting Africa's Brightest Talent with Leading Tech Opportunities
          </h1>
          <p className="text-lg md:text-xl text-flash-400 max-w-2xl">
            BantuTech brings together exceptional tech professionals and leading companies. Whether you're hiring or looking for your next opportunity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button className="bg-orange-500 text-white hover:bg-orange-600 transition-all transform hover:scale-105">
              Find Talent
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 transition-all transform hover:scale-105">
              Get Hired
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-fade-in">
          <img
            src="/lovable-uploads/0226e9fc-2cbb-4716-84d4-281d386827e8.png"
            alt="Tech Professionals"
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
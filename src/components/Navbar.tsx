import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yinmn-500/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/0226e9fc-2cbb-4716-84d4-281d386827e8.png" alt="BantuTech Logo" className="h-8 w-auto" />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-flash-500 hover:text-white transition-colors">
            Find Talent
          </Button>
          <Button variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600 transition-colors">
            Get Hired
          </Button>
        </div>
      </div>
    </nav>
  );
};
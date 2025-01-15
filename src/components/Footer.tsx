const footerLinks = {
  Company: ["About us", "Our Team", "Careers"],
  Resources: ["Blog", "Success Stories", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Contact Us"],
};

export const Footer = () => {
  return (
    <footer className="bg-berkeley-100 text-flash-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/lovable-uploads/0226e9fc-2cbb-4716-84d4-281d386827e8.png" alt="BantuTech Logo" className="h-8 w-auto mb-4" />
            <p className="text-sm">Connecting African talent with global opportunities.</p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-berkeley-200/10 text-sm text-center">
          <p>© 2024 BantuTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
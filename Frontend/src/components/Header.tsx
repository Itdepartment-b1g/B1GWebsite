import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeaderProps {
  alwaysShowBg?: boolean;
}

const Header = ({ alwaysShowBg = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (alwaysShowBg) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysShowBg]);

  const showBg = alwaysShowBg || isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showBg 
        ? 'bg-[#3a006a] backdrop-blur-md border-b border-border/40 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-3">
          <div className="relative">
            
          </div>
          <div>
            <span className="text-2xl font-bold text-white">B1GCORPORATION</span>
          </div>
        </div>
        {/* Centered Navigation */}
        <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1">
          <a href="/" className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-white hover:bg-accent/50 transition-all duration-200">
            Home
          </a>
          <a href="/services" className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-white hover:bg-accent/50 transition-all duration-200">
            B1G
          </a>
          <a href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-white hover:bg-accent/50 transition-all duration-200">
            Products
          </a>
          <a href="/portfolio" className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-white hover:bg-accent/50 transition-all duration-200">
            Support
          </a>
          <a href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-white hover:bg-accent/50 transition-all duration-200">
            Be Our Partner
          </a>
          <a href="/news" className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-white hover:bg-accent/50 transition-all duration-200">
            News
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
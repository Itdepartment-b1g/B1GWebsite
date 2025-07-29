import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  alwaysShowBg?: boolean;
}

const Header = ({ alwaysShowBg = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      showBg 
        ? 'bg-[#472160]/95 backdrop-blur-lg border-b border-[#7A7f83]/20 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center group">
            <img 
              src={logo} 
              alt="B1G Corporation Logo" 
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg" 
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="/" className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF]' 
                : 'text-white hover:text-[#FF9BFF]'
            }`}>
              <span className="relative z-10">Home</span>
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                showBg ? 'bg-[#FF9BFF]/10' : 'bg-white/10'
              } opacity-0 hover:opacity-100`}></div>
            </a>
            <a href="/services" className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF]' 
                : 'text-white hover:text-[#FF9BFF]'
            }`}>
              <span className="relative z-10">B1G Services</span>
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                showBg ? 'bg-[#FF9BFF]/10' : 'bg-white/10'
              } opacity-0 hover:opacity-100`}></div>
            </a>
            <a href="/about" className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF]' 
                : 'text-white hover:text-[#FF9BFF]'
            }`}>
              <span className="relative z-10">Products</span>
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                showBg ? 'bg-[#FF9BFF]/10' : 'bg-white/10'
              } opacity-0 hover:opacity-100`}></div>
            </a>
            <a href="/portfolio" className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF]' 
                : 'text-white hover:text-[#FF9BFF]'
            }`}>
              <span className="relative z-10">Support</span>
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                showBg ? 'bg-[#FF9BFF]/10' : 'bg-white/10'
              } opacity-0 hover:opacity-100`}></div>
            </a>
            <a href="/contact" className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF]' 
                : 'text-white hover:text-[#FF9BFF]'
            }`}>
              <span className="relative z-10">Be Our Partner</span>
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                showBg ? 'bg-[#FF9BFF]/10' : 'bg-white/10'
              } opacity-0 hover:opacity-100`}></div>
            </a>
            <a href="/news" className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF]' 
                : 'text-white hover:text-[#FF9BFF]'
            }`}>
              <span className="relative z-10">News</span>
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                showBg ? 'bg-[#FF9BFF]/10' : 'bg-white/10'
              } opacity-0 hover:opacity-100`}></div>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl transition-all duration-300 hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              showBg ? 'bg-[#F4FBFE]' : 'bg-white'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              showBg ? 'bg-[#F4FBFE]' : 'bg-white'
            } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              showBg ? 'bg-[#F4FBFE]' : 'bg-white'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-2 pb-4">
            <a href="/" className={`px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF] hover:bg-[#FF9BFF]/10' 
                : 'text-white hover:text-[#FF9BFF] hover:bg-white/10'
            }`}>
              <span className="relative z-10">Home</span>
            </a>
            <a href="/services" className={`px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF] hover:bg-[#FF9BFF]/10' 
                : 'text-white hover:text-[#FF9BFF] hover:bg-white/10'
            }`}>
              <span className="relative z-10">B1G Services</span>
            </a>
            <a href="/about" className={`px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF] hover:bg-[#FF9BFF]/10' 
                : 'text-white hover:text-[#FF9BFF] hover:bg-white/10'
            }`}>
              <span className="relative z-10">Products</span>
            </a>
            <a href="/portfolio" className={`px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF] hover:bg-[#FF9BFF]/10' 
                : 'text-white hover:text-[#FF9BFF] hover:bg-white/10'
            }`}>
              <span className="relative z-10">Support</span>
            </a>
            <a href="/contact" className={`px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF] hover:bg-[#FF9BFF]/10' 
                : 'text-white hover:text-[#FF9BFF] hover:bg-white/10'
            }`}>
              <span className="relative z-10">Be Our Partner</span>
            </a>
            <a href="/news" className={`px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              showBg 
                ? 'text-[#F4FBFE] hover:text-[#FF9BFF] hover:bg-[#FF9BFF]/10' 
                : 'text-white hover:text-[#FF9BFF] hover:bg-white/10'
            }`}>
              <span className="relative z-10">News</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
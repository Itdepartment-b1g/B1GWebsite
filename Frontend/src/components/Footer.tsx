const Footer = () => {
  return (
    <footer className="bg-[#3a006a] py-10 border-t border-[#4b1a7a]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#home" className="text-white font-medium pb-1 border-b-2 border-transparent hover:border-white transition-all">Home</a>
          <a href="#services" className="text-white font-medium pb-1 border-b-2 border-transparent hover:border-white transition-all">Services</a>
          <a href="#solutions" className="text-white font-medium pb-1 border-b-2 border-transparent hover:border-white transition-all">Solutions</a>
          <a href="#projects" className="text-white font-medium pb-1 border-b-2 border-transparent hover:border-white transition-all">Projects</a>
          <a href="#contact" className="text-white font-medium pb-1 border-b-2 border-transparent hover:border-white transition-all">Contact Us</a>
        </nav>
        {/* Info Section */}
        <div className="flex flex-col items-center gap-2 text-white text-xs text-center">
          <div>
            <span className="font-semibold">Location:</span> 12 Lopez Building, Romulo Street, Poblacion A 2306 Camiling Tarlac
          </div>
          <div>
            <span className="font-semibold">Contact:</span> b1gcorporationofficial@gmail.com | +639690743506
          </div>
        </div>
        {/* Credits */}
        <div className="pt-4 text-white text-xs opacity-60 text-center w-full border-t border-[#4b1a7a]">
          Website Design by <span className="font-bold">webfactory</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
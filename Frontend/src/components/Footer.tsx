import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#472160] py-16 border-t border-[#7A7f83]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="B1G Corporation Logo" className="h-12 w-auto mr-4" />
            </div>
            <p className="text-[#F4FBFE]/80 text-sm leading-relaxed mb-6 max-w-md">
              B1G Corporation leads with innovation and sophistication, delivering cutting-edge solutions 
              that transform businesses and drive success in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/b1gkrknmedia" className="text-[#F4FBFE]/60 hover:text-[#FF9BFF] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/b1gcorpofficial/" className="text-[#F4FBFE]/60 hover:text-[#FF9BFF] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/b1gcorporation/posts/?feedView=all" className="text-[#F4FBFE]/60 hover:text-[#FF9BFF] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F4FBFE] font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-[#F4FBFE]/70 hover:text-[#FF9BFF] transition-colors duration-200 text-sm">Home</a></li>
              <li><a href="/services" className="text-[#F4FBFE]/70 hover:text-[#FF9BFF] transition-colors duration-200 text-sm">B1G Services</a></li>
              <li><a href="/about" className="text-[#F4FBFE]/70 hover:text-[#FF9BFF] transition-colors duration-200 text-sm">Products</a></li>
              <li><a href="/portfolio" className="text-[#F4FBFE]/70 hover:text-[#FF9BFF] transition-colors duration-200 text-sm">Support</a></li>
              <li><a href="/contact" className="text-[#F4FBFE]/70 hover:text-[#FF9BFF] transition-colors duration-200 text-sm">Be Our Partner</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[#F4FBFE] font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF9BFF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="text-[#F4FBFE]/70">
                  12 Lopez Building, Romulo Street<br />
                  Poblacion A 2306 Camiling Tarlac
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF9BFF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="text-[#F4FBFE]/70">
                  b1gcorporationofficial@gmail.com
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF9BFF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="text-[#F4FBFE]/70">
                  +639690743506
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#7A7f83]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#F4FBFE]/60 text-sm">
              © 2024 B1G Corporation. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Shield, Layers, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import images
import forgeBanner from "../assets/ForgeBanner.jpg";
import forgePicture from "../assets/ForgePicture.jpg";
import XslimbarImage from "../assets/Slimbar/Xslimbar.jpg";

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      image: forgeBanner
    },
    {
      image: "https://www.b1gcorporation.com/AmzBanner.png"
    },
    {
      image: "https://www-x-xvape-x-cc.img.addlink.cn/Templates/default/proImages/X-SLIMBAR-sub-brand.png"
    }
  ];

  const products = [
    {
      id: 1,
      name: "FORGE",
      tagline: "Forge Your Experience",
      description: "Forge is a sleek, rechargeable pre-filled vape that delivers up to 10,000 puffs of bold, satisfying flavors—perfect for vapers who want long-lasting performance with style.",
      features: ["10,000 Puffs", "Rechargeable Battery", "Premium Flavors", "Sleek Design"],
      category: "B1G",
      price: "Premium Line",
      image: "https://mcwinternationaltrading.com/cdn/shop/files/X4_1080x.jpg?v=1747153609",
      route: "/XForge",
      gradient: "from-[#472160] to-[#FF9BFF]",
      available: true
    },
    {
      id: 2,
      name: "ALPHA",
      tagline: "The Alpha of all v1",
      description: "A comprehensive vaping solution designed for experienced users. Streamline your vaping experience with advanced technology, monitoring, and premium build quality.",
      features: ["Advanced Technology", "Premium Build", "Enhanced Performance", "User-Friendly"],
      category: "B1G",
      price: "Coming Soon",
      image: forgePicture,
      route: "/forgealpha",
      gradient: "from-[#472160] to-[#7A7f83]",
      available: false
    },
    {
      id: 3,
      name: "X-SLIMBAR",
      tagline: "Designed to Impress",
      description: "The X-Slimbar offers a compact, ultra-slim design packed with rich flavors and advanced specs—ideal for vapers seeking maximum portability without sacrificing satisfaction.",
      features: ["Ultra-Slim Design", "Portable", "Rich Flavors", "Advanced Specs"],
      category: "X-Vape",
      price: "Essential Line",
      image: XslimbarImage,
      route: "/XSlimbar",
      gradient: "from-[#472160] to-[#FF9BFF]",
      available: true
    },
    {
      id: 4,
      name: "X-ULTRA",
      tagline: "Crafted to Last",
      description: "The X-Ultra features a detachable cartridge, smart display, luxury airflow, and USB-C charging—making it a sophisticated, high-technology disposable vape experience.",
      features: ["Smart Display", "USB-C Charging", "Detachable Cartridge", "Luxury Airflow"],
      category: "X-Vape",
      price: "Ultra Line",
      image: "/src/assets/Ultra/UltraPhoto.webp",
      route: "/xultra",
      gradient: "from-[#472160] to-[#FF9BFF]",
      available: true
    },
    {
      id: 5,
      name: "AMZ A1",
      tagline: "Amazing Vape, Amazing Life",
      description: "AMZ Vape provides a convenient battery and pod system with flexible combos—great for vapers looking for customizable convenience and value.",
      features: ["Battery & Pod System", "Flexible Combos", "Customizable", "Great Value"],
      category: "AMZ",
      price: "Value Line",
      image: "/src/assets/Amz/amz photo.jpg",
      route: "/amz",
      gradient: "from-[#472160] to-[#7A7f83]",
      available: true
    }
  ];

  const categories = ["All", "B1G","X-Vape", "AMZ"];

  const filteredProducts = currentCategory === "All" 
    ? products 
    : products.filter(product => product.category === currentCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };



  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FBFE' }}>
      <Header alwaysShowBg={true} />
      
      <main className="pt-20">
        {/* Hero Section with Advanced Slideshow */}
        <section ref={heroRef} className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
            ))}
          </div>



          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 group backdrop-blur-sm border border-white/20"
            style={{ backgroundColor: 'rgba(244, 251, 254, 0.1)' }}
          >
            <ChevronLeft className="w-6 h-6 mx-auto text-white group-hover:text-[#FF9BFF] transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 group backdrop-blur-sm border border-white/20"
            style={{ backgroundColor: 'rgba(244, 251, 254, 0.1)' }}
          >
            <ChevronRight className="w-6 h-6 mx-auto text-white group-hover:text-[#FF9BFF] transition-colors duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-[#FF9BFF]' 
                    : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </section>
        

        {/* Products Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(71, 33, 96, 0.1)', color: '#472160' }}>
                PRODUCT COLLECTION
              </div>
              <h2 className="text-5xl md:text-6xl font-thin mb-8" style={{ color: '#000204', letterSpacing: '-0.02em' }}>
                Premium Products
              </h2>
              <div className="relative mb-10">
                <div className="w-32 h-0.5 mx-auto" style={{ backgroundColor: '#472160' }}></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5" style={{ backgroundColor: '#FF9BFF' }}></div>
              </div>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#7A7f83' }}>
                Discover our complete range of premium vaping solutions, each designed with meticulous attention to detail and cutting-edge technology.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    currentCategory === category
                      ? 'text-white shadow-lg scale-105'
                      : 'text-[#472160] hover:scale-105 border-2 border-[#472160]/20 hover:border-[#472160]/40'
                  }`}
                  style={{
                    backgroundColor: currentCategory === category ? '#472160' : 'transparent'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      product.available 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {product.available ? 'Available' : 'Coming Soon'}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#472160', color: '#F4FBFE' }}>
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold" style={{ color: '#000204' }}>
                        {product.name}
                      </h3>
                    </div>
                    
                    <p className="text-lg font-medium mb-4" style={{ color: '#FF9BFF' }}>
                      {product.tagline}
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#7A7f83' }}>
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF9BFF' }}></div>
                          <span className="text-xs" style={{ color: '#7A7f83' }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold" style={{ color: '#472160' }}>
                        {product.price}
                      </div>
                      
                      {product.available ? (
                        <Link to={product.route}>
                          <button
                            className="flex items-center gap-3 px-6 py-3 rounded-full font-medium bg-[#472160] text-[#F4FBFE] transition-transform duration-400 ease-out transform"
                          >
                            {/* shimmer + label */}
                            <span className="relative overflow-hidden inline-flex items-center">
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                              <span className="relative z-10">Explore</span>
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-out group-hover:translate-x-2" />
                          </button>
                         </Link>
                       ) : (
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium opacity-50 cursor-not-allowed" style={{ backgroundColor: '#7A7f83', color: '#F4FBFE' }}>
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #472160 0%, #FF9BFF 100%)' }}></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
          
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-8" style={{ letterSpacing: '-0.02em' }}>
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join thousands of satisfied customers who have made the switch to premium vaping with B1G Corporation's exceptional product line.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <button className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white text-[#472160]">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 border-white/30 text-white backdrop-blur-sm hover:bg-white/10">
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
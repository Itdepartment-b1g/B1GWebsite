import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Star, Award, Shield, Zap, 
  Battery, Play, ChevronDown, ChevronLeft, ChevronRight
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const flavorPods = [
  {
    id: 1,
    name: "B1G RED",
    description: "A vibrant and refreshing burst of sweet, sun-kissed energy.",
    color: "#EF4444",
    image: "/src/assets/B1GSparkle.png",
    intensity: "Strong",
    profile: ["Sweet", "Fruity", "Energizing"]
  },
  {
    id: 2,
    name: "B1G HEART",
    description: "A playful and smooth sensation that captures a sweet, lively essence.",
    color: "#F59E0B",
    image: "/src/assets/B1GHeart.png",
    intensity: "Medium",
    profile: ["Sweet", "Smooth", "Playful"]
  },
  {
    id: 3,
    name: "B1G LUSH",
    description: "A luxurious wave of delicate sweetness with an exotic touch.",
    color: "#10B981",
    image: "/src/assets/B1GLush.png",
    intensity: "Mild",
    profile: ["Exotic", "Sweet", "Luxurious"]
  },
  {
    id: 4,
    name: "B1G FROST",
    description: "A cool, invigorating breeze that awakens and refreshes with a crisp clarity.",
    color: "#3B82F6",
    image: "/src/assets/B1GFrost.png",
    intensity: "Cool",
    profile: ["Cool", "Crisp", "Refreshing"]
  },
  {
    id: 5,
    name: "B1G BLUE",
    description: "A calm, deep sensation that gently balances sweetness with a refreshing coolness.",
    color: "#6366F1",
    image: "/src/assets/B1GBlue.png",
    intensity: "Balanced",
    profile: ["Calm", "Balanced", "Cool"]
  },
  {
    id: 6,
    name: "B1G SHIROTA",
    description: "A smooth, creamy experience that's light and subtly refreshing with a hint of smoothness.",
    color: "#8B5CF6",
    image: "/src/assets/B1GShirota.png",
    intensity: "Creamy",
    profile: ["Smooth", "Creamy", "Light"]
  }
];

const batteryOptions = [
  {
    id: 1,
    name: "Obsidian Black",
    color: "#1F2937",
    colorName: "Black",
    image: "/src/assets/ObsidianBlack.png",
    description: "Sleek and professional"
  },
  {
    id: 2,
    name: "Tiffany Blue",
    color: "#00FFFF",
    colorName: "Cyan",
    image: "/src/assets/VividCyan.png",
    description: "Bold and distinctive"
  },
  {
    id: 3,
    name: "Metallic Grey",
    color: "#6B7280",
    colorName: "Gray",
    image: "/src/assets/GraphiteGray.png",
    description: "Classic and versatile"
  }
];

const ForgeAlpha = () => {
  const [showHeaderBg, setShowHeaderBg] = useState(false);
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  
  // Use only first 5 flavors for carousel
  const carouselFlavors = flavorPods.slice(0, 5);
  const currentFlavor = carouselFlavors[currentFlavorIndex];

  const nextFlavor = () => {
    setCurrentFlavorIndex((prev) => (prev + 1) % carouselFlavors.length);
  };

  const prevFlavor = () => {
    setCurrentFlavorIndex((prev) => (prev - 1 + carouselFlavors.length) % carouselFlavors.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show header background when scrolled down more than 100px
      setShowHeaderBg(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysShowBg={showHeaderBg} />
      
            {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-[3rem]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-black via-gray-800 via-black to-gray-900"></div>

        {/* Floor Rectangle */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-600 via-gray-700 via-gray-800 to-transparent"></div>

        {/* Product Images */}
        <img 
          src="/src/assets/4.png" 
          alt="Product 4" 
          className="absolute top-[15rem] left-[12rem] w-[20rem] 
                     sm:top-[18rem] sm:left-[5rem] sm:w-[25rem]
                     md:top-[20rem] md:left-[8rem] md:w-[35rem]
                     lg:top-[22rem] lg:left-[20rem] lg:w-[45rem]
                     xl:top-[25rem] xl:left-[40rem] xl:w-[55rem]
                     h-auto z-10"
        />
        <img 
          src="/src/assets/2.png" 
          alt="Product 2" 
          className="absolute top-[3rem] left-[2rem] w-[20rem]
                     sm:top-[4rem] sm:left-[5rem] sm:w-[25rem]
                     md:top-[5rem] md:left-[8rem] md:w-[35rem]
                     lg:top-[6rem] lg:left-[12rem] lg:w-[45rem]
                     xl:top-[16rem] xl:left-[40rem] xl:w-[53rem]
                     h-auto z-10"
        />
        <img 
          src="/src/assets/3.png" 
          alt="Product 3" 
          className="absolute top-[8rem] left-[5rem] w-[20rem]
                     sm:top-[10rem] sm:left-[8rem] sm:w-[25rem]
                     md:top-[12rem] md:left-[12rem] md:w-[30rem]
                     lg:top-[14rem] lg:left-[25rem] lg:w-[40rem]
                     xl:top-[-3rem] xl:left-[53rem] xl:w-[102rem]
                     h-auto z-20" 
        />
        <img 
          src="/src/assets/5.png" 
          alt="Product 5" 
          className="absolute top-[18rem] right-[2rem] w-[22rem]
                     sm:top-[20rem] sm:right-[5rem] sm:w-[28rem]
                     md:top-[22rem] md:right-[8rem] md:w-[35rem]
                     lg:top-[2rem] lg:right-[-32rem] lg:w-[100rem]
                     xl:top-[2rem] xl:right-[-43rem] xl:w-[200rem]
                     z-10"
        />

                {/* Hero Content - Alpha Logo */}
        <img 
          src="/src/assets/Alpha Logo.png" 
          alt="Alpha Logo" 
          className="absolute left-[-5rem] top-[10rem] w-[20rem] 
                     sm:left-[-3rem] sm:top-[12rem] sm:w-[25rem]
                     md:left-[0rem] md:top-[15rem] md:w-[28rem]
                     lg:left-[3rem] lg:top-[18rem] lg:w-[32rem]
                     xl:left-[8rem] xl:top-[22rem] xl:w-[35rem]
                     h-auto z-30"
        />
        
        {/* Hero Text and Button */}
        <div className="absolute left-[-5rem] top-[18rem] max-w-4xl z-30
                        sm:left-[-3rem] sm:top-[22rem]
                        md:left-[0rem] md:top-[26rem]
                        lg:left-[3rem] lg:top-[30rem]
                        xl:left-[8rem] xl:top-[30rem]">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-6 leading-tight tracking-wide whitespace-nowrap font-montserrat font-bold">
            FORGE YOUR NEW EXPERIENCE
          </p>
          <button className="px-6 py-3 border-2 border-white bg-transparent text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-montserrat">
            <span>User Manual</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Custom Content Section */}
      <section className="pt-24 pb-12 bg-white-50 ml-12 mr-12 lg:ml-16 lg:mr-16 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          
          {/* Section Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-0 items-center mb-8">
            
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 font-montserrat font-bold">
                About Alpha
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-montserrat">
                Discover the cutting-edge technology that makes Forge Alpha the ultimate vaping experience.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/src/assets/ObsidianBlack.png" 
                alt="Forge Alpha Product" 
                className="w-64 h-auto max-w-full"
              />
            </div>

          </div>


        </div>
      </section>

      {/* Additional Content Section */}
      <section className="pt-32 pb-48 bg-white-50 ml-12 mr-12 lg:ml-16 lg:mr-16 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          
          {/* Text with Line */}
          <div className="mb-8 text-center">
            <p className="text-xl font-semibold text-gray-800 mb-4 font-montserrat">
              Discover Our Premium Collection
            </p>
            <div className="w-500 h-1 bg-gray-700 rounded-full mx-auto"></div>
          </div>
          
          {/* Image Rectangle */}
          <div className="rounded-2xl overflow-hidden h-80 lg:h-96">
            <img 
              src="/src/assets/CutomImage.png" 
              alt="Product Image" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="relative h-[800px] overflow-hidden">
        {/* Enhanced Gradient Background with Lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-gray-800 to-black"></div>
        
        {/* Dynamic Lighting Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-purple-500/15 via-pink-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-blue-400/10 via-cyan-400/5 to-transparent rounded-full blur-xl"></div>
        
        <div className="relative z-10 h-full flex">
          
          {/* Left Content with Enhanced Glassmorphism */}
          <div className="flex-1 flex items-center px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/5 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold font-montserrat">
                  Product Showcase
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed font-montserrat">
                  Explore our complete range of premium vaping products designed for every preference.
                </p>
                
                {/* Accent Line */}
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-6"></div>
              </div>
            </div>
          </div>
  
          <div className="hidden lg:block w-[40rem] relative">
            {/* Enhanced Glassmorphism Panel */}
            <div className="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-l-[6rem] relative shadow-2xl overflow-visible">
              
              {/* Multiple Glass Layers for Depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-l-[6rem]"></div>
              <div className="absolute inset-2 bg-gradient-to-tl from-white/5 via-transparent to-white/10 rounded-l-[6rem]"></div>
              
              {/* Dynamic Light Reflections */}
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/15 via-white/5 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent"></div>
              
              {/* Vertical Text - Dynamic Flavor Name */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 -rotate-90 flex flex-col gap-8 z-20">
                <h1 className="text-6xl font-bold text-white whitespace-nowrap tracking-wider drop-shadow-lg font-montserrat">
                  {currentFlavor.name}
                </h1>
                <h1 className="text-6xl font-bold whitespace-nowrap tracking-wider text-outline-black text-transparent drop-shadow-sm font-montserrat">
                  {currentFlavor.name}
                </h1>
              </div>
              
              {/* Enhanced Flavor Images with Advanced Animation - Vertically Centered */}
              <div className="absolute left-[-10rem] top-1/2 transform -translate-y-1/2 w-[20rem] h-[20rem] overflow-visible z-0 flex items-center justify-center">
                {carouselFlavors.map((flavor, index) => {
                  const offset = index - currentFlavorIndex;
                  const isActive = index === currentFlavorIndex;
                  const isPrev = index === (currentFlavorIndex - 1 + carouselFlavors.length) % carouselFlavors.length;
                  const isNext = index === (currentFlavorIndex + 1) % carouselFlavors.length;
                  
                  return (
                    <div key={flavor.id} className="absolute w-full h-full flex items-center justify-center">
                      {/* Enhanced Glow Effect with Pulsing */}
                      <div className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                      }`}>
                        <div className="w-full h-full bg-gradient-radial from-cyan-400/30 via-blue-400/15 to-transparent blur-3xl animate-pulse"></div>
                      </div>
                      
                      {/* Secondary Glow for Depth */}
                      <div className={`absolute inset-0 transition-all duration-500 ${
                        isActive ? 'opacity-60' : 'opacity-0'
                      }`}>
                        <div className="w-full h-full bg-gradient-radial from-white/10 via-cyan-300/5 to-transparent blur-xl"></div>
                      </div>
                      
                      {/* Actual Image with Complex Animation - Centered Positioning */}
                      <img 
                        src={flavor.image} 
                        alt={flavor.name} 
                        className={`w-full h-auto max-h-full object-contain transition-all duration-700 ease-out drop-shadow-2xl ${
                          isActive 
                            ? 'transform translate-x-0 translate-y-0 scale-110 brightness-110 saturate-110 rotate-0 opacity-100 z-20' 
                            : isPrev
                            ? 'transform -translate-x-32 translate-y-0 scale-75 brightness-75 saturate-75 -rotate-12 opacity-40 z-10'
                            : isNext
                            ? 'transform translate-x-32 translate-y-0 scale-75 brightness-75 saturate-75 rotate-12 opacity-40 z-10'
                            : offset < 0
                            ? 'transform -translate-x-96 translate-y-0 scale-50 brightness-50 saturate-50 -rotate-45 opacity-0 z-0'
                            : 'transform translate-x-96 translate-y-0 scale-50 brightness-50 saturate-50 rotate-45 opacity-0 z-0'
                        }`}
                        style={{
                          filter: isActive 
                            ? 'drop-shadow(0 20px 40px rgba(0, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))'
                            : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))'
                        }}
                      />
                      
                      {/* Floating Particles Effect for Active Item */}
                      {isActive && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
                          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/80 rounded-full animate-pulse delay-300"></div>
                          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce delay-500"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Animated Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 w-full h-full opacity-0 animate-pulse"></div>
            </div>

          </div>

        </div>
        
 
        
        {/* Navigation Buttons - Bottom Right */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-20">
          <button 
            onClick={prevFlavor}
            className="w-12 h-12 border-2 border-white bg-transparent text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextFlavor}
            className="w-12 h-12 border-2 border-white bg-transparent text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Flavor Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {carouselFlavors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFlavorIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentFlavorIndex 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForgeAlpha;

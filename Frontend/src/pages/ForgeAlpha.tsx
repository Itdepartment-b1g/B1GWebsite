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
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-6 leading-tight tracking-wide whitespace-nowrap">
            FORGE YOUR NEW EXPERIENCE
          </p>
          <button className="px-6 py-3 border-2 border-white bg-transparent text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
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
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                About Alpha
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
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
            <p className="text-xl font-semibold text-gray-800 mb-4">
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
        {/* Hero-style Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-black via-gray-800 via-black to-gray-900"></div>
        
        <div className="relative z-10 h-full flex">
          
          {/* Left Content */}
          <div className="flex-1 flex items-center px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-left">
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Product Showcase
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Explore our complete range of premium vaping products designed for every preference.
              </p>
            </div>
          </div>
                     {/* Large Product Image - Positioned Absolutely */}
     
                    {/* Right Full-Height Vertical Rectangle */}
          <div className="hidden lg:block w-[35rem] relative">
            <div className="w-full h-full bg-blue-200/20 backdrop-blur-lg border-blue-200/30 rounded-l-[6rem] relative shadow-xl">
              {/* Vertical Text - Dynamic Flavor Name */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 -rotate-90 flex flex-col gap-8 z-10">
                <h1 className="text-6xl font-bold text-white whitespace-nowrap tracking-wider">
                  {currentFlavor.name}
                </h1>
                <h1 className="text-6xl font-bold whitespace-nowrap tracking-wider text-outline-black text-transparent">
                  {currentFlavor.name}
                </h1>
              </div>
              
              {/* Flavor Images with Sliding Animation */}
              <div className="absolute left-[-12rem] top-1/2 transform -translate-y-1/2 w-96 h-96 overflow-hidden z-5">
                {carouselFlavors.map((flavor, index) => (
                  <img 
                    key={flavor.id}
                    src={flavor.image} 
                    alt={flavor.name} 
                    className={`absolute w-full h-auto transition-transform duration-500 ease-in-out ${
                      index === currentFlavorIndex 
                        ? 'transform translate-x-0' 
                        : index < currentFlavorIndex
                        ? 'transform translate-x-full'
                        : 'transform -translate-x-full'
                    }`}
                  />
                ))}
              </div>
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

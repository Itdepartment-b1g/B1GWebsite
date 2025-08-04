import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ChevronLeft, ChevronRight, Plus, Check, Star, Award, Shield, Zap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const flavorPods = [
  {
    id: 1,
    name: "B1G RED",
    description: "A vibrant and refreshing burst of sweet, sun-kissed energy.",
    color: "#02ECCF", 
    image: "/src/assets/B1GSparkle.png",
  },
  {
    id: 2,
    name: "B1G HEART",
    description: "A playful and smooth sensation that captures a sweet, lively essence.",
    color: "#02ECCF", 
    image: "/src/assets/B1GHeart.png",
  },
  {
    id: 3,
    name: "B1G LUSH",
    description: "A luxurious wave of delicate sweetness with an exotic touch.",
    color: "#02ECCF",
    image: "/src/assets/B1GLush.png",
  },
  {
    id: 4,
    name: "B1G FROST",
    description: "A cool, invigorating breeze that awakens and refreshes with a crisp clarity.",
    color: "#02ECCF", 
    image: "/src/assets/B1GFrost.png",
  },
  {
    id: 5,
    name: "B1G BLUE",
    description: "A calm, deep sensation that gently balances sweetness with a refreshing coolness.",
    color: "#02ECCF", 
    image: "/src/assets/B1GBlue.png",
  },
  {
    id: 6,
    name: "B1G SHIROTA",
    description: "A smooth, creamy experience that's light and subtly refreshing with a hint of smoothness.",
    color: "#02ECCF",
    image: "/src/assets/B1GShirota.png",
  },
  {
    id: 7,
    name: "B1G PURPLE",
    description: "A rich, bold experience that evokes a sense of sophistication and indulgence.",
    color: "#02ECCF", 
    image: "/src/assets/B1GPurple.png",
  },
  {
    id: 8,
    name: "B1G RIZZ",
    description: "A dynamic, zesty blend that brings together a vibrant symphony of tangy and sweet notes.",
    color: "#02ECCF",
    image: "/src/assets/B1GRizz.png",
  },
  {
    id: 9,
    name: "B1G BLACK",
    description: "A bold, intense sensation with a deep and slightly tart edge that lingers.",
    color: "#02ECCF", 
    image: "/src/assets/B1GBlack.png",
  },
  {
    id: 10,
    name: "B1G SPARKLE",
    description: "A bright, fizzy explosion of zest and zestful energy that tingles with excitement.",
    color: "#02ECCF", 
    image: "/src/assets/B1GSparkle.png",
  },
];

const batteries = [
  {
    id: 1,
    name: "Obsidian Black",
    color: "#2b2b2b",
    colorName: "Black",
    image: "/src/assets/ObsidianBlack.png",
  },
  {
    id: 2,
    name: "Tiffany Blue",
    color: "#82ded2",
    colorName: "Teal",
    image: "/src/assets/VividCyan.png",
  },
  {
    id: 3,
    name: "Metallic Grey",
    color: "#909393",
    colorName: "Gray",
    image: "/src/assets/GraphiteGray.png",
  },
];

const ForgeAlpha = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [selectedPod, setSelectedPod] = useState(flavorPods[0]);
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedBattery, setSelectedBattery] = useState(batteries[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToProducts = () => {
    const productsElement = document.getElementById("products");
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const podsPerPage = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 5,
  };

  const showNext = () => {
    const podsPerPage = getPodsPerPage();
    const maxIndex = Math.max(0, flavorPods.length - podsPerPage);
    setCurrentIndex((prevIndex) => Math.min(prevIndex + podsPerPage, maxIndex));
  };

  const showPrev = () => {
    const podsPerPage = getPodsPerPage();
    setCurrentIndex((prevIndex) => Math.max(prevIndex - podsPerPage, 0));
  };

  const getPodsPerPage = () => {
    if (window.innerWidth < 640) return podsPerPage.xs;
    if (window.innerWidth < 768) return podsPerPage.sm;
    if (window.innerWidth < 1024) return podsPerPage.md;
    return podsPerPage.lg;
  };

  const viewPodDetails = (pod: any) => {
    setSelectedPod(pod);
    setIsDetailView(true);
  };

  const closeDetails = () => {
    setIsDetailView(false);
  };

  useEffect(() => {
    // Simple GSAP animation for the text
    gsap.fromTo(textRef.current, 
      { 
        scale: 0.1,
        opacity: 0,
        y: 100
      },
      { 
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out"
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header alwaysShowBg={true} />
      
      {/* Futuristic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,236,207,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(2,236,207,0.10),transparent_60%)]"></div>
        
        {/* Futuristic Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(2,236,207,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2,236,207,0.1) 1px, transparent 1px),
              linear-gradient(rgba(107,114,128,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,114,128,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
            backgroundPosition: '0 0, 0 0, 0 0, 0 0'
          }}></div>
        </div>
        
        {/* Futuristic Geometric Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#02ECCF]/30 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-32 w-28 h-28 border border-[#02ECCF]/20 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 border border-gray-500/15 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#02ECCF] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#02ECCF] rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/80 backdrop-blur-sm border border-[#02ECCF]/40 rounded-full text-[#02ECCF] font-semibold text-sm mb-8 shadow-lg shadow-[#02ECCF]/20">
              <Award size={16} />
              Premium Vaping Technology
            </div>

            {/* Main Heading */}
            <h1 ref={textRef} className="mt-8 text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              FORGE
              <span className="block bg-gradient-to-r from-[#02ECCF] via-[#02ECCF] to-gray-400 bg-clip-text text-transparent">
                ALPHA
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of vaping with our revolutionary technology, 
              precision engineering, and unmatched flavor profiles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 sm:gap-6 justify-center mb-16">
              <button
                onClick={scrollToProducts}
                className="group px-6 sm:px-8 py-4 bg-[#02ECCF] text-black font-semibold rounded-xl hover:bg-[#02ECCF]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#02ECCF]/30 transform hover:-translate-y-1 flex-1 max-w-xs"
              >
                <span className="flex items-center gap-2 justify-center">
                  <span className="hidden sm:inline">Explore Products</span>
                  <span className="sm:hidden">Products</span>
                  <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
                </span>
              </button>
              <button className="px-6 sm:px-8 py-4 bg-gray-800/80 text-white font-semibold rounded-xl border border-gray-600/50 hover:border-[#02ECCF]/50 hover:bg-gray-800 transition-all duration-300 shadow-lg backdrop-blur-sm flex-1 max-w-xs">
                <span className="hidden sm:inline">User Manual</span>
                <span className="sm:hidden">Manual</span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Fast Charging", desc: "30-minute rapid charge" },
                { icon: Shield, title: "Premium Quality", desc: "Aerospace-grade materials" },
                { icon: Star, title: "10+ Flavors", desc: "Curated flavor collection" }
              ].map((feature, index) => (
                <div key={index} className="group p-6 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-[#02ECCF]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#02ECCF]/10 text-center">
                  <div className="w-12 h-12 bg-[#02ECCF]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#02ECCF]/30 transition-colors duration-300 mx-auto">
                    <feature.icon className="text-[#02ECCF]" size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#02ECCF]" size={32} />
        </div>
      </section>
      
      {/* Battery Options Section */}
      <section
        id="products"
        className="section min-h-screen flex items-center justify-center relative overflow-hidden py-12 sm:py-16 lg:py-20"
      >
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(2,236,207,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(2,236,207,0.08),transparent_60%)]"></div>
        
        {/* Advanced Grid Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(2,236,207,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2,236,207,0.15) 1px, transparent 1px),
              linear-gradient(rgba(107,114,128,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,114,128,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px'
          }}></div>
        </div>
        
        {/* Futuristic Geometric Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 border border-[#02ECCF]/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-gray-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-[#02ECCF]/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-gray-400/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Futuristic Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black/80 backdrop-blur-sm border border-[#02ECCF]/40 rounded-full text-[#02ECCF] font-semibold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg shadow-[#02ECCF]/20">
              <Award size={14} className="sm:w-4 sm:h-4" />
              Premium Battery Collection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Advanced <span className="text-[#02ECCF]">Power</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
              Experience unmatched power and style with our cutting-edge battery technology, 
              engineered for the ultimate vaping experience.
            </p>
          </div>

          {/* Futuristic Product Showcase */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Product Image Section */}
              <div className="relative w-full">
                {/* Background Card */}
                <div className="relative p-6 sm:p-8 lg:p-12 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-xl shadow-[#02ECCF]/10">
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={selectedBattery.image}
                      alt={selectedBattery.name}
                      className="max-h-[300px] sm:max-h-[350px] lg:max-h-[500px] mx-auto drop-shadow-xl transition-all duration-700 hover:scale-105"
                    />
                    
                    {/* Glowing effect */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-[#02ECCF]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                {/* Product Name */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-3 sm:mb-4">
                    {selectedBattery.name}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Elevate your vaping experience with our premium battery engineered for 
                    exceptional performance, rapid charging, and unmatched durability.
                  </p>
                </div>

                {/* Color Selection */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Available Colors</h4>
                  <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                    {batteries.map((battery) => (
                      <button
                        key={battery.id}
                        className={`group relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl transition-all duration-300 ${
                          selectedBattery.id === battery.id
                            ? "ring-4 ring-[#02ECCF] scale-110 shadow-lg shadow-[#02ECCF]/30"
                            : "hover:scale-105 ring-2 ring-gray-600 hover:ring-[#02ECCF]/50"
                        }`}
                        style={{ backgroundColor: battery.color }}
                        onClick={() => setSelectedBattery(battery)}
                      >
                        {selectedBattery.id === battery.id && (
                          <Check className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size={20} />
                        )}
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 text-[#02ECCF] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#02ECCF]/30">
                          {battery.colorName}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Flavor Pods Section */}
      <section
        id="flavors"
        className="section min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-24 lg:py-32"
      >
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,236,207,0.10),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,236,207,0.06),transparent_70%)]"></div>
        
        {/* Complex Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(2,236,207,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2,236,207,0.12) 1px, transparent 1px),
              linear-gradient(rgba(107,114,128,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,114,128,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 10px 10px, 10px 10px'
          }}></div>
        </div>
        
        {/* Futuristic decorative elements */}
        <div className="absolute top-16 left-16 w-20 h-20 border border-[#02ECCF]/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-[#02ECCF]/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Futuristic Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black/80 backdrop-blur-sm border border-[#02ECCF]/40 rounded-full text-[#02ECCF] font-semibold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg shadow-[#02ECCF]/20">
              <Star size={14} className="sm:w-4 sm:h-4" />
              Premium Flavor Collection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
              Crafted <span className="text-[#02ECCF]">Flavors</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
              Immerse yourself in a symphony of flavors crafted with precision and passion. 
              Each pod delivers an extraordinary taste journey designed to captivate your senses.
            </p>
          </div>

          {/* Detail View */}
          {isDetailView ? (
            <div className="max-w-6xl mx-auto">
              <button
                className="group mb-12 px-6 py-3 bg-black/80 backdrop-blur-sm border border-gray-600 text-white hover:border-[#02ECCF] hover:text-[#02ECCF] rounded-xl font-semibold transition-all duration-300 hover:bg-black"
                onClick={closeDetails}
              >
                <ChevronLeft className="mr-2 inline group-hover:scale-110 transition-transform duration-300" size={20} />
                Back to Collection
              </button>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Enhanced Image Section */}
                <div className="relative">
                  <div className="p-12 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-xl shadow-[#02ECCF]/10">
                    <img
                      src={selectedPod.image}
                      alt={selectedPod.name}
                      className="max-h-[400px] mx-auto drop-shadow-xl transition-all duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Glowing effect */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"
                    style={{ backgroundColor: selectedPod.color }}
                  ></div>
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-black text-white mb-4">
                      {selectedPod.name}
                    </h3>
                    <div className="w-16 h-1 bg-[#02ECCF] mb-6"></div>
                  </div>

                  <div className="p-6 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {selectedPod.description}
                    </p>
                  </div>

                  {/* Product Specs */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Capacity", value: "10ml"},
                      { label: "Nicotine", value: "12mg/ml" },
                      { label: "Coil", value: "1.2Ω mesh" },
                      { label: "Ratio", value: "60/40 PG/VG"},
                    ].map((spec, index) => (
                      <div key={index} className="p-4 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-[#02ECCF]/30 transition-all duration-300">
                        <div className="flex items-center gap-3">
                        
                          <div>
                            <div className="text-sm text-gray-400 font-medium">{spec.label}</div>
                            <div className="text-white font-bold">{spec.value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Clean Professional Showcase */}
              <div className="max-w-6xl mx-auto">
                {/* Featured Product Display */}
                <div className="mb-8 md:mb-16">
                  <div className="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 sm:p-6 lg:p-12">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                      {/* Product Image */}
                      <div className="relative w-full">
                        <div className="aspect-square max-w-sm mx-auto lg:max-w-none flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-4 sm:p-6 lg:p-8">
                          <img
                            src={flavorPods[currentIndex].image}
                            alt={flavorPods[currentIndex].name}
                            className="max-h-48 sm:max-h-56 lg:max-h-64 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Product Information */}
                      <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                            {flavorPods[currentIndex].name}
                          </h3>
                          <div className="w-12 h-1 bg-[#02ECCF] mb-3 sm:mb-4 mx-auto lg:mx-0"></div>
                          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                            {flavorPods[currentIndex].description}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                          <button
                            onClick={() => viewPodDetails(flavorPods[currentIndex])}
                            className="w-full sm:flex-1 px-3 sm:px-6 py-3 bg-[#02ECCF] text-black font-semibold rounded-lg hover:bg-[#02ECCF]/90 transition-colors duration-300 text-sm sm:text-base"
                          >
                            <span className="hidden sm:inline">View Details</span>
                            <span className="sm:hidden">Details</span>
                          </button>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex flex-row items-center justify-between mb-8 sm:mb-12 gap-2 sm:gap-4">
                  <button
                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                      currentIndex === 0
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-white hover:text-[#02ECCF] hover:bg-black/30'
                    }`}
                  >
                    <ChevronLeft size={20} />
                    <span className="hidden sm:inline">Previous</span>
                    <span className="sm:hidden">Prev</span>
                  </button>

                  <div className="text-center flex-1 max-w-xs">
                    <div className="text-sm text-gray-400 mb-2">
                      {currentIndex + 1} of {flavorPods.length}
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mx-auto">
                      <div 
                        className="h-full bg-[#02ECCF] transition-all duration-300 rounded-full"
                        style={{ width: `${((currentIndex + 1) / flavorPods.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentIndex(Math.min(flavorPods.length - 1, currentIndex + 1))}
                    disabled={currentIndex === flavorPods.length - 1}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                      currentIndex === flavorPods.length - 1
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-white hover:text-[#02ECCF] hover:bg-black/30'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Clean Product Grid */}
                <div className="mb-8 sm:mb-12">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">All Flavors</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {flavorPods.map((pod, index) => (
                      <button
                        key={pod.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`group p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-[#02ECCF]/10 border-2 border-[#02ECCF]/50'
                            : 'bg-black/20 border-2 border-gray-700/30 hover:border-[#02ECCF]/30 hover:bg-black/30'
                        }`}
                      >
                        <div className="aspect-square mb-2 sm:mb-3 flex items-center justify-center bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg p-2 sm:p-3">
                          <img
                            src={pod.image}
                            alt={pod.name}
                            className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h4 className={`text-xs sm:text-sm font-semibold text-center transition-colors duration-300 leading-tight ${
                          index === currentIndex ? 'text-[#02ECCF]' : 'text-white group-hover:text-[#02ECCF]'
                        }`}>
                          {pod.name}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>

                

              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForgeAlpha;
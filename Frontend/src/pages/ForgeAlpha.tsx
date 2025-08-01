import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ChevronLeft, ChevronRight, Plus, Check } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import alpha4luigiVideo from "../assets/alpha4luigi_optimized.mp4";

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
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const chipSectionRef = useRef(null);
  const chipImageRef = useRef(null);
  const [isEnhancedMode, setIsEnhancedMode] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const lastTimeRef = useRef(0);
  
  // Alpha.tsx states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPod, setSelectedPod] = useState(flavorPods[0]);
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedBattery, setSelectedBattery] = useState(batteries[0]);

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
    const video = videoRef.current;
    const chipSection = chipSectionRef.current;
    const chipImage = chipImageRef.current;
    
    // Check if device is mobile or tablet
    const isMobileOrTablet = () => {
      return window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    // Auto-complete video for mobile/tablet devices instantly
    if (isMobileOrTablet()) {
      setVideoCompleted(true);
      return; // Skip all video setup for mobile/tablet
    }
    
    if (video) {
      // Set video properties - ensure it doesn't autoplay
      video.currentTime = 0;
      video.pause();
      video.autoplay = false;
      
      // Create smooth scroll-based video animation with forced completion
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Extended pin duration to ensure video completes
        pin: true,
        pinSpacing: true,
        scrub: 0.9, // Smooth scrubbing for better interpolation
        onUpdate: (self) => {
          // Calculate video time based on scroll progress
          const progress = self.progress;
          const duration = video.duration || 10; // Fallback duration
          const targetTime = progress * duration;
          
          // Smooth interpolation to reduce choppiness
          const currentTime = video.currentTime;
          const smoothTime = currentTime + (targetTime - currentTime) * 0.1;
          
          // Only update if the change is significant enough to avoid micro-stutters
          if (Math.abs(smoothTime - lastTimeRef.current) > 0.01) {
            video.currentTime = smoothTime;
            lastTimeRef.current = smoothTime;
          }
          
          // Check if video is near completion (90%) and user is scrolling down
          if (progress >= 0.9 && video.paused && self.direction === 1) {
            video.play().catch(e => console.log('Video play failed:', e));
          }
          
          // Check if video is completed (progress >= 0.95 to account for small variations)
          if (progress >= 0.95 && !videoCompleted) {
            setVideoCompleted(true);
          }
        },
        onEnter: () => {
          // Do nothing - video stays paused
        },
        onLeave: () => {
          // Only allow leaving if video is completed
          if (!videoCompleted) {
            // Force scroll back to video section
            ScrollTrigger.getById(containerRef.current)?.scroll(0);
          }
        },
        onEnterBack: () => {
          // Do nothing - video stays paused
        },
        onLeaveBack: () => {
          // Do nothing - video stays paused
        }
      });
    }

    // Apple-style chip animation (only if not in enhanced mode and video is completed)
    if (chipSection && chipImage && !isEnhancedMode && videoCompleted) {
      ScrollTrigger.create({
        trigger: chipSection,
        start: "top 150vh", // Start when top of section is 150vh above viewport
        end: "bottom bottom", // End when bottom of section reaches bottom of viewport
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Smooth animation with opacity, scale, and upward movement
          gsap.set(chipImage, {
            opacity: progress,
            scale: 0.8 + (progress * 0.2), // Scale from 0.8 to 1.0
            y: 50 - (progress * 50), // Move up from 50px to 0px
            ease: "power2.out"
          });
        },
        onEnter: () => {
          // Initial state
          gsap.set(chipImage, {
            opacity: 0,
            scale: 0.8,
            y: 50
          });
        },
        onLeave: () => {
          // Final state
          gsap.set(chipImage, {
            opacity: 1,
            scale: 1,
            y: 0
          });
        },
        onEnterBack: () => {
          // Reverse animation when scrolling back up
          const progress = ScrollTrigger.getById(chipSection)?.progress || 0;
          gsap.set(chipImage, {
            opacity: progress,
            scale: 0.8 + (progress * 0.2),
            y: 50 - (progress * 50)
          });
        },
        onLeaveBack: () => {
          // Reset to initial state when scrolling back up
          gsap.set(chipImage, {
            opacity: 0,
            scale: 0.8,
            y: 50
          });
        }
      });
    }

    // GSAP animation for the text
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
  }, [isEnhancedMode, videoCompleted]);

  // Check if device is mobile or tablet for conditional rendering
  const isMobileOrTablet = () => {
    return window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header alwaysShowBg={true} />
      
      {/* Video Section - Only show on desktop */}
      {!isMobileOrTablet() && (
        <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video - Full screen */}
        <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
          muted
            autoPlay={false}
            preload="auto"
          >
            <source src={alpha4luigiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      )}
      
      {/* Battery Options Section - Show immediately on mobile/tablet, after video completion on desktop */}
      {(videoCompleted || isMobileOrTablet()) && (
        <section
          id="products"
          className="section min-h-screen flex items-center justify-center relative overflow-hidden py-20"
        >
          {/* Enhanced Background with more cyan elements */}
          <div className="absolute inset-0 bg-black -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(2,236,207,0.15),transparent_50%)] -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(2,236,207,0.1),transparent_50%)] -z-10"></div>
          
          {/* Animated cyan orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#02ECCF]/30 rounded-full blur-2xl animate-pulse-subtle"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-[#02ECCF]/25 rounded-full blur-xl animate-pulse-subtle" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#02ECCF]/20 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#02ECCF]/35 rounded-full blur-2xl animate-pulse-subtle" style={{ animationDelay: "3s" }}></div>
          
          {/* Floating light particles */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-[#02ECCF] rounded-full animate-float-light" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#02ECCF]/70 rounded-full animate-float-light" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#02ECCF]/80 rounded-full animate-float-light" style={{ animationDelay: "2.5s" }}></div>
          
          {/* Moving light streaks */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#02ECCF]/30 to-transparent animate-light-streak" style={{ animationDelay: "3s" }}></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#02ECCF]/20 to-transparent animate-light-streak" style={{ animationDelay: "5s" }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(2,236,207,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2,236,207,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header with enhanced styling */}
            <div className="text-center mb-20">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-r from-[#02ECCF]/10 to-transparent border border-[#02ECCF]/20 backdrop-blur-sm mb-8">
                <h2 className="text-5xl md:text-6xl font-montserrat-bold bg-gradient-to-r from-white via-[#02ECCF] to-white bg-clip-text text-transparent animate-fade-in">
                  Premium Battery Collection
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Experience unmatched power and style with our cutting-edge battery technology, 
                engineered for the ultimate vaping experience.
              </p>
            </div>

            {/* Enhanced product showcase */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Product Image Section */}
              <div className="lg:w-1/2 relative">
                {/* Holographic background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#02ECCF]/20 via-transparent to-[#02ECCF]/20 rounded-full blur-3xl animate-pulse-subtle"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02ECCF]/10 to-transparent rounded-full blur-2xl animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
                
                {/* Product container with floating effect */}
                <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#02ECCF]/5 to-transparent border border-[#02ECCF]/20 backdrop-blur-md">
                  <div className="animate-float">
                    <img
                      src={selectedBattery.image}
                      alt={selectedBattery.name}
                      className="max-h-[400px] lg:max-h-[500px] mx-auto drop-shadow-2xl transition-all duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Glow effect behind product */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#02ECCF]/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="lg:w-1/2 space-y-10">
                {/* Product name and description */}
                <div className="animate-fade-in">
                    <h3 className="text-4xl font-montserrat-bold text-white pb-5">
                      {selectedBattery.name}
                    </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Elevate your vaping experience with our premium battery engineered for 
                    exceptional performance, rapid charging, and unmatched durability in a sleek design.
                  </p>
                </div>

                {/* Features with enhanced styling */}
                <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h4 className="text-2xl font-montserrat-bold text-[#02ECCF] mb-6">Key Features</h4>
                  {[
                    { feature: "500mAh Battery Capacity", description: "Extended usage time" },
                    { feature: "Quick 30-Minute Charging", description: "Rapid power restoration" },
                    { feature: "Premium Aluminum+PC Body", description: "Durable construction" },
                    { feature: "LED Battery Indicator", description: "Smart power monitoring" },
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#02ECCF]/5 to-transparent border border-[#02ECCF]/10 hover:border-[#02ECCF]/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#02ECCF]/20 flex items-center justify-center">
                        <Check className="text-[#02ECCF] w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-white font-semibold block">{item.feature}</span>
                        <span className="text-gray-400 text-sm">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Color Selection with enhanced UI */}
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <h4 className="text-2xl font-montserrat-bold text-[#02ECCF] mb-6">Available Colors</h4>
                  <div className="flex gap-6">
                    {batteries.map((battery) => (
                      <button
                        key={battery.id}
                        className={`group relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                          selectedBattery.id === battery.id
                            ? "ring-4 ring-[#02ECCF] shadow-lg shadow-[#02ECCF]/40 scale-110"
                            : "hover:ring-2 hover:ring-[#02ECCF]/50 ring-2 ring-gray-600"
                        }`}
                        style={{ 
                          backgroundColor: battery.color,
                          boxShadow: selectedBattery.id === battery.id ? `0 0 30px ${battery.color}40` : 'none'
                        }}
                        onClick={() => setSelectedBattery(battery)}
                        aria-label={`Select ${battery.colorName} color`}
                      >
                        {selectedBattery.id === battery.id && (
                          <Check className="text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" size={24} />
                        )}
                        
                        {/* Color name tooltip */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-[#02ECCF] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {battery.colorName}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Flavor Pods Section - Show immediately on mobile/tablet, after video completion on desktop */}
      {(videoCompleted || isMobileOrTablet()) && (
        <section
          id="flavors"
          className="section min-h-screen flex items-center justify-center relative overflow-hidden py-32"
        >
          {/* Enhanced Background */}
          <div className="absolute inset-0 bg-black -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,236,207,0.1),transparent_70%)] -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,236,207,0.08),transparent_70%)] -z-10"></div>
          
          {/* Animated cyan elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#02ECCF]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#02ECCF]/50 to-transparent"></div>
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-20 h-20 bg-[#02ECCF]/20 rounded-full blur-xl animate-pulse-subtle"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-[#02ECCF]/25 rounded-full blur-lg animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-40 left-32 w-24 h-24 bg-[#02ECCF]/15 rounded-full blur-2xl animate-pulse-subtle" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-20 right-20 w-18 h-18 bg-[#02ECCF]/30 rounded-full blur-lg animate-pulse-subtle" style={{ animationDelay: "3s" }}></div>

          {/* Floating light particles for flavor section */}
          <div className="absolute top-16 left-1/3 w-1 h-1 bg-[#02ECCF] rounded-full animate-float-light" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#02ECCF]/60 rounded-full animate-float-light" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-16 left-1/2 w-1.5 h-1.5 bg-[#02ECCF]/80 rounded-full animate-float-light" style={{ animationDelay: "0.5s" }}></div>
          
          {/* Diagonal light beams */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#02ECCF]/20 via-transparent to-[#02ECCF]/20 transform rotate-12 animate-light-beam"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#02ECCF]/15 to-transparent transform -rotate-12 animate-light-beam" style={{ animationDelay: "2s" }}></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-r from-[#02ECCF]/10 to-transparent border border-[#02ECCF]/20 backdrop-blur-sm mb-8">
                <h2 className="text-4xl md:text-5xl font-montserrat-bold bg-gradient-to-r from-white via-[#02ECCF] to-white bg-clip-text text-transparent">
                  Flavor Pods Collection
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in a symphony of flavors crafted with precision and passion. 
                Each pod delivers an extraordinary taste journey designed to captivate your senses.
              </p>
            </div>

            {/* Detail View - Enhanced */}
            {isDetailView ? (
              <div className="animate-fade-in">
                <button
                  className="group relative mb-12 px-8 py-4 bg-gradient-to-r from-[#02ECCF]/20 to-transparent border border-[#02ECCF]/30 text-white hover:border-[#02ECCF] hover:text-[#02ECCF] backdrop-blur-sm rounded-2xl font-montserrat-bold transition-all duration-500 hover:bg-[#02ECCF]/10 text-lg"
                  onClick={closeDetails}
                >
                  <ChevronLeft className="mr-3 inline group-hover:scale-110 transition-transform duration-300" size={20} />
                  Back to Collection
                </button>

                <div className="flex flex-col lg:flex-row gap-20 items-center">
                  {/* Enhanced Image Section */}
                  <div className="w-full lg:w-1/2 relative flex justify-center">
                    {/* Multi-layered glow effect */}
                    <div
                      className="w-60 h-60 sm:w-80 sm:h-80 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-40 -z-10 animate-pulse-subtle"
                      style={{ backgroundColor: selectedPod.color }}
                    ></div>
                    <div
                      className="w-40 h-40 sm:w-60 sm:h-60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-60 -z-10 animate-pulse-subtle"
                      style={{ backgroundColor: selectedPod.color, animationDelay: "1s" }}
                    ></div>

                    {/* Product container */}
                    <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#02ECCF]/5 to-transparent border border-[#02ECCF]/20 backdrop-blur-md">
                      <div className="animate-float">
                        <img
                          src={selectedPod.image}
                          alt={selectedPod.name}
                          className="max-h-[350px] sm:max-h-[450px] mx-auto drop-shadow-2xl transition-all duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Details Section */}
                  <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                    {/* Product Name with glow effect */}
                    <div className="relative">
                      <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-wide mb-2">
                        {selectedPod.name}
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#02ECCF] to-transparent mx-auto lg:mx-0"></div>
                    </div>

                    {/* Enhanced Description */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-[#02ECCF]/5 to-transparent border border-[#02ECCF]/20 backdrop-blur-sm">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {selectedPod.description}
                      </p>
                    </div>

                    {/* Enhanced Product Specs */}
                    <div className="space-y-4">
                      <h4 className="text-2xl font-montserrat-bold text-[#02ECCF] mb-6">Product Specifications</h4>
                      {[
                        { label: "E-liquid Capacity", value: "10ml", icon: "💧" },
                        { label: "Nicotine Content", value: "120 mg (12mg/ml)", icon: "⚡" },
                        { label: "Coil", value: "1.2Ω mesh coil", icon: "🔧" },
                        { label: "PG/VG Ratio", value: "60/40", icon: "⚖️" },
                        { label: "Product Type", value: "Prefilled Pod", icon: "📦" },
                      ].map((spec, index) => (
                        <div
                          key={index}
                          className="group flex items-center gap-6 p-4 rounded-xl bg-gradient-to-r from-[#02ECCF]/5 to-transparent border border-[#02ECCF]/10 hover:border-[#02ECCF]/30 transition-all duration-300"
                        >
                          <span className="text-2xl">{spec.icon}</span>
                          <div className="flex-1">
                            <span className="text-gray-400 text-sm block">{spec.label}</span>
                            <span className="text-white font-semibold">{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Redesigned Carousel - Horizontal Scroll Cards */}
                <div className="relative">
                  {/* Main carousel container */}
                  <div className="relative overflow-hidden rounded-3xl border border-[#02ECCF]/20 backdrop-blur-sm bg-gradient-to-r from-[#02ECCF]/5 to-transparent p-8">
                    
                    {/* Carousel track */}
                    <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                      {flavorPods.map((pod, index) => (
                        <div
                          key={pod.id}
                          className={`group relative flex-shrink-0 w-80 h-96 cursor-pointer transition-all duration-700 hover:scale-105 ${
                            index >= currentIndex && index < currentIndex + getPodsPerPage() ? 'opacity-100' : 'opacity-50'
                          }`}
                          style={{ scrollSnapAlign: 'start' }}
                          onClick={() => viewPodDetails(pod)}
                        >
                          {/* Card background with holographic effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#02ECCF]/5 to-black/40 rounded-2xl border border-[#02ECCF]/20 backdrop-blur-md group-hover:border-[#02ECCF]/50 transition-all duration-500">
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{
                              backgroundImage: `radial-gradient(circle at 25% 25%, ${pod.color}20 0%, transparent 25%), radial-gradient(circle at 75% 75%, ${pod.color}15 0%, transparent 25%)`,
                              backgroundSize: '60px 60px'
                            }}></div>
                            
                            {/* Animated light border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-border-light" style={{
                              background: `linear-gradient(45deg, transparent, ${pod.color}40, transparent)`,
                              backgroundSize: '200% 200%'
                            }}></div>
                            
                            {/* Corner light effects */}
                            <div className="absolute top-2 left-2 w-3 h-3 bg-[#02ECCF]/40 rounded-full blur-sm animate-pulse-subtle" style={{ animationDelay: "0.5s" }}></div>
                            <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#02ECCF]/30 rounded-full blur-sm animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
                          </div>

                          {/* Card content */}
                          <div className="relative z-10 p-6 h-full flex flex-col">
                            {/* Product image area */}
                            <div className="relative flex-1 flex items-center justify-center mb-6">
                              {/* Glow effect behind product */}
                              <div
                                className="absolute w-32 h-32 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                style={{ backgroundColor: pod.color }}
                              ></div>
                              
                              <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                                <img
                                  src={pod.image}
                                  alt={pod.name}
                                  className="h-40 object-contain drop-shadow-xl"
                                />
                              </div>
                            </div>

                            {/* Product info */}
                            <div className="text-center space-y-3">
                              <h3 className="text-xl font-montserrat-bold text-white group-hover:text-[#02ECCF] transition-colors duration-300 relative">
                                {pod.name}
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                              </h3>
                              
                              <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                                {pod.description}
                              </p>
                              
                              {/* Specs badge */}
                              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#02ECCF]/10 border border-[#02ECCF]/20 group-hover:bg-[#02ECCF]/20 transition-all duration-300">
                                <span className="text-xs text-[#02ECCF] font-semibold">10ml</span>
                                <div className="w-1 h-1 bg-[#02ECCF]/50 rounded-full animate-pulse-subtle"></div>
                                <span className="text-xs text-[#02ECCF] font-semibold">12mg/ml</span>
                              </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02ECCF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Navigation */}
                    <div className="flex items-center justify-between mt-8">
                      {/* Navigation buttons */}
                      <div className="flex gap-4">
                        <button
                          onClick={showPrev}
                          disabled={currentIndex === 0}
                          className={`group relative p-4 bg-gradient-to-r from-[#02ECCF]/20 to-transparent border border-[#02ECCF]/30 text-white hover:border-[#02ECCF] hover:text-[#02ECCF] backdrop-blur-sm rounded-xl transition-all duration-500 overflow-hidden ${
                            currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#02ECCF]/10"
                          }`}
                        >
                          <ChevronLeft className="group-hover:scale-110 transition-transform duration-300 relative z-10" size={20} />
                          {/* Light sweep effect */}
                          {currentIndex > 0 && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#02ECCF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          )}
                        </button>
                        
                        <button
                          onClick={showNext}
                          disabled={currentIndex >= flavorPods.length - getPodsPerPage()}
                          className={`group relative p-4 bg-gradient-to-r from-[#02ECCF]/20 to-transparent border border-[#02ECCF]/30 text-white hover:border-[#02ECCF] hover:text-[#02ECCF] backdrop-blur-sm rounded-xl transition-all duration-500 overflow-hidden ${
                            currentIndex >= flavorPods.length - getPodsPerPage()
                              ? "opacity-30 cursor-not-allowed"
                              : "hover:bg-[#02ECCF]/10"
                          }`}
                        >
                          <ChevronRight className="group-hover:scale-110 transition-transform duration-300 relative z-10" size={20} />
                          {/* Light sweep effect */}
                          {currentIndex < flavorPods.length - getPodsPerPage() && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#02ECCF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          )}
                        </button>
                      </div>

                      {/* Pagination dots */}
                      <div className="flex gap-2">
                        {Array.from({ length: Math.ceil(flavorPods.length / getPodsPerPage()) }).map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index * getPodsPerPage())}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              Math.floor(currentIndex / getPodsPerPage()) === index
                                ? "bg-[#02ECCF] shadow-lg shadow-[#02ECCF]/50"
                                : "bg-[#02ECCF]/30 hover:bg-[#02ECCF]/50"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Collection counter */}
                      <div className="text-sm text-gray-400">
                        <span className="text-[#02ECCF] font-semibold">{flavorPods.length}</span> Flavors Available
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}
      
      {/* Footer */}
        <Footer />
    </div>
  );
};

export default ForgeAlpha;

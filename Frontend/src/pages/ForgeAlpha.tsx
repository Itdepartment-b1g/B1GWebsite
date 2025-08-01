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
    const maxIndex = Math.max(0, flavorPods.length - getPodsPerPage());
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
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
          className="section min-h-screen flex items-center justify-center relative overflow-hidden py-1"
        >
          <div className="absolute inset-0 bg-[#292929] -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,236,207,0.1),transparent_70%)] -z-10"></div>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#02ECCF]/40 rounded-full blur-3xl z-0 animate-pulse-subtle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#02ECCF]/35 rounded-full blur-3xl z-0 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>

          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4 text-xforge-gray animate-fade-in text-4xl font-montserrat-bold">
                Premium Battery Options
              </h2>
              <p
                className="subheading mx-auto text-xforge-gray/80 animate-fade-in text-lg font-montserrat-regular"
                style={{ animationDelay: "0.2s" }}
              >
                All our batteries feature the same powerful specs with different
                color options to match your style.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 relative">
                <div className="w-72 h-72 rounded-full bg-xforge-teal/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
                <div className="relative animate-float">
                  <img
                    src={selectedBattery.image}
                    alt={selectedBattery.name}
                    className="max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] mx-auto drop-shadow-2xl transition-all duration-500"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <div className="animate-fade-in">
                  <h3 className="heading-md mb-2 text-xforge-gray text-3xl font-montserrat-bold">
                    {selectedBattery.name}
                  </h3>
                  <p className="text-xforge-gray/70 mb-6 text-base font-montserrat-regular">
                    Elevate your vaping experience with our premium battery
                    designed for optimal performance and longevity.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "500mAh Battery Capacity",
                      "Quick 30-Minute Charging",
                      "Premium Aluminum+PC Body",
                      "LED Battery Indicator",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="text-xforge-teal" />
                        <span className="text-xforge-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <p className="font-montserrat-bold mb-3 text-xforge-gray">
                    Available Colors:
                  </p>
                  <div className="flex gap-4 mb-8">
                    {batteries.map((battery) => (
                      <button
                        key={battery.id}
                        className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                          selectedBattery.id === battery.id
                            ? "ring-2 ring-offset-2 ring-xforge-teal shadow-lg shadow-xforge-teal/20"
                            : "hover:ring-2 hover:ring-offset-2 hover:ring-xforge-teal/50"
                        }`}
                        style={{ backgroundColor: battery.color }}
                        onClick={() => setSelectedBattery(battery)}
                        aria-label={`Select ${battery.colorName} color`}
                      >
                        {selectedBattery.id === battery.id && (
                          <Check className="text-white group-hover:scale-110 transition-transform duration-300" size={18} />
                        )}
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
          className="section min-h-screen flex items-center justify-center relative overflow-hidden py-24"
        >
          <div className="absolute inset-0 bg-[#292929] -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,236,207,0.1),transparent_70%)] -z-10"></div>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#02ECCF]/40 rounded-full blur-3xl z-0 animate-pulse-subtle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#02ECCF]/35 rounded-full blur-3xl z-0 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-montserrat-bold mb-4 text-xforge-gray animate-fade-in">
                Flavor Pods Collection
              </h2>
              <p
                className="text-sm sm:text-base font-montserrat-regular text-xforge-gray/70 max-w-xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Explore our wide range of premium flavor pods designed to satisfy
                every taste preference.
              </p>
            </div>

            {/* Detail View */}
            {isDetailView ? (
              <div className="animate-fade-in">
                <button
                  className="group relative mb-6 sm:mb-10 px-6 py-3 bg-transparent border border-xforge-gray/30 text-xforge-gray hover:border-xforge-teal hover:text-xforge-teal backdrop-blur-sm rounded-xl font-montserrat-bold transition-all duration-500 hover:bg-xforge-teal/5 text-lg"
                  onClick={closeDetails}
                >
                  <ChevronLeft className="mr-3 inline group-hover:scale-110 transition-transform duration-300" size={18} />
                  Back to all flavors
                </button>

                <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-center">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 relative flex justify-center">
                    {/* Glowing Background */}
                    <div
                      className="w-40 h-40 sm:w-56 sm:h-56 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 -z-10"
                      style={{ backgroundColor: `${selectedPod.color}80` }}
                    ></div>

                    {/* Floating Product Image */}
                    <div className="animate-float">
                      <img
                        src={selectedPod.image}
                        alt={selectedPod.name}
                        className="max-h-[280px] sm:max-h-[420px] mx-auto drop-shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="w-full md:w-1/2 space-y-5 sm:space-y-8 text-center md:text-left">
                    {/* Product Name */}
                    <h3 className="text-2xl sm:text-4xl font-bold text-xforge-gray tracking-wide">
                      {selectedPod.name}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-xforge-gray/80 leading-relaxed">
                      {selectedPod.description}
                    </p>

                    {/* Product Specs */}
                    <div className="space-y-2 sm:space-y-4">
                      {[
                        "E-liquid Capacity: 10ml",
                        "Nicotine Content: 120 mg (12mg/ml)",
                        "Coil: 1.2Ω mesh coil",
                        "PG/VG Ratio: 60/40",
                        "Product Type: Prefilled Pod",
                      ].map((detail, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-[16px_auto] gap-2 items-center text-xforge-gray/80 text-sm sm:text-base font-light pl-4"
                        >
                          <span className="text-xforge-teal">●</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 overflow-hidden">
                    {flavorPods
                      .slice(currentIndex, currentIndex + getPodsPerPage())
                      .map((pod) => (
                        <div
                          key={pod.id}
                          className="group relative bg-xforge-dark/20 backdrop-blur-md border border-xforge-teal/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-xforge-teal/30 hover:bg-xforge-dark/30 hover:-translate-y-2 animate-fade-in cursor-pointer overflow-hidden"
                          onClick={() => viewPodDetails(pod)}
                        >
                          {/* Animated background glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-xforge-teal/5 via-transparent to-xforge-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          <div className="relative w-full h-32 sm:h-40 mb-4 sm:mb-6">
                            <div
                              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                              style={{ backgroundColor: `${pod.color}` }}
                            ></div>
                            <img
                              src={pod.image}
                              alt={pod.name}
                              className="h-full object-contain mx-auto relative z-10 group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          
                          <div className="relative z-10">
                            <h3 className="font-montserrat-bold text-lg sm:text-xl mb-2 text-xforge-gray group-hover:text-xforge-teal transition-colors duration-300">
                              {pod.name}
                            </h3>
                            <p className="text-sm font-montserrat-regular text-xforge-gray/70 mb-4 line-clamp-2 leading-relaxed">
                              {pod.description}
                            </p>
                            
                            <div className="flex items-center justify-center space-x-2 text-xs text-xforge-teal/70 font-montserrat-bold">
                              <span>10ml</span>
                              <span>•</span>
                              <span>12mg/ml</span>
        </div>
      </div>
      
                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 border-2 border-xforge-teal/0 group-hover:border-xforge-teal/20 rounded-2xl transition-all duration-500"></div>
                        </div>
                      ))}
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex justify-center mt-4 sm:mt-8 gap-4">
                    <button
                      onClick={showPrev}
                      disabled={currentIndex === 0}
                      className={`group relative px-6 py-3 bg-transparent border border-xforge-gray/30 text-xforge-gray hover:border-xforge-teal hover:text-xforge-teal backdrop-blur-sm rounded-xl font-montserrat-bold transition-all duration-500 ${
                        currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-xforge-teal/5"
                      }`}
                    >
                      <ChevronLeft className="group-hover:scale-110 transition-transform duration-300" />
                    </button>
                    <button
                      onClick={showNext}
                      disabled={currentIndex >= flavorPods.length - getPodsPerPage()}
                      className={`group relative px-6 py-3 bg-transparent border border-xforge-gray/30 text-xforge-gray hover:border-xforge-teal hover:text-xforge-teal backdrop-blur-sm rounded-xl font-montserrat-bold transition-all duration-500 ${
                        currentIndex >= flavorPods.length - getPodsPerPage()
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-xforge-teal/5"
                      }`}
                    >
                      <ChevronRight className="group-hover:scale-110 transition-transform duration-300" />
                    </button>
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

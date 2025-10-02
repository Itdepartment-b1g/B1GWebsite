import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight, Battery, Zap, Droplets, Cpu, Star, Award, Shield, Sparkles } from 'lucide-react';
import productHeroBanner from "../assets/Alpha/Product Hero Banner 1.png";
import productBanner from "../assets/Alpha/Product banners 21 (1200x600).png";
import alphaWebsiteBanner from "../assets/Alpha/Alpha Website Banners.mp4";

// Import X-Forge Alpha variant images
import xForgeAlphaBlack from "../assets/Alpha/X-Forge  Alpha-Black.png";
import xForgeAlphaBlue from "../assets/Alpha/X-Forge  Alpha-Blue.png";
import xForgeAlphaFrost from "../assets/Alpha/X-Forge  Alpha-Frost.png";
import xForgeAlphaHeart from "../assets/Alpha/X-Forge  Alpha-Heart.png";
import xForgeAlphaLush from "../assets/Alpha/X-Forge  Alpha-Lush.png";
import xForgeAlphaPurple from "../assets/Alpha/X-Forge  Alpha-Purple.png";
import xForgeAlphaRed from "../assets/Alpha/X-Forge  Alpha-Red.png";
import xForgeAlphaRizz from "../assets/Alpha/X-Forge  Alpha-Rizz.png";
import xForgeAlphaShirota from "../assets/Alpha/X-Forge  Alpha-Shirota.png";
import xForgeAlphaSparkle from "../assets/Alpha/X-Forge  Alpha-Sparkle.png";

const ForgeAlpha = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasVideoPlayed, setHasVideoPlayed] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const flavorVariants = [
    { 
      name: "Forge Alpha Black", 
      image: xForgeAlphaBlack, 
      subtitle: "B1G Black",
      description: "Sophisticated depth meets contemporary elegance. A masterpiece of refined taste for the discerning connoisseur.",
      craftmanship: "Premium obsidian finish with precision engineering"
    },
    { 
      name: "Forge Alpha Blue", 
      image: xForgeAlphaBlue, 
      subtitle: "B1G Blue",
      description: "Tranquil sophistication captured in every detail. Where serenity meets cutting-edge innovation.",
      craftmanship: "Azure ceramic coating with advanced mesh technology"
    },
    { 
      name: "Forge Alpha Frost", 
      image: xForgeAlphaFrost, 
      subtitle: "B1G Frost",
      description: "Crystal clarity redefined. Experience the pinnacle of refreshing luxury with unparalleled precision.",
      craftmanship: "Glacial polymer construction with temperature-optimized airflow"
    },
    { 
      name: "Forge Alpha Heart", 
      image: xForgeAlphaHeart, 
      subtitle: "B1G Heart",
      description: "Bold elegance that commands attention. Crafted for those who demand excellence without compromise.",
      craftmanship: "Ruby-infused finish with enhanced vapor dynamics"
    },
    { 
      name: "Forge Alpha Lush", 
      image: xForgeAlphaLush, 
      subtitle: "B1G Lush", 
      description: "Nature's luxury reimagined through modern innovation. Sustainable sophistication at its finest.",
      craftmanship: "Eco-premium materials with botanical essence integration"
    },
    { 
      name: "Forge Alpha Purple", 
      image: xForgeAlphaPurple, 
      subtitle: "B1G Purple",
      description: "Regal distinction meets contemporary design. Luxury that transcends ordinary expectations.",
      craftmanship: "Amethyst-grade finish with precision vapor chamber"
    },
    { 
      name: "Forge Alpha Red", 
      image: xForgeAlphaRed, 
      subtitle: "B1G Red",
      description: "Dynamic excellence in its purest form. Where passion meets uncompromising quality.",
      craftmanship: "Cardinal red anodization with enhanced thermal efficiency"
    },
    { 
      name: "Forge Alpha Rizz", 
      image: xForgeAlphaRizz, 
      subtitle: "B1G Rizz",
      description: "Luminous sophistication that illuminates every moment. Precision crafted for the modern lifestyle.",
      craftmanship: "24K gold accent finishing with optimized airflow geometry"
    },
    { 
      name: "Forge Alpha Shirota", 
      image: xForgeAlphaShirota, 
      subtitle: "B1G Shirota",
      description: "Mysterious elegance with infinite depth. Innovation disguised as art, function elevated to luxury.",
      craftmanship: "Midnight sapphire coating with advanced filtration system"
    },
    { 
      name: "Forge Alpha Sparkle", 
      image: xForgeAlphaSparkle, 
      subtitle: "B1G Sparkle",
      description: "Effervescent luxury that captures light and imagination. Where brilliance meets contemporary innovation.",
      craftmanship: "Crystal-infused finish with micro-diamond vapor enhancement"
    }
  ];

  const specifications = [
    { 
      icon: Droplets, 
      label: "Premium Capacity", 
      value: "20ML", 
      description: "Extended luxury experience",
      detail: "Engineered for sustained excellence"
    },
    { 
      icon: Battery, 
      label: "Advanced Power", 
      value: "850mAh", 
      description: "All-day sophistication",
      detail: "Intelligent energy management system"
    },
    { 
      icon: Zap, 
      label: "Extended Performance", 
      value: "8000+", 
      description: "Uncompromising consistency",
      detail: "Premium mesh coil technology"
    },
    { 
      icon: Cpu, 
      label: "Innovation Core", 
      value: "Advanced", 
      description: "Cutting-edge engineering",
      detail: "Precision-crafted delivery system"
    }
  ];

  const brandPillars = [
    {
      icon: Star,
      title: "MODERN",
      subtitle: "Contemporary Excellence",
      description: "Simplicity and efficiency redefined. Contemporary style that makes everyday life engaging and impactful."
    },
    {
      icon: Award,
      title: "PRESTIGE",
      subtitle: "Luxury Craftsmanship",
      description: "Uncompromising commitment to elegance and distinction. Experiences that elevate and define true luxury."
    },
    {
      icon: Shield,
      title: "VERSATILE",
      subtitle: "Seamless Innovation",
      description: "Functionality meets style. Designed to fit seamlessly with flexibility and innovation for any occasion."
    }
  ];

  // Enhanced useEffect for video and page initialization
  useEffect(() => {
    setIsVisible(true);
    
    // Reset video state on every page load so it plays every time
    setHasVideoPlayed(false);
    console.log('Page loaded - video will autoplay');
    
    // Try to play video after component mounts
    const timer = setTimeout(() => {
      if (videoRef) {
        console.log('Attempting to play video on page load...');
        videoRef.currentTime = 0; // Start from beginning
        videoRef.play().catch((error) => {
          console.log('Video autoplay failed:', error);
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [videoRef]);

  // Video event handlers
  const handleVideoRef = (video: HTMLVideoElement | null) => {
    if (video) {
      setVideoRef(video);
      
      // Add event listeners
      const handleVideoEnded = () => {
        console.log('Video ended - staying on last frame');
        setHasVideoPlayed(true);
      };

      const handleVideoLoadedData = () => {
        console.log('Video data loaded - ready to play');
        // Always start from beginning and try to autoplay
        video.currentTime = 0;
        video.play().then(() => {
          console.log('Video autoplay successful');
        }).catch((error) => {
          console.log('Video autoplay failed:', error);
          // If autoplay fails, show the last frame
          if (video.duration) {
            video.currentTime = video.duration;
          }
        });
      };

      const handleVideoLoadedMetadata = () => {
        console.log('Video metadata loaded');
        // Reset to beginning when metadata loads
        video.currentTime = 0;
      };

      video.addEventListener('ended', handleVideoEnded);
      video.addEventListener('loadeddata', handleVideoLoadedData);
      video.addEventListener('loadedmetadata', handleVideoLoadedMetadata);
      
      // Cleanup function
      return () => {
        video.removeEventListener('ended', handleVideoEnded);
        video.removeEventListener('loadeddata', handleVideoLoadedData);
        video.removeEventListener('loadedmetadata', handleVideoLoadedMetadata);
      };
    }
  };

  // Handle slide change with smooth transition and animations
  const handleSlideChange = (index: number) => {
    if (index !== currentSlide && index >= 0 && index < flavorVariants.length) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 200);
    }
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % flavorVariants.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? flavorVariants.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const currentProduct = flavorVariants[currentSlide];

  return (
    <div className="min-h-screen bg-[#494848] text-white transition-all duration-700" style={{ opacity: isVisible ? 1 : 0 }}>
      <Header alwaysShowBg={true} />
      
      {/* Hero Banner Section - Mobile Responsive 16:9 aspect ratio */}
      <section className="pt-28 sm:pt-26 md:pt-24 lg:pt-20 relative overflow-hidden">
        <div className="relative w-full aspect-video min-h-[250px] sm:min-h-[300px] md:min-h-0">
          <video 
            ref={handleVideoRef}
            src={alphaWebsiteBanner}
            className="w-full h-full object-cover object-center"
            muted
            playsInline
            preload="auto"
            poster={productHeroBanner}
            autoPlay
            onError={(e) => console.log('Video error:', e)}
            onLoadStart={() => console.log('Video load start')}
            onCanPlay={() => console.log('Video can play')}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#494848]/20 to-[#494848]/60"></div>
          

          
        </div>
      </section>

      {/* Brand Pillars Section - Mobile Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#494848]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 sm:mb-6">
              Crafted for <span className="text-[#42e3cc]">Excellence</span>
            </h2>
            <div className="w-20 sm:w-28 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-[#42e3cc] to-transparent mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Three pillars of innovation that define our commitment to extraordinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {brandPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="text-center group px-4 sm:px-0">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-[#42e3cc]/20 to-[#42e3cc]/5 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:from-[#42e3cc]/30 group-hover:to-[#42e3cc]/10 transition-all duration-500 border border-[#42e3cc]/20">
                      <IconComponent size={24} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#42e3cc]" />
              </div>
                    <div className="absolute -inset-4 bg-[#42e3cc]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

                  <h3 className="text-xl sm:text-xl md:text-2xl font-light text-[#42e3cc] mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-white/60 uppercase tracking-widest mb-3 sm:mb-4">{pillar.subtitle}</p>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">{pillar.description}</p>
              </div>
              );
            })}
              </div>
            </div>
      </section>

      {/* Product Banner Section - Mobile Responsive 2:1 aspect ratio */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#494848]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full aspect-[2/1] rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 md:mb-16 overflow-hidden group">
            <img 
              src={productBanner}
              alt="Forge Alpha Product Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#494848]/40 via-transparent to-[#494848]/40"></div>
            

            
          </div>
        </div>
      </section>
      
      {/* Premium Product Showcase - Mobile Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#494848]/95 to-[#494848]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 sm:mb-6">
              Signature <span className="text-[#42e3cc]">Collection</span> 
            </h3>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-[#42e3cc] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Each variant meticulously crafted to embody sophistication, precision, and contemporary luxury
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            
             {/* Premium Product Display */}
             <div className="order-2 lg:order-1">
               <div className="relative">
                 {/* Dynamic background effect that changes with product */}
                 <div 
                   className={`absolute inset-0 bg-gradient-to-br from-[#42e3cc]/10 via-transparent to-[#42e3cc]/5 rounded-3xl blur-2xl transition-all duration-1000 ${
                     isTransitioning ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
                   }`}
                   style={{
                     transform: `rotate(${currentSlide * 36}deg)`,
                   }}
                 ></div>
                 
                 <div className={`relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 transition-all duration-500 ${
                   isTransitioning ? 'scale-[0.98] opacity-70' : 'scale-100 opacity-100'
                 }`}>
                    {/* Premium Product Container - 2:3 portrait - MAXIMIZED */}
                    <div className="relative mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                      <div className={`aspect-[2/3] bg-gradient-to-br from-white/8 to-white/3 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5 transition-all duration-700 ${
                        isTransitioning ? 'transform translate-y-4 opacity-60' : 'transform translate-y-0 opacity-100'
                      }`}>
                       {/* Animated luxury accent */}
                       <div 
                         className={`absolute top-4 right-4 w-2 h-2 bg-[#42e3cc] rounded-full transition-all duration-500 ${
                           isTransitioning ? 'opacity-30 scale-75' : 'opacity-60 scale-100 animate-pulse'
                         }`}
                       ></div>
                       
                       {/* Product image with smooth transitions */}
                       <div className={`w-full h-full flex items-center justify-center transition-all duration-700 ${
                         isTransitioning ? 'transform scale-90 opacity-0 rotate-6' : 'transform scale-100 opacity-100 rotate-0'
                       }`}>
                  <img 
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-contain transition-all duration-700 hover:scale-110 p-1 sm:p-1 md:p-2"
                  />
                </div>
                       
                       {/* Animated premium badge */}
                       <div className={`absolute bottom-4 left-4 flex items-center space-x-1 text-[#42e3cc]/60 text-xs transition-all duration-500 ${
                         isTransitioning ? 'transform translate-y-2 opacity-40' : 'transform translate-y-0 opacity-100'
                       }`}>
                         <Sparkles size={12} className={isTransitioning ? 'animate-none' : 'animate-pulse'} />
                         <span>Premium</span>
              </div>

                       {/* Floating particles effect */}
                       {!isTransitioning && (
                         <>
                           <div className="absolute top-8 left-8 w-1 h-1 bg-[#42e3cc]/40 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
                           <div className="absolute top-12 right-12 w-0.5 h-0.5 bg-[#42e3cc]/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                           <div className="absolute bottom-16 left-12 w-0.5 h-0.5 bg-[#42e3cc]/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                         </>
                       )}
                     </div>
                   </div>
                   
                   {/* Animated decorative elements */}
                   <div className={`absolute -top-6 -right-6 w-24 h-24 bg-[#42e3cc]/5 rounded-full blur-xl transition-all duration-1000 ${
                     isTransitioning ? 'scale-75 opacity-30' : 'scale-100 opacity-100'
                   }`} style={{
                     transform: `rotate(${currentSlide * -45}deg) scale(${isTransitioning ? 0.75 : 1})`,
                   }}></div>
                   <div className={`absolute -bottom-8 -left-8 w-20 h-20 bg-[#42e3cc]/8 rounded-full blur-lg transition-all duration-1000 ${
                     isTransitioning ? 'scale-90 opacity-40' : 'scale-100 opacity-100'
                   }`} style={{
                     transform: `rotate(${currentSlide * 30}deg) scale(${isTransitioning ? 0.9 : 1})`,
                   }}></div>
              </div>
            </div>
          </div>

            {/* Premium Product Details - Mobile Responsive */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 md:space-y-10">
              <div className="space-y-6 sm:space-y-8">
                <div className={`space-y-3 sm:space-y-4 transition-all duration-700 ${
                  isTransitioning ? 'transform translate-x-4 opacity-40' : 'transform translate-x-0 opacity-100'
                }`}>
                  <h4 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-white tracking-tight transition-all duration-700 ${
                    isTransitioning ? 'transform translate-y-2' : 'transform translate-y-0'
                  }`}>
              {currentProduct.name}
                  </h4>
                  <div className={`flex items-center space-x-4 transition-all duration-700 delay-100 ${
                    isTransitioning ? 'transform translate-y-2 opacity-60' : 'transform translate-y-0 opacity-100'
                  }`}>
                    <p className="text-sm font-medium text-[#42e3cc] uppercase tracking-[0.2em]">
                      {currentProduct.subtitle}
                    </p>
                    <div className={`h-0.5 bg-[#42e3cc]/40 transition-all duration-500 ${
                      isTransitioning ? 'w-4' : 'w-8'
                    }`}></div>
                    <div className="flex items-center space-x-1 text-[#42e3cc]/60">
                      <Star size={14} fill="currentColor" className={isTransitioning ? 'animate-none' : 'animate-pulse'} />
                      <span className="text-xs">Premium</span>
                    </div>
                  </div>
          </div>

                <div className={`space-y-6 transition-all duration-700 delay-200 ${
                  isTransitioning ? 'transform translate-x-6 opacity-30' : 'transform translate-x-0 opacity-100'
                }`}>
                  <p className="text-xl text-white/90 leading-relaxed font-light">
                    {currentProduct.description}
                  </p>
                  
                  <div className={`bg-gradient-to-r from-[#42e3cc]/10 to-transparent rounded-2xl p-6 border-l-2 border-[#42e3cc] transition-all duration-700 ${
                    isTransitioning ? 'transform translate-x-2 scale-95 opacity-50' : 'transform translate-x-0 scale-100 opacity-100'
                  }`}>
                    <p className="text-[#42e3cc]/90 font-light italic text-lg">
                      {currentProduct.craftmanship}
                    </p>
                  </div>
                </div>
            </div>
            
              {/* Sophisticated Navigation - Mobile Responsive */}
              <div className={`space-y-6 sm:space-y-8 transition-all duration-700 delay-300 ${
                isTransitioning ? 'transform translate-y-2 opacity-50' : 'transform translate-y-0 opacity-100'
              }`}>
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-[#42e3cc]/20 flex items-center justify-center hover:border-[#42e3cc] hover:bg-[#42e3cc]/5 transition-all duration-300 group ${
                      isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                    }`}
                  >
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-white/70 group-hover:text-[#42e3cc] transition-transform group-active:scale-90" />
                  </button>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto max-w-xs sm:max-w-sm">
                    {flavorVariants.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        disabled={isTransitioning}
                        className={`rounded-full transition-all duration-500 flex-shrink-0 ${
                          index === currentSlide 
                            ? `w-12 sm:w-14 md:w-16 h-2 bg-[#42e3cc] ${isTransitioning ? 'animate-pulse' : ''}` 
                            : 'w-2 h-2 bg-white/20 hover:bg-white/40 hover:scale-125'
                        } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
                        style={{
                          transitionDelay: `${index * 50}ms`
                        }}
                      />
                    ))}
            </div>
            
              <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-[#42e3cc]/20 flex items-center justify-center hover:border-[#42e3cc] hover:bg-[#42e3cc]/5 transition-all duration-300 group ${
                      isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                    }`}
                  >
                    <ChevronRight size={20} className="sm:w-6 sm:h-6 text-white/70 group-hover:text-[#42e3cc] transition-transform group-active:scale-90" />
              </button>
                </div>

                <div className="text-center">
                  <div className={`text-[#42e3cc] font-light text-lg transition-all duration-500 ${
                    isTransitioning ? 'transform scale-110 opacity-70' : 'transform scale-100 opacity-100'
                  }`}>
                    {String(currentSlide + 1).padStart(2, '0')}
                  </div>
                  <div className={`text-white/40 text-sm transition-all duration-500 delay-100 ${
                    isTransitioning ? 'transform translate-y-1 opacity-30' : 'transform translate-y-0 opacity-100'
                  }`}>
                    of {String(flavorVariants.length).padStart(2, '0')} Premium Variants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      

      <Footer />
    </div>
  );
};

export default ForgeAlpha;
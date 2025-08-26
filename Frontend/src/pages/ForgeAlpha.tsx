import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const ForgeAlpha = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());

  const flavorVariants = [
    { 
      name: "B1G Black", 
      image: "/src/assets/Forge/B1GBlack.png", 
      subtitle: "AGATE GREY",
      specs: {
        capacity: "20ML",
        power: "850mAh",
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Blue", 
      image: "/src/assets/Forge/B1GBlue.png", 
      subtitle: "OCEAN BLUE",
      specs: {
        capacity: "20ML",
        power: "850mAh", 
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Frost", 
      image: "/src/assets/Forge/B1GFrost.png", 
      subtitle: "ICE FROST",
      specs: {
        capacity: "20ML",
        power: "850mAh",
        puffs: "8000 Puffs", 
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Heart", 
      image: "/src/assets/Forge/B1GHeart.png", 
      subtitle: "PASSION RED",
      specs: {
        capacity: "20ML",
        power: "850mAh",
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Lush", 
      image: "/src/assets/Forge/B1GLush.png", 
      subtitle: "EMERALD GREEN", 
      specs: {
        capacity: "20ML",
        power: "850mAh",
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Purple", 
      image: "/src/assets/Forge/B1GPurple.png", 
      subtitle: "ROYAL PURPLE",
      specs: {
        capacity: "20ML", 
        power: "850mAh",
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Red", 
      image: "/src/assets/Forge/B1GRed.png", 
      subtitle: "CRIMSON RED",
      specs: {
        capacity: "20ML",
        power: "850mAh", 
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Rizz", 
      image: "/src/assets/Forge/B1GRizz.png", 
      subtitle: "GOLDEN YELLOW",
      specs: {
        capacity: "20ML",
        power: "850mAh",
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Shirota", 
      image: "/src/assets/Forge/B1GShirota.png", 
      subtitle: "DEEP INDIGO",
      specs: {
        capacity: "20ML",
        power: "850mAh", 
        puffs: "8000 Puffs",
        technology: "Mesh Coil"
      }
    },
    { 
      name: "B1G Sparkle", 
      image: "/src/assets/Forge/B1GSparkle.png", 
      subtitle: "DIAMOND SPARKLE",
      specs: {
        capacity: "20ML",
        power: "850mAh",
        puffs: "8000 Puffs", 
        technology: "Mesh Coil"
      }
    }
  ];

  // Auto-advance slides every 5 seconds with swoosh animation, but pause during user interaction
  useEffect(() => {
    const timer = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteractionTime;
      // Only auto-advance if user hasn't interacted for 5 seconds
      if (!isUserInteracting && timeSinceLastInteraction >= 5000) {
        setSlideDirection('right');
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % flavorVariants.length);
          setIsTransitioning(false);
        }, 400); // Swoosh duration
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isUserInteracting, lastInteractionTime]);

  // Reset user interaction after 5 seconds of inactivity
  useEffect(() => {
    const inactivityTimer = setTimeout(() => {
      setIsUserInteracting(false);
    }, 5000);

    return () => clearTimeout(inactivityTimer);
  }, [lastInteractionTime]);

  // Handle manual slide change with swoosh animation
  const handleSlideChange = (index) => {
    if (index !== currentSlide) {
      // Mark user interaction
      setIsUserInteracting(true);
      setLastInteractionTime(Date.now());
      
      setSlideDirection(index > currentSlide ? 'right' : 'left');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 400);
    }
  };

  // Handle touch/drag functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    // Mark user interaction
    setIsUserInteracting(true);
    setLastInteractionTime(Date.now());
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - go to next product
      const nextIndex = (currentSlide + 1) % flavorVariants.length;
      handleSlideChange(nextIndex);
    }
    if (isRightSwipe) {
      // Swipe right - go to previous product
      const prevIndex = currentSlide === 0 ? flavorVariants.length - 1 : currentSlide - 1;
      handleSlideChange(prevIndex);
    }
  };

  // Handle mouse drag functionality
  const onMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    // Mark user interaction
    setIsUserInteracting(true);
    setLastInteractionTime(Date.now());
  };

  const onMouseMove = (e) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag) {
      // Drag left - go to next product
      const nextIndex = (currentSlide + 1) % flavorVariants.length;
      handleSlideChange(nextIndex);
    }
    if (isRightDrag) {
      // Drag right - go to previous product
      const prevIndex = currentSlide === 0 ? flavorVariants.length - 1 : currentSlide - 1;
      handleSlideChange(prevIndex);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentProduct = flavorVariants[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 font-['Inter',sans-serif] overflow-hidden">
      
      {/* Custom CSS for Swoosh Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes swooshLeft {
            0% { transform: translateX(100%) scale(0.8) rotate(5deg); opacity: 0; }
            50% { transform: translateX(0%) scale(1.1) rotate(-2deg); opacity: 0.8; }
            100% { transform: translateX(0%) scale(1) rotate(0deg); opacity: 1; }
          }
          
          @keyframes swooshRight {
            0% { transform: translateX(-100%) scale(0.8) rotate(-5deg); opacity: 0; }
            50% { transform: translateX(0%) scale(1.1) rotate(2deg); opacity: 0.8; }
            100% { transform: translateX(0%) scale(1) rotate(0deg); opacity: 1; }
          }
          
          @keyframes swooshOut {
            0% { transform: translateX(0%) scale(1) rotate(0deg); opacity: 1; }
            100% { 
              transform: translateX(${slideDirection === 'right' ? '-100%' : '100%'}) scale(0.8) rotate(${slideDirection === 'right' ? '-5deg' : '5deg'}); 
              opacity: 0; 
            }
          }
          
          @keyframes textSwoosh {
            0% { transform: translateX(100%) skewX(-10deg); opacity: 0; }
            60% { transform: translateX(-10px) skewX(-5deg); opacity: 0.8; }
            100% { transform: translateX(0%) skewX(0deg); opacity: 1; }
          }
          
          @keyframes specSwoosh {
            0% { transform: translateY(30px) translateX(50px) rotate(3deg); opacity: 0; }
            70% { transform: translateY(-5px) translateX(-5px) rotate(-1deg); opacity: 0.8; }
            100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 1; }
          }
          
          .swoosh-enter-right { animation: swooshLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
          .swoosh-enter-left { animation: swooshRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
          .swoosh-exit { animation: swooshOut 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards; }
          .text-swoosh { animation: textSwoosh 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
          .spec-swoosh { animation: specSwoosh 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        `
      }} />

      <Header alwaysShowBg={true} />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center pt-20 pb-8 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-bold tracking-[0.3em] text-gray-300 uppercase">
                  B1G CORPORATION
                </div>
                <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight leading-none">
                  FORGE
                </h1>
                <h2 className="text-6xl md:text-7xl font-light text-cyan-400 tracking-tight leading-none">
                  ALPHA
                </h2>
                <p className="text-xl text-gray-300 font-medium max-w-md leading-relaxed">
                  Premium Vaping Experience Redefined with Advanced Technology and Unmatched Performance
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Explore Collection
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
              
              {/* Key Features */}
              <div className="flex space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">20ML</div>
                  <div className="text-sm text-gray-300 font-medium">Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">8000+</div>
                  <div className="text-sm text-gray-300 font-medium">Puffs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">850mAh</div>
                  <div className="text-sm text-gray-300 font-medium">Battery</div>
                </div>
              </div>
            </div>

            {/* Right Column - Featured Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-12 shadow-2xl border border-gray-200">
                <img 
                  src="/src/assets/Forge/B1GBlack.png"
                  alt="Forge Alpha Featured Product"
                  className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-400 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gray-500 rounded-full opacity-15"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Technical <span className="text-cyan-400">Specifications</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Engineered for excellence with premium components and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-8 shadow-lg border border-gray-500 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-2">
                E-Liquid Capacity
              </h3>
              <div className="text-3xl font-black text-white">
                20ML
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-8 shadow-lg border border-gray-500 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-2">
                Battery Power
              </h3>
              <div className="text-3xl font-black text-white">
                850mAh
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-8 shadow-lg border border-gray-500 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-2">
                Total Puffs
              </h3>
              <div className="text-3xl font-black text-white">
                8000+
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-8 shadow-lg border border-gray-500 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-2">
                Technology
              </h3>
              <div className="text-3xl font-black text-white">
                Mesh Coil
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Porsche-Style Carousel Section */}
      <section className="h-[10vh] flex items-center justify-center pt-8 pb-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          {/* Brand Header */}
          <div className="mb-6 space-y-2">
            <div className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
              B1G CORPORATION
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              FORGE <span className="font-light text-cyan-400">ALPHA</span>
            </h1>
          </div>

          {/* Large Product Name Display with Swoosh Animation */}
          <div className="mb-8 overflow-hidden">
            <h2 className={`text-4xl md:text-5xl font-black text-cyan-400 tracking-wider uppercase leading-none ${
              isTransitioning 
                ? 'swoosh-exit' 
                : slideDirection === 'right' 
                  ? 'swoosh-enter-right text-swoosh' 
                  : 'swoosh-enter-left text-swoosh'
            }`}>
              {currentProduct.subtitle}
            </h2>
          </div>

          {/* Main Product Display with Dynamic Swoosh Animation */}
          <div className="relative mb-8">
            <div 
              className="flex justify-center items-center h-[250px] cursor-grab active:cursor-grabbing select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <img 
                src={currentProduct.image}
                alt={currentProduct.name}
                className={`max-w-sm w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 pointer-events-none ${
                  isTransitioning 
                    ? 'swoosh-exit' 
                    : slideDirection === 'right' 
                      ? 'swoosh-enter-right' 
                      : 'swoosh-enter-left'
                }`}
              />
            </div>
            
            {/* Swoosh Effect Overlay */}
            <div className={`absolute inset-0 pointer-events-none ${
              isTransitioning ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-200`}>
              <div className={`absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform -translate-y-1/2 ${
                slideDirection === 'right' ? 'animate-pulse' : 'animate-pulse'
              }`}></div>
            </div>
          </div>

          {/* Product Name Display */}
          <div className="mb-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentProduct.name}
            </h3>
          </div>

          {/* Navigation Dots with Enhanced Animation */}
          <div className="flex justify-center space-x-2 mb-6">
            {flavorVariants.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-150 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/30' 
                    : 'bg-gray-500 hover:bg-gray-400 scale-100'
                }`}
              />
            ))}
          </div>

          {/* Go Back Button with Pulse Animation */}
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Go Back</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForgeAlpha;

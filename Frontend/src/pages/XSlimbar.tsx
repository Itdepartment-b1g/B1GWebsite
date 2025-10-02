import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Battery, Zap, Shield, Wind } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all Slimbar images
import IcyHeartImg from '@/assets/Slimbar/IcyHeart.png';
import BlueBurstImg from '@/assets/Slimbar/BlueBurst.png';
import MysteryBurstImg from '@/assets/Slimbar/MysteryBurst.png';
import GoldenSunburstImg from '@/assets/Slimbar/GoldenSunburst.png';
import GoldSliceImg from '@/assets/Slimbar/GoldSlice.png';
import RedTropicBubbleImg from '@/assets/Slimbar/RedTropicBubble.png';
import PurpleHazeImg from '@/assets/Slimbar/PurpleHaze.png';
import PurpleBurstImg from '@/assets/Slimbar/PurpleBurst.png';
import AmberImg from '@/assets/Slimbar/Amber.png';
import VioletEclipseImg from '@/assets/Slimbar/VioletEclipse.png';
import RedTropicImg from '@/assets/Slimbar/RedTropic.png';
import RosyBreezeImg from '@/assets/Slimbar/RosyBreeze.png';
import NaturalTitaniumImg from '@/assets/Slimbar/NaturalTitanium.png';
import WhiteTitaniumImg from '@/assets/Slimbar/WhiteTitanium.png';
import SakuraPinkImg from '@/assets/Slimbar/SakuraPink.png';
import DessertTitaniumImg from '@/assets/Slimbar/DessertTitanium.png';
import UltraMarineImg from '@/assets/Slimbar/UltraMarine.png';
import SpaceGrayImg from '@/assets/Slimbar/SpaceGray.png';

const Amz = () => {
  const [currentPod, setCurrentPod] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentColor, setCurrentColor] = useState(0);
  const [isColorTransitioning, setIsColorTransitioning] = useState(false);
  const [isPodAutoPlay, setIsPodAutoPlay] = useState(true);
  const [isColorAutoPlay, setIsColorAutoPlay] = useState(true);

  const pods = [
    { name: 'ICY HEART', color: '#ff8d8e', image: IcyHeartImg, description: 'Bold cherry flavor with a refreshing finish' },
    { name: 'BLUE BURST', color: '#8ba1f2', image: BlueBurstImg, description: 'Cool menthol sensation with tropical notes' },
    { name: 'MYSTERY BURST', color: '#76aef0', image: MysteryBurstImg, description: 'Fresh mint with herbal undertones' },
    { name: 'GOLDEN SUNBURST', color: '#f8ab75', image: GoldenSunburstImg, description: 'Citrus burst with smooth vanilla finish' },
    { name: 'GOLD SLICE', color: '#fa842b', image: GoldSliceImg, description: 'Mixed berry explosion with grape notes' },
    { name: 'RED TROPIC BUBBLE', color: '#fe464c', image: RedTropicBubbleImg, description: 'Sweet honey with caramel undertones' },
    { name: 'PURPLE HAZE', color: '#a667d0', image: PurpleHazeImg, description: 'Tropical fruit blend with floral hints' },
    { name: 'PURPLE BURST', color: '#a667d0', image: PurpleBurstImg, description: 'Ultra-cool menthol with icy finish' },
    { name: 'AMBER', color: '#9b8882', image: AmberImg, description: 'Rich tobacco with subtle vanilla' },
    { name: 'VIOLET ECLIPSE', color: '#c21c5a', image: VioletEclipseImg, description: 'Zesty lime with refreshing kick' },
    { name: 'RED TROPIC', color: '#ff1425', image: RedTropicImg, description: 'Zesty lime with refreshing kick' },
    { name: 'ROSY BREEZE', color: '#ff8ac1', image: RosyBreezeImg, description: 'Zesty lime with refreshing kick' }
  ];

  const deviceColors = [
    { name: 'Natural Titanium', color: '#cbc0be', image: NaturalTitaniumImg, description: 'Premium natural titanium finish with warm, earthy tones and aerospace-grade durability for sophisticated everyday elegance' },
    { name: 'White Titanium', color: '#d5d5d3', image: WhiteTitaniumImg, description: 'Pure white titanium with lustrous pearl finish and advanced anti-fingerprint coating for pristine appearance' },
    { name: 'Sakura Pink', color: '#f8bbc8', image: SakuraPinkImg, description: 'Inspired by cherry blossoms, this delicate pink finish features soft pearl coating with feminine elegance and refinement' },
    { name: 'Desert Titanium', color: '#ca8b56', image: DessertTitaniumImg, description: 'Warm desert-inspired titanium with rich bronze undertones and premium brushed texture for distinctive character' },
    { name: 'Ultramarine', color: '#4c50b3', image: UltraMarineImg, description: 'Deep ultramarine blue with vibrant intensity and precision-engineered satin finish for bold sophistication' },
    { name: 'Space Grey', color: '#483f38', image: SpaceGrayImg, description: 'Modern space grey with sophisticated dark tones and ultra-smooth anodized finish for professional appeal' }
  ];

  const nextPod = (isUserInteraction = false) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (isUserInteraction) {
      setIsPodAutoPlay(false);
      // Resume auto-play after 5 seconds of inactivity
      setTimeout(() => setIsPodAutoPlay(true), 5000);
    }
    
    setTimeout(() => {
      setCurrentPod((prev) => (prev + 1) % pods.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevPod = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // User interaction - pause auto-play
    setIsPodAutoPlay(false);
    setTimeout(() => setIsPodAutoPlay(true), 5000);
    
    setTimeout(() => {
      setCurrentPod((prev) => (prev - 1 + pods.length) % pods.length);
      setIsTransitioning(false);
    }, 300);
  };

  const nextColor = () => {
    if (isColorTransitioning) return;
    setIsColorTransitioning(true);
    
    // User interaction - pause auto-play
    setIsColorAutoPlay(false);
    setTimeout(() => setIsColorAutoPlay(true), 5000);
    
    setTimeout(() => {
      setCurrentColor((prev) => (prev + 1) % deviceColors.length);
      setIsColorTransitioning(false);
    }, 300);
  };

  const prevColor = () => {
    if (isColorTransitioning) return;
    setIsColorTransitioning(true);
    
    // User interaction - pause auto-play
    setIsColorAutoPlay(false);
    setTimeout(() => setIsColorAutoPlay(true), 5000);
    
    setTimeout(() => {
      setCurrentColor((prev) => (prev - 1 + deviceColors.length) % deviceColors.length);
      setIsColorTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    if (!isPodAutoPlay) return;
    
    const interval = setInterval(() => {
      if (isPodAutoPlay) {
        nextPod(false); // false indicates this is not user interaction
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPodAutoPlay]);

  const currentPodData = pods[currentPod];
  const currentColorData = deviceColors[currentColor];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header alwaysShowBg={true} />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            X-SlimBar
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Experience the future of vaping with premium technology and unmatched flavor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              View User Manual
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Explore Features
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* User Manual Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Start Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
                <Battery className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">1. Charge</h3>
                <p className="text-gray-600 text-sm">Connect USB-C cable and charge for 45 minutes</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">2. Insert Pod</h3>
                <p className="text-gray-600 text-sm">Click pod into place until you hear a snap</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
                <Wind className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">3. Activate</h3>
                <p className="text-gray-600 text-sm">Simply inhale to activate automatic draw</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">4. Enjoy</h3>
                <p className="text-gray-600 text-sm">Experience smooth, consistent vapor production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">X-Slimbar Maximum Flavor</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  The X-SlimBar redefines portable vaping with its incredibly slim profile and powerful performance. Engineered with precision titanium finishes and advanced airflow technology, it delivers rich, consistent flavor in the most compact form factor.
                </p>
                <p>
                  Featuring a premium build quality with anti-fingerprint coating and ergonomic design, the X-SlimBar offers up to 800 puffs of pure satisfaction. Perfect for on-the-go users who refuse to compromise on quality or style.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-black mb-2">Battery Life</h4>
                    <p className="text-sm">Up to 800 puffs per charge</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-black mb-2">Pod Capacity</h4>
                    <p className="text-sm">2ml premium e-liquid</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-black mb-2">Charging</h4>
                    <p className="text-sm">USB-C fast charging</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-black mb-2">Material</h4>
                    <p className="text-sm">Aluminum alloy body</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://wvphvs.com/cdn/shop/files/slimbar_shopee.jpg?v=1749195708"
                alt="AMZ Vape Device"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pods Carousel */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Flavor Collection</h2>
          
          <div className="relative">
            {/* Background with wave pattern */}
            <div 
              className="absolute inset-0 rounded-3xl transition-all duration-700 ease-in-out"
              style={{
                background: `linear-gradient(135deg, ${currentPodData.color}20, ${currentPodData.color}40)`,
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                <path
                  d="M0,400 C300,300 600,500 900,350 C1050,250 1150,450 1200,300 L1200,800 L0,800 Z"
                  fill={`${currentPodData.color}30`}
                  className="transition-all duration-700"
                />
                <path
                  d="M0,500 C400,400 800,600 1200,400 L1200,800 L0,800 Z"
                  fill={`${currentPodData.color}20`}
                  className="transition-all duration-700"
                />
              </svg>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 min-h-[500px] items-center">
              {/* Product Description */}
              <div className={`space-y-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-[-50px]' : 'opacity-100 translate-x-0'}`}>
                <h3 className="text-3xl lg:text-4xl font-bold" style={{ color: currentPodData.color }}>
                  {currentPodData.name}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {currentPodData.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentPodData.color }}></div>
                    <span className="text-gray-600">Premium flavor extraction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentPodData.color }}></div>
                    <span className="text-gray-600">2ml capacity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentPodData.color }}></div>
                    <span className="text-gray-600">Leak-proof design</span>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative flex justify-center items-center">
                <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-[100px]' : 'opacity-100 translate-x-0'}`}>
                  <img
                    src={currentPodData.image}
                    alt={currentPodData.name}
                    className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl" style={{ 
                    boxShadow: `0 0 100px ${currentPodData.color}40` 
                  }}></div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
                         <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
               <button
                 onClick={prevPod}
                 className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                 disabled={isTransitioning}
               >
                 <ChevronLeft className="w-6 h-6 text-gray-800" />
               </button>
             </div>
             <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
               <button
                 onClick={() => nextPod(true)}
                 className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                 disabled={isTransitioning}
               >
                 <ChevronRight className="w-6 h-6 text-gray-800" />
               </button>
             </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {pods.map((_, index) => (
                                 <button
                   key={index}
                   onClick={() => {
                     if (!isTransitioning) {
                       setIsTransitioning(true);
                       // User interaction - pause auto-play
                       setIsPodAutoPlay(false);
                       setTimeout(() => setIsPodAutoPlay(true), 5000);
                       
                       setTimeout(() => {
                         setCurrentPod(index);
                         setIsTransitioning(false);
                       }, 300);
                     }
                   }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPod 
                      ? 'scale-125' 
                      : 'hover:scale-110'
                  }`}
                  style={{
                    backgroundColor: index === currentPod ? currentPodData.color : '#D1D5DB'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Device Colors - Sophisticated Design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(71, 33, 96, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 155, 255, 0.06) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-8">
          {/* Elegant Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(71, 33, 96, 0.08)', color: '#472160', border: '1px solid rgba(71, 33, 96, 0.1)' }}>
              PREMIUM FINISHES
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#000204', letterSpacing: '-0.02em' }}>
              Exquisite Colors
            </h2>
            <div className="relative mb-12">
              <div className="w-24 h-px mx-auto" style={{ backgroundColor: '#472160' }}></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-px" style={{ backgroundColor: '#FF9BFF' }}></div>
            </div>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#7A7f83' }}>
              Choose from our meticulously crafted color collection, where each finish represents 
              the pinnacle of design sophistication and premium materials.
            </p>
          </div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Color Selection Panel */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
                <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: '#472160' }}>
                  Select Your Finish
                </h3>
                
                {/* Color Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {deviceColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isColorTransitioning) {
                          setIsColorTransitioning(true);
                          setIsColorAutoPlay(false);
                          setTimeout(() => setIsColorAutoPlay(true), 5000);
                          
                          setTimeout(() => {
                            setCurrentColor(index);
                            setIsColorTransitioning(false);
                          }, 300);
                        }
                      }}
                      className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                        index === currentColor 
                          ? 'bg-white shadow-lg border-2 border-[#472160] scale-105' 
                          : 'bg-white/50 hover:bg-white/80 border border-gray-200 hover:scale-102'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div 
                          className={`w-12 h-12 rounded-full shadow-lg border-2 transition-all duration-300 ${
                            index === currentColor ? 'border-white scale-110' : 'border-gray-200 group-hover:scale-105'
                          }`}
                          style={{ backgroundColor: color.color }}
                        ></div>
                        <div className="text-center">
                          <div className={`text-sm font-semibold transition-colors duration-300 ${
                            index === currentColor ? 'text-[#472160]' : 'text-gray-700'
                          }`}>
                            {color.name}
                          </div>
                        </div>
                      </div>
                      
                      {/* Selection Ring */}
                      {index === currentColor && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#FF9BFF] animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={prevColor}
                    className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: '#472160', color: 'white' }}
                    disabled={isColorTransitioning}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextColor}
                    className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: '#472160', color: 'white' }}
                    disabled={isColorTransitioning}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Device Showcase */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                {/* Premium Device Display */}
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-12 shadow-2xl border border-white/20">
                  <div className="absolute inset-0 rounded-3xl" style={{ 
                    background: `linear-gradient(135deg, ${currentColorData.color}05, ${currentColorData.color}10)`,
                  }}></div>
                  
                  <div className="relative z-10">
                    {/* Device Image */}
                    <div className="flex justify-center mb-8">
                      <div className={`transition-all duration-700 ${isColorTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <div className="relative">
                          <img
                            src={currentColorData.image}
                            alt={currentColorData.name}
                            className="w-80 h-96 object-cover rounded-2xl"
                            style={{
                              boxShadow: `0 25px 50px -12px ${currentColorData.color}40`
                            }}
                          />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Color Information */}
                    <div className={`text-center transition-all duration-500 ${isColorTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <h3 className="text-3xl font-light mb-4" style={{ color: currentColorData.color }}>
                        {currentColorData.name}
                      </h3>
                      <p className="text-lg leading-relaxed max-w-lg mx-auto mb-8" style={{ color: '#7A7f83' }}>
                        {currentColorData.description}
                      </p>

                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                        <div className="flex items-center space-x-3 justify-center lg:justify-start">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentColorData.color }}></div>
                          <span className="text-sm font-medium text-gray-600">Precision Finish</span>
                        </div>
                        <div className="flex items-center space-x-3 justify-center lg:justify-start">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentColorData.color }}></div>
                          <span className="text-sm font-medium text-gray-600">Ultra Durable</span>
                        </div>
                        <div className="flex items-center space-x-3 justify-center lg:justify-start">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentColorData.color }}></div>
                          <span className="text-sm font-medium text-gray-600">Anti-Fingerprint</span>
                        </div>
                        <div className="flex items-center space-x-3 justify-center lg:justify-start">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentColorData.color }}></div>
                          <span className="text-sm font-medium text-gray-600">Ergonomic Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: currentColorData.color }}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10 animate-pulse delay-1000" style={{ backgroundColor: currentColorData.color }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
       <Footer />
     </div>
   );
 };

export default Amz;
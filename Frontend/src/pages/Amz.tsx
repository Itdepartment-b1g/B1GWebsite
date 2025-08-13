import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Battery, Zap, Shield, Clock, Cpu, Wifi, Play, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import AMZ pod images
import E31383 from "@/assets/Amz/E3.1383.png";
import E31384 from "@/assets/Amz/E3.1384.png";
import E31385 from "@/assets/Amz/E3.1385.png";
import E31386 from "@/assets/Amz/E3.1386.png";
import E31387 from "@/assets/Amz/E3.1387.png";
import E31388 from "@/assets/Amz/E3.1388.png";
import E31389 from "@/assets/Amz/E3.1389.png";
import E31390 from "@/assets/Amz/E3.1390.png";
import E31391 from "@/assets/Amz/E3.1391.png";
import E31392 from "@/assets/Amz/E3.1392.png";


const ProductPage = () => {
  const [currentPod, setCurrentPod] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const carouselRef = useRef(null);

  const pods = [
    { id: 1, name: 'White Fusion', color: '#dc2626', image: E31383 },
    { id: 2, name: 'Black Torando',color: '#6b7280',  image: E31384 },
    { id: 3, name: 'Fresh Forest', color: '#dc2626',  image: E31385 },
    { id: 4, name: 'M Fusion',  color: '#ef4444',  image: E31386 },
    { id: 5, name: 'Rose Red', color: '#6b7280',  image: E31387 },
    { id: 6, name: 'Lush Ice', color: '#4b5563', image: E31388 },
    { id: 7, name: 'Purple Snow',  color: '#6b7280',  image: E31389 },
    { id: 8, name: 'Pink Ice',  color: '#dc2626', image: E31390 },
    { id: 9, name: 'Blue Ice',  color: '#1f2937',  image: E31391 },
    { id: 10, name: 'Lush Pink', color: '#f9fafb', image: E31392 }
  ];

  const features = [
    { icon: Battery, title: "650mAh Battery", description: "Long-lasting power for extended use", color: "#22c55e" },
    { icon: Zap, title: "Fast Charging", description: "Quick 30-minute charge time", color: "#eab308" },
    { icon: Shield, title: "Safety First", description: "Multiple protection systems", color: "#3b82f6" },
    { icon: Cpu, title: "Smart Technology", description: "Intelligent draw activation", color: "#8b5cf6" }
  ];

  const nextPod = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPod((prev) => (prev + 1) % pods.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevPod = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPod((prev) => (prev - 1 + pods.length) % pods.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToPod = (index) => {
    if (!isAnimating && index !== currentPod) {
      setIsAnimating(true);
      setCurrentPod(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextPod, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(featureInterval);
  }, []);

  const currentPodData = pods[currentPod];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #dc2626 1px, transparent 1px),
            linear-gradient(180deg, #dc2626 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>



      <Header alwaysShowBg={true} />

      {/* Hero Section - Minimalist Design */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[70vh]">
            {/* Left: Typography Focus */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-red-600"></div>
                  <span className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase">Introducing</span>
                </div>
                
                <h1 className="text-8xl lg:text-9xl font-black leading-none">
                  <span className="text-black">AMZ</span>
                  <br />
                  <span className="text-red-600">A1</span>
                </h1>
                
                <p className="text-2xl text-gray-600 font-light max-w-md leading-relaxed">
                  Revolutionary vaping technology. 
                  <span className="text-red-600 font-medium"> Redefining experiences.</span>
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-black">650</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">mAh Battery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">1000+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Puffs</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-black">30</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Min Charge</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">10</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Flavors</div>
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="/AMZVape-A1-UserManual.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-black text-white px-12 py-6 text-lg font-semibold hover:bg-red-600 transition-all duration-500 inline-block"
              >
                <span className="relative z-10 flex items-center gap-3">
                  User Manual
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            </div>

            {/* Right: Product Showcase */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Product Image */}
                <div className="relative bg-gray-50 rounded-3xl p-12 shadow-2xl">
                  <img 
                    src="https://www.amzvape.ph/wp-content/uploads/2024/12/a1-22-2048x1452.webp" 
                    alt="AMZ A1 Vape Device"
                    className="w-full h-auto object-contain"
                  />
                  
                  {/* Floating Info Cards */}
                  <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Battery className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-semibold">Fast Charge</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-red-600 text-white rounded-2xl p-4">
                    <div className="text-sm font-semibold">Premium Quality</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 right-8 w-32 h-32 border-2 border-red-600 rounded-full opacity-20"></div>
                <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 bg-red-600 rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Layout */}
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Advanced <span className="text-red-600">Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineered for performance, designed for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
                  activeFeature === index ? 'border-red-600 scale-105' : 'border-transparent hover:border-gray-200'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 ${
                  activeFeature === index ? 'bg-red-600' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <feature.icon className={`w-8 h-8 transition-all duration-300 ${
                    activeFeature === index ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Animated indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-500 ${
                  activeFeature === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pod Collection - Magazine Style Layout */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">
                Pod <span className="text-red-600">Collection</span>
              </h2>
              <p className="text-gray-400 text-lg">10 Premium Flavors Available</p>
            </div>
           
          </div>

          {/* Main Featured Pod Display */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Pod Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 border border-gray-800">
                <img 
                  src={currentPodData.image}
                  alt={currentPodData.name}
                  className="w-full h-96 object-cover rounded-xl transition-all duration-600"
                />
                
                {/* Overlay Info */}
                <div className="absolute top-8 right-8 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                  Featured
                </div>
                
            
              </div>
            </div>

            {/* Pod Details */}
            <div className="space-y-8">
              <div>
                <div className="text-sm text-red-600 font-mono tracking-wider uppercase mb-2">
                  Pod #{String(currentPod + 1).padStart(2, '0')}
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">{currentPodData.name}</h3>
              </div>


             
            </div>
          </div>

          {/* Pod Thumbnails Grid */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            {pods.map((pod, index) => (
              <button
                key={pod.id}
                onClick={() => goToPod(index)}
                disabled={isAnimating}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                  index === currentPod 
                    ? 'border-red-600 shadow-lg shadow-red-600/25' 
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <img 
                  src={pod.image} 
                  alt={pod.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  index === currentPod 
                    ? 'bg-red-600/20' 
                    : 'bg-black/40 hover:bg-black/20'
                }`}>
                  {index === currentPod && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  )}
                </div>

                {/* Pod Number */}
                <div className="absolute top-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <span className="text-gray-400 text-sm">{currentPod + 1}</span>
            <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-600 transition-all duration-600 rounded-full"
                style={{ width: `${((currentPod + 1) / pods.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-gray-400 text-sm">{pods.length}</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
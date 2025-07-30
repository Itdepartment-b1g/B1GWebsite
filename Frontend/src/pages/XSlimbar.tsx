import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Battery, Zap, Shield, Wind } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Amz = () => {
  const [currentPod, setCurrentPod] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pods = [
    { name: 'Cherry Blast', color: '#DC2626', image: 'https://www.xvape.cc/upload/images/2025/05/07/7196154304.png', description: 'Bold cherry flavor with a refreshing finish' },
    { name: 'Ocean Blue', color: '#2563EB', image: 'https://www.xvape.cc/upload/images/2025/05/07/7195154228.png', description: 'Cool menthol sensation with tropical notes' },
    { name: 'Forest Green', color: '#059669', image: 'https://www.xvape.cc/upload/images/2025/05/07/7187153806.png', description: 'Fresh mint with herbal undertones' },
    { name: 'Sunset Orange', color: '#EA580C', image: 'https://www.xvape.cc/upload/images/2025/05/07/7192154011.png', description: 'Citrus burst with smooth vanilla finish' },
    { name: 'Purple Storm', color: '#7C3AED', image: 'https://www.xvape.cc/upload/images/2025/05/07/7190153922.png', description: 'Mixed berry explosion with grape notes' },
    { name: 'Golden Honey', color: '#D97706', image: 'https://www.xvape.cc/upload/images/2025/05/07/7193154049.png', description: 'Sweet honey with caramel undertones' },
    { name: 'Pink Paradise', color: '#EC4899', image: 'https://www.xvape.cc/upload/images/2025/05/07/7191153939.png', description: 'Tropical fruit blend with floral hints' },
    { name: 'Silver Ice', color: '#6B7280', image: 'https://www.xvape.cc/upload/images/2025/05/07/7194154206.png', description: 'Ultra-cool menthol with icy finish' },
    { name: 'Royal Black', color: '#1F2937', image: 'https://www.xvape.cc/upload/images/2025/05/07/7186153735.png', description: 'Rich tobacco with subtle vanilla' },
    { name: 'Lime Zest', color: '#65A30D', image: 'https://www.xvape.cc/upload/images/2025/05/07/7185153705.png', description: 'Zesty lime with refreshing kick' }
  ];

  const nextPod = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPod((prev) => (prev + 1) % pods.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevPod = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPod((prev) => (prev - 1 + pods.length) % pods.length);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextPod, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPodData = pods[currentPod];

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
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Premium Design, Superior Performance</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  The AMZ Vape represents the pinnacle of vaping technology, combining sleek aesthetics with cutting-edge engineering. Our patented airflow system delivers consistent vapor production while maintaining the pure essence of each flavor.
                </p>
                <p>
                  Built with aerospace-grade aluminum and featuring a leak-proof pod system, the AMZ Vape is designed for both novice users and vaping enthusiasts who demand excellence in every puff.
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
                onClick={nextPod}
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

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Device Specs</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Dimensions: 110mm × 20mm × 12mm</li>
                <li>• Weight: 28g</li>
                <li>• Material: Aluminum alloy</li>
                <li>• Finish: Anodized coating</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-green-400">Battery & Charging</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Battery: 450mAh lithium-ion</li>
                <li>• Charging: USB-C, 5V/1A</li>
                <li>• Charge time: 45 minutes</li>
                <li>• Usage: Up to 800 puffs</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Pod System</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Capacity: 2ml</li>
                <li>• Resistance: 1.2Ω mesh coil</li>
                <li>• Activation: Draw-activated</li>
                <li>• Magnetic connection</li>
              </ul>
            </div>
          </div>
                 </div>
       </section>
       <Footer />
     </div>
   );
 };

export default Amz;
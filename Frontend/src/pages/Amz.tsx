import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Battery, Zap, Shield, Clock, Cpu, Wifi } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const [currentPod, setCurrentPod] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

     const pods = [
     { id: 1, name: 'Midnight Storm', flavor: 'Dark Berry Mix', color: '#1a1a2e', nicotine: '50mg', puffs: '600+', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=600&fit=crop' },
     { id: 2, name: 'Arctic Blast', flavor: 'Cool Mint', color: '#0f3460', nicotine: '35mg', puffs: '800+', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop' },
     { id: 3, name: 'Crimson Fire', flavor: 'Cherry Tobacco', color: '#8b0000', nicotine: '50mg', puffs: '700+', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=600&fit=crop' },
     { id: 4, name: 'Solar Flare', flavor: 'Tropical Mango', color: '#ff6b35', nicotine: '25mg', puffs: '900+', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=600&fit=crop' },
     { id: 5, name: 'Neon Dream', flavor: 'Grape Fusion', color: '#9d4edd', nicotine: '35mg', puffs: '750+', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop' },
     { id: 6, name: 'Steel Thunder', flavor: 'Vanilla Cream', color: '#495057', nicotine: '20mg', puffs: '1000+', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=600&fit=crop' },
     { id: 7, name: 'Electric Blue', flavor: 'Blueberry Ice', color: '#007bff', nicotine: '50mg', puffs: '650+', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=600&fit=crop' },
     { id: 8, name: 'Ruby Surge', flavor: 'Strawberry Blast', color: '#dc143c', nicotine: '35mg', puffs: '800+', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop' },
     { id: 9, name: 'Phantom Black', flavor: 'Coffee Espresso', color: '#212529', nicotine: '45mg', puffs: '700+', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=600&fit=crop' },
     { id: 10, name: 'Crystal White', flavor: 'Pure Menthol', color: '#f8f9fa', nicotine: '30mg', puffs: '850+', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=600&fit=crop' }
   ];

  const nextPod = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPod((prev) => (prev + 1) % pods.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevPod = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPod((prev) => (prev - 1 + pods.length) % pods.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToPod = (index) => {
    if (!isAnimating && index !== currentPod) {
      setIsAnimating(true);
      setCurrentPod(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextPod, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentPodData = pods[currentPod];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentPodData.color}22 0%, transparent 70%)`
          }}
        />
      </div>

             <Header alwaysShowBg={true} />

       {/* Product Introduction */}
       <section className="relative z-10 pt-32 py-20 px-6">
         <div className="container mx-auto max-w-7xl">
           {/* First Section: Text Left, Image Right */}
           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="space-y-8">
               <div className="space-y-4">
                 <h3 className="text-2xl font-semibold text-red-400 tracking-wider">INTRODUCING</h3>
                 <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-red-500 bg-clip-text text-transparent leading-tight">
                   AMZ A1 Vape
                 </h2>
                 <p className="text-xl text-gray-300 leading-relaxed">
                   Reusable Battery with Replaceable Pod
                 </p>
               </div>
               
               <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                   <span className="text-lg text-white font-semibold">Larger Capacity</span>
                 </div>
                 <div className="flex items-center space-x-4">
                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                   <span className="text-lg text-white font-semibold">Just More Puffs</span>
                 </div>
               </div>

               <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                 User Manual
               </button>
             </div>

             <div className="relative">
               <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://www.amzvape.ph/wp-content/uploads/2024/12/a1-22-2048x1452.webp" 
                   alt="AMZ A1 Vape Device"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                 
                 {/* Floating Elements */}
                 <div className="absolute top-6 right-6 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                 <div className="absolute bottom-6 left-6 w-3 h-3 bg-white rounded-full animate-ping"></div>
               </div>
             </div>
           </div>

           {/* Second Section: Image Left, Text Right */}
           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="relative order-2 lg:order-1">
               <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://www.amzvape.ph/wp-content/uploads/2024/12/a1pod-19-2048x2048.webp" 
                   alt="AMZ Technology"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                 
                 {/* Floating Elements */}
                 <div className="absolute top-6 right-6 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                 <div className="absolute bottom-6 left-6 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
               </div>
             </div>

             <div className="space-y-8 order-1 lg:order-2">
               <div className="space-y-4">
                 <h3 className="text-3xl font-bold text-white">AMZ Technology</h3>
                 <p className="text-lg text-gray-300 leading-relaxed">
                   Powered by advanced lithium-ion battery technology with smart charging capabilities. 
                   Each device features a 650mAh battery with up to 1000 puffs per pod.
                 </p>
        </div>

               <div className="grid grid-cols-1 gap-6">
                 <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-gray-700">
                   <Battery className="w-8 h-8 text-green-400" />
                   <div>
                     <h4 className="text-lg font-semibold text-white">Long-lasting</h4>
                     <p className="text-gray-400 text-sm">650mAh battery capacity</p>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-gray-700">
                   <Cpu className="w-8 h-8 text-blue-400" />
                   <div>
                     <h4 className="text-lg font-semibold text-white">Smart Chip</h4>
                     <p className="text-gray-400 text-sm">Intelligent draw activation</p>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-gray-700">
                   <Wifi className="w-8 h-8 text-purple-400" />
          <div>
                     <h4 className="text-lg font-semibold text-white">Future Ready</h4>
                     <p className="text-gray-400 text-sm">Bluetooth connectivity*</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      

      {/* 3D Carousel Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-white to-gray-400 bg-clip-text text-transparent">
            PREMIUM POD COLLECTION
          </h3>

          {/* Main Carousel */}
          <div className="relative h-96 mb-12" ref={carouselRef}>
            <div className="absolute inset-0 flex items-center justify-center perspective-1000">
              {pods.map((pod, index) => {
                const offset = index - currentPod;
                const absOffset = Math.abs(offset);
                const isCenter = offset === 0;
                const isVisible = absOffset <= 2;

                if (!isVisible) return null;

                return (
                  <div
                    key={pod.id}
                    className={`absolute transition-all duration-800 ease-in-out cursor-pointer transform-gpu ${
                      isAnimating ? '' : 'hover:scale-105'
                    }`}
                    style={{
                      transform: `
                        translateX(${offset * 200}px)
                        translateZ(${isCenter ? 0 : -100 * absOffset}px)
                        rotateY(${offset * 25}deg)
                        scale(${isCenter ? 1 : 0.8 - absOffset * 0.1})
                      `,
                      zIndex: isCenter ? 10 : 10 - absOffset,
                      opacity: isCenter ? 1 : 0.6 - absOffset * 0.2,
                      transition: isAnimating ? 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'all 0.8s ease-in-out, transform 0.3s ease-out'
                    }}
                    onClick={() => goToPod(index)}
                  >
                                         {/* 3D Pod Container */}
                     <div className="relative w-48 h-64 preserve-3d">
                       {/* Pod Body */}
                       <div 
                         className="absolute inset-0 rounded-3xl shadow-2xl transform transition-all duration-800 ease-in-out hover:shadow-4xl overflow-hidden"
                         style={{
                           boxShadow: `0 20px 40px ${pod.color}33, inset 0 1px 0 rgba(255,255,255,0.1)`,
                           filter: isCenter ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)',
                           transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)'
                         }}
                       >
                         {/* Pod Image */}
                         <img 
                           src={pod.image} 
                           alt={pod.name}
                           className="w-full h-full object-cover transition-all duration-800"
                           style={{
                             filter: isCenter ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.8) contrast(0.9)'
                           }}
                         />
                         
                         {/* Overlay Gradient */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-800" 
                              style={{ opacity: isCenter ? 0.7 : 0.5 }} />
                         
                         {/* Pod Details */}
                         <div className="absolute inset-0 p-6 flex flex-col justify-between text-white transition-all duration-800">
                           <div className="text-center transform transition-transform duration-800" 
                                style={{ transform: isCenter ? 'translateY(0)' : 'translateY(5px)' }}>
                             <h4 className="text-lg font-bold mb-2 transition-all duration-800 drop-shadow-lg">{pod.name}</h4>
                             <p className="text-sm opacity-90 transition-all duration-800 drop-shadow-md">{pod.flavor}</p>
                           </div>
                           
                           <div className="space-y-2 text-xs transition-all duration-800 bg-black/30 backdrop-blur-sm rounded-lg p-3" 
                                style={{ opacity: isCenter ? 1 : 0.8 }}>
                             <div className="flex justify-between">
                               <span>Nicotine:</span>
                               <span className="font-semibold">{pod.nicotine}</span>
                             </div>
                             <div className="flex justify-between">
                               <span>Puffs:</span>
                               <span className="font-semibold">{pod.puffs}</span>
                             </div>
                           </div>
                         </div>

                         {/* Animated Elements */}
                         {isCenter && (
                           <>
                             <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse transition-all duration-800 shadow-lg" />
                             <div className="absolute bottom-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-ping transition-all duration-800 shadow-lg" />
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-full animate-spin" 
                                  style={{ animationDuration: '8s' }} />
                           </>
                         )}
                       </div>
                     </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPod}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-gray-600 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm hover:scale-110 hover:border-red-500"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 text-white transition-colors duration-300" />
            </button>
            <button
              onClick={nextPod}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-gray-600 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm hover:scale-110 hover:border-red-500"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 text-white transition-colors duration-300" />
            </button>
          </div>

          {/* Pod Indicators */}
          <div className="flex justify-center space-x-3 mb-8">
            {pods.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPod(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-600 ease-in-out hover:scale-150 ${
                  index === currentPod 
                    ? 'bg-red-500 scale-125 shadow-lg shadow-red-500/50' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                style={{
                  transform: index === currentPod ? 'scale(1.25)' : 'scale(1)',
                  boxShadow: index === currentPod ? `0 0 15px ${pods[currentPod].color}66` : 'none'
                }}
              />
            ))}
        </div>

          {/* Current Pod Info */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-700 backdrop-blur-sm transition-all duration-800 ease-in-out transform hover:scale-105"
                 style={{ 
                   borderColor: `${currentPodData.color}44`,
                   boxShadow: `0 10px 30px ${currentPodData.color}22`
                 }}>
              <h4 className="text-2xl font-bold mb-2 transition-all duration-800" 
                  style={{ 
                    color: currentPodData.color,
                    textShadow: `0 0 20px ${currentPodData.color}44`
                  }}>
                {currentPodData.name}
              </h4>
              <p className="text-gray-300 mb-4 text-lg transition-all duration-800">{currentPodData.flavor}</p>
              <div className="flex justify-center space-x-8 text-sm">
                <div className="text-center transition-all duration-800 hover:scale-110">
                  <div className="text-gray-400">Nicotine</div>
                  <div className="font-semibold text-white">{currentPodData.nicotine}</div>
                </div>
                <div className="text-center transition-all duration-800 hover:scale-110">
                  <div className="text-gray-400">Puffs</div>
                  <div className="font-semibold text-white">{currentPodData.puffs}</div>
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

export default ProductPage;
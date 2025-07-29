import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Zap, Battery, Droplets, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const XForgeProduct = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  const deviceColors = [
    {
      name: "Midnight Black",
      color: "bg-gradient-to-br from-gray-900 to-black",
      accent: "from-cyan-400 to-cyan-600",
      image: "https://images.unsplash.com/photo-1607721296229-d13fdc20fb2e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Arctic White",
      color: "bg-gradient-to-br from-gray-100 to-white",
      accent: "from-cyan-400 to-cyan-600",
      image: "https://images.unsplash.com/photo-1582625165235-c4f5c6b96a1b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Cyber Cyan",
      color: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      accent: "from-white to-gray-100",
      image: "https://images.unsplash.com/photo-1607721296229-d13fdc20fb2e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const podFlavors = [
    {
      name: "Arctic Mint",
      description: "A refreshing blast of cool mint with icy undertones that awakens your senses",
      color: "from-cyan-300 to-blue-400",
      strength: "50mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Neon Berry",
      description: "Electric fusion of mixed berries with a vibrant, tangy finish",
      color: "from-purple-400 to-pink-500",
      strength: "35mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1599534351692-e4da5d46e8c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Digital Vanilla",
      description: "Smooth vanilla cream with futuristic notes of sophistication",
      color: "from-amber-300 to-orange-400",
      strength: "25mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Quantum Grape",
      description: "Deep grape essence with molecular precision and lasting impact",
      color: "from-violet-400 to-purple-600",
      strength: "50mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Cyber Mango",
      description: "Tropical mango enhanced with futuristic sweetness and exotic appeal",
      color: "from-yellow-400 to-orange-500",
      strength: "35mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1605027990121-cbae9d0e0ce7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Electric Strawberry",
      description: "Charged strawberry flavor with high-voltage intensity and sweetness",
      color: "from-red-400 to-pink-500",
      strength: "50mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Matrix Melon",
      description: "Code-cracked watermelon with refreshing digital matrix flavor profile",
      color: "from-green-400 to-emerald-500",
      strength: "25mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Neural Cherry",
      description: "Brain-stimulating cherry flavor with neural network complexity",
      color: "from-red-500 to-rose-600",
      strength: "50mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hologram Apple",
      description: "3D apple experience with holographic taste dimensions and crisp finish",
      color: "from-green-500 to-lime-400",
      strength: "35mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Plasma Peach",
      description: "High-energy peach flavor charged with plasma-level intensity",
      color: "from-orange-400 to-yellow-500",
      strength: "25mg",
      puffs: "2000+",
      image: "https://images.unsplash.com/photo-1629828874514-d78b9d75c2a0?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const nextFlavors = () => {
    setCurrentFlavorIndex((prev) => (prev + 4) % podFlavors.length);
  };

  const prevFlavors = () => {
    setCurrentFlavorIndex((prev) => (prev - 4 + podFlavors.length) % podFlavors.length);
  };

  const getVisibleFlavors = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(podFlavors[(currentFlavorIndex + i) % podFlavors.length]);
    }
    return visible;
  };
 
  const specifications = [
    { icon: Battery, label: "Battery", value: "650mAh" },
    { icon: Zap, label: "Power Output", value: "15W Max" },
    { icon: Droplets, label: "Pod Capacity", value: "2ml" },
    { icon: Shield, label: "Protection", value: "Short Circuit" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header alwaysShowBg={true} />
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
            50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .glow-animation {
            animation: glow 3s ease-in-out infinite;
          }
          .float-animation {
            animation: float 4s ease-in-out infinite;
          }
          .cyber-grid {
            background-image: 
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }
        `}
      </style>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-black/80"></div>
          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Product Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black rounded-full text-sm font-bold tracking-wider">
                    NEXT-GEN VAPING
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                    FORGE
                  </h1>
                  <p className="text-2xl font-light text-cyan-200">
                    The Future of Vaping Technology
                  </p>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  Experience the pinnacle of vaping innovation with X-Forge. Engineered with precision, 
                  designed for the future, and crafted for the ultimate vaping experience.
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                          <spec.icon size={16} className="text-black" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{spec.label}</p>
                          <p className="font-semibold text-white">{spec.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* User Manual Button */}
                <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 glow-animation">
                  <Download size={20} />
                  <span>Download User Manual</span>
                </button>
              </div>

              {/* Product Image */}
              <div className="relative">
                <div className="float-animation">
                  <img
                    src={deviceColors[selectedColor].image}
                    alt="X-Forge Device"
                    className="w-full max-w-md mx-auto drop-shadow-2xl filter brightness-110 contrast-110"
                  />
                </div>
                {/* Glowing effects */}
                <div className="absolute inset-0 bg-gradient-radial from-cyan-400/20 to-transparent blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Colors Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Choose Your <span className="text-cyan-400">Style</span>
              </h2>
              <p className="text-gray-400 text-lg">Three distinct colorways for your unique personality</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deviceColors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    selectedColor === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                    selectedColor === index ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-700 hover:border-cyan-500/50'
                  }`}>
                    <div className="relative mb-6">
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className={`absolute inset-0 ${color.color} opacity-20 rounded-lg`}></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{color.name}</h3>
                    <div className={`w-full h-3 rounded-full ${color.color} mb-4`}></div>
                    {selectedColor === index && (
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-semibold">Selected</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pod Flavors Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Premium <span className="text-cyan-400">Flavors</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">Crafted for the ultimate taste experience</p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-cyan-400 font-semibold">
                  {currentFlavorIndex + 1}-{Math.min(currentFlavorIndex + 4, podFlavors.length)} of {podFlavors.length} flavors
                </span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mb-12">
              <button
                onClick={prevFlavors}
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 mr-6"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(podFlavors.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFlavorIndex(index * 4)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentFlavorIndex / 4) === index ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextFlavors}
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 ml-6"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getVisibleFlavors().map((flavor, index) => {
                const actualIndex = (currentFlavorIndex + index) % podFlavors.length;
                return (
                  <div
                    key={actualIndex}
                    onClick={() => setSelectedFlavor(actualIndex)}
                    className={`group cursor-pointer transition-all duration-300 ${
                      selectedFlavor === actualIndex ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedFlavor === actualIndex ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-700 hover:border-cyan-500/50'
                    }`}>
                      <div className="relative h-48">
                        <img
                          src={flavor.image}
                          alt={flavor.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${flavor.color} opacity-30`}></div>
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-bold text-white">{flavor.strength}</span>
                        </div>
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                          <span className="text-xs font-bold text-cyan-400">#{actualIndex + 1}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{flavor.name}</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{flavor.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-cyan-400 font-semibold">{flavor.puffs} Puffs</span>
                          {selectedFlavor === actualIndex && (
                            <div className="flex items-center space-x-1 text-cyan-400">
                              <Star size={14} fill="currentColor" />
                              <span className="text-xs font-semibold">Selected</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Flavor Summary */}
            <div className="mt-12 text-center">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Currently Selected: <span className="text-cyan-400">{podFlavors[selectedFlavor].name}</span>
                </h3>
                <p className="text-gray-300 mb-4">{podFlavors[selectedFlavor].description}</p>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Strength</p>
                    <p className="text-cyan-400 font-bold">{podFlavors[selectedFlavor].strength}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Puffs</p>
                    <p className="text-cyan-400 font-bold">{podFlavors[selectedFlavor].puffs}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/30 via-black to-cyan-900/30 cyber-grid">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the <span className="text-cyan-400">Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of satisfied users who have already upgraded to X-Forge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                Find Retailers
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default XForgeProduct;
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
      name: "Prestige Charcoal",
      color: "bg-gradient-to-br from-[#292929] to-[#1a1a1a]",
      accent: "from-[#02ECCF] to-[#02ECCF]",
      image: "https://images.unsplash.com/photo-1607721296229-d13fdc20fb2e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Modern Silver",
      color: "bg-gradient-to-br from-[#D6D6D6] to-[#A8A8A8]",
      accent: "from-[#02ECCF] to-[#02ECCF]",
      image: "https://images.unsplash.com/photo-1582625165235-c4f5c6b96a1b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Cyber Aqua",
      color: "bg-gradient-to-br from-[#02ECCF] to-[#00B8A9]",
      accent: "from-[#292929] to-[#1a1a1a]",
      image: "https://images.unsplash.com/photo-1607721296229-d13fdc20fb2e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const podFlavors = [
    {
      name: "Arctic Mint",
      description: "A refreshing blast of cool mint with icy undertones that awakens your senses",
      color: "from-[#02ECCF] to-blue-400",
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
          <div className="min-h-screen bg-[#292929] text-[#D6D6D6] font-montserrat-regular">
      <Header alwaysShowBg={true} />
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(2, 236, 207, 0.3); }
            50% { box-shadow: 0 0 40px rgba(2, 236, 207, 0.6); }
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
              linear-gradient(rgba(2, 236, 207, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2, 236, 207, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }
        `}
      </style>
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-[#02ECCF]/0 to-[#292929]/70"></div>
          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Product Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-[#02ECCF] text-[#292929] rounded-full text-sm font-bold tracking-wider">
                    PREMIUM TECHNOLOGY
                  </div>
                  <h1 className="text-6xl md:text-8xl font-montserrat-bold text-[#02ECCF]">
                    FORGE
                  </h1>
                  <p className="text-2xl font-montserrat-light text-[#A8A8A8]">
                    Where Innovation Meets Elegance
                  </p>
                </div>

                <p className="text-lg text-[#A8A8A8] leading-relaxed max-w-lg font-montserrat-regular">
                  Experience the pinnacle of craftsmanship with X-Forge. Engineered with precision, 
                  designed for versatility, and crafted for the ultimate premium experience.
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#D6D6D6]/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#02ECCF] rounded-lg flex items-center justify-center">
                          <spec.icon size={16} className="text-[#292929]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#A8A8A8]">{spec.label}</p>
                          <p className="font-semibold text-[#D6D6D6]">{spec.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* User Manual Button */}
                <button className="inline-flex items-center space-x-3 bg-[#02ECCF] text-[#292929] px-8 py-4 rounded-lg font-montserrat-bold hover:shadow-lg hover:shadow-[#02ECCF]/50 transition-all duration-300 glow-animation">
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
                <div className="absolute inset-0 bg-gradient-radial from-[#02ECCF]/10 to-transparent blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#02ECCF]/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Colors Section */}
        <section className="py-20 bg-gradient-to-b from-[#292929] to-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat-bold text-[#D6D6D6] mb-4">
                Choose Your <span className="text-[#02ECCF]">Prestige</span>
              </h2>
              <p className="text-[#A8A8A8] text-lg font-montserrat-regular">Three distinct finishes for the discerning connoisseur</p>
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
                  <div className={`bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                    selectedColor === index ? 'border-[#02ECCF] shadow-lg shadow-[#02ECCF]/25' : 'border-[#A8A8A8]/30 hover:border-[#02ECCF]/50'
                  }`}>
                    <div className="relative mb-6">
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className={`absolute inset-0 ${color.color} opacity-20 rounded-lg`}></div>
                    </div>
                    <h3 className="text-xl font-montserrat-bold text-[#D6D6D6] mb-2">{color.name}</h3>
                    <div className={`w-full h-3 rounded-full ${color.color} mb-4`}></div>
                    {selectedColor === index && (
                      <div className="flex items-center space-x-2 text-[#02ECCF] [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">
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
        <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#292929]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat-bold text-[#D6D6D6] mb-4">
                Versatile <span className="text-[#02ECCF]">Experiences</span>
              </h2>
              <p className="text-[#A8A8A8] text-lg mb-8 font-montserrat-regular">Crafted for every occasion and preference</p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-[#02ECCF] font-semibold [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">
                  {currentFlavorIndex + 1}-{Math.min(currentFlavorIndex + 4, podFlavors.length)} of {podFlavors.length} flavors
                </span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mb-12">
              <button
                onClick={prevFlavors}
                className="w-12 h-12 bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#D6D6D6]/20 rounded-full flex items-center justify-center text-[#02ECCF] hover:bg-[#02ECCF]/20 transition-all duration-300 mr-6"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(podFlavors.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFlavorIndex(index * 4)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentFlavorIndex / 4) === index ? 'bg-[#02ECCF]' : 'bg-[#A8A8A8]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextFlavors}
                className="w-12 h-12 bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#D6D6D6]/20 rounded-full flex items-center justify-center text-[#02ECCF] hover:bg-[#02ECCF]/20 transition-all duration-300 ml-6"
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
                    <div className={`bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedFlavor === actualIndex ? 'border-[#02ECCF] shadow-lg shadow-[#02ECCF]/25' : 'border-[#A8A8A8]/30 hover:border-[#02ECCF]/50'
                    }`}>
                      <div className="relative h-48">
                        <img
                          src={flavor.image}
                          alt={flavor.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${flavor.color} opacity-30`}></div>
                        <div className="absolute top-4 right-4 bg-[#292929]/70 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-bold text-[#D6D6D6]">{flavor.strength}</span>
                        </div>
                        <div className="absolute top-4 left-4 bg-[#292929]/70 backdrop-blur-sm rounded-full px-2 py-1">
                          <span className="text-xs font-bold text-[#02ECCF] [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">#{actualIndex + 1}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-montserrat-bold text-[#D6D6D6] mb-2">{flavor.name}</h3>
                        <p className="text-[#A8A8A8] text-sm mb-4 leading-relaxed font-montserrat-regular">{flavor.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-[#02ECCF] font-semibold [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">{flavor.puffs} Puffs</span>
                          {selectedFlavor === actualIndex && (
                            <div className="flex items-center space-x-1 text-[#02ECCF]">
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
              <div className="bg-[#1a1a1a]/30 backdrop-blur-sm border border-[#D6D6D6]/20 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-2xl font-montserrat-bold text-[#D6D6D6] mb-4">
                  Currently Selected: <span className="text-[#02ECCF]">{podFlavors[selectedFlavor].name}</span>
                </h3>
                <p className="text-[#A8A8A8] mb-4 font-montserrat-regular">{podFlavors[selectedFlavor].description}</p>
                <div className="flex justify-center space-x-8">
                                      <div className="text-center">
                      <p className="text-[#A8A8A8] text-sm">Strength</p>
                      <p className="text-[#02ECCF] font-bold [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">{podFlavors[selectedFlavor].strength}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#A8A8A8] text-sm">Puffs</p>
                      <p className="text-[#02ECCF] font-bold [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">{podFlavors[selectedFlavor].puffs}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#02ECCF]/30 via-[#292929] to-[#02ECCF]/30 cyber-grid">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat-bold text-[#D6D6D6] mb-6">
              Ready to Experience <span className="text-[#02ECCF]">Prestige</span>?
            </h2>
            <p className="text-xl text-[#A8A8A8] mb-10 leading-relaxed font-montserrat-regular">
              Join discerning connoisseurs who have already elevated their experience with X-Forge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#02ECCF] text-[#292929] rounded-lg font-montserrat-bold hover:shadow-lg hover:shadow-[#02ECCF]/50 transition-all duration-300">
                Find Retailers
              </button>
              <button className="px-8 py-4 border-2 border-[#02ECCF] text-[#02ECCF] rounded-lg font-montserrat-bold hover:bg-[#02ECCF] hover:text-[#292929] transition-all duration-300">
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
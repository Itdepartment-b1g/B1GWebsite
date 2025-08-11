import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Zap, Battery, Droplets, Shield, Star, ChevronLeft, ChevronRight, Sparkles, Cpu, Shuffle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import xforgeImage from "@/assets/image.png";
import graphiteGrayImage from "@/assets/GraphiteGray.png";
import obsidianBlackImage from "@/assets/ObsidianBlack.png";
import vividCyanImage from "@/assets/VividCyan.png";
import forgeLogo from "@/assets/ForgeLogoCyan.png";

const XForgeProduct = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  // Keyboard navigation for the showcase (Left/Right arrows)
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setSelectedColor((prev) => (prev + 2) % 3);
      } else if (event.key === 'ArrowRight') {
        setSelectedColor((prev) => (prev + 1) % 3);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Parallax effect for grid background with smooth easing
  useEffect(() => {
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const rafId = { id: 0 } as { id: number };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.08);
      current.y = lerp(current.y, target.y, 0.08);
      document.documentElement.style.setProperty('--grid-x', `${current.x.toFixed(2)}px`);
      document.documentElement.style.setProperty('--grid-y', `${current.y.toFixed(2)}px`);
      rafId.id = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      const scrollY = window.scrollY || 0;
      const scrollX = window.scrollX || 0;
      // Smaller multipliers for a subtle effect; tuned to feel smooth
      target.x = scrollX * 0.08;
      target.y = scrollY * 0.12;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    rafId.id = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.id);
    };
  }, []);

  const deviceColors = [
    {
      name: "Obsidian Black",
      color: "bg-gradient-to-br from-[#292929] to-[#1a1a1a]",
      accent: "from-[#02ECCF] to-[#02ECCF]",
      image: obsidianBlackImage
    },
    {
      name: "Graphite Gray",
      color: "bg-gradient-to-br from-[#D6D6D6] to-[#A8A8A8]",
      accent: "from-[#02ECCF] to-[#02ECCF]",
      image: graphiteGrayImage
    },
    {
      name: "Vivid Cyan",
      color: "bg-gradient-to-br from-[#02ECCF] to-[#00B8A9]",
      accent: "from-[#292929] to-[#1a1a1a]",
      image: vividCyanImage
    }
  ];

  const podFlavors = [
    {
      name: "Arctic Mint",
      description: "A refreshing blast of cool mint with icy undertones that awakens your senses",
      color: "from-[#02ECCF] to-blue-400",
      strength: "50mg",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Neon Berry",
      description: "Electric fusion of mixed berries with a vibrant, tangy finish",
      color: "from-purple-400 to-pink-500",
      strength: "35mg",
      image: "https://images.unsplash.com/photo-1599534351692-e4da5d46e8c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Digital Vanilla",
      description: "Smooth vanilla cream with futuristic notes of sophistication",
      color: "from-amber-300 to-orange-400",
      strength: "25mg",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Quantum Grape",
      description: "Deep grape essence with molecular precision and lasting impact",
      color: "from-violet-400 to-purple-600",
      strength: "50mg",
      image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Cyber Mango",
      description: "Tropical mango enhanced with futuristic sweetness and exotic appeal",
      color: "from-yellow-400 to-orange-500",
      strength: "35mg",
      image: "https://images.unsplash.com/photo-1605027990121-cbae9d0e0ce7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Electric Strawberry",
      description: "Charged strawberry flavor with high-voltage intensity and sweetness",
      color: "from-red-400 to-pink-500",
      strength: "50mg",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Matrix Melon",
      description: "Code-cracked watermelon with refreshing digital matrix flavor profile",
      color: "from-green-400 to-emerald-500",
      strength: "25mg",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Neural Cherry",
      description: "Brain-stimulating cherry flavor with neural network complexity",
      color: "from-red-500 to-rose-600",
      strength: "50mg", 
      image: "https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hologram Apple",
      description: "3D apple experience with holographic taste dimensions and crisp finish",
      color: "from-green-500 to-lime-400",
      strength: "35mg",   
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Plasma Peach",
      description: "High-energy peach flavor charged with plasma-level intensity",
      color: "from-orange-400 to-yellow-500",
      strength: "25mg",
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
          <div className="min-h-screen bg-[#F4F6F8] text-[#292929] font-montserrat-regular">
      <Header alwaysShowBg={true} />
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 25px rgba(2, 236, 207, 0.4); }
            50% { box-shadow: 0 0 50px rgba(2, 236, 207, 0.8); }
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
            position: relative;
            background-image: 
              radial-gradient(circle at 80% 100%, rgba(2, 236, 207, 0.10), transparent 40%),
              linear-gradient(rgba(2, 236, 207, 0.22) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2, 236, 207, 0.22) 1px, transparent 1px);
            background-size: 100% 100%, 50px 50px, 50px 50px;
            background-position: left top, calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px)), calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px));
            background-blend-mode: screen;
            transition: background-position 200ms ease-out;
          }
          .cyber-grid.grid-only {
            background-image: 
              linear-gradient(rgba(2, 236, 207, 0.22) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2, 236, 207, 0.22) 1px, transparent 1px);
            background-size: 50px 50px, 50px 50px;
            background-position: calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px)), calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px));
            transition: background-position 200ms ease-out;
          }
        `}
      </style>
      
      <main className="pt-24">

          {/* Hero Section */}
       <section className="relative py-24 overflow-hidden cyber-grid grid-only">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F4F6F8]/60"></div>
          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Product Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <img
                    src={forgeLogo}
                    alt="Forge Logo"
                    className="w-56 md:w-72 h-auto drop-shadow-2xl drop-shadow-[#02ECCF]/40"
                  />
                  <p className="text-2xl font-montserrat-light text-[#666666]">
                    Where Innovation Meets Elegance
                  </p>
                </div>

                <p className="text-lg text-[#666666] leading-relaxed max-w-lg font-montserrat-regular">
                  Experience the pinnacle of craftsmanship with X-Forge. Engineered with precision, 
                  designed for versatility, and crafted for the ultimate premium experience.
                </p>

                
              </div>

              {/* Product Image */}
              <div className="relative">
                <div className="float-animation">
                  <img
                    src={xforgeImage}
                    alt="X-Forge Device"
                    className="w-full max-w-md mx-auto drop-shadow-2xl filter brightness-110 contrast-110 object-contain"
                  />
                </div>
                {/* Glowing effects */}
                <div className="absolute inset-0 bg-gradient-radial from-[#02ECCF]/20 to-transparent blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#02ECCF]/15 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Showcase Fan Section */}
        <section className="relative pt-24 pb-8 md:pt-20 md:pb-10 overflow-hidden cyber-grid grid-only text-center min-h-[calc(100vh-6rem)]">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent"></div>
          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            {/* Forge logo placed within the same section to inherit background */}
            <div className="mb-8 md:mb-10 lg:mb-12 flex justify-center">
              <img
                src={forgeLogo}
                alt="Forge Logo"
                className="w-72 md:w-96 h-auto drop-shadow-2xl drop-shadow-[#02ECCF]/40 filter brightness-110 contrast-110"
              />
            </div>
            <div className="relative max-w-7xl mx-auto min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-16rem)]">
              {/* Center piece */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 md:top-6 z-20">
                <div
                  role="button"
                  aria-pressed={selectedColor === 0}
                  onClick={() => setSelectedColor(selectedColor === 0 ? -1 : 0)}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    selectedColor === 0
                      ? 'scale-125 md:scale-150 z-30'
                      : 'hover:scale-110'
                  }`}
                >
                  <img
                    src={obsidianBlackImage}
                    alt="Obsidian Black"
                    className="w-56 h-56 object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                  />
                  {selectedColor === 0 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#02ECCF] text-[#292929] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Obsidian Black
                    </div>
                  )}
                </div>
              </div>

              {/* Fan row */}
              <div className="flex items-end justify-center gap-8 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12 pt-20 md:pt-28">
                {/* Left */}
                <div
                  role="button"
                  aria-pressed={selectedColor === 1}
                  onClick={() => setSelectedColor(selectedColor === 1 ? -1 : 1)}
                  className={`relative group cursor-pointer transition-all duration-500 will-change-transform ${
                    selectedColor === 1
                      ? 'md:rotate-0 scale-125 md:scale-150 z-30'
                      : 'md:-rotate-12 hover:scale-110'
                  }`}
                >
                  <img
                    src={graphiteGrayImage}
                    alt="Graphite Gray"
                    className="w-52 h-52 object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                  />
                  {selectedColor === 1 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/80 text-[#292929] px-3 py-1 rounded-full text-xs font-bold shadow">
                      Graphite Gray
                    </div>
                  )}
                </div>

                {/* Right */}
                <div
                  role="button"
                  aria-pressed={selectedColor === 2}
                  onClick={() => setSelectedColor(selectedColor === 2 ? -1 : 2)}
                  className={`relative group cursor-pointer transition-all duration-500 will-change-transform ${
                    selectedColor === 2
                      ? 'md:rotate-0 scale-125 md:scale-150 z-30'
                      : 'md:rotate-12 hover:scale-110'
                  }`}
                >
                  <img
                    src={vividCyanImage}
                    alt="Vivid Cyan"
                    className="w-52 h-52 object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                  />
                  {selectedColor === 2 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/80 text-[#292929] px-3 py-1 rounded-full text-xs font-bold shadow">
                      Vivid Cyan
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative arcs */}
              <svg className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-[28rem] h-16 opacity-80 hidden md:block" viewBox="0 0 448 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 48C96 16 352 16 424 48" stroke="#02ECCF" strokeWidth="2" strokeOpacity="0.8" />
                <path d="M64 56C144 28 304 28 384 56" stroke="#02ECCF" strokeWidth="1.5" strokeOpacity="0.5" />
              </svg>

              {/* Controls (dots + manual) anchored to bottom inside wrapper */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    aria-label="Obsidian Black"
                    onClick={() => setSelectedColor(selectedColor === 0 ? -1 : 0)}
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#292929] ring-2 transition-all duration-300 shadow-[0_0_14px_rgba(2,236,207,0.35)] ${
                      selectedColor === 0 ? 'scale-125 ring-[#02ECCF]' : 'ring-[#292929]/20 hover:scale-110'
                    }`}
                  />
                  <button
                    type="button"
                    aria-label="Graphite Gray"
                    onClick={() => setSelectedColor(selectedColor === 1 ? -1 : 1)}
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#A8A8A8] ring-2 transition-all duration-300 shadow-[0_0_14px_rgba(2,236,207,0.25)] ${
                      selectedColor === 1 ? 'scale-125 ring-[#02ECCF]' : 'ring-[#292929]/20 hover:scale-110'
                    }`}
                  />
                  <button
                    type="button"
                    aria-label="Vivid Cyan"
                    onClick={() => setSelectedColor(selectedColor === 2 ? -1 : 2)}
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#02ECCF] ring-2 transition-all duration-300 shadow-[0_0_16px_rgba(2,236,207,0.45)] ${
                      selectedColor === 2 ? 'scale-125 ring-[#02ECCF]' : 'ring-[#292929]/20 hover:scale-110'
                    }`}
                  />
                </div>
                <a
                  href="/X FORGE POD MANUAL(Not final. Missing shelf life only)_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View X-Forge User Manual"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#02ECCF] text-[#292929] font-montserrat-bold shadow shadow-[#02ECCF]/30 hover:shadow-[#02ECCF]/50 transition-all duration-300"
                >
                  <Download size={16} />
                  <span>View Manual</span>
                </a>
              </div>

              {/* Side feature pills (desktop) positioned at four corners */}
              <div className="hidden md:block">
                {/* Top-left */}
                <div className="absolute top-8 left-10 md:top-12 md:left-16">
                  <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Battery size={16} /></div>
                    <span className="text-sm font-semibold text-[#292929]">650mAh Battery</span>
                  </div>
                </div>
                {/* Top-right */}
                <div className="absolute top-8 right-10 md:top-12 md:right-16">
                  <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Zap size={16} /></div>
                    <span className="text-sm font-semibold text-[#292929]">15W Max Output</span>
                  </div>
                </div>
                {/* Bottom-left */}
                <div className="absolute bottom-8 left-10 md:bottom-12 md:left-16">
                  <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Droplets size={16} /></div>
                    <span className="text-sm font-semibold text-[#292929]">2ml Pod Capacity</span>
                  </div>
                </div>
                {/* Bottom-right */}
                <div className="absolute bottom-8 right-10 md:bottom-12 md:right-16">
                  <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Shield size={16} /></div>
                    <span className="text-sm font-semibold text-[#292929]">Short Circuit Protection</span>
                  </div>
                </div>
              </div>
              {/* Side feature pills (mobile) */}
              <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
                <div className="flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10">
                  <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Battery size={14} /></div>
                  <span className="text-xs font-semibold text-[#292929]">650mAh Battery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10">
                  <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Zap size={14} /></div>
                  <span className="text-xs font-semibold text-[#292929]">15W Max Output</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10">
                  <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Droplets size={14} /></div>
                  <span className="text-xs font-semibold text-[#292929]">2ml Pod</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10">
                  <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center"><Shield size={14} /></div>
                  <span className="text-xs font-semibold text-[#292929]">Protection</span>
                </div>
              </div>
            </div>

            
          </div>
        </section>

      

        {/* Device Colors Section */}
        <section className="py-20 bg-gradient-to-b from-[#D6D6D6] to-[#C0C0C0]">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-montserrat-bold text-[#292929] mb-4">
                Choose Your <span className="text-[#02ECCF]">Prestige</span>
              </h2>
                  <p className="text-[#666666] text-lg font-montserrat-regular">Three distinct finishes for the discerning connoisseur</p>
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
                  <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                    selectedColor === index ? 'border-[#02ECCF] shadow-lg shadow-[#02ECCF]/40' : 'border-[#292929]/30 hover:border-[#02ECCF]/60'
                  }`}>
                    <div className="relative mb-6">
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-48 object-contain rounded-lg"
                      />
                      <div className={`absolute inset-0 ${color.color} opacity-20 rounded-lg`}></div>
                    </div>
                    <h3 className="text-xl font-montserrat-bold text-[#292929] mb-2">{color.name}</h3>
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
        <section className="py-20 bg-gradient-to-b from-[#C0C0C0] to-[#D6D6D6]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-montserrat-bold text-[#292929] mb-4">
                Versatile <span className="text-[#02ECCF]">Experiences</span>
              </h2>
                  <p className="text-[#666666] text-lg mb-8 font-montserrat-regular">Crafted for every occasion and preference</p>
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
                className="w-12 h-12 bg-white/70 backdrop-blur-sm border border-[#292929]/20 rounded-full flex items-center justify-center text-[#02ECCF] hover:bg-[#02ECCF]/20 transition-all duration-300 mr-6"
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
                className="w-12 h-12 bg-white/70 backdrop-blur-sm border border-[#292929]/20 rounded-full flex items-center justify-center text-[#02ECCF] hover:bg-[#02ECCF]/20 transition-all duration-300 ml-6"
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
                                      <div className={`bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedFlavor === actualIndex ? 'border-[#02ECCF] shadow-lg shadow-[#02ECCF]/40' : 'border-[#292929]/30 hover:border-[#02ECCF]/60'
                    }`}>
                      <div className="relative h-48">
                        <img
                          src={flavor.image}
                          alt={flavor.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${flavor.color} opacity-30`}></div>
                      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-bold text-[#292929]">{flavor.strength}</span>
                        </div>
                      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1">
                          <span className="text-xs font-bold text-[#02ECCF] [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">#{actualIndex + 1}</span>
                        </div>
                      </div>
                      <div className="p-6">
                      <h3 className="text-xl font-montserrat-bold text-[#292929] mb-2">{flavor.name}</h3>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed font-montserrat-regular">{flavor.description}</p>
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
              <div className="bg-white/70 backdrop-blur-sm border border-[#292929]/20 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-2xl font-montserrat-bold text-[#292929] mb-4">
                  Currently Selected: <span className="text-[#02ECCF]">{podFlavors[selectedFlavor].name}</span>
                </h3>
                <p className="text-[#666666] mb-4 font-montserrat-regular">{podFlavors[selectedFlavor].description}</p>
                <div className="flex justify-center space-x-8">
                                      <div className="text-center">
                      <p className="text-[#666666] text-sm">Strength</p>
                      <p className="text-[#02ECCF] font-bold [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">{podFlavors[selectedFlavor].strength}</p>
                    </div>
                    
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#02ECCF]/50 via-[#D6D6D6] to-[#02ECCF]/50 cyber-grid">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat-bold text-[#292929] mb-6">
              Ready to Experience <span className="text-[#02ECCF]">Prestige</span>?
            </h2>
            <p className="text-xl text-[#666666] mb-10 leading-relaxed font-montserrat-regular">
              Join discerning connoisseurs who have already elevated their experience with X-Forge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <button className="px-8 py-4 bg-[#02ECCF] text-[#292929] rounded-lg font-montserrat-bold hover:shadow-lg hover:shadow-[#02ECCF]/70 transition-all duration-300 shadow-lg shadow-[#02ECCF]/25">
                Find Retailers
              </button>
               <button className="px-8 py-4 border-2 border-[#02ECCF] text-[#02ECCF] rounded-lg font-montserrat-bold hover:bg-[#02ECCF] hover:text-[#292929] transition-all duration-300 hover:shadow-lg hover:shadow-[#02ECCF]/50">
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
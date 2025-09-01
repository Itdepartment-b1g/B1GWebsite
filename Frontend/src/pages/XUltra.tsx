import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const XUltra = () => {
  const [currentFlavor, setCurrentFlavor] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const pauseRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  // 8 Flavors with short descriptions (added `image` placeholder for each)
  const flavors = [
    { name: "Summer Dew", color: "#d31f38", desc: "A soft, juicy blend of ripe berries with a cool finish.", image: "https://www.xvape.cc/upload/images/2024/12/20/7137155055.png" },
    { name: "Violet Stream", color: "#6305a3", desc: "Crisp, clean mint for an ultra-refreshing inhale.", image: "https://www.xvape.cc/upload/images/2024/12/20/7136155029.png" },
    { name: "Purple Twilight", color: "#b621b3", desc: "Sweet, sun-ripened mango with smooth tropical notes.", image: "https://www.xvape.cc/upload/images/2024/12/20/7135154952.png" },
    { name: "Morning Garden", color: "#ff36a6", desc: "Warm and familiar tobacco wrapped in velvety undertones.", image: "https://www.xvape.cc/upload/images/2024/12/20/7134154925.png" },
    { name: "Cold Breeze", color: "#26933a", desc: "Cool, salty breeze meets subtle sweetness.", image: "https://www.xvape.cc/upload/images/2024/12/20/7133154805.png" },
    { name: "Cloud Spring", color: "#edc5cd", desc: "Bright cherry with a juicy, nostalgic pop.", image: "https://www.xvape.cc/upload/images/2024/12/20/7132154726.png" },
    { name: "Wild Fragrance", color: "#d66000", desc: "Creamy vanilla layered over delicate bakery notes.", image: "https://www.xvape.cc/upload/images/2024/12/20/7131154611.png" },
    { name: "Bubble Dream", color: "#9dd9b2", desc: "Bold, dark blend for a deep, sophisticated palate.", image: "https://www.xvape.cc/upload/images/2024/12/20/7130154454.png" }
  ];

  // 4 Device Colors (added `image` placeholder for each)
  const deviceColors = [
    { name: "Metallic Silver", color: "#e6e6e4", image: "/src/assets/Ultra/MetallicSilver.png" },
    { name: "Metallic Gray", color: "#5c5a58", image: "/src/assets/Ultra/MetallicGray.png" },
    { name: "Metallic Rose Gold", color: "#dfadae", image: "/src/assets/Ultra/MetallicRoseGold.png" },
    { name: "Metallic Blue", color: "#6771d2", image: "/src/assets/Ultra/MetallicBlue.png" }
  ];

  // Auto-advance flavors and device colors (pauses on user interaction)
  useEffect(() => {
    const tick = () => {
      if (!pauseRef.current) {
        setCurrentFlavor((prev) => (prev + 1) % flavors.length);
        setCurrentColor((prev) => (prev + 1) % deviceColors.length);
      }
    };
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, [flavors.length, deviceColors.length]);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const startInactivityTimer = useCallback(() => {
    clearResumeTimer();
    // resume auto-advance after 5s of no user interaction
    resumeTimerRef.current = window.setTimeout(() => {
      pauseRef.current = false;
      resumeTimerRef.current = null;
    }, 5000);
  }, [clearResumeTimer]);

  const userInteracted = useCallback(() => {
    pauseRef.current = true;
    startInactivityTimer();
  }, [startInactivityTimer]);

  // keyboard navigation: defined after callbacks
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { userInteracted(); setCurrentFlavor((f) => (f - 1 + flavors.length) % flavors.length); }
      if (e.key === 'ArrowRight') { userInteracted(); setCurrentFlavor((f) => (f + 1) % flavors.length); }
      if (e.key === 'ArrowUp') { userInteracted(); setCurrentColor((c) => (c - 1 + deviceColors.length) % deviceColors.length); }
      if (e.key === 'ArrowDown') { userInteracted(); setCurrentColor((c) => (c + 1) % deviceColors.length); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flavors.length, deviceColors.length, userInteracted]);
  
  // cleanup resume timer on unmount
  useEffect(() => {
    return () => clearResumeTimer();
  }, [clearResumeTimer]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header alwaysShowBg={true} />

      {/* Hero */}
      <section className="relative pt-36 md:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-cyan-50 opacity-60 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-8xl md:text-9xl font-extralight tracking-tight text-black leading-tight">ULTRA</h1>
            <p className="text-lg text-gray-500 max-w-xl">
              Minimal. Pure. Essential. Engineered for a premium experience with bold flavors and a refined, pocket-ready device.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm rounded-md shadow hover:opacity-90 transition">
                ORDER NOW <ArrowRight size={14} />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-sm rounded-md hover:bg-gray-50 transition">
                LEARN MORE
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <FeatureCard number="850" label="mAh" />
              <FeatureCard number="10" label="ML" />
              <FeatureCard number="8" label="FLAVORS" />
              <FeatureCard number="4" label="COLORS" />
            </div>
          </div>

          {/* Live preview */}
          <div className="z-10 flex items-center justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl shadow-2xl transform transition-all duration-500 overflow-hidden"
                 style={{ background: deviceColors[currentColor].color }}
                 aria-hidden>

              {/* device image (center) */}
              <img
                src={deviceColors[currentColor].image}
                alt={`${deviceColors[currentColor].name} device`}
                className="absolute inset-0 m-auto w-40 h-64 md:w-48 md:h-80 object-contain transition-opacity duration-500 pointer-events-none"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
              />

              {/* flavor image overlay (subtle) */}
              <img
                src={flavors[currentFlavor].image}
                alt={`${flavors[currentFlavor].name} accent`}
                className="absolute right-0 bottom-0 w-28 h-28 md:w-36 md:h-36 object-cover rounded-full transform translate-x-6 translate-y-6 opacity-90 shadow-lg"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
              />

              {/* subtle mouthpiece */}
              <div className="absolute right-6 top-6 w-10 h-4 rounded-full bg-black/10" />

              {/* product silhouette lines */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Flavors section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-sm tracking-widest text-gray-400 mb-4">FLAVORS</h2>
            <div className="relative inline-block">
              <h3 className="text-5xl md:text-6xl font-extralight text-black mb-4 animate-fade">
                <span className="inline-block transition-transform duration-500" key={flavors[currentFlavor].name}>
                  {flavors[currentFlavor].name}
                </span>
              </h3>
              <div className="mx-auto w-40 md:w-64 overflow-hidden rounded-lg transition-all duration-500 shadow-sm bg-white/5">
                <img
                  src={flavors[currentFlavor].image}
                  alt={`${flavors[currentFlavor].name} visual`}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: 220 }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                />
              </div>
            </div>

            <p className="mt-6 text-gray-500 max-w-2xl mx-auto">{flavors[currentFlavor].desc}</p>
          </div>

          {/* Flavor dots */}
          <div className="flex justify-center gap-4 mb-8"
               onMouseEnter={() => userInteracted()}
               onMouseLeave={() => startInactivityTimer()}>
            {flavors.map((flavor, index) => (
              <button
                key={index}
                onClick={() => { userInteracted(); setCurrentFlavor(index); }}
                aria-label={`Select flavor ${flavor.name}`}
                className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2` +
                  (index === currentFlavor ? ' scale-150 ring-2 ring-black' : ' opacity-40 hover:opacity-80')}
                style={{ backgroundColor: flavor.color }}
              />
            ))}
          </div>

          {/* flavor carousel grid for quick jump */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {flavors.map((flavor, index) => (
              <button
                key={index}
                onClick={() => { userInteracted(); setCurrentFlavor(index); }}
                className={`p-3 rounded-lg text-left hover:shadow-lg transition-shadow flex items-center gap-3 ${index === currentFlavor ? 'ring-2 ring-offset-2 ring-black' : 'bg-white'}`}>
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                />
                <div>
                  <div className="text-sm font-medium">{flavor.name}</div>
                  <div className="text-xs text-gray-400">Tap to preview</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Device Colors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-8">
            <h2 className="text-sm tracking-widest text-gray-400 mb-2">DEVICE</h2>
            <div className="text-3xl md:text-5xl font-extralight text-black mb-4">{deviceColors[currentColor].name}</div>
            <div className="w-1 h-12 mx-auto rounded-full transition-colors duration-500"
                 style={{ backgroundColor: deviceColors[currentColor].color }} />
          </div>

          <div className="flex justify-center gap-6">
            {deviceColors.map((color, index) => (
              <button
                key={index}
                onClick={() => { userInteracted(); setCurrentColor(index); }}
                aria-label={`Select device color ${color.name}`}
                className={`w-8 h-8 rounded-full border-2 transition-transform duration-300 focus:outline-none ${index === currentColor ? 'ring-2 ring-black scale-110' : 'border-gray-200 hover:scale-105'}`}
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <div className="w-72 h-96 rounded-3xl shadow-xl relative overflow-hidden"
                 style={{ background: `linear-gradient(180deg, ${deviceColors[currentColor].color}, ${deviceColors[currentColor].color}80)` }}>
              <img
                src={deviceColors[currentColor].image}
                alt={`${deviceColors[currentColor].name} device preview`}
                className="absolute inset-0 m-auto w-48 h-80 object-contain transition-opacity duration-500"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
              />
              
            </div>
           </div>
        </div>
      </section>
  

      <Footer />
    </div>
  );
};

export default XUltra;

// Small presentational component for spec/feature cards
function FeatureCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-100 text-center shadow-sm">
      <div className="text-2xl md:text-3xl font-extralight text-black">{number}</div>
      <div className="text-xs tracking-widest text-gray-400 mt-1">{label}</div>
    </div>
  );
}
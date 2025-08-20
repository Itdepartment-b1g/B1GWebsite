import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Download,
  Zap,
  Battery,
  Droplets,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  Shuffle,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import xforgeImage from "@/assets/image.png";
import graphiteGrayImage from "@/assets/GraphiteGray.png";
import obsidianBlackImage from "@/assets/ObsidianBlack.png";
import vividCyanImage from "@/assets/VividCyan.png";
import forgeLogo from "@/assets/ForgeLogoCyan.png";
import B1GBlack from "@/assets/Forge/B1GBlack.png";
import B1GBlue from "@/assets/Forge/B1GBlue.png";
import B1GFrost from "@/assets/Forge/B1GFrost.png";
import B1GHeart from "@/assets/Forge/B1GHeart.png";
import B1GLush from "@/assets/Forge/B1GLush.png";
import B1GPurple from "@/assets/Forge/B1GPurple.png";
import B1GRizz from "@/assets/Forge/B1GRizz.png";
import B1GShirota from "@/assets/Forge/B1GShirota.png";
import B1GSparkle from "@/assets/Forge/B1GSparkle.png";
import B1GRed from "@/assets/Forge/B1GRed.png";

const XForgeProduct = () => {
  const [selectedColor, setSelectedColor] = useState(-1);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const [showcaseInView, setShowcaseInView] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroInView, setHeroInView] = useState(false);
  const flavorsRef = useRef<HTMLDivElement | null>(null);
  const [flavorsInView, setFlavorsInView] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const flavorsForSection = [
    {
      name: "B1G Sparkle",
      description:
        "A bright, fizzy explosion of zest and zestful energy that tingles with excitement.",
      image: B1GSparkle,
    },
    {
      name: "B1G Black",
      description:
        "A bold, intense sensation with a deep and slightly tart edge that lingers.",
      image: B1GBlack,
    },
    {
      name: "B1G Rizz",
      description:
        "A dynamic, zesty blend that brings together a vibrant symphony of tangy and sweet notes.",
      image: B1GRizz,
    },
    {
      name: "B1G Purple",
      description:
        "A rich, bold experience that evokes a sense of sophistication and indulgence.",
      image: B1GPurple,
    },
    {
      name: "B1G Shirota",
      description:
        "A smooth, creamy experience that's light and subtly refreshing with a hint of smoothness.",
      image: B1GShirota,
    },
    {
      name: "B1G Blue",
      description:
        "A calm, deep sensation that gently balances sweetness with a refreshing coolness.",
      image: B1GBlue,
    },
    {
      name: "B1G Frost",
      description:
        "A cool, invigorating breeze that awakens and refreshes with a crisp clarity.",
      image: B1GFrost,
    },
    {
      name: "B1G Lush",
      description:
        "A luxurious wave of delicate sweetness with an exotic touch.",
      image: B1GLush,
    },
    {
      name: "B1G Heart",
      description:
        "A playful and smooth sensation that captures a sweet, lively essence.",
      image: B1GHeart,
    },
    {
      name: "B1G Red",
      description:
        "A vibrant and refreshing burst of sweet, sun-kissed energy.",
      image: B1GRed,
    },
  ];

  // Keyboard navigation for the showcase (Left/Right arrows) and flavors
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        // For device colors showcase
        setSelectedColor((prev) => (prev + 2) % 3);
        // For flavors (only on mobile or when flavors section is in focus)
        if (window.innerWidth < 768 || flavorsInView) {
          setSelectedFlavor((prev) => prev === 0 ? flavorsForSection.length - 1 : prev - 1);
        }
      } else if (event.key === "ArrowRight") {
        // For device colors showcase
        setSelectedColor((prev) => (prev + 1) % 3);
        // For flavors (only on mobile or when flavors section is in focus)
        if (window.innerWidth < 768 || flavorsInView) {
          setSelectedFlavor((prev) => prev === flavorsForSection.length - 1 ? 0 : prev + 1);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [flavorsInView, flavorsForSection.length]);

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const normalized = hex.replace("#", "");
    const expanded =
      normalized.length === 3
        ? normalized
            .split("")
            .map((c) => c + c)
            .join("")
        : normalized;
    const bigint = parseInt(expanded, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const hexToRgba = (hex: string, alpha: number): string => {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const getFlavorTheme = (name: string): string => {
    const key = name.toLowerCase();
    if (key.includes("sparkle")) return "#FDE047";
    if (key.includes("black")) return "#000000";
    if (key.includes("rizz")) return "#EC4899";
    if (key.includes("purple")) return "#A78BFA";
    if (key.includes("shirota")) return "#FDE68A";
    if (key.includes("blue")) return "#60A5FA";
    if (key.includes("frost")) return "#67E8F9";
    if (key.includes("lush")) return "#34D399";
    if (key.includes("heart")) return "#FB7185";
    if (key.includes("red")) return "#F87171";
    return "#02ECCF";
  };

  // Smooth parallax for main grid overlay (AMZ-like smoothness)
  useEffect(() => {
    const element = gridRef.current;
    if (!element) return;

    let rafId = 0;
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.08);
      current.y = lerp(current.y, target.y, 0.08);
      // Use transform-based movement to avoid full-surface repaints
      element.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      const scrollY = window.scrollY || 0;
      const scrollX = window.scrollX || 0;
      target.x = scrollX * 0.08;
      target.y = scrollY * 0.12;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Observe the second section (showcase) for scroll-in animations
  useEffect(() => {
    const el = showcaseRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowcaseInView(entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Observe the first (hero) and third (flavors) sections
  useEffect(() => {
    const heroEl = heroRef.current;
    const flavorsEl = flavorsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroEl) setHeroInView(entry.isIntersecting);
          if (entry.target === flavorsEl)
            setFlavorsInView(entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );
    if (heroEl) observer.observe(heroEl);
    if (flavorsEl) observer.observe(flavorsEl);
    return () => observer.disconnect();
  }, []);

  const deviceColors = [
    {
      name: "Obsidian Black",
      color: "bg-gradient-to-br from-[#292929] to-[#1a1a1a]",
      accent: "from-[#02ECCF] to-[#02ECCF]",
      image: obsidianBlackImage,
    },
    {
      name: "Graphite Gray",
      color: "bg-gradient-to-br from-[#D6D6D6] to-[#A8A8A8]",
      accent: "from-[#02ECCF] to-[#02ECCF]",
      image: graphiteGrayImage,
    },
    {
      name: "Vivid Cyan",
      color: "bg-gradient-to-br from-[#02ECCF] to-[#00B8A9]",
      accent: "from-[#292929] to-[#1a1a1a]",
      image: vividCyanImage,
    },
  ];

  const specifications = [
    { icon: Battery, label: "Battery", value: "650mAh" },
    { icon: Zap, label: "Power Output", value: "15W Max" },
    { icon: Droplets, label: "Pod Capacity", value: "2ml" },
    { icon: Shield, label: "Protection", value: "Short Circuit" },
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
            background-size: 100% 100%, 80px 80px, 80px 80px;
            background-position: left top, calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px)), calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px));
            background-blend-mode: screen;
            transition: background-position 200ms ease-out;
          }
          .cyber-grid.grid-only {
            background-image: 
              linear-gradient(rgba(2, 236, 207, 0.22) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2, 236, 207, 0.22) 1px, transparent 1px);
            background-size: 80px 80px, 80px 80px;
            background-position: calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px)), calc(var(--grid-x, 0px)) calc(var(--grid-y, 0px));
            transition: background-position 200ms ease-out;
          }
        `}
      </style>

      <main className="relative pt-24 overflow-hidden">
        {/* Background grid overlay limited to main content */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
          <div
            ref={gridRef}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #02ECCF 1px, transparent 1px),
                linear-gradient(180deg, #02ECCF 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              backgroundPosition: "0px 0px, 0px 0px",
              willChange: "transform",
            }}
          ></div>
        </div>
        <div className="relative z-10">
          {/* Hero Section */}
          <section ref={heroRef} className="relative pt-24 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F4F6F8]/60"></div>
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Product Info */}
                <div
                  className={`space-y-8 transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
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
                    Experience the pinnacle of craftsmanship with X-Forge.
                    Engineered with precision, designed for versatility, and
                    crafted for the ultimate premium experience.
                  </p>
                </div>

                {/* Product Image */}
                <div
                  className={`relative transition-all duration-700 ${heroInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
                >
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
          <section
            ref={showcaseRef}
            className="relative pt-8 pb-4 md:pt-12 md:pb-6 overflow-hidden text-center min-h-[calc(100vh-6rem)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent"></div>
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
              {/* Forge logo placed within the same section to inherit background */}
              <div
                className={`mb-8 md:mb-10 lg:mb-12 flex justify-center transition-all duration-700 ${showcaseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <img
                  src={forgeLogo}
                  alt="Forge Logo"
                  className="w-72 md:w-96 h-auto drop-shadow-2xl drop-shadow-[#02ECCF]/40 filter brightness-110 contrast-110"
                />
              </div>
              <div className="relative max-w-7xl mx-auto min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-16rem)]">
                {/* Center piece */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-2 md:top-6 z-20 transition-all duration-700 ${showcaseInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"}`}
                >
                  <div
                    role="button"
                    aria-pressed={selectedColor === 0}
                    onClick={() =>
                      setSelectedColor(selectedColor === 0 ? -1 : 0)
                    }
                    className={`relative group cursor-pointer transition-all duration-500 ${
                      selectedColor === 0
                        ? "scale-125 md:scale-150 z-30"
                        : "hover:scale-110"
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
                    onClick={() =>
                      setSelectedColor(selectedColor === 1 ? -1 : 1)
                    }
                    className={`relative group cursor-pointer transition-all duration-700 will-change-transform ${
                      showcaseInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    } ${
                      selectedColor === 1
                        ? "md:rotate-0 scale-125 md:scale-150 z-30"
                        : "md:-rotate-12 hover:scale-110"
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
                    onClick={() =>
                      setSelectedColor(selectedColor === 2 ? -1 : 2)
                    }
                    className={`relative group cursor-pointer transition-all duration-700 will-change-transform ${
                      showcaseInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    } ${
                      selectedColor === 2
                        ? "md:rotate-0 scale-125 md:scale-150 z-30"
                        : "md:rotate-12 hover:scale-110"
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
                <svg
                  className={`pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-[28rem] h-16 opacity-80 hidden md:block transition-opacity duration-700 ${showcaseInView ? "opacity-80" : "opacity-0"}`}
                  viewBox="0 0 448 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 48C96 16 352 16 424 48"
                    stroke="#02ECCF"
                    strokeWidth="2"
                    strokeOpacity="0.8"
                  />
                  <path
                    d="M64 56C144 28 304 28 384 56"
                    stroke="#02ECCF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                </svg>

                {/* Controls (dots + manual) anchored to bottom inside wrapper */}
                <div
                  className={`absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 ${showcaseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      aria-label="Obsidian Black"
                      onClick={() =>
                        setSelectedColor(selectedColor === 0 ? -1 : 0)
                      }
                      className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#292929] ring-2 transition-all duration-300 shadow-[0_0_14px_rgba(2,236,207,0.35)] ${
                        selectedColor === 0
                          ? "scale-125 ring-[#02ECCF]"
                          : "ring-[#292929]/20 hover:scale-110"
                      }`}
                    />
                    <button
                      type="button"
                      aria-label="Graphite Gray"
                      onClick={() =>
                        setSelectedColor(selectedColor === 1 ? -1 : 1)
                      }
                      className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#A8A8A8] ring-2 transition-all duration-300 shadow-[0_0_14px_rgba(2,236,207,0.25)] ${
                        selectedColor === 1
                          ? "scale-125 ring-[#02ECCF]"
                          : "ring-[#292929]/20 hover:scale-110"
                      }`}
                    />
                    <button
                      type="button"
                      aria-label="Vivid Cyan"
                      onClick={() =>
                        setSelectedColor(selectedColor === 2 ? -1 : 2)
                      }
                      className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#02ECCF] ring-2 transition-all duration-300 shadow-[0_0_16px_rgba(2,236,207,0.45)] ${
                        selectedColor === 2
                          ? "scale-125 ring-[#02ECCF]"
                          : "ring-[#292929]/20 hover:scale-110"
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
                  <div
                    className={`absolute top-8 left-10 md:top-12 md:left-16 transition-all duration-700 ${
                      showcaseInView
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 -translate-x-3 -translate-y-3"
                    }`}
                    style={{ transitionDelay: "80ms" }}
                  >
                    <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                        <Battery size={16} />
                      </div>
                      <span className="text-sm font-semibold text-[#292929]">
                        650mAh Battery
                      </span>
                    </div>
                  </div>
                  {/* Top-right */}
                  <div
                    className={`absolute top-8 right-10 md:top-12 md:right-16 transition-all duration-700 ${
                      showcaseInView
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 translate-x-3 -translate-y-3"
                    }`}
                    style={{ transitionDelay: "160ms" }}
                  >
                    <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                        <Zap size={16} />
                      </div>
                      <span className="text-sm font-semibold text-[#292929]">
                        15W Max Output
                      </span>
                    </div>
                  </div>
                  {/* Bottom-left */}
                  <div
                    className={`absolute bottom-8 left-10 md:bottom-12 md:left-16 transition-all duration-700 ${
                      showcaseInView
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 -translate-x-3 translate-y-3"
                    }`}
                    style={{ transitionDelay: "240ms" }}
                  >
                    <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                        <Droplets size={16} />
                      </div>
                      <span className="text-sm font-semibold text-[#292929]">
                        2ml Pod Capacity
                      </span>
                    </div>
                  </div>
                  {/* Bottom-right */}
                  <div
                    className={`absolute bottom-8 right-10 md:bottom-12 md:right-16 transition-all duration-700 ${
                      showcaseInView
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 translate-x-3 translate-y-3"
                    }`}
                    style={{ transitionDelay: "320ms" }}
                  >
                    <div className="flex items-center gap-3 bg-white/85 border border-[#02ECCF]/40 rounded-full pl-2 pr-4 py-2 shadow-lg shadow-[#02ECCF]/20 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                        <Shield size={16} />
                      </div>
                      <span className="text-sm font-semibold text-[#292929]">
                        Short Circuit Protection
                      </span>
                    </div>
                  </div>
                </div>
                {/* Side feature pills (mobile) */}
                <div className="mt-7 grid grid-cols-2 gap-3 md:hidden">
                  <div
                    className={`flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10 transition-all duration-700 ${showcaseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    style={{ transitionDelay: "80ms" }}
                  >
                    <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                      <Battery size={14} />
                    </div>
                    <span className="text-xs font-semibold text-[#292929]">
                      650mAh Battery
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10 transition-all duration-700 ${showcaseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    style={{ transitionDelay: "160ms" }}
                  >
                    <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                      <Zap size={14} />
                    </div>
                    <span className="text-xs font-semibold text-[#292929]">
                      15W Max Output
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10 transition-all duration-700 ${showcaseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    style={{ transitionDelay: "240ms" }}
                  >
                    <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                      <Droplets size={14} />
                    </div>
                    <span className="text-xs font-semibold text-[#292929]">
                      2ml Pod
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2 bg-white/80 border border-[#02ECCF]/40 rounded-full pl-2 pr-3 py-2 shadow shadow-[#02ECCF]/10 transition-all duration-700 ${showcaseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    style={{ transitionDelay: "320ms" }}
                  >
                    <div className="w-7 h-7 rounded-md bg-[#02ECCF] text-[#292929] flex items-center justify-center">
                      <Shield size={14} />
                    </div>
                    <span className="text-xs font-semibold text-[#292929]">
                      Protection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flavors Section (inlined) */}
          <section
            ref={flavorsRef}
            className={`relative pt-8 pb-20 md:pt-12 md:pb-20 overflow-hidden transition-all duration-700 ${flavorsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="container mx-auto max-w-7xl px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-montserrat-bold text-[#292929] tracking-tight">
                  Explore Our Flavors
                </h2>
                <div className="mt-3 inline-flex items-center gap-2">
                  <span className="h-[3px] w-16 bg-gradient-to-r from-[#02ECCF] to-[#02ECCF]/40 rounded-full" />
                  <span className="h-[3px] w-6 bg-[#02ECCF]/30 rounded-full" />
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-start">
                  <ul
                    className="space-y-4 order-2 md:order-1 z-10"
                    style={{ contain: "content" }}
                  >
                    {(() => {
                      const half = Math.ceil(flavorsForSection.length / 2);
                      const leftFlavors = flavorsForSection.slice(0, half);
                      return leftFlavors.map((flavor, index) => {
                        const absoluteIndex = index;
                        const isActive = absoluteIndex === selectedFlavor;
                        const itemTheme = getFlavorTheme(flavor.name);
                        return (
                          <li
                            key={flavor.name}
                            style={{
                              animation: "fadeInUp 0.5s ease both",
                              animationDelay: `${absoluteIndex * 120}ms`,
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => setSelectedFlavor(absoluteIndex)}
                              className={`group relative w-full text-left rounded-2xl p-4 transition-transform duration-200 hover:scale-[1.01] focus:outline-none will-change-transform`}
                              style={{
                                background: isActive
                                  ? "rgba(255,255,255,0.16)"
                                  : "rgba(255,255,255,0.10)",
                                border: "1px solid",
                                borderColor: isActive
                                  ? itemTheme
                                  : "rgba(255,255,255,0.22)",
                                boxShadow: isActive
                                  ? `0 6px 20px rgba(0,0,0,0.12), 0 0 0 3px ${itemTheme}22`
                                  : "0 6px 20px rgba(0,0,0,0.06)",
                              }}
                            >
                              <span
                                className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                                style={{ backgroundColor: itemTheme }}
                              />
                              <div className="flex items-start gap-3">
                                <span
                                  className={`flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-montserrat-bold ${isActive ? "bg-[#02ECCF] text-[#292929]" : "bg-[#02ECCF]/15 text-[#292929]"}`}
                                >
                                  {String(absoluteIndex + 1).padStart(2, "0")}
                                </span>
                                <div>
                                  <div className="font-montserrat-bold text-[#292929]">
                                    {flavor.name}
                                  </div>
                                  <div
                                    className={`text-sm text-[#666666] mt-1 font-montserrat-regular ${isActive ? "block" : "hidden group-hover:block"}`}
                                  >
                                    {flavor.description}
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`ml-auto mt-0.5 h-4 w-4 transition-all ${isActive ? "text-[#02ECCF]" : "text-[#292929]/30 group-hover:text-[#02ECCF]"}`}
                                />
                              </div>
                              <div
                                className="pointer-events-none absolute inset-0 rounded-2xl"
                                style={{
                                  background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.02) 100%)",
                                  opacity: isActive ? 1 : 0.9,
                                }}
                              />
                            </button>
                          </li>
                        );
                      });
                    })()}
                  </ul>
                  <div className="order-1 md:order-2 md:sticky md:top-24">
                    <div className="relative mx-auto aspect-[3/4] max-w-xs sm:max-w-sm overflow-visible">
                      {/* Mobile Navigation Arrows */}
                      <div className="md:hidden absolute inset-0 flex items-center justify-between z-20 pointer-events-none">
                        <button
                          type="button"
                          onClick={() => setSelectedFlavor(selectedFlavor === 0 ? flavorsForSection.length - 1 : selectedFlavor - 1)}
                          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#02ECCF]/30 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 -ml-5"
                          aria-label="Previous flavor"
                        >
                          <ChevronLeft className="h-5 w-5 text-[#292929]" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedFlavor(selectedFlavor === flavorsForSection.length - 1 ? 0 : selectedFlavor + 1)}
                          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#02ECCF]/30 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 -mr-5"
                          aria-label="Next flavor"
                        >
                          <ChevronRight className="h-5 w-5 text-[#292929]" />
                        </button>
                      </div>
                      <style>
                        {`
                        @keyframes elegantFloat {
                          0%, 100% { 
                            transform: translate(-50%, -50%) rotate(0deg) translateY(-15px);
                            opacity: 0.95;
                          }
                          25% { 
                            transform: translate(-50%, -50%) rotate(90deg) translateY(-20px);
                            opacity: 1;
                          }
                          50% { 
                            transform: translate(-50%, -50%) rotate(180deg) translateY(-10px);
                            opacity: 1;
                          }
                          75% { 
                            transform: translate(-50%, -50%) rotate(270deg) translateY(-25px);
                            opacity: 1;
                          }
                        }
                        @keyframes elegantCounterFloat {
                          0%, 100% { 
                            transform: translate(-50%, -50%) rotate(0deg) translateY(15px);
                            opacity: 0.85;
                          }
                          25% { 
                            transform: translate(-50%, -50%) rotate(-90deg) translateY(10px);
                            opacity: 0.9;
                          }
                          50% { 
                            transform: translate(-50%, -50%) rotate(-180deg) translateY(20px);
                            opacity: 0.95;
                          }
                          75% { 
                            transform: translate(-50%, -50%) rotate(-270deg) translateY(5px);
                            opacity: 0.9;
                          }
                        }
                        @keyframes modernPulse {
                          0%, 100% { 
                            transform: scale(1);
                            opacity: 0.3;
                          }
                          50% { 
                            transform: scale(1.05);
                            opacity: 0.45;
                          }
                        }
                      `}
                      </style>
                      
                      {/* Primary elegant rotating element with cyan-inspired blur */}
                      <div
                        className="absolute top-1/2 left-1/2 w-80 h-80 will-change-transform"
                        style={{
                          animation: "elegantFloat 20s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-full blur-3xl"
                          style={{
                            background: `conic-gradient(from 0deg, ${hexToRgba(getFlavorTheme(flavorsForSection[selectedFlavor]?.name || ""), 0.7)} 0%, ${hexToRgba(getFlavorTheme(flavorsForSection[selectedFlavor]?.name || ""), 0.25)} 40%, transparent 60%, transparent 100%)`,
                            animation: "spinSlow 15s linear infinite",
                          }}
                        />
                      </div>
                      
                      {/* Secondary counter-rotating element */}
                      <div
                        className="absolute top-1/2 left-1/2 w-64 h-64 will-change-transform"
                        style={{
                          animation: "elegantCounterFloat 25s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-full blur-2xl"
                          style={{
                            background: `conic-gradient(from 180deg, ${hexToRgba(getFlavorTheme(flavorsForSection[selectedFlavor]?.name || ""), 0.55)} 0%, ${hexToRgba(getFlavorTheme(flavorsForSection[selectedFlavor]?.name || ""), 0.15)} 50%, transparent 70%, transparent 100%)`,
                            animation: "spinSlow 18s linear infinite reverse",
                          }}
                        />
                      </div>
                      
                      {/* Cyan-inspired ambient glow backdrop */}
                      <div
                        className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] -translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none will-change-transform"
                        style={{
                          background: `radial-gradient(closest-side, ${hexToRgba(getFlavorTheme(flavorsForSection[selectedFlavor]?.name || ""), 0.4)} 0%, ${hexToRgba(getFlavorTheme(flavorsForSection[selectedFlavor]?.name || ""), 0.2)} 50%, transparent 80%)`,
                          animation: "modernPulse 12s ease-in-out infinite",
                        }}
                      />
                      
                      {/* Additional subtle radial glow layers */}
                      <div
                        className="absolute -inset-12 blur-[80px] pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at center, ${hexToRgba(getFlavorTheme(flavorsForSection[selectedFlavor]?.name || ""), 0.25)} 0%, transparent 70%)`,
                        }}
                      />
                      <img
                        src={flavorsForSection[selectedFlavor]?.image}
                        alt={flavorsForSection[selectedFlavor]?.name}
                        className="absolute inset-0 w-full h-full object-contain p-6 drop-shadow-xl"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="inline-block rounded-full bg-[#02ECCF] text-[#292929] px-4 py-1 text-sm font-montserrat-bold shadow shadow-[#02ECCF]/40">
                        {flavorsForSection[selectedFlavor]?.name}
                      </div>
                      <div className="mt-5 flex flex-wrap justify-center gap-3">
                        {flavorsForSection.map((f, i) => (
                          <button
                            key={f.name}
                            type="button"
                            aria-label={f.name}
                            onClick={() => setSelectedFlavor(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ring-2 ${
                              i === selectedFlavor
                                ? "bg-[#02ECCF] ring-[#02ECCF] scale-110"
                                : "bg-[#02ECCF]/40 ring-transparent hover:ring-[#02ECCF]/40 hover:scale-110"
                            }`}
                          />
                        ))}
                      </div>
                      {(() => {
                        const ratings: Record<
                          string,
                          {
                            sweetness: number;
                            coolness: number;
                            flavor: number;
                          }
                        > = {
                          "b1g purple": {
                            sweetness: 5,
                            coolness: 5,
                            flavor: 5,
                          },
                          "b1g red": { sweetness: 5, coolness: 4, flavor: 4 },
                          "b1g sparkle": {
                            sweetness: 5,
                            coolness: 4,
                            flavor: 4,
                          },
                          "b1g heart": { sweetness: 4, coolness: 4, flavor: 3 },
                          "b1g rizz": { sweetness: 4, coolness: 3, flavor: 3 },
                          "b1g lush": { sweetness: 4, coolness: 4, flavor: 5 },
                          "b1g blue": { sweetness: 5, coolness: 4, flavor: 3 },
                          "b1g frost": { sweetness: 4, coolness: 1, flavor: 3 },
                          "b1g black": { sweetness: 4, coolness: 3, flavor: 4 },
                          "b1g shirota": {
                            sweetness: 4,
                            coolness: 3,
                            flavor: 4,
                          },
                        };
                        const key = (
                          flavorsForSection[selectedFlavor]?.name || ""
                        ).toLowerCase();
                        const profile = ratings[key] || {
                          sweetness: 3,
                          coolness: 3,
                          flavor: 3,
                        };
                        return (
                          <div className="mt-6 mx-auto max-w-sm bg-white/70 border border-white/70 rounded-2xl p-4 text-left shadow">
                            <div className="mb-2 flex items-center gap-2 text-sm font-montserrat-bold text-[#292929]">
                              <Sparkles className="h-4 w-4 text-[#02ECCF]" />{" "}
                              Flavor profile
                            </div>
                            <div className="space-y-3">
                              <div>
                                <div className="flex items-center justify-between text-xs text-[#666666]">
                                  <span className="inline-flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-[#02ECCF]/60" />{" "}
                                    Sweetness
                                  </span>
                                  <span className="font-montserrat-bold text-[#292929]/80">
                                    {profile.sweetness}/5
                                  </span>
                                </div>
                                <div className="mt-1 h-2 rounded-full bg-[#292929]/10 overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-[#02ECCF] to-[#02ECCF]/60"
                                    style={{
                                      width: `${profile.sweetness * 20}%`,
                                    }}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center justify-between text-xs text-[#666666]">
                                  <span className="inline-flex items-center gap-1">
                                    <Droplets className="h-3.5 w-3.5 text-[#02ECCF]" />{" "}
                                    Coolness
                                  </span>
                                  <span className="font-montserrat-bold text-[#292929]/80">
                                    {profile.coolness}/5
                                  </span>
                                </div>
                                <div className="mt-1 h-2 rounded-full bg-[#292929]/10 overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-[#02ECCF] to-[#02ECCF]/60"
                                    style={{
                                      width: `${profile.coolness * 20}%`,
                                    }}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center justify-between text-xs text-[#666666]">
                                  <span className="inline-flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 text-[#02ECCF]" />{" "}
                                    Flavor
                                  </span>
                                  <span className="font-montserrat-bold text-[#292929]/80">
                                    {profile.flavor}/5
                                  </span>
                                </div>
                                <div className="mt-1 h-2 rounded-full bg-[#292929]/10 overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-[#02ECCF] to-[#02ECCF]/60"
                                    style={{ width: `${profile.flavor * 20}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                  <ul
                    className="space-y-4 order-3 z-10"
                    style={{ contain: "content" }}
                  >
                    {(() => {
                      const half = Math.ceil(flavorsForSection.length / 2);
                      const rightFlavors = flavorsForSection.slice(half);
                      return rightFlavors.map((flavor, index) => {
                        const absoluteIndex = index + half;
                        const isActive = absoluteIndex === selectedFlavor;
                        const itemTheme = getFlavorTheme(flavor.name);
                        return (
                          <li
                            key={flavor.name}
                            style={{
                              animation: "fadeInUp 0.5s ease both",
                              animationDelay: `${absoluteIndex * 120}ms`,
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => setSelectedFlavor(absoluteIndex)}
                              className={`group relative w-full text-left rounded-2xl p-4 transition-transform duration-200 hover:scale-[1.01] focus:outline-none will-change-transform`}
                              style={{
                                background: isActive
                                  ? "rgba(255,255,255,0.16)"
                                  : "rgba(255,255,255,0.10)",
                                border: "1px solid",
                                borderColor: isActive
                                  ? itemTheme
                                  : "rgba(255,255,255,0.22)",
                                boxShadow: isActive
                                  ? `0 6px 20px rgba(0,0,0,0.12), 0 0 0 3px ${itemTheme}22`
                                  : "0 6px 20px rgba(0,0,0,0.06)",
                              }}
                            >
                              <span
                                className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                                style={{ backgroundColor: itemTheme }}
                              />
                              <div className="flex items-start gap-3">
                                <span
                                  className={`flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-montserrat-bold ${isActive ? "bg-[#02ECCF] text-[#292929]" : "bg-[#02ECCF]/15 text-[#292929]"}`}
                                >
                                  {String(absoluteIndex + 1).padStart(2, "0")}
                                </span>
                                <div>
                                  <div className="font-montserrat-bold text-[#292929]">
                                    {flavor.name}
                                  </div>
                                  <div
                                    className={`text-sm text-[#666666] mt-1 font-montserrat-regular ${isActive ? "block" : "hidden group-hover:block"}`}
                                  >
                                    {flavor.description}
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`ml-auto mt-0.5 h-4 w-4 transition-all ${isActive ? "text-[#02ECCF]" : "text-[#292929]/30 group-hover:text-[#02ECCF]"}`}
                                />
                              </div>
                              <div
                                className="pointer-events-none absolute inset-0 rounded-2xl"
                                style={{
                                  background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.02) 100%)",
                                  opacity: isActive ? 1 : 0.9,
                                }}
                              />
                            </button>
                          </li>
                        );
                      });
                    })()}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default XForgeProduct;

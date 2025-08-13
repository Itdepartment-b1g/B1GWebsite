import { useMemo, useState } from "react";
import { Droplets, Sparkles, ChevronRight, Star } from "lucide-react";

type Flavor = {
  name: string;
  description: string;
  image: string;
};

const defaultFlavors: Flavor[] = [
  {
    name: "Arctic Mint",
    description:
      "A refreshing blast of cool mint with icy undertones that awakens your senses.",
    image: "/placeholder.svg",
  },
  {
    name: "Neon Berry",
    description: "Electric fusion of mixed berries with a vibrant, tangy finish.",
    image: "/placeholder.svg",
  },
  {
    name: "Digital Vanilla",
    description: "Smooth vanilla cream with sophisticated sweet notes.",
    image: "/placeholder.svg",
  },
  {
    name: "Quantum Grape",
    description: "Deep grape essence with a long, polished finish.",
    image: "/placeholder.svg",
  },
  {
    name: "Cyber Mango",
    description: "Tropical mango enhanced with modern sweetness.",
    image: "/placeholder.svg",
  },
  {
    name: "Electric Strawberry",
    description: "Charged strawberry with high-voltage intensity.",
    image: "/placeholder.svg",
  },
  {
    name: "Matrix Melon",
    description: "Refreshing watermelon with crisp clarity.",
    image: "/placeholder.svg",
  },
  {
    name: "Neural Cherry",
    description: "Lush cherry layered with subtle complexity.",
    image: "/placeholder.svg",
  },
  {
    name: "Hologram Apple",
    description: "Crisp apple with a bright, refreshing bite.",
    image: "/placeholder.svg",
  },
  {
    name: "Plasma Peach",
    description: "Juicy peach with a smooth, radiant finish.",
    image: "/placeholder.svg",
  },
];

export default function FlavorSection({ flavors = defaultFlavors }: { flavors?: Flavor[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [leftFlavors, rightFlavors] = useMemo(() => {
    const half = Math.ceil(flavors.length / 2);
    return [flavors.slice(0, half), flavors.slice(half)];
  }, [flavors]);

  const selectedFlavor = flavors[selectedIndex] ?? flavors[0];

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const normalized = hex.replace('#', '');
    const bigint = parseInt(normalized.length === 3
      ? normalized.split('').map((c) => c + c).join('')
      : normalized, 16);
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
    if (key.includes('sparkle')) return '#FDE047'; // amber-300
    if (key.includes('black')) return '#000000'; // pure black
    if (key.includes('rizz')) return '#EC4899'; // pink-500
    if (key.includes('purple')) return '#A78BFA'; // violet-400
    if (key.includes('shirota')) return '#FDE68A'; // amber-200 (creamy)
    if (key.includes('blue')) return '#60A5FA'; // blue-400
    if (key.includes('frost')) return '#67E8F9'; // cyan-300 (icy)
    if (key.includes('lush')) return '#34D399'; // emerald-400
    if (key.includes('heart')) return '#FB7185'; // rose-400
    if (key.includes('red')) return '#F87171'; // red-400
    return '#02ECCF';
  };

  const themeHex = getFlavorTheme(selectedFlavor?.name || '');
  const theme60 = hexToRgba(themeHex, 0.6);
  const theme45 = hexToRgba(themeHex, 0.45);
  const theme20 = hexToRgba(themeHex, 0.20);

  const profile = useMemo(() => {
    const ratings: Record<string, { sweetness: number; coolness: number; flavor: number }> = {
      "b1g purple": { sweetness: 5, coolness: 5, flavor: 5 },
      "b1g red": { sweetness: 5, coolness: 4, flavor: 4 },
      "b1g sparkle": { sweetness: 5, coolness: 4, flavor: 4 },
      "b1g heart": { sweetness: 4, coolness: 4, flavor: 3 },
      "b1g rizz": { sweetness: 4, coolness: 3, flavor: 3 },
      "b1g lush": { sweetness: 4, coolness: 4, flavor: 5 },
      "b1g blue": { sweetness: 5, coolness: 4, flavor: 3 },
      "b1g frost": { sweetness: 4, coolness: 1, flavor: 3 },
      "b1g black": { sweetness: 4, coolness: 3, flavor: 4 },
      "b1g shirota": { sweetness: 4, coolness: 3, flavor: 4 },
    };
    const key = (selectedFlavor?.name || '').toLowerCase();
    return ratings[key] || { sweetness: 3, coolness: 3, flavor: 3 };
  }, [selectedFlavor]);

  return (
    <section className="relative py-20 overflow-hidden cyber-grid grid-only">
      <style>
        {`
          @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>
      {/* subtle diagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: "linear-gradient(135deg, #02ECCF 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }} />

      {/* soft glows */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-72 h-72 bg-[#02ECCF]/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-80 h-80 bg-[#02ECCF]/15 blur-3xl rounded-full" />

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
          {/* vertical separators */}
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-start">
          {/* Left list */}
          <ul className="space-y-4 order-2 md:order-1 z-10" style={{ contain: 'content' }}>
            {leftFlavors.map((flavor, index) => {
              const absoluteIndex = index;
              const isActive = absoluteIndex === selectedIndex;
              const itemTheme = getFlavorTheme(flavor.name);
              return (
                <li key={flavor.name} style={{ animation: "fadeInUp 0.5s ease both", animationDelay: `${absoluteIndex * 120}ms` }}>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(absoluteIndex)}
                    className={`group relative w-full text-left rounded-2xl p-4 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.01] focus:outline-none will-change-transform`}
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.10)',
                      border: '1px solid',
                      borderColor: isActive ? itemTheme : 'rgba(255,255,255,0.22)',
                      boxShadow: isActive ? `0 6px 20px rgba(0,0,0,0.12), 0 0 0 3px ${itemTheme}22` : '0 6px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    <span className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                          style={{ backgroundColor: itemTheme }} />
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-montserrat-bold ${isActive ? 'bg-[#02ECCF] text-[#292929]' : 'bg-[#02ECCF]/15 text-[#292929]'}`}>
                        {String(absoluteIndex + 1).padStart(2, '0')}
                      </span>
                      <div>
                    <div className="font-montserrat-bold text-[#292929]">{flavor.name}</div>
                        <div className={`text-sm text-[#666666] mt-1 font-montserrat-regular ${isActive ? 'block' : 'hidden group-hover:block'}`}>
                      {flavor.description}
                    </div>
                      </div>
                      <ChevronRight className={`ml-auto mt-0.5 h-4 w-4 transition-all ${isActive ? 'text-[#02ECCF]' : 'text-[#292929]/30 group-hover:text-[#02ECCF]'}`} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl"
                         style={{
                           background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.02) 100%)',
                           opacity: isActive ? 1 : 0.9,
                         }} />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Center image */}
          <div className="order-1 md:order-2 md:sticky md:top-24">
            <div className="relative mx-auto aspect-[3/4] max-w-xs sm:max-w-sm overflow-visible">
              {/* moving halos: wrappers translate; inner circles spin */}
              <style>
                {`
                  @keyframes driftOne {
                    0% { top: -18px; left: 50%; transform: translate(-50%, 0); }
                    25% { top: 15%; left: 85%; transform: translate(-50%, 0); }
                    50% { top: 60%; left: 55%; transform: translate(-50%, 0); }
                    75% { top: 20%; left: 10%; transform: translate(-50%, 0); }
                    100% { top: -18px; left: 50%; transform: translate(-50%, 0); }
                  }
                  @keyframes driftTwo {
                    0% { bottom: -18px; left: -18px; }
                    25% { bottom: 12%; left: 12%; }
                    50% { bottom: 40%; left: 5%; }
                    75% { bottom: 18%; left: 35%; }
                    100% { bottom: -18px; left: -18px; }
                  }
                `}
              </style>
              <div className="absolute w-80 h-80" style={{ animation: "driftOne 18s ease-in-out infinite" }}>
                <div
                  className="absolute inset-0 rounded-full opacity-80 blur-md"
                  style={{
                    background: `conic-gradient(from 0deg, ${theme60}, transparent 60%)`,
                    animation: "spinSlow 12s linear infinite",
                  }}
                />
              </div>
              <div className="absolute w-64 h-64" style={{ animation: "driftTwo 20s ease-in-out infinite alternate" }}>
                <div
                  className="absolute inset-0 rounded-full opacity-100 blur-md"
                  style={{
                    background: `conic-gradient(from 0deg, ${theme45}, transparent 60%)`,
                    animation: "spinSlow 16s linear infinite reverse",
                  }}
                />
              </div>
              <div className="absolute -inset-10 blur-3xl pointer-events-none" style={{ background: `radial-gradient(closest-side, ${theme20}, transparent 65%)` }} />
              <img
                src={selectedFlavor?.image}
                alt={selectedFlavor?.name}
                className="absolute inset-0 w-full h-full object-contain p-6 drop-shadow-xl"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="inline-block rounded-full bg-[#02ECCF] text-[#292929] px-4 py-1 text-sm font-montserrat-bold shadow shadow-[#02ECCF]/40">
                {selectedFlavor?.name}
              </div>
              {/* flavor dots nav */}
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {flavors.map((f, i) => (
                  <button
                    key={f.name}
                    type="button"
                    aria-label={f.name}
                    onClick={() => setSelectedIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ring-2 ${
                      i === selectedIndex
                        ? 'bg-[#02ECCF] ring-[#02ECCF] scale-110'
                        : 'bg-[#02ECCF]/40 ring-transparent hover:ring-[#02ECCF]/40 hover:scale-110'
                    }`}
                  />
                ))}
              </div>

              {/* flavor profile */}
              <div className="mt-6 mx-auto max-w-sm bg-white/70 border border-white/70 rounded-2xl p-4 text-left shadow">
                <div className="mb-2 flex items-center gap-2 text-sm font-montserrat-bold text-[#292929]">
                  <Sparkles className="h-4 w-4 text-[#02ECCF]" /> Flavor profile
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#666666]">
                      <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#02ECCF]/60" /> Sweetness</span>
                      <span className="font-montserrat-bold text-[#292929]/80">{profile.sweetness}/5</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-[#292929]/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#02ECCF] to-[#02ECCF]/60" style={{ width: `${profile.sweetness * 20}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#666666]">
                      <span className="inline-flex items-center gap-1"><Droplets className="h-3.5 w-3.5 text-[#02ECCF]" /> Coolness</span>
                      <span className="font-montserrat-bold text-[#292929]/80">{profile.coolness}/5</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-[#292929]/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#02ECCF] to-[#02ECCF]/60" style={{ width: `${profile.coolness * 20}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#666666]">
                      <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#02ECCF]" /> Flavor</span>
                      <span className="font-montserrat-bold text-[#292929]/80">{profile.flavor}/5</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-[#292929]/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#02ECCF] to-[#02ECCF]/60" style={{ width: `${profile.flavor * 20}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right list */}
          <ul className="space-y-4 order-3 z-10" style={{ contain: 'content' }}>
            {rightFlavors.map((flavor, index) => {
              const absoluteIndex = index + leftFlavors.length;
              const isActive = absoluteIndex === selectedIndex;
              const itemTheme = getFlavorTheme(flavor.name);
              return (
                <li key={flavor.name} style={{ animation: "fadeInUp 0.5s ease both", animationDelay: `${absoluteIndex * 120}ms` }}>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(absoluteIndex)}
                    className={`group relative w-full text-left rounded-2xl p-4 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.01] focus:outline-none will-change-transform`}
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.10)',
                      border: '1px solid',
                      borderColor: isActive ? itemTheme : 'rgba(255,255,255,0.22)',
                      boxShadow: isActive ? `0 6px 20px rgba(0,0,0,0.12), 0 0 0 3px ${itemTheme}22` : '0 6px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    <span className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                          style={{ backgroundColor: itemTheme }} />
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-montserrat-bold ${isActive ? 'bg-[#02ECCF] text-[#292929]' : 'bg-[#02ECCF]/15 text-[#292929]'}`}>
                        {String(absoluteIndex + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="font-montserrat-bold text-[#292929]">{flavor.name}</div>
                        <div className={`text-sm text-[#666666] mt-1 font-montserrat-regular ${isActive ? 'block' : 'hidden group-hover:block'}`}>
                          {flavor.description}
                        </div>
                      </div>
                      <ChevronRight className={`ml-auto mt-0.5 h-4 w-4 transition-all ${isActive ? 'text-[#02ECCF]' : 'text-[#292929]/30 group-hover:text-[#02ECCF]'}`} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl"
                         style={{
                           background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.02) 100%)',
                           opacity: isActive ? 1 : 0.9,
                         }} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}



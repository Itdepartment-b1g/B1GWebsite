import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/HeroLogo.png";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(71, 33, 96, 0.85) 0%, rgba(71, 33, 96, 0.7) 50%, rgba(255, 155, 255, 0.2) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#472160]/30 via-[#472160]/20 to-[#FF9BFF]/5"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FF9BFF]/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Logo - The Star of the Show */}
        <div className="mb-0">
          <img 
            src={logo} 
            alt="B1G Corporation Logo" 
            className="mx-auto h-40 md:h-56 lg:h-64 w-auto drop-shadow-2xl animate-fade-in-up" 
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(255, 155, 255, 0.3))'
            }}
          />
        </div>

        {/* Supporting Typography */}
        <div className="space-y-8">
          
          
          <p className="text-lg md:text-xl lg:text-2xl text-[#F4FBFE]/90 font-light max-w-4xl mx-auto leading-relaxed tracking-wide">
          B1G Corporation has rapidly established itself as a leader in the vape distribution industry. We have achieved significant milestones, expanding our reach both nationally and internationally. Our mission is to create a seamless distribution process that connects and supports a thriving community of vaping enthusiasts and smokers seeking safer alternatives.
          </p>
          
          {/* Subtle accent line */}
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF9BFF] to-[#FF9BFF]/50 mx-auto rounded-full"></div>
        </div>
      </div>
      
      {/* Enhanced geometric shapes with better positioning */}
      <div className="absolute bottom-0 left-0 w-1/2 h-48 z-20" style={{pointerEvents: 'none'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polygon points="0,0 100,100 0,100" fill="#F4FBFE" opacity="0.95" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-48 z-20" style={{pointerEvents: 'none'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polygon points="100,0 100,100 0,100" fill="#F4FBFE" opacity="0.95" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
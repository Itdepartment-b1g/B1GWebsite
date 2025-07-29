import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(116, 58, 213, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(192, 132, 252, 0.2) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          B1G Corporation
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
          Your Vision, Our Innovation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Two larger 45-degree triangles facing each other */}
      <div className="absolute bottom-0 left-0 w-1/2 h-32 z-20" style={{pointerEvents: 'none'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polygon points="0,0 100,100 0,100" fill="white" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-32 z-20" style={{pointerEvents: 'none'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polygon points="100,0 100,100 0,100" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
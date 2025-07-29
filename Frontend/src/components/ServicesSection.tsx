import { Button } from "@/components/ui/button";
import consultancyImage from "@/assets/consultancy.jpg";
import researchImage from "@/assets/research.jpg";
import developmentImage from "@/assets/development.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Consultancy",
      description: "SmartSynth excels at aligning customers' needs with available technologies.",
      image: consultancyImage,
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Research", 
      description: "SmartSynth has established a noteworthy reputation for pioneering research initiatives.",
      image: researchImage,
      color: "from-violet-600 to-violet-800"
    },
    {
      title: "Development",
      description: "Our Professional Development Programs are a cornerstone of learning at SmartSynth.",
      image: developmentImage,
      color: "from-indigo-600 to-indigo-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-purple hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="self-center bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Find Out More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, Brain, Cloud, BarChart3, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    {
      id: 1,
      name: "FORGE",
      tagline: "Forge Your Experience",
      description: "Our flagship AI-powered platform that transforms business processes through advanced machine learning and intelligent automation. Built for enterprises seeking to optimize operations and drive innovation.",
      features: [
        "Advanced AI algorithms for predictive analytics",
        "Seamless integration with existing systems", 
        "Real-time data processing and insights",
        "Scalable cloud-native architecture"
      ],
      capabilities: [
        { icon: Brain, label: "Machine Learning", desc: "Advanced ML models" },
        { icon: Zap, label: "Automation", desc: "Process optimization" },
        { icon: BarChart3, label: "Analytics", desc: "Real-time insights" }
      ],
      primaryColor: "from-purple-600 to-indigo-700",
      accentColor: "bg-white-50 border-blue-200",
      image: "https://mcwinternationaltrading.com/cdn/shop/files/X4_1080x.jpg?v=1747153609"
    },
    {
      id: 2,
      name: "AMZ",
      tagline: "Unified Digital Infrastructure",
      description: "A comprehensive cloud management solution designed for large-scale enterprises. Streamline your digital infrastructure with advanced security, monitoring, and collaboration tools.",
      features: [
        "Multi-cloud environment management",
        "Enterprise-grade security protocols",
        "Advanced monitoring and alerting",
        "Collaborative workspace integration"
      ],
      capabilities: [
        { icon: Cloud, label: "Cloud Management", desc: "Multi-cloud support" },
        { icon: Shield, label: "Security", desc: "Enterprise protection" },
        { icon: Users, label: "Collaboration", desc: "Team integration" }
      ],
      primaryColor: "from-emerald-600 to-teal-700",
      accentColor: "bg-emerald-50 border-emerald-200",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const heroSlides = [
    {
      title: "",
      subtitle: "",
      description: "",
      image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/485157766_122118285134792390_5323419709097863985_n.png?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=QVwWuFVHYEwQ7kNvwGk_fQq&_nc_oc=AdnqxWSANU12-QK1S3iQBzu3chZhXDvlszh2XT3dS9r8qQset6F7P_jc71w7rE1PdK8&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=254_yzALI7ohE73p_XSCNw&oh=00_AfRgPMagVre7vghNa78G-ptymjoAafOfN-jmZW-ovFDXiw&oe=688E5BC6",
      gradient: "from-cyan-600/90 to-lightblue-700/90"
    },
    {
      title: "CloudSync Enterprise",
      subtitle: "Unified Digital Infrastructure",
      description: "Streamline your digital ecosystem with enterprise-grade solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-emerald-600/90 to-teal-700/90"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header alwaysShowBg={true} />
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}
      </style>
      <main className="pt-2">
        {/* Hero Section with Slideshow */}
        <section className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
              </div>
            ))}
          </div>

          {/* Slideshow Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto max-w-6xl px-6">
              <div className="text-center text-white space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-2xl md:text-3xl font-light mb-6 animate-fade-in">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in">
                  {heroSlides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-8 z-20 text-white/70 text-sm animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span>Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-32">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
                >
                  {/* Product Info */}
                  <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${product.primaryColor}`}>
                        Product {product.id}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        {product.name}
                      </h2>
                      <p className="text-xl text-slate-600 font-medium">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-slate-900">Key Features</h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-700">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.primaryColor}`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Button */}
                    {product.id === 1 ? (
                      <Link to="/xforge" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.primaryColor} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    ) : (
                      <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.primaryColor} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                        Learn More
                        <ArrowRight size={16} />
                      </button>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="flex-1">
                    <div className="relative group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[500px] object-cover rounded-2xl"
                      />
                      {/* Image Overlay - Removed for cleaner look */}
                      
                      {/* Capability Cards Overlay - Removed for cleaner look */}
                      
                      {/* Decorative Elements - Removed for cleaner look */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Discover how our innovative solutions can drive your organization forward. 
              Connect with our experts to explore the perfect fit for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
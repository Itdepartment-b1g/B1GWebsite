import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, Brain, Cloud, BarChart3, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;
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
      name: "ALPHA",
      tagline: "The Alpha of all v1",
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
      image: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/509752842_122140628432792390_8217079412808562189_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ke8G0mXdZdQQ7kNvwFJW7Eh&_nc_oc=Adlfn5XvrUFcixorr91xvzhnJAmDZEGWXMxj8GwdhbeN9qbIW432tAIe76lrFDcvXdI&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=3ue72sWxSqiBT49YDWXK1g&oh=00_AfSmupKumbxwXzo1DmhxuDfxA-Z1Z7WpW8_EP_hkH8Hpdw&oe=688F578A"
    },
    {
      id: 3,
      name: "X-SlimBar",
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
      id: 4,
      name: "X-Ultra",
      tagline: "Designed to impress, Crafted to Last",
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
      image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/487791627_122117625074741916_4382918048910865605_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OxZcprK9lRYQ7kNvwG7YmZr&_nc_oc=AdkSC0ctirJz45brQ9Y_Ba9KvTe9n1noOz3tdW2FfEmJa0VHS-PdvS1CX8zGKpHgjB0&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=h7qClb7EUzo-k2__c0dCTQ&oh=00_AfTVXLqoo8pK7OGYWc0EgDA7Vj9k_qq8ALt9pkpUhyTxEg&oe=688F5C6A"
    },
    {
      id: 5,
      name: "AMZ",
      tagline: "Amazing Vape, Amazing Life",
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
      image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/486667704_661021166292964_8960477590410985636_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NwxZuIXK9tQQ7kNvwHTzILU&_nc_oc=AdkYho9Mpdmv4LxLoGcGveUNLT4q9L57aYP1OXTuSlIqJXMszhKO-yGArfevtMS4teA&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=962rsxJnpPLGKXeX4nODmw&oh=00_AfTPgUKNrf0tPklYum3TdpIO2HdZOBPgp1fbS9Nxu9PURQ&oe=688E298F"
    },
  ];

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const heroSlides = [
    {
      title: "",
      subtitle: "",
      description: "",
      image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/485157766_122118285134792390_5323419709097863985_n.png?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=QVwWuFVHYEwQ7kNvwGk_fQq&_nc_oc=AdnqxWSANU12-QK1S3iQBzu3chZhXDvlszh2XT3dS9r8qQset6F7P_jc71w7rE1PdK8&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=254_yzALI7ohE73p_XSCNw&oh=00_AfRgPMagVre7vghNa78G-ptymjoAafOfN-jmZW-ovFDXiw&oe=688E5BC6",
      gradient: "from-cyan-600/30 to-lightblue-700/0"
    },
    {
      title: "",
      subtitle: "",
      description: "",
      image: "https://www.b1gcorporation.com/AmzBanner.png",
      gradient: "from-purple-600/10 to-red-700/0"
    },
    {
      title: "",
      subtitle: "",
      description: "",
      image: "https://www-x-xvape-x-cc.img.addlink.cn/Templates/default/proImages/X-SLIMBAR-sub-brand.png",
      gradient: "from-purple-600/10 to-red-700/0"
    },
    {
      title: "",
      subtitle: "",
      description: "",
      image: "https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/514349765_122141814572792390_2518771843664850296_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NueLDDP4bDEQ7kNvwEtEt8g&_nc_oc=Admb63wNy_8bkWODvBnpj-qYfW_vMT-pNwmboEPDZD6s4-sMsAsjBnq2nReBH0vYUT4&_nc_zt=23&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=BnQ3LDhkEvaNAQkJxSsvKA&oh=00_AfSfhisgJBvnUGfbjZ9Axq1TIigek1LhCBICUgz9p49ecQ&oe=688F4680",
      gradient: "from-purple-600/10 to-red-700/0"
    },
    {
      title: "",
      subtitle: "",
      description: "",
      image: "https://www-x-xvape-x-cc.img.addlink.cn/Templates/default/proImages/X-ULTRA-sub-brand.png",
      gradient: "from-purple-600/10 to-red-700/0"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // Changed to 8000ms (8 seconds)
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

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
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
              </div>
            ))}
          </div>

          {/* Slideshow Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto max-w-6xl px-6">
              <div className="text-center text-white space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold mb-4 transition-all duration-1000 ease-in-out">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-2xl md:text-3xl font-light mb-6 transition-all duration-1000 ease-in-out">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 ease-in-out">
                  {heroSlides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
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
          <div className="absolute bottom-8 right-8 z-30 text-white/70 text-sm animate-bounce">
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
              {currentProducts.map((product, index) => (
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
                    ) : product.id === 2 ? (
                      <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.primaryColor} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-50 cursor-not-allowed`} disabled>
                        Coming Soon
                        <ArrowRight size={16} />
                      </button>
                    ) : product.id === 3 ? (
                      <Link to="/xslimbar" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.primaryColor} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    ) : product.id === 4 ? (
                      <Link to="/xultra" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.primaryColor} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    ) : product.id === 5 ? (
                      <Link to="/amz" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.primaryColor} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
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
                        className="w-full h-[500px] object-contain rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-16">
              <div className="flex items-center bg-white rounded-xl shadow-lg border border-slate-200 p-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    currentPage === 1 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex items-center mx-4">
                  <span className="text-slate-500 font-medium mr-2">Page</span>
                  <div className="relative">
                    <select
                      value={currentPage}
                      onChange={(e) => setCurrentPage(Number(e.target.value))}
                      className="appearance-none bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer min-w-[60px] text-center"
                    >
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <option key={page} value={page} className="bg-white text-slate-900">
                          {page}
                        </option>
                      ))}
                    </select>
                    <ChevronRight 
                      size={16} 
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none transform rotate-90" 
                    />
                  </div>
                  <span className="text-slate-500 font-medium ml-2">of {totalPages}</span>
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    currentPage === totalPages 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
};

export default Products;
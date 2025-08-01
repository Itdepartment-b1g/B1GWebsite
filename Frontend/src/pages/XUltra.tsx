import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Battery, Droplets, Shield, Zap, Award, CheckCircle2 } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const XUltra = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Enhanced product data
  const products = [
    {
      id: 1,
      name: "Tropical Mango",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#FF6B35",
      description: "Exotic tropical mango with natural sweetness and smooth finish",
      intensity: "Medium",
      type: "Fruity"
    },
    {
      id: 2,
      name: "Cool Mint",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#00B4A6",
      description: "Refreshing mint with an icy cooling sensation",
      intensity: "Strong",
      type: "Menthol"
    },
    {
      id: 3,
      name: "Berry Blast",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#8E44AD",
      description: "Mixed berry explosion with natural sweetness",
      intensity: "Medium",
      type: "Fruity"
    },
    {
      id: 4,
      name: "Vanilla Dream",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#F39C12",
      description: "Creamy vanilla with hints of caramel",
      intensity: "Mild",
      type: "Dessert"
    }
  ];

  const specifications = [
    { icon: Battery, title: "Battery Capacity", value: "650mAh", description: "Long-lasting power with fast charging" },
    { icon: Droplets, title: "Pod Capacity", value: "2ml", description: "Pre-filled pods with leak-proof design" },
    { icon: Shield, title: "Safety Features", value: "Multi-Protection", description: "Short-circuit and over-discharge protection" },
    { icon: Zap, title: "Coil Technology", value: "Mesh Coil", description: "Enhanced flavor delivery system" }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % products.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentProduct = products[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysShowBg={true} />
      
      {/* Hero Section - Simple & Professional */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Professional Series</span>
                </div>
                
                <h1 className="text-6xl font-bold text-gray-900">
                  XULTRA
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Professional-grade vaping technology designed for excellence and reliability.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900">650mAh</div>
                  <div className="text-sm text-gray-600">Battery Capacity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">2ml</div>
                  <div className="text-sm text-gray-600">Pod Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600">Flavor Options</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-gray-900 text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors duration-300">
                View Product Details
              </button>
            </div>

            {/* Right Side - Product Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s"
                  alt="XUltra Product"
                  className="w-96 h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specifications</h2>
            <p className="text-lg text-gray-600">Professional-grade components for optimal performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white p-8 shadow-sm border border-gray-200">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gray-900 flex items-center justify-center">
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                  <div className="text-2xl font-bold text-gray-700">{spec.value}</div>
                  <p className="text-sm text-gray-600">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Section - Simple Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Flavors</h2>
            <p className="text-lg text-gray-600">Choose from our premium flavor collection</p>
          </div>

          {/* Simple Carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-600 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="w-full flex-shrink-0"
                  >
                    <div className="bg-gray-50 rounded-lg p-8 mx-4">
                      <div className="text-center space-y-6">
                        {/* Product Image */}
                        <div className="flex justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-40 h-40 object-contain"
                          />
                        </div>

                        {/* Product Info */}
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {product.description}
                          </p>
                          
                          <div className="flex justify-center gap-6 text-sm">
                            <span className="text-gray-500">
                              <strong>Type:</strong> {product.type}
                            </span>
                            <span className="text-gray-500">
                              <strong>Intensity:</strong> {product.intensity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Navigation */}
            <div className="flex justify-center items-center mt-8 gap-6">
              <button 
                onClick={prevSlide}
                disabled={isAnimating}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                disabled={isAnimating}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default XUltra;
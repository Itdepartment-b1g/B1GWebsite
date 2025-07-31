import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const XUltra = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock product data with colors for gradient backgrounds
  const products = [
    {
      id: 1,
      name: "Tropical Mango",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#FF6B35", // Orange-red for mango
      description: "Exotic tropical mango flavor with a smooth finish"
    },
    {
      id: 2,
      name: "Cool Mint",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#00B4A6", // Teal for mint
      description: "Refreshing mint with a cooling sensation"
    },
    {
      id: 3,
      name: "Berry Blast",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#8E44AD", // Purple for berry
      description: "Mixed berry explosion with natural sweetness"
    },
    {
      id: 4,
      name: "Vanilla Dream",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ5g16qeibhOYIqWMPGNK20kgHwuQ5x8w7w&s",
      color: "#F39C12", // Golden for vanilla
      description: "Creamy vanilla with hints of caramel"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < products.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Generate gradient based on current product color
  const currentGradient = `linear-gradient(135deg, ${products[currentSlide].color}30, ${products[currentSlide].color}10, #1a1a1a)`;

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysShowBg={true} />
      
      {/* Hero Section */}
              <section
          className="relative min-h-screen flex items-center overflow-hidden bg-white"
        >
                  {/* Big Circle at Bottom Right */}
          <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gray-800 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left Side - Product Info */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              XULTRA
              <span className="block text-4xl font-light text-gray-600">Premium Pod System</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Experience the ultimate in vaping technology with our revolutionary pod system. 
              Designed for flavor enthusiasts who demand perfection in every puff.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                User Manual
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="relative flex-1 flex justify-end">
            <div className="relative w-96 h-96">
              {/* Floating Product Image */}
              <div className="absolute -top-4 -right-4 transform hover:scale-110 transition-transform duration-500">
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

      {/* Product Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Image */}
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-lg">Product Detail Image</span>
              </div>
            </div>

            {/* Right Side - Specifications */}
            <div className="flex-1 pl-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Product Information</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Battery Capacity</h3>
                  <p className="text-gray-700">650mAh long-lasting battery with fast charging</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pod Capacity</h3>
                  <p className="text-gray-700">2ml pre-filled pods with leak-proof design</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Coil Technology</h3>
                  <p className="text-gray-700">Mesh coil system for enhanced flavor delivery</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-gray-700">Ergonomic design with premium aluminum finish</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Features</h3>
                  <p className="text-gray-700">Short-circuit protection and over-discharge protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Product Carousel Section */}
       <section 
         className="pt-10 pb-20 relative overflow-hidden transition-all duration-700 ease-in-out min-h-screen flex items-center"
         style={{ background: currentGradient }}
       >


        <div className="container mx-auto px-4 relative z-10">
          {/* Flavor Title */}
          <div className="text-center mb-32">
            <h2 className="text-4xl font-bold text-black mb-4">Pod Flavors</h2>
            <p className="text-xl text-black text-opacity-80">Discover our premium flavor collection</p>
          </div>

          {/* Carousel Container - Full Width */}
           <div className="relative w-full h-96 overflow-visible">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carousel Track - No margins, full container width */}
             <div 
               className="flex transition-transform duration-700 ease-in-out h-full w-full overflow-visible"
               style={{ 
                 transform: `translateX(-${currentSlide * 100}%)`
               }}
             >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center justify-center h-full relative w-full flex-shrink-0"
                >
                  {/* Main Product - Centered like the coffee cup */}
                  <div className="text-center">
                    {/* Large Product Image - Centered */}
                    <div className="w-80 h-80 mb-8 hover:scale-105 transition-all duration-500 mx-auto">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Product Info Below */}
                    <h3 className="text-4xl font-bold text-black mb-4">{product.name}</h3>
                    <p className="text-black text-opacity-80 max-w-md mx-auto text-lg">{product.description}</p>
                    

                  </div>


                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

                     {/* Pagination Dots */}
           <div className="flex justify-center space-x-3 mt-12 pt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default XUltra;
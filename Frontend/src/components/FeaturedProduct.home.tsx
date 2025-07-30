import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const placeholderProducts = [
  {
    id: 1,
    name: "FORGE",
    description: "Forge your new experience",
    image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/508191087_122139471146792390_4059564809559462737_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=frL9QemXsfAQ7kNvwFyZcGK&_nc_oc=AdmqahKHft_C6lQwXzDSMjwRrYnuGOG3e-Rq7KTPInmvDeZSsr0Y0u0CGljlDtagE5I&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=LbzX7lo5YhKMiptbawCHlA&oh=00_AfSqg51dVVqTY6ds1w2NQI8C7oBto7eXv3r4ukBeGZxBfQ&oe=688E236E",
    category: "Vape",
  },
  {
    id: 2,
    name: "ALPHA",
    description: "The Alpha of all v1",
    image: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/509752842_122140628432792390_8217079412808562189_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ke8G0mXdZdQQ7kNvwFJW7Eh&_nc_oc=Adlfn5XvrUFcixorr91xvzhnJAmDZEGWXMxj8GwdhbeN9qbIW432tAIe76lrFDcvXdI&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=3ue72sWxSqiBT49YDWXK1g&oh=00_AfSmupKumbxwXzo1DmhxuDfxA-Z1Z7WpW8_EP_hkH8Hpdw&oe=688F578A",
    category: "Vape",
  },
  {
    id: 3,
    name: "AMZ",
    description: "Amazing Vape, Amazing Life",
    image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/486667704_661021166292964_8960477590410985636_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NwxZuIXK9tQQ7kNvwHTzILU&_nc_oc=AdkYho9Mpdmv4LxLoGcGveUNLT4q9L57aYP1OXTuSlIqJXMszhKO-yGArfevtMS4teA&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=962rsxJnpPLGKXeX4nODmw&oh=00_AfTPgUKNrf0tPklYum3TdpIO2HdZOBPgp1fbS9Nxu9PURQ&oe=688E298F",
    category: "Vape",
  },
  {
    id: 4,
    name: "X-Slimbar",
    description: "Designed to impress, Crafted to Last",
    image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/516336560_122133870188741916_865665765343978951_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6yg9MzpjEwwQ7kNvwHZnvt6&_nc_oc=Adl_gXjQDNESD8Ap-9YIx5CGME5atL_AAY7MUkolwtZXnPZZOY7bHVUiecFwKZP1YGU&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=XaVMpbv_q7spuvZ7M6TvlA&oh=00_AfQBpFRvG_C8YdPGAMEsyKNlNWzXibsf3RjdNoCqbtSzUQ&oe=688F5754",
    category: "Vape",
  },
  {
    id: 5,
    name: "X-Ultra",
    description: "Explore your passion, Explore your taste",
    image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/487791627_122117625074741916_4382918048910865605_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OxZcprK9lRYQ7kNvwG7YmZr&_nc_oc=AdkSC0ctirJz45brQ9Y_Ba9KvTe9n1noOz3tdW2FfEmJa0VHS-PdvS1CX8zGKpHgjB0&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=h7qClb7EUzo-k2__c0dCTQ&oh=00_AfTVXLqoo8pK7OGYWc0EgDA7Vj9k_qq8ALt9pkpUhyTxEg&oe=688F5C6A",
    category: "Vape",
  }
];

const FeaturedProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === placeholderProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? placeholderProducts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden"style={{ backgroundColor: '#F4FBFE' }}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #472160 0%, transparent 70%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(71, 33, 96, 0.1)', color: '#472160' }}>
            FEATURED COLLECTION
          </div>
          <h2 className="text-4xl md:text-4.5xl font-thin mb-8" style={{ color: '#000204', letterSpacing: '-0.02em' }}>
            Premium Products
          </h2>
          <div className="relative mb-10">
            <div className="w-32 h-0.5 mx-auto" style={{ backgroundColor: '#472160' }}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5" style={{ backgroundColor: '#FF9BFF' }}></div>
          </div>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#7A7f83' }}>
            Explore our meticulously curated collection of premium vaping solutions, where innovation meets 
            sophistication to deliver an unparalleled experience for discerning professionals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl" style={{ backgroundColor: 'rgba(71, 33, 96, 0.02)' }}>
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {placeholderProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0 items-center min-h-[500px]">
                    {/* Product Image */}
                    <div className="relative group overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 rounded-full text-xs font-semibold tracking-wider" style={{ backgroundColor: '#472160', color: '#F4FBFE' }}>
                        {product.category}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-12 md:p-16">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#000204', letterSpacing: '-0.01em' }}>
                            {product.name}
                          </h3>
                          <p className="text-lg leading-relaxed" style={{ color: '#7A7f83' }}>
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-6">
                          <button className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ backgroundColor: '#472160', color: '#F4FBFE' }}>
                            Explore Product
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            style={{ backgroundColor: 'rgba(244, 251, 254, 0.95)', border: '1px solid rgba(71, 33, 96, 0.1)' }}
          >
            <ChevronLeft className="w-6 h-6 mx-auto transition-colors duration-300 group-hover:text-white" style={{ color: '#472160' }} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            style={{ backgroundColor: 'rgba(244, 251, 254, 0.95)', border: '1px solid rgba(71, 33, 96, 0.1)' }}
          >
            <ChevronRight className="w-6 h-6 mx-auto transition-colors duration-300 group-hover:text-white" style={{ color: '#472160' }} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {placeholderProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-8 scale-110' 
                  : 'hover:scale-125'
              }`}
              style={{
                backgroundColor: idx === currentIndex ? '#472160' : 'rgba(122, 127, 131, 0.3)'
              }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/about">
            <button className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ backgroundColor: 'transparent', color: '#472160', border: '2px solid #472160' }}>
              View Complete Collection
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct; 
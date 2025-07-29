import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const placeholderProducts = [
  {
    name: "Premium Vape Devices",
    description: "High-quality vaping devices with advanced technology and sleek designs for the modern consumer.",
    image: "https://via.placeholder.com/400x300/472160/FFFFFF?text=Premium+Vape+Devices",
    category: "Hardware"
  },
  {
    name: "E-Liquid Collection",
    description: "Premium e-liquids with unique flavors and nicotine options for every preference.",
    image: "https://via.placeholder.com/400x300/FF9BFF/472160?text=E-Liquid+Collection",
    category: "Liquids"
  },
  {
    name: "Accessories & Parts",
    description: "Essential accessories and replacement parts to enhance your vaping experience.",
    image: "https://via.placeholder.com/400x300/7A7f83/FFFFFF?text=Accessories+%26+Parts",
    category: "Accessories"
  },
  {
    name: "Disposable Vapes",
    description: "Convenient and portable disposable vaping solutions for on-the-go use.",
    image: "https://via.placeholder.com/400x300/F4FBFE/472160?text=Disposable+Vapes",
    category: "Disposables"
  },
  {
    name: "Wholesale Solutions",
    description: "Bulk purchasing options and wholesale packages for retailers and distributors.",
    image: "https://via.placeholder.com/400x300/472160/FFFFFF?text=Wholesale+Solutions",
    category: "Wholesale"
  }
];

const placeholderNews = [
  {
    title: "B1G Launches New AI Platform",
    date: "July 2024",
    summary: "B1G Corporation unveils its latest AI-powered platform, revolutionizing business automation.",
    image: "https://via.placeholder.com/400x200?text=News+1"
  },
  {
    title: "Partnership with Tech Innovators",
    date: "June 2024",
    summary: "B1G partners with leading tech companies to drive digital transformation in Southeast Asia.",
    image: "https://via.placeholder.com/400x200?text=News+2"
  },
  {
    title: "Awarded Best Startup 2024",
    date: "May 2024",
    summary: "B1G Corporation receives the Best Startup Award for outstanding innovation and growth.",
    image: "https://via.placeholder.com/400x200?text=News+3"
  }
];

const placeholderStats = [
  { label: "Years in Business", value: "4+", icon: "🏢" },
  { label: "Projects Completed", value: "120+", icon: "✅" },
  { label: "Clients Served", value: "80+", icon: "🤝" },
  { label: "Awards Won", value: "6", icon: "🏆" },
];

const placeholderFAQs = [
  {
    question: "What services does B1G Corporation offer?",
    answer: "We offer AI development, cloud solutions, software engineering, and digital transformation consulting."
  },
  {
    question: "How can I get a quote for my project?",
    answer: "Simply use our contact form or email us at b1gcorporationofficial@gmail.com and our team will get in touch."
  },
  {
    question: "Where is B1G Corporation located?",
    answer: "12 Lopez Building, Romulo Street, Poblacion A 2306 Camiling Tarlac."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we serve clients globally and have experience with remote collaboration."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      

      {/* Product Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#472160] mb-6">Featured Products</h2>
            <div className="w-24 h-1 bg-[#FF9BFF] mx-auto mb-8"></div>
            <p className="text-xl text-[#7A7f83] max-w-3xl mx-auto">
              Explore our comprehensive range of premium vaping products, from high-quality devices to exclusive e-liquids, 
              designed to meet the diverse needs of vaping enthusiasts and retailers worldwide.
            </p>
          </div>
          
          <Carousel className="relative max-w-4xl mx-auto">
            <CarouselContent>
              {placeholderProducts.map((product, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <div className="relative group">
                    <img src={product.image} alt={product.name} className="rounded-2xl shadow-xl w-full h-80 object-cover transition-all duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#472160]/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-sm opacity-90">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#472160] text-white hover:bg-[#472160]/90" />
            <CarouselNext className="bg-[#472160] text-white hover:bg-[#472160]/90" />
          </Carousel>
        </div>
      </section>

              
      

      {/* News Section */}
      <section className="py-20 bg-[#F4FBFE]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#472160] mb-6">Latest News</h2>
            <div className="w-24 h-1 bg-[#FF9BFF] mx-auto mb-8"></div>
            <p className="text-xl text-[#7A7f83] max-w-3xl mx-auto">
              Stay updated with our latest innovations, partnerships, and industry insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholderNews.map((news, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-48 object-cover transition-all duration-300 hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#FF9BFF] text-[#472160] px-3 py-1 rounded-full text-sm font-semibold">
                    {news.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#472160] leading-tight">{news.title}</h3>
                  <p className="text-[#7A7f83] mb-6 leading-relaxed">{news.summary}</p>
                  <Button className="w-full bg-[#472160] text-white hover:bg-[#472160]/90 transition-all duration-300">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#472160] mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#FF9BFF] mx-auto mb-8"></div>
            <p className="text-xl text-[#7A7f83] max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can help transform your business.
            </p>
          </div>
          
          <div className="space-y-6">
            {placeholderFAQs.map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-r from-[#F4FBFE] to-white rounded-2xl shadow-lg p-8 border-l-4 border-[#FF9BFF] hover:shadow-xl transition-all duration-300">
                <div className="font-semibold text-xl text-[#472160] mb-4">{faq.question}</div>
                <div className="text-[#7A7f83] leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Index;

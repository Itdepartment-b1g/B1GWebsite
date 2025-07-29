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

const placeholderProducts = [
  "https://via.placeholder.com/400x300?text=Product+1",
  "https://via.placeholder.com/400x300?text=Product+2",
  "https://via.placeholder.com/400x300?text=Product+3",
  "https://via.placeholder.com/400x300?text=Product+4",
  "https://via.placeholder.com/400x300?text=Product+5",
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
  { label: "Years in Business", value: "4+" },
  { label: "Projects Completed", value: "120+" },
  { label: "Clients Served", value: "80+" },
  { label: "Awards Won", value: "6" },
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
      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#472160] mb-6">About B1G Corporation</h2>
          <p className="text-lg text-muted-foreground mb-4">B1G Corporation is a cutting-edge technology company dedicated to transforming ideas into revolutionary digital solutions. Founded in 2020, we have been at the forefront of innovation, combining artificial intelligence, cloud computing, and advanced software engineering to deliver exceptional results for our clients.</p>
        </div>
      </section>
      {/* Product Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Featured Products</h2>
          <Carousel className="relative max-w-2xl mx-auto">
            <CarouselContent>
              {placeholderProducts.map((src, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <img src={src} alt={`Product ${idx + 1}`} className="rounded-xl shadow-lg w-full h-64 object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      {/* Stats & Achievements Section */}
      <section className="py-16 bg-[#f8f8ff] border-t border-[#ece6f6]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#472160]">Stats & Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {placeholderStats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
                <div className="text-4xl font-extrabold text-[#472160] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* News Section */}
      <section className="py-16 bg-background border-t border-[#ece6f6]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {placeholderNews.map((news, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
                <img src={news.image} alt={news.title} className="w-full h-40 object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs text-gray-400 mb-2">{news.date}</div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{news.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{news.summary}</p>
                  <button className="mt-auto bg-[#472160] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5e347a] transition-colors">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-background border-t border-[#ece6f6]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {placeholderFAQs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                <div className="font-semibold text-[#472160] mb-2">{faq.question}</div>
                <div className="text-muted-foreground">{faq.answer}</div>
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

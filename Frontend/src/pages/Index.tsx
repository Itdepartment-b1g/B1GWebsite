import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturedProduct from "@/components/FeaturedProduct.home";
import Valentines from "@/assets/Valentines.jpg";
import SlimbarEvent from "@/assets/slimbarevent.jpg";
import { useNavigate } from "react-router-dom";

const newsArticles = [
  {  
    id: 1,
    title: "Witness the launch of X-SLiMBAR and the exclusive reveal of our next evolution: X Forge Alpha. ",
    excerpt: "B1G Corporation introduces its most sophisticated product yet, setting new standards in innovation and craftsmanship.",
    content: "Today marks a significant milestone for B1G Corporation as we unveil the X-SLIMBAR premium technology line. This revolutionary product represents the culmination of years of research, development, and unwavering commitment to excellence. The X-SLIMBAR combines cutting-edge technology with timeless design principles, offering users an unparalleled experience that transcends conventional boundaries.\n\nOur engineering team has worked tirelessly to create a product that not only meets the highest standards of performance but also exceeds expectations in terms of design and user experience. The X-SLIMBAR features state-of-the-art components, advanced connectivity options, and intuitive controls that make it accessible to users of all technical levels.\n\nThe launch event, held at our headquarters, was attended by industry leaders, technology enthusiasts, and media representatives from around the world. The response has been overwhelmingly positive, with many praising the innovative approach to product design and the attention to detail that has become synonymous with the B1G brand.\n\n'This is more than just a product launch,' said our CEO during the presentation. 'This represents our vision for the future of technology - where innovation meets elegance, and where every detail matters.'\n\nThe X-SLIMBAR is now available for pre-order through our official website and authorized retailers worldwide. Early adopters will receive exclusive benefits, including extended warranty coverage and priority customer support.",
    category: "Product Launch",
    date: "2025-06-11",
    readTime: "",
    image: SlimbarEvent,
    featured: true,
    author: "B1G Marketing Team",
    tags: [ "Product Launch", "X-SLIMBAR"]
  },
  {
    id: 2,
    title: "Work with a Heart: B1G Corporation Celebrates Valentine's Day with Camaraderie and Appreciation",
    excerpt: "B1G Corporation fosters camaraderie and appreciation through its 'Work with a Heart' initiative, bringing employees together in a vibrant and engaging Valentine's Day celebration.",
    content: "Alabang, Philippines – B1G Corporation celebrates Valentine's Day with its 'Work with a Heart' initiative, promoting camaraderie and boosting employee morale at its Alabang satellite office. Employees participate in a color-coded attire trend to reflect their relationship status, creating a lively and inclusive atmosphere. Red represents those in relationships, pink for those in complicated situations, blue for singles looking to mingle, white for those single by choice, and gray for those healing from heartbreak. Executives join the fun in a photo session, with the President humorously posing with singles by choice, while other leaders embrace their respective statuses.\n\nBeyond the colorful display, the celebration strengthens workplace culture as executives distribute chocolates and departments exchange treats and flowers. The event gains momentum with an energetic dance performance by interns, followed by a lively dance battle featuring the Sales Team. Employees also engage in a playful sweet exchange of chocolates, reminiscent of a traditional gift swap, with two colleagues in pink humorously earning the title of the event's 'love team.'\n\nAs the festivities continue, employees gather for a traditional Filipino merienda featuring sandwiches and pancit sa bilao. The highlight of the meal is the reading of heartfelt love notes collected throughout the past week. Messages range from humorous quips to words of encouragement, including 'Just Always Pray at Night (JAPAN),' 'You are the GOAT,' and a humorous misinterpretation that turns 'I love how you…' into 'I love you,' sparking laughter and camaraderie.\n\nAs the day concludes, employees take home their collected love notes as keepsakes, reinforcing B1G Corporation's commitment to fostering a workplace culture of recognition, connection, and appreciation. The 'Work with a Heart' initiative highlights the company's dedication to employee well-being, leaving team members feeling valued and motivated.",
    category: "Company News",
    date: "2025-02-14",
    readTime: "",
    image: Valentines,
    featured: false,
    author: "Rhem de Guzman, Marketing",
    tags: ["Valentines"]
  }
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
    answer: "Coherco Financial Tower, Investment Drive & Trade Ave., Madrigal Business Park, Ayala-Alabang, Muntinlupa City"
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we serve clients globally and have experience with remote collaboration."
  }
];

const Index = () => {
  const navigate = useNavigate();

  const handleReadMore = (articleId) => {
    navigate(`/news?article=${articleId}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* Product Carousel */}
      <FeaturedProduct />

      {/* News Section */}
      <section className="py-20 bg-[#F4FBFE]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4.5xl font-bold text-[#000204] mb-6">Latest News</h2>
            <div className="w-24 h-1 bg-[#FF9BFF] mx-auto mb-8"></div>
        
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.slice(0, 3).map((news, idx) => (
              <div key={news.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-48 object-cover transition-all duration-300 hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#FF9BFF] text-[#472160] px-3 py-1 rounded-full text-sm font-semibold">
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#472160] leading-tight">{news.title}</h3>
                  <p className="text-[#7A7f83] mb-6 leading-relaxed">{news.excerpt}</p>
                  <button 
                    onClick={() => handleReadMore(news.id)}
                    className="w-full bg-[#472160] text-white hover:bg-[#472160]/90 transition-all duration-300 px-4 py-2 rounded-lg"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000204] mb-6">Frequently Asked Questions</h2>
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;

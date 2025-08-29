import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, ExternalLink, Tag, X, Share2, Bookmark } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();

  const newsArticles = [
    {  id: 1,
      title: "Witness the launch of X-SLiMBAR and the exclusive reveal of our next evolution: X Forge Alpha. ",
      excerpt: "B1G Corporation introduces its most sophisticated product yet, setting new standards in innovation and craftsmanship.",
      content: "Today marks a significant milestone for B1G Corporation as we unveil the X-SLIMBAR premium technology line. This revolutionary product represents the culmination of years of research, development, and unwavering commitment to excellence. The X-SLIMBAR combines cutting-edge technology with timeless design principles, offering users an unparalleled experience that transcends conventional boundaries.\n\nOur engineering team has worked tirelessly to create a product that not only meets the highest standards of performance but also exceeds expectations in terms of design and user experience. The X-SLIMBAR features state-of-the-art components, advanced connectivity options, and intuitive controls that make it accessible to users of all technical levels.\n\nThe launch event, held at our headquarters, was attended by industry leaders, technology enthusiasts, and media representatives from around the world. The response has been overwhelmingly positive, with many praising the innovative approach to product design and the attention to detail that has become synonymous with the B1G brand.\n\n'This is more than just a product launch,' said our CEO during the presentation. 'This represents our vision for the future of technology - where innovation meets elegance, and where every detail matters.'\n\nThe X-SLIMBAR is now available for pre-order through our official website and authorized retailers worldwide. Early adopters will receive exclusive benefits, including extended warranty coverage and priority customer support.",
      category: "Product Launch",
      date: "2025-06-11",
      readTime: "",
      image: "/src/assets/slimbar event.jpg",
      featured: true,
      author: "B1G Marketing Team",
      tags: [ "Product Launch", "X-SLIMBAR"]
    },
    {
      id: 2,
      title: "Work with a Heart: B1G Corporation Celebrates Valentine’s Day with Camaraderie and Appreciation",
      excerpt: "B1G Corporation fosters camaraderie and appreciation through its ‘Work with a Heart’ initiative, bringing employees together in a vibrant and engaging Valentine’s Day celebration.",
      content: "Alabang, Philippines – B1G Corporation celebrates Valentine's Day with its 'Work with a Heart' initiative, promoting camaraderie and boosting employee morale at its Alabang satellite office. Employees participate in a color-coded attire trend to reflect their relationship status, creating a lively and inclusive atmosphere. Red represents those in relationships, pink for those in complicated situations, blue for singles looking to mingle, white for those single by choice, and gray for those healing from heartbreak. Executives join the fun in a photo session, with the President humorously posing with singles by choice, while other leaders embrace their respective statuses.\n\nBeyond the colorful display, the celebration strengthens workplace culture as executives distribute chocolates and departments exchange treats and flowers. The event gains momentum with an energetic dance performance by interns, followed by a lively dance battle featuring the Sales Team. Employees also engage in a playful sweet exchange of chocolates, reminiscent of a traditional gift swap, with two colleagues in pink humorously earning the title of the event's 'love team.'\n\nAs the festivities continue, employees gather for a traditional Filipino merienda featuring sandwiches and pancit sa bilao. The highlight of the meal is the reading of heartfelt love notes collected throughout the past week. Messages range from humorous quips to words of encouragement, including 'Just Always Pray at Night (JAPAN),' 'You are the GOAT,' and a humorous misinterpretation that turns 'I love how you…' into 'I love you,' sparking laughter and camaraderie.\n\nAs the day concludes, employees take home their collected love notes as keepsakes, reinforcing B1G Corporation's commitment to fostering a workplace culture of recognition, connection, and appreciation. The 'Work with a Heart' initiative highlights the company's dedication to employee well-being, leaving team members feeling valued and motivated.",
      category: "Company News",
      date: "2025-02-14",
      readTime: "",
      image: "https://www.b1gcorporation.com/viber_image_2025-02-20_10-26-52-244.jpg",
      featured: false,
      author: "Rhem de Guzman, Marketing",
      tags: ["Valentines"]
    }
  ];

  const categories = ["All", "Product Launch", "Company News", "Awards", "Sustainability", "Partnerships", "Customer Experience"];

  // Check for article parameter in URL and open modal automatically
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const articleId = urlParams.get('article');
    
    if (articleId) {
      const article = newsArticles.find(article => article.id === parseInt(articleId));
      if (article) {
        openArticle(article);
      }
    }
  }, [location.search]);

  const openArticle = (article) => {
    setSelectedArticle(article);
    setIsArticleModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setIsArticleModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F4FBFE] text-[#000204]">
      <Header alwaysShowBg={true} />
      
      <main className="pt-10">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background with deep purple */}
          <div className="absolute inset-0 bg-[#472160]"></div>
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#000204] via-[#472160]/80 to-[#F4FBFE]"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 155, 255, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255, 155, 255, 0.05) 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="text-left">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FF9BFF]/20 border border-[#FF9BFF]/30 rounded-full text-sm font-semibold text-[#FF9BFF] mb-8">
                  <div className="w-2 h-2 bg-[#FF9BFF] rounded-full animate-pulse"></div>
                  <span>LATEST UPDATES</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  News & EVENTS
                </h1>
                
                <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                  Stay informed about the latest innovations, company milestones, and industry developments from B1G Corporation.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-white/70">
                    <div className="w-2 h-2 bg-[#FF9BFF] rounded-full"></div>
                    <span className="text-sm">Latest Articles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <div className="w-2 h-2 bg-[#FF9BFF] rounded-full"></div>
                    <span className="text-sm">Industry Updates</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <div className="w-2 h-2 bg-[#FF9BFF] rounded-full"></div>
                    <span className="text-sm">Company News</span>
                  </div>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="w-full h-80 bg-gradient-to-br from-[#FF9BFF]/20 to-[#472160]/20 rounded-2xl border border-[#FF9BFF]/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FF9BFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#FF9BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
                      <p className="text-white/60 text-sm">Discover our latest stories</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF9BFF]/30 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FF9BFF]/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#FF9BFF]/40 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#472160] mb-4">Featured Story</h2>
              <div className="w-20 h-1 bg-[#FF9BFF]"></div>
            </div>
            
            {newsArticles.filter(article => article.featured).map(article => (
              <div key={article.id} className="bg-white shadow-lg border border-[#7A7f83]/20 rounded-2xl overflow-hidden cursor-pointer" onClick={() => openArticle(article)}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#472160]/20 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-[#FF9BFF] text-[#472160] text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-2 text-[#7A7f83] text-sm">
                        <Calendar size={14} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#7A7f83] text-sm">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-[#472160] mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-[#7A7f83] text-lg leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <button className="inline-flex items-center space-x-2 bg-[#472160] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#472160]/90 transition-all duration-300 w-fit">
                      <span>Read Full Article</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-[#F4FBFE]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#472160] mb-4">Latest News</h2>
              <div className="w-20 h-1 bg-[#FF9BFF] mb-8"></div>
              
                             {/* Category Filter */}
               <div className="flex flex-wrap gap-3 mb-8">
                 {categories.map((category, index) => (
                   <button
                     key={index}
                     onClick={() => setSelectedCategory(category)}
                     className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                       selectedCategory === category
                         ? 'bg-[#FF9BFF] text-[#472160]' 
                         : 'bg-white border border-[#7A7f83]/30 text-[#7A7f83] hover:border-[#FF9BFF] hover:text-[#472160]'
                     }`}
                   >
                     {category}
                   </button>
                 ))}
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <article key={article.id} className="bg-white shadow-lg border border-[#7A7f83]/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 cursor-pointer" onClick={() => openArticle(article)}>
                    <div className="relative h-48">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#472160]/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#FF9BFF] text-[#472160] text-xs font-bold rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-[#7A7f83] text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#472160] mb-3 leading-tight group-hover:text-[#FF9BFF] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-[#7A7f83] text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <button className="inline-flex items-center space-x-2 text-[#472160] font-semibold hover:space-x-3 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-[#F4FBFE] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-[#7A7f83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#472160] mb-2">No articles found</h3>
                    <p className="text-[#7A7f83] mb-6">
                      {selectedCategory === "All" 
                        ? "There are currently no articles available." 
                        : `No articles found in the "${selectedCategory}" category.`
                      }
                    </p>
                    <button 
                      onClick={() => setSelectedCategory("All")}
                      className="px-6 py-3 bg-[#472160] text-white rounded-lg font-semibold hover:bg-[#472160]/90 transition-all duration-300"
                    >
                      View All Articles
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 border-2 border-[#472160] text-[#472160] rounded-lg font-bold hover:bg-[#472160] hover:text-white transition-all duration-300">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Article Modal */}
        {isArticleModalOpen && selectedArticle && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                             {/* Modal Header */}
               <div className="sticky top-0 bg-white border-b border-[#7A7f83]/20 p-6 flex items-center justify-between z-10 shadow-sm">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-[#FF9BFF] text-[#472160] text-xs font-bold rounded-full">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center space-x-2 text-[#7A7f83] text-sm">
                    <Calendar size={14} />
                    <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#7A7f83] text-sm">
                    <Clock size={14} />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-[#F4FBFE] rounded-lg transition-colors">
                    <Bookmark size={16} className="text-[#7A7f83]" />
                  </button>
                  <button className="p-2 hover:bg-[#F4FBFE] rounded-lg transition-colors">
                    <Share2 size={16} className="text-[#7A7f83]" />
                  </button>
                  <button 
                    onClick={closeArticle}
                    className="p-2 hover:bg-[#F4FBFE] rounded-lg transition-colors"
                  >
                    <X size={16} className="text-[#7A7f83]" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#472160] mb-4 leading-tight">
                    {selectedArticle.title}
                  </h1>
                  <p className="text-lg text-[#7A7f83] mb-6">
                    {selectedArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-[#7A7f83]">
                    <span>By {selectedArticle.author}</span>
                    <span>•</span>
                    <span>{new Date(selectedArticle.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>

                <div className="relative mb-8">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-[#7A7f83] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-[#7A7f83]/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag size={16} className="text-[#7A7f83]" />
                    <span className="text-sm font-semibold text-[#472160]">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-[#F4FBFE] text-[#472160] text-xs font-medium rounded-full border border-[#FF9BFF]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      
      </main>
      
      <Footer />
    </div>
  );
};

export default News;

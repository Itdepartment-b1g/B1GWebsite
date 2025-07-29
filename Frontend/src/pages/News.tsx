import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, ExternalLink, Tag, X, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const newsArticles = [
    {      id: 1,
      title: "X-Forge Launches Revolutionary Premium Technology Line",
      excerpt: "B1G Corporation introduces its most sophisticated product yet, setting new standards in innovation and craftsmanship.",
      content: "Today marks a significant milestone for B1G Corporation as we unveil the X-Forge premium technology line. This revolutionary product represents the culmination of years of research, development, and unwavering commitment to excellence. The X-Forge combines cutting-edge technology with timeless design principles, offering users an unparalleled experience that transcends conventional boundaries.\n\nOur engineering team has worked tirelessly to create a product that not only meets the highest standards of performance but also exceeds expectations in terms of design and user experience. The X-Forge features state-of-the-art components, advanced connectivity options, and intuitive controls that make it accessible to users of all technical levels.\n\nThe launch event, held at our headquarters, was attended by industry leaders, technology enthusiasts, and media representatives from around the world. The response has been overwhelmingly positive, with many praising the innovative approach to product design and the attention to detail that has become synonymous with the B1G brand.\n\n'This is more than just a product launch,' said our CEO during the presentation. 'This represents our vision for the future of technology - where innovation meets elegance, and where every detail matters.'\n\nThe X-Forge is now available for pre-order through our official website and authorized retailers worldwide. Early adopters will receive exclusive benefits, including extended warranty coverage and priority customer support.",
      category: "Product Launch",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/508229341_122139444416792390_4777512534657603681_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hooCz_LwaOIQ7kNvwGUfl_P&_nc_oc=AdlsA38uUctoamFfuCWqorRNiXq6aZAGL3F75cvcjpd7wSfzUo3lROGjA88Bklu9nI4&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=pHDUeUB8Sb3Kc3uZuVtFwA&oh=00_AfQ4NmOMCRufpa7s7EuVivdDbL5dqfcXbdnHoJykC4zZCw&oe=688E6522",
      featured: true,
      author: "B1G Editorial Team",
      tags: ["Innovation", "Technology", "Product Launch", "X-Forge"]
    },
    {
      id: 2,
      title: "B1G Corporation Expands Global Presence with New European Markets",
      excerpt: "Strategic expansion into key European markets demonstrates our commitment to serving discerning customers worldwide.",
      content: "B1G Corporation is proud to announce our strategic expansion into key European markets, including Germany, France, and the Netherlands. This expansion represents a significant step in our mission to bring premium technology experiences to discerning customers worldwide. Our carefully curated approach ensures that each market receives the same level of attention to detail and commitment to excellence that has defined our brand.\n\nThe European expansion follows months of careful planning and market research, during which we identified the most promising opportunities for growth while maintaining our commitment to quality and customer satisfaction. Each new market will be served by dedicated teams of professionals who understand the local culture and business environment.\n\n'Europe represents a significant opportunity for B1G Corporation,' said our Director of International Operations. 'The European market values quality, innovation, and sustainability - values that align perfectly with our brand philosophy.'\n\nOur expansion strategy includes establishing local partnerships, hiring regional talent, and adapting our products and services to meet the specific needs of European customers. We are committed to creating jobs and contributing to the local economies in each market we enter.\n\nThe first phase of our European expansion will focus on major metropolitan areas, with plans to expand to additional cities and regions based on market response and customer demand.",
      category: "Company News",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      featured: false,
      author: "B1G Communications",
      tags: ["Expansion", "Europe", "Global Growth", "Market Entry"]
    },
    {
      id: 3,
      title: "Innovation Award: B1G Recognized for Design Excellence",
      excerpt: "Our design team receives prestigious recognition for their commitment to creating products that blend form and function seamlessly.",
      content: "B1G Corporation's design team has been honored with the prestigious Innovation in Design Award for their exceptional work on the X-Forge series. This recognition celebrates our commitment to creating products that not only meet functional requirements but also exceed aesthetic expectations. The award acknowledges our philosophy that true innovation lies in the perfect balance of form and function.\n\nThe Innovation in Design Award is presented annually to companies that demonstrate exceptional creativity, technical excellence, and user-centered design thinking. Our team was recognized for their work on the X-Forge product line, which has set new standards in the industry for both performance and aesthetics.\n\n'This award is a testament to the hard work and dedication of our entire design team,' said our Chief Design Officer. 'We believe that great design should be invisible - it should enhance the user experience without drawing attention to itself.'\n\nThe judging panel praised our approach to user experience design, noting the intuitive interface and thoughtful attention to detail that characterizes all B1G products. The award ceremony was attended by industry leaders and design professionals from around the world.\n\nThis recognition further solidifies B1G Corporation's position as a leader in innovative design and user experience. We remain committed to pushing the boundaries of what's possible in product design and user experience.",
      category: "Awards",
      date: "2024-01-05",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      featured: false,
      author: "B1G Awards Team",
      tags: ["Design", "Awards", "Innovation", "Recognition"]
    },
    {
      id: 4,
      title: "Sustainability Initiative: B1G's Commitment to Environmental Excellence",
      excerpt: "New sustainability program demonstrates our dedication to responsible innovation and environmental stewardship.",
      content: "B1G Corporation is proud to announce our comprehensive sustainability initiative, which represents our commitment to environmental excellence and responsible innovation. This program encompasses every aspect of our operations, from product design and manufacturing to packaging and distribution. We believe that true luxury and innovation must go hand in hand with environmental responsibility.\n\nOur sustainability program includes several key initiatives designed to reduce our environmental impact while maintaining the high quality standards that our customers expect. These initiatives include the use of recycled materials in our products, energy-efficient manufacturing processes, and carbon-neutral shipping options.\n\n'Environmental responsibility is not just a corporate initiative for us - it's a core value that guides every decision we make,' said our Director of Sustainability. 'We believe that businesses have a responsibility to lead by example when it comes to environmental stewardship.'\n\nThe program also includes partnerships with environmental organizations and research institutions to develop new sustainable technologies and materials. We are committed to sharing our findings with the broader industry to encourage widespread adoption of sustainable practices.\n\nCustomers can now choose carbon-neutral shipping options when purchasing our products, and we are working to make all our packaging 100% recyclable by the end of the year. These initiatives represent just the beginning of our commitment to environmental excellence.",
      category: "Sustainability",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      featured: false,
      author: "B1G Sustainability Team",
      tags: ["Sustainability", "Environment", "Green Technology", "Corporate Responsibility"]
    },
    {
      id: 5,
      title: "Partnership Announcement: B1G Collaborates with Leading Tech Innovators",
      excerpt: "Strategic partnerships with industry leaders will accelerate our innovation pipeline and enhance product capabilities.",
      content: "B1G Corporation is excited to announce strategic partnerships with several leading technology innovators. These collaborations will accelerate our innovation pipeline and enhance our product capabilities, ensuring that we continue to deliver cutting-edge solutions that meet the evolving needs of our customers. These partnerships represent our commitment to staying at the forefront of technological advancement.\n\nThe partnerships include collaborations with companies specializing in artificial intelligence, cloud computing, and advanced materials science. These collaborations will enable us to integrate the latest technological innovations into our products while maintaining our commitment to quality and user experience.\n\n'These partnerships represent a significant step forward for B1G Corporation,' said our Chief Technology Officer. 'By working with industry leaders, we can accelerate our innovation timeline and bring new technologies to market faster than ever before.'\n\nEach partnership has been carefully selected to align with our strategic goals and brand values. We are committed to maintaining the high standards of quality and innovation that our customers have come to expect from B1G products.\n\nThe first products resulting from these partnerships are expected to launch later this year, with additional innovations planned for the coming months. We are excited to share more details about these collaborations as they develop.",
      category: "Partnerships",
      date: "2023-12-20",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      featured: false,
      author: "B1G Partnerships Team",
      tags: ["Partnerships", "Innovation", "Technology", "Collaboration"]
    },
    {
      id: 6,
      title: "Customer Experience: B1G Introduces Premium Support Program",
      excerpt: "New premium support program ensures that every customer receives the exceptional service they deserve.",
      content: "B1G Corporation is pleased to introduce our new premium support program, designed to ensure that every customer receives the exceptional service they deserve. This comprehensive program includes personalized assistance, priority support, and exclusive access to our team of experts. We believe that exceptional products deserve exceptional support, and this program reflects our commitment to customer satisfaction.\n\nThe premium support program includes 24/7 customer service, priority handling of support requests, and exclusive access to our team of product specialists. Customers enrolled in the program will also receive early access to new features and updates, as well as personalized training sessions to help them get the most out of their B1G products.\n\n'Customer satisfaction has always been our top priority,' said our Director of Customer Experience. 'This new program represents our commitment to providing the highest level of service to our most valued customers.'\n\nThe program is available to all customers who purchase our premium products, with additional benefits available to customers who choose to upgrade to our highest tier of support. We believe that this program will set a new standard for customer service in our industry.\n\nEarly feedback from customers enrolled in the program has been overwhelmingly positive, with many praising the personalized attention and quick response times. We are committed to continuously improving the program based on customer feedback and evolving needs.",
      category: "Customer Experience",
      date: "2023-12-15",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      featured: false,
      author: "B1G Customer Experience Team",
      tags: ["Customer Service", "Support", "Premium Experience", "Customer Satisfaction"]
    }
  ];

  const categories = ["All", "Product Launch", "Company News", "Awards", "Sustainability", "Partnerships", "Customer Experience"];

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
    ? newsArticles.filter(article => !article.featured)
    : newsArticles.filter(article => !article.featured && article.category === selectedCategory);

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
                  News & <span className="text-[#FF9BFF] [text-shadow:none] [-webkit-text-stroke:0] [text-stroke:0]">EVENTS</span>
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

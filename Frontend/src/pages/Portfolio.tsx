import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Phone, Mail, Clock, FileText, Users, Settings, Shield, Zap } from "lucide-react";

const Support = () => {
  const supportCategories = [
    {
      title: "Technical Support",
      description: "Get help with product setup, troubleshooting, and technical issues",
      icon: Settings,
      color: "from-[#FF9BFF] to-[#FF9BFF]/70",
      features: ["24/7 Live Chat", "Remote Assistance", "Video Tutorials", "Knowledge Base"]
    },
    {
      title: "Customer Service",
      description: "Assistance with orders, returns, and general inquiries",
      icon: Users,
      color: "from-[#472160] to-[#472160]/70",
      features: ["Order Tracking", "Return Processing", "Account Management", "Billing Support"]
    },
    {
      title: "Product Support",
      description: "Help with product features, updates, and optimization",
      icon: Zap,
      color: "from-[#FF9BFF] to-[#FF9BFF]/70",
      features: ["Feature Guides", "Update Notifications", "Performance Tips", "Compatibility Check"]
    },
    {
      title: "Security & Privacy",
      description: "Support for security concerns and privacy protection",
      icon: Shield,
      color: "from-[#472160] to-[#472160]/70",
      features: ["Security Audits", "Privacy Settings", "Data Protection", "Incident Response"]
    }
  ];

  const faqs = [
    {
      question: "How do I contact B1G support?",
      answer: "You can reach our support team through multiple channels: live chat on our website, email at support@b1gcorporation.com, or by calling our toll-free number 1-800-B1G-HELP."
    },
    {
      question: "What are your support hours?",
      answer: "Our technical support is available 24/7. Customer service is available Monday to Friday, 9 AM to 6 PM EST, and Saturday 10 AM to 4 PM EST."
    },
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond to urgent technical issues within 2 hours, general inquiries within 24 hours, and non-urgent requests within 48 hours."
    },
    {
      question: "Do you offer remote assistance?",
      answer: "Yes, our technical support team can provide remote assistance for complex issues. We use secure, encrypted connections to ensure your privacy and security."
    },
    {
      question: "What information should I provide when contacting support?",
      answer: "Please include your product model, serial number, detailed description of the issue, and any error messages you're seeing. This helps us provide faster, more accurate assistance."
    },
    {
      question: "Is there a warranty on B1G products?",
      answer: "All B1G products come with a standard 1-year warranty. Extended warranty options are available for purchase. Contact our support team for warranty claims and service."
    }
  ];

  const contactMethods = [
    {
      title: "Location",
      description: "Visit our corporate headquarters",
      icon: MessageCircle,
      action: "View Map",
      color: "bg-[#FF9BFF] text-[#472160]"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      action: "Call Now",
      color: "bg-[#472160] text-white"
    },
    {
      title: "Email Support",
      description: "Contact us via email",
      icon: Mail,
      action: "b1gcorporationofficial@gmail.com",
      color: "bg-[#FF9BFF] text-[#472160]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4FBFE] text-[#000204]">
      <Header alwaysShowBg={true} />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with deep purple */}
        <div className="absolute inset-0 bg-[#472160]"></div>
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-br from-[#000204] via-[#472160]/80 to-[#F4FBFE]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FF9BFF]/20 border border-[#FF9BFF]/30 rounded-full text-sm font-semibold text-[#FF9BFF] mb-8">
                <div className="w-2 h-2 bg-[#FF9BFF] rounded-full animate-pulse"></div>
                <span>24/7 SUPPORT</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Support & Assistance
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                Get the help you need with our comprehensive support system designed to solve your issues quickly and efficiently.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-white/70">
                  <div className="w-2 h-2 bg-[#FF9BFF] rounded-full"></div>
                  <span className="text-sm">24/7 Technical Support</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <div className="w-2 h-2 bg-[#FF9BFF] rounded-full"></div>
                  <span className="text-sm">Expert Assistance</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <div className="w-2 h-2 bg-[#FF9BFF] rounded-full"></div>
                  <span className="text-sm">Multiple Contact Options</span>
                </div>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-80 bg-gradient-to-br from-[#FF9BFF]/20 to-[#472160]/20 rounded-2xl border border-[#FF9BFF]/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FF9BFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-[#FF9BFF]" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Need Help?</h3>
                    <p className="text-white/60 text-sm">We're here to assist you</p>
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

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#472160] mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-[#FF9BFF]"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white shadow-lg border border-[#7A7f83]/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#472160]">{method.title}</CardTitle>
                  <CardDescription className="text-[#7A7f83]">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <button className={`px-6 py-3 ${method.color} rounded-lg font-semibold hover:opacity-90 transition-all duration-300 w-full`}>
                    {method.action}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-[#F4FBFE]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#472160] mb-4">Support Categories</h2>
            <div className="w-20 h-1 bg-[#FF9BFF]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <Card key={index} className="bg-white shadow-lg border border-[#7A7f83]/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-[#472160]">{category.title}</CardTitle>
                      <CardDescription className="text-[#7A7f83]">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[#7A7f83] text-sm">
                        <div className="w-2 h-2 bg-[#FF9BFF] rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#472160] mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#FF9BFF] mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-lg border border-[#7A7f83]/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#472160] mb-2">{faq.question}</CardTitle>
                  <CardDescription className="text-[#7A7f83] leading-relaxed">{faq.answer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F4FBFE]">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#472160] mb-4">Still Need Help?</h2>
          <p className="text-lg text-[#7A7f83] mb-8">
            Our support team is ready to assist you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#472160] text-white rounded-lg font-bold hover:bg-[#472160]/90 transition-all duration-300">
              Contact Support
            </button>
            <button className="px-8 py-4 border-2 border-[#472160] text-[#472160] rounded-lg font-bold hover:bg-[#472160] hover:text-white transition-all duration-300">
              Browse Knowledge Base
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
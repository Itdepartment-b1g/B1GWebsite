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
      color: "bg-[#472160] text-white"
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
      color: "bg-[#472160] text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4FBFE] text-[#000204]">
      <Header alwaysShowBg={true} />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Professional gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000204] via-[#472160] to-[#000204]"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
             
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional Support
              </h1>
              
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
                Experience enterprise-grade support with our dedicated team of technical experts, ensuring your business operations run smoothly and efficiently.
              </p>
              
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 text-white/80">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Security First Approach</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Dedicated Account Manager</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">24/7 Priority Response</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Comprehensive Documentation</span>
                </div>
              </div> */}
{/*               
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-[#472160] rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Contact Support Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  View Service Level Agreement
                </button>
              </div> */}
            </div>
            
            {/* Corporate Visual Element */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main corporate card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Solutions</h3>
                    <p className="text-white/70 text-sm">Tailored support for your business needs</p>
                  </div>
                  
                  {/* Stats row */}
                
                </div>
              </div>
              
              {/* Subtle geometric elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-white/20 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-white/30 rounded-lg rotate-45"></div>
              <div className="absolute top-1/3 -right-4 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="absolute bottom-1/3 -left-4 w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#472160] mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-[#472160]"></div>
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
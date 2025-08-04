import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";

const Portfolio = () => {
  const contactMethods = [
    {
      title: "Location",
      description: "12 Lopez Building, Romulo Street, Poblacion A 2306 Camiling Tarlac",
      icon: MessageCircle,
      color: "bg-[#FF9BFF] text-[#472160]"
    },
    {
      title: "Phone Support",
      description: "+639690743506",
      icon: Phone,
      action: "Call Now",
      color: "bg-[#472160] text-white"
    },
    {
      title: "Email Support",
      description: "b1gcorporationofficial@gmail.com",
      icon: Mail,
      action: "b1gcorporationofficial@gmail.com",
      color: "bg-[#FF9BFF] text-[#472160]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4FBFE] text-[#000204]">
      <Header alwaysShowBg={true} />
      
      {/* Hero Section */}
      <section className="relative py-32 pt-62 md:pt-58 overflow-hidden mt-8">
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
                <span>B1G SUPPORT</span>
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
            
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
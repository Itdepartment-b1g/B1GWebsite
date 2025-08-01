import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#472160] via-[#472160]/95 to-[#000204] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,155,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,155,255,0.08),transparent_50%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#FF9BFF]/20 rounded-full animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 border border-[#FF9BFF]/15 rounded-full animate-pulse-subtle" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-[#FF9BFF]/25 rounded-full animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-[#FF9BFF]/20 rounded-full animate-pulse-subtle" style={{ animationDelay: "3s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-[#FF9BFF]/60 rounded-full animate-float-light"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-[#FF9BFF]/40 rounded-full animate-float-light" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#FF9BFF]/70 rounded-full animate-float-light" style={{ animationDelay: "2.5s" }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,155,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,155,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-6 rounded-3xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm mb-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#FF9BFF] to-white bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Let's collaborate and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Info */}
          <div className="text-white space-y-12">
            {/* Main Description */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FF9BFF]/5 to-transparent border border-[#FF9BFF]/20 backdrop-blur-md">
              <p className="text-lg text-white/90 leading-relaxed">
                If you would like to discuss your project needs, explore collaboration opportunities, 
                or have any questions about our services, get in touch with us. One of our team members 
                will get back to you promptly.
              </p>
            </div>
            
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="group p-6 rounded-2xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm hover:border-[#FF9BFF]/40 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF9BFF]/20 flex items-center justify-center group-hover:bg-[#FF9BFF]/30 transition-all duration-300">
                    <Mail className="text-[#FF9BFF] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Email Us</h4>
                    <p className="text-white/80 hover:text-[#FF9BFF] transition-colors duration-300 cursor-pointer">
                      b1gcorporationofficial@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="group p-6 rounded-2xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm hover:border-[#FF9BFF]/40 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF9BFF]/20 flex items-center justify-center group-hover:bg-[#FF9BFF]/30 transition-all duration-300">
                    <Phone className="text-[#FF9BFF] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Call Us</h4>
                    <p className="text-white/80 hover:text-[#FF9BFF] transition-colors duration-300 cursor-pointer">
                      +63 (XXX) XXX-XXXX
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Address Card */}
              <div className="group p-6 rounded-2xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm hover:border-[#FF9BFF]/40 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF9BFF]/20 flex items-center justify-center group-hover:bg-[#FF9BFF]/30 transition-all duration-300">
                    <MapPin className="text-[#FF9BFF] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Visit Us</h4>
                    <p className="text-white/80 leading-relaxed">
                      12 Lopez Building, Romulo Street<br />
                      Poblacion A 2306 Camiling Tarlac<br />
                      Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="relative">
            {/* Glow effect behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9BFF]/20 to-transparent rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-[#F4FBFE]/10 to-[#FF9BFF]/5 backdrop-blur-md rounded-3xl p-8 border border-[#FF9BFF]/30 shadow-2xl">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-white/70">We'll get back to you within 24 hours</p>
              </div>

              <form className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <Input
                    placeholder="Full Name"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-12 rounded-xl"
                  />
                </div>
                
                {/* Contact Number Input */}
                <div className="group">
                  <Input
                    placeholder="Contact Number"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-12 rounded-xl"
                  />
                </div>
                
                {/* Email Input */}
                <div className="group">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-12 rounded-xl"
                  />
                </div>
                
                {/* Message Textarea */}
                <div className="group">
                  <Textarea
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 resize-none rounded-xl"
                  />
                </div>
                
                {/* Enhanced Submit Button */}
                <Button 
                  className="group w-full bg-gradient-to-r from-[#FF9BFF] to-[#FF9BFF]/80 text-[#472160] hover:from-[#FF9BFF]/90 hover:to-[#FF9BFF]/70 font-bold text-lg py-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#FF9BFF]/25 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-4 rounded-xl bg-[#FF9BFF]/10 border border-[#FF9BFF]/20">
                <p className="text-sm text-white/70 text-center">
                  <span className="inline-block w-2 h-2 bg-[#FF9BFF] rounded-full mr-2 animate-pulse"></span>
                  Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
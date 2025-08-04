import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-[#472160] via-[#472160]/95 to-[#000204] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,155,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,155,255,0.08),transparent_50%)]"></div>
        
        {/* Animated background elements - Responsive sizes */}
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-20 h-20 md:w-40 md:h-40 border border-[#FF9BFF]/20 rounded-full animate-pulse-subtle"></div>
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-28 h-28 md:w-56 md:h-56 border border-[#FF9BFF]/15 rounded-full animate-pulse-subtle" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-32 md:h-32 border border-[#FF9BFF]/25 rounded-full animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 md:w-24 md:h-24 border border-[#FF9BFF]/20 rounded-full animate-pulse-subtle" style={{ animationDelay: "3s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF9BFF]/60 rounded-full animate-float-light"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 md:w-1.5 md:h-1.5 bg-[#FF9BFF]/40 rounded-full animate-float-light" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 md:w-1 md:h-1 bg-[#FF9BFF]/70 rounded-full animate-float-light" style={{ animationDelay: "2.5s" }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,155,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,155,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px sm:60px sm:60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header - Responsive */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block p-4 md:p-6 rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm mb-6 md:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[#FF9BFF] to-white bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
            Ready to transform your vision into reality? Let's collaborate and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Enhanced Contact Info - Responsive */}
          <div className="text-white space-y-8 md:space-y-12 order-2 lg:order-1">
            {/* Main Description */}
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#FF9BFF]/5 to-transparent border border-[#FF9BFF]/20 backdrop-blur-md">
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                If you would like to discuss your project needs, explore collaboration opportunities, 
                or have any questions about our services, get in touch with us. One of our team members 
                will get back to you promptly.
              </p>
            </div>
            
            {/* Contact Information Cards - Responsive */}
            <div className="space-y-4 md:space-y-6">
              {/* Email Card */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm hover:border-[#FF9BFF]/40 transition-all duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#FF9BFF]/20 flex items-center justify-center group-hover:bg-[#FF9BFF]/30 transition-all duration-300">
                    <Mail className="text-[#FF9BFF] w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 md:mb-2 text-base md:text-lg">Email Us</h4>
                    <p className="text-sm md:text-base text-white/80 hover:text-[#FF9BFF] transition-colors duration-300 cursor-pointer break-all">
                      b1gcorporationofficial@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm hover:border-[#FF9BFF]/40 transition-all duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#FF9BFF]/20 flex items-center justify-center group-hover:bg-[#FF9BFF]/30 transition-all duration-300">
                    <Phone className="text-[#FF9BFF] w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 md:mb-2 text-base md:text-lg">Call Us</h4>
                    <p className="text-sm md:text-base text-white/80 hover:text-[#FF9BFF] transition-colors duration-300 cursor-pointer">
                      +63 (XXX) XXX-XXXX
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Address Card */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#FF9BFF]/10 to-transparent border border-[#FF9BFF]/20 backdrop-blur-sm hover:border-[#FF9BFF]/40 transition-all duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#FF9BFF]/20 flex items-center justify-center group-hover:bg-[#FF9BFF]/30 transition-all duration-300">
                    <MapPin className="text-[#FF9BFF] w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 md:mb-2 text-base md:text-lg">Visit Us</h4>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      12 Lopez Building, Romulo Street<br />
                      Poblacion A 2306 Camiling Tarlac<br />
                      Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form - Responsive */}
          <div className="relative order-1 lg:order-2">
            {/* Glow effect behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9BFF]/20 to-transparent rounded-2xl md:rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-[#F4FBFE]/10 to-[#FF9BFF]/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#FF9BFF]/30 shadow-2xl">
              {/* Form Header - Responsive */}
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Send us a Message</h3>
                <p className="text-sm md:text-base text-white/70">We'll get back to you within 24 hours</p>
              </div>

              <form className="space-y-4 md:space-y-6">
                {/* Name Input */}
                <div className="group">
                  <Input
                    placeholder="Full Name"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>
                
                {/* Contact Number Input */}
                <div className="group">
                  <Input
                    placeholder="Contact Number"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>
                
                {/* Email Input */}
                <div className="group">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>

                {/* Company/Store Name Input */}
                <div className="group">
                  <Input
                    placeholder="Company / Store Name"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>

                {/* Location Fields - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="group">
                    <Select>
                      <SelectTrigger className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base">
                        <SelectValue placeholder="Select Region" className="text-white/50" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-[#FF9BFF]/30 text-white max-h-48 md:max-h-60">
                        <SelectItem value="region1">Region I - Ilocos Region</SelectItem>
                        <SelectItem value="region2">Region II - Cagayan Valley</SelectItem>
                        <SelectItem value="region3">Region III - Central Luzon</SelectItem>
                        <SelectItem value="region4a">Region IV-A - CALABARZON</SelectItem>
                        <SelectItem value="mimaropa">MIMAROPA - Southwestern Tagalog</SelectItem>
                        <SelectItem value="region5">Region V - Bicol Region</SelectItem>
                        <SelectItem value="region6">Region VI - Western Visayas</SelectItem>
                        <SelectItem value="region7">Region VII - Central Visayas</SelectItem>
                        <SelectItem value="region8">Region VIII - Eastern Visayas</SelectItem>
                        <SelectItem value="region9">Region IX - Zamboanga Peninsula</SelectItem>
                        <SelectItem value="region10">Region X - Northern Mindanao</SelectItem>
                        <SelectItem value="region11">Region XI - Davao Region</SelectItem>
                        <SelectItem value="region12">Region XII - SOCCSKSARGEN</SelectItem>
                        <SelectItem value="region13">Region XIII - Caraga</SelectItem>
                        <SelectItem value="ncr">NCR - National Capital Region</SelectItem>
                        <SelectItem value="car">CAR - Cordillera Administrative Region</SelectItem>
                        <SelectItem value="barmm">BARMM - Bangsamoro Autonomous Region in Muslim Mindanao</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="group">
                    <Input
                      placeholder="City"
                      className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="group">
                  <Input
                    placeholder="Barangay"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>

                <div className="group">
                  <Input
                    placeholder="Street Number / Street Name / Village"
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>

                {/* Type of Business - Responsive */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">Type of Business</label>
                  <div className="space-y-2 md:space-y-3">
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group/checkbox">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-2 border-[#FF9BFF]/30 bg-white/5 text-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:ring-2 transition-all duration-300"
                      />
                      <span className="text-sm md:text-base text-white/90 group-hover/checkbox:text-white transition-colors duration-300">Distributor</span>
                    </label>
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group/checkbox">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-2 border-[#FF9BFF]/30 bg-white/5 text-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:ring-2 transition-all duration-300"
                      />
                      <span className="text-sm md:text-base text-white/90 group-hover/checkbox:text-white transition-colors duration-300">Retailer</span>
                    </label>
                  </div>
                </div>
                
                {/* Message Textarea - Responsive */}
                <div className="group">
                  <Textarea
                    placeholder="Message - Tell us about your business needs or inquiry..."
                    rows={4}
                    className="bg-white/5 border-[#FF9BFF]/30 text-white placeholder:text-white/50 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 focus:bg-white/10 transition-all duration-300 resize-none rounded-lg md:rounded-xl text-sm md:text-base min-h-[100px] md:min-h-[120px]"
                  />
                </div>
                
                {/* Enhanced Submit Button - Responsive */}
                <Button 
                  className="group w-full bg-gradient-to-r from-[#FF9BFF] to-[#FF9BFF]/80 text-[#472160] hover:from-[#FF9BFF]/90 hover:to-[#FF9BFF]/70 font-bold text-base md:text-lg py-4 md:py-6 rounded-lg md:rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#FF9BFF]/25 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </form>

              {/* Additional Info - Responsive */}
              <div className="mt-6 md:mt-8 p-3 md:p-4 rounded-lg md:rounded-xl bg-[#FF9BFF]/10 border border-[#FF9BFF]/20">
                <p className="text-xs md:text-sm text-white/70 text-center">
                  <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF9BFF] rounded-full mr-2 animate-pulse"></span>
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
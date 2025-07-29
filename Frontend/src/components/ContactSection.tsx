import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#472160] via-[#472160]/90 to-[#000204] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#FF9BFF]/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#FF9BFF]/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#FF9BFF]/20 rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
             Get In Touch
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
             If you would 
              like to discuss your project needs, get in touch with us by email, and one 
              of our team members will get back to you.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p className="text-white/80">b1gcorporationofficial@gmail.com</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p className="text-white/80">
                12 Lopez Building, Romulo Street
                Poblacion A 2306 Camiling Tarlac
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#F4FBFE]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#FF9BFF]/20">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  className="bg-white/10 border-[#FF9BFF]/20 text-white placeholder:text-white/60 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Contact Number"
                  className="bg-white/10 border-[#FF9BFF]/20 text-white placeholder:text-white/60 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-[#FF9BFF]/20 text-white placeholder:text-white/60 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-white/10 border-[#FF9BFF]/20 text-white placeholder:text-white/60 focus:border-[#FF9BFF] focus:ring-[#FF9BFF]/20 resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-[#FF9BFF] text-[#472160] hover:bg-[#FF9BFF]/90 font-bold transition-all duration-300"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
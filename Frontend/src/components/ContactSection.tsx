import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary-foreground/20 rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Get In Touch
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              We are located in the vibrant heart of the City of London. If you would 
              like to discuss your project needs, get in touch with us by email, and one 
              of our team members will get back to you.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary-foreground mb-2">Email</h4>
                <p className="text-primary-foreground/80">info@smart-synth.com</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-foreground mb-2">Address</h4>
                <p className="text-primary-foreground/80">
                  124 City Road, London,<br />
                  England, EC1V 2NX
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Contact Number"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 resize-none"
                />
              </div>
              
              <Button 
                variant="hero"
                size="lg" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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
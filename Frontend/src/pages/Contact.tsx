import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header alwaysShowBg={true} />
      <main className="pt-12">
        <section className="py-20 px-6">
          <div className="container mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
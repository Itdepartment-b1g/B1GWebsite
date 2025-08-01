import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header alwaysShowBg={true} />
      <main className="pt-13">
    
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
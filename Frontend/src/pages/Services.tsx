import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header alwaysShowBg={true} />
      {/* Hero Banner */}
      <section className="pt-32 md:pt-40 pb-24 bg-gradient-to-br from-[#472160] to-[#7c3aed] text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">About B1G Corporation</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">Empowering Innovation, Delivering Excellence</p>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 max-w-5xl">
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#472160] mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-center">To bridge the gap between imagination and reality through innovative technology solutions that empower businesses and individuals to achieve their full potential.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#472160] mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-center">To be the leading catalyst for digital transformation, creating a future where technology seamlessly enhances human capabilities and experiences.</p>
          </div>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-16 bg-[#f8f8ff]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#472160] mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground mb-4">B1G Corporation is a cutting-edge technology company dedicated to transforming ideas into revolutionary digital solutions. Founded in 2020, we have been at the forefront of innovation, combining artificial intelligence, cloud computing, and advanced software engineering to deliver exceptional results for our clients.</p>
        </div>
      </section>
      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#472160] mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">💡</span>
              <h3 className="text-xl font-bold mb-2 text-[#472160]">Innovation</h3>
              <p className="text-muted-foreground text-center">We embrace creativity and forward-thinking to deliver unique solutions.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">🤝</span>
              <h3 className="text-xl font-bold mb-2 text-[#472160]">Integrity</h3>
              <p className="text-muted-foreground text-center">We act with honesty and transparency in all our relationships.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">🚀</span>
              <h3 className="text-xl font-bold mb-2 text-[#472160]">Excellence</h3>
              <p className="text-muted-foreground text-center">We strive for the highest standards in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-12 bg-[#f3e8ff] text-center">
        <h2 className="text-3xl font-bold mb-2 text-[#472160]">Ready to work with us?</h2>
        <p className="mb-6 text-muted-foreground">Contact our team to start your digital transformation journey today.</p>
        <a href="#contact" className="inline-block bg-[#472160] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#5e347a] transition-colors">Contact Us</a>
      </section>
      <Footer />
    </div>
  );
};

export default About;
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header alwaysShowBg={true} />
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
              About SmartSynth
            </h1>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-xl mb-6">
                We are a cutting-edge technology company dedicated to transforming ideas into revolutionary digital solutions.
              </p>
              <p className="mb-6">
                Founded in 2020, SmartSynth has been at the forefront of innovation, combining artificial intelligence, 
                cloud computing, and advanced software engineering to deliver exceptional results for our clients.
              </p>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Mission</h2>
              <p className="mb-6">
                To bridge the gap between imagination and reality through innovative technology solutions that 
                empower businesses and individuals to achieve their full potential.
              </p>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Vision</h2>
              <p className="mb-6">
                To be the leading catalyst for digital transformation, creating a future where technology 
                seamlessly enhances human capabilities and experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
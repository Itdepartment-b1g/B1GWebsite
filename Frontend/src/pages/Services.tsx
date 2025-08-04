import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, Target, Globe, Heart, Award } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#F4FBFE]">
      <Header alwaysShowBg={true} />
      
      {/* Hero Banner */}
      <section className="pt-32 md:pt-40 pb-24 bg-gradient-to-br from-[#472160] via-[#472160] to-[#000204] text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,155,255,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,251,254,0.08),transparent_60%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white pt-10 mb-4 md:mb-6 drop-shadow-2xl leading-tight">
            About B1G Corporation
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Empowering Innovation, Delivering Excellence
          </p>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#FF9BFF] to-[#F4FBFE] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group bg-gradient-to-br from-[#472160]/5 to-[#000204]/5 rounded-2xl p-8 md:p-12 border border-[#472160]/10 hover:border-[#FF9BFF]/30 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#472160] rounded-xl flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#472160]">Our Mission</h2>
              </div>
              <p className="text-lg text-[#7A7f83] leading-relaxed">
                At B1G Corporation, our mission is clear and resonates deeply with our community. We strive to provide everyone with hassle-free access to top-quality products. We are leading a revolutionary change in tobacco consumption, dedicated to helping smokers transition to safer alternatives seamlessly. Through our innovative offerings and unwavering support, we empower individuals to take control of their journey, making the transition from smoking to vaping not just achievable but truly enjoyable.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-gradient-to-br from-[#472160]/5 to-[#000204]/5 rounded-2xl p-8 md:p-12 border border-[#472160]/10 hover:border-[#FF9BFF]/30 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#472160] rounded-xl flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#472160]">Our Vision</h2>
              </div>
              <p className="text-lg text-[#7A7f83] leading-relaxed">
                We envision a world where the dangers of cigarettes are a relic of the past. Our vision is to ensure that safer alternatives are readily available, not only throughout the Philippines but also on a global scale. B1G Corporation is committed to distributing global brands and ensuring compliance within the vape industry, making us a competitive and reliable partner in the distribution sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-5 bg-gradient-to-br from-[#F4FBFE] to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-3xl font-bold text-[#472160] mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF9BFF] to-[#F4FBFE] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[#7A7f83] max-w-4xl mx-auto leading-relaxed">
              B1G Corporation has rapidly established itself as a leader in the vape distribution industry. We have achieved significant milestones, expanding our reach both nationally and internationally. Our mission is to create a seamless distribution process that connects and supports a thriving community of vaping enthusiasts and smokers seeking safer alternatives.
            </p>
          </div>

          {/* Stats */}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-3xl font-bold text-[#472160] mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF9BFF] to-[#F4FBFE] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[#7A7f83] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "INTEGRITY",
                description: "We conduct our business with honesty and transparency, building trust with our customers and partners.",
                color: "bg-[#472160]"
              },
              {
                icon: Zap,
                title: "INNOVATION",
                description: "We continuously seek new ways to improve our products and services, staying ahead in the industry.",
                color: "bg-[#472160]"
              },
              {
                icon: Heart,
                title: "CUSTOMER SATISFACTION",
                description: "We prioritize the happiness and needs of our customers, striving to exceed their expectations.",
                color: "bg-[#472160]"
              },
              {
                icon: Users,
                title: "COMMUNITY",
                description: "We believe in fostering a supportive and thriving community, where every member feels valued and empowered.",
                color: "bg-[#472160]"
              }
            ].map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-[#F4FBFE] rounded-2xl p-8 border border-[#472160]/10 hover:border-[#FF9BFF]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#472160] mb-4">{value.title}</h3>
                <p className="text-[#7A7f83] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Services;
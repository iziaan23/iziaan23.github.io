import { Building2, Award, Users, TrendingUp, Target, Eye, Shield, Zap, Heart, Globe } from "lucide-react";
import aboutBg from "@/assets/backgrounds/about-bg.jpg";
import manufacturingBg from "@/assets/backgrounds/manufacturing-bg.jpg";

const About = () => {
  const stats = [
    { icon: Building2, label: "Years of Excellence", value: "15+", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "Quality Certifications", value: "ISO 9001", color: "from-gold to-amber-500" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-emerald-500 to-green-500" },
    { icon: TrendingUp, label: "Annual Growth", value: "40%", color: "from-purple-500 to-pink-500" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative packaging and labeling solutions that empower brands to stand out in competitive markets while maintaining the highest standards of quality and sustainability.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the Middle East's most trusted and innovative packaging partner, recognized for excellence, reliability, and commitment to environmental responsibility.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Our Values",
      description: "Quality without compromise, customer-first approach, continuous innovation, environmental consciousness, and building lasting partnerships based on trust and integrity.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    { icon: Zap, title: "Innovation", description: "Cutting-edge technology and creative solutions" },
    { icon: Heart, title: "Customer Focus", description: "Your success is our priority" },
    { icon: Globe, title: "Global Standards", description: "World-class quality and service" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Header */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-900/90 to-indigo-900/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
            <span className="text-white/90 text-sm font-medium">Established 2009 • Dubai, UAE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            About <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">SquarePack</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Building the future of packaging and labeling in Dubai and beyond
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-10 rounded-3xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-navy mb-3 font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${manufacturingBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-poppins text-center animate-fade-in-up">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed">
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <p>
                  <strong className="text-gold">SquarePack FZC</strong> is Dubai's leading provider of premium packaging and labeling solutions, serving diverse industries including FMCG, healthcare, electronics, and industrial sectors. Established with a vision to transform the packaging industry, we have grown to become a trusted partner for over 500 companies across the UAE and the Middle East.
                </p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <p>
                  Our state-of-the-art facility in Dubai combines advanced technology with skilled craftsmanship to produce labels, ribbons, packaging films, and specialized packaging products that meet international quality standards. We take pride in our <strong className="text-gold">ISO 9001 certification</strong>, which reflects our commitment to quality management and continuous improvement.
                </p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <p>
                  What sets us apart is our customer-centric approach. We don't just supply products; we partner with our clients to understand their unique needs and deliver customized solutions that enhance their brand presence and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-16 font-poppins text-center">
            Our Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-10 rounded-3xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4 font-poppins">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-indigo-900" />
        
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 font-poppins text-center animate-fade-in-up">
            Why Choose SquarePack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-scale-in shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3 font-poppins">{feature.title}</h3>
                  <p className="text-white/80 text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Building2, Award, Users, TrendingUp, Target, Eye, Shield, Zap, Heart, Globe } from "lucide-react";
import aboutBg from "@/assets/backgrounds/about-bg.jpg";
import manufacturingBg from "@/assets/backgrounds/manufacturing-bg.jpg";

const About = () => {
  const stats = [
    { icon: Building2, label: "Years of Excellence", value: "15+", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "Quality Certifications", value: "ISO 9001", color: "from-gold to-yellow-500" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, label: "Growth Rate", value: "40%", color: "from-purple-500 to-pink-500" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative packaging and labeling solutions that empower brands to stand out in competitive markets while maintaining the highest standards of quality and sustainability.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the Middle East's most trusted and innovative packaging partner, recognized for excellence, reliability, and commitment to environmental responsibility.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Our Values",
      description: "Quality without compromise, customer-first approach, continuous innovation, environmental consciousness, and building lasting partnerships based on trust and integrity.",
      color: "from-orange-500 to-red-600"
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
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[zoom_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-900/90 to-purple-900/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up">
            About <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">SquarePack</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Building the future of packaging and labeling in Dubai and beyond
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-navy to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-gold/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gold mb-2 font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${manufacturingBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins text-center animate-fade-in-up">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed">
              <p className="animate-fade-in-up p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20" style={{ animationDelay: "0.1s" }}>
                SquarePack FZC is Dubai's leading provider of premium packaging and labeling solutions, serving diverse industries including FMCG, healthcare, electronics, and industrial sectors. Established with a vision to transform the packaging industry, we have grown to become a trusted partner for over 500 companies across the UAE and the Middle East.
              </p>
              <p className="animate-fade-in-up p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20" style={{ animationDelay: "0.2s" }}>
                Our state-of-the-art facility in Dubai combines advanced technology with skilled craftsmanship to produce labels, ribbons, packaging films, and specialized packaging products that meet international quality standards. We take pride in our ISO 9001 certification, which reflects our commitment to quality management and continuous improvement.
              </p>
              <p className="animate-fade-in-up p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20" style={{ animationDelay: "0.3s" }}>
                What sets us apart is our customer-centric approach. We don't just supply products; we partner with our clients to understand their unique needs and deliver customized solutions that enhance their brand presence and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-gold/50 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-poppins text-center animate-fade-in-up">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gold/50 hover:scale-105 transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
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

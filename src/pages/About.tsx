import { useState, useEffect } from "react";
import { Building2, Award, Users, TrendingUp, Target, Eye, Shield, Zap, Heart, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import aboutBg from "@/assets/backgrounds/about-bg.jpg";
import manufacturingBg from "@/assets/backgrounds/manufacturing-bg.jpg";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const stats = [
    { icon: Building2, label: "Years of Experience", value: "15+", color: "from-blue-500 to-cyan-500" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "At Square Pack, our goal is to provide top-notch packaging and labeling solutions that assist businesses in differentiating themselves in a competitive market. We utilize innovative technology and artistic skill to craft safeguards for products while enhancing their aesthetic appeal and reinforcing brand recognition. We prioritize sustainability by providing environmentally-friendly materials and designs that minimize ecological footprint.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "At Square Pack, we envision transforming the packaging and labeling industry with creative, innovative, and environmentally friendly options. Our aim is to lead the way in revolutionizing how businesses present their products, elevating packaging to a key factor in brand identification and customer contentment. Our aim is to provide companies with packaging that not only protects their products but also enhances them, telling a story that resonates with consumers.",
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
    <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px] overflow-hidden">
      <WhatsAppButton />
      <BrochureButton />
      
      {/* Epic Hero Section with Parallax */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{ 
            backgroundImage: `url(${aboutBg})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-900/90 to-indigo-900/95" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%), linear-gradient(150deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%)',
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Floating Badge with Pulse */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-12 animate-fade-in-up shadow-2xl group hover:bg-white/20 hover:scale-105 transition-all duration-500">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-bold tracking-widest uppercase">15+ Years of Experience • UAE</span>
              <Sparkles className="w-4 h-4 text-secondary animate-pulse-slow" />
            </div>

            {/* Main Heading with Stagger Animation */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 font-poppins leading-tight">
              <span className="block text-white animate-fade-in-up">About</span>
              <span className="block bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                SquarePack
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up mb-12" style={{ animationDelay: "0.2s" }}>
              Building the future of packaging and labeling in UAE and beyond
            </p>

            {/* Floating Stats Pills */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Building2, label: "15+ Years", color: "from-blue-500 to-cyan-500" },
                { icon: CheckCircle2, label: "Premium Quality", color: "from-emerald-500 to-green-500" }
              ].map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div key={idx} className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${pill.color} rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl group`}>
                    <Icon className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                    <span className="text-white font-bold">{pill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-secondary rounded-full animate-[scroll_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>


      {/* Company Overview - Bento Grid Style */}
      <section 
        className="relative py-32 overflow-hidden"
        data-scroll-section
        id="overview-section"
      >
        {/* Fixed Background (no parallax) */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${manufacturingBg})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/98 via-purple-900/95 to-pink-900/98" />
          
          {/* Animated Orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('overview-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-white/90 text-sm font-bold tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white font-poppins">
                Who We <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">Are</span>
              </h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Large Feature Card */}
              <div className={`lg:row-span-2 p-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/15 hover:scale-[1.02] transition-all duration-700 shadow-2xl group ${visibleSections.has('overview-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gold mb-2">SquarePack LLC</h3>
                    <p className="text-white/70 text-sm font-semibold">UAE's Leading Provider</p>
                  </div>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  is UAE's leading provider of premium packaging and labeling solutions, serving diverse industries including FMCG, healthcare, electronics, and industrial sectors. With over 15 years of experience and a vision to transform the packaging industry, we have become a trusted partner across the UAE and the Middle East.
                </p>
              </div>

              {/* Medium Card */}
              <div className={`p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/15 hover:scale-[1.02] transition-all duration-700 shadow-2xl ${visibleSections.has('overview-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} delay-100`}>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-black text-white">Advanced Technology</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Our state-of-the-art facility combines advanced technology with skilled craftsmanship to produce labels, ribbons, packaging films, and specialized packaging products that meet international quality standards.
                </p>
              </div>

              {/* Medium Card */}
              <div className={`p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/15 hover:scale-[1.02] transition-all duration-700 shadow-2xl ${visibleSections.has('overview-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} delay-200`}>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-pink-400" />
                  <h3 className="text-xl font-black text-white">Customer-Centric</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  We don't just supply products; we partner with our clients to understand their unique needs and deliver customized solutions that enhance their brand presence and operational efficiency.
                </p>
              </div>

              {/* Motto Card - Full Width */}
              <div className={`lg:col-span-2 relative p-10 bg-gradient-to-br from-gold/20 to-yellow-500/20 backdrop-blur-xl rounded-3xl border-2 border-gold shadow-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-700 ${visibleSections.has('overview-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} delay-300`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-tr-full" />
                <div className="relative text-center">
                  <p className="text-gold text-3xl md:text-4xl font-black italic leading-relaxed mb-4">
                    "On-time, complete, and uncompromising quality — always."
                  </p>
                  <p className="text-white text-xl font-bold">
                    Delivered On Time, On Price, On Service and On Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Staggered Cards */}
      <section 
        className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/20 to-gray-100 relative overflow-hidden"
        data-scroll-section
        id="values-section"
      >
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <div className="relative container mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full mb-6 shadow-lg">
              <Target className="w-4 h-4 text-navy" />
              <span className="text-navy text-sm font-bold tracking-widest uppercase">What Drives Us</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy mb-6 font-poppins">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Foundation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles and vision that guide everything we do
            </p>
          </div>

          {/* Staggered Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 ${
                    visibleSections.has('values-section') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    marginTop: index === 1 ? '3rem' : '0'
                  }}
                >
                  {/* Glowing Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
                  
                  <div className="relative p-10 rounded-3xl bg-white border-2 border-gray-200 hover:border-transparent shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 h-full">
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-black text-navy mb-5 font-poppins group-hover:bg-gradient-to-r group-hover:from-navy group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.color} opacity-10 rounded-bl-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Design */}
      <section 
        className="relative py-32 overflow-hidden"
        data-scroll-section
        id="features-section"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-indigo-900">
          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] animate-float" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px] animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1s" }} />
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has('features-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8 shadow-2xl">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-white text-sm font-bold tracking-widest uppercase">Excellence Delivered</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-poppins">
              Why Choose <span className="bg-gradient-to-r from-gold via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto]">SquarePack</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Experience the difference of working with industry leaders
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 ${
                    visibleSections.has('features-section')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold to-yellow-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700" />
                  
                  <div className="relative p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:scale-[1.05] hover:-translate-y-2 transition-all duration-700 shadow-2xl h-full">
                    {/* Icon with Advanced Animation */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-gold opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-black text-white mb-4 font-poppins text-center group-hover:text-gold transition-colors duration-500">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/80 text-lg text-center leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-3xl group-hover:border-gold transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-3xl group-hover:border-gold transition-colors duration-500" />
                  </div>
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

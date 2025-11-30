import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Award, Sparkles, Zap, Shield, TrendingUp, Users, CheckCircle2, Star, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import heroFallback from "@/assets/videos/hero-fallback.jpg";
import showcase1 from "@/assets/products/showcase-1.jpg";
import showcase2 from "@/assets/products/showcase-2.jpg";
import showcase3 from "@/assets/products/showcase-3.jpg";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const productImages = [showcase1, showcase2, showcase3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "15+", label: "Years Excellence", icon: Award },
    { value: "8+", label: "Industries Served", icon: TrendingUp },
    { value: "99%", label: "On-Time Delivery", icon: CheckCircle2 }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Industry-leading materials and printing technology",
      gradient: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Express delivery and quick turnaround times",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "100% Guaranteed",
      description: "Quality assurance and customer satisfaction",
      gradient: "from-emerald-400 via-green-500 to-teal-600"
    }
  ];

  const products = [
    { name: "Plain Labels", image: showcase1, category: "Essential" },
    { name: "Product Labels", image: showcase2, category: "Premium" },
    { name: "Barcode Solutions", image: showcase3, category: "Industrial" }
  ];

  return (
    <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px] overflow-hidden">
      <WhatsAppButton />
      <BrochureButton />
      
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            poster={heroFallback}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-production-line-in-operation-43649-large.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-950 to-indigo-950" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Text Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full animate-fade-in-up shadow-2xl">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="text-white/90 text-sm font-semibold tracking-wide">15+ YEARS OF EXCELLENCE</span>
                  <Star className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
                </div>

                {/* Main Heading */}
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight font-poppins">
                    Redefining
                    <span className="block mt-2 bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto]">
                      Packaging
                    </span>
                    <span className="block text-5xl sm:text-6xl lg:text-7xl">Excellence</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed font-light">
                    Transform your brand identity with world-class packaging and labeling solutions trusted by industry leaders across UAE.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <Link to="/products" className="group">
                    <Button 
                      size="lg"
                      className="relative overflow-hidden bg-gradient-to-r from-secondary via-yellow-400 to-orange-400 hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] text-navy font-bold text-lg px-10 py-7 transition-all duration-500 hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center">
                        Explore Products
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Button>
                  </Link>
                  
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="group border-2 border-white/40 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-navy font-bold text-lg px-10 py-7 transition-all duration-500 hover:scale-105"
                    >
                      Get Quote
                      <Mail className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-orange-400 border-2 border-navy flex items-center justify-center text-white font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-white/70">Trusted by Industry Leaders</p>
                  </div>
                </div>
              </div>

              {/* Right: Floating Product Cards */}
              <div className="relative h-[600px] hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="absolute w-72 h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-all duration-500 hover:scale-105 cursor-pointer group"
                    style={{
                      top: `${index * 120}px`,
                      right: `${index * 40}px`,
                      zIndex: 3 - index,
                      transform: `rotate(${index * 3}deg)`,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-navy text-xs font-bold rounded-full">
                          {product.category}
                        </span>
                        <h3 className="text-white font-bold text-2xl mt-3">{product.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

      {/* Animated Stats Counter with Video Background */}
      <section id="stats-section" className="py-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={heroFallback}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-production-line-in-operation-43649-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-blue-900/85 to-indigo-900/90" />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-10 bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-white/50 hover:border-secondary hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-orange-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-black text-navy mb-3 font-poppins">
                    {statsVisible ? stat.value : "0"}
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-navy mb-4 font-poppins animate-fade-in-up">
              Why Choose <span className="bg-gradient-to-r from-secondary to-orange-400 bg-clip-text text-transparent">SquarePack?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Experience the difference of working with UAE's most innovative packaging partner
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-navy mb-3 font-poppins">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Immersive Product Showcase */}
      <section className="relative py-28 overflow-hidden">
        {/* Animated Background */}
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-900/90 to-indigo-900/95" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-secondary to-orange-400 mb-8 animate-float shadow-2xl">
              <Package className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-poppins animate-fade-in-up">
              Complete Product Range
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              From basic labels to advanced RFID solutions - everything you need for professional packaging
            </p>
            
            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {["Plain Labels", "Product Labels", "Barcode Ribbons", "Stretch Film", "BOPP Tapes", "RFID Solutions"].map((product, idx) => (
                <div key={idx} className="group relative p-8 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl hover:bg-white/20 hover:scale-105 hover:border-secondary/50 transition-all duration-500 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 text-white font-bold text-lg">{product}</span>
                </div>
              ))}
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-3 mb-12">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'bg-secondary w-12' : 'bg-white/50 w-2'
                  }`}
                />
              ))}
            </div>
            
            <Link to="/products" className="inline-block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-gradient-to-r from-secondary to-orange-400 hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] text-navy font-bold text-xl px-12 py-8 transition-all duration-500 hover:scale-105">
                Explore All Products
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Motto Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-12 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border-4 border-secondary rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-all duration-500 hover:scale-[1.02]">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary to-orange-400 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-50" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-secondary fill-secondary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                <blockquote className="text-3xl md:text-5xl font-black text-secondary mb-6 font-poppins italic leading-tight">
                  "On-time, complete, and uncompromising quality — always."
                </blockquote>
                
                <p className="text-xl md:text-2xl text-white font-semibold">
                  Delivered On Time, On Price, On Service and On Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Contact Info Cards */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 font-poppins">
                  Ready to Transform Your Packaging?
                </h2>
                
                <div className="group p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-secondary hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Call Us Now</p>
                      <a href="tel:+971504578900" className="text-2xl font-bold text-navy hover:text-secondary transition-colors">
                        +971 50 457 8900
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-secondary hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email Us</p>
                      <a href="mailto:sales@squarepack.net" className="text-2xl font-bold text-navy hover:text-secondary transition-colors">
                        sales@squarepack.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="p-12 bg-gradient-to-br from-navy to-blue-950 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 font-poppins">
                    Get Your Free Quote Today
                  </h3>
                  <p className="text-lg text-white/80 mb-8">
                    Join 1000+ satisfied clients who trust SquarePack for their packaging needs.
                  </p>
                  
                  <Link to="/contact">
                    <Button size="lg" className="w-full bg-gradient-to-r from-secondary to-orange-400 hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] text-navy font-bold text-xl py-8 transition-all duration-500 hover:scale-105">
                      Request Quote
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                  </Link>
                  
                  <p className="text-sm text-white/60 mt-4 text-center">
                    ⚡ Response within 24 hours guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

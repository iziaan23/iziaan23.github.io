import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Award, Users, Factory, ShoppingBag, Mail, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroFallback from "@/assets/videos/hero-fallback.jpg";
import aboutBg from "@/assets/backgrounds/about-bg.jpg";
import showcase1 from "@/assets/products/showcase-1.jpg";
import showcase2 from "@/assets/products/showcase-2.jpg";
import showcase3 from "@/assets/products/showcase-3.jpg";
import industriesBg from "@/assets/backgrounds/industries-bg.jpg";
import contactBg from "@/assets/backgrounds/contact-bg.jpg";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const productImages = [showcase1, showcase2, showcase3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Package, label: "Products Delivered", value: "10M+", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "ISO Certified", value: "9001", color: "from-gold to-amber-500" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-emerald-500 to-green-500" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
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

        {/* Fallback Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFallback})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-blue-900/85 to-purple-900/90" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Dubai's Premier Packaging Partner</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up font-poppins leading-tight" style={{ animationDelay: "0.1s" }}>
            Excellence in
            <span className="block bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent mt-2 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              Packaging & Labeling
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Premium solutions for FMCG, healthcare, logistics, and industrial sectors across Dubai and beyond
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/products">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-gold to-amber-500 hover:from-amber-500 hover:to-gold text-navy font-bold text-lg px-10 py-7 transition-all duration-500 hover:scale-105 shadow-[0_10px_40px_-10px_rgba(251,191,36,0.5)]"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                className="group border-2 border-white/80 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-navy font-bold text-lg px-10 py-7 transition-all duration-500 hover:scale-105"
              >
                Request Quote
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Play Button */}
          <button className="mt-12 inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all">
              <Play className="w-6 h-6 fill-current" />
            </div>
            <span className="text-sm font-medium">Watch Our Story</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-[scroll_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-10 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
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

      {/* About Preview */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-900/90 to-indigo-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-amber-500 mb-8 animate-scale-in shadow-xl">
              <Factory className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Crafting Excellence Since 2009
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              At SquarePack, we combine cutting-edge technology with artisanal precision to deliver 
              packaging and labeling solutions that elevate your brand. ISO 9001 certified, trusted by 500+ companies.
            </p>
            <Link to="/about" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-xl">
                Discover Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview with Image Carousel */}
      <section className="relative py-28 overflow-hidden">
        {/* Animated Background Images */}
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 mb-8 animate-scale-in shadow-xl">
              <Package className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Comprehensive Product Range
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              From plain labels to industrial printers - everything you need for professional packaging
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {["Plain Labels", "Product Labels", "Barcode Ribbons", "Stretch Film", "BOPP Tapes", "Label Printers"].map((product, idx) => (
                <div key={idx} className="group p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <span className="text-white font-semibold text-lg">{product}</span>
                </div>
              ))}
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mb-10">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'bg-gold w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <Link to="/products" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-xl">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${industriesBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-cyan-900/90 to-blue-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-8 animate-scale-in shadow-xl">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Serving 8+ Industries
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              From FMCG to healthcare, electronics to manufacturing - industry-specific solutions
            </p>
            <Link to="/industries" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-xl">
                Explore Industries
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-red-900/90 to-pink-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-8 animate-scale-in shadow-xl">
              <Mail className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Let's Start Your Project
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              Get in touch for custom solutions tailored to your business needs
            </p>
            <Link to="/contact" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-xl">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

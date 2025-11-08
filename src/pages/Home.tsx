import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Award, Users, Factory, ShoppingBag, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/backgrounds/about-bg.jpg";
import productsBg from "@/assets/backgrounds/products-showcase.jpg";
import industriesBg from "@/assets/backgrounds/industries-bg.jpg";
import contactBg from "@/assets/backgrounds/contact-bg.jpg";

const Home = () => {
  const stats = [
    { icon: Package, label: "Products Delivered", value: "10M+" },
    { icon: Award, label: "ISO Certified", value: "9001" },
    { icon: Users, label: "Happy Clients", value: "500+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[zoom_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-charcoal/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up font-poppins">
            Redefining the Art of
            <span className="block bg-gradient-to-r from-gold via-secondary to-accent bg-clip-text text-transparent mt-2 animate-[shimmer_3s_ease-in-out_infinite]">
              Packaging & Labeling
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Premium solutions for FMCG, healthcare, logistics, and industrial sectors across Dubai and beyond
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/products">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-gold to-secondary hover:from-secondary hover:to-gold text-navy font-bold text-lg px-8 py-6 transition-all duration-500 hover:scale-105 shadow-gold"
              >
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-lg px-8 py-6 transition-all duration-500 hover:scale-105"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-navy to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold to-secondary mb-4">
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

      {/* About Preview Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-900/90 to-blue-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Factory className="w-16 h-16 text-gold mx-auto mb-6 animate-scale-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Dubai's Premier Packaging Partner
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              At SquarePack, we combine cutting-edge technology with artisanal precision to deliver 
              packaging and labeling solutions that elevate your brand. From concept to delivery, 
              we're committed to excellence in every detail.
            </p>
            <Link to="/about" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-gradient-to-r from-gold to-secondary hover:from-secondary hover:to-gold text-navy font-bold">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[slide_30s_linear_infinite]"
          style={{ backgroundImage: `url(${productsBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Package className="w-16 h-16 text-gold mx-auto mb-6 animate-scale-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Comprehensive Product Range
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              From plain labels to custom product labels, barcode ribbons, stretch films, BOPP tapes, 
              and industrial-grade label printers - we offer everything you need for professional packaging.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {["Plain Labels", "Product Labels", "Barcode Ribbons", "Stretch Film", "BOPP Tapes", "Label Printers"].map((product, idx) => (
                <div key={idx} className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <span className="text-white font-semibold">{product}</span>
                </div>
              ))}
            </div>
            <Link to="/products" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-gradient-to-r from-gold to-secondary hover:from-secondary hover:to-gold text-navy font-bold">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Preview Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${industriesBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-cyan-900/90 to-blue-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingBag className="w-16 h-16 text-gold mx-auto mb-6 animate-scale-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Serving Diverse Industries
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              From FMCG to healthcare, electronics to beauty, logistics to manufacturing - 
              we deliver industry-specific packaging solutions that meet your unique requirements.
            </p>
            <Link to="/industries" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-gradient-to-r from-gold to-secondary hover:from-secondary hover:to-gold text-navy font-bold">
                Explore Industries
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-red-900/90 to-pink-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 text-gold mx-auto mb-6 animate-scale-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-fade-in-up">
              Let's Start Your Project
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Ready to elevate your packaging and labeling? Get in touch with our team for 
              custom solutions tailored to your business needs.
            </p>
            <Link to="/contact" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-gradient-to-r from-gold to-secondary hover:from-secondary hover:to-gold text-navy font-bold">
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

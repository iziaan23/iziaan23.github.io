import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle, Layers, Zap, Package, Star, ArrowUpRight, Boxes, Award } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import { ProductCategoryNav } from "@/components/ProductCategoryNav";
import plainLabelsImg from "@/assets/products/main/plain-labels.jpg";
import productLabelsImg from "@/assets/products/main/prodcut-labels.jpg";
import barcodeRibbonsImg from "@/assets/products/main/barcode-ribbons.png";
import stretchFilmImg from "@/assets/products/main/stretch-film.jpg";
import printersImg from "@/assets/products/main/printers.jpg";
import productsBg from "@/assets/backgrounds/products-showcase.jpg";
import promotionalLabelsImg from "@/assets/products/main/promotional-labels.jpg";

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".product-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: "plain-labels",
      title: "Plain Labels",
      description: "High-quality blank labels in various sizes and materials. Perfect for thermal transfer and direct thermal printing applications.",
      features: ["Multiple sizes available", "Durable materials", "Superior adhesive strength", "Compatible with all major printers"],
      image: plainLabelsImg,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      accentColor: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-500/30"
    },
    {
      id: "product-labels",
      title: "Product Labels",
      description: "Fully customizable labels designed to bring your brand identity to life with vibrant colors and premium finishes.",
      features: ["Custom designs", "Full-color printing", "Multiple finish options", "Brand-specific customization"],
      image: productLabelsImg,
      gradient: "from-secondary via-orange-400 to-amber-500",
      accentColor: "from-yellow-400 to-orange-500",
      bgGlow: "bg-orange-500/30"
    },
    {
      id: "barcode-ribbons",
      title: "Barcode Ribbons",
      description: "Premium thermal transfer ribbons offering exceptional print quality for all your barcode and label printing needs.",
      features: ["Wax, resin, and wax-resin options", "Various widths: 40mm to 110mm", "High-density printing", "Smudge-resistant"],
      image: barcodeRibbonsImg,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      accentColor: "from-purple-400 to-pink-500",
      bgGlow: "bg-purple-500/30"
    },
    {
      id: "packaging-products",
      title: "Packaging Products",
      description: "Comprehensive packaging solutions including stretch films and BOPP tapes for secure and efficient packaging.",
      features: ["Stretch film (Hand/Machine Grade)", "BOPP Tapes with strong adhesion", "Weather resistant", "Custom printing available"],
      image: stretchFilmImg,
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      accentColor: "from-emerald-400 to-green-500",
      bgGlow: "bg-emerald-500/30"
    },
    {
      id: "promotional-labels",
      title: "Promotional Labels",
      description: "Make your brand stand out with Square Pack's vibrant promotional stickers. Ideal for marketing campaigns, giveaways, and product packaging.",
      features: ["Attracting attention", "Highlighting special offers", "Boosting sales", "Seasonal promotions"],
      image: promotionalLabelsImg,
      gradient: "from-rose-500 via-pink-500 to-orange-500",
      accentColor: "from-rose-400 to-orange-500",
      bgGlow: "bg-rose-500/30"
    },
    {
      id: "other-products",
      title: "Other Products",
      description: "Comprehensive range of specialized packaging and labeling solutions including asset tags, thermal rolls, masking tapes, and more.",
      features: ["Asset tags & labels", "Thermal cash rolls", "Masking tapes", "Pricing guns & stickers"],
      image: printersImg,
      gradient: "from-indigo-500 via-blue-500 to-violet-500",
      accentColor: "from-indigo-400 to-blue-500",
      bgGlow: "bg-indigo-500/30"
    },
  ];

  return (
    <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px] bg-background overflow-x-hidden">
      <WhatsAppButton />
      <BrochureButton />
      
      <ProductCategoryNav />
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Multi-Layer Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
            style={{ 
              backgroundImage: `url(${productsBg})`,
              transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
            }}
          />
          
          {/* Gradient Mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,200,50,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.2),transparent_50%),radial-gradient(ellipse_at_center,rgba(0,0,0,0.7),rgba(0,0,0,0.85))]" />
          
          {/* Animated Floating Orbs */}
          <div 
            className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[150px] opacity-40"
            style={{ 
              background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
              transform: `translate(${Math.sin(scrollY * 0.002) * 30}px, ${Math.cos(scrollY * 0.002) * 30}px)`
            }}
          />
          <div 
            className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
            style={{ 
              background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
              transform: `translate(${Math.cos(scrollY * 0.002) * 40}px, ${Math.sin(scrollY * 0.002) * 40}px)`
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ 
              background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
              transform: `translate(-50%, -50%) scale(${1 + Math.sin(scrollY * 0.001) * 0.2})`
            }}
          />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.1}px)`
          }} />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-left">
                {/* Premium Badge with Glow */}
                <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/50 blur-xl animate-pulse" />
                    <div className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary/20 to-orange-500/20 backdrop-blur-xl border border-secondary/30 rounded-full">
                      <Sparkles className="w-5 h-5 text-secondary animate-spin-slow" />
                      <span className="text-white/90 text-sm font-bold tracking-widest uppercase">Premium Solutions</span>
                    </div>
                  </div>
                </div>

                {/* Main Heading with Split Animation */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 font-poppins leading-[0.9]">
                  <span 
                    className="block text-white opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards]"
                    style={{ animationDelay: '0.2s' }}
                  >
                    Our Product
                  </span>
                  <span 
                    className="block mt-2 opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards]"
                    style={{ animationDelay: '0.4s' }}
                  >
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 blur-2xl opacity-50" />
                      <span className="relative bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                        Portfolio
                      </span>
                    </span>
                  </span>
                </h1>
                
                <p 
                  className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed font-light opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
                  style={{ animationDelay: '0.6s' }}
                >
                  Comprehensive packaging and labeling solutions engineered for excellence across every industry
                </p>

                {/* Stats Row */}
                <div 
                  className="flex flex-wrap gap-6 mt-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
                  style={{ animationDelay: '0.8s' }}
                >
                  {[
                    { icon: Boxes, label: "6+ Product Lines", value: "Extensive Range" },
                    { icon: Award, label: "Premium Quality", value: "ISO Standards" },
                    { icon: Zap, label: "Fast Delivery", value: "UAE-Wide" }
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-secondary/30 hover:bg-white/10 transition-all duration-500">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-orange-500/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-secondary" />
                          </div>
                          <div>
                            <p className="text-white font-bold">{stat.label}</p>
                            <p className="text-white/50 text-sm">{stat.value}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - 3D Floating Cards Preview */}
              <div 
                className="relative hidden lg:block opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="relative w-full h-[500px]" style={{ perspective: '1000px' }}>
                  {/* Main Card */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-72 h-80 -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden shadow-2xl"
                    style={{ 
                      transform: `translate(-50%, -50%) rotateY(${scrollY * 0.02}deg) rotateX(${-scrollY * 0.01}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img src={products[0].image} alt="Featured Product" className="w-full h-full object-contain bg-gradient-to-br from-gray-100 to-gray-200 p-6" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white font-bold text-lg">{products[0].title}</span>
                    </div>
                  </div>
                  
                  {/* Floating Side Cards */}
                  <div 
                    className="absolute top-10 -left-4 w-48 h-56 rounded-2xl overflow-hidden shadow-xl opacity-70"
                    style={{ 
                      transform: `translateZ(-100px) rotateY(20deg) translateY(${Math.sin(scrollY * 0.005) * 20}px)`,
                    }}
                  >
                    <img src={products[1].image} alt="Product" className="w-full h-full object-contain bg-gradient-to-br from-orange-50 to-orange-100 p-4" />
                  </div>
                  
                  <div 
                    className="absolute bottom-10 -right-4 w-48 h-56 rounded-2xl overflow-hidden shadow-xl opacity-70"
                    style={{ 
                      transform: `translateZ(-100px) rotateY(-20deg) translateY(${Math.cos(scrollY * 0.005) * 20}px)`,
                    }}
                  >
                    <img src={products[2].image} alt="Product" className="w-full h-full object-contain bg-gradient-to-br from-purple-50 to-purple-100 p-4" />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-2 border-secondary/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-2 border-white/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="text-white/60 text-sm uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 150L0 80C240 120 480 140 720 130C960 120 1200 80 1440 60L1440 150L0 150Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section ref={sectionRef} className="py-24 relative bg-background">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-block mb-6">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 font-poppins">
              Explore Our{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-orange-500 blur-2xl opacity-30" />
                <span className="relative bg-gradient-to-r from-secondary to-orange-500 bg-clip-text text-transparent">Products</span>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each product is crafted with precision and designed to exceed your expectations
            </p>
          </div>

          {/* Revolutionary Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Link 
                key={product.id} 
                to={`/products/${product.id}`}
                className={`product-card block ${index === 0 || index === 5 ? 'xl:col-span-2 xl:row-span-1' : ''}`}
                data-index={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`group relative h-full min-h-[400px] rounded-3xl overflow-hidden transition-all duration-700 ${
                    visibleCards.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Card Background with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50 border border-border/50 rounded-3xl" />
                  
                  {/* Animated Glow Effect */}
                  <div className={`absolute -inset-1 ${product.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />
                  
                  {/* Card Content Container */}
                  <div className="relative h-full flex flex-col p-6 md:p-8">
                    {/* Top Section - Image */}
                    <div className="relative flex-1 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10">
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`} />
                      
                      {/* Product Image */}
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className={`max-w-full max-h-full object-contain transition-all duration-700 ${
                            hoveredIndex === index 
                              ? 'scale-110 rotate-3' 
                              : 'scale-100'
                          }`}
                        />
                      </div>
                      
                      {/* Floating Product Number */}
                      <div className="absolute top-4 left-4">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-sm">0{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* View Details Badge */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-background/90 backdrop-blur-sm rounded-full shadow-lg border border-border/50">
                          <span className={`text-sm font-bold bg-gradient-to-r ${product.accentColor} bg-clip-text text-transparent`}>
                            View
                          </span>
                          <ArrowUpRight className={`w-4 h-4 bg-gradient-to-r ${product.accentColor} bg-clip-text text-foreground`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Section - Info */}
                    <div className="space-y-4">
                      {/* Title with Underline Animation */}
                      <div className="relative">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground font-poppins group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-foreground group-hover:to-muted-foreground transition-all duration-500">
                          {product.title}
                        </h3>
                        <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${product.gradient} w-0 group-hover:w-full transition-all duration-700`} />
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500`}
                            style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                          >
                            <CheckCircle className={`w-3.5 h-3.5 text-transparent bg-gradient-to-r ${product.accentColor} bg-clip-text`} style={{ color: 'hsl(var(--secondary))' }} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Row */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/30">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold bg-gradient-to-r ${product.accentColor} bg-clip-text text-transparent`}>
                            Discover More
                          </span>
                          <ArrowRight className="w-5 h-5 text-secondary transform group-hover:translate-x-2 transition-transform duration-500" />
                        </div>
                        
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-all duration-500`}>
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-700`} />
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${product.gradient} opacity-0 group-hover:opacity-5 rounded-tr-full transition-opacity duration-700`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA / Motto Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Dramatic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-950 to-indigo-950" />
        
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 20% 40%, hsl(var(--secondary) / 0.3) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-secondary/50 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Glowing Quote Card */}
            <div className="relative inline-block">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-orange-400 to-amber-400 rounded-[2.5rem] blur-xl opacity-30 animate-pulse" />
              
              {/* Border Gradient */}
              <div className="relative p-1 bg-gradient-to-r from-secondary via-orange-400 to-amber-400 rounded-[2rem]">
                <div className="px-12 py-14 md:px-20 md:py-16 bg-navy/95 backdrop-blur-xl rounded-[1.8rem]">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-secondary to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  
                  <p className="text-secondary text-3xl md:text-5xl font-black italic font-poppins leading-tight mb-6">
                    "On-time, complete, and uncompromising quality — always."
                  </p>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-400 mx-auto mb-6 rounded-full" />
                  
                  <p className="text-white/80 text-xl md:text-2xl font-light">
                    Delivered On Time, On Price, On Service and On Quality
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-12">
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-orange-500 rounded-full text-white font-bold text-lg shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:scale-105 transition-all duration-500"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Products;

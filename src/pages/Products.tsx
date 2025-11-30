import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle, Layers, Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import { ProductCategoryNav } from "@/components/ProductCategoryNav";
import plainLabelsImg from "@/assets/products/main/plain-labels.jpg";
import productLabelsImg from "@/assets/products/main/product-labels.png";
import barcodeRibbonsImg from "@/assets/products/main/barcode-ribbons.png";
import stretchFilmImg from "@/assets/products/main/stretch-film.jpg";
import printersImg from "@/assets/products/main/printers.jpg";
import productsBg from "@/assets/backgrounds/products-showcase.jpg";
import promotionalLabelsImg from "@/assets/products/main/promotional-labels.jpg";

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      id: "plain-labels",
      title: "Plain Labels",
      description: "High-quality blank labels in various sizes and materials. Perfect for thermal transfer and direct thermal printing applications.",
      features: ["Multiple sizes available", "Durable materials", "Superior adhesive strength", "Compatible with all major printers"],
      image: plainLabelsImg,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      accentColor: "from-blue-400 to-cyan-500"
    },
    {
      id: "product-labels",
      title: "Product Labels",
      description: "Fully customizable labels designed to bring your brand identity to life with vibrant colors and premium finishes.",
      features: ["Custom designs", "Full-color printing", "Multiple finish options", "Brand-specific customization"],
      image: productLabelsImg,
      gradient: "from-secondary via-orange-400 to-amber-500",
      accentColor: "from-yellow-400 to-orange-500"
    },
    {
      id: "barcode-ribbons",
      title: "Barcode Ribbons",
      description: "Premium thermal transfer ribbons offering exceptional print quality for all your barcode and label printing needs.",
      features: ["Wax, resin, and wax-resin options", "Various widths: 40mm to 110mm", "High-density printing", "Smudge-resistant"],
      image: barcodeRibbonsImg,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      accentColor: "from-purple-400 to-pink-500"
    },
    {
      id: "packaging-products",
      title: "Packaging Products",
      description: "Comprehensive packaging solutions including stretch films and BOPP tapes for secure and efficient packaging.",
      features: ["Stretch film (Hand/Machine Grade)", "BOPP Tapes with strong adhesion", "Weather resistant", "Custom printing available"],
      image: stretchFilmImg,
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      accentColor: "from-emerald-400 to-green-500"
    },
    {
      id: "promotional-labels",
      title: "Promotional Labels",
      description: "Make your brand stand out with Square Pack's vibrant promotional stickers. Ideal for marketing campaigns, giveaways, and product packaging.",
      features: ["Attracting attention", "Highlighting special offers", "Boosting sales", "Seasonal promotions"],
      image: promotionalLabelsImg,
      gradient: "from-rose-500 via-pink-500 to-orange-500",
      accentColor: "from-rose-400 to-orange-500"
    },
    {
      id: "other-products",
      title: "Other Products",
      description: "Comprehensive range of specialized packaging and labeling solutions including asset tags, thermal rolls, masking tapes, and more.",
      features: ["Asset tags & labels", "Thermal cash rolls", "Masking tapes", "Pricing guns & stickers"],
      image: printersImg,
      gradient: "from-indigo-500 via-blue-500 to-violet-500",
      accentColor: "from-indigo-400 to-blue-500"
    },
  ];

  return (
    <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px] bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <WhatsAppButton />
      <BrochureButton />
      
      <ProductCategoryNav />
      
      {/* Epic Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${productsBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-indigo-900/90 to-purple-900/95" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
          
          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%), linear-gradient(150deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%)',
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-10 animate-fade-in-up shadow-2xl">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse-slow" />
              <span className="text-white/90 text-sm font-bold tracking-widest uppercase">Premium Solutions</span>
            </div>

            {/* Main Heading with Stagger Animation */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 font-poppins leading-tight">
              <span className="block text-white animate-fade-in-up">Our Product</span>
              <span className="block bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Portfolio
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up mb-12" style={{ animationDelay: "0.2s" }}>
              Comprehensive packaging and labeling solutions engineered for excellence across every industry
            </p>

            {/* Floating Stats */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Layers, label: "6+ Product Lines" },
                { icon: CheckCircle, label: "Premium Quality" },
                { icon: Zap, label: "Fast Delivery" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    <Icon className="w-5 h-5 text-secondary" />
                    <span className="text-white font-semibold">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248, 250, 252)"/>
          </svg>
        </div>
      </section>

      {/* Revolutionary Products Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-navy mb-6 font-poppins animate-fade-in-up">
              Explore Our <span className="bg-gradient-to-r from-secondary to-orange-500 bg-clip-text text-transparent">Collection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Each product is crafted with precision and designed to exceed your expectations
            </p>
          </div>

          {/* Products Grid with Advanced Hover Effects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Link 
                key={product.id} 
                to={`/products/${product.id}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className="group relative h-full rounded-3xl bg-white border-2 border-gray-200 overflow-hidden hover:border-transparent hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] transition-all duration-700 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />
                  
                  <div className="relative bg-white rounded-3xl overflow-hidden">
                    {/* Image Section with Parallax Effect */}
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                      
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className={`w-full h-full object-contain p-8 transition-all duration-700 ${
                          hoveredIndex === index ? 'scale-110 rotate-2' : 'scale-100'
                        }`}
                      />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <span className={`text-sm font-bold bg-gradient-to-r ${product.accentColor} bg-clip-text text-transparent`}>
                          View Details
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      {/* Title with Gradient on Hover */}
                      <h3 className="text-3xl font-black text-navy mb-4 font-poppins group-hover:bg-gradient-to-r group-hover:from-navy group-hover:to-gray-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {product.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center shadow-lg`}>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className={`inline-flex items-center font-bold text-lg bg-gradient-to-r ${product.accentColor} bg-clip-text text-transparent`}>
                          Discover More
                          <ArrowRight className="ml-2 w-5 h-5 text-navy transform group-hover:translate-x-2 transition-transform duration-500" />
                        </div>
                        
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-all duration-500`}>
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Motto */}
      <section className="py-20 bg-gradient-to-br from-navy via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-secondary via-orange-400 to-amber-400 rounded-3xl mb-8 animate-fade-in-up">
              <div className="px-12 py-10 bg-navy rounded-3xl">
                <p className="text-secondary text-3xl md:text-4xl font-black italic font-poppins leading-tight">
                  "On-time, complete, and uncompromising quality — always."
                </p>
                <p className="text-white/80 text-xl mt-6 font-light">
                  Delivered On Time, On Price, On Service and On Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

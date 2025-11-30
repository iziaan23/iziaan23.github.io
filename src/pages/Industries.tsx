import { useState } from "react";
import { ShoppingBag, Pill, Laptop, Sparkles, Home, Factory, Package, Truck, Target, Award, TrendingUp } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import industriesBg from "@/assets/backgrounds/industries-bg.jpg";
import manufacturingBg from "@/assets/backgrounds/manufacturing-bg.jpg";

const Industries = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const industries = [
    {
      icon: ShoppingBag,
      title: "FMCG & Food",
      description: "Labels and packaging solutions for consumer goods, food products, and beverages. From product branding to compliance labeling.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      iconGradient: "from-orange-400 to-red-600"
    },
    {
      icon: Pill,
      title: "Healthcare & Pharmaceuticals",
      description: "Regulatory-compliant labels for medicines, medical devices, and healthcare products. Temperature-resistant and tamper-evident options.",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgGradient: "from-red-50 to-pink-50",
      iconGradient: "from-red-400 to-pink-600"
    },
    {
      icon: Laptop,
      title: "Electronics",
      description: "Durable labels for electronic appliances, gadgets, and technical equipment. Heat-resistant and long-lasting adhesives.",
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      bgGradient: "from-blue-50 to-indigo-50",
      iconGradient: "from-blue-400 to-indigo-600"
    },
    {
      icon: Sparkles,
      title: "Beauty & Cosmetics",
      description: "Premium labels with vibrant colors and special finishes for cosmetics, personal care, and beauty products.",
      gradient: "from-pink-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-pink-50 to-purple-50",
      iconGradient: "from-pink-400 to-purple-600"
    },
    {
      icon: Home,
      title: "Home Care",
      description: "Chemical-resistant labels for cleaning products, detergents, and household items. Waterproof and fade-resistant materials.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 to-emerald-50",
      iconGradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      description: "Heavy-duty labels for industrial equipment, machinery, and manufacturing processes. Extreme temperature and chemical resistant.",
      gradient: "from-slate-600 via-gray-700 to-zinc-700",
      bgGradient: "from-slate-50 to-gray-100",
      iconGradient: "from-slate-500 to-gray-700"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Shipping labels, barcode labels, and tracking solutions for warehouses, distribution centers, and logistics operations.",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      bgGradient: "from-indigo-50 to-blue-50",
      iconGradient: "from-indigo-400 to-blue-600"
    },
    {
      icon: Package,
      title: "Retail & E-commerce",
      description: "Custom product labels, price tags, and packaging materials for retail stores and online businesses.",
      gradient: "from-purple-500 via-violet-500 to-pink-500",
      bgGradient: "from-purple-50 to-violet-50",
      iconGradient: "from-purple-400 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px] bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <WhatsAppButton />
      <BrochureButton />
      
      {/* Epic Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Multi-Layer Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${industriesBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 via-blue-900/92 to-indigo-900/95" />
          
          {/* Animated Mesh Gradient */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '100px 100px'
            }} />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-10 animate-fade-in-up shadow-2xl">
              <Target className="w-5 h-5 text-secondary animate-pulse-slow" />
              <span className="text-white/90 text-sm font-bold tracking-widest uppercase">Industry Expertise</span>
            </div>

            {/* Staggered Title Animation */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 font-poppins leading-tight">
              <span className="block text-white animate-fade-in-up">Industries We</span>
              <span className="block bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Empower
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up mb-12" style={{ animationDelay: "0.2s" }}>
              Trusted by leading brands across diverse sectors in the UAE and Middle East
            </p>

            {/* Floating Achievement Cards */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Award, value: "8+", label: "Industries" },
                { icon: TrendingUp, value: "15+", label: "Years" },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl">
                    <Icon className="w-6 h-6 text-secondary" />
                    <div className="text-left">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248, 250, 252)"/>
          </svg>
        </div>
      </section>

      {/* Revolutionary Industries Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-navy mb-6 font-poppins animate-fade-in-up">
              Sectors We <span className="bg-gradient-to-r from-secondary to-orange-500 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Delivering specialized packaging and labeling solutions with unmatched expertise
            </p>
          </div>

          {/* Advanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${industry.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />
                  
                  <div className={`relative h-full p-8 bg-white rounded-3xl border-2 transition-all duration-700 overflow-hidden ${
                    isHovered ? 'border-transparent shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] -translate-y-2' : 'border-gray-200'
                  }`}>
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    {/* Animated Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                      }} />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Icon with Advanced Animation */}
                      <div className="mb-6 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 rounded-2xl`} />
                        <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.iconGradient} shadow-lg transform transition-all duration-700 ${
                          isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                        }`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Title with Gradient on Hover */}
                      <h3 className={`text-2xl font-black mb-4 font-poppins transition-all duration-500 ${
                        isHovered 
                          ? `bg-gradient-to-r ${industry.iconGradient} bg-clip-text text-transparent` 
                          : 'text-navy'
                      }`}>
                        {industry.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {industry.description}
                      </p>

                      {/* Hover Indicator */}
                      <div className={`mt-6 flex items-center gap-2 text-sm font-bold transition-all duration-500 ${
                        isHovered 
                          ? `bg-gradient-to-r ${industry.iconGradient} bg-clip-text text-transparent opacity-100 translate-x-0` 
                          : 'text-navy opacity-0 -translate-x-4'
                      }`}>
                        Learn More
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${industry.gradient} flex items-center justify-center`}>
                          <span className="text-white text-xs">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Immersive Expertise Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${manufacturingBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-900/92 to-purple-900/95" />
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 font-poppins animate-fade-in-up">
                Industry-Specific
                <span className="block mt-2 bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto]">
                  Expertise
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                We understand that each industry has unique requirements. Our team delivers customized solutions that meet industry standards, regulatory requirements, and your specific business needs.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-orange-400 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-2xl text-center">
                  <div className="text-7xl font-black bg-gradient-to-r from-secondary to-orange-400 bg-clip-text text-transparent mb-4 font-poppins">8+</div>
                  <div className="text-white text-xl font-bold">Industries Served</div>
                  <div className="text-white/60 text-sm mt-2">Across UAE & Middle East</div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-2xl text-center">
                  <div className="text-7xl font-black bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4 font-poppins">15+</div>
                  <div className="text-white text-xl font-bold">Years Experience</div>
                  <div className="text-white/60 text-sm mt-2">Industry Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

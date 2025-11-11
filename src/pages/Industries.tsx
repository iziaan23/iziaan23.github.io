import { ShoppingBag, Pill, Laptop, Sparkles, Home, Factory, Package, Truck } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import { AdvisorBanner } from "@/components/AdvisorBanner";
import industriesBg from "@/assets/backgrounds/industries-bg.jpg";
import manufacturingBg from "@/assets/backgrounds/manufacturing-bg.jpg";

const Industries = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: "FMCG & Food",
      description: "Labels and packaging solutions for consumer goods, food products, and beverages. From product branding to compliance labeling.",
      gradient: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/20"
    },
    {
      icon: Pill,
      title: "Healthcare & Pharmaceuticals",
      description: "Regulatory-compliant labels for medicines, medical devices, and healthcare products. Temperature-resistant and tamper-evident options.",
      gradient: "from-red-500 to-pink-500",
      shadow: "shadow-red-500/20"
    },
    {
      icon: Laptop,
      title: "Electronics",
      description: "Durable labels for electronic appliances, gadgets, and technical equipment. Heat-resistant and long-lasting adhesives.",
      gradient: "from-blue-500 to-indigo-500",
      shadow: "shadow-blue-500/20"
    },
    {
      icon: Sparkles,
      title: "Beauty & Cosmetics",
      description: "Premium labels with vibrant colors and special finishes for cosmetics, personal care, and beauty products.",
      gradient: "from-pink-500 to-purple-500",
      shadow: "shadow-pink-500/20"
    },
    {
      icon: Home,
      title: "Home Care",
      description: "Chemical-resistant labels for cleaning products, detergents, and household items. Waterproof and fade-resistant materials.",
      gradient: "from-green-500 to-emerald-500",
      shadow: "shadow-green-500/20"
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      description: "Heavy-duty labels for industrial equipment, machinery, and manufacturing processes. Extreme temperature and chemical resistant.",
      gradient: "from-slate-600 to-gray-700",
      shadow: "shadow-slate-500/20"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Shipping labels, barcode labels, and tracking solutions for warehouses, distribution centers, and logistics operations.",
      gradient: "from-indigo-500 to-blue-500",
      shadow: "shadow-indigo-500/20"
    },
    {
      icon: Package,
      title: "Retail & E-commerce",
      description: "Custom product labels, price tags, and packaging materials for retail stores and online businesses.",
      gradient: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen pt-40 md:pt-44">
      <WhatsAppButton />
      <BrochureButton />
      <AdvisorBanner />
      
      {/* Hero Header */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${industriesBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 via-blue-900/90 to-indigo-900/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
            <span className="text-white/90 text-sm font-medium">Trusted Across Multiple Sectors</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Industries We <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Serve</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Trusted by leading brands across diverse sectors in the UAE and Middle East
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 bg-white rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl ${industry.shadow} transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-3 font-poppins group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-navy group-hover:to-gray-600 transition-all">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${manufacturingBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-blue-900/90 to-purple-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-poppins animate-fade-in-up">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-16 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              We understand that each industry has unique requirements. Our team delivers customized solutions that meet industry standards, regulatory requirements, and your specific business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl">
                <div className="text-6xl font-bold text-gold mb-3 font-poppins">500+</div>
                <div className="text-white/90 text-lg">Clients Served</div>
              </div>
              <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl">
                <div className="text-6xl font-bold text-gold mb-3 font-poppins">8+</div>
                <div className="text-white/90 text-lg">Industries</div>
              </div>
              <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl">
                <div className="text-6xl font-bold text-gold mb-3 font-poppins">15+</div>
                <div className="text-white/90 text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

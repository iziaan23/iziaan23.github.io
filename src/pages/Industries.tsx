import { ShoppingBag, Pill, Laptop, Sparkles, Home, Factory, Package, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import industriesBg from "@/assets/backgrounds/industries-bg.jpg";
import manufacturingBg from "@/assets/backgrounds/manufacturing-bg.jpg";

const Industries = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: "FMCG & Food",
      description: "Labels and packaging solutions for consumer goods, food products, and beverages. From product branding to compliance labeling.",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      icon: Pill,
      title: "Healthcare & Pharmaceuticals",
      description: "Regulatory-compliant labels for medicines, medical devices, and healthcare products. Temperature-resistant and tamper-evident options available.",
      gradient: "from-red-500 via-pink-500 to-purple-500"
    },
    {
      icon: Laptop,
      title: "Electronics",
      description: "Durable labels for electronic appliances, gadgets, and technical equipment. Heat-resistant and long-lasting adhesives.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    {
      icon: Sparkles,
      title: "Beauty & Cosmetics",
      description: "Premium labels with vibrant colors and special finishes for cosmetics, personal care, and beauty products.",
      gradient: "from-pink-500 via-purple-500 to-indigo-500"
    },
    {
      icon: Home,
      title: "Home Care",
      description: "Chemical-resistant labels for cleaning products, detergents, and household items. Waterproof and fade-resistant materials.",
      gradient: "from-green-500 via-teal-500 to-cyan-500"
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      description: "Heavy-duty labels for industrial equipment, machinery, and manufacturing processes. Extreme temperature and chemical resistant.",
      gradient: "from-gray-600 via-slate-700 to-gray-800"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Shipping labels, barcode labels, and tracking solutions for warehouses, distribution centers, and logistics operations.",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500"
    },
    {
      icon: Package,
      title: "Retail & E-commerce",
      description: "Custom product labels, price tags, and packaging materials for retail stores and online businesses.",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Header */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[zoom_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${industriesBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 via-blue-900/90 to-purple-900/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up">
            Industries We <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">Serve</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Trusted by leading brands across diverse sectors in the UAE and Middle East
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-navy to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-gold/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-gold transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${manufacturingBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins animate-fade-in-up">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We understand that each industry has unique requirements. Our team works closely with you to deliver customized packaging and labeling solutions that meet industry standards, regulatory requirements, and your specific business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-gold/50 transition-all duration-300">
                <div className="text-5xl font-bold text-gold mb-2 font-poppins">500+</div>
                <div className="text-white/80">Clients Served</div>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-gold/50 transition-all duration-300">
                <div className="text-5xl font-bold text-gold mb-2 font-poppins">8+</div>
                <div className="text-white/80">Industries</div>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-gold/50 transition-all duration-300">
                <div className="text-5xl font-bold text-gold mb-2 font-poppins">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

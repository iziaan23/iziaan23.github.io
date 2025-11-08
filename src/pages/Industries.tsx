import { ShoppingBag, Pill, Laptop, Sparkles, Home, Factory, Package, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: "FMCG & Food",
      description: "Labels and packaging solutions for consumer goods, food products, and beverages. From product branding to compliance labeling.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Pill,
      title: "Healthcare & Pharmaceuticals",
      description: "Regulatory-compliant labels for medicines, medical devices, and healthcare products. Temperature-resistant and tamper-evident options available.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Laptop,
      title: "Electronics",
      description: "Durable labels for electronic appliances, gadgets, and technical equipment. Heat-resistant and long-lasting adhesives.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Beauty & Cosmetics",
      description: "Premium labels with vibrant colors and special finishes for cosmetics, personal care, and beauty products.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Home,
      title: "Home Care",
      description: "Chemical-resistant labels for cleaning products, detergents, and household items. Waterproof and fade-resistant materials.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      description: "Heavy-duty labels for industrial equipment, machinery, and manufacturing processes. Extreme temperature and chemical resistant.",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Shipping labels, barcode labels, and tracking solutions for warehouses, distribution centers, and logistics operations.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Package,
      title: "Retail & E-commerce",
      description: "Custom product labels, price tags, and packaging materials for retail stores and online businesses.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Industries We Serve
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Trusted by leading brands across diverse sectors in the UAE and Middle East
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-gold"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-3 font-montserrat group-hover:text-gold transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-montserrat">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We understand that each industry has unique requirements. Our team works closely with you to deliver customized packaging and labeling solutions that meet industry standards, regulatory requirements, and your specific business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2 font-montserrat">500+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2 font-montserrat">8+</div>
                <div className="text-muted-foreground">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2 font-montserrat">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

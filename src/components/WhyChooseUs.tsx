import { Shield, Zap, Heart, Globe } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "ISO-certified processes ensuring the highest standards in every product",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology and materials for superior packaging solutions",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Dedicated support and customization to meet your unique requirements",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Dubai-based excellence with international quality benchmarks",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-montserrat">
            Why Choose SquarePack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with Dubai's most innovative packaging partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold to-secondary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3 font-montserrat">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

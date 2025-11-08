import { ShoppingBag, Pill, Laptop, Sparkles, Home, Factory } from "lucide-react";

export const Industries = () => {
  const industries = [
    { icon: ShoppingBag, label: "FMCG & Food", color: "bg-orange-500" },
    { icon: Pill, label: "Healthcare", color: "bg-red-500" },
    { icon: Laptop, label: "Electronics", color: "bg-blue-500" },
    { icon: Sparkles, label: "Beauty & Lifestyle", color: "bg-pink-500" },
    { icon: Home, label: "Home Care", color: "bg-green-500" },
    { icon: Factory, label: "Industrial", color: "bg-gray-600" },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-navy to-charcoal text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            Industries We Serve
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Trusted by leading brands across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${industry.color} mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-white/90 group-hover:text-gold transition-colors">
                  {industry.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

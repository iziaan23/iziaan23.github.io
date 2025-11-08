import { Tag, Package, Barcode, Printer, Sparkles, Box } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Products = () => {
  const products = [
    {
      icon: Tag,
      title: "Plain Labels",
      description: "Durable, high-quality labels with superior adhesive strength for all applications",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Product Labels",
      description: "Fully customizable labels that bring your brand identity to life",
      color: "from-gold to-amber-500",
    },
    {
      icon: Barcode,
      title: "Barcode Ribbons",
      description: "Premium thermal transfer ribbons in various widths and materials",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Package,
      title: "Stretch Film",
      description: "High-performance packaging film for secure and efficient wrapping",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Box,
      title: "BOPP Tapes",
      description: "Strong, reliable adhesive tapes for all your packaging needs",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Printer,
      title: "Printers",
      description: "Professional-grade label and barcode printing equipment",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-montserrat">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive packaging and labeling solutions tailored to your industry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-gold overflow-hidden relative"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy mb-3 font-montserrat group-hover:text-gold transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-6 text-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

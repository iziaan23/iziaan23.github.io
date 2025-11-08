import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "plain-labels",
      title: "Plain Labels",
      description: "High-quality blank labels in various sizes and materials. Perfect for thermal transfer and direct thermal printing applications.",
      features: ["Multiple sizes available", "Durable materials", "Superior adhesive strength", "Compatible with all major printers"],
      image: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: "product-labels",
      title: "Product Labels",
      description: "Fully customizable labels designed to bring your brand identity to life with vibrant colors and premium finishes.",
      features: ["Custom designs", "Full-color printing", "Multiple finish options", "Brand-specific customization"],
      image: "bg-gradient-to-br from-gold to-amber-500"
    },
    {
      id: "barcode-ribbons",
      title: "Barcode Ribbons",
      description: "Premium thermal transfer ribbons offering exceptional print quality for all your barcode and label printing needs.",
      features: ["Wax, resin, and wax-resin options", "Various widths: 40mm to 110mm", "High-density printing", "Smudge-resistant"],
      image: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: "stretch-film",
      title: "Stretch Film",
      description: "High-performance stretch wrap film for efficient and secure packaging of pallets and large shipments.",
      features: ["Machine and hand grade", "Clear and colored options", "High puncture resistance", "Excellent load stability"],
      image: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      id: "bopp-tapes",
      title: "BOPP Tapes",
      description: "Reliable adhesive tapes for all packaging applications, offering strong bonding and durability.",
      features: ["Strong adhesion", "Weather resistant", "Custom printing available", "Various widths and colors"],
      image: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      id: "printers",
      title: "Label Printers",
      description: "Professional-grade thermal and inkjet label printers from leading manufacturers for industrial applications.",
      features: ["Desktop and industrial models", "High-speed printing", "Multiple connectivity options", "Service and support included"],
      image: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Our Products
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive packaging and labeling solutions tailored to your industry needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="group h-full p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-gold overflow-hidden relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 ${product.image} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`w-full h-48 rounded-xl ${product.image} mb-6 group-hover:scale-105 transition-transform duration-300`} />
                    
                    <h3 className="text-2xl font-bold text-navy mb-3 font-montserrat group-hover:text-gold transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-gold mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import plainLabelsImg from "@/assets/products/plain-labels.jpg";
import productLabelsImg from "@/assets/products/product-labels.jpg";
import barcodeRibbonsImg from "@/assets/products/barcode-ribbons.jpg";
import stretchFilmImg from "@/assets/products/stretch-film.jpg";
import printersImg from "@/assets/products/printers.jpg";
import productsBg from "@/assets/backgrounds/products-showcase.jpg";

const Products = () => {
  const products = [
    {
      id: "plain-labels",
      title: "Plain Labels",
      description: "High-quality blank labels in various sizes and materials. Perfect for thermal transfer and direct thermal printing applications.",
      features: ["Multiple sizes available", "Durable materials", "Superior adhesive strength", "Compatible with all major printers"],
      image: plainLabelsImg,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "product-labels",
      title: "Product Labels",
      description: "Fully customizable labels designed to bring your brand identity to life with vibrant colors and premium finishes.",
      features: ["Custom designs", "Full-color printing", "Multiple finish options", "Brand-specific customization"],
      image: productLabelsImg,
      gradient: "from-secondary to-secondary/80"
    },
    {
      id: "barcode-ribbons",
      title: "Barcode Ribbons",
      description: "Premium thermal transfer ribbons offering exceptional print quality for all your barcode and label printing needs.",
      features: ["Wax, resin, and wax-resin options", "Various widths: 40mm to 110mm", "High-density printing", "Smudge-resistant"],
      image: barcodeRibbonsImg,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "packaging-products",
      title: "Packaging Products",
      description: "Comprehensive packaging solutions including stretch films and BOPP tapes for secure and efficient packaging.",
      features: ["Stretch film (Hand/Machine Grade)", "BOPP Tapes with strong adhesion", "Weather resistant", "Custom printing available"],
      image: stretchFilmImg,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      id: "other-products",
      title: "Other Products",
      description: "Comprehensive range of specialized packaging and labeling solutions including asset tags, thermal rolls, masking tapes, and more.",
      features: ["Asset tags & labels", "Thermal cash rolls", "Masking tapes", "Pricing guns & stickers"],
      image: printersImg,
      gradient: "from-indigo-500 to-blue-500"
    },
  ];

  return (
    <div className="min-h-screen pt-[160px] md:pt-[192px] lg:pt-[224px]">
      <WhatsAppButton />
      <BrochureButton />
      
      {/* Hero Header */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
            <span className="text-white/90 text-sm font-medium">Premium Packaging Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Our <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Comprehensive packaging and labeling solutions tailored to your industry needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="group h-full rounded-3xl bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy mb-3 font-poppins group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-navy group-hover:to-gray-600 transition-all">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mr-3 mt-1.5`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className={`inline-flex items-center font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110`}>
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 text-navy group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-6 bg-gold/10 border-2 border-gold rounded-xl">
              <p className="text-gold text-2xl md:text-3xl font-bold italic">
                "On-time, complete, and uncompromising quality — always."
              </p>
              <p className="text-white text-lg mt-3">
                Delivered On Time, On Price, On Service and On Quality
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

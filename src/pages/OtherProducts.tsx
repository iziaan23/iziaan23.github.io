import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import tamperEvidentImg from "@/assets/products/tamper-evident.jpg";
import assetTagsImg from "@/assets/products/asset-tags.jpg";
import warehouseImg from "@/assets/products/warehouse-solutions.jpg";
import shrinkSleeveImg from "@/assets/products/shrink-sleeve.jpg";
import thermalRollsImg from "@/assets/products/thermal-rolls.jpg";
import maskingTapeImg from "@/assets/products/masking-tape.jpg";
import pricingGunImg from "@/assets/products/pricing-gun.jpg";
import hotStampingImg from "@/assets/products/hot-stamping-foil.jpg";
import printerScannerImg from "@/assets/products/printer-scanner.jpg";
import productsBg from "@/assets/backgrounds/products-showcase.jpg";

const OtherProducts = () => {
  const otherProducts = [
    {
      title: "Tamper Evident Labels / Void Labels",
      description: "Security labels that show clear evidence of tampering, perfect for authenticity and security applications.",
      image: tamperEvidentImg
    },
    {
      title: "Asset Tag / Asset Labels",
      description: "Durable identification markers for tracking and managing physical assets throughout their lifecycle.",
      image: assetTagsImg
    },
    {
      title: "Warehouse Solutions",
      description: "Complete labeling and identification systems designed specifically for warehouse management and logistics.",
      image: warehouseImg
    },
    {
      title: "Shrink Sleeve Label",
      description: "Full-color 360-degree printed labels that conform to container shapes using heat application.",
      image: shrinkSleeveImg
    },
    {
      title: "Thermal Cash Roll (POS Rolls)",
      description: "High-quality thermal paper rolls for cash registers, credit card terminals, and POS systems.",
      image: thermalRollsImg
    },
    {
      title: "Masking Tape (Auto & Normal Grade)",
      description: "Premium masking tapes for automotive and general applications with strong adhesion and clean removal.",
      image: maskingTapeImg
    },
    {
      title: "Pricing Guns & Stickers",
      description: "Hand-held pricing devices with corresponding price stickers for retail and inventory management.",
      image: pricingGunImg
    },
    {
      title: "Hot Stamping Foil",
      description: "Metallic and holographic foils for premium label finishing and brand enhancement.",
      image: hotStampingImg
    },
    {
      title: "Printers / Scanners",
      description: "Professional-grade label printers and barcode scanners from leading manufacturers.",
      image: printerScannerImg
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
            <span className="text-white/90 text-sm font-medium">Specialized Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Other <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Comprehensive range of specialized packaging and labeling solutions
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((product, index) => (
              <div 
                key={index} 
                className="group h-full rounded-3xl bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-3 font-poppins group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-navy group-hover:to-gray-600 transition-all">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
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

export default OtherProducts;

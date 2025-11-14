import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import plainLabelsImg from "@/assets/products/plain-labels.jpg";
import productLabelsImg from "@/assets/products/product-labels.jpg";
import barcodeRibbonsImg from "@/assets/products/barcode-ribbons.jpg";
import stretchFilmImg from "@/assets/products/stretch-film.jpg";
import boppTapesImg from "@/assets/products/bopp-tapes.jpg";
import printersImg from "@/assets/products/printers.jpg";

const ProductDetail = () => {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    "plain-labels": {
      title: "Plain Labels",
      image: plainLabelsImg,
      description: "Our plain labels are manufactured using premium quality materials to ensure durability and superior performance across various applications. Available in thermal transfer and direct thermal options, these labels are designed to meet the demanding requirements of modern industries.",
      features: [
        "Available in multiple sizes: 25mm to 100mm width",
        "Materials: Paper, Polypropylene, Polyester",
        "Temperature resistant up to 150°C",
        "Superior adhesive strength for various surfaces",
        "Compatible with Zebra, TSC, Honeywell, and all major printers",
        "Custom die-cutting available"
      ],
      applications: [
        "Retail product labeling",
        "Warehouse inventory management",
        "Shipping and logistics",
        "Asset tracking",
        "Manufacturing process control"
      ],
      specifications: [
        { label: "Material Options", value: "Paper, PP, PET, Vinyl" },
        { label: "Adhesive Type", value: "Permanent, Removable, Freezer-grade" },
        { label: "Core Size", value: "25mm, 40mm, 76mm" },
        { label: "Roll Diameter", value: "Up to 300mm" }
      ]
    },
    "product-labels": {
      title: "Product Labels",
      image: productLabelsImg,
      description: "Bring your brand to life with our custom product labels. We offer full-color printing, variable data capabilities, and premium finishing options to create labels that not only inform but also captivate your customers.",
      features: [
        "Full CMYK + spot color printing",
        "Variable data and QR code integration",
        "Multiple finish options: Matte, Gloss, Soft-touch",
        "Embossing and foil stamping available",
        "Water-resistant and UV-protected materials",
        "Short to long run production capabilities"
      ],
      applications: [
        "FMCG product branding",
        "Cosmetics and beauty products",
        "Food and beverage packaging",
        "Pharmaceutical labeling",
        "Electronics and appliance labels"
      ],
      specifications: [
        { label: "Printing Method", value: "Flexo, Digital, Offset" },
        { label: "Maximum Width", value: "330mm" },
        { label: "Minimum Order", value: "1000 labels" },
        { label: "Turnaround Time", value: "3-7 working days" }
      ]
    },
    "barcode-ribbons": {
      title: "Barcode Ribbons",
      image: barcodeRibbonsImg,
      description: "Premium quality thermal transfer ribbons engineered for consistent, high-resolution printing. Our ribbons deliver exceptional barcode readability and durability across diverse printing environments.",
      features: [
        "Wax, Wax-Resin, and Full Resin formulations",
        "Widths available: 40mm, 60mm, 80mm, 110mm",
        "Lengths: 300m standard (custom lengths available)",
        "High-density printing up to 600 DPI",
        "Excellent smudge and scratch resistance",
        "Compatible with all major thermal printers"
      ],
      applications: [
        "Barcode label printing",
        "Compliance and regulatory labeling",
        "Retail price tags",
        "Shipping labels",
        "Inventory tracking"
      ],
      specifications: [
        { label: "Ribbon Types", value: "Wax, Wax-Resin, Resin" },
        { label: "Core Size", value: "0.5 inch, 1 inch" },
        { label: "Print Speed", value: "Up to 12 IPS" },
        { label: "Storage", value: "18 months shelf life" }
      ]
    },
    "stretch-film": {
      title: "Stretch Film",
      image: stretchFilmImg,
      description: "High-performance stretch film designed for optimal load stability and protection. Our films offer superior puncture resistance and excellent cling properties for secure pallet wrapping.",
      features: [
        "Machine grade and hand grade options",
        "Thickness: 12 micron to 35 micron",
        "Clear and colored films available",
        "High stretch ratio (up to 300%)",
        "Excellent load retention",
        "UV resistant formulations"
      ],
      applications: [
        "Pallet wrapping and stabilization",
        "Bundling and unitizing",
        "Protection during transit",
        "Warehouse storage",
        "Export packaging"
      ],
      specifications: [
        { label: "Film Width", value: "300mm, 450mm, 500mm" },
        { label: "Core Size", value: "50mm, 76mm" },
        { label: "Roll Length", value: "Up to 2000 meters" },
        { label: "Elongation", value: "200-300%" }
      ]
    },
    "bopp-tapes": {
      title: "BOPP Tapes",
      image: boppTapesImg,
      description: "Reliable BOPP adhesive tapes offering strong bonding performance for all your packaging needs. Available in various colors and with custom printing options for brand visibility.",
      features: [
        "Strong acrylic adhesive",
        "Weather and moisture resistant",
        "Available in clear, brown, and colors",
        "Custom printing with company logo",
        "Low noise unwinding",
        "Consistent adhesion across temperature ranges"
      ],
      applications: [
        "Carton sealing",
        "Box packaging",
        "Bundle wrapping",
        "Export packaging",
        "General purpose sealing"
      ],
      specifications: [
        { label: "Width Range", value: "12mm to 72mm" },
        { label: "Length", value: "40m, 65m, 100m" },
        { label: "Thickness", value: "38-65 microns" },
        { label: "Adhesion", value: "≥ 5.5 N/25mm" }
      ]
    },
    "printers": {
      title: "Label Printers",
      image: printersImg,
      description: "Professional-grade label printers from industry-leading manufacturers. We offer comprehensive solutions including printer sales, installation, training, and ongoing technical support.",
      features: [
        "Desktop and industrial printer models",
        "Thermal transfer and direct thermal technologies",
        "Print speeds up to 12 inches per second",
        "USB, Ethernet, and wireless connectivity",
        "User-friendly interface and software",
        "Service contracts and spare parts available"
      ],
      applications: [
        "High-volume label printing",
        "Barcode and QR code generation",
        "Product labeling",
        "Shipping and logistics",
        "Compliance labeling"
      ],
      specifications: [
        { label: "Print Resolution", value: "203 DPI, 300 DPI, 600 DPI" },
        { label: "Max Print Width", value: "104mm to 216mm" },
        { label: "Brands", value: "Zebra, TSC, Honeywell, Datamax" },
        { label: "Warranty", value: "1-3 years manufacturer warranty" }
      ]
    }
  };

  const product = productData[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen pt-[88px] md:pt-[104px] flex items-center justify-center">
        <WhatsAppButton />
        <BrochureButton />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[88px] md:pt-[104px]">
      <WhatsAppButton />
      <BrochureButton />
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <Link to="/products">
          <Button variant="outline" className="group border-2 hover:border-navy">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Button>
        </Link>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 font-poppins">
                {product.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-500 hover:to-gold text-navy font-bold text-lg px-10 py-7 shadow-lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 animate-scale-in">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 font-poppins text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {product.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 font-poppins text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {product.specifications.map((spec: any, index: number) => (
              <div key={index} className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="text-sm text-gold font-bold mb-2 uppercase tracking-wide">{spec.label}</div>
                <div className="text-xl text-navy font-semibold">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-indigo-900" />
        
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-poppins text-center animate-fade-in-up">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {product.applications.map((app: string, index: number) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 animate-scale-in shadow-xl" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-white text-lg">{app}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

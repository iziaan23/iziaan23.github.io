import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Package, Shield, Zap, Award, Mail, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import { ProductCategoryNav } from "@/components/ProductCategoryNav";
import { ProductBreadcrumb } from "@/components/ProductBreadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import plainLabelsImg from "@/assets/products/main/plain-labels.jpg";
<<<<<<< HEAD
import productLabelsImg from "@/assets/products/main/product-labels.png";
import barcodeRibbonsImg from "@/assets/products/main/barcode-ribbons.jpg";
=======
import productLabelsImg from "@/assets/products/main/product-labels.png";
import barcodeRibbonsImg from "@/assets/products/main/barcode-ribbons.png";
>>>>>>> 2c6e58f6bd6d3fce796ee7a02e58ee40bb3729e0
import stretchFilmImg from "@/assets/products/main/stretch-film.jpg";
import boppTapesImg from "@/assets/products/bopp-tapes.jpg";
import printersImg from "@/assets/products/main/printers.jpg";

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
      <div className="min-h-screen pt-[132px] md:pt-[148px] lg:pt-[164px] flex items-center justify-center">
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
    <div className="min-h-screen pt-[132px] md:pt-[148px] lg:pt-[164px]">
      <WhatsAppButton />
      <BrochureButton />
      
      <ProductCategoryNav />

      {/* Hero Section - Redesigned */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="container mx-auto px-4">
          <ProductBreadcrumb category="main" productName={product.title} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left: Image Gallery */}
            <div className="space-y-6 animate-scale-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-blue-900/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-sm font-bold text-navy shadow-lg">
                      Premium Quality
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, text: "Quality Assured" },
                  { icon: Zap, text: "Fast Delivery" },
                  { icon: Award, text: "Certified" }
                ].map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="p-4 bg-white rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
                      <Icon className="w-6 h-6 text-navy mx-auto mb-2" />
                      <p className="text-xs font-semibold text-gray-700">{badge.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Title & Description */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-navy/10 to-blue-900/10 rounded-full mb-4">
                  <Package className="w-4 h-4 text-navy" />
                  <span className="text-sm font-bold text-navy">Premium Product</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-poppins">
                  {product.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quick Specs */}
              <Card className="border-2 border-navy/10">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-navy mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-gold" />
                    Quick Specifications
                  </h3>
                  <div className="space-y-3">
                    {product.specifications.slice(0, 4).map((spec: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                        <span className="text-sm font-medium text-gray-600">{spec.label}</span>
                        <span className="text-sm font-bold text-navy">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button size="lg" className="w-full bg-gradient-to-r from-navy to-blue-900 hover:from-navy/90 hover:to-blue-900/90 text-white font-bold text-lg py-7 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Quote
                  </Button>
                </Link>
                <a href="tel:+971504578900" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-lg py-7 transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>

              {/* Contact Info */}
              <div className="p-6 bg-gradient-to-br from-gold/10 to-yellow-500/10 rounded-2xl border border-gold/20">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-bold text-navy">Need assistance?</span> Our team is ready to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <a href="tel:+971504578900" className="text-navy font-semibold hover:text-gold transition-colors">
                    +971 50 457 8900
                  </a>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <a href="mailto:sales@squarepack.net" className="text-navy font-semibold hover:text-gold transition-colors">
                    sales@squarepack.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - Features, Specs, Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="features" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl">
              <TabsTrigger 
                value="features" 
                className="data-[state=active]:bg-navy data-[state=active]:text-white font-bold text-base py-4 rounded-xl transition-all duration-300"
              >
                <Check className="w-5 h-5 mr-2" />
                Features
              </TabsTrigger>
              <TabsTrigger 
                value="specifications" 
                className="data-[state=active]:bg-navy data-[state=active]:text-white font-bold text-base py-4 rounded-xl transition-all duration-300"
              >
                <Package className="w-5 h-5 mr-2" />
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="applications" 
                className="data-[state=active]:bg-navy data-[state=active]:text-white font-bold text-base py-4 rounded-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Applications
              </TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold text-navy mb-8 font-poppins">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature: string, index: number) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-navy/20">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specifications" className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold text-navy mb-8 font-poppins">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec: any, index: number) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold/30">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm text-gold font-bold mb-2 uppercase tracking-wide">
                            {spec.label}
                          </div>
                          <div className="text-xl text-navy font-bold">
                            {spec.value}
                          </div>
                        </div>
                        <Package className="w-8 h-8 text-navy/20 group-hover:text-navy/40 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold text-navy mb-8 font-poppins">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.applications.map((app: string, index: number) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-navy/20 bg-gradient-to-br from-white to-slate-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-yellow-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-gray-700 text-base font-medium">{app}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get in touch with our team for custom quotes, bulk orders, or technical assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-lg px-10 py-7 transition-all duration-300 hover:scale-105">
                <ArrowLeft className="w-5 h-5 mr-2" />
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

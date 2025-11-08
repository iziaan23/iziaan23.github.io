import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up font-montserrat">
          Redefining the Art of
          <span className="block bg-gradient-to-r from-gold to-secondary bg-clip-text text-transparent mt-2">
            Packaging & Labeling
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Premium solutions for FMCG, healthcare, logistics, and industrial sectors across Dubai and beyond
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg"
            onClick={scrollToProducts}
            className="bg-gold hover:bg-gold/90 text-navy font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-gold"
          >
            Explore Our Products
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request a Quote
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-gold" />
      </div>
    </section>
  );
};

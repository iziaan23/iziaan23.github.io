import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const stats = [
    { icon: Package, label: "Products Delivered", value: "10M+" },
    { icon: Award, label: "ISO Certified", value: "9001" },
    { icon: Users, label: "Happy Clients", value: "500+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-charcoal/90" />
        </div>

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
            <Link to="/products">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-gold"
              >
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/20 to-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2 font-montserrat">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-to-br from-white to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-montserrat">
              Dubai's Premier Packaging Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At SquarePack, we combine cutting-edge technology with artisanal precision to deliver 
              packaging and labeling solutions that elevate your brand. From concept to delivery, 
              we're committed to excellence in every detail.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, Headphones, Phone, Mail } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Industries", to: "/industries" },
    { label: "Contact", to: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Advisor Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-navy via-blue-900 to-indigo-900 py-2 md:py-3 shadow-lg">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-center gap-2 md:gap-4 text-white text-xs md:text-sm">
            <div className="flex items-center gap-1.5 md:gap-2">
              <Headphones className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="font-semibold hidden sm:inline">24/7 Support:</span>
            </div>
            <a href="tel:+971504578900" className="text-secondary hover:text-secondary/80 font-semibold transition-colors">
              +971 50 457 8900
            </a>
            <span className="text-white/40">|</span>
            <a href="tel:+971509929801" className="text-secondary hover:text-secondary/80 font-semibold transition-colors hidden sm:inline">
              +971 50 992 9801
            </a>
            <span className="text-white/40 hidden md:inline">|</span>
            <a href="mailto:sales@squarepack.net" className="text-secondary hover:text-secondary/80 font-semibold transition-colors hidden md:inline">
              sales@squarepack.net
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className="fixed top-[40px] md:top-[48px] left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-3 md:py-4"
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img 
                  src={logo} 
                  alt="SquarePack Logo" 
                  className="h-20 md:h-24 lg:h-28 w-auto cursor-pointer transition-transform hover:scale-105"
                />
              </Link>
            </div>

            {/* Center - Contact Info (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center px-4">
              <div className="flex items-center gap-2 text-navy">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 leading-tight">Call Us</p>
                  <a href="tel:+971504578900" className="text-sm font-bold hover:text-secondary transition-colors">
                    +971 50 457 8900
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 leading-tight">Email Us</p>
                  <a href="mailto:sales@squarepack.net" className="text-sm font-bold hover:text-secondary transition-colors">
                    sales@squarepack.net
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-sm lg:text-base transition-colors hover:text-secondary text-navy ${location.pathname === link.to ? "text-secondary" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm lg:text-base"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="text-navy w-6 h-6" />
              ) : (
                <Menu className="text-navy w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-6 animate-fade-in-up border border-gray-200">
              {/* Mobile Contact Info */}
              <div className="mb-6 pb-6 border-b border-gray-300">
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+971504578900" className="text-navy font-semibold hover:text-gold transition-colors text-base">
                      +971 50 457 8900
                    </a>
                    <a href="tel:+971509929801" className="text-navy font-semibold hover:text-gold transition-colors text-base">
                      +971 50 992 9801
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <a href="mailto:sales@squarepack.net" className="text-navy font-semibold hover:text-secondary transition-colors text-base break-all">
                    sales@squarepack.net
                  </a>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 text-navy font-medium hover:text-gold transition-colors ${
                    location.pathname === link.to ? "text-gold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  className="w-full mt-4 bg-gold hover:bg-gold/90 text-navy font-semibold"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

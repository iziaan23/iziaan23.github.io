import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

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
    <nav 
      className={`fixed top-[48px] md:top-[56px] left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md ${
        scrolled ? "py-2 md:py-3" : "py-2 md:py-3"
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logo} 
                alt="SquarePack Logo" 
                className="h-16 md:h-24 w-auto cursor-pointer transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-medium transition-colors hover:text-gold text-navy ${location.pathname === link.to ? "text-gold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button 
                className="bg-gold hover:bg-gold/90 text-navy font-semibold"
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-navy" />
            ) : (
              <Menu className="text-navy" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-6 animate-fade-in-up">
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
  );
};

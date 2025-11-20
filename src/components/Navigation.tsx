import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, Headphones, Phone, Mail } from "lucide-react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Industries", to: "/industries" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Advisor Bar */}
      <div className="fixed top-2 left-4 right-4 z-[60] bg-gradient-to-r from-navy via-blue-900 to-indigo-900 py-1.5 md:py-2 shadow-md rounded-xl">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-center gap-2 md:gap-3 text-white text-xs md:text-sm">
            <div className="flex items-center gap-1.5 md:gap-2">
              <Headphones className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="font-semibold hidden sm:inline">24/7 Support:</span>
            </div>

            <a
              href="tel:+971504578900"
              className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              +971 50 457 8900
            </a>

            <span className="text-white/40 hidden sm:inline">|</span>

            <a
              href="tel:+971509929801"
              className="text-secondary hover:text-secondary/80 font-semibold transition-colors hidden sm:inline"
            >
              +971 50 992 9801
            </a>

            <span className="text-white/40 hidden md:inline">|</span>

            <a
              href="mailto:sales@squarepack.net"
              className="text-secondary hover:text-secondary/80 font-semibold transition-colors hidden md:inline"
            >
              sales@squarepack.net
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-[44px] md:top-[52px] left-4 right-4 z-50 transition-all duration-300 bg-white shadow-lg rounded-2xl py-1 md:py-1.5">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between gap-3 md:gap-4">

            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="SquarePack Logo"
                  className="h-32 md:h-36 lg:h-44 w-auto cursor-pointer transition-transform hover:scale-105"
                />
              </Link>
            </div>

            {/* Center Contact Information */}
            <div className="flex items-center gap-2 md:gap-3 xl:gap-4 flex-1 justify-center px-2">

              {/* Mobile Compact Info */}
              <div className="flex md:hidden flex-col items-start gap-1 text-navy text-xs">
                <a href="tel:+971504578900" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="w-3 h-3 text-secondary" />
                  <span className="font-semibold">+971 50 457 8900</span>
                </a>
                <a href="mailto:sales@squarepack.net" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="w-3 h-3 text-secondary" />
                  <span className="font-semibold">sales@squarepack.net</span>
                </a>
              </div>

              {/* Desktop Contact */}
              <div className="hidden md:flex items-center gap-2 text-navy">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call Us</div>
                  <a href="tel:+971504578900" className="font-bold text-sm text-navy hover:text-primary transition-colors">
                    +971 50 457 8900
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 text-navy">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email Us</div>
                  <a href="mailto:sales@squarepack.net" className="font-bold text-sm text-navy hover:text-primary transition-colors">
                    sales@squarepack.net
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-7 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-sm lg:text-base transition-colors hover:text-secondary text-navy ${
                    location.pathname === link.to ? "text-secondary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm lg:text-base">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
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

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 bg-white rounded-lg shadow-xl p-6 border border-gray-200 animate-fade-in-up">

              {/* Mobile Contact */}
              <div className="mb-6 pb-4 border-b border-gray-300">
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+971504578900" className="text-navy font-semibold hover:text-secondary transition-colors text-base">
                      +971 50 457 8900
                    </a>
                    <a href="tel:+971509929801" className="text-navy font-semibold hover:text-secondary transition-colors text-base">
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

              {/* Navigation */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 text-navy font-medium hover:text-secondary transition-colors ${
                    location.pathname === link.to ? "text-secondary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white font-semibold">
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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, Headphones, Phone, Mail } from "lucide-react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Industries", to: "/industries" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* === Advisor Thin Top Bar === */}
      <div
        className={`fixed inset-x-4 top-2 z-[70] rounded-xl transition-all duration-300 ${
          scrolled ? "opacity-90" : "opacity-100"
        }`}
      >
        <div className="bg-gradient-to-r from-[#0b2a56] via-[#143a7a] to-[#2d2b72] text-white text-xs md:text-sm px-4 py-1.5 rounded-xl shadow-sm flex items-center justify-center gap-3">
          <Headphones className="w-4 h-4 text-yellow-300" />
          <span className="font-medium">24/7 Support:</span>

          <a href="tel:+971504578900" className="font-semibold text-yellow-300 hover:underline">
            +971 50 457 8900
          </a>

          <span className="hidden sm:inline text-white/40">|</span>

          <a href="tel:+971509929801" className="hidden sm:inline font-semibold text-yellow-300 hover:underline">
            +971 50 992 9801
          </a>

          <span className="hidden md:inline text-white/40">|</span>

          <a href="mailto:sales@squarepack.net" className="hidden md:inline font-semibold text-yellow-300 hover:underline">
            sales@squarepack.net
          </a>
        </div>
      </div>

      {/* === Main Glassmorphic Navbar === */}
      <nav
        className={`fixed left-4 right-4 top-16 z-[60] rounded-2xl border border-white/10 transition-all duration-300 
          ${scrolled ? "backdrop-blur-md bg-white/10 shadow-md" : "backdrop-blur-xl bg-white/15 shadow-lg"}`}
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            
            {/* Left Nav (Desktop) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-sm md:text-base transition-colors hover:text-yellow-300 ${
                    location.pathname === link.to ? "text-yellow-300" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center Logo (Overlapping) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 md:-top-12 z-[80]">
              <Link to="/">
                <img
                  src={logo}
                  alt="SquarePack Logo"
                  className="h-28 md:h-36 lg:h-44 xl:h-52 w-auto drop-shadow-xl transition-transform hover:scale-105"
                />
              </Link>
            </div>

            {/* Right Nav (Desktop) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-sm md:text-base transition-colors hover:text-yellow-300 ${
                    location.pathname === link.to ? "text-yellow-300" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-[#0a0a0a] font-semibold text-sm md:text-base shadow-md">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md bg-white/10 border border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 mb-4 bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-2 rounded-md text-white/95 hover:bg-white/10 font-medium ${
                      location.pathname === link.to ? "text-yellow-300" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-[#0a0a0a] font-semibold">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

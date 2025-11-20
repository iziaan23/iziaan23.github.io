import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, Phone, Mail, Headphones } from "lucide-react";

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
      {/* === Advisor Bar === */}
      <div className="fixed inset-x-4 top-2 z-[70]">
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
        className={`fixed left-4 right-4 top-16 z-[60] rounded-2xl border transition-all duration-300
          backdrop-blur-xl bg-white/10 shadow-xl
          border-white/20 hover:border-yellow-300/40
          ${scrolled ? "shadow-lg" : "shadow-xl"}
        `}
        style={{
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 0 20px rgba(255,255,255,0.15), 0 0 35px rgba(255,215,0,0.25)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* === Left: Big Logo === */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="SquarePack Logo"
                className="h-20 md:h-28 lg:h-32 w-auto drop-shadow-xl transition-transform hover:scale-105"
              />
            </Link>

            {/* === Middle: Contact Details (Desktop Only) === */}
            <div className="hidden md:flex flex-col items-start gap-2 text-white px-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-300/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-300" />
                </div>
                <div>
                  <p className="text-xs text-white/70">Call Us</p>
                  <a href="tel:+971504578900" className="text-sm font-semibold text-yellow-300 hover:underline">
                    +971 50 457 8900
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-300/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-300" />
                </div>
                <div>
                  <p className="text-xs text-white/70">Email Us</p>
                  <a href="mailto:sales@squarepack.net" className="text-sm font-semibold text-yellow-300 hover:underline">
                    sales@squarepack.net
                  </a>
                </div>
              </div>
            </div>

            {/* === Right: Navigation Links === */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-base transition-all hover:text-yellow-300 ${
                    location.pathname === link.to ? "text-yellow-300" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-[#101010] font-semibold text-base shadow-md">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* === Mobile Menu Button === */}
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

          {/* === Mobile Menu === */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 mb-4 bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
              <div className="flex flex-col gap-3">
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

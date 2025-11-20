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
      {/* === Top Advisor Bar === */}
      <div className="fixed inset-x-4 top-2 z-[70]">
        <div className="bg-[#0b2a56] text-white text-xs md:text-sm px-4 py-1.5 rounded-xl shadow-md flex items-center justify-center gap-3">
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

      {/* === Main White Navbar === */}
      <nav
        className={`fixed left-4 right-4 top-16 z-[60] rounded-2xl bg-white 
          transition-all duration-300 shadow-lg border border-gray-200`}
      >
        <div className="container mx-auto px-4">
          
          <div className="flex items-center justify-between h-24 md:h-28">

            {/* === Left: BIG LOGO === */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="SquarePack Logo"
                className="h-28 md:h-32 lg:h-40 xl:h-44 w-auto transition-transform hover:scale-105"
              />
            </Link>

            {/* === Middle: Contact Info (Desktop Only) === */}
            <div className="hidden md:flex flex-col items-start gap-3 text-[#0b2a56] px-6">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-300/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <a href="tel:+971504578900" className="text-sm font-semibold hover:text-yellow-600">
                    +971 50 457 8900
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-300/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <a href="mailto:sales@squarepack.net" className="text-sm font-semibold hover:text-yellow-600">
                    sales@squarepack.net
                  </a>
                </div>
              </div>

            </div>

            {/* === Right: Nav Links === */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-base transition-colors hover:text-yellow-500 ${
                    location.pathname === link.to ? "text-yellow-500" : "text-[#0b2a56]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-[#0a0a0a] font-semibold text-base shadow">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* === Mobile Menu Icon === */}
            <button
              className="md:hidden p-2 rounded-md border border-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-[#0b2a56]" />
              ) : (
                <Menu className="w-7 h-7 text-[#0b2a56]" />
              )}
            </button>

          </div>

          {/* === Mobile Dropdown === */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 mb-4 bg-white border border-gray-200 rounded-xl p-4 shadow">

              <div className="flex flex-col gap-4">

                {/* Contact Info Mobile */}
                <div className="flex flex-col gap-3">
                  <a href="tel:+971504578900" className="flex items-center gap-2 text-[#0b2a56] font-semibold">
                    <Phone className="w-5 h-5 text-yellow-500" /> +971 50 457 8900
                  </a>
                  <a href="mailto:sales@squarepack.net" className="flex items-center gap-2 text-[#0b2a56] font-semibold">
                    <Mail className="w-5 h-5 text-yellow-500" /> sales@squarepack.net
                  </a>
                </div>

                {/* Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-2 rounded-md text-[#0b2a56] font-medium hover:bg-gray-100 ${
                      location.pathname === link.to ? "text-yellow-600" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-[#0a0a0a] font-semibold">
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

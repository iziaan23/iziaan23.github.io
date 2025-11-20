import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, Headphones, Phone, Mail } from "lucide-react";

/**
 * Glassmorphism + Bold Industrial — Center Logo Navbar
 * - Center logo overlaps the navbar for a premium look.
 * - Thin glass navbar with blur and subtle glow.
 * - Minimal advisor strip on top.
 * - Local uploaded hero image path used as background for preview.
 *
 * Note: If your Tailwind uses different color tokens (text-navy, text-secondary, bg-gold),
 * adapt classes accordingly or replace with hex colors.
 */

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
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== Advisor Thin Strip (compact) ===== */}
      <div
        className={`fixed inset-x-4 top-2 z-[70] rounded-xl transition-all duration-300 ${
          scrolled ? "opacity-90" : "opacity-100"
        }`}
      >
        <div className="bg-gradient-to-r from-[#0b2a56] via-[#143a7a] to-[#2d2b72] text-white text-xs md:text-sm px-3 py-1.5 rounded-xl shadow-sm flex items-center justify-center gap-3">
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

      {/* ===== Main Glass Nav (center logo overlapping) ===== */}
      <nav
        className={`fixed left-4 right-4 top-16 z-[60] rounded-2xl transition-all duration-300
          ${scrolled ? "backdrop-blur-md bg-white/10 shadow-md" : "backdrop-blur-lg bg-white/12 shadow-lg"}
          border border-white/10`}
        style={{ WebkitBackdropFilter: "blur(10px)" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            {/* Left Nav - desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-sm md:text-base transition-colors hover:text-yellow-300 text-white/95 ${
                    location.pathname === link.to ? "text-yellow-300" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center logo (overlapping) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 md:-top-12 flex items-center justify-center pointer-events-auto">
              <Link to="/" className="block">
                <img
                  src={logo}
                  alt="SquarePack Logo"
                  className="h-28 md:h-36 lg:h-44 xl:h-52 w-auto drop-shadow-xl transition-transform transform hover:scale-105"
                />
              </Link>
            </div>

            {/* Right Nav + CTA - desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium text-sm md:text-base transition-colors hover:text-yellow-300 text-white/95 ${
                    location.pathname === link.to ? "text-yellow-300" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact">
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-[#07102a] font-semibold text-sm md:text-base shadow-sm"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile: left - menu toggle */}
            <div className="md:hidden flex items-center gap-3">
              <button
                className="p-2 rounded-md bg-white/10 border border-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white/95" /> : <Menu className="w-5 h-5 text-white/95" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown (under the glass nav) */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 mb-4 bg-white/8 border border-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <a href="tel:+971504578900" className="flex items-center gap-2 text-white/95 font-semibold">
                    <Phone className="w-4 h-4 text-yellow-300" /> +971 50 457 8900
                  </a>
                  <a href="mailto:sales@squarepack.net" className="flex items-center gap-2 text-white/95 font-semibold">
                    <Mail className="w-4 h-4 text-yellow-300" /> sales@squarepack.net
                  </a>
                </div>

                <div className="border-t border-white/6 pt-3 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-2 px-2 rounded-md text-white/95 font-medium hover:bg-white/6 ${
                        location.pathname === link.to ? "text-yellow-300" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-[#07102a] font-semibold">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ===== Example hero section preview using the uploaded image =====
          The path below is the local uploaded image path you provided:
          /mnt/data/4b65dce0-d0b0-457a-9a6f-4796b1ec6c1c.png
          This gives you a quick preview of how the glass nav & center logo look over your hero.
      ===== */}
      <header className="pt-[220px] md:pt-[220px]"> {/* spacing so nav + logo don't overlap hero content */}
        <section
          className="relative w-full min-h-[520px] flex items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(5,25,60,0.75) 0%, rgba(33,41,70,0.6) 60%), url('/mnt/data/4b65dce0-d0b0-457a-9a6f-4796b1ec6c1c.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <p className="inline-block bg-white/6 text-yellow-300 px-4 py-2 rounded-full text-sm mb-6">15+ Years of Experience</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Excellence in <span className="text-yellow-300">Packaging & Labeling</span>
              </h1>
              <p className="mt-6 text-white/90 text-lg md:text-xl">
                Premium solutions for FMCG, healthcare, logistics, and industrial sectors across UAE and beyond.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <Link to="/products">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-[#07102a] font-semibold px-6 py-3">
                    Explore Products
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button className="bg-transparent border border-white/30 hover:border-white/50 text-white/95 px-6 py-3">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navigation;

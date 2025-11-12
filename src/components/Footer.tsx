import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="SquarePack" className="h-32 md:h-40 w-auto mb-4" />
            <p className="text-white/70 leading-relaxed">
              UAE's premier packaging and labeling solutions provider, delivering excellence across industries.
            </p>
            <div className="mt-4 p-3 bg-gold/10 border-l-4 border-gold rounded">
              <p className="text-gold text-sm md:text-base font-bold italic">
                "On-time, complete, and uncompromising quality — always."
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white/70 hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="/products" className="text-white/70 hover:text-gold transition-colors">Products</a>
              </li>
              <li>
                <a href="/industries" className="text-white/70 hover:text-gold transition-colors">Industries</a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-gold transition-colors">Get a Quote</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-white/70">Meydan freezone, Meydan road<br/>Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-white/70">
                  <a href="tel:+971504578900" className="hover:text-gold transition-colors block">
                    +971 50 457 8900
                  </a>
                  <a href="tel:+971509929801" className="hover:text-gold transition-colors block">
                    +971 50 992 9801
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-white/70">
                  <a href="mailto:mohammed@squarepack.net" className="hover:text-gold transition-colors block">
                    mohammed@squarepack.net
                  </a>
                  <a href="mailto:sales@squarepack.net" className="hover:text-gold transition-colors block">
                    sales@squarepack.net
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat text-gold">Follow Us</h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} SquarePack LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

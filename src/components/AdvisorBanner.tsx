import { Headphones } from "lucide-react";

export const AdvisorBanner = () => {
  return (
    <div className="bg-gradient-to-r from-navy via-blue-900 to-indigo-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-lg font-bold font-poppins">Connect with an Advisor</p>
              <p className="text-sm text-white/80">Available 24/7 for Support</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+971504578900" className="text-gold hover:text-amber-400 font-semibold transition-colors">
              +971 50 457 8900
            </a>
            <span className="text-white/40">|</span>
            <a href="tel:+971509929801" className="text-gold hover:text-amber-400 font-semibold transition-colors">
              +971 50 992 9801
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

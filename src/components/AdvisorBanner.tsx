import { Headphones } from "lucide-react";

export const AdvisorBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-navy via-blue-900 to-indigo-900 py-3 md:py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-white">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5 md:w-6 md:h-6 text-gold" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm md:text-lg font-bold font-poppins leading-tight">Connect with an Advisor</p>
              <p className="text-xs md:text-sm text-white/80">Available 24/7 for Support</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center">
            <a href="tel:+971504578900" className="text-gold hover:text-amber-400 font-semibold transition-colors text-sm md:text-base whitespace-nowrap">
              +971 50 457 8900
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="tel:+971509929801" className="text-gold hover:text-amber-400 font-semibold transition-colors text-sm md:text-base whitespace-nowrap">
              +971 50 992 9801
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

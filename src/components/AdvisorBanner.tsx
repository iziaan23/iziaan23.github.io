import { Headphones } from "lucide-react";

export const AdvisorBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-navy via-blue-900 to-indigo-900 py-2 md:py-3 shadow-lg">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 md:gap-4 text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-4 h-4 md:w-5 md:h-5 text-gold" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs md:text-base font-bold font-poppins leading-tight">Connect with an Advisor</p>
              <p className="text-[10px] md:text-sm text-white/80 leading-tight">Available 24/7</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 md:gap-3 text-[11px] md:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a href="tel:+971504578900" className="text-gold hover:text-amber-400 font-semibold transition-colors whitespace-nowrap">
                +971 50 457 8900
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:+971509929801" className="text-gold hover:text-amber-400 font-semibold transition-colors whitespace-nowrap">
                +971 50 992 9801
              </a>
            </div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="mailto:sales@squarepack.net" className="text-gold hover:text-amber-400 font-semibold transition-colors whitespace-nowrap">
              sales@squarepack.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

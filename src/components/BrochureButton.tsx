import { FileText } from "lucide-react";

export const BrochureButton = () => {
  const handleDownload = () => {
    window.open(
      "https://raw.githubusercontent.com/iziaan23/iziaan23.github.io/main/src/assets/Final%20broucher.pdf",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-28 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gold hover:bg-gold/80 text-navy rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Download Brochure"
    >
      <FileText className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-navy text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Download Brochure
      </span>
    </button>
  );
};

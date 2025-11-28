import { Link, useLocation } from "react-router-dom";
import { Package, Layers, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProductCategoryNav = () => {
  const location = useLocation();
  const isMainProducts = location.pathname === "/products";
  const isOtherProducts = location.pathname === "/products/other-products";

  const categories = [
    {
      name: "Main Products",
      path: "/products",
      icon: Package,
      description: "Core product range",
      active: isMainProducts
    },
    {
      name: "Other Products",
      path: "/products/other-products",
      icon: Layers,
      description: "Specialized solutions",
      active: isOtherProducts
    }
  ];

  return (
    <div className="sticky top-[96px] md:top-[112px] lg:top-[128px] z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-4 overflow-x-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={category.path} className="flex items-center">
                <Link
                  to={category.path}
                  className={cn(
                    "group relative flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300",
                    "border-2 hover:shadow-lg hover:-translate-y-0.5",
                    category.active
                      ? "bg-gradient-to-r from-navy to-blue-900 text-white border-navy shadow-lg"
                      : "bg-white text-gray-700 border-gray-200 hover:border-navy/30 hover:bg-gradient-to-r hover:from-navy/5 hover:to-blue-900/5"
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "p-2 rounded-xl transition-all duration-300",
                      category.active
                        ? "bg-white/20"
                        : "bg-gradient-to-br from-navy/10 to-blue-900/10 group-hover:from-navy/20 group-hover:to-blue-900/20"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-colors",
                        category.active ? "text-white" : "text-navy"
                      )}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <span className="font-bold text-base">
                      {category.name}
                    </span>
                    <span
                      className={cn(
                        "text-xs",
                        category.active
                          ? "text-white/80"
                          : "text-gray-500 group-hover:text-navy/70"
                      )}
                    >
                      {category.description}
                    </span>
                  </div>

                  {/* Active Indicator */}
                  {category.active && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                      <div className="w-2 h-2 bg-navy rotate-45" />
                    </div>
                  )}
                </Link>

                {/* Separator */}
                {index < categories.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-300 mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

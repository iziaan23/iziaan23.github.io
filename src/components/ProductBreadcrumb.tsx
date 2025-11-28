import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface ProductBreadcrumbProps {
  category: "main" | "other";
  productName?: string;
}

export const ProductBreadcrumb = ({ category, productName }: ProductBreadcrumbProps) => {
  const categoryName = category === "main" ? "Main Products" : "Other Products";
  const categoryPath = category === "main" ? "/products" : "/products/other-products";

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-navy transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>

      <ChevronRight className="w-4 h-4 text-gray-400" />

      <Link
        to={categoryPath}
        className="hover:text-navy transition-colors"
      >
        {categoryName}
      </Link>

      {productName && (
        <>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="font-semibold text-navy">{productName}</span>
        </>
      )}
    </nav>
  );
};

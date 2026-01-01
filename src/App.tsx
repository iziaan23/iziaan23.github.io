import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HashRedirect } from "@/components/HashRedirect";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import OtherProducts from "./pages/OtherProducts";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout wrapper for public pages
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashRedirect />
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/products" element={<PublicLayout><Products /></PublicLayout>} />
          <Route path="/other-products" element={<PublicLayout><OtherProducts /></PublicLayout>} />
          <Route path="/products/other-products" element={<Navigate to="/other-products" replace />} />
          <Route path="/products/:productId" element={<PublicLayout><ProductDetail /></PublicLayout>} />
          <Route path="/industries" element={<PublicLayout><Industries /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/terms-and-conditions" element={<PublicLayout><TermsAndConditions /></PublicLayout>} />
          <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
          
          {/* Short Product URL Redirects - allows /product-name to work */}
          <Route path="/plain-labels" element={<Navigate to="/products/plain-labels" replace />} />
          <Route path="/product-labels" element={<Navigate to="/products/product-labels" replace />} />
          <Route path="/barcode-ribbons" element={<Navigate to="/products/barcode-ribbons" replace />} />
          <Route path="/packaging-products" element={<Navigate to="/products/packaging-products" replace />} />
          <Route path="/promotional-labels" element={<Navigate to="/products/promotional-labels" replace />} />
          <Route path="/brown-tapes" element={<Navigate to="/products/brown-tapes" replace />} />
          <Route path="/printed-tape" element={<Navigate to="/products/printed-tape" replace />} />
          <Route path="/bubble-wraps" element={<Navigate to="/products/bubble-wraps" replace />} />
          <Route path="/stretch-film" element={<Navigate to="/products/stretch-film" replace />} />
          <Route path="/stretch-films" element={<Navigate to="/products/stretch-film" replace />} />
          <Route path="/bopp-tapes" element={<Navigate to="/products/bopp-tapes" replace />} />
          <Route path="/printers" element={<Navigate to="/products/printers" replace />} />
          
          {/* Alternate spellings without hyphens */}
          <Route path="/plainlabels" element={<Navigate to="/products/plain-labels" replace />} />
          <Route path="/productlabels" element={<Navigate to="/products/product-labels" replace />} />
          <Route path="/barcoderibbons" element={<Navigate to="/products/barcode-ribbons" replace />} />
          <Route path="/packagingproducts" element={<Navigate to="/products/packaging-products" replace />} />
          <Route path="/promotionallabels" element={<Navigate to="/products/promotional-labels" replace />} />
          <Route path="/browntapes" element={<Navigate to="/products/brown-tapes" replace />} />
          <Route path="/printedtape" element={<Navigate to="/products/printed-tape" replace />} />
          <Route path="/bubblewraps" element={<Navigate to="/products/bubble-wraps" replace />} />
          <Route path="/stretchfilm" element={<Navigate to="/products/stretch-film" replace />} />
          <Route path="/bopptapes" element={<Navigate to="/products/bopp-tapes" replace />} />
          <Route path="/otherproducts" element={<Navigate to="/other-products" replace />} />
          
          {/* Admin Routes (no nav/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Industries } from "@/components/Industries";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Industries />
      <WhyChooseUs />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;

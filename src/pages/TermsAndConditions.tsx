import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8 font-montserrat">
            Terms & Conditions
          </h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> December 2024
          </p>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <p>
              Welcome to <strong>SquarePack</strong> ("we", "our", "us"). These Terms & Conditions govern your use of our website{" "}
              <a href="https://squarepack.net" className="text-primary hover:underline">https://squarepack.net</a> and our products and services related to <strong>labels and packaging solutions</strong>. By accessing or using our website, you agree to be bound by these Terms.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">1. Business Information</h2>
              <p>SquarePack provides customized labels, packaging materials, and related services for businesses and individuals.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">2. Use of Website</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You agree to use this website only for lawful purposes.</li>
                <li>You must not misuse the website, attempt unauthorized access, or disrupt its functionality.</li>
                <li>All information provided by you must be accurate and up to date.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">3. Products & Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product images, specifications, and descriptions are for reference only.</li>
                <li>Final output may slightly vary due to printing, material, or customization processes.</li>
                <li>Orders for customized labels or packaging cannot be canceled once production has started.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">4. Pricing & Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices are subject to change without prior notice.</li>
                <li>All payments must be made as per the agreed quotation or invoice.</li>
                <li>Taxes, shipping, and additional charges (if any) will be clearly communicated.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content on this website, including logos, designs, text, images, and graphics, is the property of SquarePack.</li>
                <li>You may not copy, reproduce, or distribute our content without written permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">6. Limitation of Liability</h2>
              <p>SquarePack shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any indirect, incidental, or consequential damages.</li>
                <li>Delays caused by third-party services, logistics, or force majeure events.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">8. Termination</h2>
              <p>We reserve the right to restrict or terminate access to our website if these Terms are violated.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">9. Governing Law</h2>
              <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of the <strong>United Arab Emirates (UAE)</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of the UAE.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">10. Shipping & Delivery Policy</h2>
              <p>This Shipping & Delivery Policy applies to all orders placed with <strong>SquarePack</strong> through{" "}
                <a href="https://squarepack.net" className="text-primary hover:underline">https://squarepack.net</a> or via direct quotation.
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.1 Delivery Locations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We deliver across the <strong>United Arab Emirates (UAE)</strong>.</li>
                <li>International delivery may be available on request and subject to additional charges, customs duties, and regulations.</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.2 Production & Dispatch Time</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>As most of our products are <strong>customized labels and packaging</strong>, production timelines vary based on order specifications, quantity, and material.</li>
                <li>Estimated production and dispatch timelines will be communicated at the time of order confirmation.</li>
                <li>Delays may occur due to design approvals, material availability, or unforeseen circumstances.</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.3 Shipping Method</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Orders are shipped via trusted third-party logistics or courier partners.</li>
                <li>Shipping method (standard or express) will be agreed upon during order confirmation.</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.4 Delivery Timelines</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delivery timelines provided are estimates only and not guaranteed.</li>
                <li>SquarePack shall not be held liable for delays caused by courier partners, weather conditions, customs clearance, or force majeure events.</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.5 Shipping Charges</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping charges, if applicable, will be clearly mentioned in the quotation or invoice.</li>
                <li>Any additional charges for express delivery or special handling will be communicated in advance.</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.6 Risk & Ownership</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Risk of loss or damage passes to the customer upon delivery.</li>
                <li>Customers are advised to inspect shipments upon receipt and report any visible damage within <strong>24 hours</strong>.</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.7 Incorrect Address</h3>
              <p>SquarePack shall not be responsible for delays or non-delivery due to incorrect or incomplete address details provided by the customer.</p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">10.8 Contact for Shipping Queries</h3>
              <p>For shipping or delivery-related questions, please contact us at{" "}
                <a href="mailto:admin@squarepack.net" className="text-primary hover:underline">admin@squarepack.net</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">11. Contact Us</h2>
              <p>For any questions regarding these Terms, please contact us at:</p>
              <p><strong>Email:</strong>{" "}
                <a href="mailto:admin@squarepack.net" className="text-primary hover:underline">admin@squarepack.net</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;

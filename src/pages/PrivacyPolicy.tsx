import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8 font-montserrat">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-4">
            This Privacy Policy is drafted in accordance with applicable <strong>UAE data protection laws</strong>, including the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL), where applicable.
          </p>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> December 2024
          </p>
          
          <p className="text-foreground/80 mb-8">
            SquarePack respects your privacy and is committed to protecting your personal information.
          </p>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect</h2>
              <p>We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Business details (company name, address)</li>
                <li>Order and inquiry details</li>
                <li>Technical data such as IP address, browser type, and device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
              <p>Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process orders and inquiries</li>
                <li>Provide customer support</li>
                <li>Improve our products and website</li>
                <li>Send updates, quotations, or promotional communications (you may opt out anytime)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">3. Data Sharing</h2>
              <p>We do not sell or rent your personal data. Information may be shared only with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trusted service providers within or outside the UAE (such as printing partners, logistics providers, and payment processors)</li>
                <li>Government authorities or regulators where required under UAE law</li>
              </ul>
              <p className="mt-4">Where data is transferred outside the UAE, we ensure appropriate safeguards are in place.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">4. Data Security</h2>
              <p>We implement reasonable administrative, technical, and physical security measures in line with UAE regulations to protect personal data against unauthorized access, loss, misuse, or disclosure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Cookies</h2>
              <p>Our website may use cookies to enhance user experience and analyze website traffic. You can disable cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">6. Your Rights</h2>
              <p>Under applicable UAE data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data, subject to legal and contractual obligations</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at{" "}
                <a href="mailto:admin@squarepack.net" className="text-primary hover:underline">admin@squarepack.net</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">7. Third-Party Services</h2>
              <p>Our website may use third-party tools such as analytics or payment gateways. Their privacy policies apply separately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, contact:</p>
              <div className="mt-4">
                <p><strong>SquarePack</strong></p>
                <p><strong>Website:</strong>{" "}
                  <a href="https://squarepack.net" className="text-primary hover:underline">https://squarepack.net</a>
                </p>
                <p><strong>Email:</strong>{" "}
                  <a href="mailto:admin@squarepack.net" className="text-primary hover:underline">admin@squarepack.net</a>
                </p>
              </div>
            </section>

            <p className="text-sm text-muted-foreground italic mt-12">
              This document is a general template and does not constitute legal advice.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

export const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="quote" className="py-24 bg-gradient-to-br from-navy via-charcoal to-navy text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
              Get Your Custom Quote
            </h2>
            <p className="text-lg text-white/80">
              Tell us about your packaging needs and we'll create a tailored solution
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
                />
              </div>
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gold" />
              <Textarea
                placeholder="Tell us about your packaging requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gold hover:bg-gold/90 text-navy font-bold text-lg py-6 transition-all duration-300 hover:scale-105 hover:shadow-gold"
            >
              Submit Quote Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Star, Send, Loader2, MessageSquare } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
import { supabase } from "@/integrations/supabase/client";

const PRODUCT_OPTIONS = [
  "Plain Labels",
  "Product Labels",
  "Barcode Ribbons",
  "Printed Tape",
  "Brown Tapes",
  "BOPP Tapes",
  "Bubble Wraps",
  "Stretch Film",
  "Printers",
  "Promotional Labels",
  "RFID Labels",
  "Void Labels",
  "Tamper-Evident Labels",
  "Rack Labels",
  "Asset Tags",
  "Shrink Sleeve Labels",
  "Hot Stamping Foil",
  "Other",
];

const Feedback = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    rating: 0,
    review: "",
    product_service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast({ title: "Please select a rating", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("feedback").insert({
        name: formData.name.trim(),
        company: formData.company.trim() || null,
        rating: formData.rating,
        review: formData.review.trim(),
        product_service: formData.product_service || null,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({ title: "Thank you!", description: "Your feedback has been submitted successfully." });
    } catch (err) {
      console.error("Error submitting feedback:", err);
      toast({ title: "Error", description: "Failed to submit feedback. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
        <WhatsAppButton />
        <BrochureButton />
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <MessageSquare className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-black text-navy font-poppins mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-2">Your feedback has been submitted successfully.</p>
          <p className="text-gray-500">Our team will review it and may feature it on our testimonials page.</p>
          <div className="flex justify-center gap-1 mt-6 mb-8">
            {[...Array(formData.rating)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-secondary fill-secondary" />
            ))}
          </div>
          <Button
            onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", rating: 0, review: "", product_service: "" }); }}
            className="bg-gradient-to-r from-secondary to-orange-400 text-navy font-bold px-8 py-3"
          >
            Submit Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px]">
      <WhatsAppButton />
      <BrochureButton />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-navy via-blue-950 to-indigo-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        </div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-white/90 text-sm font-medium">Share Your Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-poppins">
            Your <span className="bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent">Feedback</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Help us improve and let others know about your experience with SquarePack
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl p-10">
              <h2 className="text-3xl font-black text-navy font-poppins mb-2">Leave a Review</h2>
              <p className="text-gray-500 mb-8">Your honest feedback helps us serve you better.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Star Rating */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-3">Rating <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="transition-transform duration-150 hover:scale-110 focus:outline-none"
                      >
                        <Star
                          className={`w-10 h-10 transition-colors duration-150 ${
                            star <= (hoveredStar || formData.rating)
                              ? "text-secondary fill-secondary"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {formData.rating > 0 && (
                    <p className="text-sm text-gray-500 mt-2">
                      {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][formData.rating]}
                    </p>
                  )}
                </div>

                {/* Name */}
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className="h-14 text-base border-2 border-gray-200 focus:border-secondary rounded-xl"
                />

                {/* Company */}
                <Input
                  placeholder="Company Name (optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  maxLength={150}
                  className="h-14 text-base border-2 border-gray-200 focus:border-secondary rounded-xl"
                />

                {/* Product/Service */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Product / Service Used</label>
                  <select
                    value={formData.product_service}
                    onChange={(e) => setFormData({ ...formData, product_service: e.target.value })}
                    className="w-full h-14 text-base border-2 border-gray-200 focus:border-secondary rounded-xl px-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                  >
                    <option value="">Select a product or service...</option>
                    {PRODUCT_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Review */}
                <Textarea
                  placeholder="Tell us about your experience... *"
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  required
                  rows={5}
                  maxLength={1000}
                  className="text-base border-2 border-gray-200 focus:border-secondary resize-none rounded-xl"
                />
                <p className="text-xs text-gray-400 -mt-4">{formData.review.length}/1000 characters</p>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-secondary to-orange-400 hover:shadow-xl text-navy font-bold text-lg py-7 transition-all duration-500 hover:scale-[1.02] rounded-xl"
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Feedback <Send className="ml-2 w-5 h-5" /></>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;

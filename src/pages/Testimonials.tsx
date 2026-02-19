import { useState, useEffect } from "react";
import { Star, Quote, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";

interface Testimonial {
  id: string;
  name: string;
  company: string | null;
  rating: number;
  review: string;
  product_service: string | null;
  created_at: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (!error) setTestimonials(data || []);
    setIsLoading(false);
  };

  const avgRating = testimonials.length
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : "0.0";

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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-poppins">
            What Our <span className="bg-gradient-to-r from-secondary via-yellow-300 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Real experiences from businesses we've partnered with across UAE
          </p>

          {testimonials.length > 0 && (
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <span className="text-white font-bold text-lg">{avgRating}</span>
                <span className="text-white/70">Average Rating</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <span className="text-white font-bold text-lg">{testimonials.length}</span>
                <span className="text-white/70 ml-2">Reviews</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500">Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">No testimonials yet</h3>
              <p className="text-gray-500 mb-8">Be the first to share your experience with SquarePack!</p>
              <Link to="/feedback">
                <Button className="bg-gradient-to-r from-secondary to-orange-400 text-navy font-bold px-8">
                  Leave a Review
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
                {testimonials.map((t, index) => (
                  <div
                    key={t.id}
                    className="group bg-white rounded-3xl border-2 border-gray-200 hover:border-secondary hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8 relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${star <= t.rating ? "text-secondary fill-secondary" : "text-gray-200"}`}
                        />
                      ))}
                    </div>

                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-secondary/30 mb-3" />

                    {/* Review */}
                    <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.review}"</p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-orange-400 flex items-center justify-center text-navy font-black text-lg shadow-md">
                        {t.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-navy">{t.name}</p>
                        {t.company && <p className="text-sm text-gray-500">{t.company}</p>}
                        {t.product_service && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                            {t.product_service}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-gray-500 mb-4">Had a great experience with us?</p>
                <Link to="/feedback">
                  <Button size="lg" className="bg-gradient-to-r from-secondary to-orange-400 text-navy font-bold px-10 py-6 text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Share Your Experience
                    <Star className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

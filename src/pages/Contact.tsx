import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import contactBg from "@/assets/backgrounds/contact-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "SquarePack FZC\nDubai, United Arab Emirates",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+971 XX XXX XXXX",
      link: "tel:+971",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@squarepack.ae",
      link: "mailto:info@squarepack.ae",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Sunday - Thursday: 9:00 AM - 6:00 PM\nFriday - Saturday: Closed",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Header */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[zoom_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-red-900/90 to-pink-900/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up">
            Get In <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Let's discuss how we can help elevate your packaging and labeling solutions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-navy to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-8 font-poppins animate-fade-in-up">
                Contact Information
              </h2>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl hover:border-gold/50 transition-all duration-500 hover:scale-105 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2 text-lg">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-white/80 hover:text-gold transition-colors whitespace-pre-line">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-white/80 whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
                <h2 className="text-4xl font-bold text-white mb-8 font-poppins">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold h-12"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold h-12"
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold h-12"
                    />
                  </div>

                  <div>
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold h-12"
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your requirements... *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-gold to-secondary hover:from-secondary hover:to-gold text-navy font-bold text-lg py-6 transition-all duration-500 hover:scale-105"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

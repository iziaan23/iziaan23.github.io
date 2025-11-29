import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrochureButton } from "@/components/BrochureButton";
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
      content: "Meydan freezone,\nMeydan road\nDubai, UAE",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+971 50 457 8900\n+971 50 992 9801",
      link: "tel:+971504578900",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "mohammed@squarepack.net\nsales@squarepack.net",
      link: "mailto:mohammed@squarepack.net",
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
    <div className="min-h-screen pt-[110px] md:pt-[122px] lg:pt-[134px]">
      <WhatsAppButton />
      <BrochureButton />
      
      {/* Hero Header */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-red-900/90 to-pink-900/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Available 24/7 for Support</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Get In <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Let's discuss how we can help elevate your packaging and labeling solutions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-poppins">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help. Reach out to us through any of these channels.
                </p>
              </div>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-1 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-2 text-xl">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-gray-600 hover:text-secondary transition-colors whitespace-pre-line text-base leading-relaxed">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line text-base leading-relaxed">
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
              <div className="p-10 bg-white rounded-3xl border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-3 font-poppins">
                  Send Message
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 text-base border-2 border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14 text-base border-2 border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 text-base border-2 border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-14 text-base border-2 border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <Textarea
                      placeholder="Tell us about your requirements... *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="text-base border-2 border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none rounded-xl transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-white font-bold text-lg py-7 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl rounded-xl"
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

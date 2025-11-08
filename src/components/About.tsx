import { Building2, Award, Users, TrendingUp } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Building2, label: "Years of Excellence", value: "15+" },
    { icon: Award, label: "Quality Certifications", value: "ISO 9001" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: TrendingUp, label: "Growth Rate", value: "40%" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-montserrat">
            Dubai's Premier Packaging Partner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At SquarePack, we combine cutting-edge technology with artisanal precision to deliver 
            packaging and labeling solutions that elevate your brand. From concept to delivery, 
            we're committed to excellence in every detail.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-navy mb-2 font-montserrat">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

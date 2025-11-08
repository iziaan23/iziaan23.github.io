import { Building2, Award, Users, TrendingUp, Target, Eye, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Years of Excellence", value: "15+" },
    { icon: Award, label: "Quality Certifications", value: "ISO 9001" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: TrendingUp, label: "Growth Rate", value: "40%" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative packaging and labeling solutions that empower brands to stand out in competitive markets while maintaining the highest standards of quality and sustainability."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the Middle East's most trusted and innovative packaging partner, recognized for excellence, reliability, and commitment to environmental responsibility."
    },
    {
      icon: Shield,
      title: "Our Values",
      description: "Quality without compromise, customer-first approach, continuous innovation, environmental consciousness, and building lasting partnerships based on trust and integrity."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            About SquarePack
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Building the future of packaging and labeling in Dubai and beyond
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-montserrat">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                SquarePack FZC is Dubai's leading provider of premium packaging and labeling solutions, serving diverse industries including FMCG, healthcare, electronics, and industrial sectors. Established with a vision to transform the packaging industry, we have grown to become a trusted partner for over 500 companies across the UAE and the Middle East.
              </p>
              <p>
                Our state-of-the-art facility in Dubai combines advanced technology with skilled craftsmanship to produce labels, ribbons, packaging films, and specialized packaging products that meet international quality standards. We take pride in our ISO 9001 certification, which reflects our commitment to quality management and continuous improvement.
              </p>
              <p>
                What sets us apart is our customer-centric approach. We don't just supply products; we partner with our clients to understand their unique needs and deliver customized solutions that enhance their brand presence and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
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

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-muted/20 to-white border-2 border-transparent hover:border-gold transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold to-secondary mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4 font-montserrat">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Shield, Lock, CheckCircle, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Legally Approved & Regulated",
    description:
      "All casinos featured on our site hold a valid UK Gambling Commission license, meaning they operate under strict rules designed to protect players and ensure honest gameplay.",
  },
  {
    icon: Lock,
    title: "Enhanced Player Safety",
    description:
      "Your deposits are kept secure in protected accounts, and licensed casinos must follow financial safety laws while offering essential tools that help players stay in control.",
  },
  {
    icon: CheckCircle,
    title: "Independent Fairness Testing",
    description:
      "All games are regularly checked by independent testing agencies, such as eCOGRA, to verify that RNG systems produce truly random, unbiased results.",
  },
  {
    icon: Heart,
    title: "Focus on Responsible Gambling",
    description:
      "UK-licensed casinos provide responsible gaming features including deposit limits, cooling-off periods, and self-exclusion options. Support is always available through GamCare, GamStop, and BeGambleAware.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Why Choose Licensed UK Casinos?
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-gold group"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

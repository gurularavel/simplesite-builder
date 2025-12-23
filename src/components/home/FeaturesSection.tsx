import { Headphones, Gamepad2, Gift, CreditCard } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Support Services",
    description:
      "Reliable 24/7 assistance via chat, email, or phone ensures peace of mind.",
  },
  {
    icon: Gamepad2,
    title: "Variety of Games",
    description:
      "Look for an extensive range of slots, table games, and live dealer options from reputable providers.",
  },
  {
    icon: Gift,
    title: "Promotions & Bonuses",
    description:
      "Check out welcome offers, but make sure to review wagering rules and terms carefully.",
  },
  {
    icon: CreditCard,
    title: "Banking Options",
    description:
      "Choose casinos that support trusted UK payment methods including debit cards, PayPal, and e-wallets.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-gold group"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-gold transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

export default FeaturesSection;

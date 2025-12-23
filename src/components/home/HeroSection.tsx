import { Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-casino.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Casino background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight animate-fade-in">
                Discover{" "}
                <span className="text-gradient-gold">Premium</span>{" "}
                Casinos
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Expert reviews, exclusive bonuses, and trusted recommendations for 
                the UK's top-rated online casinos
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-5 py-3">
                <Trophy className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">£2.5M+</p>
                  <p className="text-xs text-muted-foreground">Total Winnings</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-5 py-3">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-xs text-muted-foreground">Happy Players</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button variant="gold" size="xl" asChild>
                <a href="#casinos">View Top Casinos</a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="#why-us">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Decorative */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

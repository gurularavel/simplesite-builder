import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CasinoCardProps {
  rank: number;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  minDeposit: string;
  paymentMethods: string[];
  link: string;
}

const CasinoCard = ({
  rank,
  name,
  logo,
  rating,
  bonus,
  minDeposit,
  paymentMethods,
  link,
}: CasinoCardProps) => {
  return (
    <div className="bg-gradient-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-gold group">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center p-2">
              <img src={logo} alt={name} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{name}</h3>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(rating) ? "text-primary fill-primary" : "text-muted"}`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">{rating}/5</span>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold">
            #{rank}
          </div>
        </div>
      </div>

      {/* Bonus Section */}
      <div className="p-6 bg-secondary/30">
        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
          Welcome Bonus
        </p>
        <p className="text-xl font-heading font-bold text-foreground">{bonus}</p>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Min Deposit
          </p>
          <p className="text-lg font-semibold text-foreground">{minDeposit}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
            >
              <Check className="w-3 h-3 text-primary" />
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <Button variant="gold" className="w-full" size="lg" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Play Now
          </a>
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-3">
          18+ | T&Cs Apply | Play Responsibly
        </p>
      </div>
    </div>
  );
};

export default CasinoCard;

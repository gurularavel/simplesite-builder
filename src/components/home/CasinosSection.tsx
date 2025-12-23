import { Trophy } from "lucide-react";
import CasinoCard from "./CasinoCard";

const casinos = [
  {
    rank: 1,
    name: "888Casino",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/888_Holdings_logo.svg/200px-888_Holdings_logo.svg.png",
    rating: 4.9,
    bonus: "100% up to £75 + 50 free spins",
    minDeposit: "£10",
    paymentMethods: ["Visa", "MasterCard", "PayPal"],
    link: "https://casino.888.com/",
  },
  {
    rank: 2,
    name: "Midnite Casino",
    logo: "https://images.seeklogo.com/logo-png/52/2/midnite-logo-png_seeklogo-527938.png",
    rating: 4.7,
    bonus: "100% up to £200",
    minDeposit: "£10",
    paymentMethods: ["Visa", "Skrill", "PayPal"],
    link: "https://www.midnite.com/",
  },
  {
    rank: 3,
    name: "Lottogo Casino",
    logo: "https://www.lottogo.com/assets/images/logo.svg",
    rating: 4.6,
    bonus: "100% up to £200",
    minDeposit: "£10",
    paymentMethods: ["Visa", "Skrill", "PayPal"],
    link: "https://www.lottogo.com/en",
  },
];

const CasinosSection = () => {
  return (
    <section id="casinos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Best UK Casinos
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Top-rated and UK-licensed casino platforms chosen for safety and quality
          </p>
        </div>

        {/* Casino Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casinos.map((casino) => (
            <CasinoCard key={casino.rank} {...casino} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinosSection;

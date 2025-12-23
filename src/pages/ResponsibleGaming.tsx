import Layout from "@/components/layout/Layout";
import { Shield, Heart, Users, AlertTriangle, Phone, Clock, Ban, Info } from "lucide-react";

const ResponsibleGaming = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Responsible Gaming
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At CasinoEliteUK, we believe gambling should be an enjoyable form of entertainment. 
            We are committed to promoting responsible gaming practices.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Our Commitment */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Our Commitment</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We only recommend casinos that hold valid UK Gambling Commission licenses. These casinos 
              are required to provide responsible gambling tools and support services to help players 
              maintain control over their gambling activities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Gambling should never be seen as a way to make money or solve financial problems. 
              If you find yourself spending more time or money than you can afford, it may be time 
              to seek help.
            </p>
          </div>

          {/* Signs of Problem Gambling */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Signs of Problem Gambling</h2>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <ul className="space-y-4">
                {[
                  "Spending more money or time gambling than you can afford",
                  "Difficulty controlling or stopping gambling activities",
                  "Neglecting work, family, or other responsibilities due to gambling",
                  "Borrowing money or selling possessions to fund gambling",
                  "Lying about your gambling habits to friends and family",
                  "Feeling anxious, irritable, or restless when not gambling",
                  "Chasing losses in an attempt to win back money",
                  "Gambling to escape problems or relieve feelings of stress",
                ].map((sign, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Self-Exclusion Tools */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Ban className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Self-Exclusion Tools</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All UK-licensed casinos must provide self-exclusion tools. These include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Deposit Limits", desc: "Set daily, weekly, or monthly deposit limits" },
                { title: "Loss Limits", desc: "Limit how much you can lose over a period" },
                { title: "Session Time Limits", desc: "Set reminders or automatic logouts" },
                { title: "Cooling-Off Periods", desc: "Take a break from gambling for a set time" },
                { title: "Self-Exclusion", desc: "Block yourself from gambling sites entirely" },
                { title: "Reality Checks", desc: "Receive notifications about time spent playing" },
              ].map((tool, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-2">{tool.title}</h4>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Services */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Support Services</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you or someone you know has a gambling problem, help is available:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "GamCare",
                  desc: "Free information, support, and counselling",
                  url: "https://www.gamcare.org.uk/",
                  phone: "0808 8020 133",
                },
                {
                  name: "BeGambleAware",
                  desc: "Free, confidential advice and support",
                  url: "https://www.begambleaware.org/",
                  phone: "0808 8020 133",
                },
                {
                  name: "GamStop",
                  desc: "Free self-exclusion scheme for UK online gambling",
                  url: "https://www.gamstop.co.uk/",
                  phone: null,
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-gold block"
                >
                  <h4 className="font-heading font-semibold text-foreground mb-2">{service.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                  {service.phone && (
                    <p className="text-sm text-primary font-medium">{service.phone}</p>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Age Verification */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Age Verification</h2>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold mb-2">
                    You must be 18 years or older to gamble in the UK.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    All UK-licensed casinos are required to verify your age before allowing you to 
                    deposit or play for real money. This is to protect minors from gambling and 
                    ensure compliance with UK gambling laws.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResponsibleGaming;

import Layout from "@/components/layout/Layout";
import { Scale, FileText, AlertCircle, Check } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scale className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-muted-foreground mb-8">
            <strong className="text-foreground">Last Updated:</strong> December 2024
          </p>

          {/* Acceptance */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Acceptance of Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using CasinoEliteUK ("the Website"), you accept and agree to be bound 
              by these Terms and Conditions. If you do not agree to these terms, please do not use 
              our Website.
            </p>
          </div>

          {/* About the Website */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">About Our Website</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                CasinoEliteUK is an informational website that provides reviews, comparisons, and 
                recommendations for UK-licensed online casinos. We are an affiliate website and may 
                receive compensation when you click on links to third-party casino sites.
              </p>
              <p className="leading-relaxed">
                We do not operate any gambling services ourselves. All gambling activities take place 
                on third-party websites that are independently owned and operated.
              </p>
            </div>
          </div>

          {/* Age Restriction */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Age Restriction</h2>
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold mb-2">
                    You must be at least 18 years old to use this Website.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By using this Website, you confirm that you are at least 18 years of age. 
                    Gambling is illegal for minors, and we do not encourage or condone underage gambling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Disclaimer</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                The information provided on this Website is for general informational purposes only. 
                While we strive to keep information accurate and up-to-date, we make no representations 
                or warranties of any kind about:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The accuracy, reliability, or completeness of any information</li>
                <li>The performance or outcomes of any gambling activities</li>
                <li>The availability or terms of bonuses and promotions</li>
                <li>The security or reliability of third-party casino websites</li>
              </ul>
              <p className="leading-relaxed">
                Gambling involves risk. You should never gamble more than you can afford to lose. 
                We encourage responsible gambling practices.
              </p>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Affiliate Disclosure</h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                CasinoEliteUK participates in affiliate marketing programs. This means we may earn 
                commission when you click on links to casino websites and sign up or make deposits. 
                This does not affect the price you pay or the bonuses you receive. Our reviews and 
                recommendations are based on our honest assessment of each casino's quality and safety.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this Website, including text, graphics, logos, images, and software, 
              is the property of CasinoEliteUK or its content suppliers and is protected by UK and 
              international copyright laws. You may not reproduce, distribute, or create derivative 
              works from this content without our express written permission.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                To the fullest extent permitted by law, CasinoEliteUK shall not be liable for any:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Direct, indirect, incidental, or consequential damages</li>
                <li>Losses arising from gambling activities</li>
                <li>Losses arising from the use of third-party casino websites</li>
                <li>Technical errors, interruptions, or data loss</li>
              </ul>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Website contains links to third-party websites. These links are provided for your 
              convenience and do not signify our endorsement of such websites. We have no control over 
              and assume no responsibility for the content, privacy policies, or practices of any 
              third-party websites.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the 
              laws of England and Wales. Any disputes arising from these terms shall be subject to 
              the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Changes to These Terms</h2>
            <div className="bg-secondary/30 border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update or modify these Terms and Conditions at any time 
                without prior notice. Your continued use of the Website after any changes constitutes 
                your acceptance of the new terms. We encourage you to review this page periodically 
                for any updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;

import Layout from "@/components/layout/Layout";
import { FileText, Database, Cookie, Shield, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-muted-foreground mb-8">
            <strong className="text-foreground">Last Updated:</strong> December 2024
          </p>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                When you visit CasinoEliteUK, we may collect certain information automatically, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Device and browser information</li>
                <li>IP address and approximate location</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Interaction data with our content</li>
              </ul>
              <p className="leading-relaxed">
                We do not collect personal identification information unless you voluntarily provide it 
                to us through contact forms or email correspondence.
              </p>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Improve our website content and user experience</li>
                <li>Analyse website traffic and usage patterns</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Ensure the security and integrity of our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Cookies</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our website performance</li>
                <li>Provide relevant content and advertisements</li>
              </ul>
              <p className="leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may 
                affect some features of our website.
              </p>
            </div>
          </div>

          {/* Third Party Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Third-Party Links</h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to third-party casino websites and gambling operators. 
                We are not responsible for the privacy practices or content of these external sites. 
                We encourage you to review the privacy policies of any third-party sites you visit 
                through links on our website.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organisational measures to protect your 
              information against unauthorised access, alteration, disclosure, or destruction. 
              However, no method of transmission over the internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Your Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Under UK data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Contact Us</h2>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at{" "}
                <a href="mailto:privacy@casinoeliteuk.com" className="text-primary hover:underline">
                  privacy@casinoeliteuk.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

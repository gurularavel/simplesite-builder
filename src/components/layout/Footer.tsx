import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Casino Elite UK" className="w-10 h-10 object-contain" />
              <span className="text-xl font-heading font-bold text-gradient-gold">
                CasinoEliteUK
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Your trusted guide to the UK's finest online casinos. We provide expert reviews, 
              exclusive bonuses, and only recommend UKGC licensed platforms for safe gambling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/responsible-gaming" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Support Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.begambleaware.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  BeGambleAware
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gamcare.org.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GamCare
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gamstop.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GamStop
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CasinoEliteUK. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                18+ Only
              </span>
              <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                UKGC Licensed
              </span>
              <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                Play Responsibly
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

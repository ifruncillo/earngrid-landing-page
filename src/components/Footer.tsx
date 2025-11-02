import { siteConfig } from "../config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-sm">E</span>
              </div>
              <span className="text-cream font-medium text-lg font-heading">EarnGrid</span>
            </div>
            <p className="text-muted text-sm font-body">
              Turn your computer into a tiny gold mine with IdleNet.
            </p>
            <p className="text-muted text-xs font-body">
              © 2025 {siteConfig.company.legalName}. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-cream font-medium font-heading">Product</h4>
            <div className="space-y-2">
              <a href="#how-it-works" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                How it works
              </a>
              <a href="#calculator" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                Earnings calculator
              </a>
              <a href="#faq" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                FAQ
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-cream font-medium font-heading">Support</h4>
            <div className="space-y-2">
              <a href={`mailto:${siteConfig.email}`} className="block text-muted hover:text-primary transition-colors text-sm font-body">
                Contact us
              </a>
              <a href="/help" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                Help center
              </a>
              <a href="/status" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                System status
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-cream font-medium font-heading">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                Privacy policy
              </a>
              <a href="/terms" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                Terms of service
              </a>
              <a href="/security" className="block text-muted hover:text-primary transition-colors text-sm font-body">
                Security
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-muted text-sm font-body">
            Made with 💚 by the IdleNet team
          </p>
        </div>
      </div>
    </footer>
  );
}
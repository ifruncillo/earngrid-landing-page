import { siteConfig } from "../config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#1B2240] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#39E19D] rounded-lg flex items-center justify-center">
                <span className="text-[#1B2240] font-bold text-sm">E</span>
              </div>
              <span className="text-[#FFF9F0] font-medium text-lg font-['Poppins']">EarnGrid</span>
            </div>
            <p className="text-[#6C7280] text-sm font-['Roboto']">
              Turn your computer into a tiny gold mine with IdleNet.
            </p>
            <p className="text-[#6C7280] text-xs font-['Roboto']">
              © 2025 {siteConfig.company.legalName}. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-[#FFF9F0] font-medium font-['Poppins']">Product</h4>
            <div className="space-y-2">
              <a href="#how-it-works" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                How it works
              </a>
              <a href="#calculator" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                Earnings calculator
              </a>
              <a href="#faq" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                FAQ
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-[#FFF9F0] font-medium font-['Poppins']">Support</h4>
            <div className="space-y-2">
              <a href={`mailto:${siteConfig.email}`} className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                Contact us
              </a>
              <a href="/help" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                Help center
              </a>
              <a href="/status" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                System status
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-[#FFF9F0] font-medium font-['Poppins']">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                Privacy policy
              </a>
              <a href="/terms" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                Terms of service
              </a>
              <a href="/security" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors text-sm font-['Roboto']">
                Security
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-[#6C7280] text-sm font-['Roboto']">
            Made with 💚 by the IdleNet team
          </p>
        </div>
      </div>
    </footer>
  );
}
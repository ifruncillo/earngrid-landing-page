import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder - user can replace with their logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#39E19D] rounded-lg flex items-center justify-center">
              <span className="text-[#1B2240] font-bold text-sm">E</span>
            </div>
            <span className="text-[#FFF9F0] font-medium text-lg font-['Poppins']">EarnGrid</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-[#FFF9F0] hover:text-[#39E19D] transition-colors font-['Roboto']">
              How it works
            </a>
            <a href="#faq" className="text-[#FFF9F0] hover:text-[#39E19D] transition-colors font-['Roboto']">
              FAQ
            </a>
            <a href="#blog" className="text-[#FFF9F0] hover:text-[#39E19D] transition-colors font-['Roboto']">
              Blog
            </a>
            <Button 
              className="bg-[#39E19D] text-[#FFF9F0] hover:bg-gradient-to-r hover:from-[#39E19D] hover:to-[#64F2C6] rounded-xl px-6 transition-all duration-200 ease-in-out"
              style={{ borderRadius: '12px' }}
              onClick={() => window.open('https://idlenet-pilot-qi7t.vercel.app', '_blank')}
            >
              Join Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-[#FFF9F0]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
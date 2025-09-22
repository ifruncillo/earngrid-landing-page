export function Footer() {
  return (
    <footer className="w-full py-12 bg-[#1B2240] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#39E19D] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#1B2240] rounded-full"></div>
              </div>
              <span className="text-xl font-semibold text-[#FFF9F0] font-['Poppins']">
                EarnGrid
              </span>
            </div>
            <p className="text-[#6C7280] font-['Roboto'] max-w-xs">
              Turn your idle computer into a passive income stream. Simple, safe, and automatic.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-[#FFF9F0] font-semibold font-['Poppins']">Product</h3>
            <div className="space-y-2">
              <a href="#how-it-works" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors font-['Roboto']">
                How it works
              </a>
              <a href="#faq" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors font-['Roboto']">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-[#FFF9F0] font-semibold font-['Poppins']">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors font-['Roboto']">
                About
              </a>
              <a href="#" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors font-['Roboto']">
                Privacy
              </a>
              <a href="#" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors font-['Roboto']">
                Terms
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-[#FFF9F0] font-semibold font-['Poppins']">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors font-['Roboto']">
                Help Center
              </a>
              <a href="#" className="block text-[#6C7280] hover:text-[#39E19D] transition-colors font-['Roboto']">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-[#6C7280] font-['Roboto']">
            © 2024 EarnGrid by IdleNet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
import { Button } from "./ui/button";

export function Header() {
  const handleJoinWaitlist = () => {
    window.open('https://idlenet-pilot-qi7t.vercel.app', '_blank');
  };

  const scrollToFAQ = () => {
    const element = document.getElementById('faq');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full py-4 px-6 bg-[#1B2240] border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* EarnGrid Logo - Grid network pattern */}
          <div className="w-8 h-8 relative">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              {/* Grid connections (lines) */}
              <g stroke="#39E19D" strokeWidth="1.5" opacity="0.6">
                {/* Horizontal lines */}
                <line x1="6" y1="8" x2="26" y2="8" />
                <line x1="6" y1="16" x2="26" y2="16" />
                <line x1="6" y1="24" x2="26" y2="24" />
                {/* Vertical lines */}
                <line x1="8" y1="6" x2="8" y2="26" />
                <line x1="16" y1="6" x2="16" y2="26" />
                <line x1="24" y1="6" x2="24" y2="26" />
              </g>
              {/* Grid nodes (dots) */}
              <g>
                {/* Inactive nodes */}
                <circle cx="8" cy="8" r="2" fill="#39E19D" opacity="0.4" />
                <circle cx="16" cy="8" r="2" fill="#39E19D" opacity="0.4" />
                <circle cx="8" cy="16" r="2" fill="#39E19D" opacity="0.4" />
                <circle cx="8" cy="24" r="2" fill="#39E19D" opacity="0.4" />
                <circle cx="16" cy="24" r="2" fill="#39E19D" opacity="0.4" />
                <circle cx="24" cy="24" r="2" fill="#39E19D" opacity="0.4" />
                
                {/* Active earning nodes (highlighted) */}
                <circle cx="24" cy="8" r="2.5" fill="#39E19D" />
                <circle cx="16" cy="16" r="2.5" fill="#39E19D" />
                <circle cx="24" cy="16" r="2.5" fill="#39E19D" />
                
                {/* Glow effect for active nodes */}
                <circle cx="24" cy="8" r="4" fill="#39E19D" opacity="0.2" />
                <circle cx="16" cy="16" r="4" fill="#39E19D" opacity="0.2" />
                <circle cx="24" cy="16" r="4" fill="#39E19D" opacity="0.2" />
              </g>
            </svg>
          </div>
          <span className="text-xl font-semibold text-[#FFF9F0] font-['Poppins']">
            EarnGrid
          </span>
          <span className="text-[#6C7280] font-['Roboto']">by IdleNet</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={scrollToHowItWorks}
            className="text-[#FFF9F0] hover:text-[#39E19D] transition-colors font-['Roboto'] cursor-pointer"
          >
            How it works
          </button>
          <button 
            onClick={scrollToFAQ}
            className="text-[#FFF9F0] hover:text-[#39E19D] transition-colors font-['Roboto'] cursor-pointer"
          >
            FAQ
          </button>
        </nav>
        
        <Button 
          onClick={handleJoinWaitlist}
          className="bg-[#39E19D] text-[#1B2240] hover:bg-[#64F2C6] px-6 py-2 rounded-xl"
        >
          Join Now
        </Button>
      </div>
    </header>
  );
}
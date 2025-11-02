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
    <header className="w-full py-4 px-6 bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* EarnGrid Logo - Grid network pattern */}
          <div className="w-8 h-8 relative">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              {/* Grid connections (lines) */}
              <g className="stroke-primary" strokeWidth="1.5" opacity="0.6">
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
                <circle cx="8" cy="8" r="2" className="fill-primary" opacity="0.4" />
                <circle cx="16" cy="8" r="2" className="fill-primary" opacity="0.4" />
                <circle cx="8" cy="16" r="2" className="fill-primary" opacity="0.4" />
                <circle cx="8" cy="24" r="2" className="fill-primary" opacity="0.4" />
                <circle cx="16" cy="24" r="2" className="fill-primary" opacity="0.4" />
                <circle cx="24" cy="24" r="2" className="fill-primary" opacity="0.4" />
                
                {/* Active earning nodes (highlighted) */}
                <circle cx="24" cy="8" r="2.5" className="fill-primary" />
                <circle cx="16" cy="16" r="2.5" className="fill-primary" />
                <circle cx="24" cy="16" r="2.5" className="fill-primary" />
                
                {/* Glow effect for active nodes */}
                <circle cx="24" cy="8" r="4" className="fill-primary" opacity="0.2" />
                <circle cx="16" cy="16" r="4" className="fill-primary" opacity="0.2" />
                <circle cx="24" cy="16" r="4" className="fill-primary" opacity="0.2" />
              </g>
            </svg>
          </div>
          <span className="text-xl font-semibold text-cream font-heading">
            EarnGrid
          </span>
          <span className="text-muted font-body">by IdleNet</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={scrollToHowItWorks}
            className="text-cream hover:text-primary transition-colors font-body cursor-pointer"
          >
            How it works
          </button>
          <button 
            onClick={scrollToFAQ}
            className="text-cream hover:text-primary transition-colors font-body cursor-pointer"
          >
            FAQ
          </button>
        </nav>
        
        <Button 
          onClick={handleJoinWaitlist}
          className="bg-primary text-navy hover:bg-primary-hover px-6 py-2 rounded-xl"
        >
          Join Now
        </Button>
      </div>
    </header>
  );
}
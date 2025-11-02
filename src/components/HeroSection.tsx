import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleJoinWaitlist = () => {
    window.open('https://idlenet-pilot-qi7t.vercel.app', '_blank');
  };

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-semibold text-cream leading-tight font-heading">
                Your computer earns while you sleep
              </h1>
              <p className="text-lg text-cream leading-relaxed max-w-xl font-body">
                Install EarnGrid with one click. Your computer automatically earns money during downtime—no configuration, no technical knowledge required.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleJoinWaitlist}
                className="bg-primary text-navy hover:bg-primary-hover px-8 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-in-out cursor-pointer active:scale-95"
              >
                Join Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToHowItWorks}
                className="border-2 border-cream text-cream hover:bg-cream hover:text-navy px-8 py-4 text-lg rounded-xl transition-all duration-200 ease-in-out"
              >
                How it works
              </Button>
            </div>

            {/* Supporting bullets */}
            <div className="space-y-4 pt-8">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-navy rounded-full"></div>
                </div>
                <span className="text-cream font-body">Automatically pauses when you use your computer</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-navy rounded-full"></div>
                </div>
                <span className="text-cream font-body">Safe system-level software, like antivirus protection</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-navy rounded-full"></div>
                </div>
                <span className="text-cream font-body">Your personal files stay completely private</span>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Halo glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 lg:w-[400px] lg:h-[400px] bg-accent rounded-full opacity-20 blur-3xl"></div>
            </div>
            
            {/* Concentric circle design */}
            <div className="relative z-10 flex items-center justify-center w-80 h-80 lg:w-96 lg:h-96">
              {/* Outermost ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary opacity-30"></div>
              
              {/* Second ring */}
              <div className="absolute inset-4 rounded-full border-3 border-primary opacity-50"></div>
              
              {/* Third ring */}
              <div className="absolute inset-8 rounded-full border-2 border-primary opacity-70"></div>
              
              {/* Inner solid circle with gradient */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center">
                {/* Large EarnGrid Logo - Grid network pattern */}
                <svg width="200" height="200" viewBox="0 0 240 240" fill="none">
                  {/* Grid connections (lines) */}
                  <g className="stroke-navy" strokeWidth="4" opacity="0.8">
                    {/* Horizontal lines */}
                    <line x1="40" y1="60" x2="200" y2="60" />
                    <line x1="40" y1="120" x2="200" y2="120" />
                    <line x1="40" y1="180" x2="200" y2="180" />
                    {/* Vertical lines */}
                    <line x1="60" y1="40" x2="60" y2="200" />
                    <line x1="120" y1="40" x2="120" y2="200" />
                    <line x1="180" y1="40" x2="180" y2="200" />
                  </g>
                  {/* Grid nodes (dots) */}
                  <g>
                    {/* Inactive nodes */}
                    <circle cx="60" cy="60" r="12" className="fill-navy" opacity="0.5" />
                    <circle cx="120" cy="60" r="12" className="fill-navy" opacity="0.5" />
                    <circle cx="60" cy="120" r="12" className="fill-navy" opacity="0.5" />
                    <circle cx="60" cy="180" r="12" className="fill-navy" opacity="0.5" />
                    <circle cx="120" cy="180" r="12" className="fill-navy" opacity="0.5" />
                    <circle cx="180" cy="180" r="12" className="fill-navy" opacity="0.5" />
                    
                    {/* Active earning nodes (highlighted) */}
                    <circle cx="180" cy="60" r="16" className="fill-navy" />
                    <circle cx="120" cy="120" r="16" className="fill-navy" />
                    <circle cx="180" cy="120" r="16" className="fill-navy" />
                    
                    {/* Inner glow for active nodes */}
                    <circle cx="180" cy="60" r="24" className="fill-navy" opacity="0.2" />
                    <circle cx="120" cy="120" r="24" className="fill-navy" opacity="0.2" />
                    <circle cx="180" cy="120" r="24" className="fill-navy" opacity="0.2" />
                    
                    {/* Pulse animation circles */}
                    <circle cx="180" cy="60" r="30" fill="none" stroke="#1B2240" strokeWidth="2" opacity="0.6">
                      <animate attributeName="r" values="16;40;16" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="120" cy="120" r="30" fill="none" stroke="#1B2240" strokeWidth="2" opacity="0.6">
                      <animate attributeName="r" values="16;40;16" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="180" cy="120" r="30" fill="none" stroke="#1B2240" strokeWidth="2" opacity="0.6">
                      <animate attributeName="r" values="16;40;16" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
              </div>
              
              {/* Subtle rotating rings for extra dynamism */}
              <div className="absolute inset-6 rounded-full border border-primary opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-10 rounded-full border border-accent opacity-15 animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
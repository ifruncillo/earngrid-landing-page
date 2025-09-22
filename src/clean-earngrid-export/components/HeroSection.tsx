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
              <h1 className="text-5xl lg:text-6xl font-semibold text-[#FFF9F0] leading-tight font-['Poppins']">
                Your computer earns while you sleep
              </h1>
              <p className="text-lg text-[#FFF9F0] leading-relaxed max-w-xl font-['Roboto']">
                Install IdleNet with one click. Your computer automatically earns money during downtime—no configuration, no technical knowledge required.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleJoinWaitlist}
                className="bg-[#39E19D] text-[#FFF9F0] hover:bg-[#64F2C6] hover:scale-105 hover:shadow-lg hover:shadow-[#39E19D]/30 px-8 py-4 text-lg rounded-xl transition-all duration-300 ease-in-out cursor-pointer active:scale-95"
                style={{ borderRadius: '12px' }}
              >
                Join Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToHowItWorks}
                className="border-2 border-[#FFF9F0] text-[#FFF9F0] hover:bg-[#FFF9F0] hover:text-[#1B2240] px-8 py-4 text-lg rounded-xl transition-all duration-200 ease-in-out bg-transparent"
                style={{ borderRadius: '12px' }}
              >
                How it works
              </Button>
            </div>

            {/* Supporting bullets */}
            <div className="space-y-4 pt-8">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#39E19D] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-[#1B2240] rounded-full"></div>
                </div>
                <span className="text-[#FFF9F0] font-['Roboto']">Automatically pauses when you use your computer</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#39E19D] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-[#1B2240] rounded-full"></div>
                </div>
                <span className="text-[#FFF9F0] font-['Roboto']">Safe system-level software, like antivirus protection</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#39E19D] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-[#1B2240] rounded-full"></div>
                </div>
                <span className="text-[#FFF9F0] font-['Roboto']">Your personal files stay completely private</span>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Halo glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 lg:w-[400px] lg:h-[400px] bg-[#64F2C6] rounded-full opacity-20 blur-3xl"></div>
            </div>
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-[#39E19D] rounded-full flex items-center justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1628779612720-10bbe8632144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhcHRvcCUyMGRlc2t0b3AlMjBzZXR1cHxlbnwxfHx8fDE3NTg1MDAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Computer Setup" 
                className="w-48 h-48 lg:w-60 lg:h-60 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
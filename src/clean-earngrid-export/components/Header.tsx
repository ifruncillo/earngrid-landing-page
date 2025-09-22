import { Button } from "./ui/button";

export function Header() {
  const handleJoinWaitlist = () => {
    window.open('https://idlenet-pilot-qi7t.vercel.app', '_blank');
  };

  return (
    <header className="w-full py-4 px-6 bg-[#1B2240] border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#39E19D] rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-[#1B2240] rounded-full"></div>
          </div>
          <span className="text-xl font-semibold text-[#FFF9F0] font-['Poppins']">
            EarnGrid
          </span>
          <span className="text-[#6C7280] font-['Roboto']">by IdleNet</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-[#FFF9F0] hover:text-[#39E19D] transition-colors font-['Roboto']">
            How it works
          </a>
          <a href="#faq" className="text-[#FFF9F0] hover:text-[#39E19D] transition-colors font-['Roboto']">
            FAQ
          </a>
        </nav>
        
        <Button 
          onClick={handleJoinWaitlist}
          className="bg-[#39E19D] text-[#FFF9F0] hover:bg-[#64F2C6] px-6 py-2 rounded-xl"
        >
          Join Now
        </Button>
      </div>
    </header>
  );
}
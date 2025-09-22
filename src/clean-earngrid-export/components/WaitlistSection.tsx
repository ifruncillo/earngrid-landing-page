import { Button } from "./ui/button";

export function WaitlistSection() {
  const handleJoinWaitlist = () => {
    window.open('https://idlenet-pilot-qi7t.vercel.app', '_blank');
  };

  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#39E19D]/10 to-[#64F2C6]/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#FFF9F0] font-['Poppins']">
            Ready to earn while you sleep?
          </h2>
          <p className="text-xl text-[#6C7280] max-w-2xl mx-auto font-['Roboto']">
            Join the beta program and start earning from your idle computer today. 
            Installation takes less than 2 minutes.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg"
              onClick={handleJoinWaitlist}
              className="bg-[#39E19D] text-[#1B2240] hover:bg-[#64F2C6] hover:scale-105 hover:shadow-lg hover:shadow-[#39E19D]/30 px-12 py-4 text-xl rounded-xl transition-all duration-300 ease-in-out"
            >
              Join Beta Program
            </Button>
            <p className="text-sm text-[#6C7280] font-['Roboto']">
              Free to join • Start earning immediately • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
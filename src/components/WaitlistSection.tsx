import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to IdleNet pilot instead of form submission
    window.open('https://idlenet-pilot-qi7t.vercel.app', '_blank');
  };

  return (
    <section id="waitlist" className="w-full py-20 bg-[#1B2240]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
          Reserve your earning spot
        </h2>
        <p className="text-lg text-[#6C7280] mb-6 max-w-2xl mx-auto font-['Roboto']">
          Get first access to IdleNet when it launches in March 2025.
        </p>
        
        <div className="bg-[#39E19D]/10 border border-[#39E19D]/20 rounded-xl p-4 max-w-md mx-auto mb-8">
          <p className="text-[#39E19D] font-['Roboto'] text-center">
            ⚡ Limited spots available for beta testing
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/5 border-white/10 text-[#FFF9F0] placeholder:text-[#6C7280] rounded-xl flex-1"
              style={{ borderRadius: '12px' }}
            />
            <Button 
              type="submit"
              className="bg-[#39E19D] text-[#FFF9F0] hover:bg-gradient-to-r hover:from-[#39E19D] hover:to-[#64F2C6] px-8 rounded-xl whitespace-nowrap transition-all duration-200 ease-in-out"
              style={{ borderRadius: '12px' }}
            >
              Reserve Spot
            </Button>
          </div>
        </form>

        <p className="text-sm text-[#6C7280] mt-6 font-['Roboto']">
          No spam. We'll email you when IdleNet is ready for your computer.
        </p>
      </div>
    </section>
  );
}
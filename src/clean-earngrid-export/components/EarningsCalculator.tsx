import { useState } from "react";
import { Button } from "./ui/button";

export function EarningsCalculator() {
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [usage, setUsage] = useState("");
  const [calculated, setCalculated] = useState(false);

  // Mock earnings calculation based on specs
  const calculateEarnings = () => {
    let baseEarnings = 0;
    
    // CPU factor
    if (cpu === "high") baseEarnings += 40;
    else if (cpu === "medium") baseEarnings += 25;
    else if (cpu === "low") baseEarnings += 15;
    
    // RAM factor
    if (ram === "16+") baseEarnings += 20;
    else if (ram === "8-16") baseEarnings += 12;
    else if (ram === "4-8") baseEarnings += 8;
    
    // Usage factor
    if (usage === "8+") baseEarnings += 25;
    else if (usage === "4-8") baseEarnings += 15;
    else if (usage === "2-4") baseEarnings += 8;
    
    return baseEarnings;
  };

  const handleCalculate = () => {
    if (cpu && ram && usage) {
      setCalculated(true);
    }
  };

  const monthlyEarnings = calculateEarnings();
  const dailyEarnings = (monthlyEarnings / 30).toFixed(2);

  return (
    <section className="w-full py-20 bg-[#1B2240]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
            See your earning potential
          </h2>
          <p className="text-lg text-[#6C7280] max-w-2xl mx-auto font-['Roboto']">
            Enter your computer specs to see how much you could earn monthly. Most users earn while sleeping, working, or away from their computer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-2xl text-[#FFF9F0] font-['Poppins'] mb-6">
              Earnings Calculator
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[#FFF9F0] font-['Roboto'] block">CPU Performance</label>
                <select 
                  value={cpu} 
                  onChange={(e) => setCpu(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-[#FFF9F0] rounded-md p-2"
                >
                  <option value="">Select your CPU type</option>
                  <option value="high">High-end (Gaming/Workstation)</option>
                  <option value="medium">Mid-range (Standard laptop/desktop)</option>
                  <option value="low">Basic (Older or budget computer)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[#FFF9F0] font-['Roboto'] block">RAM Memory</label>
                <select 
                  value={ram} 
                  onChange={(e) => setRam(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-[#FFF9F0] rounded-md p-2"
                >
                  <option value="">Select your RAM amount</option>
                  <option value="16+">16GB or more</option>
                  <option value="8-16">8-16GB</option>
                  <option value="4-8">4-8GB</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[#FFF9F0] font-['Roboto'] block">Daily idle time</label>
                <select 
                  value={usage} 
                  onChange={(e) => setUsage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-[#FFF9F0] rounded-md p-2"
                >
                  <option value="">How many hours is your computer idle?</option>
                  <option value="8+">8+ hours (Overnight + work)</option>
                  <option value="4-8">4-8 hours (Overnight or work)</option>
                  <option value="2-4">2-4 hours (Light usage)</option>
                </select>
              </div>

              <Button 
                onClick={handleCalculate}
                disabled={!cpu || !ram || !usage}
                className="w-full bg-[#39E19D] text-[#FFF9F0] hover:bg-[#64F2C6] rounded-xl"
                style={{ borderRadius: '12px' }}
              >
                Calculate Earnings
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Live Stats */}
            <div className="bg-gradient-to-r from-[#39E19D]/20 to-[#64F2C6]/20 border border-[#39E19D]/30 rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div>
                  <p className="text-[#6C7280] font-['Roboto']">Average daily earnings across network</p>
                  <p className="text-4xl font-semibold text-[#39E19D] font-['Poppins']">$12.40</p>
                </div>
                <div className="h-px bg-white/10"></div>
                <div>
                  <p className="text-[#6C7280] font-['Roboto']">Network capacity utilization</p>
                  <p className="text-2xl font-semibold text-[#FFF9F0] font-['Poppins']">78%</p>
                </div>
              </div>
            </div>

            {/* Personal Results */}
            {calculated && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#FFF9F0] font-['Poppins']">
                    Your estimated earnings
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[#6C7280] font-['Roboto']">Per day</p>
                      <p className="text-3xl font-semibold text-[#39E19D] font-['Poppins']">${dailyEarnings}</p>
                    </div>
                    <div>
                      <p className="text-[#6C7280] font-['Roboto']">Per month</p>
                      <p className="text-3xl font-semibold text-[#39E19D] font-['Poppins']">${monthlyEarnings}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6C7280] font-['Roboto'] mt-4">
                    * Earnings vary based on network demand and your computer's availability
                  </p>
                </div>
              </div>
            )}

            {!calculated && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
                <div className="text-[#6C7280] font-['Roboto']">
                  Fill out the calculator to see your personalized earnings estimate
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-[#FFF9F0] font-['Poppins']">
                Earnings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-[#FFF9F0] font-['Roboto']">CPU Performance</label>
                <Select value={cpu} onValueChange={setCpu}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-[#FFF9F0]">
                    <SelectValue placeholder="Select your CPU type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High-end (Gaming/Workstation)</SelectItem>
                    <SelectItem value="medium">Mid-range (Standard laptop/desktop)</SelectItem>
                    <SelectItem value="low">Basic (Older or budget computer)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-[#FFF9F0] font-['Roboto']">RAM Memory</label>
                <Select value={ram} onValueChange={setRam}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-[#FFF9F0]">
                    <SelectValue placeholder="Select your RAM amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16+">16GB or more</SelectItem>
                    <SelectItem value="8-16">8-16GB</SelectItem>
                    <SelectItem value="4-8">4-8GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-[#FFF9F0] font-['Roboto']">Daily idle time</label>
                <Select value={usage} onValueChange={setUsage}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-[#FFF9F0]">
                    <SelectValue placeholder="How many hours is your computer idle?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8+">8+ hours (Overnight + work)</SelectItem>
                    <SelectItem value="4-8">4-8 hours (Overnight or work)</SelectItem>
                    <SelectItem value="2-4">2-4 hours (Light usage)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleCalculate}
                disabled={!cpu || !ram || !usage}
                className="w-full bg-[#39E19D] text-[#FFF9F0] hover:bg-[#64F2C6] rounded-xl"
                style={{ borderRadius: '12px' }}
              >
                Calculate Earnings
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Live Stats */}
            <Card className="bg-gradient-to-r from-[#39E19D]/20 to-[#64F2C6]/20 border-[#39E19D]/30">
              <CardContent className="p-8 text-center">
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
              </CardContent>
            </Card>

            {/* Personal Results */}
            {calculated && (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8 text-center">
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
                </CardContent>
              </Card>
            )}

            {!calculated && (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8 text-center">
                  <div className="text-[#6C7280] font-['Roboto']">
                    Fill out the calculator to see your personalized earnings estimate
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
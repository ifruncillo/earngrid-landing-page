import { Download, Play, DollarSign } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Download,
      title: "Download & Install",
      description: "One-click installer handles everything automatically. No technical setup required."
    },
    {
      icon: Play,
      title: "Start Earning",
      description: "Software intelligently detects when you're away and begins earning immediately."
    },
    {
      icon: DollarSign,
      title: "Get Paid Weekly",
      description: "Watch your earnings grow with live tracking and simple weekly payouts."
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-[#1B2240]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
            Simple as installing antivirus
          </h2>
          <p className="text-lg text-[#6C7280] max-w-2xl mx-auto font-['Roboto']">
            Install IdleNet as easily as any antivirus software. No command lines, no config files, no technical decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1B2240] border border-white/10 rounded-2xl p-8 text-center hover:border-[#39E19D]/30 transition-colors">
              <div className="bg-[#39E19D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-[#1B2240]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
                {step.title}
              </h3>
              <p className="text-[#FFF9F0] leading-relaxed font-['Roboto']">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
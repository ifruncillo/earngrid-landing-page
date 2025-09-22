export function WhyItWorksSection() {
  const features = [
    {
      title: "Turn idle time into income",
      description: "Your computer sits unused 16+ hours per day. Now it can earn money during that time."
    },
    {
      title: "Safe & secure operation", 
      description: "System-level safety protocols protect your data. Like antivirus software, but it earns."
    },
    {
      title: "Zero technical knowledge",
      description: "One-click install. Automatic operation. No configuration or maintenance required."
    },
    {
      title: "Automatic pause detection",
      description: "Instantly pauses when you use your computer. Never interferes with your work."
    }
  ];

  return (
    <section className="w-full py-20 bg-[#1B2240]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
            Why it works
          </h2>
          <p className="text-lg text-[#6C7280] max-w-2xl mx-auto font-['Roboto']">
            Transform your computer into a tiny gold mine. Completely passive income from resources you're already paying for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
              <div className="w-12 h-12 bg-[#39E19D] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#1B2240] rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-[#FFF9F0] font-['Poppins']">
                {feature.title}
              </h3>
              <p className="text-[#6C7280] font-['Roboto']">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
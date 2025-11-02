export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "One-click installation. EarnGrid installs like any trusted software."
    },
    {
      number: "02",
      title: "Automatic Detection", 
      description: "EarnGrid detects when your computer is idle and safely joins the network."
    },
    {
      number: "03",
      title: "Start Earning",
      description: "Your computer contributes processing power and earns money automatically."
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-cream mb-4 font-heading">
            How it works
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-body">
            Simple as installing antivirus software. No technical setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-semibold text-navy font-heading">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-cream font-heading">
                {step.title}
              </h3>
              <p className="text-muted font-body max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
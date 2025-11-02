import { Lock, ShieldCheck, Settings } from "lucide-react";

export function TrustPanel() {
  const features = [
    {
      icon: Lock,
      title: "Private by design",
      description: "Your personal data stays on your device. We never access your photos, messages, or personal files."
    },
    {
      icon: ShieldCheck,
      title: "System-level security",
      description: "Digitally signed software with the same security standards as trusted antivirus programs."
    },
    {
      icon: Settings,
      title: "You're in control",
      description: "Start, stop, or pause anytime. Set custom schedules and choose when IdleNet can run."
    }
  ];

  return (
    <section className="w-full py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-cream mb-4 font-heading">
            Built with trust in mind
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-body">
            Your privacy and security are our top priorities. Here's how we protect you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-cream mb-4 font-heading">
                {feature.title}
              </h3>
              <p className="text-cream leading-relaxed max-w-sm mx-auto font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
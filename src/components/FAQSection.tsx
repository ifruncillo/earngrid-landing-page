import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much can I actually earn?",
      answer: "Earnings depend on your computer specs and idle time. Most users earn $15-50/month running overnight and during work hours. High-end computers with 16GB+ RAM can earn $50-100/month."
    },
    {
      question: "Is it safe for my computer?",
      answer: "Yes. EarnGrid uses the same system-level safety protocols as antivirus software. Your personal files remain completely private and untouched. The software only uses spare processing power."
    },
    {
      question: "Will it slow down my computer?",
      answer: "No. EarnGrid automatically pauses the moment you use your computer. It only runs during true idle time when you're not actively using your device."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are processed weekly via direct deposit, PayPal, or cryptocurrency. You'll receive detailed earnings reports and can withdraw anytime with a minimum balance of $10."
    },
    {
      question: "What kind of work does my computer do?",
      answer: "Your computer contributes to distributed computing tasks like data processing, machine learning training, and scientific research. All work is completely legal and beneficial."
    },
    {
      question: "Can I uninstall it anytime?",
      answer: "Absolutely. EarnGrid uninstalls completely like any other software. No residual files or changes remain on your system."
    }
  ];

  return (
    <section id="faq" className="w-full py-20 bg-[#1B2240]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
            Frequently asked questions
          </h2>
          <p className="text-lg text-[#6C7280] max-w-2xl mx-auto font-['Roboto']">
            Everything you need to know about turning your computer into an earning machine.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg">
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-[#FFF9F0] font-['Poppins']">
                  {faq.question}
                </span>
                <span className="text-[#39E19D] text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#6C7280] font-['Roboto'] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
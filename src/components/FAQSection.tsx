import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What about electricity costs?",
      answer: "Most users see a $2-5 increase in their monthly electric bill, while earning $30-80. Your computer is already using most of its power just being turned on - the additional processing uses minimal extra electricity."
    },
    {
      question: "Will this slow down my internet?",
      answer: "IdleNet uses less bandwidth than streaming a song. Most tasks require minimal data transfer, and we automatically limit usage based on your connection speed to ensure it never impacts your normal internet use."
    },
    {
      question: "What happens if I need my computer while it's earning?",
      answer: "IdleNet pauses instantly the moment you move your mouse, touch your keyboard, or use your computer in any way. It only runs during true idle time - when you're sleeping, at work, or away from your computer."
    },
    {
      question: "Is this actually legitimate? How do I know it's not a scam?",
      answer: "IdleNet is backed by established businesses that need computing power for legitimate tasks like AI training, scientific research, and data processing. We're digitally signed software with the same security standards as major antivirus companies."
    },
    {
      question: "What kind of tasks will my computer be doing?",
      answer: "Safe, pre-screened computing tasks like machine learning training, scientific simulations, and data analysis. No cryptocurrency mining, no illegal content, no personal data processing. All tasks are reviewed by our security team before approval."
    },
    {
      question: "Can I control when IdleNet runs?",
      answer: "Absolutely. You can pause anytime, set custom schedules (like only run overnight), limit resource usage, and even specify certain hours when it should never run. You're always in complete control."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-[#1B2240]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
            Common questions
          </h2>
          <p className="text-lg text-[#6C7280] font-['Roboto']">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#FFF9F0] font-['Poppins'] pr-4">
                  {faq.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="w-6 h-6 text-[#39E19D] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#6C7280] flex-shrink-0" />
                )}
              </button>
              {openItem === index && (
                <div className="px-8 pb-6">
                  <p className="text-[#FFF9F0] leading-relaxed font-['Roboto']">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6C7280] font-['Roboto']">
            Have more questions? <span className="text-[#39E19D] hover:text-[#64F2C6] cursor-pointer transition-colors">Contact our support team</span>
          </p>
        </div>
      </div>
    </section>
  );
}
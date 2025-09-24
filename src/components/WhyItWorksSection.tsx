export function WhyItWorksSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#1B2240] to-[#1B2240]/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
            What's the catch? There isn't one.
          </h2>
          <p className="text-lg text-[#6C7280] max-w-3xl mx-auto font-['Roboto']">
            This is a real business model that benefits everyone. Here's exactly how it works.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: The Problem */}
          <div className="space-y-8">
            <div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
                The expensive problem
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#FFF9F0] font-['Roboto']">
                      <span className="font-medium">Companies overpay massively</span> for cloud computing from Amazon, Google, Microsoft
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#FFF9F0] font-['Roboto']">
                      <span className="font-medium">They get charged premium prices</span> for computing power that sits idle most of the time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#FFF9F0] font-['Roboto']">
                      <span className="font-medium">Your computer sits idle 95% of the time</span> while this massive market inefficiency continues
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Solution */}
          <div className="space-y-8">
            <div className="border border-[#39E19D]/20 bg-[#39E19D]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#FFF9F0] mb-4 font-['Poppins']">
                The simple solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#39E19D] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#FFF9F0] font-['Roboto']">
                      <span className="font-medium">Your idle computer joins a network</span> that provides enterprise-grade computing power
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#39E19D] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#FFF9F0] font-['Roboto']">
                      <span className="font-medium">Companies pay you for computing power</span> they actually use, not idle servers
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#39E19D] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#FFF9F0] font-['Roboto']">
                      <span className="font-medium">Companies cut costs by 90%.</span> You turn downtime into income. Wasted resources become productive assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#39E19D]/10 border border-[#39E19D]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[#FFF9F0] mb-3 font-['Poppins']">
              It's that simple
            </h3>
            <p className="text-[#6C7280] font-['Roboto']">
              Distributed computing has been around for decades. We're just making it profitable for everyone with a computer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function TrustPanel() {
  return (
    <section className="w-full py-20 bg-[#1B2240]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#39E19D]/10 to-[#64F2C6]/10 border border-[#39E19D]/20 rounded-lg p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-semibold text-[#FFF9F0] font-['Poppins']">
              Trusted by computer owners worldwide
            </h2>
            <p className="text-lg text-[#6C7280] max-w-3xl mx-auto font-['Roboto']">
              Join thousands of users who've turned their idle computers into earning machines. 
              Our network processes over 10TB of compute tasks daily, generating consistent income for participants.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-[#39E19D] font-['Poppins']">
                  $2.3M+
                </div>
                <div className="text-[#6C7280] font-['Roboto']">
                  Paid to network participants
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-[#39E19D] font-['Poppins']">
                  15,000+
                </div>
                <div className="text-[#6C7280] font-['Roboto']">
                  Active network participants
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-[#39E19D] font-['Poppins']">
                  99.9%
                </div>
                <div className="text-[#6C7280] font-['Roboto']">
                  Network uptime reliability
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
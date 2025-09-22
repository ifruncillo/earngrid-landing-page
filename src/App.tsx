import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { EarningsCalculator } from "./components/EarningsCalculator";
import { WhyItWorksSection } from "./components/WhyItWorksSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TrustPanel } from "./components/TrustPanel";
import { FAQSection } from "./components/FAQSection";
import { WaitlistSection } from "./components/WaitlistSection";
import { Footer } from "./components/Footer";
import { BackgroundElements } from "./components/BackgroundElements";
import { SEOHead } from "./components/SEOHead";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1B2240] relative">
      <SEOHead />
      <BackgroundElements />
      <Header />
      <main>
        <HeroSection />
        <EarningsCalculator />
        <WhyItWorksSection />
        <HowItWorksSection />
        <TrustPanel />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
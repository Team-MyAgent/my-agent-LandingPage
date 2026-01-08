import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ComparisonSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

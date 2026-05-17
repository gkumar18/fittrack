import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";
import { LandingFooter } from "@/components/landing/LandingFooter";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar /><HeroSection /><SocialProofSection /><FeaturesSection />
      <HowItWorksSection /><TestimonialsSection /><PricingSection /><CTASection /><LandingFooter />
    </div>
  );
}

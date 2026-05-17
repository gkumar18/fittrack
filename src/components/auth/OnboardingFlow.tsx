import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
import { OnboardingProgress } from "./OnboardingProgress";
import { Step1Account } from "./steps/Step1Account";
import { Step2Personal } from "./steps/Step2Personal";
import { Step3Goals } from "./steps/Step3Goals";
import { Step4Activity } from "./steps/Step4Activity";
import { Step5Profile } from "./steps/Step5Profile";
const STEPS = [Step1Account, Step2Personal, Step3Goals, Step4Activity, Step5Profile];
export function OnboardingFlow() {
  const { currentOnboardingStep } = useAuthStore();
  const StepComponent = STEPS[currentOnboardingStep - 1];
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-background to-violet-50 dark:from-brand-950/10 dark:via-background dark:to-violet-950/10 flex flex-col">
      <header className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-border bg-background/80 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md"><Zap className="w-4 h-4 text-white" /></div>
          <span className="text-base font-bold font-display gradient-text">FitTrack</span>
        </Link>
        <span className="text-sm text-muted-foreground font-medium">Step {currentOnboardingStep} of 5</span>
      </header>
      <OnboardingProgress currentStep={currentOnboardingStep} totalSteps={5} />
      <div className="flex-1 flex items-start justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div key={currentOnboardingStep} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }} transition={{ duration: 0.3 }}>
              {StepComponent && <StepComponent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

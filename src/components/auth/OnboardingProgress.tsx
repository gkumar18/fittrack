import { ONBOARDING_STEPS } from "@/constants";
import { cn } from "@/lib/utils";
export function OnboardingProgress({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  return (
    <div className="px-4 sm:px-8 py-4 bg-background/80">
      <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-3">
        <div className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full transition-all duration-500 ease-out" style={{ width: progress + "%" }} />
      </div>
      <div className="flex items-center justify-between max-w-xl mx-auto">
        {ONBOARDING_STEPS.map((s) => (
          <div key={s.step} className="flex flex-col items-center gap-1">
            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300", s.step < currentStep ? "bg-brand-500 text-white" : s.step === currentStep ? "bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-lg" : "bg-muted text-muted-foreground")}>
              {s.step < currentStep ? <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> : s.step}
            </div>
            <span className={cn("text-[10px] font-medium hidden sm:block", s.step === currentStep ? "text-brand-600" : "text-muted-foreground")}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { ACTIVITY_LEVELS } from "@/constants";
import { cn } from "@/lib/utils";
export function Step4Activity() {
  const { updateOnboardingData, setOnboardingStep } = useAuthStore();
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6"><h2 className="text-2xl font-bold font-display mb-1">Activity level</h2><p className="text-muted-foreground text-sm">Be honest, this helps calibrate your plan.</p></div>
      <div className="space-y-3 mb-6">
        {ACTIVITY_LEVELS.map((level, i) => {
          const isSel = selected === level.id;
          return (
            <motion.button key={level.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} type="button" onClick={() => setSelected(level.id)}
              className={cn("w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200", isSel ? "border-brand-500 bg-brand-50 dark:bg-brand-950/50" : "border-border hover:border-brand-300 hover:bg-muted")}>
              <span className="text-2xl shrink-0">{level.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className={cn("text-sm font-semibold", isSel && "text-brand-700 dark:text-brand-400")}>{level.label}</p>
                  <span className="text-xs text-muted-foreground shrink-0">{level.detail}</span>
                </div>
                <p className="text-xs text-muted-foreground">{level.description}</p>
              </div>
              <div className={cn("w-4 h-4 rounded-full border-2 shrink-0 transition-all", isSel ? "border-brand-500 bg-brand-500" : "border-muted-foreground")} />
            </motion.button>
          );
        })}
      </div>
      <div className="flex gap-3">
        <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setOnboardingStep(3)}>Back</Button>
        <Button size="lg" className="flex-1" disabled={!selected} onClick={() => { updateOnboardingData({ step4: { activityLevel: selected! } }); setOnboardingStep(5); }}>Continue</Button>
      </div>
      <button onClick={() => setOnboardingStep(5)} className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 py-1 transition-colors">Skip for now</button>
    </div>
  );
}

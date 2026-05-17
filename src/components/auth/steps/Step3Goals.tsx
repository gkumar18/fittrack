import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { FITNESS_GOALS } from "@/constants";
import { cn } from "@/lib/utils";
export function Step3Goals() {
  const { updateOnboardingData, setOnboardingStep } = useAuthStore();
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => setSelected((p) => p.includes(id) ? p.filter((g) => g !== id) : p.length < 3 ? [...p, id] : p);
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6"><h2 className="text-2xl font-bold font-display mb-1">What are your goals?</h2><p className="text-muted-foreground text-sm">Select up to 3 goals.</p></div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {FITNESS_GOALS.map((goal, i) => {
          const isSel = selected.includes(goal.id);
          return (
            <motion.button key={goal.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} type="button" onClick={() => toggle(goal.id)}
              className={cn("relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all duration-200", isSel ? "border-brand-500 bg-brand-50 dark:bg-brand-950/50" : "border-border hover:border-brand-300 hover:bg-muted")}>
              {isSel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-2 right-2 w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center"><Check className="w-3 h-3 text-white" /></motion.div>}
              <span className="text-2xl">{goal.emoji}</span>
              <div><p className={cn("text-sm font-semibold", isSel && "text-brand-700 dark:text-brand-400")}>{goal.label}</p><p className="text-xs text-muted-foreground">{goal.description}</p></div>
            </motion.button>
          );
        })}
      </div>
      <div className="flex gap-3">
        <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setOnboardingStep(2)}>Back</Button>
        <Button size="lg" className="flex-1" disabled={selected.length === 0} onClick={() => { updateOnboardingData({ step3: { fitnessGoals: selected } }); setOnboardingStep(4); }}>Continue</Button>
      </div>
      <button onClick={() => { updateOnboardingData({ step3: { fitnessGoals: [] } }); setOnboardingStep(4); }} className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 py-1 transition-colors">Skip for now</button>
    </div>
  );
}

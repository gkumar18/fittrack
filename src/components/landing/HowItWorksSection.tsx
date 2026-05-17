import { motion } from "framer-motion";
import { UserPlus, Target, TrendingUp } from "lucide-react";
import { howItWorksSteps } from "@/data/mockData";
const iconMap = { UserPlus, Target, TrendingUp } as const;
export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-400 text-sm font-medium border border-violet-200 dark:border-violet-800 mb-4">How it works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Up and running in minutes</h2>
          <p className="text-lg text-muted-foreground">3 simple steps to your first tracked workout.</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-6">
          {howItWorksSteps.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/25">{Icon && <Icon className="w-8 h-8 text-white" />}</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-brand-500 flex items-center justify-center text-xs font-bold text-brand-600">{i + 1}</div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2 tracking-wider uppercase">Step {step.step}</div>
                <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

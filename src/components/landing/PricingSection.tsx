import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { pricingPlans } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 text-sm font-medium border border-brand-200 dark:border-brand-800 mb-4">Simple pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Choose your plan</h2>
          <p className="text-lg text-muted-foreground">Start free, upgrade when ready.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={cn("relative rounded-2xl border p-8 flex flex-col transition-all duration-300", plan.popular ? "border-brand-500 bg-card shadow-xl shadow-brand-500/10 scale-105" : "border-border bg-card hover:shadow-lg")}>
              {plan.popular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><Badge variant="gradient" className="text-xs px-3 py-1">Most Popular</Badge></div>}
              <div className="mb-6">
                <h3 className="text-xl font-bold font-display mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-display">{plan.price === 0 ? "Free" : "$" + plan.price}</span>
                  {plan.price > 0 && <span className="text-muted-foreground text-sm">/{plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => <li key={f} className="flex items-start gap-2.5 text-sm"><Check className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" /><span>{f}</span></li>)}
                {plan.limitations.map((l) => <li key={l} className="flex items-start gap-2.5 text-sm text-muted-foreground"><X className="w-4 h-4 mt-0.5 shrink-0" /><span>{l}</span></li>)}
              </ul>
              <Button variant={plan.popular ? "default" : "outline"} size="lg" className="w-full" asChild><Link to="/auth">{plan.cta}</Link></Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Activity, Apple, BarChart3, Users } from "lucide-react";
import { features } from "@/data/mockData";
const iconMap = { Activity, Apple, BarChart3, Users } as const;
export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 text-sm font-medium border border-brand-200 dark:border-brand-800 mb-4">Everything you need</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Built for serious results</h2>
          <p className="text-lg text-muted-foreground">Every feature is thoughtfully designed to help you hit your goals faster.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <motion.div key={f.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300">
                <div className={"w-12 h-12 rounded-xl bg-gradient-to-br " + f.gradient + " flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"}>
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-base font-semibold font-display mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

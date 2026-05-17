import { motion } from "framer-motion";
const stats = [{ value: "50,000+", label: "Active Users" }, { value: "2M+", label: "Workouts Logged" }, { value: "4.9/5", label: "App Store Rating" }, { value: "98%", label: "User Satisfaction" }];
export function SocialProofSection() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10">Trusted by athletes and fitness enthusiasts worldwide</motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-display gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

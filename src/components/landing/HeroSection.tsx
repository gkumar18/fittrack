import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const cards = [
  { icon: TrendingUp, label: "Progress", value: "+24%", color: "text-brand-500", bg: "bg-brand-50 dark:bg-brand-950/50", pos: "lg:-left-12 top-16 -left-2" },
  { icon: Zap, label: "Streak", value: "12 days", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/50", pos: "lg:-right-12 top-1/2 -right-2" },
  { icon: Users, label: "Community", value: "50k+", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/50", pos: "lg:-left-8 bottom-16 -left-2" },
];
const cv = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-background to-violet-50 dark:from-brand-950/20 dark:via-background dark:to-violet-950/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={cv} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.div variants={iv}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 text-sm font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5" />The Future of Fitness Tracking
              </span>
            </motion.div>
            <motion.h1 variants={iv} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6">
              Train Smarter.{" "}<span className="gradient-text">Live Better.</span><br />Feel Amazing.
            </motion.h1>
            <motion.p variants={iv} className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              FitTrack combines intelligent workout tracking, nutrition planning, and progress analytics into one beautiful platform built for real results.
            </motion.p>
            <motion.div variants={iv} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" asChild><Link to="/auth">Get Started Free<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              <Button size="xl" variant="outline"><Play className="mr-2 h-4 w-4 fill-current" />Watch Demo</Button>
            </motion.div>
            <motion.p variants={iv} className="mt-4 text-sm text-muted-foreground">No credit card required</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden">
                <div className="p-5 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div><p className="text-xs text-muted-foreground">Good morning</p><p className="text-sm font-semibold">Alex Dashboard</p></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold">A</div>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[{ label: "Calories", value: "2,840", icon: "🔥" }, { label: "Workouts", value: "4", icon: "💪" }, { label: "Streak", value: "12d", icon: "⚡" }].map((s) => (
                      <div key={s.label} className="rounded-xl bg-muted/50 p-3 text-center"><div className="text-lg">{s.icon}</div><div className="text-sm font-bold">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Weekly Activity</p>
                    <div className="flex items-end gap-1.5 h-16">
                      {[60, 80, 40, 90, 70, 100, 50].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: h + "%" }} transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }} className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-500 to-violet-500 opacity-80" />
                      ))}
                    </div>
                    <div className="flex justify-between">
                      {["M","T","W","T","F","S","S"].map((d, i) => <span key={i} className="text-[10px] text-muted-foreground flex-1 text-center">{d}</span>)}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs"><span className="font-medium">Monthly Goal</span><span className="text-brand-600 font-semibold">68%</span></div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "68%" }} transition={{ delay: 1, duration: 0.8 }} className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              {cards.map((card, i) => (
                <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.2 }}
                  className={cn("absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-border bg-background shadow-lg animate-float", card.pos)}
                  style={{ animationDelay: i * 0.5 + "s" }}>
                  <div className={cn("p-1.5 rounded-lg", card.bg)}><card.icon className={cn("w-3.5 h-3.5", card.color)} /></div>
                  <div><p className="text-[10px] text-muted-foreground leading-none mb-0.5">{card.label}</p><p className="text-xs font-bold leading-none">{card.value}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
function getGreeting() { const h = new Date().getHours(); if (h < 12) return "Good morning"; if (h < 17) return "Good afternoon"; return "Good evening"; }
export function WelcomeHeader() {
  const { user } = useAuthStore();
  const firstName = user?.fullName?.split(" ")[0] ?? "Athlete";
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between flex-wrap gap-4">
      <div>
        <p className="text-muted-foreground text-sm mb-1">{today}</p>
        <h1 className="text-2xl sm:text-3xl font-bold font-display">{getGreeting()}, <span className="gradient-text">{firstName}</span> 👋</h1>
        <p className="text-muted-foreground mt-1 text-sm">You are on a 12-day streak. Keep it up!</p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-50 to-violet-50 dark:from-brand-950/30 dark:to-violet-950/30 border border-brand-200 dark:border-brand-800">
        <span className="text-xl">⚡</span>
        <div><p className="text-xs text-muted-foreground">Current Streak</p><p className="text-sm font-bold text-brand-700 dark:text-brand-400">12 days</p></div>
      </div>
    </motion.div>
  );
}

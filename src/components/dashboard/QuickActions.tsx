import { motion } from "framer-motion";
import { Dumbbell, Apple, TrendingUp, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
const actions = [
  { icon: Dumbbell, label: "Start Workout", description: "Begin session", gradient: "from-brand-500 to-emerald-500", bg: "bg-brand-50 dark:bg-brand-950/30", text: "text-brand-700 dark:text-brand-400" },
  { icon: Apple, label: "Log Meal", description: "Track nutrition", gradient: "from-orange-500 to-amber-500", bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-700 dark:text-orange-400" },
  { icon: TrendingUp, label: "View Progress", description: "See analytics", gradient: "from-violet-500 to-purple-500", bg: "bg-violet-50 dark:bg-violet-950/30", text: "text-violet-700 dark:text-violet-400" },
  { icon: Plus, label: "Log Activity", description: "Custom activity", gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-700 dark:text-blue-400" },
];
export function QuickActions() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <Card>
        <CardHeader className="pb-3"><CardTitle className="text-base">Quick Actions</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-2 gap-2.5">
          {actions.map((action) => (
            <motion.button key={action.label} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={cn("flex flex-col items-start gap-2.5 p-3.5 rounded-xl transition-all duration-200 hover:shadow-sm text-left", action.bg)}>
              <div className={"w-8 h-8 rounded-lg bg-gradient-to-br " + action.gradient + " flex items-center justify-center shadow-sm"}><action.icon className="w-4 h-4 text-white" /></div>
              <div><p className={cn("text-xs font-semibold", action.text)}>{action.label}</p><p className="text-[10px] text-muted-foreground">{action.description}</p></div>
            </motion.button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

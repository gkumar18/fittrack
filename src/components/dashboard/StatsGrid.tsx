import { motion } from "framer-motion";
import { Flame, Dumbbell, Zap, Target } from "lucide-react";
import { dashboardStats } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
const iconMap = { Flame, Dumbbell, Zap, Target } as const;
export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {dashboardStats.map((stat, i) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <motion.div key={stat.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={cn("p-2.5 rounded-xl", stat.bgColor)}>{Icon && <Icon className={cn("h-4 w-4", stat.color)} />}</div>
                  <span className={cn("text-xs font-semibold", stat.positive ? "text-brand-600" : "text-destructive")}>{stat.change}</span>
                </div>
                <div className="text-2xl font-bold font-display mb-0.5">{stat.value}{stat.unit === "%" && <span className="text-lg">%</span>}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

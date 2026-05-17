import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { weeklyStats } from "@/data/mockData";
const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
  if (active && payload && payload.length) return (
    <div className="bg-background border border-border rounded-xl p-3 shadow-lg text-sm">
      <p className="font-semibold mb-2">{label}</p>
      {payload.map((p) => <div key={p.name} className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} /><span className="text-muted-foreground">{p.name}:</span><span className="font-medium">{p.value}</span></div>)}
    </div>
  );
  return null;
};
export function ActivityChart() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div><CardTitle>Weekly Activity</CardTitle><CardDescription>Calories burned and workout duration</CardDescription></div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 dark:bg-brand-950/30 rounded-lg"><div className="w-1.5 h-1.5 rounded-full bg-brand-500" /><span className="text-xs font-medium text-brand-700 dark:text-brand-400">This week</span></div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-56 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyStats} barGap={4} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} width={40} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "12px" }} />
                <Bar dataKey="calories" name="Calories" fill="#22c55e" radius={[6, 6, 0, 0]} opacity={0.9} />
                <Bar dataKey="duration" name="Duration (min)" fill="#8b5cf6" radius={[6, 6, 0, 0]} opacity={0.9} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

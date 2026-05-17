import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Circle, Clock, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { todaysExercises } from "@/data/mockData";
import { cn } from "@/lib/utils";
import type { Exercise } from "@/types";
export function WorkoutCard() {
  const [exercises, setExercises] = useState<Exercise[]>(todaysExercises);
  const toggle = (id: string) => setExercises((p) => p.map((e) => e.id === id ? { ...e, completed: !e.completed } : e));
  const completed = exercises.filter((e) => e.completed).length;
  const progress = (completed / exercises.length) * 100;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div><CardTitle className="text-base">Today Workout</CardTitle><CardDescription className="text-xs mt-0.5">Upper Body Blast</CardDescription></div>
            <Badge variant="success" className="text-xs">{completed}/{exercises.length} done</Badge>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />60 min</span>
            <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-orange-500" />480 kcal</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-3">
            <div className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full transition-all duration-500" style={{ width: progress + "%" }} />
          </div>
        </CardHeader>
        <CardContent className="space-y-2 pt-0">
          {exercises.map((exercise) => (
            <button key={exercise.id} onClick={() => toggle(exercise.id)} className={cn("w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-all duration-200", exercise.completed ? "bg-brand-50 dark:bg-brand-950/30" : "hover:bg-muted")}>
              {exercise.completed ? <CheckCircle className="w-4 h-4 text-brand-500 shrink-0" /> : <Circle className="w-4 h-4 text-muted-foreground shrink-0" />}
              <div className="flex-1 min-w-0">
                <p className={cn("text-sm font-medium", exercise.completed && "line-through text-muted-foreground")}>{exercise.name}</p>
                <p className="text-xs text-muted-foreground">{exercise.sets}x{exercise.reps}{exercise.weight ? " - " + exercise.weight + "kg" : ""}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">{exercise.muscleGroup}</span>
            </button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

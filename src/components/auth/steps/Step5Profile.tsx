import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Upload, CheckCircle, Dumbbell, Utensils, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";
const schema = z.object({ username: z.string().min(3, "At least 3 characters").regex(/^[a-z0-9_]+$/, "Lowercase, numbers, underscores only"), bio: z.string().max(160).optional() });
type FormData = z.infer<typeof schema>;
const notifItems = [
  { id: "workoutReminders", label: "Workout Reminders", icon: Dumbbell },
  { id: "mealReminders", label: "Meal Reminders", icon: Utensils },
  { id: "progressUpdates", label: "Progress Updates", icon: TrendingUp },
  { id: "weeklyReports", label: "Weekly Reports", icon: FileText },
];
export function Step5Profile() {
  const navigate = useNavigate();
  const { updateOnboardingData, setOnboardingStep, completeOnboarding } = useAuthStore();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [notifications, setNotifications] = useState({ workoutReminders: true, mealReminders: false, progressUpdates: true, weeklyReports: true });
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const bio = watch("bio", "");
  const handleFile = (file: File) => { if (!file.type.startsWith("image/")) return; const r = new FileReader(); r.onload = (e) => setAvatar(e.target?.result as string); r.readAsDataURL(file); };
  const onSubmit = (data: FormData) => { updateOnboardingData({ step5: { avatar: avatar ?? undefined, username: data.username, bio: data.bio, notifications } }); completeOnboarding(); setSuccess(true); setTimeout(() => navigate("/dashboard"), 2000); };
  if (success) return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-card border border-border rounded-2xl p-8 shadow-sm text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center mx-auto mb-6 shadow-lg"><CheckCircle className="w-10 h-10 text-white" /></motion.div>
      <h2 className="text-2xl font-bold font-display mb-2">Welcome to FitTrack!</h2>
      <p className="text-muted-foreground">Taking you to your dashboard...</p>
      <div className="mt-6 h-1.5 bg-muted rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, ease: "linear" }} className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full" /></div>
    </motion.div>
  );
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6"><h2 className="text-2xl font-bold font-display mb-1">Set up your profile</h2><p className="text-muted-foreground text-sm">Almost done!</p></div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col items-center gap-3">
          <div className={cn("w-24 h-24 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden", isDragging ? "border-brand-500 bg-brand-50" : "border-border hover:border-brand-400 bg-muted")}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }} onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }} onClick={() => fileRef.current?.click()}>
            {avatar ? <img src={avatar} alt="Avatar" className="w-full h-full object-cover" /> : <div className="flex flex-col items-center gap-1 text-muted-foreground"><Upload className="w-6 h-6" /><span className="text-[10px]">Upload</span></div>}
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="username">Username</Label>
          <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">@</span><Input id="username" placeholder="alexjohnson" className="pl-7" error={!!errors.username} {...register("username")} /></div>
          {errors.username && <p className="text-destructive text-xs">{errors.username.message}</p>}
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between"><Label>Bio <span className="text-muted-foreground font-normal">(optional)</span></Label><span className="text-xs text-muted-foreground">{bio?.length ?? 0}/160</span></div>
          <textarea placeholder="Tell us about yourself..." className="flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none h-20" {...register("bio")} />
        </div>
        <div className="space-y-3 pt-1">
          <Label>Notification preferences</Label>
          <div className="space-y-2">
            {notifItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                <div className="flex items-center gap-2.5"><item.icon className="w-4 h-4 text-muted-foreground" /><p className="text-sm font-medium">{item.label}</p></div>
                <Switch checked={notifications[item.id as keyof typeof notifications]} onCheckedChange={(v) => setNotifications((n) => ({ ...n, [item.id]: v }))} aria-label={item.label} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setOnboardingStep(4)}>Back</Button>
          <Button type="submit" size="lg" className="flex-1" disabled={!isValid}>Complete Setup</Button>
        </div>
      </form>
    </div>
  );
}

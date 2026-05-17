import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/authStore";
import { calculatePasswordStrength, cn } from "@/lib/utils";
const schema = z.object({
  fullName: z.string().min(2, "At least 2 characters"),
  email: z.string().email("Valid email required"),
  password: z.string().min(8, "At least 8 characters"),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });
type FormData = z.infer<typeof schema>;
export function Step1Account() {
  const { updateOnboardingData, setOnboardingStep, setUser } = useAuthStore();
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const password = watch("password", "");
  const strength = calculatePasswordStrength(password);
  const onSubmit = (data: FormData) => { updateOnboardingData({ step1: data }); setOnboardingStep(2); };
  const skip = () => { setUser({ id: crypto.randomUUID(), fullName: "Demo User", email: "demo@fittrack.app", createdAt: new Date().toISOString() }); navigate("/dashboard"); };
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6"><h2 className="text-2xl font-bold font-display mb-1">Create your account</h2><p className="text-muted-foreground text-sm">Let us start with the basics.</p></div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="s1-name">Full name</Label>
          <Input id="s1-name" placeholder="Alex Johnson" error={!!errors.fullName} {...register("fullName")} />
          {errors.fullName && <p className="text-destructive text-xs">{errors.fullName.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="s1-email">Email address</Label>
          <Input id="s1-email" type="email" placeholder="alex@example.com" error={!!errors.email} {...register("email")} />
          {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="s1-pwd">Password</Label>
          <div className="relative">
            <Input id="s1-pwd" type={showPwd ? "text" : "password"} placeholder="Min. 8 characters" error={!!errors.password} className="pr-11" {...register("password")} />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle">
              {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {password && <div className="space-y-1"><div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <div key={i} className={cn("h-1 flex-1 rounded-full transition-all", i < strength.score ? strength.color : "bg-muted")} />)}</div><p className="text-xs text-muted-foreground">Strength: <span className="font-medium">{strength.label}</span></p></div>}
          {errors.password && <p className="text-destructive text-xs">{errors.password.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="s1-confirm">Confirm password</Label>
          <div className="relative">
            <Input id="s1-confirm" type={showConfirm ? "text" : "password"} placeholder="Repeat password" error={!!errors.confirmPassword} className="pr-11" {...register("confirmPassword")} />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle confirm">
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-destructive text-xs">{errors.confirmPassword.message}</p>}
        </div>
        <Button type="submit" size="lg" className="w-full mt-2" disabled={!isValid}>Continue</Button>
      </form>
      <button onClick={skip} className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 py-2 transition-colors">Skip to dashboard (demo)</button>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Globe } from "lucide-react";
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
export function SignupForm() {
  const navigate = useNavigate();
  const { updateOnboardingData, setUser } = useAuthStore();
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const password = watch("password", "");
  const strength = calculatePasswordStrength(password);
  const onSubmit = async (data: FormData) => { updateOnboardingData({ step1: data }); navigate("/onboarding"); };
  const handleGoogle = () => { setUser({ id: crypto.randomUUID(), fullName: "Demo User", email: "demo@fittrack.app", createdAt: new Date().toISOString() }); navigate("/dashboard"); };
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8"><h1 className="text-2xl sm:text-3xl font-bold font-display mb-2">Create your account</h1><p className="text-muted-foreground">Start your free fitness journey today.</p></div>
      <Button type="button" variant="outline" size="lg" className="w-full mb-6" onClick={handleGoogle}><Globe className="mr-2 h-4 w-4" />Continue with Google</Button>
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
        <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-3 text-muted-foreground">or continue with email</span></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="Alex Johnson" error={!!errors.fullName} {...register("fullName")} />
          {errors.fullName && <p className="text-destructive text-xs">{errors.fullName.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="alex@example.com" error={!!errors.email} {...register("email")} />
          {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input id="password" type={showPwd ? "text" : "password"} placeholder="Min. 8 characters" error={!!errors.password} className="pr-11" {...register("password")} />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle password">
              {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {password && <div className="space-y-1"><div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <div key={i} className={cn("h-1 flex-1 rounded-full transition-all", i < strength.score ? strength.color : "bg-muted")} />)}</div><p className="text-xs text-muted-foreground">Strength: <span className="font-medium">{strength.label}</span></p></div>}
          {errors.password && <p className="text-destructive text-xs">{errors.password.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <div className="relative">
            <Input id="confirmPassword" type={showConfirm ? "text" : "password"} placeholder="Repeat password" error={!!errors.confirmPassword} className="pr-11" {...register("confirmPassword")} />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle confirm">
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-destructive text-xs">{errors.confirmPassword.message}</p>}
        </div>
        <Button type="submit" size="lg" className="w-full mt-2" loading={isSubmitting}>Create Account</Button>
      </form>
      <p className="text-center text-sm text-muted-foreground mt-6">Already have an account? <Link to="/dashboard" className="font-semibold text-brand-600 hover:underline">Sign in</Link></p>
    </motion.div>
  );
}

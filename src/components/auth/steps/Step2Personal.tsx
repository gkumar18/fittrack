import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";
const schema = z.object({ dateOfBirth: z.string().min(1, "Required"), gender: z.string().min(1, "Required"), height: z.number().min(100).max(250), weight: z.number().min(30).max(300), heightUnit: z.enum(["cm", "ft"]), weightUnit: z.enum(["kg", "lbs"]) });
type FormData = z.infer<typeof schema>;
const genders = [{ id: "male", label: "Male" }, { id: "female", label: "Female" }, { id: "non-binary", label: "Non-binary" }, { id: "prefer-not-to-say", label: "Prefer not to say" }];
export function Step2Personal() {
  const { updateOnboardingData, setOnboardingStep } = useAuthStore();
  const [heightUnit, setHeightUnit] = useState<"cm"|"ft">("cm");
  const [weightUnit, setWeightUnit] = useState<"kg"|"lbs">("kg");
  const { register, handleSubmit, control, watch, setValue, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange", defaultValues: { height: 170, weight: 70, heightUnit: "cm", weightUnit: "kg" } });
  const height = watch("height"); const weight = watch("weight"); const gender = watch("gender");
  const onSubmit = (data: FormData) => { updateOnboardingData({ step2: data }); setOnboardingStep(3); };
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6"><h2 className="text-2xl font-bold font-display mb-1">Personal details</h2><p className="text-muted-foreground text-sm">Help us personalize your experience.</p></div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="dob">Date of birth</Label>
          <Input id="dob" type="date" error={!!errors.dateOfBirth} {...register("dateOfBirth")} />
          {errors.dateOfBirth && <p className="text-destructive text-xs">{errors.dateOfBirth.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Gender</Label>
          <div className="grid grid-cols-2 gap-2">
            {genders.map((g) => <button key={g.id} type="button" onClick={() => setValue("gender", g.id, { shouldValidate: true })} className={cn("px-4 py-2.5 rounded-xl border text-sm font-medium transition-all", gender === g.id ? "border-brand-500 bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400" : "border-border hover:border-brand-300 hover:bg-muted")}>{g.label}</button>)}
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Height: <span className="text-brand-600 font-semibold">{height} {heightUnit}</span></Label>
            <div className="flex rounded-lg border border-border overflow-hidden">
              {(["cm","ft"] as const).map((u) => <button key={u} type="button" onClick={() => { setHeightUnit(u); setValue("heightUnit", u); }} className={cn("px-3 py-1 text-xs font-medium transition-colors", heightUnit === u ? "bg-brand-500 text-white" : "bg-background hover:bg-muted")}>{u}</button>)}
            </div>
          </div>
          <Controller name="height" control={control} render={({ field }) => <Slider min={100} max={250} step={1} value={[field.value]} onValueChange={([v]) => field.onChange(v)} />} />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Weight: <span className="text-brand-600 font-semibold">{weight} {weightUnit}</span></Label>
            <div className="flex rounded-lg border border-border overflow-hidden">
              {(["kg","lbs"] as const).map((u) => <button key={u} type="button" onClick={() => { setWeightUnit(u); setValue("weightUnit", u); }} className={cn("px-3 py-1 text-xs font-medium transition-colors", weightUnit === u ? "bg-brand-500 text-white" : "bg-background hover:bg-muted")}>{u}</button>)}
            </div>
          </div>
          <Controller name="weight" control={control} render={({ field }) => <Slider min={30} max={300} step={0.5} value={[field.value]} onValueChange={([v]) => field.onChange(v)} />} />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setOnboardingStep(1)}>Back</Button>
          <Button type="submit" size="lg" className="flex-1" disabled={!isValid}>Continue</Button>
        </div>
      </form>
    </div>
  );
}

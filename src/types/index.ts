export interface User {
  id: string; fullName: string; email: string;
  username?: string; bio?: string; avatar?: string;
  dateOfBirth?: string; gender?: string;
  height?: number; weight?: number;
  fitnessGoals?: string[]; activityLevel?: string;
  createdAt: string;
}
export interface OnboardingData {
  step1?: { fullName: string; email: string; password: string; confirmPassword: string };
  step2?: { dateOfBirth: string; gender: string; height: number; weight: number; heightUnit: string; weightUnit: string };
  step3?: { fitnessGoals: string[] };
  step4?: { activityLevel: string };
  step5?: { avatar?: string; username: string; bio?: string; notifications: Record<string, boolean> };
}
export interface WorkoutStat { day: string; calories: number; duration: number; workouts: number; }
export interface Exercise { id: string; name: string; sets: number; reps: number; weight?: number; completed: boolean; muscleGroup: string; }

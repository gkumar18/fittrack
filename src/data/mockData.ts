import type { WorkoutStat, Exercise } from "@/types";
export const weeklyStats: WorkoutStat[] = [
  { day: "Mon", calories: 420, duration: 45, workouts: 1 },
  { day: "Tue", calories: 380, duration: 35, workouts: 1 },
  { day: "Wed", calories: 0, duration: 0, workouts: 0 },
  { day: "Thu", calories: 510, duration: 60, workouts: 1 },
  { day: "Fri", calories: 290, duration: 30, workouts: 1 },
  { day: "Sat", calories: 680, duration: 75, workouts: 2 },
  { day: "Sun", calories: 0, duration: 0, workouts: 0 },
];
export const todaysExercises: Exercise[] = [
  { id: "1", name: "Bench Press", sets: 4, reps: 10, weight: 80, completed: true, muscleGroup: "Chest" },
  { id: "2", name: "Pull-ups", sets: 3, reps: 12, completed: true, muscleGroup: "Back" },
  { id: "3", name: "Squat", sets: 4, reps: 8, weight: 100, completed: false, muscleGroup: "Legs" },
  { id: "4", name: "Shoulder Press", sets: 3, reps: 12, weight: 50, completed: false, muscleGroup: "Shoulders" },
  { id: "5", name: "Plank", sets: 3, reps: 1, completed: false, muscleGroup: "Core" },
];
export const dashboardStats = [
  { id: "calories", label: "Calories Burned", value: "2,840", change: "+12%", positive: true, unit: "kcal", icon: "Flame", color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-950/30" },
  { id: "workouts", label: "Workouts This Week", value: "4", change: "+1", positive: true, unit: "sessions", icon: "Dumbbell", color: "text-brand-600", bgColor: "bg-brand-50 dark:bg-brand-950/30" },
  { id: "streak", label: "Current Streak", value: "12", change: "days", positive: true, unit: "days", icon: "Zap", color: "text-violet-600", bgColor: "bg-violet-50 dark:bg-violet-950/30" },
  { id: "goal", label: "Goal Progress", value: "68", change: "+8%", positive: true, unit: "%", icon: "Target", color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
];
export const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "Marathon Runner", avatar: "SJ", avatarColor: "from-pink-400 to-rose-500", rating: 5, quote: "FitTrack completely transformed my training. The analytics helped me improve my marathon time by 18 minutes." },
  { id: 2, name: "Marcus Chen", role: "Strength Coach", avatar: "MC", avatarColor: "from-blue-400 to-indigo-500", rating: 5, quote: "I have tried every fitness app. FitTrack is on another level. My clients love the progress charts." },
  { id: 3, name: "Priya Patel", role: "Yoga Instructor", avatar: "PP", avatarColor: "from-violet-400 to-purple-500", rating: 5, quote: "The flexibility goal tracking is phenomenal. The onboarding experience alone sold me." },
  { id: 4, name: "James Wilson", role: "Busy Professional", avatar: "JW", avatarColor: "from-emerald-400 to-teal-500", rating: 4, quote: "Finally a fitness app that respects my time. I have lost 22 lbs in 4 months." },
];
export const pricingPlans = [
  { id: "free", name: "Free", price: 0, period: "forever", description: "Perfect for getting started", popular: false, features: ["3 workouts per week", "Basic progress tracking", "5 workout templates", "Community access"], limitations: ["No nutrition tracking", "No advanced analytics"], cta: "Get Started Free" },
  { id: "pro", name: "Pro", price: 12, period: "month", description: "For serious fitness enthusiasts", popular: true, features: ["Unlimited workouts", "Advanced analytics", "Nutrition tracking", "100+ templates", "Progress photos", "Priority support"], limitations: [], cta: "Start Pro Trial" },
  { id: "elite", name: "Elite", price: 29, period: "month", description: "The ultimate experience", popular: false, features: ["Everything in Pro", "AI personal coach", "Custom meal plans", "1-on-1 coaching", "White-glove onboarding"], limitations: [], cta: "Go Elite" },
];
export const features = [
  { id: "tracking", icon: "Activity", title: "Smart Workout Tracking", description: "Log every rep, set, and PR with intelligent tracking that learns your patterns.", gradient: "from-brand-400 to-emerald-500" },
  { id: "nutrition", icon: "Apple", title: "Nutrition Intelligence", description: "Scan barcodes, log meals, and get AI-powered macro recommendations.", gradient: "from-orange-400 to-amber-500" },
  { id: "analytics", icon: "BarChart3", title: "Progress Analytics", description: "Beautiful charts showing strength gains and consistency trends.", gradient: "from-violet-400 to-purple-500" },
  { id: "community", icon: "Users", title: "Community and Challenges", description: "Join thousands of members, compete in challenges, share your journey.", gradient: "from-blue-400 to-cyan-500" },
];
export const howItWorksSteps = [
  { step: "01", title: "Create Your Profile", description: "Tell us your fitness goals and preferences in under 5 minutes.", icon: "UserPlus" },
  { step: "02", title: "Set Your Goals", description: "Choose from 6 goal types. We will build your personalized roadmap.", icon: "Target" },
  { step: "03", title: "Track and Progress", description: "Log workouts and meals. Watch analytics update in real-time.", icon: "TrendingUp" },
];

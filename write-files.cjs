const fs = require('fs');
const path = require('path');
const base = 'D:\\fittrack';

function write(filePath, content) {
  const full = path.join(base, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('wrote:', filePath);
}

// tailwind.config.js
write('tailwind.config.js', `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        brand: {
          50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac",
          400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d",
          800: "#166534", 900: "#14532d", 950: "#052e16"
        },
        violet: {
          50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd",
          400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9",
          800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065"
        }
      },
      borderRadius: {
        lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"]
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        "fade-in": { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
`);

// postcss.config.js
write('postcss.config.js', `module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };\n`);

// vite.config.ts
write('vite.config.ts', `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
`);

// tsconfig.json
write('tsconfig.json', `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`);

// index.html
write('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FitTrack - Premium Fitness Platform</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

// public/favicon.svg
write('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#22c55e"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#g)"/>
  <path d="M8 16h4l2-6 4 12 2-6h4" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>
`);

// src/index.css
write('src/index.css', `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 224 71.4% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 224 71.4% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71.4% 4.1%;
    --primary: 142 76% 36%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 220 14.3% 95.9%;
    --secondary-foreground: 220.9 39.3% 11%;
    --muted: 220 14.3% 95.9%;
    --muted-foreground: 220 8.9% 46.1%;
    --accent: 220 14.3% 95.9%;
    --accent-foreground: 220.9 39.3% 11%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 20% 98%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 142 76% 36%;
    --radius: 0.75rem;
  }
  .dark {
    --background: 224 71.4% 4.1%;
    --foreground: 210 20% 98%;
    --card: 224 71.4% 6%;
    --card-foreground: 210 20% 98%;
    --popover: 224 71.4% 4.1%;
    --popover-foreground: 210 20% 98%;
    --primary: 142 76% 45%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 215 27.9% 16.9%;
    --secondary-foreground: 210 20% 98%;
    --muted: 215 27.9% 16.9%;
    --muted-foreground: 217.9 10.6% 64.9%;
    --accent: 215 27.9% 16.9%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 62.8% 50%;
    --destructive-foreground: 210 20% 98%;
    --border: 215 27.9% 16.9%;
    --input: 215 27.9% 16.9%;
    --ring: 142 76% 45%;
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground font-sans antialiased; }
  html { scroll-behavior: smooth; }
  h1,h2,h3,h4,h5,h6 { @apply font-display; }
}

@layer utilities {
  .gradient-text { @apply bg-gradient-to-r from-brand-500 to-violet-500 bg-clip-text text-transparent; }
  .gradient-bg { @apply bg-gradient-to-br from-brand-500 to-violet-600; }
  .glass { @apply bg-white/10 backdrop-blur-md border border-white/20; }
  .section-padding { @apply py-20 px-4 sm:px-6 lg:px-8; }
  .container-max { @apply max-w-7xl mx-auto; }
}
`);

// src/main.tsx
write('src/main.tsx', `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);
`);

// src/App.tsx
write('src/App.tsx', `import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router";
import { Toaster } from "@/components/ui/toaster";
export default function App() {
  return (<><RouterProvider router={router} /><Toaster /></>);
}
`);

// src/lib/utils.ts
write('src/lib/utils.ts', `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}
export function calculatePasswordStrength(password: string): { score: number; label: string; color: string } {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  const levels = [
    { score: 0, label: "Too weak", color: "bg-red-500" },
    { score: 1, label: "Weak", color: "bg-orange-400" },
    { score: 2, label: "Fair", color: "bg-yellow-400" },
    { score: 3, label: "Good", color: "bg-blue-400" },
    { score: 4, label: "Strong", color: "bg-brand-500" },
    { score: 5, label: "Very strong", color: "bg-brand-600" },
  ];
  return levels[score] || levels[0];
}
`);

// src/types/index.ts
write('src/types/index.ts', `export interface User {
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
`);

// src/constants/index.ts
write('src/constants/index.ts', `export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];
export const FITNESS_GOALS = [
  { id: "lose-weight", label: "Lose Weight", emoji: "🔥", description: "Shed fat and get lean" },
  { id: "build-muscle", label: "Build Muscle", emoji: "💪", description: "Gain strength and size" },
  { id: "stay-active", label: "Stay Active", emoji: "🏃", description: "Keep moving daily" },
  { id: "improve-flexibility", label: "Improve Flexibility", emoji: "🧘", description: "Stretch and recover" },
  { id: "eat-healthier", label: "Eat Healthier", emoji: "🥗", description: "Better nutrition habits" },
  { id: "reduce-stress", label: "Reduce Stress", emoji: "🧠", description: "Mental wellness focus" },
];
export const ACTIVITY_LEVELS = [
  { id: "sedentary", label: "Sedentary", description: "Desk job, little to no exercise", emoji: "💼", detail: "< 1x/week" },
  { id: "lightly-active", label: "Lightly Active", description: "Light exercise 1-2 days/week", emoji: "🚶", detail: "1-2x/week" },
  { id: "moderately-active", label: "Moderately Active", description: "Moderate exercise 3-4 days/week", emoji: "🏋️", detail: "3-4x/week" },
  { id: "very-active", label: "Very Active", description: "Hard exercise 5+ days/week", emoji: "⚡", detail: "5+/week" },
  { id: "athlete", label: "Athlete", description: "Intense training twice daily", emoji: "🏆", detail: "2x daily" },
];
export const ONBOARDING_STEPS = [
  { step: 1, label: "Account" },
  { step: 2, label: "Profile" },
  { step: 3, label: "Goals" },
  { step: 4, label: "Activity" },
  { step: 5, label: "Setup" },
];
`);

// src/data/mockData.ts
write('src/data/mockData.ts', `import type { WorkoutStat, Exercise } from "@/types";
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
`);

// src/hooks/useScrolled.ts
write('src/hooks/useScrolled.ts', `import { useState, useEffect } from "react";
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}
`);

// src/hooks/use-toast.ts
write('src/hooks/use-toast.ts', `import * as React from "react";
type ToastProps = { id: string; title?: string; description?: string; variant?: "default" | "destructive" | "success"; open?: boolean; };
const listeners: Array<(state: ToastProps[]) => void> = [];
let toasts: ToastProps[] = [];
let count = 0;
function dispatch(toast: ToastProps) {
  toasts = [toast, ...toasts].slice(0, 3);
  listeners.forEach((l) => l([...toasts]));
  setTimeout(() => { toasts = toasts.filter((t) => t.id !== toast.id); listeners.forEach((l) => l([...toasts])); }, 4000);
}
export function toast(props: Omit<ToastProps, "id">) { dispatch({ ...props, id: String(++count), open: true }); }
export function useToast() {
  const [state, setState] = React.useState<ToastProps[]>(toasts);
  React.useEffect(() => {
    listeners.push(setState);
    return () => { const i = listeners.indexOf(setState); if (i > -1) listeners.splice(i, 1); };
  }, []);
  return { toasts: state, toast, dismiss: (id: string) => { toasts = toasts.filter((t) => t.id !== id); listeners.forEach((l) => l([...toasts])); } };
}
`);

// src/store/authStore.ts
write('src/store/authStore.ts', `import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, OnboardingData } from "@/types";
interface AuthState {
  user: User | null; isAuthenticated: boolean;
  onboardingData: OnboardingData; currentOnboardingStep: number;
  setUser: (user: User) => void; logout: () => void;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
  setOnboardingStep: (step: number) => void; completeOnboarding: () => void;
}
export const useAuthStore = create<AuthState>()(persist((set, get) => ({
  user: null, isAuthenticated: false, onboardingData: {}, currentOnboardingStep: 1,
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false, onboardingData: {}, currentOnboardingStep: 1 }),
  updateOnboardingData: (data) => set((s) => ({ onboardingData: { ...s.onboardingData, ...data } })),
  setOnboardingStep: (step) => set({ currentOnboardingStep: step }),
  completeOnboarding: () => {
    const { onboardingData } = get();
    const user: User = { id: crypto.randomUUID(), fullName: onboardingData.step1?.fullName ?? "Athlete", email: onboardingData.step1?.email ?? "", username: onboardingData.step5?.username, bio: onboardingData.step5?.bio, avatar: onboardingData.step5?.avatar, createdAt: new Date().toISOString() };
    set({ user, isAuthenticated: true });
  },
}), { name: "fittrack-auth" }));
`);

// src/store/uiStore.ts
write('src/store/uiStore.ts', `import { create } from "zustand";
import { persist } from "zustand/middleware";
interface UIState { theme: "light" | "dark"; sidebarCollapsed: boolean; toggleTheme: () => void; toggleSidebar: () => void; }
export const useUIStore = create<UIState>()(persist((set) => ({
  theme: "light", sidebarCollapsed: false,
  toggleTheme: () => set((s) => { const t = s.theme === "light" ? "dark" : "light"; document.documentElement.classList.toggle("dark", t === "dark"); return { theme: t }; }),
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
}), { name: "fittrack-ui", onRehydrateStorage: () => (s) => { if (s?.theme === "dark") document.documentElement.classList.add("dark"); } }));
`);

// src/routes/router.tsx
write('src/routes/router.tsx', `import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import AuthPage from "@/pages/AuthPage";
import OnboardingPage from "@/pages/OnboardingPage";
import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { DashboardLayout } from "@/layouts/DashboardLayout";
export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/onboarding", element: <OnboardingPage /> },
  { path: "/dashboard", element: <DashboardLayout />, children: [{ index: true, element: <DashboardPage /> }] },
  { path: "*", element: <NotFoundPage /> },
]);
`);

// src/layouts/DashboardLayout.tsx
write('src/layouts/DashboardLayout.tsx', `import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardMobileNav } from "@/components/dashboard/DashboardMobileNav";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";
export function DashboardLayout() {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardTopbar />
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><Outlet /></div>
        </main>
      </div>
      <DashboardMobileNav />
    </div>
  );
}
`);

// pages
write('src/pages/LandingPage.tsx', `import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";
import { LandingFooter } from "@/components/landing/LandingFooter";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar /><HeroSection /><SocialProofSection /><FeaturesSection />
      <HowItWorksSection /><TestimonialsSection /><PricingSection /><CTASection /><LandingFooter />
    </div>
  );
}
`);

write('src/pages/AuthPage.tsx', `import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";
export default function AuthPage() {
  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <AuthLayout><SignupForm /></AuthLayout>;
}
`);

write('src/pages/OnboardingPage.tsx', `import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { OnboardingFlow } from "@/components/auth/OnboardingFlow";
export default function OnboardingPage() {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return <OnboardingFlow />;
}
`);

write('src/pages/DashboardPage.tsx', `import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { WorkoutCard } from "@/components/dashboard/WorkoutCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeHeader /><StatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2"><ActivityChart /></div>
        <div className="space-y-6"><QuickActions /><WorkoutCard /></div>
      </div>
    </div>
  );
}
`);

write('src/pages/NotFoundPage.tsx', `import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="text-8xl font-bold font-display gradient-text mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
        <Button asChild><Link to="/"><Home className="mr-2 h-4 w-4" />Back to Home</Link></Button>
      </motion.div>
    </div>
  );
}
`);

// UI Components
write('src/components/ui/button.tsx', `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  { variants: { variant: {
    default: "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 hover:from-brand-600 hover:to-brand-700",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
  }, size: {
    default: "h-11 px-6 py-2", sm: "h-9 rounded-lg px-4 text-xs",
    lg: "h-12 rounded-xl px-8 text-base", xl: "h-14 rounded-xl px-10 text-base", icon: "h-10 w-10",
  }}, defaultVariants: { variant: "default", size: "default" }}
);
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; loading?: boolean; }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} disabled={disabled || loading} {...props}>
      {loading ? <span className="flex items-center gap-2"><svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>{children}</span> : children}
    </Comp>
  );
});
Button.displayName = "Button";
export { Button, buttonVariants };
`);

write('src/components/ui/card.tsx', `import * as React from "react";
import { cn } from "@/lib/utils";
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-200", className)} {...props} />
));
Card.displayName = "Card";
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-xl font-semibold leading-none tracking-tight font-display", className)} {...props} />);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />);
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
`);

write('src/components/ui/input.tsx', `import * as React from "react";
import { cn } from "@/lib/utils";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { error?: boolean; }
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => (
  <input type={type} className={cn("flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200", error && "border-destructive focus-visible:ring-destructive", className)} ref={ref} {...props} />
));
Input.displayName = "Input";
export { Input };
`);

write('src/components/ui/label.tsx', `import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;
export { Label };
`);

write('src/components/ui/progress.tsx', `import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)} {...props}>
    <ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-gradient-to-r from-brand-500 to-violet-500 transition-all duration-500 ease-out rounded-full" style={{ transform: "translateX(-" + (100 - (value || 0)) + "%)" }} />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };
`);

write('src/components/ui/switch.tsx', `import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root className={cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-500 data-[state=unchecked]:bg-input", className)} {...props} ref={ref}>
    <SwitchPrimitives.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
export { Switch };
`);

write('src/components/ui/slider.tsx', `import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-brand-500 to-violet-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-brand-500 bg-background ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 cursor-grab active:cursor-grabbing" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
export { Slider };
`);

write('src/components/ui/badge.tsx', `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors", {
  variants: { variant: {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    destructive: "border-transparent bg-destructive text-destructive-foreground",
    outline: "text-foreground",
    success: "border-transparent bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400",
    gradient: "border-transparent bg-gradient-to-r from-brand-500 to-violet-500 text-white",
  }}, defaultVariants: { variant: "default" }
});
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}
function Badge({ className, variant, ...props }: BadgeProps) { return <div className={cn(badgeVariants({ variant }), className)} {...props} />; }
export { Badge, badgeVariants };
`);

write('src/components/ui/avatar.tsx', `import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(({ className, ...props }, ref) => <AvatarPrimitive.Root ref={ref} className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />);
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(({ className, ...props }, ref) => <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full object-cover", className)} {...props} />);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(({ className, ...props }, ref) => <AvatarPrimitive.Fallback ref={ref} className={cn("flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-violet-500 text-white font-semibold text-sm", className)} {...props} />);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback };
`);

write('src/components/ui/separator.tsx', `import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";
const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root ref={ref} decorative={decorative} orientation={orientation} className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)} {...props} />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator };
`);

write('src/components/ui/toaster.tsx', `import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
export function Toaster() {
  const { toasts, dismiss } = useToast();
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full">
      {toasts.map((t) => (
        <div key={t.id} className={cn("flex items-start gap-3 p-4 rounded-xl border shadow-lg bg-background text-foreground animate-fade-in", t.variant === "destructive" && "border-destructive bg-destructive text-destructive-foreground", t.variant === "success" && "border-brand-200 bg-brand-50 text-brand-900")}>
          <div className="flex-1">
            {t.title && <p className="text-sm font-semibold">{t.title}</p>}
            {t.description && <p className="text-sm opacity-90">{t.description}</p>}
          </div>
          <button onClick={() => dismiss(t.id)} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
        </div>
      ))}
    </div>
  );
}
`);

// Landing components
write('src/components/landing/LandingNavbar.tsx', `import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
export function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform"><Zap className="w-4 h-4 text-white" /></div>
              <span className="text-lg font-bold font-display gradient-text">FitTrack</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((l) => <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>)}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild><Link to="/auth">Sign in</Link></Button>
              <Button size="sm" asChild><Link to="/auth">Get Started Free</Link></Button>
            </div>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed right-0 top-0 h-full w-72 bg-background border-l border-border z-50 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold font-display gradient-text text-lg">FitTrack</span>
                <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-accent" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <nav className="flex flex-col gap-2 flex-1">
                {NAV_LINKS.map((l) => <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-accent transition-colors">{l.label}</a>)}
              </nav>
              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <Button variant="outline" asChild onClick={() => setOpen(false)}><Link to="/auth">Sign in</Link></Button>
                <Button asChild onClick={() => setOpen(false)}><Link to="/auth">Get Started Free</Link></Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
`);

write('src/components/landing/HeroSection.tsx', `import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const cards = [
  { icon: TrendingUp, label: "Progress", value: "+24%", color: "text-brand-500", bg: "bg-brand-50 dark:bg-brand-950/50", pos: "lg:-left-12 top-16 -left-2" },
  { icon: Zap, label: "Streak", value: "12 days", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/50", pos: "lg:-right-12 top-1/2 -right-2" },
  { icon: Users, label: "Community", value: "50k+", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/50", pos: "lg:-left-8 bottom-16 -left-2" },
];
const cv = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-background to-violet-50 dark:from-brand-950/20 dark:via-background dark:to-violet-950/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={cv} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.div variants={iv}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 text-sm font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5" />The Future of Fitness Tracking
              </span>
            </motion.div>
            <motion.h1 variants={iv} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6">
              Train Smarter.{" "}<span className="gradient-text">Live Better.</span><br />Feel Amazing.
            </motion.h1>
            <motion.p variants={iv} className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              FitTrack combines intelligent workout tracking, nutrition planning, and progress analytics into one beautiful platform built for real results.
            </motion.p>
            <motion.div variants={iv} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" asChild><Link to="/auth">Get Started Free<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              <Button size="xl" variant="outline"><Play className="mr-2 h-4 w-4 fill-current" />Watch Demo</Button>
            </motion.div>
            <motion.p variants={iv} className="mt-4 text-sm text-muted-foreground">No credit card required</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden">
                <div className="p-5 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div><p className="text-xs text-muted-foreground">Good morning</p><p className="text-sm font-semibold">Alex Dashboard</p></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold">A</div>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[{ label: "Calories", value: "2,840", icon: "🔥" }, { label: "Workouts", value: "4", icon: "💪" }, { label: "Streak", value: "12d", icon: "⚡" }].map((s) => (
                      <div key={s.label} className="rounded-xl bg-muted/50 p-3 text-center"><div className="text-lg">{s.icon}</div><div className="text-sm font-bold">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Weekly Activity</p>
                    <div className="flex items-end gap-1.5 h-16">
                      {[60, 80, 40, 90, 70, 100, 50].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: h + "%" }} transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }} className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-500 to-violet-500 opacity-80" />
                      ))}
                    </div>
                    <div className="flex justify-between">
                      {["M","T","W","T","F","S","S"].map((d, i) => <span key={i} className="text-[10px] text-muted-foreground flex-1 text-center">{d}</span>)}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs"><span className="font-medium">Monthly Goal</span><span className="text-brand-600 font-semibold">68%</span></div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "68%" }} transition={{ delay: 1, duration: 0.8 }} className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              {cards.map((card, i) => (
                <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.2 }}
                  className={cn("absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-border bg-background shadow-lg animate-float", card.pos)}
                  style={{ animationDelay: i * 0.5 + "s" }}>
                  <div className={cn("p-1.5 rounded-lg", card.bg)}><card.icon className={cn("w-3.5 h-3.5", card.color)} /></div>
                  <div><p className="text-[10px] text-muted-foreground leading-none mb-0.5">{card.label}</p><p className="text-xs font-bold leading-none">{card.value}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`);

write('src/components/landing/SocialProofSection.tsx', `import { motion } from "framer-motion";
const stats = [{ value: "50,000+", label: "Active Users" }, { value: "2M+", label: "Workouts Logged" }, { value: "4.9/5", label: "App Store Rating" }, { value: "98%", label: "User Satisfaction" }];
export function SocialProofSection() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10">Trusted by athletes and fitness enthusiasts worldwide</motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-display gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

write('src/components/landing/FeaturesSection.tsx', `import { motion } from "framer-motion";
import { Activity, Apple, BarChart3, Users } from "lucide-react";
import { features } from "@/data/mockData";
const iconMap = { Activity, Apple, BarChart3, Users } as const;
export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 text-sm font-medium border border-brand-200 dark:border-brand-800 mb-4">Everything you need</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Built for serious results</h2>
          <p className="text-lg text-muted-foreground">Every feature is thoughtfully designed to help you hit your goals faster.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <motion.div key={f.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300">
                <div className={"w-12 h-12 rounded-xl bg-gradient-to-br " + f.gradient + " flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"}>
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-base font-semibold font-display mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`);

write('src/components/landing/HowItWorksSection.tsx', `import { motion } from "framer-motion";
import { UserPlus, Target, TrendingUp } from "lucide-react";
import { howItWorksSteps } from "@/data/mockData";
const iconMap = { UserPlus, Target, TrendingUp } as const;
export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-400 text-sm font-medium border border-violet-200 dark:border-violet-800 mb-4">How it works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Up and running in minutes</h2>
          <p className="text-lg text-muted-foreground">3 simple steps to your first tracked workout.</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-6">
          {howItWorksSteps.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/25">{Icon && <Icon className="w-8 h-8 text-white" />}</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-brand-500 flex items-center justify-center text-xs font-bold text-brand-600">{i + 1}</div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2 tracking-wider uppercase">Step {step.step}</div>
                <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`);

write('src/components/landing/TestimonialsSection.tsx', `import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-medium border border-orange-200 dark:border-orange-800 mb-4">Loved by thousands</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Real people, real results</h2>
          <p className="text-lg text-muted-foreground">Hear from the FitTrack community.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar><AvatarFallback className={"bg-gradient-to-br " + t.avatarColor + " text-white text-xs font-bold"}>{t.avatar}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

write('src/components/landing/PricingSection.tsx', `import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { pricingPlans } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 text-sm font-medium border border-brand-200 dark:border-brand-800 mb-4">Simple pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Choose your plan</h2>
          <p className="text-lg text-muted-foreground">Start free, upgrade when ready.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={cn("relative rounded-2xl border p-8 flex flex-col transition-all duration-300", plan.popular ? "border-brand-500 bg-card shadow-xl shadow-brand-500/10 scale-105" : "border-border bg-card hover:shadow-lg")}>
              {plan.popular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><Badge variant="gradient" className="text-xs px-3 py-1">Most Popular</Badge></div>}
              <div className="mb-6">
                <h3 className="text-xl font-bold font-display mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-display">{plan.price === 0 ? "Free" : "$" + plan.price}</span>
                  {plan.price > 0 && <span className="text-muted-foreground text-sm">/{plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => <li key={f} className="flex items-start gap-2.5 text-sm"><Check className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" /><span>{f}</span></li>)}
                {plan.limitations.map((l) => <li key={l} className="flex items-start gap-2.5 text-sm text-muted-foreground"><X className="w-4 h-4 mt-0.5 shrink-0" /><span>{l}</span></li>)}
              </ul>
              <Button variant={plan.popular ? "default" : "outline"} size="lg" className="w-full" asChild><Link to="/auth">{plan.cta}</Link></Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

write('src/components/landing/CTASection.tsx', `import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-emerald-500 to-violet-600" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          </div>
          <div className="relative text-center text-white px-8 py-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Ready to transform your fitness?</h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">Join over 50,000 users who have already changed their lives with FitTrack.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-white text-brand-700 hover:bg-white/90 shadow-xl font-semibold" asChild>
                <Link to="/auth">Start For Free<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="xl" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20">See all features</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`);

write('src/components/landing/LandingFooter.tsx', `import { Link } from "react-router-dom";
import { Zap, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Community", "Contact", "Status"],
  Legal: ["Privacy", "Terms", "Cookie Policy", "GDPR"],
};
const socials = [{ Icon: Twitter, label: "Twitter" }, { Icon: Instagram, label: "Instagram" }, { Icon: Youtube, label: "YouTube" }, { Icon: Linkedin, label: "LinkedIn" }];
export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md"><Zap className="w-4 h-4 text-white" /></div>
              <span className="text-lg font-bold font-display gradient-text">FitTrack</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-5">The premium fitness platform for people who take their health seriously.</p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label }) => <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center hover:bg-accent transition-colors"><Icon className="w-4 h-4" /></a>)}
            </div>
          </div>
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-sm font-semibold mb-4">{cat}</h4>
              <ul className="space-y-3">{links.map((l) => <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-border mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">2024 FitTrack. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Made with love for the fitness community</p>
        </div>
      </div>
    </footer>
  );
}
`);

// Auth components
write('src/components/auth/AuthLayout.tsx', `import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-brand-600 via-emerald-600 to-violet-700 p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
        <Link to="/" className="relative flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
          <span className="text-xl font-bold font-display text-white">FitTrack</span>
        </Link>
        <div className="relative">
          <h2 className="text-4xl font-bold font-display text-white leading-tight mb-4">Start your fitness<br />journey today</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">Join 50,000+ members transforming their health.</p>
          <div className="space-y-3">
            {["Smart workout and nutrition tracking","AI-powered personalized plans","Real-time progress analytics","Supportive community"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex -space-x-2">
              {["AJ","MK","SR","PL"].map((init) => <div key={init} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white">{init}</div>)}
            </div>
            <div><p className="text-white text-sm font-semibold">50,000+ members</p><p className="text-white/60 text-xs">Joined this month</p></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md"><Zap className="w-4 h-4 text-white" /></div>
            <span className="text-lg font-bold font-display gradient-text">FitTrack</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
`);

write('src/components/auth/SignupForm.tsx', `import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Chrome } from "lucide-react";
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
      <Button type="button" variant="outline" size="lg" className="w-full mb-6" onClick={handleGoogle}><Chrome className="mr-2 h-4 w-4" />Continue with Google</Button>
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
`);

write('src/components/auth/OnboardingProgress.tsx', `import { ONBOARDING_STEPS } from "@/constants";
import { cn } from "@/lib/utils";
export function OnboardingProgress({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  return (
    <div className="px-4 sm:px-8 py-4 bg-background/80">
      <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-3">
        <div className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full transition-all duration-500 ease-out" style={{ width: progress + "%" }} />
      </div>
      <div className="flex items-center justify-between max-w-xl mx-auto">
        {ONBOARDING_STEPS.map((s) => (
          <div key={s.step} className="flex flex-col items-center gap-1">
            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300", s.step < currentStep ? "bg-brand-500 text-white" : s.step === currentStep ? "bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-lg" : "bg-muted text-muted-foreground")}>
              {s.step < currentStep ? <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> : s.step}
            </div>
            <span className={cn("text-[10px] font-medium hidden sm:block", s.step === currentStep ? "text-brand-600" : "text-muted-foreground")}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

write('src/components/auth/OnboardingFlow.tsx', `import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
import { OnboardingProgress } from "./OnboardingProgress";
import { Step1Account } from "./steps/Step1Account";
import { Step2Personal } from "./steps/Step2Personal";
import { Step3Goals } from "./steps/Step3Goals";
import { Step4Activity } from "./steps/Step4Activity";
import { Step5Profile } from "./steps/Step5Profile";
const STEPS = [Step1Account, Step2Personal, Step3Goals, Step4Activity, Step5Profile];
export function OnboardingFlow() {
  const { currentOnboardingStep } = useAuthStore();
  const StepComponent = STEPS[currentOnboardingStep - 1];
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-background to-violet-50 dark:from-brand-950/10 dark:via-background dark:to-violet-950/10 flex flex-col">
      <header className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-border bg-background/80 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md"><Zap className="w-4 h-4 text-white" /></div>
          <span className="text-base font-bold font-display gradient-text">FitTrack</span>
        </Link>
        <span className="text-sm text-muted-foreground font-medium">Step {currentOnboardingStep} of 5</span>
      </header>
      <OnboardingProgress currentStep={currentOnboardingStep} totalSteps={5} />
      <div className="flex-1 flex items-start justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div key={currentOnboardingStep} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }} transition={{ duration: 0.3 }}>
              {StepComponent && <StepComponent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
`);

write('src/components/auth/steps/Step1Account.tsx', `import { useState } from "react";
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
`);

write('src/components/auth/steps/Step2Personal.tsx', `import { useState } from "react";
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
`);

write('src/components/auth/steps/Step3Goals.tsx', `import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { FITNESS_GOALS } from "@/constants";
import { cn } from "@/lib/utils";
export function Step3Goals() {
  const { updateOnboardingData, setOnboardingStep } = useAuthStore();
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => setSelected((p) => p.includes(id) ? p.filter((g) => g !== id) : p.length < 3 ? [...p, id] : p);
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6"><h2 className="text-2xl font-bold font-display mb-1">What are your goals?</h2><p className="text-muted-foreground text-sm">Select up to 3 goals.</p></div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {FITNESS_GOALS.map((goal, i) => {
          const isSel = selected.includes(goal.id);
          return (
            <motion.button key={goal.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} type="button" onClick={() => toggle(goal.id)}
              className={cn("relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all duration-200", isSel ? "border-brand-500 bg-brand-50 dark:bg-brand-950/50" : "border-border hover:border-brand-300 hover:bg-muted")}>
              {isSel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-2 right-2 w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center"><Check className="w-3 h-3 text-white" /></motion.div>}
              <span className="text-2xl">{goal.emoji}</span>
              <div><p className={cn("text-sm font-semibold", isSel && "text-brand-700 dark:text-brand-400")}>{goal.label}</p><p className="text-xs text-muted-foreground">{goal.description}</p></div>
            </motion.button>
          );
        })}
      </div>
      <div className="flex gap-3">
        <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setOnboardingStep(2)}>Back</Button>
        <Button size="lg" className="flex-1" disabled={selected.length === 0} onClick={() => { updateOnboardingData({ step3: { fitnessGoals: selected } }); setOnboardingStep(4); }}>Continue</Button>
      </div>
      <button onClick={() => { updateOnboardingData({ step3: { fitnessGoals: [] } }); setOnboardingStep(4); }} className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 py-1 transition-colors">Skip for now</button>
    </div>
  );
}
`);

write('src/components/auth/steps/Step4Activity.tsx', `import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { ACTIVITY_LEVELS } from "@/constants";
import { cn } from "@/lib/utils";
export function Step4Activity() {
  const { updateOnboardingData, setOnboardingStep } = useAuthStore();
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6"><h2 className="text-2xl font-bold font-display mb-1">Activity level</h2><p className="text-muted-foreground text-sm">Be honest, this helps calibrate your plan.</p></div>
      <div className="space-y-3 mb-6">
        {ACTIVITY_LEVELS.map((level, i) => {
          const isSel = selected === level.id;
          return (
            <motion.button key={level.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} type="button" onClick={() => setSelected(level.id)}
              className={cn("w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200", isSel ? "border-brand-500 bg-brand-50 dark:bg-brand-950/50" : "border-border hover:border-brand-300 hover:bg-muted")}>
              <span className="text-2xl shrink-0">{level.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className={cn("text-sm font-semibold", isSel && "text-brand-700 dark:text-brand-400")}>{level.label}</p>
                  <span className="text-xs text-muted-foreground shrink-0">{level.detail}</span>
                </div>
                <p className="text-xs text-muted-foreground">{level.description}</p>
              </div>
              <div className={cn("w-4 h-4 rounded-full border-2 shrink-0 transition-all", isSel ? "border-brand-500 bg-brand-500" : "border-muted-foreground")} />
            </motion.button>
          );
        })}
      </div>
      <div className="flex gap-3">
        <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setOnboardingStep(3)}>Back</Button>
        <Button size="lg" className="flex-1" disabled={!selected} onClick={() => { updateOnboardingData({ step4: { activityLevel: selected! } }); setOnboardingStep(5); }}>Continue</Button>
      </div>
      <button onClick={() => setOnboardingStep(5)} className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 py-1 transition-colors">Skip for now</button>
    </div>
  );
}
`);

write('src/components/auth/steps/Step5Profile.tsx', `import { useState, useRef } from "react";
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
`);

// Dashboard components
write('src/components/dashboard/DashboardSidebar.tsx', `import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Dumbbell, Apple, TrendingUp, Users, Settings, Zap, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";
import { getInitials, cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Dumbbell, label: "Workouts", href: "/dashboard" },
  { icon: Apple, label: "Nutrition", href: "/dashboard" },
  { icon: TrendingUp, label: "Progress", href: "/dashboard" },
  { icon: Users, label: "Community", href: "/dashboard" },
];
export function DashboardSidebar() {
  const location = useLocation(); const navigate = useNavigate();
  const { user, logout } = useAuthStore(); const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const handleLogout = () => { logout(); navigate("/"); };
  return (
    <motion.aside animate={{ width: sidebarCollapsed ? 72 : 240 }} transition={{ duration: 0.3 }} className="hidden md:flex flex-col bg-card border-r border-border relative shrink-0 overflow-hidden">
      <div className="flex items-center h-16 px-4 border-b border-border shrink-0">
        <AnimatePresence mode="wait">
          {!sidebarCollapsed ? (
            <motion.div key="full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center shadow-md shrink-0"><Zap className="w-3.5 h-3.5 text-white" /></div>
              <span className="text-base font-bold font-display gradient-text whitespace-nowrap">FitTrack</span>
            </motion.div>
          ) : (
            <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center shadow-md"><Zap className="w-3.5 h-3.5 text-white" /></motion.div>
          )}
        </AnimatePresence>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href && item.label === "Dashboard";
          return (
            <Link key={item.label} to={item.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200", isActive ? "bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              <item.icon size={18} className="shrink-0" />
              <AnimatePresence>
                {!sidebarCollapsed && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="whitespace-nowrap overflow-hidden">{item.label}</motion.span>}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-border space-y-1">
        <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
          <Settings size={18} className="shrink-0" />{!sidebarCollapsed && <span>Settings</span>}
        </Link>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-muted/50 mt-2">
          <Avatar className="h-7 w-7 shrink-0"><AvatarImage src={user?.avatar} /><AvatarFallback className="text-xs">{user ? getInitials(user.fullName) : "U"}</AvatarFallback></Avatar>
          {!sidebarCollapsed && (<><div className="flex-1 min-w-0"><p className="text-xs font-semibold truncate">{user?.fullName}</p><p className="text-[10px] text-muted-foreground truncate">{user?.email}</p></div><button onClick={handleLogout} className="text-muted-foreground hover:text-destructive transition-colors" aria-label="Logout"><LogOut size={14} /></button></>)}
        </div>
      </div>
      <button onClick={toggleSidebar} className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center shadow-sm hover:bg-muted transition-colors z-10" aria-label="Toggle sidebar">
        {sidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </motion.aside>
  );
}
`);

write('src/components/dashboard/DashboardMobileNav.tsx', `import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Dumbbell, Apple, TrendingUp, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
const items = [
  { icon: LayoutDashboard, label: "Home", href: "/dashboard" },
  { icon: Dumbbell, label: "Workouts", href: "/dashboard" },
  { icon: Apple, label: "Nutrition", href: "/dashboard" },
  { icon: TrendingUp, label: "Progress", href: "/dashboard" },
  { icon: Settings, label: "Settings", href: "/dashboard" },
];
export function DashboardMobileNav() {
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-t border-border md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item) => {
          const isActive = location.pathname === item.href && item.label === "Home";
          return (
            <Link key={item.label} to={item.href} className={cn("flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-colors", isActive ? "text-brand-600" : "text-muted-foreground")}>
              <item.icon size={20} /><span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
`);

write('src/components/dashboard/DashboardTopbar.tsx', `import { Bell, Sun, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";
import { getInitials } from "@/lib/utils";
export function DashboardTopbar() {
  const { user } = useAuthStore(); const { theme, toggleTheme } = useUIStore();
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 shrink-0">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative flex-1 hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input className="w-full h-9 pl-9 pr-4 rounded-xl bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Search..." aria-label="Search" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">{theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</Button>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell className="h-4 w-4" /><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-500 rounded-full" /></Button>
        <Avatar className="h-8 w-8 cursor-pointer"><AvatarImage src={user?.avatar} /><AvatarFallback className="text-xs">{user ? getInitials(user.fullName) : "U"}</AvatarFallback></Avatar>
      </div>
    </header>
  );
}
`);

write('src/components/dashboard/WelcomeHeader.tsx', `import { motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
function getGreeting() { const h = new Date().getHours(); if (h < 12) return "Good morning"; if (h < 17) return "Good afternoon"; return "Good evening"; }
export function WelcomeHeader() {
  const { user } = useAuthStore();
  const firstName = user?.fullName?.split(" ")[0] ?? "Athlete";
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between flex-wrap gap-4">
      <div>
        <p className="text-muted-foreground text-sm mb-1">{today}</p>
        <h1 className="text-2xl sm:text-3xl font-bold font-display">{getGreeting()}, <span className="gradient-text">{firstName}</span> 👋</h1>
        <p className="text-muted-foreground mt-1 text-sm">You are on a 12-day streak. Keep it up!</p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-50 to-violet-50 dark:from-brand-950/30 dark:to-violet-950/30 border border-brand-200 dark:border-brand-800">
        <span className="text-xl">⚡</span>
        <div><p className="text-xs text-muted-foreground">Current Streak</p><p className="text-sm font-bold text-brand-700 dark:text-brand-400">12 days</p></div>
      </div>
    </motion.div>
  );
}
`);

write('src/components/dashboard/StatsGrid.tsx', `import { motion } from "framer-motion";
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
`);

write('src/components/dashboard/ActivityChart.tsx', `import { motion } from "framer-motion";
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
`);

write('src/components/dashboard/WorkoutCard.tsx', `import { useState } from "react";
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
`);

write('src/components/dashboard/QuickActions.tsx', `import { motion } from "framer-motion";
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
`);

console.log('\n✅ ALL FILES WRITTEN SUCCESSFULLY!\n');
console.log('Now run: npm run dev');
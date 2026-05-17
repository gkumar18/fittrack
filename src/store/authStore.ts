import { create } from "zustand";
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

import { create } from "zustand";
import { persist } from "zustand/middleware";
interface UIState { theme: "light" | "dark"; sidebarCollapsed: boolean; toggleTheme: () => void; toggleSidebar: () => void; }
export const useUIStore = create<UIState>()(persist((set) => ({
  theme: "light", sidebarCollapsed: false,
  toggleTheme: () => set((s) => { const t = s.theme === "light" ? "dark" : "light"; document.documentElement.classList.toggle("dark", t === "dark"); return { theme: t }; }),
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
}), { name: "fittrack-ui", onRehydrateStorage: () => (s) => { if (s?.theme === "dark") document.documentElement.classList.add("dark"); } }));

import { type ClassValue, clsx } from "clsx";
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

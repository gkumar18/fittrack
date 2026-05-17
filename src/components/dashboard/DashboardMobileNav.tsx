import { Link, useLocation } from "react-router-dom";
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

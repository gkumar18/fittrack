import { Link, useLocation } from "react-router-dom";
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

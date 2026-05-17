import { Bell, Sun, Moon, Search } from "lucide-react";
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

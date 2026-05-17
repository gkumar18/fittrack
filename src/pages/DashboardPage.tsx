import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
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

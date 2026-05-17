import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { OnboardingFlow } from "@/components/auth/OnboardingFlow";
export default function OnboardingPage() {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return <OnboardingFlow />;
}

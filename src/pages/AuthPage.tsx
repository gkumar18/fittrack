import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";
export default function AuthPage() {
  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <AuthLayout><SignupForm /></AuthLayout>;
}

import { createBrowserRouter } from "react-router-dom";
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

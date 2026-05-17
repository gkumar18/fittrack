import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-brand-600 via-emerald-600 to-violet-700 p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
        <Link to="/" className="relative flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
          <span className="text-xl font-bold font-display text-white">FitTrack</span>
        </Link>
        <div className="relative">
          <h2 className="text-4xl font-bold font-display text-white leading-tight mb-4">Start your fitness<br />journey today</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">Join 50,000+ members transforming their health.</p>
          <div className="space-y-3">
            {["Smart workout and nutrition tracking","AI-powered personalized plans","Real-time progress analytics","Supportive community"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex -space-x-2">
              {["AJ","MK","SR","PL"].map((init) => <div key={init} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white">{init}</div>)}
            </div>
            <div><p className="text-white text-sm font-semibold">50,000+ members</p><p className="text-white/60 text-xs">Joined this month</p></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md"><Zap className="w-4 h-4 text-white" /></div>
            <span className="text-lg font-bold font-display gradient-text">FitTrack</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

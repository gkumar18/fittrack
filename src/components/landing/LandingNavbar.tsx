import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
export function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform"><Zap className="w-4 h-4 text-white" /></div>
              <span className="text-lg font-bold font-display gradient-text">FitTrack</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((l) => <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>)}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild><Link to="/auth">Sign in</Link></Button>
              <Button size="sm" asChild><Link to="/auth">Get Started Free</Link></Button>
            </div>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed right-0 top-0 h-full w-72 bg-background border-l border-border z-50 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold font-display gradient-text text-lg">FitTrack</span>
                <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-accent" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <nav className="flex flex-col gap-2 flex-1">
                {NAV_LINKS.map((l) => <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-accent transition-colors">{l.label}</a>)}
              </nav>
              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <Button variant="outline" asChild onClick={() => setOpen(false)}><Link to="/auth">Sign in</Link></Button>
                <Button asChild onClick={() => setOpen(false)}><Link to="/auth">Get Started Free</Link></Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

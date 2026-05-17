import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-emerald-500 to-violet-600" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          </div>
          <div className="relative text-center text-white px-8 py-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Ready to transform your fitness?</h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">Join over 50,000 users who have already changed their lives with FitTrack.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-white text-brand-700 hover:bg-white/90 shadow-xl font-semibold" asChild>
                <Link to="/auth">Start For Free<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="xl" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20">See all features</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

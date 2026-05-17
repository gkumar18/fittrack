import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-medium border border-orange-200 dark:border-orange-800 mb-4">Loved by thousands</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">Real people, real results</h2>
          <p className="text-lg text-muted-foreground">Hear from the FitTrack community.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar><AvatarFallback className={"bg-gradient-to-br " + t.avatarColor + " text-white text-xs font-bold"}>{t.avatar}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

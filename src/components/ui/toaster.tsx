import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
export function Toaster() {
  const { toasts, dismiss } = useToast();
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full">
      {toasts.map((t) => (
        <div key={t.id} className={cn("flex items-start gap-3 p-4 rounded-xl border shadow-lg bg-background text-foreground animate-fade-in", t.variant === "destructive" && "border-destructive bg-destructive text-destructive-foreground", t.variant === "success" && "border-brand-200 bg-brand-50 text-brand-900")}>
          <div className="flex-1">
            {t.title && <p className="text-sm font-semibold">{t.title}</p>}
            {t.description && <p className="text-sm opacity-90">{t.description}</p>}
          </div>
          <button onClick={() => dismiss(t.id)} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
        </div>
      ))}
    </div>
  );
}

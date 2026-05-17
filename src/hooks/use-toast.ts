import * as React from "react";
type ToastProps = { id: string; title?: string; description?: string; variant?: "default" | "destructive" | "success"; open?: boolean; };
const listeners: Array<(state: ToastProps[]) => void> = [];
let toasts: ToastProps[] = [];
let count = 0;
function dispatch(toast: ToastProps) {
  toasts = [toast, ...toasts].slice(0, 3);
  listeners.forEach((l) => l([...toasts]));
  setTimeout(() => { toasts = toasts.filter((t) => t.id !== toast.id); listeners.forEach((l) => l([...toasts])); }, 4000);
}
export function toast(props: Omit<ToastProps, "id">) { dispatch({ ...props, id: String(++count), open: true }); }
export function useToast() {
  const [state, setState] = React.useState<ToastProps[]>(toasts);
  React.useEffect(() => {
    listeners.push(setState);
    return () => { const i = listeners.indexOf(setState); if (i > -1) listeners.splice(i, 1); };
  }, []);
  return { toasts: state, toast, dismiss: (id: string) => { toasts = toasts.filter((t) => t.id !== id); listeners.forEach((l) => l([...toasts])); } };
}

import { cn } from "@/lib/utils";

export function HelpTag({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}

export function helpFilterChipClass(active: boolean) {
  return cn(
    "rounded-full px-3 py-1 text-xs font-medium transition-colors",
    active
      ? "bg-primary text-primary-foreground shadow-sm"
      : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
  );
}

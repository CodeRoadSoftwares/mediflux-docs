import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  outline:
    "border border-border bg-transparent text-foreground",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const mobileMenuItemClass = cn(
  "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
  "text-muted-foreground hover:text-foreground bg-accent/50 hover:bg-accent",
  "transition-colors"
);

interface ThemeToggleProps {
  variant?: "icon" | "menu";
  className?: string;
}

export function ThemeToggle({ variant = "icon", className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  if (!mounted) {
    return variant === "menu" ? (
      <div className={cn(mobileMenuItemClass, "h-10", className)} />
    ) : (
      <div className="h-8 w-8" />
    );
  }

  if (variant === "menu") {
    return (
      <button
        type="button"
        onClick={toggle}
        className={cn(mobileMenuItemClass, "justify-between cursor-pointer", className)}
        aria-label="Toggle theme"
      >
        <span>Appearance</span>
        <Icon className="h-4 w-4 shrink-0" aria-hidden />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md",
        "text-muted-foreground hover:text-foreground hover:bg-accent",
        "transition-colors duration-200 bg-accent/50 hover:bg-accent cursor-pointer",
        className
      )}
      aria-label="Toggle theme"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

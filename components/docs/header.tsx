"use client";

import Link from "next/link";
import { Search, Menu, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SupportPopover } from "./support-popover";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuToggle?: () => void;
  onSearchOpen?: () => void;
}

export function Header({ onMenuToggle, onSearchOpen }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full shrink-0 border-b border-border/50 bg-background",
        ""
      )}
    >
      <div className="docs-container flex h-16 items-center">
        <button
          onClick={onMenuToggle}
          className={cn(
            "mr-3 inline-flex h-8 w-8 items-center justify-center rounded-md xl:hidden",
            "text-muted-foreground hover:text-foreground hover:bg-accent",
            "transition-colors"
          )}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" className="mr-6 flex items-center gap-2 text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">M</span>
          </div>
          <span className="hidden font-semibold sm:inline-block">MediFlux</span>
          <span className="hidden rounded-md border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-block">
            Docs
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-center gap-2 max-md:justify-end">
          <button
            onClick={onSearchOpen}
            className={cn(
              "inline-flex h-9 items-center gap-2 rounded-md border px-3",
              "text-sm text-muted-foreground",
              "hover:bg-accent hover:text-foreground",
              "transition-colors duration-200",
              "w-full max-w-xs justify-between sm:max-w-sm md:max-w-md lg:w-72"
            )}
          >
            <span className="flex min-w-0 items-center gap-2">
              <Search className="h-4 w-4 shrink-0" />
              <span className="truncate hidden sm:inline">Search docs...</span>
              <span className="truncate sm:hidden">Search...</span>
            </span>
            <kbd className="pointer-events-none hidden shrink-0 rounded border bg-muted px-1.5 py-0.5 text-xs font-medium md:inline-block">
              ^K
            </kbd>
          </button>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <SupportPopover />

          <Link
            href="https://demo.mediflux.in"
            className={cn(
              "inline-flex items-center gap-1 rounded-md px-4 py-1.5 text-sm font-medium",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90",
              "transition-colors duration-200"
            )}
          >
            Free Demo
            <ChevronRight className="h-4 w-4" />
          </Link>

          <ThemeToggle className="hidden xl:inline-flex" />
        </div>
      </div>
    </header>
  );
}

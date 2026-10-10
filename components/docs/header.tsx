"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SupportPopover } from "./support-popover";
import { cn } from "@/lib/utils";
import favicon from "@/app/favicon.png";

const NAV_TABS = [
  {
    href: "/docs/introduction",
    label: "Documentation",
    isActive: (pathname: string) =>
      pathname === "/" || pathname.startsWith("/docs"),
  },
  {
    href: "/help",
    label: "Help & FAQs",
    isActive: (pathname: string) => pathname.startsWith("/help"),
  },
] as const;

interface HeaderProps {
  onMenuToggle?: () => void;
  onSearchOpen?: () => void;
  variant?: "docs" | "help";
}

function NavTabs() {
  const pathname = usePathname();

  return (
    <nav
      className="flex h-10 items-end gap-6"
      aria-label="Site sections"
    >
      {NAV_TABS.map((tab) => {
        const active = tab.isActive(pathname);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative inline-flex h-10 items-center text-sm transition-colors",
              active
                ? "font-medium text-heading"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
            {active && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-heading" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function Header({
  onMenuToggle,
  onSearchOpen,
  variant = "docs",
}: HeaderProps) {
  const isDocs = variant === "docs";

  return (
    <header className="sticky top-0 z-50 w-full shrink-0 border-b border-border/50 bg-background">
      <div className="docs-container flex h-16 items-center">
        {isDocs && (
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
        )}

        <div
          className={cn(
            "mr-3 flex shrink-0 items-center sm:mr-4",
            isDocs && "xl:mr-0 xl:w-[var(--docs-sidebar-width)] xl:pl-4 xl:pr-2"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-2 text-foreground"
            style={{ paddingLeft: 8 }}
          >
            <Image
              src={favicon}
              alt="MediFlux"
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 rounded-md bg-primary"
              priority
            />
            <span className="hidden font-semibold sm:inline-block">MediFlux Docs</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2 max-md:justify-end">
          {isDocs && (
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
          )}
        </div>

        <div
          className={cn(
            "items-center gap-2",
            isDocs ? "hidden md:flex" : "ml-2 flex"
          )}
        >
          <SupportPopover />

          <Link
            href="https://demo.mediflux.in"
            className={cn(
              "inline-flex items-center gap-1 rounded-md px-4 py-1.5 text-sm font-medium",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90",
              "transition-colors duration-200",
              !isDocs && "max-sm:hidden"
            )}
          >
            Free Demo
            <ChevronRight className="h-4 w-4" />
          </Link>

          <ThemeToggle className={isDocs ? "hidden xl:inline-flex" : undefined} />
        </div>
      </div>

      <div className="docs-container">
        <div className="px-2 xl:pl-4">
          <NavTabs />
        </div>
      </div>
    </header>
  );
}

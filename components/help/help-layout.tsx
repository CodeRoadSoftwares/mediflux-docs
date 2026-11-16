"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/docs/header";
import { cn } from "@/lib/utils";

export function HelpLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHelpRoot = pathname === "/help" || pathname === "/help/";

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("docs-scrollbar");
    body.classList.add("docs-scrollbar");
    return () => {
      html.classList.remove("docs-scrollbar");
      body.classList.remove("docs-scrollbar");
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-clip bg-background">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-light),_transparent_75%)]"
        aria-hidden
      />
      <Header variant="help" />
      <div className="relative docs-container">
        <main
          className={cn(
            "mx-auto w-full",
            isHelpRoot
              ? "max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
              : "max-w-[1600px] px-0 py-8 sm:py-10"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

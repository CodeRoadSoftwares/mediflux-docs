"use client";

import { useEffect } from "react";
import { Header } from "@/components/docs/header";

export function HelpLayoutClient({ children }: { children: React.ReactNode }) {
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
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-light),_transparent_70%)]"
        aria-hidden
      />
      <Header variant="help" />
      <div className="relative docs-container">
        <main className="mx-auto w-full max-w-3xl px-2 py-10 sm:px-4 sm:py-14">
          {children}
        </main>
      </div>
    </div>
  );
}

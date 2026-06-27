"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronUp, TableOfContents } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobileBottomBars } from "@/lib/mobile-bottom-bars-context";
import { Toc } from "./toc";

interface TocItem {
  title: ReactNode;
  url: string;
  depth: number;
}

interface TocBottomBarProps {
  toc: TocItem[];
}

export function TocBottomBar({ toc }: TocBottomBarProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { barsVisible } = useMobileBottomBars();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!barsVisible) setOpen(false);
  }, [barsVisible]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (toc.length === 0) return null;

  const bar = (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60] xl:hidden pointer-events-none",
        "transition-transform duration-300 ease-out",
        barsVisible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!barsVisible && !open}
    >
      <div className="pointer-events-auto">
        <div className="docs-shell">
          <div className="min-w-0 flex-1">
            {open && (
              <div
                id="docs-toc-bottom-panel"
                className={cn(
                  "docs-scrollbar max-h-[min(50vh,320px)] overflow-y-auto",
                  "border-t border-border bg-background py-3 shadow-lg px-2 sm:px-4"
                )}
              >
                <Toc
                  toc={toc}
                  hideTitle
                  onNavigate={() => setOpen(false)}
                />
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "flex w-full items-center justify-between gap-3",
                "border-t border-border bg-background/95 py-3 px-2 sm:px-4",
                "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
                "text-sm font-medium text-foreground backdrop-blur-sm",
                "cursor-pointer transition-colors hover:bg-accent/50"
              )}
              aria-expanded={open}
              aria-controls="docs-toc-bottom-panel"
            >
              <span className="flex items-center gap-2">
                <TableOfContents className="h-4 w-4 text-muted-foreground" />
                On this page
              </span>
              <ChevronUp
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(bar, document.body);
}

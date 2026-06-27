"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  title: ReactNode;
  url: string;
  depth: number;
}

interface TocProps {
  toc: TocItem[];
  hideTitle?: boolean;
  onNavigate?: () => void;
}

/** Matches .mdx-content heading scroll-margin-top */
const SCROLL_OFFSET = 80;

export function Toc({ toc, hideTitle, onNavigate }: TocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.url.slice(1)))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    // Immediate sync when TOC mounts (e.g. bottom bar opens mid-page)
    const syncActiveHeading = () => {
      for (let i = headings.length - 1; i >= 0; i--) {
        if (headings[i].getBoundingClientRect().top <= SCROLL_OFFSET) {
          setActiveId(headings[i].id);
          return;
        }
      }
      setActiveId(headings[0].id);
    };

    syncActiveHeading();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -75% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observerRef.current?.observe(heading));

    return () => observerRef.current?.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <div className="space-y-2">
      {!hideTitle && (
        <p className="text-sm font-semibold">On this page</p>
      )}
      <nav className="flex flex-col gap-0.5" aria-label="Table of contents">
        {toc.map((item) => {
          const id = item.url.slice(1);
          return (
            <a
              key={item.url}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  setActiveId(id);
                  window.history.pushState(null, "", item.url);
                  onNavigate?.();
                }
              }}
              className={cn(
                "block py-0.5 text-[13px] leading-relaxed transition-colors duration-150",
                "hover:text-foreground",
                activeId === id
                  ? "font-bold text-foreground"
                  : "text-muted-foreground",
                item.depth === 3 && "pl-3",
                item.depth === 4 && "pl-6",
                item.depth >= 5 && "pl-9"
              )}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

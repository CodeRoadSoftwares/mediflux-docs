"use client";

import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, X, Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { usePageMetaMap, type DocPageMeta } from "@/lib/docs-icon-context";
import { LucideIcon, resolvePageMetaFromMap } from "@/components/mdx/card-utils";

import type { SearchItem } from "@/lib/search-index";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
  searchIndex: SearchItem[];
}

const RECENT_KEY = "mediflux-docs-recent-searches";
const MAX_RECENT = 5;

function resolvePageIcon(
  item: SearchItem,
  pageMetaMap: Record<string, DocPageMeta>
) {
  if (item.icon) return item.icon;

  const pageUrl = item.url.split("#")[0];
  const meta = resolvePageMetaFromMap(pageUrl, pageMetaMap);
  return meta?.icon;
}

function getSearchableText(item: SearchItem) {
  if (item.type === "heading") {
    return item.headingText ?? item.title;
  }
  return item.title;
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightQuery(text: string, query: string) {
  const words = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegex);

  if (words.length === 0) return text;

  const pattern = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, i) => {
    const isMatch = words.some(
      (word) => part.toLowerCase() === word.toLowerCase()
    );
    if (!isMatch) return part;

    return (
      <span key={i} className="font-bold text-primary underline">
        {part}
      </span>
    );
  });
}

export function SearchDialog({ open, onClose, searchIndex }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pageMetaMap = usePageMetaMap();

  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_KEY);
      if (stored) setRecentSearches(JSON.parse(stored));
    } catch {}
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/);

    const matches = searchIndex.filter((item) => {
      const searchable = getSearchableText(item).toLowerCase();
      return words.every((word) => searchable.includes(word));
    });

    const pages = matches.filter((item) => item.type === "page");
    const headings = matches.filter((item) => item.type === "heading");

    return [...pages, ...headings].slice(0, 15);
  }, [query, searchIndex]);

  const displayItems = query.trim() ? results : recentSearches;

  const navigate = useCallback(
    (item: SearchItem) => {
      const icon =
        item.type === "page" ? resolvePageIcon(item, pageMetaMap) : undefined;
      const enriched = icon ? { ...item, icon } : item;
      const updated = [enriched, ...recentSearches.filter((r) => r.url !== item.url)].slice(
        0,
        MAX_RECENT
      );
      setRecentSearches(updated);
      try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
      } catch {}
      router.push(item.url);
      onClose();
      setQuery("");
    },
    [router, onClose, recentSearches, pageMetaMap]
  );

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, displayItems.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && displayItems[activeIndex]) {
        e.preventDefault();
        navigate(displayItems[activeIndex]);
      }
    },
    [activeIndex, displayItems, navigate]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.querySelector("[data-active='true']");
      active?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-4 top-[15%] z-[100] mx-auto max-w-xl overflow-hidden rounded-xl border bg-popover shadow-2xl"
          >
            <div className="flex items-center border-b px-4">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 border-0 bg-transparent px-3 py-3 text-sm shadow-none ring-0 !outline-none focus:border-0 focus:shadow-none focus:ring-0 focus:!outline-none focus-visible:border-0 focus-visible:shadow-none focus-visible:ring-0 focus-visible:!outline-none placeholder:text-muted-foreground"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div ref={listRef} className="max-h-80 overflow-y-auto p-2">
              {!query.trim() && recentSearches.length > 0 && (
                <div className="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                  Recent
                </div>
              )}

              {displayItems.length > 0 ? (
                displayItems.map((item, i) => {
                  const pageIcon =
                    item.type === "page"
                      ? resolvePageIcon(item, pageMetaMap)
                      : undefined;

                  return (
                    <button
                      key={`${item.url}-${i}`}
                      data-active={i === activeIndex}
                      onClick={() => navigate(item)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        i === activeIndex
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.type === "heading" ? (
                        <Hash className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                      ) : pageIcon ? (
                        <LucideIcon
                          name={pageIcon}
                          className="mt-0.5 h-4 w-4 shrink-0 opacity-80"
                        />
                      ) : (
                        <span className="size-4 shrink-0" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium text-foreground">
                          {query.trim()
                            ? highlightQuery(item.title, query)
                            : item.title}
                        </div>
                        {(item.breadcrumb ?? item.description) && (
                          <div className="truncate text-xs text-muted-foreground">
                            {query.trim()
                              ? highlightQuery(
                                  item.breadcrumb ?? item.description ?? "",
                                  query
                                )
                              : (item.breadcrumb ?? item.description)}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  );
                })
              ) : query.trim() ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  Type to search the documentation
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t px-4 py-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">↑↓</kbd>
                <span>Navigate</span>
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">↵</kbd>
                <span>Open</span>
              </div>
              <div>
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">Esc</kbd>
                <span className="ml-1">Close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

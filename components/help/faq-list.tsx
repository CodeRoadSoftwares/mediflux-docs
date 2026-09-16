"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, SearchX, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { HelpTag, helpFilterChipClass } from "@/components/help/chip";
import type { HelpFaqItem } from "@/lib/help";

interface HelpFaqListProps {
  items: HelpFaqItem[];
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
      <mark key={i} className="rounded-sm bg-primary/15 font-semibold text-primary">
        {part}
      </mark>
    );
  });
}

function getMatchExcerpt(text: string, query: string) {
  const words = query.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0 || !text) return undefined;

  const lower = text.toLowerCase();
  let matchIndex = -1;
  let matchLength = 0;

  for (const word of words) {
    const index = lower.indexOf(word.toLowerCase());
    if (index >= 0) {
      matchIndex = index;
      matchLength = word.length;
      break;
    }
  }

  if (matchIndex < 0) return undefined;

  const start = Math.max(0, matchIndex - 36);
  const end = Math.min(text.length, matchIndex + matchLength + 72);
  const slice = text.slice(start, end).trim();
  return `${start > 0 ? "…" : ""}${slice}${end < text.length ? "…" : ""}`;
}

function visibleFieldsContainQuery(item: HelpFaqItem, query: string) {
  const haystack = [item.title, item.description ?? "", item.breadcrumb]
    .join(" ")
    .toLowerCase();
  return query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

function sectionName(item: HelpFaqItem) {
  return item.breadcrumb.split(" › ")[0] || "General";
}

function groupFaqs(items: HelpFaqItem[]) {
  const order: string[] = [];
  const map = new Map<string, HelpFaqItem[]>();

  for (const item of items) {
    const name = sectionName(item);
    if (!map.has(name)) {
      map.set(name, []);
      order.push(name);
    }
    map.get(name)!.push(item);
  }

  return order.map((name) => ({ name, items: map.get(name)! }));
}

export function HelpFaqList({ items }: HelpFaqListProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const item of items) {
      for (const tag of item.tags) tags.add(tag);
    }
    return [...tags].sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/).filter(Boolean);

    return items.filter((item) => {
      if (activeTag && !item.tags.includes(activeTag)) return false;
      if (words.length === 0) return true;

      const haystack = [
        item.title,
        item.description ?? "",
        item.breadcrumb,
        item.searchText,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      return words.every((word) => haystack.includes(word));
    });
  }, [items, query, activeTag]);

  const groups = useMemo(() => groupFaqs(filtered), [filtered]);
  const isFiltered = Boolean(query.trim() || activeTag);

  return (
    <div>
      <div className="sticky top-[var(--docs-header-height)] z-20 -mx-2 space-y-3 bg-background/80 px-2 py-3 backdrop-blur-md sm:-mx-4 sm:px-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, GST, bills, login…"
            aria-label="Search FAQs"
            className={cn(
              "h-12 w-full rounded-xl border border-border bg-card py-2 pl-11 pr-11 text-sm shadow-sm",
              "placeholder:text-muted-foreground",
              "outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20"
            )}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={helpFilterChipClass(activeTag === null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  setActiveTag((current) => (current === tag ? null : tag))
                }
                className={helpFilterChipClass(activeTag === tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {isFiltered
            ? `${filtered.length} of ${items.length} questions`
            : `${items.length} question${items.length === 1 ? "" : "s"}`}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-border px-6 py-14 text-center">
          <SearchX className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-3 font-medium text-heading">No matching questions</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try another search
            {query ? <> for &ldquo;{query}&rdquo;</> : null}
            {activeTag ? <> in &ldquo;{activeTag}&rdquo;</> : null}, or contact
            support below.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-8">
          {groups.map((group) => (
            <section key={group.name}>
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {group.name}
                </h2>
                <span className="text-xs text-muted-foreground">
                  {group.items.length}
                </span>
              </div>
              <ul className="grid gap-2.5">
                {group.items.map((item) => {
                  const excerpt =
                    query.trim() && !visibleFieldsContainQuery(item, query)
                      ? getMatchExcerpt(item.searchText, query)
                      : undefined;

                  return (
                    <li key={item.url}>
                      <Link
                        href={item.url}
                        className={cn(
                          "group flex items-start gap-3 rounded-xl border border-border bg-card p-4",
                          "shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors hover:border-primary"
                        )}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-[15px] font-medium leading-snug text-heading">
                            {query.trim()
                              ? highlightQuery(item.title, query)
                              : item.title}
                          </p>
                          {item.description && (
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {query.trim()
                                ? highlightQuery(item.description, query)
                                : item.description}
                            </p>
                          )}
                          {excerpt && (
                            <p className="mt-2 border-l-2 border-primary/30 pl-3 text-sm text-muted-foreground">
                              {highlightQuery(excerpt, query)}
                            </p>
                          )}
                          {item.tags.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {item.tags.map((tag) => (
                                <HelpTag key={tag}>{tag}</HelpTag>
                              ))}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

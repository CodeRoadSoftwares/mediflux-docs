"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Check,
  Compass,
  Copy,
  Package,
  Receipt,
  ThumbsDown,
  ThumbsUp,
  Truck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HELP_CATEGORIES, FAQ_RECORDS, type CategoryId } from "@/lib/help-faqs-data";
import { HelpSupportMiniCard } from "@/components/help/help-support-mini-card";
import type { RelatedDoc } from "@/lib/help";

interface HelpArticleTocItem {
  title: string;
  url: string;
  depth: number;
}

export interface HelpArticleSibling {
  id: string;
  title: string;
  url: string;
}

interface HelpArticleLayoutProps {
  children: ReactNode;
  category?: {
    id: CategoryId;
    name: string;
  };
  siblings: HelpArticleSibling[];
  currentQuestionId: string;
  toc: HelpArticleTocItem[];
  related: RelatedDoc[];
  readingTime: number;
  updatedAt?: string;
}

const CATEGORY_ICONS: Record<
  CategoryId,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  "getting-started": Compass,
  "account-users": Users,
  "billing-gst": Receipt,
  "inventory-expiry": Package,
  "purchases-suppliers": Truck,
  "sales-reports": BarChart3,
};

const HEADER_OFFSET = 128;
const MAX_SIBLINGS = 8;

function HelpArticleToc({ items }: { items: HelpArticleTocItem[] }) {
  const [activeUrl, setActiveUrl] = useState(items[0]?.url ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.url.slice(1)))
      .filter((heading): heading is HTMLElement => heading instanceof HTMLElement);
    if (headings.length === 0) return;

    const updateActiveHeading = () => {
      const current =
        [...headings]
          .reverse()
          .find((heading) => heading.getBoundingClientRect().top <= HEADER_OFFSET) ??
        headings[0];
      setActiveUrl(`#${current.id}`);
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);
    return () => {
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="space-y-2">
      <h2 className="text-sm font-semibold text-heading">On this page</h2>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              onClick={(event) => {
                event.preventDefault();
                const heading = document.getElementById(item.url.slice(1));
                if (!heading) return;
                window.scrollTo({
                  top: window.scrollY + heading.getBoundingClientRect().top - HEADER_OFFSET,
                  behavior: "smooth",
                });
                window.history.pushState(null, "", item.url);
                setActiveUrl(item.url);
              }}
              aria-current={activeUrl === item.url ? "location" : undefined}
              className={cn(
                "block rounded-md py-1 text-[13px] leading-relaxed transition-colors",
                "break-words hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                item.depth === 3 && "pl-3",
                activeUrl === item.url
                  ? "font-semibold text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HelpArticleFeedback({ questionId }: { questionId: string }) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = sessionStorage.getItem("mediflux_faq_votes");
        if (!stored) return;
        const votes = JSON.parse(stored) as Record<string, "yes" | "no">;
        setVote(votes[questionId] ?? null);
      } catch {
        setVote(null);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [questionId]);

  const handleVote = (nextVote: "yes" | "no") => {
    setVote(nextVote);
    try {
      const stored = sessionStorage.getItem("mediflux_faq_votes");
      const votes = stored
        ? (JSON.parse(stored) as Record<string, "yes" | "no">)
        : {};
      sessionStorage.setItem(
        "mediflux_faq_votes",
        JSON.stringify({ ...votes, [questionId]: nextVote })
      );
    } catch {
      // Keep the vote visible for this page even when session storage is unavailable.
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}${window.location.pathname}`
      );
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  return (
    <section className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-5 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        {vote ? (
          <span className="inline-flex items-center gap-1.5 font-medium text-teal-700 dark:text-teal-400">
            <Check className="size-4" aria-hidden />
            Thanks for your feedback!
          </span>
        ) : (
          <>
            <span className="text-muted-foreground">Was this helpful?</span>
            <button
              type="button"
              onClick={() => handleVote("yes")}
              className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ThumbsUp className="size-3.5" aria-hidden /> Yes
            </button>
            <button
              type="button"
              onClick={() => handleVote("no")}
              className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ThumbsDown className="size-3.5" aria-hidden /> No
            </button>
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Copy className="size-3.5" aria-hidden />
          Share link
        </button>
        <span className="sr-only" aria-live="polite">
          {copyState === "copied"
            ? "Link copied."
            : copyState === "failed"
              ? "Could not copy the link."
              : ""}
        </span>
      </div>
    </section>
  );
}

export function HelpArticleLayout({
  children,
  category,
  siblings,
  currentQuestionId,
  toc,
  related,
  readingTime,
  updatedAt,
}: HelpArticleLayoutProps) {
  const categoryCounts = FAQ_RECORDS.reduce<Record<CategoryId, number>>(
    (counts, faq) => {
      counts[faq.categoryId] += 1;
      return counts;
    },
    {
      "getting-started": 0,
      "account-users": 0,
      "billing-gst": 0,
      "inventory-expiry": 0,
      "purchases-suppliers": 0,
      "sales-reports": 0,
    }
  );
  const totalCount = FAQ_RECORDS.length;
  const shownSiblings = siblings.slice(0, MAX_SIBLINGS);
  const visibleToc = toc.length >= 2 ? toc : [];
  const hasRightRail =
    visibleToc.length > 0 ||
    related.length > 0 ||
    Boolean(category) ||
    Boolean(updatedAt);

  const topicLinks = (
    <nav aria-label="Help topics" className="space-y-1">
      <p className="mb-2 px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Topics
      </p>
      <Link
        href="/help"
        aria-current={!category ? "page" : undefined}
        className={cn(
          "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          !category
            ? "bg-primary font-semibold text-primary-foreground shadow-2xs"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <span>All topics</span>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px]",
            !category ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
          )}
        >
          {totalCount}
        </span>
      </Link>
      {HELP_CATEGORIES.map((item) => {
        const Icon = CATEGORY_ICONS[item.id];
        const selected = category?.id === item.id;
        return (
          <Link
            key={item.id}
            href={`/help?topic=${item.id}`}
            aria-current={selected ? "page" : undefined}
            className={cn(
              "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              selected
                ? "bg-primary font-semibold text-primary-foreground shadow-2xs"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <span className="flex min-w-0 items-center gap-2">
              <Icon className="size-3.5 shrink-0" aria-hidden />
              <span className="truncate">{item.name}</span>
            </span>
            <span
              className={cn(
                "ml-2 rounded-full px-2 py-0.5 text-[10px]",
                selected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
              )}
            >
              {categoryCounts[item.id]}
            </span>
          </Link>
        );
      })}
    </nav>
  );

  const renderSiblingLinks = (headingId: string) => (
    <>
      {category && (
        <section aria-labelledby={headingId}>
          <h2
            id={headingId}
            className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            More in {category.name}
          </h2>
          {siblings.length > 0 ? (
            <ul className="space-y-1">
              {shownSiblings.map((sibling) => {
                const current = sibling.id === currentQuestionId;
                return (
                  <li key={sibling.id}>
                    <Link
                      href={sibling.url}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-xs leading-relaxed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        current
                          ? "bg-teal-500/10 font-semibold text-teal-800 dark:text-teal-300"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {sibling.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="px-3 text-xs leading-relaxed text-muted-foreground">
              Browse more questions in this topic.
            </p>
          )}
          {siblings.length > MAX_SIBLINGS && (
            <Link
              href={`/help?topic=${category.id}`}
              className="mt-2 inline-flex rounded-md px-3 py-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View all {siblings.length}
            </Link>
          )}
        </section>
      )}
    </>
  );

  return (
    <div
      className={cn(
        "grid min-w-0 grid-cols-1 items-start gap-6 md:grid-cols-[260px_minmax(0,760px)] md:justify-center",
        hasRightRail
          ? "xl:grid-cols-[260px_minmax(0,760px)_240px]"
          : "xl:grid-cols-[260px_minmax(0,760px)]"
      )}
    >
      <aside className="docs-scrollbar sticky top-[calc(var(--docs-header-height)+1.5rem)] hidden max-h-[calc(100vh-var(--docs-header-height)-3rem)] min-w-0 self-start space-y-6 overflow-y-auto pb-1 md:block">
        <Link
          href="/help"
          className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All questions
        </Link>
        <div className="rounded-2xl border border-border bg-card p-3 shadow-2xs">
          {topicLinks}
        </div>
        {renderSiblingLinks("help-article-more-desktop")}
        <HelpSupportMiniCard />
      </aside>

      <div className="min-w-0 max-w-[760px] md:mx-0">
        {category && siblings.length > 0 && (
          <details className="mb-5 rounded-xl border border-border bg-card md:hidden">
            <summary className="cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold text-heading outline-none focus-visible:ring-2 focus-visible:ring-primary">
              More in {category.name}
            </summary>
            <div className="border-t border-border px-2 py-2">
              {renderSiblingLinks("help-article-more-mobile")}
            </div>
          </details>
        )}
        {children}
        {related.length > 0 && (
          <section
            aria-labelledby="help-related-guides-mobile"
            className="mt-10 xl:hidden"
          >
            <h2
              id="help-related-guides-mobile"
              className="mb-2 text-sm font-semibold text-heading"
            >
              Related guides
            </h2>
            <ul className="divide-y divide-border">
              {related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between gap-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <BookOpen className="size-4 shrink-0" aria-hidden />
                      <span className="truncate">{item.title}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {hasRightRail && (
        <aside className="hidden min-w-0 xl:block">
          <div className="docs-scrollbar sticky top-[calc(var(--docs-header-height)+1.5rem)] max-h-[calc(100vh-var(--docs-header-height)-3rem)] self-start space-y-6 overflow-y-auto pb-1">
            {visibleToc.length > 0 && <HelpArticleToc items={visibleToc} />}
            {related.length > 0 && (
              <section aria-labelledby="help-related-guides-desktop">
                <h2
                  id="help-related-guides-desktop"
                  className="mb-2 text-sm font-semibold text-heading"
                >
                  Related guides
                </h2>
                <ul className="divide-y divide-border">
                  {related.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between gap-3 py-2.5 text-[13px] leading-relaxed text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <span className="flex min-w-0 items-center gap-2">
                          <BookOpen className="size-4 shrink-0" aria-hidden />
                          <span className="break-words">{item.title}</span>
                        </span>
                        <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <p className="text-xs leading-relaxed text-muted-foreground">
              {readingTime} min read
              {category && <> · {category.name}</>}
              {updatedAt && <> · Updated {updatedAt}</>}
            </p>
          </div>
        </aside>
      )}
    </div>
  );
}

export { HelpArticleFeedback };

"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  Compass,
  Users,
  Receipt,
  Package,
  Truck,
  BarChart3,
  Search,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Check,
  Copy,
  ThumbsUp,
  ThumbsDown,
  ChevronsUpDown,
  Mail,
  CalendarCheck,
  ClockAlert,
  UserPlus,
  KeyRound,
  AlertCircle,
  ArrowUpRight,
  FilterX,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
  HELP_CATEGORIES,
  FAQ_RECORDS,
  MOST_ASKED_SHORTCUTS,
  POPULAR_SEARCH_CHIPS,
  type CategoryId,
  type FaqRecord,
} from "@/lib/help-faqs-data";
import { WHATSAPP_MESSAGE } from "@/lib/support";
import { HelpSupportMiniCard } from "@/components/help/help-support-mini-card";

const CATEGORY_ICONS: Record<CategoryId, React.ComponentType<{ className?: string }>> = {
  "getting-started": Compass,
  "account-users": Users,
  "billing-gst": Receipt,
  "inventory-expiry": Package,
  "purchases-suppliers": Truck,
  "sales-reports": BarChart3,
};

const SHORTCUT_ICONS = {
  Receipt,
  ClockAlert,
  UserPlus,
  KeyRound,
};

const HUE_STYLES: Record<
  "teal" | "blue" | "amber" | "green" | "violet" | "rose",
  {
    iconBg: string;
    iconColor: string;
    badgeBg: string;
    activeBorder: string;
    activeBg: string;
  }
> = {
  teal: {
    iconBg: "bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400",
    iconColor: "text-teal-600 dark:text-teal-400",
    badgeBg: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
    activeBorder: "border-teal-500 dark:border-teal-400",
    activeBg: "bg-teal-500/[0.04] dark:bg-teal-500/[0.08]",
  },
  blue: {
    iconBg: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
    iconColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    activeBorder: "border-blue-500 dark:border-blue-400",
    activeBg: "bg-blue-500/[0.04] dark:bg-blue-500/[0.08]",
  },
  amber: {
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400",
    iconColor: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    activeBorder: "border-amber-500 dark:border-amber-400",
    activeBg: "bg-amber-500/[0.04] dark:bg-amber-500/[0.08]",
  },
  green: {
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    activeBorder: "border-emerald-500 dark:border-emerald-400",
    activeBg: "bg-emerald-500/[0.04] dark:bg-emerald-500/[0.08]",
  },
  violet: {
    iconBg: "bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400",
    iconColor: "text-violet-600 dark:text-violet-400",
    badgeBg: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    activeBorder: "border-violet-500 dark:border-violet-400",
    activeBg: "bg-violet-500/[0.04] dark:bg-violet-500/[0.08]",
  },
  rose: {
    iconBg: "bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400",
    iconColor: "text-rose-600 dark:text-rose-400",
    badgeBg: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
    activeBorder: "border-rose-500 dark:border-rose-400",
    activeBg: "bg-rose-500/[0.04] dark:bg-rose-500/[0.08]",
  },
};

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSearchWords(value: string) {
  const words = value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const keywords = words.filter(
    (word) =>
      ![
        "a",
        "an",
        "and",
        "are",
        "can",
        "do",
        "for",
        "how",
        "i",
        "in",
        "is",
        "it",
        "my",
        "of",
        "on",
        "the",
        "to",
        "what",
        "where",
        "why",
      ].includes(word)
  );
  return keywords.length > 0 ? keywords : words;
}

function getFaqSearchText(faq: FaqRecord) {
  return [
    faq.title,
    faq.description,
    faq.categoryName,
    faq.lead,
    ...(faq.tags || []),
    ...(faq.steps ? faq.steps.map((step) => `${step.title} ${step.body}`) : []),
    ...(faq.notes || []),
  ]
    .join(" ")
    .toLowerCase();
}

function getFaqSnippet(faq: FaqRecord, query: string) {
  const words = getSearchWords(query);
  const candidates = [
    faq.description,
    faq.lead,
    ...(faq.steps ? faq.steps.map((step) => `${step.title}: ${step.body}`) : []),
    ...(faq.notes || []),
  ].filter(Boolean);

  return (
    candidates.find((candidate) =>
      words.some((word) => candidate.toLowerCase().includes(word))
    ) ||
    faq.description ||
    faq.lead
  );
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const words = useMemo(
    () =>
      query
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0)
        .map(escapeRegex),
    [query]
  );

  if (words.length === 0 || !text) {
    return <>{text}</>;
  }

  const pattern = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const isMatch = words.some(
          (word) => part.toLowerCase() === word.toLowerCase()
        );
        if (!isMatch) return part;
        return (
          <mark
            key={i}
            className="rounded bg-amber-400/25 px-0.5 font-semibold text-amber-950 dark:bg-amber-400/35 dark:text-amber-100"
          >
            {part}
          </mark>
        );
      })}
    </>
  );
}

export function HelpCenter({
  initialCategory = null,
}: {
  initialCategory?: CategoryId | null;
}) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [resultsPanelOpen, setResultsPanelOpen] = useState(false);
  const [activeResultIndex, setActiveResultIndex] = useState(-1);
  const [searchFocused, setSearchFocused] = useState(false);
  const [shortcutHint, setShortcutHint] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryId | null>(initialCategory);
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());
  const [openCategoryId, setOpenCategoryId] =
    useState<CategoryId | null>(initialCategory ?? "getting-started");
  const [allTopicSectionsExpanded, setAllTopicSectionsExpanded] = useState(false);
  const [votes, setVotes] = useState<Record<string, "yes" | "no">>(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = sessionStorage.getItem("mediflux_faq_votes");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const answersSectionRef = useRef<HTMLDivElement>(null);
  const searchResultsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userAgentData = (
      navigator as Navigator & { userAgentData?: { platform?: string } }
    ).userAgentData;
    const platform = userAgentData?.platform || navigator.platform;
    const frame = requestAnimationFrame(() => {
      setShortcutHint(/mac|iphone|ipad|ipod/i.test(platform) ? "⌘K" : "Ctrl K");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 120);
    return () => clearTimeout(timer);
  }, [query]);

  const clearSearch = useCallback((refocus = false) => {
    setQuery("");
    setDebouncedQuery("");
    setResultsPanelOpen(false);
    setActiveResultIndex(-1);
    if (!selectedCategory) {
      setOpenCategoryId("getting-started");
      setAllTopicSectionsExpanded(false);
      setOpenIds(new Set());
    }
    if (refocus) requestAnimationFrame(() => searchInputRef.current?.focus());
  }, [selectedCategory]);

  const openAndScrollToFaq = useCallback((faqId: string) => {
    const faq = FAQ_RECORDS.find((record) => record.id === faqId);
    if (faq) {
      setQuery("");
      setResultsPanelOpen(false);
      setActiveResultIndex(-1);
      setSelectedCategory(faq.categoryId);
      setOpenCategoryId(faq.categoryId);
      setAllTopicSectionsExpanded(false);
    }
    setOpenIds((prev) => new Set(prev).add(faqId));
    setHighlightedId(faqId);

    setTimeout(() => {
      const el = document.getElementById(faqId);
      if (el) {
        window.scrollTo({
          top: Math.max(
            0,
            el.getBoundingClientRect().top + window.pageYOffset - 110
          ),
          behavior: "smooth",
        });
      }
    }, 350);

    setTimeout(() => {
      setHighlightedId((curr) => (curr === faqId ? null : curr));
    }, 2500);
  }, []);

  // Keyboard shortcut listener: "/" or Cmd/Ctrl+K to focus search, Esc to clear
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = document.activeElement;
      if (!(target instanceof HTMLElement)) return;
      const isTypingField = target.closest(
        'input, textarea, select, [contenteditable="true"], [role="textbox"]'
      );
      if (isTypingField && target !== searchInputRef.current) return;

      const isSlashShortcut = e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey;
      const isCommandShortcut =
        (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (!isSlashShortcut && !isCommandShortcut) return;
      if (isSlashShortcut && target === searchInputRef.current) return;

      e.preventDefault();
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    }
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  // Handle URL hash on load (e.g. #q-add-user)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith("q-")) openAndScrollToFaq(hash);
    };

    const timer = setTimeout(handleHashChange, 50);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [openAndScrollToFaq]);

  const handleVote = (slug: string, vote: "yes" | "no") => {
    setVotes((prev) => {
      const next = { ...prev, [slug]: vote };
      try {
        sessionStorage.setItem("mediflux_faq_votes", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleCopyLink = (faq: FaqRecord) => {
    const url = `${window.location.origin}/help#${faq.id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(faq.id);
    setTimeout(() => {
      setCopiedId((curr) => (curr === faq.id ? null : curr));
    }, 2200);
  };

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filtered FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    const words = getSearchWords(debouncedQuery);

    return FAQ_RECORDS.filter((faq) => {
      if (selectedCategory && faq.categoryId !== selectedCategory) {
        return false;
      }
      if (words.length === 0) {
        return true;
      }

      return words.every((word) => getFaqSearchText(faq).includes(word));
    });
  }, [debouncedQuery, selectedCategory]);

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
    if (!query.trim() && !selectedCategory) {
      setAllTopicSectionsExpanded(true);
    } else {
      setAllTopicSectionsExpanded(false);
      if (selectedCategory) setOpenCategoryId(selectedCategory);
    }
  };

  const collapseAll = () => {
    setOpenIds(new Set());
    setSelectedCategory(null);
    setOpenCategoryId("getting-started");
    setAllTopicSectionsExpanded(false);
  };

  const selectAllTopics = () => {
    setSelectedCategory(null);
    setOpenCategoryId("getting-started");
    setOpenIds(new Set());
    setAllTopicSectionsExpanded(false);
  };

  const selectCategory = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
    setOpenCategoryId(categoryId);
    setAllTopicSectionsExpanded(false);
  };

  const toggleTopicSection = (categoryId: CategoryId) => {
    setAllTopicSectionsExpanded(false);
    setOpenCategoryId((current) => current === categoryId ? null : categoryId);
  };

  // Live counts per category for the left rail
  const categoryCounts = useMemo(() => {
    const words = getSearchWords(debouncedQuery);
    const map: Record<string, number> = {};

    HELP_CATEGORIES.forEach((cat) => {
      map[cat.id] = 0;
    });

    FAQ_RECORDS.forEach((faq) => {
      if (words.length > 0) {
        if (!words.every((word) => getFaqSearchText(faq).includes(word))) {
          return;
        }
      }
      map[faq.categoryId] = (map[faq.categoryId] || 0) + 1;
    });

    return map;
  }, [debouncedQuery]);

  // Groups for display (when showing all categories)
  const groupedFaqs = useMemo(() => {
    if (selectedCategory) {
      const cat = HELP_CATEGORIES.find((c) => c.id === selectedCategory);
      return cat && filteredFaqs.length > 0 ? [{ category: cat, items: filteredFaqs }] : [];
    }

    return HELP_CATEGORIES.map((cat) => ({
      category: cat,
      items: filteredFaqs.filter((f) => f.categoryId === cat.id),
    })).filter((group) => group.items.length > 0);
  }, [filteredFaqs, selectedCategory]);

  const scrollToAnswers = () => {
    if (answersSectionRef.current) {
      const headerOffset = 110;
      const elementPosition = answersSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const handleCategoryCardClick = (catId: CategoryId) => {
    selectCategory(catId);
    // Smooth scroll up/to the answers section
    scrollToAnswers();
  };

  const handleShortcutClick = (slug: string) => {
    const faqId = `q-${slug}`;
    const targetFaq = FAQ_RECORDS.find((f) => f.slug === slug);
    if (targetFaq) {
      openAndScrollToFaq(faqId);
    }
  };

  const handleSearchResultClick = (faq: FaqRecord) => {
    setResultsPanelOpen(false);
    setActiveResultIndex(-1);
    window.history.pushState(null, "", `#${faq.id}`);
    openAndScrollToFaq(faq.id);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape" && query.trim()) {
      event.preventDefault();
      clearSearch(true);
      return;
    }

    const visibleResults = filteredFaqs.slice(0, 6);
    if (!searchResultsVisible || visibleResults.length === 0) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveResultIndex((current) => {
        if (current < 0) return direction > 0 ? 0 : visibleResults.length - 1;
        return (current + direction + visibleResults.length) % visibleResults.length;
      });
    } else if (event.key === "Enter") {
      event.preventDefault();
      handleSearchResultClick(
        visibleResults[activeResultIndex >= 0 ? activeResultIndex : 0]
      );
    }
  };

  const handleViewAllResults = () => {
    setResultsPanelOpen(false);
    setActiveResultIndex(-1);
    scrollToAnswers();
  };

  const searchIsActive = Boolean(query.trim());
  const isFiltered = Boolean(query.trim() || selectedCategory);
  const searchResultsVisible =
    searchIsActive && resultsPanelOpen && debouncedQuery === query;

  useEffect(() => {
    if (!searchResultsVisible || activeResultIndex < 0) return;
    const activeFaq = filteredFaqs.slice(0, 6)[activeResultIndex];
    if (activeFaq) {
      document
        .getElementById(`help-search-option-${activeFaq.id}`)
        ?.scrollIntoView({ block: "nearest" });
    }
  }, [activeResultIndex, filteredFaqs, searchResultsVisible]);

  const allQuestionsExpanded =
    filteredFaqs.length > 0 && filteredFaqs.every((faq) => openIds.has(faq.id));
  const allDisplayedSectionsExpanded =
    groupedFaqs.length > 0 &&
    groupedFaqs.every(
      ({ category }) =>
        searchIsActive ||
        allTopicSectionsExpanded ||
        openCategoryId === category.id
    );
  const allContentExpanded =
    allQuestionsExpanded && allDisplayedSectionsExpanded;

  return (
    <div className="relative w-full space-y-10 sm:space-y-14">
      {/* Toast Alert for Copy Link */}
      <div
        aria-live="polite"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-teal-600/30 bg-teal-900 px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-md transition-all duration-300",
          copiedId
            ? "translate-y-0 opacity-100 scale-100"
            : "pointer-events-none translate-y-3 opacity-0 scale-95"
        )}
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-400 text-teal-950">
          <Check className="size-3 stroke-[3]" />
        </span>
        Direct link copied to clipboard!
      </div>

      {/* =========================================================================
          1) COMPACT HERO SECTION
          No outer card frame, sits directly on page background, max height <= ~420px
          ========================================================================= */}
      <section className="relative overflow-visible pt-6 pb-4 sm:pt-10 sm:pb-6 text-center">
        {/* Soft background gradient mesh */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-15%,rgba(13,148,136,0.15),transparent_70%),radial-gradient(ellipse_35%_30%_at_85%_10%,rgba(245,158,11,0.08),transparent_60%),radial-gradient(ellipse_35%_30%_at_15%_15%,rgba(59,130,246,0.08),transparent_60%)]"
          aria-hidden
        />

        {/* Faint pharmacy cross pattern */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 9v14M9 16h14' stroke='%23008080' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        {/* Shrunk Floating Capsule 1 (Left Teal Capsule) */}
        <div
          className="pointer-events-none absolute left-0 top-4 hidden md:block opacity-40 dark:opacity-25 select-none"
          aria-hidden
        >
          <svg width="44" height="76" viewBox="0 0 44 76" fill="none" className="rotate-[-20deg]">
            <rect x="2" y="2" width="40" height="72" rx="20" stroke="url(#cap-grad-compact-1)" strokeWidth="2.5" />
            <path d="M2 38h40" stroke="url(#cap-grad-compact-1)" strokeWidth="2" strokeDasharray="2 2" />
            <defs>
              <linearGradient id="cap-grad-compact-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D9488" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Shrunk Floating Capsule 2 (Right Amber Capsule) */}
        <div
          className="pointer-events-none absolute right-0 top-6 hidden md:block opacity-40 dark:opacity-25 select-none"
          aria-hidden
        >
          <svg width="40" height="70" viewBox="0 0 40 70" fill="none" className="rotate-[20deg]">
            <rect x="2" y="2" width="36" height="66" rx="18" stroke="url(#cap-grad-compact-2)" strokeWidth="2.5" />
            <path d="M2 35h36" stroke="url(#cap-grad-compact-2)" strokeWidth="2" strokeDasharray="2 2" />
            <defs>
              <linearGradient id="cap-grad-compact-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FB7185" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative mx-auto max-w-2xl px-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/25 bg-teal-500/10 px-3 py-0.5 text-xs font-semibold text-teal-800 dark:text-teal-300 shadow-2xs">
            <Sparkles className="size-3 text-teal-600 dark:text-teal-400" aria-hidden />
            <span>Help Center · 21 answers · Updated Nov 2026</span>
          </div>

          {/* Heading: clamp(2rem, 4vw, 2.75rem) with teal->amber underline */}
          <h1 className="mt-3.5 font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-heading leading-tight">
            How can we{" "}
            <span className="relative inline-block whitespace-nowrap">
              help?
              <svg
                className="absolute -bottom-1 left-0 h-2.5 w-full text-teal-600 dark:text-teal-400"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0,8 Q50,1 100,8"
                  fill="none"
                  stroke="url(#teal-amber-underline-compact)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="teal-amber-underline-compact" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0F766E" />
                    <stop offset="60%" stopColor="#0D9488" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle: One line, ~1rem */}
          <p className="mt-2 text-sm sm:text-base leading-snug text-muted-foreground">
            Instant answers for MediFlux pharmacy management, billing, GST, inventory, and accounts.
          </p>

          {/* 56px Search Bar */}
          <div className="relative z-30 mt-6 flex justify-center">
            <div className="relative h-14 w-full max-w-xl rounded-2xl border border-border/80 bg-card p-1 shadow-md shadow-teal-950/5 ring-1 ring-border/50 backdrop-blur-md transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <div className="flex h-full w-full items-center gap-2.5 px-3">
                <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                <input
                  ref={searchInputRef}
                  type="text"
                  inputMode="search"
                  value={query}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setResultsPanelOpen(Boolean(event.target.value.trim()));
                    setActiveResultIndex(-1);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search questions, GST, bills, staff, expiry, loose tablets…"
                  aria-label="Search help center questions and answers"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-haspopup="listbox"
                  aria-expanded={searchResultsVisible}
                  aria-controls="help-search-results-list"
                  aria-activedescendant={
                    activeResultIndex >= 0 && filteredFaqs.slice(0, 6)[activeResultIndex]
                      ? `help-search-option-${filteredFaqs.slice(0, 6)[activeResultIndex].id}`
                      : undefined
                  }
                  className="h-full w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 outline-none"
                />
                <span className="flex h-6 w-[4.5rem] shrink-0 items-center justify-end">
                  {query.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => clearSearch(true)}
                      className="flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      aria-label="Clear search"
                    >
                      <X className="size-3.5" />
                    </button>
                  ) : !searchFocused && shortcutHint ? (
                    <kbd className="pointer-events-none inline-flex items-center rounded-[6px] border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground [@media(pointer:coarse)]:hidden">
                      {shortcutHint}
                    </kbd>
                  ) : null}
                </span>

                {(
                  <div
                    id="help-search-results-panel"
                    hidden={!searchResultsVisible}
                    style={{ display: searchResultsVisible ? "flex" : "none" }}
                    className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 flex max-h-[min(380px,50vh)] flex-col overflow-hidden rounded-[14px] border border-border bg-card text-left shadow-xl"
                    role="region"
                    aria-label="Search results"
                  >
                    <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5">
                      <p className="text-xs font-semibold text-heading" aria-live="polite">
                        {filteredFaqs.length} {filteredFaqs.length === 1 ? "answer" : "answers"} found
                      </p>
                    </div>

                    {filteredFaqs.length > 0 ? (
                      <div
                        id="help-search-results-list"
                        ref={searchResultsListRef}
                        role="listbox"
                        aria-label="Matching answers"
                        className="min-h-0 max-h-[min(280px,38vh)] flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:var(--color-primary)_var(--color-muted)] [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:bg-muted"
                      >
                        {filteredFaqs.slice(0, 6).map((faq, index) => {
                          const category = HELP_CATEGORIES.find(
                            (item) => item.id === faq.categoryId
                          );
                          const optionId = `help-search-option-${faq.id}`;
                          const isActive = index === activeResultIndex;

                          return (
                            <button
                              key={faq.id}
                              id={optionId}
                              type="button"
                              role="option"
                              aria-selected={isActive}
                              onMouseEnter={() => setActiveResultIndex(index)}
                              onClick={() => handleSearchResultClick(faq)}
                              className={cn(
                                "flex min-h-11 w-full items-center gap-3 border-b border-border/50 px-3 py-2.5 text-left transition-colors last:border-b-0 hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:outline-none",
                                isActive && "bg-primary/5"
                              )}
                            >
                              <span className="min-w-0 flex-1">
                                <span className="flex min-w-0 items-center gap-2">
                                  {category && (
                                    <span
                                      className={cn(
                                        "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                                        HUE_STYLES[category.hue].badgeBg
                                      )}
                                    >
                                      {category.name}
                                    </span>
                                  )}
                                  <span className="truncate text-xs font-semibold text-heading">
                                    <HighlightedText text={faq.title} query={query} />
                                  </span>
                                </span>
                                <span className="mt-1 block truncate text-[11px] text-muted-foreground">
                                  <HighlightedText
                                    text={getFaqSnippet(faq, query)}
                                    query={query}
                                  />
                                </span>
                              </span>
                              <ArrowRight
                                className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="px-4 py-4">
                        <div
                          id="help-search-results-list"
                          role="listbox"
                          aria-label="No matching answers"
                        />
                        <p className="text-sm font-semibold text-heading">
                          No answers for &ldquo;{query.trim()}&rdquo;
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Try a different keyword, or contact our support team.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <a
                            href={`https://wa.me/919103667857?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                          >
                            Ask on WhatsApp
                          </a>
                          <a
                            href="mailto:support@mflx.in"
                            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted"
                          >
                            Email support
                          </a>
                          <button
                            type="button"
                            onClick={() => clearSearch(true)}
                            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted"
                          >
                            Clear search
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3 border-t border-border/70 px-3 py-2">
                      <button
                        type="button"
                        onClick={handleViewAllResults}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        View all {filteredFaqs.length} results ↓
                      </button>
                      <span className="hidden text-[10px] text-muted-foreground [@media(hover:hover)_and_(pointer:fine)]:sm:inline">
                        Esc to clear
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Popular Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs">
            <span className="text-[11px] font-medium text-muted-foreground">Popular:</span>
            {POPULAR_SEARCH_CHIPS.map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => {
                  setQuery(chip.query);
                  setResultsPanelOpen(true);
                  setActiveResultIndex(-1);
                  searchInputRef.current?.focus();
                }}
                className={cn(
                  "rounded-full border border-border/80 bg-card px-2.5 py-0.5 text-[11px] text-muted-foreground shadow-2xs transition-colors hover:border-primary hover:text-foreground",
                  query.toLowerCase().includes(chip.query.toLowerCase()) &&
                    "border-primary bg-primary/10 text-primary font-medium"
                )}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2) MOST ASKED SHORTCUTS ROW
          Compact row of 4 buttons sitting directly under the compact hero
          ========================================================================= */}
      {!searchIsActive && <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Most Asked Questions
          </h2>
          <span className="text-xs text-muted-foreground">1-click direct answers</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {MOST_ASKED_SHORTCUTS.map((item) => {
            const Icon = SHORTCUT_ICONS[item.iconName];
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => handleShortcutClick(item.slug)}
                className="group flex items-center gap-2.5 rounded-2xl border border-border bg-card p-3 text-left shadow-2xs transition-all hover:border-primary hover:shadow-xs"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-xs font-semibold text-heading group-hover:text-primary">
                    {item.label}
                  </span>
                  <span className="block truncate text-[11px] text-muted-foreground">
                    Deep answer →
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>}

      {/* =========================================================================
          3) ANSWERS AREA (Sticky Left Rail + Right Content Toolbar & Accordions)
          ========================================================================= */}
      <section ref={answersSectionRef} className="pt-2">
        {/* Mobile Horizontal Sticky Category Pills */}
        <div className="sticky top-[var(--docs-header-height)] z-20 -mx-4 mb-6 flex items-center gap-1.5 overflow-x-auto bg-background/95 px-4 py-2 backdrop-blur-md border-b border-border/60 lg:hidden no-scrollbar">
          <button
            type="button"
            onClick={selectAllTopics}
            className={cn(
              "shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors",
              selectedCategory === null
                ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                : "border border-border bg-card text-muted-foreground hover:bg-muted"
            )}
          >
            All ({FAQ_RECORDS.length})
          </button>
          {HELP_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectCategory(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  isSelected
                    ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                    : "border border-border bg-card text-muted-foreground hover:bg-muted"
                )}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        <div className="flex items-start gap-8">
          {/* DESKTOP STICKY LEFT RAIL */}
          <aside className="sticky top-28 hidden w-64 shrink-0 space-y-6 lg:block">
            <div className="rounded-2xl border border-border bg-card p-3 shadow-2xs">
              <div className="mb-2 px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Topics
              </div>
              <nav className="space-y-1">
                <button
                  type="button"
                  onClick={selectAllTopics}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors text-left",
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>All topics</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px]",
                      selectedCategory === null
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {filteredFaqs.length}
                  </span>
                </button>

                {HELP_CATEGORIES.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.id];
                  const isSelected = selectedCategory === cat.id;
                  const count = categoryCounts[cat.id];

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => selectCategory(cat.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors text-left",
                        isSelected
                          ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <Icon className="size-3.5 shrink-0" />
                        <span className="truncate">{cat.name}</span>
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px]",
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <HelpSupportMiniCard />
          </aside>

          {/* RIGHT SIDE: TOOLBAR + ACCORDIONS */}
          <div className="min-w-0 flex-1 space-y-6">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-card px-4 py-3 shadow-2xs">
              <div className="flex items-center gap-2" aria-live="polite">
                <span className="text-xs sm:text-sm font-medium text-heading">
                  {filteredFaqs.length} {filteredFaqs.length === 1 ? "answer" : "answers"}
                </span>
                {isFiltered && (
                  <span className="text-xs text-muted-foreground">
                    found matching your filter
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs">
                {isFiltered && (
                  <button
                    type="button"
                    onClick={() => {
                      clearSearch();
                      selectAllTopics();
                    }}
                    className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <FilterX className="size-3.5" />
                    Clear filters
                  </button>
                )}

                <button
                  type="button"
                  onClick={allContentExpanded ? collapseAll : expandAll}
                  className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <ChevronsUpDown className="size-3.5" />
                  {allContentExpanded ? "Collapse all" : "Expand all"}
                </button>
              </div>
            </div>

            {/* EMPTY SEARCH STATE */}
            {filteredFaqs.length === 0 && (
              <div className="rounded-3xl border border-dashed border-border bg-card/60 p-8 sm:p-12 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <Search className="size-6" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-heading">
                  No matching answers found
                </h3>
                <p className="mx-auto mt-1 max-w-sm text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We couldn&apos;t find an answer for{" "}
                  {query ? <span className="font-semibold text-heading">&ldquo;{query}&rdquo;</span> : "your filter"}.
                  Try another keyword or reach out directly.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      clearSearch();
                      selectAllTopics();
                    }}
                    className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors shadow-2xs"
                  >
                    Clear search
                  </button>
                  <a
                    href={`https://wa.me/919103667857?text=${encodeURIComponent(
                      `Hi MediFlux, I searched for "${query}" on the help center and need assistance.`
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 transition-colors shadow-2xs"
                  >
                    <FaWhatsapp className="size-3.5" />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            )}

            {/* ACCORDION GROUPS */}
            {groupedFaqs.map(({ category, items }) => {
              const Icon = CATEGORY_ICONS[category.id];
              const isSectionOpen =
                searchIsActive ||
                allTopicSectionsExpanded ||
                openCategoryId === category.id;

              return (
                <div key={category.id} className="space-y-3">
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleTopicSection(category.id)}
                      aria-expanded={isSectionOpen}
                      aria-controls={`topic-content-${category.id}`}
                      disabled={searchIsActive}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 rounded-lg border-b border-border/60 px-2 py-2 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-default disabled:hover:bg-transparent"
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <Icon className={cn("size-4 shrink-0", HUE_STYLES[category.hue].iconColor)} aria-hidden="true" />
                        <span className={cn(
                          "truncate font-heading text-sm tracking-tight text-heading",
                          isSectionOpen ? "font-bold" : "font-semibold"
                        )}>
                          {category.name}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {items.length} {items.length === 1 ? "answer" : "answers"}
                        </span>
                        <ChevronDown
                          className={cn(
                            "size-4 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none",
                            isSectionOpen ? "rotate-0" : "-rotate-90"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`topic-content-${category.id}`}
                    aria-hidden={!isSectionOpen}
                    inert={!isSectionOpen}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none",
                      isSectionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="space-y-2.5 pt-1">
                  {items.map((faq) => {
                    const isOpen = openIds.has(faq.id);
                    const isHighlighted = highlightedId === faq.id;
                    const vote = votes[faq.slug];

                    return (
                      <article
                        key={faq.id}
                        id={faq.id}
                        className={cn(
                          "rounded-2xl border bg-card transition-all duration-300 scroll-mt-28 overflow-hidden",
                          isOpen
                            ? "border-primary/40 shadow-xs"
                            : "border-border/80 hover:border-border hover:shadow-2xs",
                          isHighlighted && "ring-2 ring-primary bg-primary/[0.04]"
                        )}
                      >
                        {/* Header Trigger */}
                        <button
                          type="button"
                          onClick={() => toggleAccordion(faq.id)}
                          aria-expanded={isOpen}
                          aria-controls={`content-${faq.id}`}
                          className="flex w-full items-start justify-between gap-4 p-4 sm:p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          <div className="min-w-0 flex-1">
                            <span className="inline-block rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                              {faq.categoryName}
                            </span>
                            <h4 className="font-heading text-sm sm:text-base font-semibold leading-snug text-heading">
                              <HighlightedText text={faq.title} query={query} />
                            </h4>
                            {!isOpen && faq.description && (
                              <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                                <HighlightedText text={faq.description} query={query} />
                              </p>
                            )}
                          </div>
                          <span
                            className={cn(
                              "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-transform duration-200",
                              isOpen && "rotate-180 text-primary"
                            )}
                          >
                            <ChevronDown className="size-4" />
                          </span>
                        </button>

                        {/* Collapsible Content */}
                        <div
                          id={`content-${faq.id}`}
                          hidden={!isOpen}
                          className="border-t border-border/50 px-4 pb-5 pt-4 sm:px-6"
                        >
                            {/* Lead intro */}
                            <p className="text-xs sm:text-sm leading-relaxed text-foreground/90 font-medium">
                              <HighlightedText text={faq.lead} query={query} />
                            </p>

                            {/* Steps walkthrough */}
                            {faq.steps && faq.steps.length > 0 && (
                              <div className="mt-4 space-y-3">
                                {faq.steps.map((step, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/30 p-3 sm:p-3.5 text-xs sm:text-sm"
                                  >
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                      {idx + 1}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                      {step.title && (
                                        <div className="font-semibold text-heading">
                                          <HighlightedText text={step.title} query={query} />
                                        </div>
                                      )}
                                      <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                                        <HighlightedText text={step.body} query={query} />
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Notes/Callouts */}
                            {faq.notes && faq.notes.length > 0 && (
                              <div className="mt-4 space-y-2">
                                {faq.notes.map((note, nIdx) => (
                                  <div
                                    key={nIdx}
                                    className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground"
                                  >
                                    <AlertCircle className="size-4 shrink-0 text-primary mt-0.5" />
                                    <div>
                                      <strong className="font-semibold text-heading">Note: </strong>
                                      <HighlightedText text={note} query={query} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Card Footer: Feedback + Copy Link + Full Guide Link */}
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 text-xs">
                              {/* Helpful vote */}
                              <div className="flex items-center gap-2">
                                {vote ? (
                                  <span className="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-medium">
                                    <Check className="size-3.5" />
                                    Thanks for your feedback!
                                  </span>
                                ) : (
                                  <>
                                    <span className="text-muted-foreground">Was this helpful?</span>
                                    <button
                                      type="button"
                                      onClick={() => handleVote(faq.slug, "yes")}
                                      className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-muted-foreground hover:border-primary hover:text-foreground transition-colors"
                                    >
                                      <ThumbsUp className="size-3" /> Yes
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleVote(faq.slug, "no")}
                                      className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-muted-foreground hover:border-destructive hover:text-foreground transition-colors"
                                    >
                                      <ThumbsDown className="size-3" /> No
                                    </button>
                                  </>
                                )}
                              </div>

                              {/* Right Actions: Copy Link + Full Guide */}
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => handleCopyLink(faq)}
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                                  title="Copy direct link to this answer"
                                >
                                  <Copy className="size-3.5" />
                                  <span>Share link</span>
                                </button>

                                <Link
                                  href={faq.fullGuideHref}
                                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                                >
                                  <span>Full guide</span>
                                  <ArrowUpRight className="size-3.5" />
                                </Link>
                              </div>
                            </div>
                        </div>
                      </article>
                    );
                  })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4) BROWSE BY TOPIC (Moved below answers, slimmed down to ~110-130px tall)
          ========================================================================= */}
      <section className="space-y-4 pt-4 border-t border-border/60">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold tracking-tight text-heading sm:text-xl">
              Browse by topic
            </h2>
            {selectedCategory && (
              <button
                type="button"
                onClick={() => {
                  selectAllTopics();
                  scrollToAnswers();
                }}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Clear topic filter
              </button>
            )}
          </div>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Looking for something in another area? Pick a topic to filter the answers above.
          </p>
        </div>

        {/* Compact 3-col grid, cards ~110-130px tall */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {HELP_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id];
            const hue = HUE_STYLES[cat.hue];
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                role="button"
                tabIndex={0}
                onClick={() => handleCategoryCardClick(cat.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCategoryCardClick(cat.id);
                  }
                }}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border bg-card p-4 text-left shadow-2xs transition-all duration-200 cursor-pointer min-h-[110px] sm:min-h-[120px]",
                  "hover:border-primary hover:shadow-xs hover:-translate-y-0.5",
                  isSelected
                    ? cn("ring-2 ring-primary/40", hue.activeBorder, hue.activeBg)
                    : "border-border/80"
                )}
              >
                {/* One-line top: Icon + Title + Inline Arrow */}
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105",
                      hue.iconBg
                    )}
                  >
                    <Icon className="size-4" />
                  </span>

                  <h3 className="min-w-0 flex-1 truncate font-heading text-sm font-bold text-heading group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>

                  <ArrowRight className="ml-auto size-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                {/* One-line description */}
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5) STILL NEED A HAND? SUPPORT SECTION
          Scoped True-Teal (#008080) Palette
          ========================================================================= */}
      <section
        style={{
          "--support-brand-seed": "#008080",
          "--support-panel-gradient": "linear-gradient(135deg, #006B6B 0%, #008080 55%, #007373 100%)",
          "--support-ambient-glow": "radial-gradient(600px 300px at 90% 0%, rgba(255,255,255,0.10), transparent 70%)",
          "--support-pattern": `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 9v14M9 16h14' stroke='rgba(255,255,255,0.07)' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          "--support-panel-border": "rgba(255, 255, 255, 0.28)",
          "--support-card-bg": "rgba(0, 55, 55, 0.24)",
          "--support-card-border": "rgba(255, 255, 255, 0.28)",
          "--support-card-hover-bg": "rgba(0, 55, 55, 0.34)",
          "--support-card-hover-border": "rgba(255, 255, 255, 0.52)",
          "--support-icon-bg": "rgba(255, 255, 255, 0.13)",
          "--support-icon-color": "#FFFFFF",
          "--support-heading": "#FFFFFF",
          "--support-subtext": "#EAFBFB",
          "--support-card-body": "#EAFBFB",
          "--support-meta": "#DFF6F6",
          "--support-phone-email": "#FFFFFF",
          "--support-cta": "#FFFFFF",
          "--support-cta-primary-bg": "#FFFFFF",
          "--support-cta-primary-hover-bg": "#EAFBFB",
          "--support-cta-primary-text": "#006B6B",
          "--support-cta-secondary-bg": "rgba(255, 255, 255, 0.08)",
          "--support-cta-secondary-hover-bg": "rgba(255, 255, 255, 0.16)",
          "--support-cta-secondary-border": "rgba(255, 255, 255, 0.48)",
          "--support-badge-bg": "rgba(255, 255, 255, 0.12)",
          "--support-badge-text": "#FFFFFF",
          "--support-badge-border": "rgba(255, 255, 255, 0.38)",
          "--support-fastest-bg": "#F5B04D",
          "--support-fastest-text": "#4A2E00",
          "--support-fastest-border": "rgba(255, 255, 255, 0.40)",
          "--support-focus-ring": "#FFFFFF",
          background: "var(--support-panel-gradient)",
          borderColor: "var(--support-panel-border)",
        } as React.CSSProperties}
        className="relative overflow-hidden rounded-3xl border p-6 text-[var(--support-heading)] shadow-xl sm:p-10"
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background: "var(--support-ambient-glow)",
          }}
          aria-hidden
        />

        {/* Faint white "+" pattern */}
        <div
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            backgroundImage: "var(--support-pattern)",
          }}
          aria-hidden
        />

        <div className="relative max-w-2xl">
          <h2
            className="font-heading text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: "var(--support-heading)" }}
          >
            Still need a hand?
          </h2>
          <p
            className="mt-2 text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--support-subtext)" }}
          >
            Our pharmacy support specialists are ready to help you get unstuck across setup, GST billing, and daily operations.
          </p>
        </div>

        {/* 3 Support Cards */}
        <div className="relative mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/919103667857?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col justify-between rounded-2xl p-5 backdrop-blur-sm transition-all duration-200 border hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--support-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#008080] bg-[var(--support-card-bg)] border-[var(--support-card-border)] hover:bg-[var(--support-card-hover-bg)] hover:border-[var(--support-card-hover-border)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--support-icon-bg)] text-[var(--support-icon-color)]">
                  <FaWhatsapp className="size-5" />
                </span>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-bold border bg-[var(--support-fastest-bg)] text-[var(--support-fastest-text)] border-[var(--support-fastest-border)]">
                  FASTEST
                </span>
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-[var(--support-heading)]">
                WhatsApp Chat
              </h3>
              <p className="mt-1 text-xs text-[var(--support-meta)]">
                ~10 min reply · 9:00–21:00 IST Mon–Sat
              </p>
              <p className="mt-2 text-xs font-mono text-[var(--support-phone-email)]">
                +91 91036 67857
              </p>
            </div>
            <div
              style={{ borderColor: "transparent" }}
              className="mt-6 flex min-h-10 w-full items-center justify-center gap-1.5 rounded-[10px] border px-3.5 py-2.5 text-xs font-semibold text-[var(--support-cta-primary-text)] bg-[var(--support-cta-primary-bg)] transition-colors group-hover:bg-[var(--support-cta-primary-hover-bg)] motion-reduce:transition-none"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Email Support Card */}
          <a
            href="mailto:support@mflx.in"
            className="group flex flex-col justify-between rounded-2xl p-5 backdrop-blur-sm transition-all duration-200 border hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--support-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#008080] bg-[var(--support-card-bg)] border-[var(--support-card-border)] hover:bg-[var(--support-card-hover-bg)] hover:border-[var(--support-card-hover-border)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--support-icon-bg)] text-[var(--support-icon-color)]">
                  <Mail className="size-5" />
                </span>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold border bg-[var(--support-badge-bg)] text-[var(--support-badge-text)] border-[var(--support-badge-border)]">
                  &lt;24h reply
                </span>
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-[var(--support-heading)]">
                Email Support
              </h3>
              <p className="mt-1 text-xs text-[var(--support-card-body)]">
                Send screenshots, export files, or error logs
              </p>
              <p className="mt-2 text-xs font-mono text-[var(--support-phone-email)]">
                support@mflx.in
              </p>
            </div>
            <div
              style={{ borderColor: "var(--support-cta-secondary-border)" }}
              className="mt-6 flex min-h-10 w-full items-center justify-center gap-1.5 rounded-[10px] border px-3.5 py-2.5 text-xs font-semibold text-[var(--support-cta)] bg-[var(--support-cta-secondary-bg)] transition-colors group-hover:bg-[var(--support-cta-secondary-hover-bg)] group-hover:[--support-cta-secondary-border:#FFFFFF] motion-reduce:transition-none"
            >
              <span>Send an email</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Book Walkthrough Card */}
          <a
            href="https://demo.mediflux.in"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col justify-between rounded-2xl p-5 backdrop-blur-sm transition-all duration-200 border hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--support-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#008080] bg-[var(--support-card-bg)] border-[var(--support-card-border)] hover:bg-[var(--support-card-hover-bg)] hover:border-[var(--support-card-hover-border)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--support-icon-bg)] text-[var(--support-icon-color)]">
                  <CalendarCheck className="size-5" />
                </span>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold border bg-[var(--support-badge-bg)] text-[var(--support-badge-text)] border-[var(--support-badge-border)]">
                  1-on-1 session
                </span>
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-[var(--support-heading)]">
                Book a Walkthrough
              </h3>
              <p className="mt-1 text-xs text-[var(--support-card-body)]">
                Free, 15 min live guided tour of MediFlux
              </p>
              <p className="mt-2 text-xs text-[var(--support-meta)]">
                Screen-share with our onboarding lead
              </p>
            </div>
            <div
              style={{ borderColor: "var(--support-cta-secondary-border)" }}
              className="mt-6 flex min-h-10 w-full items-center justify-center gap-1.5 rounded-[10px] border px-3.5 py-2.5 text-xs font-semibold text-[var(--support-cta)] bg-[var(--support-cta-secondary-bg)] transition-colors group-hover:bg-[var(--support-cta-secondary-hover-bg)] group-hover:[--support-cta-secondary-border:#FFFFFF] motion-reduce:transition-none"
            >
              <span>Schedule demo</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

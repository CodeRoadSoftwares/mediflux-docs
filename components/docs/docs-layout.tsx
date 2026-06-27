"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { SearchDialog } from "./search-dialog";
import { AskAiBar } from "./ask-ai-bar";
import { ReadingProgress } from "./reading-progress";
import { PageMetaProvider, useIconMap } from "@/lib/docs-icon-context";
import { MobileBottomBarsProvider } from "@/lib/mobile-bottom-bars-context";
import type { DocPageMeta } from "@/lib/docs-icon-context";
import type { SearchItem } from "@/lib/search-index";
import type { Root } from "fumadocs-core/page-tree";

interface DocsLayoutClientProps {
  children: React.ReactNode;
  tree: Root;
  searchIndex: SearchItem[];
  pageMetaMap: Record<string, DocPageMeta>;
}

function DocsLayoutShell({
  children,
  tree,
  searchIndex,
}: {
  children: React.ReactNode;
  tree: Root;
  searchIndex: SearchItem[];
}) {
  const iconMap = useIconMap();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("docs-scrollbar");
    body.classList.add("docs-scrollbar");
    body.classList.remove("docs-scroll-lock");
    body.style.overflow = "";
    html.style.overflow = "";
    return () => {
      html.classList.remove("docs-scrollbar");
      body.classList.remove("docs-scrollbar");
      body.classList.remove("docs-scroll-lock");
      body.style.overflow = "";
      html.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMenuToggle = useCallback(() => setMobileOpen((v) => !v), []);
  const handleSearchOpen = useCallback(() => setSearchOpen(true), []);
  const handleSearchClose = useCallback(() => setSearchOpen(false), []);
  const handleMobileClose = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="relative min-h-screen w-full min-w-0">
      <ReadingProgress />
      <Header onMenuToggle={handleMenuToggle} onSearchOpen={handleSearchOpen} />

      <div className="docs-container">
        <div className="docs-shell">
          <aside className="docs-nav-aside docs-scrollbar hidden w-[var(--docs-sidebar-width)] shrink-0 border-r border-border py-4 pl-2 pr-1 xl:block xl:pl-4 xl:pr-2">
            <Sidebar tree={tree} iconMap={iconMap} />
          </aside>

          <main className="docs-main min-w-0 flex-1 pb-28 xl:pb-24">{children}</main>
        </div>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={handleMobileClose}
        tree={tree}
        iconMap={iconMap}
      />
      <SearchDialog
        open={searchOpen}
        onClose={handleSearchClose}
        searchIndex={searchIndex}
      />
      <AskAiBar />
    </div>
  );
}

export function DocsLayoutClient({
  children,
  tree,
  searchIndex,
  pageMetaMap,
}: DocsLayoutClientProps) {
  return (
    <PageMetaProvider pageMetaMap={pageMetaMap}>
      <MobileBottomBarsProvider>
        <DocsLayoutShell tree={tree} searchIndex={searchIndex}>
          {children}
        </DocsLayoutShell>
      </MobileBottomBarsProvider>
    </PageMetaProvider>
  );
}

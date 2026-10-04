import type { MetadataRoute } from "next";
import type { Node } from "fumadocs-core/page-tree";
import { helpSource, source } from "@/lib/source";
import { SITE_URL } from "@/lib/site";

const CANONICAL_ORIGIN_URL = "https://docs.mediflux.in";

/**
 * Resolves and validates the canonical origin.
 * Safely verifies that protocol is "https:" and hostname is exactly "docs.mediflux.in".
 * If configuredOrigin doesn't match both exactly, uses canonicalOrigin.
 */
function getCanonicalOrigin(): string {
  const canonicalOrigin = new URL(CANONICAL_ORIGIN_URL);

  try {
    const configuredOrigin = new URL(SITE_URL);
    if (
      configuredOrigin.protocol === "https:" &&
      configuredOrigin.hostname === "docs.mediflux.in"
    ) {
      return configuredOrigin.origin;
    }
  } catch {
    // If SITE_URL is missing or invalid, fallback to canonicalOrigin
  }

  return canonicalOrigin.origin;
}

/**
 * Normalizes a candidate URL path or absolute URL into a strict, standards-compliant sitemap URL.
 * - Enforces HTTPS and exact docs.mediflux.in hostname
 * - Drops query strings and hash fragments
 * - Collapses duplicate slashes
 * - Preserves trailing slash on homepage ("/") and strips trailing slashes on all subpaths
 * - Excludes non-page file assets
 */
function normalizeUrl(rawUrl: string, baseOrigin: string): string | null {
  if (!rawUrl || typeof rawUrl !== "string") return null;
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed, baseOrigin);

    // Exact protocol and hostname match
    if (parsed.protocol !== "https:") return null;
    if (parsed.hostname !== "docs.mediflux.in") return null;

    // Collapse duplicate slashes in pathname
    let pathname = parsed.pathname.replace(/\/+/g, "/");

    // Trailing slash rule:
    // Root "/" retains its trailing slash.
    // All other subpaths must NOT have a trailing slash.
    if (pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }

    if (!pathname.startsWith("/")) return null;

    // Reject non-page file assets if accidentally included
    if (/\.(png|jpe?g|gif|svg|webp|ico|xml|txt|pdf|css|js|map|json)$/i.test(pathname)) {
      return null;
    }

    return `${baseOrigin}${pathname}`;
  } catch {
    return null;
  }
}

/** Recursively extracts all internal page URLs from a Fumadocs page tree. */
function collectFromPageTree(nodes: Node[]): string[] {
  const urls: string[] = [];

  function walk(items: Node[]) {
    for (const item of items) {
      if (!item) continue;
      if (item.type === "page") {
        if (!item.external && typeof item.url === "string") {
          urls.push(item.url);
        }
      } else if (item.type === "folder") {
        if (item.index && !item.index.external && typeof item.index.url === "string") {
          urls.push(item.index.url);
        }
        if (Array.isArray(item.children)) {
          walk(item.children);
        }
      }
    }
  }

  if (Array.isArray(nodes)) {
    walk(nodes);
  }
  return urls;
}

/** Extracts internal page URLs from Fumadocs source.getPages(), filtering out drafts if flagged. */
function collectFromPages(
  pages: Array<{ url: string; data?: any }>
): string[] {
  const urls: string[] = [];
  if (!Array.isArray(pages)) return urls;

  for (const page of pages) {
    if (!page || typeof page.url !== "string") continue;
    // Skip unpublished/draft pages if draft flag exists
    if (page.data && (page.data.draft === true || page.data.published === false)) {
      continue;
    }
    urls.push(page.url);
  }
  return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseOrigin = getCanonicalOrigin();

  const rawCandidates: string[] = [
    "/",
    "/help",
    ...collectFromPages(source.getPages()),
    ...collectFromPageTree(source.pageTree.children),
    ...collectFromPages(helpSource.getPages()),
    ...collectFromPageTree(helpSource.pageTree.children),
  ];

  const uniqueUrls = new Set<string>();

  for (const candidate of rawCandidates) {
    const normalized = normalizeUrl(candidate, baseOrigin);
    if (normalized) {
      uniqueUrls.add(normalized);
    }
  }

  // Deterministic alphabetical sort
  const sortedUrls = Array.from(uniqueUrls).sort((a, b) => a.localeCompare(b));

  return sortedUrls.map((url) => ({
    url,
  }));
}

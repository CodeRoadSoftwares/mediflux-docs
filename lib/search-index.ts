import { source } from "./source";

export interface SearchItem {
  title: string;
  url: string;
  breadcrumb?: string;
  description?: string;
  type: "page" | "heading";
  /** Heading text — used for matching; same as title for heading items */
  headingText?: string;
  icon?: string;
}

type TocEntry = { depth?: number; title: unknown; url?: string };

function formatSlug(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function titleFromUrl(url?: string) {
  if (!url) return "";
  const id = url.startsWith("#") ? url.slice(1) : (url.split("#").pop() ?? "");
  if (!id) return "";
  return formatSlug(id);
}

/** TOC titles are ReactNode at runtime — extract plain text for search + breadcrumbs */
function extractTocTitle(title: unknown, url?: string): string {
  if (typeof title === "string") return title.trim();
  if (title == null) return titleFromUrl(url);
  if (typeof title === "number" || typeof title === "boolean") {
    return String(title);
  }

  if (Array.isArray(title)) {
    const text = title
      .map((part) => extractTocTitle(part, url))
      .join("")
      .trim();
    return text || titleFromUrl(url);
  }

  if (typeof title === "object") {
    const obj = title as Record<string, unknown>;

    if (obj.props && typeof obj.props === "object") {
      const text = extractTocTitle(
        (obj.props as Record<string, unknown>).children,
        url
      );
      if (text) return text;
    }

    if ("children" in obj) {
      const text = extractTocTitle(obj.children, url);
      if (text) return text;
    }

    if (typeof obj.value === "string") return obj.value.trim();
    if (typeof obj.text === "string") return obj.text.trim();
  }

  const fallback = titleFromUrl(url);
  if (fallback) return fallback;

  const asString = String(title);
  return asString === "[object Object]" ? "" : asString.trim();
}

function getSlugParts(pageUrl: string) {
  return pageUrl.replace(/^\/docs\/?/, "").split("/").filter(Boolean);
}

function getPageTitle(slugParts: string[]) {
  const page = source.getPage(slugParts);
  return page?.data.title || formatSlug(slugParts[slugParts.length - 1] ?? "");
}

/** Ancestor trail for a page, e.g. "Sales › Create Sale" */
function buildPageBreadcrumb(pageUrl: string) {
  const slugParts = getSlugParts(pageUrl);
  if (slugParts.length <= 1) return undefined;

  const parts: string[] = [];
  for (let i = 0; i < slugParts.length - 1; i++) {
    parts.push(getPageTitle(slugParts.slice(0, i + 1)));
  }
  return parts.join(" › ");
}

/** Page trail for a heading subtitle — slug path + TOC parent headings, not the matched heading */
function buildHeadingParentBreadcrumb(
  pageUrl: string,
  toc: TocEntry[],
  headingIndex: number
) {
  const parts: string[] = [];

  const slugParts = getSlugParts(pageUrl);
  for (let i = 0; i < slugParts.length; i++) {
    parts.push(getPageTitle(slugParts.slice(0, i + 1)));
  }

  const depth = toc[headingIndex].depth ?? 0;
  if (depth > 1) {
    for (let j = headingIndex - 1; j >= 0; j--) {
      const prevDepth = toc[j].depth ?? 0;
      if (prevDepth < depth) {
        const parentText = extractTocTitle(toc[j].title, toc[j].url);
        if (parentText) parts.push(parentText);
        break;
      }
    }
  }

  return parts.join(" › ");
}

/** Leaf headings for search — h2 sections always; h1 only when it has no h2 children (ignore h3+) */
function isEndHeading(toc: TocEntry[], index: number) {
  const depth = toc[index].depth ?? 0;
  if (depth < 1 || depth > 2) return false;

  if (depth === 2) return true;

  for (let j = index + 1; j < toc.length; j++) {
    const nextDepth = toc[j].depth ?? 0;
    if (nextDepth <= 1) break;
    if (nextDepth === 2) return false;
  }

  return true;
}

export function generateSearchIndex(): SearchItem[] {
  const seenPageUrls = new Set<string>();
  const items: SearchItem[] = [];

  for (const page of source.getPages()) {
    if (seenPageUrls.has(page.url)) continue;
    seenPageUrls.add(page.url);
    items.push({
      title: page.data.title,
      url: page.url,
      breadcrumb: buildPageBreadcrumb(page.url),
      description: page.data.description,
      type: "page",
      icon: page.data.icon,
    });

    const toc = page.data.toc;
    if (!toc || !Array.isArray(toc)) continue;

    const tocEntries = toc as TocEntry[];

    for (let i = 0; i < tocEntries.length; i++) {
      const heading = tocEntries[i];
      if (!isEndHeading(tocEntries, i)) continue;

      const headingText = extractTocTitle(heading.title, heading.url);
      if (!headingText) continue;

      items.push({
        title: headingText,
        url: `${page.url}${heading.url}`,
        breadcrumb: buildHeadingParentBreadcrumb(page.url, tocEntries, i),
        type: "heading",
        headingText,
      });
    }
  }

  return items;
}

import { helpSource, source } from "./source";

export interface HelpFaqItem {
  title: string;
  description?: string;
  url: string;
  slugs: string[];
  breadcrumb: string;
  tags: string[];
  searchText: string;
}

export interface RelatedDoc {
  href: string;
  title: string;
  description?: string;
}

function formatSlug(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function isIndexPage(path: string) {
  return /(^|\/)index\.mdx?$/.test(path);
}

export function readStringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

export function readTags(data: { tags?: unknown }): string[] {
  return readStringList(data.tags);
}

export function toSearchText(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~`|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getHelpBreadcrumbs(
  slugParts: string[],
  options?: { includeCurrent?: boolean }
) {
  const items: { name: string; url?: string }[] = [];
  let currentPath = "/help";

  for (let i = 0; i < slugParts.length; i++) {
    currentPath += `/${slugParts[i]}`;
    const page = helpSource.getPage(slugParts.slice(0, i + 1));
    items.push({
      name: page?.data.title || formatSlug(slugParts[i]),
      url: currentPath,
    });
  }

  if (!options?.includeCurrent) {
    return items.slice(0, -1);
  }

  return items;
}

function docsPageFromHref(href: string) {
  const path = href.split("#")[0].replace(/\/$/, "");
  if (!path.startsWith("/docs")) return undefined;
  const slugs = path.replace(/^\/docs\/?/, "").split("/").filter(Boolean);
  return source.getPage(slugs.length > 0 ? slugs : undefined);
}

export function resolveRelatedDocs(value: unknown): RelatedDoc[] {
  const items: RelatedDoc[] = [];
  const seen = new Set<string>();

  for (const href of readStringList(value)) {
    const normalized = href.startsWith("/") ? href : `/${href}`;
    if (seen.has(normalized)) continue;
    seen.add(normalized);

    const page = docsPageFromHref(normalized);
    items.push({
      href: page?.url ?? normalized,
      title: page?.data.title || formatSlug(normalized.split("/").pop() ?? ""),
      description: page?.data.description,
    });
  }

  return items;
}

export async function getHelpFaqs(): Promise<HelpFaqItem[]> {
  const items: HelpFaqItem[] = [];

  for (const page of helpSource.getPages()) {
    if (isIndexPage(page.path)) continue;

    const ancestors = getHelpBreadcrumbs(page.slugs);
    let body = "";
    try {
      body = toSearchText(await page.data.getText("processed"));
    } catch {
      body = "";
    }

    items.push({
      title: page.data.title ?? "",
      description: page.data.description,
      url: page.url,
      slugs: page.slugs,
      breadcrumb: ancestors.map((item) => item.name).join(" › "),
      tags: readTags(page.data),
      searchText: body,
    });
  }

  return items.sort((a, b) => {
    const section = a.breadcrumb.localeCompare(b.breadcrumb);
    if (section !== 0) return section;
    return a.title.localeCompare(b.title);
  });
}

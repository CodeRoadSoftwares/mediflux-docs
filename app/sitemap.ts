import type { MetadataRoute } from "next";
import type { Node } from "fumadocs-core/page-tree";
import { helpSource, source } from "@/lib/source";
import { SITE_URL } from "@/lib/site";

/** Collect published page URLs from a sidebar tree (excludes orphans like how-to-write). */
function collectNavUrls(nodes: Node[], urls: Set<string> = new Set()): Set<string> {
  for (const node of nodes) {
    if (node.type === "page") {
      if (!node.external && node.url.startsWith("/")) {
        urls.add(node.url.replace(/\/$/, "") || node.url);
      }
    } else if (node.type === "folder") {
      if (node.index?.url?.startsWith("/")) {
        urls.add(node.index.url.replace(/\/$/, "") || node.index.url);
      }
      collectNavUrls(node.children, urls);
    }
  }
  return urls;
}

function priorityFor(url: string): number {
  if (url === "/docs/introduction" || url === "/help") return 1;
  // Section landing pages: /docs/sales, /help/sales, …
  if (url.split("/").length === 3) return 0.8;
  return 0.6;
}

function toSitemapEntries(paths: string[]): MetadataRoute.Sitemap {
  return paths
    .map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "weekly" as const,
      priority: priorityFor(path),
    }))
    .sort((a, b) => a.url.localeCompare(b.url));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const navUrls = collectNavUrls(source.pageTree.children);

  const docsPages = source
    .getPages()
    .filter((page) => navUrls.has(page.url.replace(/\/$/, "") || page.url))
    .map((page) => page.url.replace(/\/$/, "") || page.url);

  const helpNavUrls = collectNavUrls(helpSource.pageTree.children);
  const helpPages = [
    "/help",
    ...helpSource
      .getPages()
      .filter((page) => helpNavUrls.has(page.url.replace(/\/$/, "") || page.url))
      .map((page) => page.url.replace(/\/$/, "") || page.url),
  ];

  return [
    {
      // `/` rewrites to introduction; keep a single home entry for crawlers.
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...toSitemapEntries(docsPages),
    ...toSitemapEntries([...new Set(helpPages)]),
  ];
}

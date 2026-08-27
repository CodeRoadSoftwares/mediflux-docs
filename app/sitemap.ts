import type { MetadataRoute } from "next";
import type { Node } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";
import { SITE_URL } from "@/lib/site";

/** Collect published docs URLs from the sidebar tree (excludes orphans like how-to-write). */
function collectNavUrls(nodes: Node[], urls: Set<string> = new Set()): Set<string> {
  for (const node of nodes) {
    if (node.type === "page") {
      if (!node.external && node.url.startsWith("/docs")) {
        urls.add(node.url.replace(/\/$/, "") || node.url);
      }
    } else if (node.type === "folder") {
      if (node.index?.url?.startsWith("/docs")) {
        urls.add(node.index.url.replace(/\/$/, "") || node.index.url);
      }
      collectNavUrls(node.children, urls);
    }
  }
  return urls;
}

function priorityFor(url: string): number {
  if (url === "/docs/introduction") return 1;
  // Section landing pages: /docs/sales, /docs/settings, …
  if (url.split("/").length === 3) return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const navUrls = collectNavUrls(source.pageTree.children);

  const pages = source
    .getPages()
    .filter((page) => navUrls.has(page.url.replace(/\/$/, "") || page.url))
    .map((page) => {
      const path = page.url.replace(/\/$/, "") || page.url;
      return {
        url: `${SITE_URL}${path}`,
        changeFrequency: "weekly" as const,
        priority: priorityFor(path),
      };
    })
    .sort((a, b) => a.url.localeCompare(b.url));

  return [
    {
      // `/` rewrites to introduction; keep a single home entry for crawlers.
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pages,
  ];
}

import { icons } from "lucide-react";
import type { DocPageMeta } from "@/lib/docs-icon-context";

export function LucideIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden />;
}

export function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function normalizeHref(href: string) {
  return href.replace(/\/$/, "");
}

export function resolvePageMetaFromMap(
  href: string | undefined,
  pageMetaMap: Record<string, DocPageMeta>
): DocPageMeta | undefined {
  if (!href) return undefined;

  if (pageMetaMap[href]) return pageMetaMap[href];

  const normalized = normalizeHref(href);
  if (pageMetaMap[normalized]) return pageMetaMap[normalized];

  const match = Object.entries(pageMetaMap).find(([url]) =>
    normalized.endsWith(normalizeHref(url))
  );
  return match?.[1];
}

function fallbackTitleFromHref(href: string) {
  const segment = normalizeHref(href).split("/").pop() ?? "";
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function resolveCardContent(
  href: string | undefined,
  pageMetaMap: Record<string, DocPageMeta>,
  props: { title?: string; description?: string; icon?: string }
) {
  const external = href ? isExternalHref(href) : false;
  const meta = href && !external ? resolvePageMetaFromMap(href, pageMetaMap) : undefined;

  const title =
    props.title ?? meta?.title ?? (href && !external ? fallbackTitleFromHref(href) : "");

  return {
    title,
    description: props.description ?? meta?.description,
    icon: props.icon ?? meta?.icon,
    external,
  };
}

export function resolveIconFromMap(
  href: string | undefined,
  iconMap: Record<string, string>,
  explicitIcon?: string
): string | undefined {
  if (explicitIcon) return explicitIcon;
  if (!href) return undefined;

  if (iconMap[href]) return iconMap[href];

  const normalized = normalizeHref(href);
  if (iconMap[normalized]) return iconMap[normalized];

  const match = Object.entries(iconMap).find(([url]) =>
    normalized.endsWith(normalizeHref(url))
  );
  return match?.[1];
}

export const linkSurfaceClass =
  "relative w-full rounded-lg border border-border bg-card p-4 transition-[border-color] duration-150 group-hover:!border-primary";

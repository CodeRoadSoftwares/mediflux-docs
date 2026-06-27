"use client";

import { createContext, useContext, type ReactNode } from "react";

export interface DocPageMeta {
  title: string;
  description?: string;
  icon?: string;
}

const PageMetaContext = createContext<Record<string, DocPageMeta>>({});

export function PageMetaProvider({
  pageMetaMap,
  children,
}: {
  pageMetaMap: Record<string, DocPageMeta>;
  children: ReactNode;
}) {
  return (
    <PageMetaContext.Provider value={pageMetaMap}>{children}</PageMetaContext.Provider>
  );
}

export function usePageMetaMap() {
  return useContext(PageMetaContext);
}

export function useIconMap() {
  const pageMetaMap = usePageMetaMap();
  const iconMap: Record<string, string> = {};

  for (const [url, meta] of Object.entries(pageMetaMap)) {
    if (meta.icon) {
      iconMap[url] = meta.icon;
    }
  }

  return iconMap;
}

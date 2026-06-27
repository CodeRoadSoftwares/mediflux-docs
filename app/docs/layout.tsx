import { source } from "@/lib/source";
import { generateSearchIndex } from "@/lib/search-index";
import { DocsLayoutClient } from "@/components/docs/docs-layout";
import type { DocPageMeta } from "@/lib/docs-icon-context";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tree = source.pageTree;
  const searchIndex = generateSearchIndex();

  const pageMetaMap: Record<string, DocPageMeta> = {};
  for (const page of source.getPages()) {
    pageMetaMap[page.url] = {
      title: page.data.title,
      description: page.data.description,
      icon: page.data.icon,
    };
  }

  return (
    <DocsLayoutClient tree={tree} searchIndex={searchIndex} pageMetaMap={pageMetaMap}>
      {children}
    </DocsLayoutClient>
  );
}

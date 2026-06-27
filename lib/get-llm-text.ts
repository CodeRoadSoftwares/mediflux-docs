import type { source } from "@/lib/source";

type DocsPage = ReturnType<typeof source.getPage>;

export async function getLLMText(page: NonNullable<DocsPage>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}

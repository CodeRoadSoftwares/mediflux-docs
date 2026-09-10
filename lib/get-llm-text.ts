type LlmPage = {
  url: string;
  data: {
    title?: string;
    getText: (type: "processed" | "raw") => Promise<string>;
  };
};

export async function getLLMText(page: LlmPage) {
  const processed = await page.data.getText("processed");
  const title = page.data.title ?? page.url;

  return `# ${title} (${page.url})\n\n${processed}`;
}

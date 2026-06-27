import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: frontmatterSchema.extend({
      badge: z.string().optional(),
      enableToc: z.boolean().default(true),
      index: z.boolean().default(false),
    }),
  },
});

export default defineConfig();

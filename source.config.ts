import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

const sharedFrontmatter = {
  badge: z.string().optional(),
  enableToc: z.boolean().default(true),
  index: z.boolean().default(false),
};

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: frontmatterSchema.extend(sharedFrontmatter),
  },
});

export const help = defineDocs({
  dir: "content/help",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: frontmatterSchema.extend({
      ...sharedFrontmatter,
      tags: z.array(z.string()).optional(),
      related: z.array(z.string()).optional(),
    }),
  },
});

export default defineConfig();

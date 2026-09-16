// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var sharedFrontmatter = {
  badge: z.string().optional(),
  enableToc: z.boolean().default(true),
  index: z.boolean().default(false)
};
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true
    },
    schema: frontmatterSchema.extend(sharedFrontmatter)
  }
});
var help = defineDocs({
  dir: "content/help",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true
    },
    schema: frontmatterSchema.extend({
      ...sharedFrontmatter,
      tags: z.array(z.string()).optional(),
      related: z.array(z.string()).optional()
    })
  }
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs,
  help
};

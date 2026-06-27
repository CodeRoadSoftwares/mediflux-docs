// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true
    },
    schema: frontmatterSchema.extend({
      badge: z.string().optional(),
      enableToc: z.boolean().default(true),
      index: z.boolean().default(false)
    })
  }
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs
};

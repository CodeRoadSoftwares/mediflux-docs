I have a new/updated document for MediFlux. Please convert and place this directly into the `okf/` bundle according to our existing OKF v0.2 standards and conventions.

### 1. DOCUMENT INPUT
- **Target Section**: [e.g. okf/docs/sales, okf/docs/inventory, okf/docs/reports, okf/help/sales, okf/help/account]
- **Slug / File Name**: [e.g. batch-expiry-tracking.md]
- **Audience**: [Select one: User (Pharmacist) | User (Cashier) | User (Admin) | User (Accountant/Owner) | User (Doctor/Staff) | Contributor | Dev | All]
- **Document Content**:
```text
[PASTE YOUR NEW DOC / DRAFT HERE]
```

---

### 2. AGENT EXECUTION RULES (Follow Existing OKF Standards)

Before writing the file, inspect `okf/schema.md`, `okf/_meta/MAPPING.md`, and existing sibling concepts in the target folder to match their exact structure:

1. **Frontmatter Schema (`okf/schema.md`)**:
   Format the YAML frontmatter with the following exact keys:
   ```yaml
   ---
   type: [Guide | Reference | Overview | FAQ | Troubleshooting | Internal Guide]
   title: "[Document Title]"
   description: "[1-2 sentence concise summary]"
   tags: [lowercase keywords array, e.g. - sales, - billing]
   timestamp: "[ISO-8601 with timezone, e.g. 2026-11-04T00:30:00+05:30]"
   resource: "/docs/... or /help/..."
   status: "current"
   audience: "[One of the approved audience values]"
   owner: ""
   icon: "[Optional PascalCase Lucide icon, e.g. ShoppingCart, List, FileText]"
   ---
   ```
   *Note: `type` is strictly validated. Procedural workflows must be `Guide`; catalogs/reports must be `Reference`; help questions must be `FAQ`; landing pages must be `Overview`.*

2. **Clean Markdown Conversion (`okf/_meta/MAPPING.md`)**:
   - Strip any JSX components (`<Steps>`, `<Tabs>`, `<Cards>`, `<Callout>`, etc.). OKF concepts are 100% pure GitHub Flavored Markdown.
   - Convert procedural steps into numbered lists: `1. **Step Title**\n\n   Step description`.
   - Convert tabbed sections into `###` headings.
   - Convert callouts/notes into blockquotes: `> **[Note]:** Content`.
   - Images must use standard markdown with an italicized caption directly below:
     ```markdown
     ![Alt text](image-url)
     *Caption: Explanatory caption text.*
     ```
   - Related concept links go under a `## Related` section at the very end of the file as bullet points: `* [Title](/docs/section/slug)`.

3. **Save File**:
   - Place the concept file at `okf/{section}/{slug}.md`.

4. **Update Section Index**:
   - Open `okf/{section}/index.md` and add a link entry for this concept so it is properly discoverable in the knowledge graph.

5. **Log the Update**:
   - Add a bullet under today's date heading in `okf/log.md` (e.g. `- **New Concept**: Added okf/{section}/{slug}.md`).

6. **Validate the Bundle**:
   - Run `node scripts/build-okf-index.mjs` to rebuild `lib/okf/generated.json` and ensure there are 0 unparseable files or dangling broken links.
   - Run `node scripts/test-mcp.mjs` to verify the concept is instantly searchable and readable via MCP.

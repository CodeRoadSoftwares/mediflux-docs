# OKF Migration Mapping Specification

This document defines the field transformations, structural mappings, and syntax conversions from Fumadocs MDX to the Open Knowledge Format (OKF v0.2).

---

## 1. Frontmatter Mapping

| Target OKF Field | Required? | Source / Transformation Rule |
| :--- | :--- | :--- |
| `type` | **Yes** | Primary concept classification based on registered schema vocabulary (`okf/schema.md`):<br>• `Overview`: Section landing pages (`overview.md`)<br>• `Guide`: Procedural task guides<br>• `Reference`: Catalogs, ledgers, reports, dashboards, settings catalogs<br>• `FAQ`: Short question/answers under `help/`<br>• `Troubleshooting`: Diagnostic walkthroughs (`login-troubleshoot.md`)<br>• `Internal Guide`: Contributor and authoring documentation (`how-to-write.md`)<br>• `Schema`: Meta-registry concept (`schema.md`) |
| `title` | No | Sourced from MDX frontmatter `title` verbatim. |
| `description` | No | Sourced from MDX frontmatter `description` verbatim. |
| `tags` | No | Sourced from MDX `tags` (or `keywords`) as YAML string array; empty `[]` if omitted. |
| `timestamp` | No | Extracted via `git log -1 --format=%cI -- <file>` (ISO-8601 with UTC offset). If empty, defaults to current timestamp and marked `[ASSUMPTION]`. |
| `resource` | No | Original public URL path (e.g. `/docs/sales/add-sale-retail`, `/docs/sales/overview`, `/docs/how-to-write`). `[ASSUMPTION]` |
| `status` | No | Preserved extra key: `draft` for stubs (`purchase-orders`, `restocks`, `re-orders`); `current` for all other concepts. |
| `audience` | No | Preserved extra key: Sourced per-file from the audit inventory. Every audience value is marked `[ASSUMPTION]`. If no specific audit row exists, default to `"All"` and mark `[ASSUMPTION: no audit row]`. Only audit vocabulary is used: `"Dev"`, `"Contributor"`, `"User (Pharmacist)"`, `"User (Cashier)"`, `"User (Admin)"`, `"User (Accountant/Owner)"`, `"User (Doctor/Staff)"`, `"User (Doctor/Admin)"`, `"User (Wholesaler/Admin)"`, `"User (Wholesaler/Accountant)"`, `"User (Accountant/Cashier)"`, `"User (Admin/Accountant)"`, `"User (Admin/Owner)"`, `"User (Pharmacist/Admin)"`, `"User (Pharmacist/Cashier)"`, `"User (Pharmacist/Accountant)"`, `"User (Clinic Staff)"`, `"User (All)"`, `"All"`. |
| `owner` | No | Optional extra key, initialized to `""`. |
| `icon` | No | Preserved extra key when present in MDX frontmatter. `[ASSUMPTION]` |
| `related` (list) | N/A | Stripped from YAML frontmatter; converted into standard Markdown links under a `## Related` section at the end of the body. |
| `enableToc` | N/A | Dropped as a Fumadocs-specific layout toggle. `[ASSUMPTION]` |

---

## 2. MDX to Markdown Body Conversion

| MDX Component / Syntax | Markdown Target | Rules & Formatting |
| :--- | :--- | :--- |
| `<Steps>` / `<Step>` | Ordered list (`1.`, `2.`, ...) | Numbers strictly sequentially starting from `1.` within each block (Correction C4). `<Step title="Title">Content</Step>` becomes `1. **Title**\n\n   Content`. |
| `<Tabs>` / `<Tab>` | `###` headings | `<Tabs>` wrapper stripped; each `<Tab value="Name">` converts to `### Name\n\nContent`. |
| `<Cards>` / `<Card>` / `<WideCards>` / `<WideCard>` / `<CardGroup>` | Bulleted list of links | `* [Title](href) - description`. If href is omitted, `* **Title**: description`. |
| `<Callout>` / `<Note>` / `<Warning>` | Blockquote (`>`) | `> **[Type/Title]:** Content`, prepending blockquote formatting across multi-line content. |
| `<Figure>` / `<img>` | `![alt](src)` | Converted to standard Markdown image. Alt text sourced from `alt` or `title`. If `description` exists, appended as italicized caption `*Caption: <description>*`. Path kept verbatim. |
| `<Accordion>` / `<Accordions>` | `###` heading | Unwrapped; `<Accordion title="Title">` becomes `### Title\n\nContent`. |
| `<Badge>` | Inline bold | `<Badge>New</Badge>` → `**[New]**`. |
| `<YouTube>` / `<Video>` | Link callout | `> **Video:** [Title](URL)`. |
| `<FileTree>` | Code block | Fenced code block ````text```` containing ASCII tree structure. |
| Other JSX tags | Unwrapped / Note | Strip container JSX tags; retain inner markdown. If meaning would be lost: `> [MIGRATION NOTE: JSX component X requires manual rewrite]`. |
| Headings, Tables, Code Fences | Verbatim | Kept as standard Markdown without alteration. |

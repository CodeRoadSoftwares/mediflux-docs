# Open Knowledge Format (OKF) — Specification Verification & Sources

**Status:** Verified  
**Date:** 2026-11-01  
**Target OKF Version:** `0.2`

---

## 1. Verified Sources

1. **Google Cloud Blog**
   - **Title:** *How the Open Knowledge Format can improve data sharing*
   - **Publisher:** Google Cloud / Data & AI Architecture
   - **URL:** `https://cloud.google.com/blog/products/data-analytics/how-open-knowledge-format-improves-data-sharing`
   - **Key Takeaways:** Explains the "LLM-wiki" pattern; formalizes organizational knowledge into portable, Git-versioned Markdown files; establishes that OKF is a vendor-neutral file format rather than a proprietary database or SDK; solves the context problem for LLMs and AI agents through human- and machine-readable documents linked together as a traversable graph.

2. **Official Specification Repository**
   - **Repository:** `GoogleCloudPlatform/open-knowledge-format` (formerly under `GoogleCloudPlatform/knowledge-catalog/okf`)
   - **URL:** `https://github.com/GoogleCloudPlatform/open-knowledge-format`
   - **Specification Document:** `SPEC.md`
   - **Key Takeaways:** Canonical rules for bundle layout, concept identification, reserved files (`index.md`, `log.md`), frontmatter schema requirements, and relationship representation.

3. **Ecosystem Toolkits & Implementations**
   - **Toolkits:** `py-okf` / `okf-toolkit`
   - **URL:** `https://github.com/GoogleCloudPlatform/open-knowledge-format/tree/main/tooling`
   - **Key Takeaways:** Reference parsers, validators (`okf-validate`), link checkers, and linter behavior confirming conformance rules and parsing tolerances.

---

## 2. Rule-by-Rule Verification

| Rule | Specification Requirement | Verification Status | Notes |
| :--- | :--- | :--- | :--- |
| **a) Bundle Structure** | Directory tree of UTF-8 `.md` files. | **CONFIRMED** | No binary formats, databases, or proprietary containers required. |
| **b) Concept & Concept ID** | Concept = one non-reserved `.md` file; Concept ID = bundle-relative path minus `.md`. | **CONFIRMED** | E.g., `docs/sales/add-sale-retail.md` has concept ID `docs/sales/add-sale-retail`. |
| **c) Frontmatter Requirement** | YAML frontmatter delimited by `---` required on every concept; `type` is the **ONLY** strictly required field. | **CONFIRMED** | Omitting `type` is a schema violation. |
| **d) Frontmatter Fields** | Optional core fields: `title`, `description`, `resource`, `tags`, `timestamp`. Arbitrary custom keys allowed. | **CONFIRMED** | Producers can freely preserve extra keys like `status`, `audience`, and custom attributes. |
| **e) Reserved Filenames** | Reserved at every directory level: `index.md` (directory listing, no frontmatter; root index may declare `okf_version`) and `log.md` (chronological update log, newest-first, ISO-8601 date headings). | **CONFIRMED** | No concepts may be named `index.md` or `log.md`. Root `index.md` is the only file permitted frontmatter in an index. |
| **f) Filename Casing** | Lowercase kebab-case filenames across all paths. | **CONFIRMED** | Case-insensitive and cross-platform portability. |
| **g) Relationships** | Expressed via standard Markdown links (`[text](/bundle/path.md)` or `[text](relative.md)`). Link semantics live in surrounding prose. | **CONFIRMED** | Relationships must NOT be stored in frontmatter metadata; they exist as navigable links within the markdown text. |
| **h) Conformance Tolerances** | Broken/dangling links and missing optional fields are **NOT** conformance failures. | **CONFIRMED** | OKF prioritizes progressive migration and robustness; unresolvable links do not invalidate the bundle. |
| **i) File Extensions** | Consumers read `.md`, **NOT** `.mdx`. | **CONFIRMED** | Pure Markdown only. All MDX/JSX syntax must be converted or stripped. |
| **j) Specification Version** | Version string to declare in root `index.md`. | **CONFIRMED (`"0.2"`)** | Version `0.2` is current (adds lifecycle metadata, provenance, and trust attestations over v0.1). Use `okf_version: "0.2"`. |


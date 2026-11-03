---
type: Schema
title: OKF Type Registry
description: Type vocabulary used by every concept in this bundle.
timestamp: 2026-11-01T19:07:43+05:30
types:
  Overview: Section landing page providing orientation for a folder of concepts.
  Guide: Task-oriented procedural documentation.
  Reference: Lookup content — catalogs, reports, lists, dashboards, templates.
  FAQ: Short problem-oriented question/answer under help/.
  Troubleshooting: Diagnostic walkthroughs for a specific failure class.
  Internal Guide: Authoring or contributor documentation; not end-user facing.
  Schema: Meta concept describing the bundle's type vocabulary.
---

# OKF Type Registry & Bundle Conventions

This schema document registers the open type vocabulary used across all concepts in the MediFlux Open Knowledge Format (OKF) bundle.

## Conventions

- **File Naming**: All files use lowercase kebab-case and end with `.md`. Concepts represent individual topics, guides, and reference entries.
- **Reserved Files**:
  - `index.md`: Present at bundle root and in subdirectories to provide hierarchical listings. Only the root `index.md` contains frontmatter (`okf_version: "0.2"`).
  - `log.md`: Chronological log of bundle updates organized under ISO-8601 date headings (`YYYY-MM-DD`).
- **Relationships and Links**:
  - Semantic connections between documents are expressed as standard Markdown links (`/docs/...` or relative links).
  - Frontmatter `related:` lists from legacy MDX are converted to body markdown links under a dedicated `## Related` heading.
- **Update History**:
  - Major lifecycle and bundle history is maintained in [`log.md`](file:///home/mir-mudasir/Desktop/mediflux-docs/okf/log.md).


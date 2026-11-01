# OKF Migration Log & Status

This document tracks the execution status, scope boundaries, deferred remediation tasks, and conversion details for the MediFlux Fumadocs to Open Knowledge Format (OKF v0.2) migration.

---

## 1. What Is Being Done

- **Pure File Transformation**: Converting 105 Fumadocs MDX documentation pages into 105 standard OKF Markdown concepts under `okf/`.
- **Structural Organization**:
  - Mirroring all section trees (`docs/`, `help/`).
  - Converting 14 section landing pages (`index.mdx`) into `<section>/overview.md` (type `Overview`).
  - Moving `content/docs/how-to-write.mdx` to `okf/docs/contributing/how-to-write.md` (type `Internal Guide`).
- **Frontmatter Conformance**:
  - Enforcing required `type` field across all concepts per the `okf/schema.md` registry.
  - Converting frontmatter `related:` lists into body markdown links under `## Related`.
  - Adding Git commit timestamps, public URL resources, status flags, and human-readable audience annotations.
- **Index Generation**:
  - Creating `okf/index.md` declaring `okf_version: "0.2"`.
  - Generating unfrontmattered directory `index.md` files for every subfolder.
- **Auditing Artifacts**:
  - Logging all unresolved links, missing targets, and dead images into `_meta/dangling-links.md` without altering source targets.

---

## 2. What Is Deferred (Remediation Phase)

Per migration constraints, the following defects and remediation tasks are explicitly preserved as-is:
1. **Broken Internal Links**: Broken cross-references and broken `related:` targets are kept verbatim.
2. **Dead / Missing Images**: Dead image links in `<Figure>` tags are converted to Markdown image syntax with their broken URLs untouched.
3. **Duplicate Titles**: Any duplicate titles across files remain untouched.
4. **Stubs**: Stubs (`purchase-orders.md`, `restocks.md`, `re-orders.md`) remain stubs with `status: draft`.
5. **Orphan Articles**: `help/sales/wrong-calculations.md` is preserved in its section without artificial linkage.
6. **Codebase Modifications**: No changes are made to Next.js or Fumadocs application code outside `okf/`.

---

## 3. What Was Done (Conversion Execution Record)

- **Total Source Files Processed**: 105 / 105
- **Total Concepts Generated**: 105 / 105
- **Total Subdirectory Index Files Generated**: 19 (+ 1 root index.md)
- **Total Dangling Links Cataloged**: 62 (22 body, 8 related, 32 images)

### Assumptions Applied
- `[ASSUMPTION]` Audience values mapped from audit table per-file; no values invented.
- `[ASSUMPTION]` Resource paths mapped to original public URLs (landing pages → `/docs/<section>/overview`).
- `[ASSUMPTION]` Icon names preserved as extra frontmatter keys to retain UI metadata.
- `[ASSUMPTION]` `enableToc` omitted as Fumadocs-specific layout setting.

### Section Execution Summary
| Section | Concepts Written | Assumptions Applied | Dangling Links Found |
| :--- | :--- | :--- | :--- |
| `docs/introduction` | 4 | 12 | 0 |
| `docs/supplier` | 6 | 18 | 0 |
| `docs/purchases` | 9 | 27 | 0 |
| `docs/inventory` | 7 | 21 | 0 |
| `docs/customers` | 8 | 24 | 0 |
| `docs/sales` | 9 | 27 | 4 |
| `docs/reports` | 4 | 12 | 0 |
| `docs/accounting` | 13 | 39 | 22 |
| `docs/clinics` | 7 | 21 | 2 |
| `docs/settings` | 12 | 36 | 1 |
| `docs/wallet` | 1 | 3 | 0 |
| `docs/contributing` | 1 | 2 | 0 |
| `help/getting-started` | 3 | 6 | 2 |
| `help/account` | 7 | 14 | 13 |
| `help/purchases` | 1 | 2 | 1 |
| `help/ledgers` | 2 | 4 | 4 |
| `help/sales` | 11 | 22 | 13 |

### Lossy JSX Review
- **Zero JSX Tags Remain**: All container and presentational JSX tags (`<Steps>`, `<Tabs>`, `<Cards>`, `<Callout>`, `<Figure>`, `<Accordion>`, `<Badge>`, etc.) were transformed completely into standard Markdown without loss of content.

## 4. Phase 2 — Body Link Remediation Record

- **Total Body Links Processed**: 22 / 22
- **Action Breakdown**: 14 FIX, 8 UNLINK
- **Unique Files Touched**: 15
- **Policy Applied**:
  - **Policy A (Fix-When-Obvious)**: Applied to 14 rows where the link text and prose unambiguously matched existing concepts in the bundle (`profitandloss-statements.md`, `ledger.md`, `help/account/reset-password.md`).
  - **Policy B (Unlink Otherwise)**: Applied to 8 rows where the target was ambiguous (e.g. `journal-entries` between `journals.md` vs `add-journal-entry.md`; `add-sale` between `add-sale-retail.md` vs `add-wholesale.md`), missing (e.g. `Chart of Accounts`, `Help & Support`), or pointed to the same self-referencing question.
- **Assumptions / Inferences Made**:
  - `[ASSUMPTION]` Pointed `[Profit & Loss]` and `[Profit & Loss Statement]` (rows 2, 4, 7, 9, 13, 18) to `/docs/accounting/profitandloss-statements.md`.
  - `[ASSUMPTION]` Pointed `[Ledgers]` and `[Chart of Accounts]` (rows 3, 5, 10, 11, 14, 16, 17) to `/docs/accounting/ledger.md`, since `ledger.md` explicitly documents the pharmacy's Chart of Accounts.
  - `[ASSUMPTION]` Pointed `[How do I reset my password?]` in `how-do-i-sign-in.md` (row 22) to `/help/account/reset-password.md`.

## 5. Phase 3 — Related Link Remediation Record

- **Total Related Links Processed**: 8 / 8
- **Action Breakdown**: 6 FIX, 2 REMOVED
- **Unique Files Touched**: 6 concept files (`add-user.md`, `change-store-details.md`, `login-troubleshoot.md`, `remove-user.md`, `user-permission.md`, `supplier-adjust-entry.md`, `draft-and-add-sale-diff.md` — 7 total files touched)
- **Policy Applied**:
  - **Policy A (Fix-When-Obvious)**: Applied to 6 rows where the legacy slug or typo clearly mapped to an existing concept in the bundle:
    - User management links (`/docs/account/user-management`) → `/docs/settings/user-management.md` (3 files).
    - Store settings link (`/docs/account/settings`) → `/docs/settings/overview.md`.
    - Supplier links with plural folder typo (`/docs/suppliers/*`) → `/docs/supplier/supplier-ledger.md` and `/docs/supplier/overview.md`.
  - **Policy B (Remove Otherwise)**: Applied to 2 rows:
    - `help/account/login-troubleshoot.md`: `* [Login](/docs/account/login)` removed as no Login documentation concept exists in `docs/`. The empty `## Related` section was dropped entirely.
    - `help/sales/draft-and-add-sale-diff.md`: `* [Add Sale](/docs/sales/add-sale)` removed as `add-sale` is ambiguous between retail and wholesale concepts. The remaining `* [Drafts]` link was retained.
- **Sections Dropped**: 1 (`help/account/login-troubleshoot.md`).

## 6. Phase 4a — Dead Image References Triage Record

- **Total Image References Audited**: 32 / 32
- **Triage Breakdown**:
  - **CRITICAL**: 4 images (load-bearing in multi-step procedures)
  - **SUPPORTING**: 17 images (illustrative; prose stands alone)
  - **DECORATIVE**: 11 images (redundant UI screenshots; `prose-defect: no` across all 11)
- **Data Issue Identified**: Image reference `scan-bar-code` in `docs/sales/scan-and-ocr.md` has no file extension (confirmed present in source MDX `content/docs/sales/scan-and-ocr.mdx`).
- **Deliverable**: Manifest written to `okf/_meta/missing-images.md`.
- **Status**: Remediation deferred to **Phase 4b** (Batch 1 mechanical removal, Batch 2 text rewrite, Batch 3 asset sourcing).


## 7. Phase 4b / Batch 1 — Decorative Image Removal Record

- **Total Images Processed**: 11 / 11 DECORATIVE dead image references removed
- **Files Touched**: 8 unique concept files (11 image references total)
  - `okf/docs/accounting/itc-reversals.md` (3 images)
  - `okf/docs/clinics/overview.md` (1 image)
  - `okf/docs/sales/returned-sales.md` (1 image)
  - `okf/help/account/change-store-details.md` (1 image)
  - `okf/help/account/login-troubleshoot.md` (1 image)
  - `okf/help/getting-started/how-do-i-sign-in.md` (1 image)
  - `okf/help/sales/cannot-find-a-sale.md` (1 image)
  - `okf/help/sales/print-or-share-bill.md` (1 image)
  - `okf/help/sales/update-sale.md` (1 image)
- **Image Basenames Removed**:
  1. `itc-reversals-overview.png`
  2. `itc-reversals-summary-cards.png`
  3. `itc-reversals-table.png`
  4. `clinic-prescriptions-overview.png`
  5. `returned-list.png`
  6. `change-store-details.png`
  7. `cannot-login.png`
  8. `sign-in-steps.png`
  9. `find-previous-sale.png`
  10. `print-share-bill.png`
  11. `update-sale.png`
- **Prose Defect Verification**: Confirmed `prose-defect: no` for all 11 targets. None of the removed images had trailing demonstratives (such as "As shown above...") or procedural dependencies in adjacent prose.
- **Remediation Action**: Deleted the `![alt](src)` line and adjacent `*Caption: ...*` line, collapsing surrounding whitespace to a clean single blank line between paragraphs/headings.
- **Remaining Dead Image References**: 21 (17 SUPPORTING, 4 CRITICAL), scheduled for Phase 4b Batch 2 and Batch 3.


## 8. Phase 4b / Batch 2 — Supporting Image Rewrites Record

- **Total Images Processed**: 10 SUPPORTING dead image references audited
- **Remediation Breakdown**:
  - **Rewritten as Inline Prose (7 rows)**:
    1. `itc-reversals-actions.png` in `okf/docs/accounting/itc-reversals.md`
    2. `add-user.png` in `okf/help/account/add-user.md`
    3. `remove-user.png` in `okf/help/account/remove-user.md`
    4. `user-management.png` in `okf/help/account/reset-password.md`
    5. `change-user-permissions.png` in `okf/help/account/user-permission.md`
    6. `save-draft-vs-add.png` in `okf/help/sales/draft-and-add-sale-diff.md`
    7. `return-sale.png` in `okf/help/sales/return-sale.md`
  - **Promoted to Batch 3 via Escape Hatch (3 rows)**:
    8. `returned-expanded-row.png` in `okf/docs/sales/returned-sales.md`: Promoted due to structural 9-column sample breakdown and specific product/pricing numbers already fully described in adjacent prose table; generating fake drug numbers would invent data.
    9. `edit-profile-password.png` in `okf/help/account/reset-password.md`: Promoted per Q3 as numbered steps 1–4 already fully describe all depicted input fields and button without redundant claims.
    10. `wrong-tabs-calculation.png` in `okf/help/sales/wrong-calculations.md`: Promoted due to load-bearing arithmetic calculation defect illustration where paraphrasing without visual grounding requires inventing fictional data.
- **Factual Claims and Sources**:
  - `itc-reversals-actions.png`: Sourced button names (**Mark N/A**, **Reverse**, **Mark all N/A**, **Reverse all**) from caption and adjacent bulk actions table.
  - `add-user.png`: Sourced **Store Users** destination and module permission activation from `okf/docs/settings/user-management.md`.
  - `remove-user.png`: Sourced **Other Options** location, toggle placement below permissions grid, and **Save** / **Cancel** buttons from `okf/docs/settings/user-management.md`.
  - `user-management.png`: Sourced **Store Users** table layout and **Actions** column with **Edit** button from `okf/docs/settings/user-management.md`.
  - `change-user-permissions.png`: Sourced specific functional module names (**Sale**, **Purchase**, **Customer**, **Supplier**, **Reports**) and access controls (**Read**, **Write**, **Delete**) from `okf/docs/settings/user-management.md`.
  - `save-draft-vs-add.png`: Sourced billing footer location and difference in stock handling from `okf/docs/sales/add-sale-retail.md:610-618` and `okf/docs/sales/drafts.md`.
  - `return-sale.png`: Sourced **Return Sale** confirmation, **Cancel** option, **Sale returned successfully!** toast message, and **Returned Sales** destination from `okf/docs/sales/returned-sales.md:41-43`.
- **Placeholder Insertions**: Inserted standard `> **[IMAGE PENDING]**` blockquotes for all 3 promoted rows.
- **Remaining Dead Image References**: 14 (10 SUPPORTING [7 original Batch 3 + 3 promoted], 4 CRITICAL), scheduled for Phase 4b Batch 3 asset sourcing.

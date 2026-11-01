# Dangling and Unresolved Links Audit

This report records all broken links, mismatched slugs, and missing image targets identified during the OKF migration. Per migration constraints, these defects are preserved verbatim in the converted concepts and cataloged here for subsequent remediation.

| Source Concept | Link Type | Target | Reason | Resolution |
| :--- | :--- | :--- | :--- | :--- |
| `docs/accounting/accounting-basics` | body | `/docs/accounting/index` | missing-file | unlinked |
| `docs/accounting/accounting-basics` | body | `/docs/accounting/pl-statement` | missing-file | fixed → `/docs/accounting/profitandloss-statements.md` |
| `docs/accounting/balance-sheet` | body | `/docs/accounting/accounts` | missing-file | fixed → `/docs/accounting/ledger.md` |
| `docs/accounting/balance-sheet` | body | `/docs/accounting/pl-statement` | missing-file | fixed → `/docs/accounting/profitandloss-statements.md` |
| `docs/accounting/bank-accounts` | body | `/docs/accounting/accounts` | missing-file | fixed → `/docs/accounting/ledger.md` |
| `docs/accounting/dashboard` | body | `/docs/accounting/journal-entries` | missing-file | unlinked |
| `docs/accounting/dashboard` | body | `/docs/accounting/profit-loss` | missing-file | fixed → `/docs/accounting/profitandloss-statements.md` |
| `docs/accounting/daybook` | body | `/docs/accounting/journal-entries` | missing-file | unlinked |
| `docs/accounting/daybook` | body | `/docs/accounting/profit-loss` | missing-file | fixed → `/docs/accounting/profitandloss-statements.md` |
| `docs/accounting/general-ledger` | body | `/docs/accounting/accounts` | missing-file | fixed → `/docs/accounting/ledger.md` |
| `docs/accounting/itc-reversals` | body | `/docs/accounting/accounts` | missing-file | fixed → `/docs/accounting/ledger.md` |
| `docs/accounting/itc-reversals` | body | `/docs/accounting/journal-entries` | missing-file | unlinked |
| `docs/accounting/itc-reversals` | body | `/docs/accounting/profit-loss` | missing-file | fixed → `/docs/accounting/profitandloss-statements.md` |
| `docs/accounting/itc-reversals` | image | `/images/accounting/itc-reversals-actions.png` | dead-image | rewritten (Batch 2) |
| `docs/accounting/itc-reversals` | image | `/images/accounting/itc-reversals-overview.png` | dead-image | removed (Batch 1 — decorative) |
| `docs/accounting/itc-reversals` | image | `/images/accounting/itc-reversals-summary-cards.png` | dead-image | removed (Batch 1 — decorative) |
| `docs/accounting/itc-reversals` | image | `/images/accounting/itc-reversals-table.png` | dead-image | removed (Batch 1 — decorative) |
| `docs/accounting/journals` | body | `/docs/accounting/accounts` | missing-file | fixed → `/docs/accounting/ledger.md` |
| `docs/accounting/overview` | body | `/docs/accounting/accounts` | missing-file | unlinked |
| `docs/accounting/profitandloss-statements` | body | `/docs/accounting/accounts` | missing-file | fixed → `/docs/accounting/ledger.md` |
| `docs/accounting/trial-balance` | body | `/docs/accounting/accounts` | missing-file | fixed → `/docs/accounting/ledger.md` |
| `docs/accounting/trial-balance` | body | `/docs/accounting/pl-statement` | missing-file | fixed → `/docs/accounting/profitandloss-statements.md` |
| `docs/clinics/overview` | image | `/images/clinic-prescriptions-overview.png` | dead-image | removed (Batch 1 — decorative) |
| `docs/clinics/prescriptions` | body | `/docs/sales/add-sale` | missing-file | unlinked |
| `docs/sales/returned-sales` | image | `/images/returned-expanded-row.png` | dead-image | promoted to Batch 3 |
| `docs/sales/returned-sales` | image | `/images/returned-list.png` | dead-image | removed (Batch 1 — decorative) |
| `docs/sales/scan-and-ocr` | image | `/images/scan-bar-code` | dead-image | — |
| `docs/sales/scan-and-ocr` | image | `/images/scan-ocr-mode.png` | dead-image | — |
| `docs/settings/referrals` | body | `/docs/settings/index` | missing-file | unlinked |
| `help/account/add-user` | image | `/images/faqs/add-user.png` | dead-image | rewritten (Batch 2) |
| `help/account/add-user` | related | `/docs/account/user-management` | meta-slug-mismatch | fixed → `/docs/settings/user-management.md` |
| `help/account/change-store-details` | image | `/images/faqs/change-store-details.png` | dead-image | removed (Batch 1 — decorative) |
| `help/account/change-store-details` | related | `/docs/account/settings` | meta-slug-mismatch | fixed → `/docs/settings/overview.md` |
| `help/account/login-troubleshoot` | image | `/images/faqs/cannot-login.png` | dead-image | removed (Batch 1 — decorative) |
| `help/account/login-troubleshoot` | related | `/docs/account/login` | meta-slug-mismatch | removed |
| `help/account/remove-user` | image | `/images/faqs/remove-user.png` | dead-image | rewritten (Batch 2) |
| `help/account/remove-user` | related | `/docs/account/user-management` | meta-slug-mismatch | fixed → `/docs/settings/user-management.md` |
| `help/account/reset-password` | body | `/docs/faqs/account/reset-password` | missing-file | unlinked |
| `help/account/reset-password` | image | `/images/faqs/edit-profile-password.png` | dead-image | promoted to Batch 3 |
| `help/account/reset-password` | image | `/images/faqs/user-management.png` | dead-image | rewritten (Batch 2) |
| `help/account/user-permission` | image | `/images/faqs/change-user-permissions.png` | dead-image | rewritten (Batch 2) |
| `help/account/user-permission` | related | `/docs/account/user-management` | meta-slug-mismatch | fixed → `/docs/settings/user-management.md` |
| `help/getting-started/how-do-i-sign-in` | body | `/docs/faqs/account/reset-password` | missing-file | fixed → `/help/account/reset-password.md` |
| `help/getting-started/how-do-i-sign-in` | image | `/images/faqs/sign-in-steps.png` | dead-image | removed (Batch 1 — decorative) |
| `help/ledgers/customer-adjust-entry` | image | `/images/faqs/customer-ledger-adjust.png` | dead-image | — |
| `help/ledgers/supplier-adjust-entry` | image | `/images/faqs/supplier-ledger-adjust.png` | dead-image | — |
| `help/ledgers/supplier-adjust-entry` | related | `/docs/suppliers` | meta-slug-mismatch | fixed → `/docs/supplier/overview.md` |
| `help/ledgers/supplier-adjust-entry` | related | `/docs/suppliers/supplier-ledger` | meta-slug-mismatch | fixed → `/docs/supplier/supplier-ledger.md` |
| `help/purchases/add-purchase-from-photo` | image | `/images/faqs/add-purchase-scan.png` | dead-image | — |
| `help/sales/cannot-find-a-sale` | image | `/images/faqs/find-previous-sale.png` | dead-image | removed (Batch 1 — decorative) |
| `help/sales/create-credit-note` | image | `/images/faqs/add-credit-note.png` | dead-image | — |
| `help/sales/create-debit-note` | image | `/images/faqs/create-debit-note-page.png` | dead-image | — |
| `help/sales/create-debit-note` | image | `/images/faqs/generate-debit-note-drug-list.png` | dead-image | — |
| `help/sales/draft-and-add-sale-diff` | image | `/images/faqs/save-draft-vs-add.png` | dead-image | rewritten (Batch 2) |
| `help/sales/draft-and-add-sale-diff` | related | `/docs/sales/add-sale` | meta-slug-mismatch | removed |
| `help/sales/nrx-sale` | image | `/images/faqs/nrx-h1-type-column.png` | dead-image | — |
| `help/sales/print-or-share-bill` | image | `/images/faqs/print-share-bill.png` | dead-image | removed (Batch 1 — decorative) |
| `help/sales/return-sale` | image | `/images/faqs/return-sale.png` | dead-image | rewritten (Batch 2) |
| `help/sales/update-sale` | image | `/images/faqs/update-sale.png` | dead-image | removed (Batch 1 — decorative) |
| `help/sales/wrong-calculations` | image | `/images/faqs/drug-list-separated-view.png` | dead-image | — |
| `help/sales/wrong-calculations` | image | `/images/faqs/edit-units-on-drug.png` | dead-image | — |
| `help/sales/wrong-calculations` | image | `/images/faqs/wrong-tabs-calculation.png` | dead-image | promoted to Batch 3 |

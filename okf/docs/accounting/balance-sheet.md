---
type: Reference
title: Balance Sheet
description: View your pharmacy balance sheet in MediFlux. Track assets, liabilities, and equity to understand your business's financial position easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/accounting/balance-sheet
status: current
audience: User (Accountant/Owner)
owner: ""
icon: Scale
---

# Balance Sheet

The **Balance Sheet** is a snapshot of your **pharmacy's financial position** at a single point in time in **MediFlux**. It answers one fundamental question: what does the business own, and how is it financed? The sheet is divided into three sections: **Assets**, **Liabilities**, and **Equity**. It is governed by the accounting equation:

**Assets = Liabilities + Equity**

In MediFlux, the Balance Sheet is generated automatically from your ledger balances. Unlike the Trial Balance, which lists every account with its activity, the Balance Sheet groups accounts into meaningful categories and shows only the net closing balance of each.

Navigate here from the sidebar: **Accounting → Balance Sheet**.

![MediFlux Pharmacy Balance Sheet Overview](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/6db518d3-55d9-41e0-9003-61d9a8be46ef-BS-OVERVIEW.png)
*Caption: A snapshot of a pharmacy's financial position on a selected date, showing Assets, Liabilities, and Equity in MediFlux.*

---

## Search and Filter by Date

The Balance Sheet is a snapshot, not a period report. Use the date picker at the top to select the **as-on date**. This defaults to today. Click the field to open the calendar and pick any past date to see what your financial position looked like then.

Use **Search ledgers** to find a specific account by name instantly.

![MediFlux Balance Sheet Search and Date Filter](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/0cc13cc3-18d8-4613-b80b-9836f28225ea-search-bs.png)
*Caption: Select any past date to view the pharmacy financial position as on that specific day in MediFlux.*

---

## Summary Cards

Four cards sit at the top, giving you the big picture at a glance:

| Card | What it shows |
|------|---------------|
| **Total Assets** | The total value of everything the business owns. Shown as a debit balance |
| **Total Liabilities** | The total amount the business owes to others. Shown as a credit balance |
| **Total Equity** | The owner's stake in the business. Shown as a credit balance |
| **Current Year Earnings** | The net profit or loss accumulated in the current accounting period, not yet closed to Retained Earnings |

![MediFlux Balance Sheet Summary Cards](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/c77bad36-cf66-4934-8397-f59b28742f41-bs-summaryCards.png)
*Caption: Summary cards showing Total Assets, Total Liabilities, Total Equity, and Current Year Earnings for a pharmacy.*

> **[Note]** **Total Assets** must always equal **Total Liabilities + Total Equity**. If these numbers do not match, there is a fundamental error in the books that must be resolved.

---

## Assets

Assets are what your pharmacy owns. They are listed in order of liquidity, with the most liquid assets (cash, receivables) at the top and fixed assets at the bottom.

| Column | What it means |
|--------|---------------|
| **Ledger** | Account name with `Dr` or `Cr` badge. Parent groups can be expanded to reveal child accounts |
| **Balance** | The net closing balance of the account or group. Shown as `Dr` for assets |

Click the arrow next to any parent group to expand it and see the individual child account balances.

### Example: Newly Initialized Store

![MediFlux Newly Initialized Store Balance Sheet](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/881645eb-4973-4ab8-a0bb-43afbe8c12d8-new-acc-bs.png)
*Caption: Minimal but balanced Balance Sheet for a newly initialized pharmacy store in MediFlux, showing only inventory and tax assets.*

| Account | Balance |
|---------|---------|
| **Inventory** | `₹23,420.02 Dr` |
| Medicine Inventory | `₹16,495.02 Dr` |
| Non-Drug Inventory | `₹6,925.00 Dr` |
| **Tax Assets** | `₹1,196.90 Dr` |
| GST Input CGST | `₹598.45 Dr` |
| GST Input SGST | `₹598.45 Dr` |
| **Total Assets** | `₹24,616.92 Dr` |

In this example, the store has just been initialized. The only assets are inventory stock and input GST credits. There are no bank balances, receivables, or fixed assets yet.

### Example: Mature Store

![MediFlux Mature Pharmacy Store Assets Section](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/04727d2d-c4cc-42ed-95f3-a84b30ce3084-mature-store-bs.png)
*Caption: Assets section of a mature pharmacy store Balance Sheet with Cash & Bank, Receivables, Inventory, and Tax Assets fully expanded.*

| Account | Balance |
|---------|---------|
| **Cash & Bank** | `₹47,30,287.80 Dr` |
| Cash on Hand | `₹3,45,316.80 Dr` |
| Bank Accounts | `₹43,61,971.00 Dr` |
| **Accounts Receivable** | `₹94,581.31 Dr` |
| Customer Receivables | `₹94,581.31 Dr` |
| **Inventory** | `₹11,07,865.75 Dr` |
| Medicine Inventory | `₹10,74,632.27 Dr` |
| Non-Drug Inventory | `₹37,414.07 Dr` |
| Purchase Return | `₹3,902.99 Cr` |
| Purchase Return - Non-Drug Inventory | `₹77.70 Cr` |
| **Tax Assets** | `₹2,61,042.70 Dr` |
| GST Input CGST | `₹1,12,307.96 Dr` |
| GST Input SGST | `₹1,47,324.84 Dr` |
| GST Input IGST | `₹1,408.80 Dr` |
| **Total Assets** | `₹61,93,777.56 Dr` |

> **[Note]** **Purchase Return** and **Purchase Return - Non-Drug Inventory** carry credit balances. These are **contra-asset** accounts that reduce the total value of inventory.

---

## Liabilities

Liabilities are what your pharmacy owes to others. They are listed in order of due date, with current liabilities (due within a year) first.

### Example: Newly Initialized Store

| Account | Balance |
|---------|---------|
| **Accounts Payable** | `₹9,984.00 Cr` |
| Trade Creditors | `₹9,984.00 Cr` |
| **Total Liabilities** | `₹9,984.00 Cr` |

### Example: Mature Store

![MediFlux Pharmacy Liabilities Section](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/17fff84e-2586-43a8-842f-faf40a4c38a6-liabilities-bs.png)
*Caption: Liabilities section of a mature pharmacy store Balance Sheet showing Accounts Payable and GST Payable with sub-accounts.*

| Account | Balance |
|---------|---------|
| **Accounts Payable** | `₹3,00,699.63 Cr` |
| Trade Creditors | `₹3,00,699.63 Cr` |
| **GST Payable** | `₹26,457.45 Cr` |
| Output GST | `₹26,457.45 Cr` |
| GST Output CGST | `₹12,435.38 Cr` |
| GST Output SGST | `₹12,435.38 Cr` |
| GST Output IGST | `₹1,588.00 Cr` |
| **Total Liabilities** | `₹3,27,157.08 Cr` |

> **[Note]** **GST Payable** is a liability because it represents tax collected from customers that must be remitted to the government.

---

## Equity

Equity represents the owner's residual claim on the assets after all liabilities are settled. It includes capital invested, retained profits from previous years, and the current year's earnings.

### Example: Newly Initialized Store

| Account | Balance |
|---------|---------|
| **Equity** | `₹14,632.92 Cr` |
| Retained Earnings | `₹14,632.92 Cr` |
| **Total Equity** | `₹14,632.92 Cr` |

### Example: Mature Store

![MediFlux Pharmacy Equity Section](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/82fa5fb9-7ea8-497c-bb21-8e460f6c7dec-equity-bs.png)
*Caption: Equity section of a mature pharmacy store Balance Sheet showing Retained Earnings, Current Year Earnings, and owner capital/drawings.*

| Account | Balance |
|---------|---------|
| **Equity** | `₹58,66,620.48 Cr` |
| Retained Earnings | `₹58,13,622.02 Cr` |
| Current Year Earnings (Calculated) | `₹23,651.39 Cr` |
| Mehreen | `₹20,25,594.40 Cr` |
| Owner's Capital - Mehreen | `₹20,26,368.20 Cr` |
| Owner's Drawings - Mehreen | `₹773.80 Dr` |
| **Total Equity** | `₹58,66,620.48 Cr` |

> **[Note]** **Current Year Earnings (Calculated)** is kept separate from **Retained Earnings** so you can see how much the business has earned in the current period. **Owner's Drawings** is a contra-equity account that reduces total equity.

---

## Why Assets Must Equal Liabilities + Equity

Every transaction affects at least two accounts in a way that keeps the accounting equation balanced.

| Transaction | Effect on the equation |
|-------------|------------------------|
| **Owner invests cash** | Assets (Cash) increase, Equity (Capital) increases |
| **Buy inventory on credit** | Assets (Inventory) increase, Liabilities (Accounts Payable) increase |
| **Make a credit sale** | Assets (Accounts Receivable) increase, Equity increases via Revenue |
| **Pay a supplier** | Assets (Cash) decrease, Liabilities (Accounts Payable) decrease |
| **Owner takes drawings** | Assets (Cash) decrease, Equity decreases via Drawings |

Because every transaction maintains the balance, the totals at the bottom of the sheet must always match:

**Total Assets = Total Liabilities + Total Equity**

---

## Current vs. Non-Current

The Balance Sheet separates assets and liabilities into **Current** and **Non-Current** categories.

| Category | Definition | Examples |
|----------|------------|----------|
| **Current Assets** | Convertible to cash or used up within one year | Cash, Inventory, Receivables, Prepaid Expenses, Tax Assets |
| **Non-Current Assets** | Held for more than one year | Fixed Assets, Deposits, Equipment, Property |
| **Current Liabilities** | Due for payment within one year | Accounts Payable, GST Payable, Short-Term Loans, Accrued Expenses |
| **Non-Current Liabilities** | Due after more than one year | Long-Term Loans, Mortgage |

This split helps you assess the short-term financial health of the pharmacy.

---

## Common Mistakes

> **[Warning: Thinking the Balance Sheet shows your profit]** The Balance Sheet shows **position**, not **performance**. It tells you what you own and owe on a specific date, not how much you earned during the period. For revenue, expenses, and net profit, open the **Profit and Loss Statement**.

> **[Warning: Ignoring contra accounts that reduce parent totals]** Accounts like **Purchase Return** under Inventory and **Owner's Drawings** under Equity carry opposite balances and actively subtract from their parent group. Always expand parent groups to see the full breakdown.

---

## Frequently Asked Questions


  ### What is the difference between Balance Sheet and Trial Balance?

The **Trial Balance** is an internal tool that lists every ledger with its opening balance, period activity, and closing balance. It is used to verify that debits equal credits. The **Balance Sheet** is a formal financial statement that groups accounts into Assets, Liabilities, and Equity to show the financial position at a point in time.
  ### Why is Current Year Earnings shown separately?

**Current Year Earnings** is a temporary equity account that accumulates net profit or loss from the start of the financial year. It is kept separate from **Retained Earnings** so you can see how much the business has earned in the current period. At year-end, this balance is transferred to Retained Earnings.
  ### Can a liability account show a debit balance?

Normally no, but it can happen in rare cases such as overpayment to a supplier. If a liability account shows a debit balance, it effectively becomes an asset (the supplier owes you money).
  ### Why does Purchase Return appear under Assets?

**Purchase Return** is a **contra-asset** account. It sits under the Inventory parent group but carries a credit balance. It reduces the total value of inventory on the Balance Sheet.
  ### How often should I review the Balance Sheet?

Most pharmacy owners review the Balance Sheet monthly alongside the Profit and Loss Statement. It helps you track cash position, debt levels, and whether the business is growing in value over time.


---

## Next Steps


  * [Trial Balance](/docs/accounting/trial-balance) - Verify that all your ledger debits and credits are in balance.
  * [Profit and Loss Statement](/docs/accounting/pl-statement) - See your revenue, expenses, and net profit for the period.
  * [General Ledger](/docs/accounting/ledger) - Drill down into any account to see its full transaction history.
  * [Ledgers](/docs/accounting/accounts) - Browse and manage your complete Chart of Accounts.

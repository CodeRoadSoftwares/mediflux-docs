---
type: Reference
title: Daybook
description: Track daily pharmacy financial transactions in MediFlux. View the Daybook for money received, spent, customer dues, and journal entries easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/accounting/daybook
status: current
audience: User (Accountant/Owner)
owner: ""
icon: BookOpen
---

# Daybook

The **Daybook** is a chronological list of every **pharmacy financial transaction** that affected your accounts during the selected period in **MediFlux**. It shows money that came in, money that went out, new customer dues, and new supplier dues, along with the full debit and credit details of each entry.

Navigate here from the sidebar: **Accounting → Daybook**.

> **[Note]** By default, the Daybook shows the **current month**. A newly initialized store will usually show only the Accounting Initialization entry and zero values in most summary cards.

![MediFlux Pharmacy Accounting Daybook Overview](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/0b81ef48-9199-4738-bb2d-bed8aa2e8b65-daybook.png)
*Caption: Daybook overview showing daily financial transactions, money received, and dues for a pharmacy in MediFlux.*

---

## Summary Cards

Four cards at the top give you a quick overview of the selected period.

| Card | What it shows |
|------|---------------|
| **Money Received** | Total cash and bank inflow during the period |
| **Money Spent** | Total cash and bank outflow during the period |
| **Customer Dues Added** | Total new amounts customers owe you (Amount to Receive) |
| **Supplier Dues Added** | Total new amounts you owe suppliers (Amount to Pay) |

![MediFlux Daybook Summary Cards](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/5db9e538-bf6c-4a1b-8f7d-b84a58ea1ddd-daybook-summarycards.png)
*Caption: Summary cards for money received, money spent, customer dues, and supplier dues in the MediFlux pharmacy Daybook.*

---

## Filtering the Daybook

Use the controls at the top to change the period or narrow the list.

| Control | What it does |
|---------|--------------|
| **Date range** | Select the period. Defaults to the current month. Click to open the calendar with quick presets |
| **Search description, account or...** | Find entries by description text, account name, or journal ID |
| **All entry types** | Filter by how the entry was created |

### Date Range Picker

Click the date range to open the calendar. You can pick custom dates or use the quick options:

**Today · Yesterday · Last 7 days · Last 14 days · Last 30 days · This Week · Last Week · This Month · Last Month**

Click **Apply** to update the Daybook.

![MediFlux Daybook Date Range Picker](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/06d71b6e-46f8-4cee-8757-51ab4b25d37e-date-range-filter.png)
*Caption: Calendar with quick filter options for common periods in the MediFlux pharmacy Daybook.*

### Entry Type Filter

| Type | Meaning |
|------|---------|
| **Manual entry** | Created by a user through Add Journal |
| **Sale** | Automatically generated from a sale |
| **Purchase** | Automatically generated from a purchase |
| **Payment** | Payment made to a supplier or other party |
| **Receipt** | Money received from a customer or other party |
| **Opening balance** | Entries created during account setup |
| **Adjustment** | Stock adjustments, credit notes, and similar corrections |

---

## Understanding the Table

| Column | Description |
|--------|-------------|
| **Date** | Date and time of the entry |
| **Entry** | Journal ID plus a type badge (MANUAL, AUTO SALE, AUTO PURCHASE, etc.) |
| **Description** | Short explanation of the transaction. Some descriptions include a clickable **Sale** or **Purchase** link that opens the related document |
| **Debit** | Account(s) debited. A small `+N` badge shows how many accounts are involved when there are more than one |
| **Credit** | Account(s) credited. A small `+N` badge shows how many accounts are involved when there are more than one |
| **Amount** | Value of the entry |

### Clickable Sale and Purchase Links

When a description contains a **Sale** or **Purchase** link (shown with an arrow icon), click it to open that specific sale or purchase document. This lets you jump straight from the Daybook to the original transaction.

---

## Example Entries of a Test Store

| Date | Entry | Description | Debit | Credit | Amount |
|------|-------|-------------|-------|--------|--------|
| 31 Aug 2026 | `JE-2026-08-00219` MANUAL | Return Purchase | Mediflux | Purchase Return | ₹900.00 |
| 31 Aug 2026 | `JE-2026-08-00218` MANUAL | Returned Purchase | Digital Wallets | Purchase Return | ₹6,500.00 |
| 31 Aug 2026 | `JE-2026-08-00217` MANUAL | Advance Amount To Supplier | Supplier Advances | Mediflux | ₹1,500.00 |
| 31 Aug 2026 | `JE-2026-08-00216` MANUAL | Purchase Drugs | Mediflux | Purchase Cost of Medicines | ₹500.00 |
| 25 Aug 2026 | `JE-2026-08-00197` AUTO SALE | Sale 2026/202 To Mujtaba | Purchase Cost of Medicines | Medicine Inventory | ₹20.00 |
| 25 Aug 2026 | `JE-2026-08-00190` AUTO CREDIT NOTE | Credit Note CN/2026/020 To Aleeza | Trade Creditors | Round Off Gain | ₹9.50 |
| 25 Aug 2026 | `JE-2026-08-00182` STOCK ADJUSTMENT | Bulk Stock Adjustment | Medicine Inventory | Stock Adjustment Gain | ₹40,507.96 |
| 24 Aug 2026 | `JE-2026-08-00181` AUTO RETURN SALE | Journal Entry On Returning Sale 2026/200 | Medicine Inventory | Purchase Cost of Medicines | ₹361.31 |

![MediFlux Auto-Generated Daybook Entries](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/e5a9dcc3-e9d8-4fdf-a9bc-62113d70213a-daybook-entries.png)
*Caption: Auto-generated pharmacy sale, credit note, stock adjustment, and return sale entries with linked descriptions in MediFlux.*

---

## Newly Initialized Stores

On a store that has just completed accounting setup, you will typically see:

- Summary cards mostly at `₹0.00` (except Supplier Dues Added if opening balances were entered)
- A single entry with type **ACCOUNTING INITIALIZATION**
- Description: Entries Added On Initialization Of Chart Of Accounts

This is expected. More rows appear as soon as you record sales, purchases, payments, and manual journals.

![MediFlux Newly Initialized Store Daybook](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/f0f11374-3804-4cc7-b374-54a262effe94-new-accounting.png)
*Caption: Single Accounting Initialization entry with zero values in most summary cards for a new MediFlux pharmacy store.*

---

## Common Mistakes

> **[Warning: Looking at the wrong date range]** The Daybook defaults to the **current month**. If the list looks empty or incomplete, open the date range picker and select a wider period or **Last Month**.

> **[Warning: Missing the linked sale or purchase]** Some descriptions show a **Sale** or **Purchase** link with an arrow. Clicking the link opens the original document. If you only read the text and ignore the link, you miss the fastest way to see full transaction details.

---

## Frequently Asked Questions


  ### What is the difference between Daybook and Journal Entries?

The **Journal Entries** page focuses on the list of journals with status and who posted them. The **Daybook** adds the money-flow summary cards (received, spent, dues) and shows the debit and credit accounts side by side for every entry, making it easier to see the daily impact on cash, bank, customers, and suppliers.
  ### Why do some debit or credit cells show +1, +2, +3?

The `+N` badge means the entry touches more than one account on that side. Hover or click to see the full list of accounts involved.
  ### Can I export the Daybook?

Use the date range and entry-type filters to show exactly the rows you need, then export from the related Journal Entries page or use your browser print function if a direct export button is not available on Daybook.
  ### Why is Money Received or Money Spent showing zero?

These cards only count actual cash and bank movements. Credit sales, stock adjustments, and pure accrual entries do not increase Money Received or Money Spent.


---

## Next Steps


  * [Journal Entries](/docs/accounting/journal-entries) - View every journal with status, type, and who posted it.
  * [Add Journal Entry](/docs/accounting/add-journal-entry) - Create a manual debit and credit entry.
  * [General Ledger](/docs/accounting/ledger) - See the full history and running balance of any single account.
  * [Profit & Loss](/docs/accounting/profit-loss) - See how the transactions in the Daybook flow into your income and expenses.

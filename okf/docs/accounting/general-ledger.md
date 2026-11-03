---
type: Reference
title: General Ledger
description: View your pharmacy general ledger in MediFlux. Track detailed transaction history, running balances, and audit individual ledger accounts easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/accounting/general-ledger
status: current
audience: User (Accountant/Owner)
owner: ""
icon: FileText
---

# General Ledger

## What Is the General Ledger

The **General Ledger** is the complete transaction history of a single **pharmacy ledger account** in **MediFlux**. Every debit and credit that hits that account is recorded here in chronological order, with a running balance that updates after each entry. Use it to verify how an account's balance was built, trace transactions back to their source, and reconcile figures against your bank statements or supplier records.

---

## Open the General Ledger

Go to **Accounting → General Ledger** from the left sidebar.

On your first visit, a **Select Ledger** dialog opens automatically because no account is pre-selected.

![MediFlux Pharmacy General Ledger Account Selection](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/c7c9b0e5-2c2d-4d77-80ff-00d0d62db372-general-ledger.png)
*Caption: Select Ledger dialog showing only leaf-level accounts that can be chosen for the MediFlux pharmacy general ledger.*

The dialog lists every leaf-level account. Each entry shows the breadcrumb path, such as `Accounts Receivable &gt; Customer Receivables` or `Cash & Bank &gt; Bank Accounts &gt; Test Bank`, along with the account type and normal balance tags. Click any account to load its ledger.

> **Note:** You cannot select parent groups like **Cash & Bank** or **Inventory** directly. You must select the specific child account, such as **Cash on Hand** or **Medicine Inventory**.

---

## Switch to a Different Account

Click **Change** in the account header to reopen the **Select Ledger** dialog and pick a different account at any time.

---

## Filter and Search Transactions

Use the filter bar at the top of the page to narrow down what you see.

![MediFlux Pharmacy General Ledger Filter Bar](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/92e19662-80fc-439e-88fd-c969f7588620-GL-FILTERPANEL.png)
*Caption: Search, date range, Posted/Reversals toggle, Filters, and Export controls for the MediFlux general ledger.*

| Control | What it does |
|---------|--------------|
| **Search** | Search by transaction description or journal entry number |
| **Date range** | Pick a custom period. Defaults to the current month |
| **Posted / Reversals** | Toggle between **Posted** (regular entries) and **Reversals** (reversed or correcting entries) |
| **Filters** | Opens advanced filter options for narrowing the transaction list |
| **Export** | Download the ledger data as **PDF Document** or **Excel Sheet** |

### Search

Type a description or journal number (for example `JE-2026-08-00196`) in the search box to instantly filter the table.

![MediFlux General Ledger Search Bar](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/48310dcd-632a-44dc-9771-324902eb22e3-GK-SEARCHBAR.png)
*Caption: Search the pharmacy general ledger by transaction description or journal entry number in MediFlux.*

### Date Range

Click the date range control to open the calendar. You can select custom dates or use quick presets such as **Today**, **This Month**, **Last Month**, etc.

![MediFlux General Ledger Date Range Picker](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/f857e8f5-955a-4556-a321-00aa5940aa8b-GL-DATERANGE.png)
*Caption: Choose a custom period or use the quick filter options for the pharmacy general ledger in MediFlux.*

### Posted / Reversals Toggle

Use this control to switch between regular posted entries and reversal entries.

![MediFlux General Ledger Posted and Reversals Toggle](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/6566a9ac-9092-41e3-90a8-fc2052653b94-gl-toggle.png)
*Caption: Toggle between regular posted entries and reversal entries in the MediFlux pharmacy general ledger.*

### Export

Click **Export** and choose **PDF Document** or **Excel Sheet**.

![MediFlux General Ledger Export Options](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/221cd730-0e53-46e9-aea9-242d61451b9f-GL-EXPORT.png)
*Caption: Download the pharmacy general ledger transaction history as a PDF or Excel file from MediFlux.*

---

## Read the Account Header and Summary

Below the filter bar, the header shows the selected account name, its type tag (such as `CURRENT ASSET` or `EXPENSE`), and its normal balance tag (`DEBIT NORMAL` or `CREDIT NORMAL`).

![MediFlux Pharmacy General Ledger Account Header](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/def6f878-bcd8-4489-b673-a8dd559320c7-acctype-gl.png)
*Caption: General Ledger header for Customer Receivables showing transaction history, account type, and normal balance in MediFlux.*

Four summary cards sit below the header:

| Card | What it shows |
|------|---------------|
| **Opening Balance** | The balance at the start of the selected date range |
| **Total Debits** | Sum of all debit entries in the selected period |
| **Total Credits** | Sum of all credit entries in the selected period |
| **Closing Balance** | The balance after all entries in the selected period |

![MediFlux General Ledger Summary Cards](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/1c676c0c-4881-407f-9d3b-82257d812728-gl-summarycards.png)
*Caption: Summary cards showing Opening Balance, Total Debits, Total Credits, and Closing Balance for the selected period in MediFlux.*

---

## Read the Transaction Table

The table lists every journal entry posted to this account, sorted by date with the most recent at the top.

| Column | What it means |
|--------|---------------|
| **Date** | The date the journal entry was posted |
| **Journal** | The unique journal entry identifier, such as `JE-2026-08-00196` |
| **Description** | A brief explanation of what the entry represents |
| **Type** | The journal entry type, such as `AUTO SALE`, `AUTO CREDIT NOTE`, `STOCK DELETION`, or `ACCOUNTING INITIALIZATION` |
| **Source** | The module or document that triggered the entry, such as **Sale**, **Credit Note**, **Appointment**, or **None** |
| **Debit** | Amount debited to this account. Shown in green for debit-normal accounts, red for credit-normal accounts |
| **Credit** | Amount credited to this account. Shown in red for debit-normal accounts, green for credit-normal accounts |
| **Balance** | The running balance after this entry. Always shows `Dr` or `Cr` to indicate which side the balance sits on |

> **How to read the running balance:** The balance column updates after every row. If you are viewing a debit-normal account, debits add to the balance and credits subtract from it. For a credit-normal account, credits add and debits subtract.

Click the **Journal** number in any row to open the full journal entry. This shows all the accounts that were debited and credited in that single transaction, not just the entries for the current ledger.

---

## How to Read Debit and Credit Entries

The direction of each entry depends on the account's **normal balance**.

### Debit-Normal Accounts

**Assets** and **Expenses** are debit-normal. Their balance increases when debited and decreases when credited.

| Account type | Normal balance | Debit means | Credit means |
|--------------|----------------|-------------|--------------|
| Asset | `Dr` | Balance increases | Balance decreases |
| Expense | `Dr` | Balance increases | Balance decreases |

#### Example: Customer Receivables

| Date | Journal | Description | Type | Source | Debit | Credit | Balance |
|------|---------|-------------|------|--------|-------|--------|---------|
| 31 Aug 2026 | JE-2026-08-00220 | No Description | `MANUAL` | None | `₹200.00` | — | `₹94,781.31 Dr` |
| 31 Aug 2026 | JE-2026-08-00210 | Appointment | `MANUAL` | None | `₹500.00` | `₹500.00` | `₹94,581.31 Dr` |
| 26 Aug 2026 | JE-2026-08-00196 | AR Created For Appointment 6a8d6... | `AUTO APPOINTMENT` | Appointment | — | — | `₹94,581.31 Dr` |
| 25 Aug 2026 | JE-2026-08-00191 | Customer Receivable Updated By D... | `AUTO CUSTOMER` | Customer | — | `₹11,216.86` | `₹94,581.31 Dr` |

> **Opening Balance** is the balance at the start of the selected date range (shown at the bottom of the list).  
> **Closing Balance** is the balance after all entries in the selected period (shown at the top of the list).

In this example the closing balance is `₹94,781.31 Dr`. Because this is a debit-normal asset account, a positive debit balance means customers still owe the pharmacy this amount.

![MediFlux Pharmacy Customer Receivables Ledger](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/1b1f1b33-fccd-4a69-b806-f6b6ee30088b-GL-ENTRIES.png)
*Caption: Customer Receivables ledger showing how debits increase what customers owe and credits decrease it in MediFlux.*

#### Example: Stock Loss & Adjustments

| Date | Journal | Description | Type | Source | Debit | Credit | Balance |
|------|---------|-------------|------|--------|-------|--------|---------|
| 24 Aug 2026 | JE-2026-08-00174 | Inventory Loss Due To Bulk Drug Del... | `STOCK DELETION` | None | `₹3,386.25` | — | `₹8,962.83 Dr` |
| 19 Aug 2026 | JE-2026-08-00139 | Stock Adjustment Loss Was Update... | `AUTO SALE` | Sale | `₹5,576.58` | — | `₹5,576.58 Dr` |

![MediFlux Pharmacy Stock Loss and Adjustments Ledger](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/095b3fe3-633b-42d2-a80b-e91b35d51c03-SL-ADJUSMENTS.GL.png)
*Caption: Stock Loss & Adjustments ledger showing only debit entries for a debit-normal expense account in MediFlux.*

> **Closing balance:** `₹8,962.83 Dr`. Expenses always carry a debit balance.

---

### Credit-Normal Accounts

**Liabilities**, **Equity**, and **Revenue** are credit-normal. Their balance increases when credited and decreases when debited.

| Account type | Normal balance | Debit means | Credit means |
|--------------|----------------|-------------|--------------|
| Liability | `Cr` | Balance decreases | Balance increases |
| Equity | `Cr` | Balance decreases | Balance increases |
| Revenue | `Cr` | Balance decreases | Balance increases |

#### Example: Purchase Return

| Date | Journal | Description | Type | Source | Debit | Credit | Balance |
|------|---------|-------------|------|--------|-------|--------|---------|
| 25 Aug 2026 | JE-2026-08-00190 | Purchase Return Via Credit Note | `AUTO CREDIT NOTE` | Credit Note | — | `₹190.00` | `₹3,902.99 Cr` |
| 21 Aug 2026 | JE-2026-08-00145 | Purchase Return Via Credit Note | `AUTO CREDIT NOTE` | Credit Note | — | `₹2,890.00` | `₹3,712.99 Cr` |
| 19 Aug 2026 | JE-2026-08-00134 | Purchase Return Via Credit Note | `AUTO CREDIT NOTE` | Credit Note | — | `₹515.94` | `₹822.99 Cr` |
| 19 Aug 2026 | JE-2026-08-00133 | Purchase Return Via Credit Note | `AUTO CREDIT NOTE` | Credit Note | — | `₹307.05` | `₹307.05 Cr` |

![MediFlux Pharmacy Purchase Return Ledger](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/1599cc72-3552-4f1f-bc3a-728ed2373802-purchase-return-GL.png)
*Caption: Purchase Return ledger showing only credit entries for a credit-normal contra-asset account in MediFlux.*

> **Opening balance:** `₹0.00 Dr`  
> **Closing balance:** `₹11,302.99 Cr`

Purchase Return is a **contra-asset** account (Credit Normal). Credits increase its balance and reduce the total value of inventory on your books.

#### Example: GST Output CGST

| Date | Journal | Description | Type | Source | Debit | Credit | Balance |
|------|---------|-------------|------|--------|-------|--------|---------|
| 25 Aug 2026 | JE-2026-08-00197 | CGST @2.5% (Slab 5%) | `AUTO SALE` | Sale | — | `₹0.48` | `₹12,431.81 Cr` |
| 25 Aug 2026 | JE-2026-08-00184 | CGST @5% (Slab 10%) | `AUTO SALE` | Sale | — | `₹2.56` | `₹12,431.33 Cr` |
| 24 Aug 2026 | JE-2026-08-00181 | CGST @6% (Slab 12%) | `AUTO RETURN SALE` | Sale | `₹10.20` | — | `₹12,428.77 Cr` |
| 24 Aug 2026 | JE-2026-08-00180 | CGST @6% (Slab 12%) | `AUTO SALE` | Sale | — | `₹10.20` | `₹12,438.97 Cr` |
| 24 Aug 2026 | JE-2026-08-00180 | CGST @2.5% (Slab 5%) | `AUTO SALE` | Sale | — | `₹0.42` | `₹12,428.77 Cr` |

![MediFlux Pharmacy GST Output CGST Ledger](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/79e9df94-becf-4336-b60a-20308325962c-gst-gl.png)
*Caption: GST Output CGST ledger showing credits from sales and debits from returns for a credit-normal liability account in MediFlux.*

> **Opening balance** is the balance at the start of the selected date range (`₹0.00 Dr`).  
> **Closing balance** is the balance after all entries in the selected period (`₹12,435.38 Cr`).

This is a credit-normal liability account. A credit balance means the pharmacy has collected this much CGST from customers and must remit it to the government.

When a customer returns a product, the related tax is reversed with a **debit** entry (see the `AUTO RETURN SALE` row on 24 Aug). This reduces the liability.

---

## Newly Initialized Accounts

If you have just set up the Accounting module and have not yet recorded any sales, purchases, or journal entries, your ledgers will look sparse. A newly initialized account typically shows only one entry:

| Date | Journal | Description | Type | Source | Debit | Credit | Balance |
|------|---------|-------------|------|--------|-------|--------|---------|
| — | — | Accounts Receivable Created On Ini... | `ACCOUNTING INITIALIZATION` | None | — | — | `₹0.00 Dr` |

This is a system-generated entry that creates the ledger account in your books. It carries no monetary value. Once you start recording transactions, real debits and credits will populate the table and the balance will move away from zero.

> **Tip:** For a debit-normal account like **Medicine Inventory**, the first real transaction will typically be a debit from your opening stock balance or your first purchase. For a credit-normal account like **GST Payable**, the first real transaction will be a credit from your first taxable sale.

For some accounts, the table may show **No entries found** with the message *"Try adjusting the filters or date range."* This happens when the account has no activity in the selected date range, or when it was initialized but has not yet received any transactions. Widen the date range or check back after recording sales, purchases, or journal entries.

![MediFlux General Ledger No Entries Found State](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/ee7eda58-a99e-441c-83f0-479f1fbc123d-Noentriesfound-GL.png)
*Caption: General Ledger showing No entries found empty state. Widen your date range or record transactions to populate the MediFlux ledger.*

---

## Common Mistakes to Avoid

> **[Warning: Narrow date range hiding transactions]** If you cannot find a transaction you know exists, check your **Date range** filter. It defaults to the current month, so older entries are hidden. Click the date picker and widen the range to see everything.

> **[Warning: Misreading green and red colors]** Green does not always mean good and red does not always mean bad. For a debit-normal account like **Cash on Hand**, debits are green and credits are red. For a credit-normal account like **GST Payable**, credits are green and debits are red. Always check the `DEBIT NORMAL` or `CREDIT NORMAL` tag in the header before interpreting colors.

---

## Frequently Asked Questions


  ### Why does the Select Ledger dialog open automatically?

The General Ledger page needs to know which account you want to view. Since there is no default account, the dialog opens on your first visit so you can pick one. After selecting, the dialog closes and the ledger loads. You can change the account anytime by clicking **Change**.
  ### What is the difference between Debit Normal and Credit Normal?

**Debit Normal** means the account balance increases when debited and decreases when credited. Asset and expense accounts are debit normal. **Credit Normal** means the account balance increases when credited and decreases when debited. Liability, equity, and revenue accounts are credit normal.
  ### Why are some amounts shown in green and others in red?

The color indicates whether the entry is increasing or decreasing the account balance relative to its normal balance. For a debit-normal account, debits are green (increasing) and credits are red (decreasing). For a credit-normal account, credits are green (increasing) and debits are red (decreasing).
  ### Can I view the full journal entry behind a row?

Click on the **Journal** number in any row to open the full journal entry. This shows all the accounts that were debited and credited in that single transaction, not just the entries for the current ledger.
  ### What does the Balance column represent?

The Balance column shows the running balance of the account after each transaction, calculated from top to bottom (most recent first). It tells you what the account balance was at that point in time.


---

## Next Steps


  * [Ledgers](/docs/accounting/ledger.md) - Browse and manage your complete Chart of Accounts.
  * [Add a Journal Entry](/docs/accounting/add-journal-entry) - Manually record transactions that post to multiple ledgers.
  * [Trial Balance](/docs/accounting/trial-balance) - See all ledger balances in one place to verify your books.
  * [Daybook](/docs/accounting/daybook) - View all journal entries across all accounts in chronological order.

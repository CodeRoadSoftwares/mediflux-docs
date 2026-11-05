---
type: Reference
title: "Creditors / Debtors"
description: "Track pharmacy creditors and debtors in MediFlux. View outstanding supplier payables, customer advances, and export ledger balance reports easily."
timestamp: "2026-11-04T11:35:00+05:30"
resource: /docs/reports/creditors-debtors
status: current
audience: User (Accountant/Owner)
owner: ""
icon: Scale
---

# Creditors / Debtors

The **Creditors / Debtors** report provides a clear overview of outstanding balances across your **pharmacy customers, suppliers, and general ledgers** in **MediFlux**. It helps you identify amounts payable or receivable, review customer advances, and understand your store's overall credit and debit position.

You can search for specific ledgers, filter balances by category, include or exclude general ledgers, and export the report with your preferred columns and sorting options.

To review individual transactions and payments, see [Customer Ledger](/docs/customers/customer-ledger), [Supplier Ledger](/docs/supplier/supplier-ledger), and [General Ledger](/docs/accounting/general-ledger).

## Opening the Creditors / Debtors Report

1. **Open Reports**

   From the MediFlux sidebar, expand **Reports**.

2. **Select Creditors/Debtors**

   Click **Creditors/Debtors** to open the report.

3. **Review the Report**

   The page displays three balance summaries followed by a detailed table of individual ledger balances.

![MediFlux Pharmacy Creditors and Debtors Report Overview](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/1bf687e8-285b-4698-a3c7-a75e26064a10-creditor-debtors.png)
*Caption: The Creditors / Debtors page displays credit and debit summaries, search and filter controls, and individual ledger balances in MediFlux.*

## Understanding the Summary Cards

The report displays three summary sections at the top.

| Section | Description |
| --- | --- |
| **Total Credit** | Combined credit balances of the included ledgers. |
| **Total Debit** | Combined debit balances of the included ledgers. |
| **Net Position** | Difference between total credit and total debit, indicating whether the report has a net credit or debit excess. |

The summary also displays applicable balance categories, such as:

- **Supplier Payables:** Outstanding credit balances associated with suppliers.
- **Customer Advances:** Credit balances held against customers.

![MediFlux Credit and Debit Summary Cards](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/5c5d109a-2f10-4fcc-b89c-73e12663e803-summary.png)
*Caption: Summary cards displaying Total Credit, Total Debit, Net Position, Supplier Payables, and Customer Advances in MediFlux.*

> **[Note]** The displayed amounts depend on the ledger categories and general ledger settings selected in the report.

## Searching and Filtering Ledgers

The controls above the summary allow you to narrow the report to the balances you want to review.

### Search for a Ledger

Use the **Search by ledger, area...** field to find a customer, supplier, ledger, or area.

### Filter by Ledger Category

Click **All Ledgers** to open the **Includes Filters (Multi-Select)** dropdown.

The available options include:

| Option | Description |
| --- | --- |
| **All Ledgers** | Includes suppliers, customers, and general ledger entries. |
| **Creditors** | Shows ledgers with credit balances. |
| **Debtors** | Shows ledgers with debit balances. |
| **Trade Payables** | Includes supplier payables and payable general ledger accounts. |
| **Trade Receivables** | Includes customer receivables and receivable general ledger accounts. |

You can select multiple categories using the checkboxes.

![MediFlux Ledger Category Filters for Creditors/Debtors](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/e43d74c1-ec10-498b-bfa1-5c5ef76b0a8a-ledger-filters.png)
*Caption: Multi-select dropdown to filter pharmacy ledgers by All Ledgers, Creditors, Debtors, Trade Payables, and Trade Receivables.*

### Include or Exclude General Ledgers

Use the **GL: Include** dropdown to control whether general ledger accounts are included.

| Option | Description |
| --- | --- |
| **GL: Include** | Includes applicable general ledger accounts in the report. |
| **GL: Exclude** | Excludes general ledger accounts from the report. |

![MediFlux General Ledger Inclusion Filter](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/c5a26c57-faf9-4931-bebc-1665df144973-L-filter.png)
*Caption: Choose GL Include or GL Exclude to control whether general ledger accounts appear in the pharmacy Creditors / Debtors report.*

## Understanding the Ledger Table

The table below the summary displays the individual balances of the included ledgers.

| Column | Description |
| --- | --- |
| **#** | Serial number of the ledger entry. |
| **Ledger** | Ledger name, with its type displayed below where applicable. |
| **Debit** | Debit balance associated with the ledger. |
| **Credit** | Credit balance associated with the ledger. |

The **TOTAL** row at the bottom displays the combined debit and credit amounts.

![MediFlux Creditors and Debtors Ledger Table](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/16a13d00-9850-44da-b143-343f38e5cb9b-ledger-table.png)
*Caption: Table listing individual pharmacy ledgers with their debit or credit balances and a total row in MediFlux.*

> **[Note]** A dash (`—`) indicates that no amount is displayed in that balance column for the corresponding ledger.

## Exporting the Creditors / Debtors Report

You can customize the information included in the exported report.

1. **Click Export**

   Click **Export** in the upper-right corner of the Creditors / Debtors page.

   The **Export Creditors / Debtors** dialog opens.

2. **Choose the Columns**

   Under **Columns to include**, select the columns you want in the exported report.

   The available columns are:
   - **Ledger**
   - **Debit**
   - **Credit**

   The **Ledger** column is locked and remains included.

3. **Select the Ledger Categories**

   Use the **Include** dropdown to choose which ledger categories should appear in the export.

4. **Set General Ledger Inclusion**

   Use **GL Include** to include or exclude general ledger accounts.

5. **Choose Sorting Options**

   Use **Sort by** to select the field used for sorting and **Order** to choose the sorting direction.

   For example, you can sort by **Ledger** in **A–Z** order.

6. **Export the Report**

   Click **Export** to proceed with the selected settings.

![MediFlux Export Creditors and Debtors Report](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/2a74bcfe-c30d-4205-b152-60cee83803ee-export.png)
*Caption: Customize the pharmacy creditors/debtors export by selecting columns, ledger categories, GL inclusion, and sorting options.*

## When to Use This Report

The Creditors / Debtors report is useful when you need to:

- Review outstanding supplier payables.
- Identify customer debit and credit balances.
- Check customer advances.
- View trade payables and receivables separately.
- Compare overall credit and debit positions.
- Export balances for accounting review or reconciliation.

> **[Note]** To examine the transactions behind an individual balance, refer to the corresponding customer or supplier ledger.

## Related

* [Customer Ledger](/docs/customers/customer-ledger)
* [Supplier Ledger](/docs/supplier/supplier-ledger)
* [General Ledger](/docs/accounting/general-ledger)
* [Accounting Dashboard](/docs/accounting/dashboard)

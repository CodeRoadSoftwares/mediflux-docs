---
type: Overview
title: Accounting
description: Manage pharmacy accounting in MediFlux. Track journal entries, ledgers, GST compliance, bank reconciliation, and financial reports easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/accounting/overview
status: current
audience: User (Accountant/Owner)
owner: ""
icon: Landmark
---

# Accounting

MediFlux **Accounting** helps you track every rupee that flows through your **pharmacy**. From daily journal entries to GST returns, from bank reconciliations to profit and loss statements, the module gives you a complete view of your financial health.

## What You Can Do

- View a financial **Dashboard** with key metrics and summaries.
- Manage **Accounts**, **Journals**, and **Ledgers** for detailed bookkeeping.
- Generate statutory reports such as **Trial Balance**, **Balance Sheet**, and **P&L Statement**.
- Reconcile **Bank Accounts** and track deposits, withdrawals, and transfers.
- Handle **ITC Reversals** for GST input credit adjustments.

> **[Note]** The Accounting module is disabled by default. You must enable it from **Settings** before you can access any accounting features.

## Enable the Accounting Module

Before you can use any accounting features, you need to turn on the module from your store settings.

1. **Open Settings**

   Go to **Settings** from the top navigation bar and select the **Modules** tab.

2. **Enable Accounting**

   Find the **Accounting Module** card and click **Enable**. The module becomes active immediately.

![MediFlux Enable Pharmacy Accounting Module](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/0e834c50-d64e-46ad-996c-f1e8b50bb8a8-enable-accounting.png)
*Caption: The Accounting Module appears in the Modules list with an Enable button for pharmacy bookkeeping in MediFlux.*

Once enabled, the **Accounting** section appears in the left sidebar with all its sub-menu items.

## Set Up Chart of Accounts

> **[Note]** **New to accounting?** We recommend reading [Accounting Basics](/docs/accounting/accounting-basics) first.
> It explains how accounts and account groups work, so the Chart of Accounts setup will be easier to understand.

The first time you open the Accounting section, MediFlux prompts you to initialize your Chart of Accounts. This step creates the default account heads required for double-entry bookkeeping.

1. **Open Accounting**

   Click **Accounting** in the left sidebar. The **Setup Chart of Accounts** screen opens.

2. **Review default accounts**

   MediFlux pre-selects essential account groups such as **Cash & Bank**, **Accounts Receivable**, and **Accounts Payable**. You can also add custom accounts like **Owner Capital** under **Add New Accounts**.

3. **Initialize**

   Click the **Initialize** button to create the accounts.

![MediFlux Setup Pharmacy Chart of Accounts](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/260e09df-5349-490f-b3d6-22dc6f504c9a-initialize-accounting.png)
*Caption: Review pre-selected account groups and add custom accounts before initializing pharmacy accounting in MediFlux.*

## Set Up System Balances

> **[Note]** This setup uses concepts such as assets, liabilities, tax credits, owner capital, and retained earnings. Read [Accounting Basics](/docs/accounting/accounting-basics) to understand what these terms mean and how they affect your books.

After initialization, a dialog opens to capture your opening balances. MediFlux automatically pulls values from your existing inventory and supplier data, so you only need to fill in a few fields.

1. **Review Assets**

   The **Assets** section shows pre-filled values:
       - **Drug Inventory value**: pulled from your current stock
       - **Non Drug Inventory value**: pulled from non-drug stock
       - **Accounts receivable**: outstanding customer dues

       Enter your **Cash in Hand** amount. This is the only physical cash field you need to fill manually.

2. **Add Bank Accounts**

   Click **+ Add bank** to register your bank accounts. For each account you must provide:
       - **Account Name**
       - **Account Number**
       - **Bank Name**
       - **IFSC Code**
       - **Branch**
       - **Account Type**: choose from `Savings`, `Current`, `FD`, or `Recurring Deposit`

       Check **Set as default bank account** if this account should be used as the default for transactions.

3. **Review Liabilities**

   The **Liabilities** section shows:
       - **Accounts payable**: outstanding supplier dues
       - **GST Output CGST**, **GST Output SGST**, **GST Output IGST**: tax liabilities

4. **Review Tax Credits**

   The **Tax Credits** section displays **GST Input CGST**, **GST Input SGST**, and **GST Input IGST** values that you can claim back.

5. **Add Owner Capital**

   Under **Owners & Partners**, click **Add owner** and enter the amount invested by each owner or partner. MediFlux creates a capital account for each owner automatically.

6. **Review Retained Earnings**

   **Retained earnings** is calculated automatically to balance your books. It represents profits or losses carried forward from previous years. You do not need to edit this value.

7. **Save and Continue**

   Click **Save & Continue** to complete the setup.

![MediFlux Pharmacy Accounting System Balances (Assets)](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/548a7386-7228-456c-ad2a-29aec68e7ffc-assests.png)
*Caption: Assets section with auto-filled inventory values and manual Cash in Hand entry for pharmacy accounting in MediFlux.*

### Add Owners and Partners

![MediFlux Pharmacy Owners and Partners Capital Entry](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/acc0c15b-5a9c-4eca-95a6-10f42fed2a38-owners-acc.png)
*Caption: Owner capital entry and automatically calculated retained earnings in MediFlux accounting.*

> **[Warning: Do not skip the opening balance setup]** If you skip or rush through the opening balance setup, your Trial Balance and Balance Sheet will not reconcile with your actual business position. Always verify the auto-filled inventory and GST values against your physical records.

## Navigating the Accounting Section

After setup, the Accounting sidebar gives you access to every financial tool in MediFlux.

![MediFlux Pharmacy Accounting Sidebar Menu](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/23d46373-852c-42d6-b23c-0e110ad6ae06-accounting-navigation.png)
*Caption: Full Accounting menu with Daybook, Journal Entry, Dashboard, Accounts, Journals, Ledger, Trial Balance, Balance Sheet, Bank Accounts, P&L Statement, and ITC Reversals.*

| Menu Item | Purpose |
|-----------|---------|
| **Daybook** | View all daily transactions in chronological order. |
| **Add Journal Entry** | Create manual journal entries for adjustments and transfers. |
| **Dashboard** | See financial KPIs, summaries, and trends at a glance. |
| **Accounts** | Browse and manage your Chart of Accounts. |
| **Journals** | View and filter all journal entries by date, account, or type. |
| **Ledger** | Drill down into individual account ledgers with running balances. |
| **Trial Balance** | Verify that total debits equal total credits. |
| **Balance Sheet** | View assets, liabilities, and equity at a point in time. |
| **Bank Accounts** | Manage bank accounts, balances, and reconcile statements. |
| **P&L Statement** | Track revenue, expenses, and net profit over a period. |
| **ITC Reversals** | Record and track GST input tax credit reversals. |

## Common Mistakes

> **[Warning: Entering the wrong Cash in Hand amount]** Count your physical cash carefully before typing the amount. An error here permanently affects your cash ledger and makes every future cash report incorrect.

> **[Warning: Skipping or rushing the opening balance setup]** If you skip verification of auto-filled inventory, GST, and payable values, your Trial Balance and Balance Sheet will not match your actual business position. Always cross-check the numbers against your physical records before clicking **Save & Continue**.

## FAQs


  ### Can I enable Accounting later if I have already made sales and purchases?

Yes. MediFlux will pull existing inventory values and outstanding balances automatically when you run the setup. However, you should still verify every auto-filled field against your physical records.
  ### What happens if I do not enter owner capital?

The missing capital will be absorbed into **Retained Earnings**, which may inflate or deflate your equity section. Enter accurate owner capital to keep your Balance Sheet correct.
  ### Can I add more bank accounts after setup?

Yes. Go to **Bank Accounts** from the Accounting sidebar and click **Add Bank Account** at any time.
  ### Why is Retained Earnings calculated automatically?

Retained Earnings is the balancing figure that makes Assets equal Liabilities plus Equity. It captures historical profits or losses that are not attributed to current owner capital.
  ### Do I need to set up Accounting to use GST reports?

Basic GST reports in MediFlux work without the Accounting module. However, advanced compliance features such as **ITC Reversals**, **Trial Balance**, and **Balance Sheet** require Accounting to be enabled and initialized.


## Next Steps


  * [Daybook](/docs/accounting/daybook) - View and understand your daily transaction log.
  * [Add Journal Entry](/docs/accounting/add-journal-entry) - Create manual journal entries for adjustments and transfers.
  * [Dashboard](/docs/accounting/dashboard) - Explore financial KPIs and summary cards.
  * Accounts - Manage your Chart of Accounts and account heads.

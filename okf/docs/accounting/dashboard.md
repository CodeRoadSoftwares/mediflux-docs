---
type: Reference
title: Accounting Dashboard
description: View your pharmacy accounting dashboard in MediFlux. Track total revenue, expenses, net profit, cash flow, and financial alerts easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/accounting/dashboard
status: current
audience: User (Accountant/Owner)
owner: ""
icon: LayoutDashboard
---

# Accounting Dashboard

The **Accounting Dashboard** gives you a live snapshot of your **pharmacy's financial health** in **MediFlux**. At a glance, you can see total revenue, expenses, net profit, and cash flow, plus trend charts and any active financial alerts.

Navigate here from the sidebar: **Accounting → Dashboard**.

> **[Note]** A newly initialized store will show `₹0.00` across all cards and empty charts until you start recording sales, purchases, and other transactions.

![MediFlux Pharmacy Accounting Dashboard Overview](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/7207c33c-9d1a-4f28-b2c5-a01b81e59ddc-accounting-dashboard.png)
*Caption: Summary cards, revenue vs expense trend, monthly comparison, expense distribution, and financial alerts for a pharmacy in MediFlux.*

---

## Summary Cards

Four cards at the top show the key numbers for the selected period.

| Card | What it shows |
|------|---------------|
| **Total Revenue** | All income earned (sales and other income) |
| **Expenses** | All costs incurred in the same period |
| **Net Profit** | Total Revenue minus Expenses |
| **Cash Flow** | Net movement of cash and bank balances |

Each card also shows a small trend indicator (or **N/A** when there is not enough data yet).

---

## Revenue vs. Expense Trend

This area chart shows how revenue and expenses have moved over time.

- **Green** area = Revenue
- **Orange / red** area = Expenses

Use the time filter in the top-right of the chart (**All Time** or other available ranges) to change the period.

The chart helps you spot periods where expenses rose faster than revenue or where revenue spiked.

![MediFlux Revenue vs. Expense Trend Chart](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/6f9f1c37-d647-4755-82a3-9f4fd047a039-expense-vs-revenue.png)
*Caption: Area chart comparing pharmacy revenue and expenses over the selected period in the MediFlux Accounting Dashboard.*

---

## Monthly Comparison

The bar chart compares total revenue and total expenses for each month.

- Green bar = Revenue
- Red bar = Expenses

This view is useful for identifying cost spikes or months where profit was unusually high or low.

The same time filter (**All Time**, etc.) applies to this chart.

---

## Expense Distribution

The pie chart breaks your total expenses into categories for the selected period.

Each slice shows the amount spent in that category. Hover over a slice to see the exact value and percentage.

This helps you quickly see which expense categories are consuming the largest share of your costs.

---

## Financial Alerts

At the bottom of the dashboard, MediFlux surfaces important warnings when something needs attention.

| Situation | What you see |
|-----------|--------------|
| Everything is healthy | “No financial alerts at the moment. Everything looks good!” |
| Cash or bank balance is zero or negative | **Low Liquidity**: Cash and bank balance is at or below zero. |

![MediFlux Pharmacy Financial Alerts Dashboard](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/d72e8724-87b2-4ab4-b6d8-11baa93bf8b5-financial-alerts.png)
*Caption: Zero values in all cards, empty charts, and a Low Liquidity alert on a newly initialized MediFlux pharmacy store.*

---

## Common Mistakes

> **[Warning: Expecting data on a brand-new store]** Until you record sales, purchases, payments, or journal entries, every card will show `₹0.00` and the charts will be empty. This is normal.

> **[Warning: Ignoring the Low Liquidity alert]** If the dashboard shows **Low Liquidity**, your cash and bank balances are at or below zero. Check the Daybook and Cash & Bank accounts before making further payments.

---

## Frequently Asked Questions


  ### What period do the summary cards use?

The cards and charts follow the time filter selected on each chart (for example, **All Time**). Change the filter to focus on a specific range.
  ### Why does Net Profit look different from the Profit & Loss statement?

The dashboard gives a high-level snapshot. For a full breakdown by account, open the **Profit & Loss** report, which includes every income and expense ledger for the exact period you choose.
  ### Can I click the charts to drill down?

The charts are visual summaries. To see the underlying transactions, go to the **Daybook**, **Journal Entries**, or the individual ledger of any account.
  ### What should I do when I see a Low Liquidity alert?

Review your Cash on Hand, Bank Accounts, and Digital Wallets in the Chart of Accounts or Daybook. Record any missing receipts or transfer funds if needed.


---

## Next Steps


  * [Profit & Loss](/docs/accounting/profit-loss) - See the full income and expense breakdown that feeds the dashboard numbers.
  * [Daybook](/docs/accounting/daybook) - View every transaction that contributed to revenue, expenses, and cash flow.
  * [Journal Entries](/docs/accounting/journal-entries) - Inspect the individual journals behind the dashboard figures.
  * [Balance Sheet](/docs/accounting/balance-sheet) - Check your assets, liabilities, and equity position.

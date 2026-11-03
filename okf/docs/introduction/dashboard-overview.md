---
type: Reference
title: Dashboard
description: Explore the MediFlux pharmacy dashboard. View real-time stats on inventory, sales, payments, expired drugs, and drug movement to manage your store efficiently.
timestamp: "2026-10-23T14:59:28+05:30"
resource: /docs/introduction/dashboard-overview
status: current
audience: All
owner: ""
icon: LayoutDashboard
---

# Dashboard

The **MediFlux Dashboard** is the first screen you see when you log in. It gives you a real-time snapshot of everything happening in your pharmacy: how much stock you have, what your sales look like, who owes you money, which drugs have expired, and how your inventory is moving. No navigation required. Everything critical is surfaced automatically.

---

## Cards Overview

Below the banner, five summary cards give you an instant health check of your pharmacy business:

| Card | What it shows |
| --- | --- |
| **Drugs** | Total number of unique drugs currently in your inventory |
| **Drug Value** | Total MRP value of all stock on hand |
| **Suppliers** | Number of supplier profiles linked to your store |
| **Supplier Outstanding** | Total amount you currently owe to all suppliers, shown in red |
| **Customers** | Number of customer profiles in your system |

![MediFlux Dashboard Overview Cards](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/a0c09e29-ef0c-41d1-8f99-1994145a55de-dashboad-overview-cards.png)
*Caption: Five summary cards on the MediFlux dashboard showing total drugs, drug value, suppliers, supplier outstanding, and customers.*

---

## Expired Drugs

If any drugs in your inventory have crossed their expiry date, they appear here in a dedicated table so you can take action immediately.

| Column | Description |
| --- | --- |
| **DRUG** | Name of the expired drug |
| **SUPPLIER** | Supplier the drug was purchased from |
| **EXPIRY** | Expiry date, shown in red |
| **QTY** | Quantity still in stock |

Click **View All** to jump to the full Drug List with expiry filters applied, where you can update or remove these items.

![MediFlux Expired Drugs Table](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/f50546d5-59fa-4a19-8ae3-4463e98cf024-expired-drugs-dashboard.png)
*Caption: Dashboard table highlighting expired pharmacy drugs with supplier, expiry date, and quantity for quick action.*

---

## Sales Performance

The **Sales** section shows your pharmacy's revenue performance over time. Use the **Last 7 Days** dropdown or click **Custom** to change the date range.

| Element | What it shows |
| --- | --- |
| **Sales Overview** | Total sales value for the selected period |
| **Profit vs Sales chart** | A line graph comparing profit (green) against total sales (teal) day by day |
| **Collected on Sale** | Percentage of sales revenue collected upfront |
| **Payment breakdown** | How much came via Cash, UPI, Net Banking, and how much is still on Credit |
| **Collected / On Credit** | Total cash collected versus total amount still outstanding from customers |

![MediFlux Sales Performance Chart](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/66d53c63-563e-4603-b0f7-21fb73456d40-sales-dashboard.png)
*Caption: Revenue chart on the MediFlux dashboard showing profit vs sales trend and payment method breakdown.*

> **[Note]** If **On Credit** is high, it means a large portion of your revenue is tied up in customer dues. Use the **Customers → Ledger** page to follow up on outstanding payments.

---

## Payment Analytics

The **Payment Analytics** section (marked **New**) tracks how effectively you're converting billed amounts into actual cash.

| Card | What it shows |
| --- | --- |
| **Collections Over Time** | Total cash collected in the selected period, with a billed vs collected trend chart |
| **Net Receivable** | Total outstanding amount across all your books |
| **Collected (Last 7d)** | Actual cash recovered in the last 7 days |
| **Billed (Last 7d)** | New credit extended to customers in the last 7 days |
| **Credit Expansion (Last 30d)** | How much new credit was given versus how much was recovered |
| **Avg Daily Recovery** | Rolling average of daily collections over the last 7 days |
| **Stale Balances (45d+)** | Old outstanding amounts that haven't been paid in over 45 days |
| **Highest Exposure** | The customer who owes you the most, with their name and amount |
| **Payment Regularity** | Percentage of customers who paid on time vs total billed customers |

![MediFlux Payment Analytics](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/e3115a8c-6126-4888-910b-b43ae9b53685-payment-analytics.png)
*Caption: Collections trend, net receivable, recovery stats, and credit health metrics on the pharmacy dashboard.*

> **[Warning: Concentration Risk]** If a small number of customers hold a large percentage of your total receivables, a banner appears at the top warning you that **Top 20% of customers hold X% of your receivables**. This means your cash flow depends heavily on just a few accounts. Follow up on these immediately.

---

## Drug Movement

The **Drug Movement** section shows which pharmacy drugs are selling fast and which are sitting idle.

| Tab | What it shows |
| --- | --- |
| **By Quantity Sold** | Drugs ranked by total units sold in the selected period |
| **By Sales Velocity** | Drugs ranked by how quickly they turn over |

Each side lists drugs with their sold quantity, split into:

- **Fast Moving:** your best sellers, the drugs that move off the shelf quickly
- **Slow Moving:** drugs with low or no sales activity, potential dead stock

Use the **This Month** dropdown to change the period, or click **PDF** / **CSV** to export the list.

![MediFlux Drug Movement Report](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/ffb9fef2-1d30-4c71-b7a9-eff3e5c80b2e-drug-movement.png)
*Caption: Dashboard view of fast-moving and slow-moving pharmacy drugs with quantity sold.*

> **[Note]** Slow moving drugs tie up working capital and shelf space. Consider running promotions, returning them to suppliers via debit notes, or reducing future orders for these items.

---

## Next Steps


  * [Drugs](/docs/inventory/drug-list) - View and manage your full inventory.
  * [Sales](/docs/sales) - Record sales, issue credit notes, and manage returns.
  * [Customers](/docs/customers) - Manage customer profiles and track outstanding dues.
  * [Accounting](/docs/accounting) - View detailed financial reports and GST compliance.

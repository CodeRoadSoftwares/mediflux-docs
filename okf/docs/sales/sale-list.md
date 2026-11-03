---
type: Reference
title: Sales List
description: View, search, filter, and manage all your recorded sales in one place.
timestamp: "2026-10-12T11:55:46+05:30"
resource: /docs/sales/sale-list
status: current
audience: User (Pharmacist/Cashier)
owner: ""
icon: List
---

# Sales List

The **Sales List** is your complete record of every sale made in your pharmacy. You can search across sales, filter by sale type, payment method, payment status, and date range, and export your sales data as PDF or Excel.

---

## Searching Sales

The search bar at the top lets you search across **customers, drugs, and invoice numbers**. Just start typing and the list filters instantly.

To the left of the search bar is an **All** dropdown. Use it to narrow the search scope if needed.

![Sales list](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/0c085041-1c62-4efc-ad14-2f2a3a132a26-sidebar-saleslist.png)
*Caption: Navigate to Sales List from the sidebar.*

---

## Filter Chips

Below the search bar, eight quick-filter chips let you filter the sales list by sale type or category.

| Filter | What it shows |
| --- | --- |
| **NRx** | Non-prescription medicine sales |
| **H1** | Schedule H1 controlled medicine sales |
| **Cash** | Cash sales |
| **Wholesale** | Wholesale sales to pharmacies or businesses |
| **Retail** | Retail sales made to individual customers |
| **Stock Issue** | Internal stock movement recorded as a sale |
| **Challan** | Delivery challans |
| **Estimates** | Estimated bills not yet finalised |

Click a chip to apply it, and click again to remove it.

![Filter chips](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/789b8f72-0824-4177-afd3-706372f1bdbe-sales-filterchips.png)
*Caption: Quick-filter chips for NRx, H1, Cash, Wholesale, Retail, Stock Issue, Challan, and Estimates.*

---

## The Sales Table

The main table lists all your sales with the following columns:

| Column | Description |
| --- | --- |
| **Sale Details** | Invoice number and payment method used for the sale |
| **Customer** | Customer name and date/time of the sale |
| **Items** | Total value of the sale and number of items |
| **Actions** | Quick action menu for that sale row |

The page shows a **Found X** count above the table indicating how many sales match the current filters.

![Sales List table](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/67ee03da-9787-4e8a-93ce-c8320a4c349a-sale-columns.png)
*Caption: Main table listing all sales with details, customer, items, and actions.*

---

## Expanding A Sale Row

Click the **chevron (▾)** on the left of any sale row to expand it and see the full line item breakdown:

| Column | Description |
| --- | --- |
| **SR.** | Serial number of the line item |
| **HSN** | HSN code of the drug |
| **Product** | Name of the drug |
| **Batch** | Batch number |
| **Expiry** | Expiry date of the batch |
| **QTY** | Quantity sold |
| **MRP** | Maximum Retail Price |
| **DIS** | Discount percentage applied |
| **Total** | Total amount for that line item |

The **Grand Total** is shown at the bottom right of the expanded row.

![Expanded sale row](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/d179244c-50cb-410b-ba5a-4535d5307c20-sale-dropdown.png)
*Caption: Line item breakdown with HSN, product, batch, expiry, quantity, MRP, discount, and total.*

---

## Row Actions

Clicking the **three-dot menu (⋮)** on any sale row opens a quick-actions menu with three options:

| Option | What it does |
| --- | --- |
| **View Invoice** | Opens the full invoice for this sale |
| **Update** | Edit this sale entry |
| **Return Sale** | Initiate a return for this sale |

These options are the same for all sale types.

![Row actions](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/1665ff16-0590-40ac-a3a1-a2c911c8a799-sale-actions.png)
*Caption: Three-dot menu showing View Invoice, Update, and Return Sale options.*

---

## Filters Panel

Click the **Filter** button at the top-right to open the **Sales Filters** panel:

| Filter | Options |
| --- | --- |
| **Drug Type** | All, Rx, NRx, H1 |
| **Payment Method** | All Methods, Cash, Card, UPI, Bank Transfer, Cheque, Stock Issue |
| **Payment Status** | All Statuses, Paid, Unpaid, Partial |
| **Sale Type** | Wholesale sales only, Stock Issue |
| **Date Range** | Custom From and To date |
| **Amount Range** | Min (₹) and Max (₹) |
| **Sort By** | Field: Sale Date, Total Amount, Customer Name, Invoice Number, Created At. Order: Ascending or Descending |

Click **Apply** to apply filters. The filter button highlights when active filters are applied.

![Filter Button](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/660c7583-6a73-4ff1-a37d-72413d53d911-filter-panel.png)
*Caption: Filter by drug type, payment method, payment status, sale type, date, amount, and sort order.*

---

## Exporting Sales

Click the **export icon** at the top-right to choose your export format:

- **Export as PDF**
- **Export as Excel**

![Export options](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783667031316-551076294-sales-export-options.png)
*Caption: Choose between PDF and Excel export formats.*

---

## Adding A Sale From Anywhere

You don't have to navigate to the Sales section to add a sale. Click the **`+` button** in the top-right corner of any screen and select **Add Sale** to start a new sale bill from anywhere in MediFlux.

![Quick Add Sale](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783667143930-70609404-addsale-quickbutton.png)
*Caption: Click the + button in the top-right corner and select Add Sale.*

---

## Act On A Sale


  * [Add Retail Sale](/docs/sales/add-sale-retail) - Create a new bill for a customer.
  * [Add Credit Note](/docs/sales/add-credit-note) - Issue a credit note against an existing sale.
  * [Returned](/docs/sales/returned-sales) - Process items returned by customers.
  * [Customer Ledger](/docs/customers/customer-ledger) - Check outstanding payments for customers with unpaid sales.

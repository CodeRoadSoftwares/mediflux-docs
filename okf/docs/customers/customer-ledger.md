---
type: Reference
title: Customer Ledger
description: Manage your pharmacy customer ledger in MediFlux. Track Udhaar, outstanding balances, payments, refunds, and credit notes in one place.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/customers/customer-ledger
status: current
audience: User (Accountant/Cashier)
owner: ""
icon: BookOpen
---

# Customer Ledger

The **Customer Ledger** page gives you a complete financial record of all your **pharmacy customer transactions** in **MediFlux**. You can view a consolidated ledger across all customers at once, or click into any individual customer to see their dedicated ledger with a running **Udhaar (outstanding) balance**.

Navigate here from the sidebar: **Customers → Ledger**.

---

## Page Layout
The Ledger page is split into two panels:

**Left panel: Customer list**
Shows all your customers with their name, address, and individual outstanding balance in red. The total outstanding across all customers is shown at the bottom. Use the search bar to find a specific customer instantly. Click **View All Customers** to go back to the full Customer List page.

**Right panel: Ledger entries**
Shows the transactions for the selected customer, or all entries across every customer if no customer is selected.

![MediFlux Pharmacy Customer Ledger Page Layout](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663149930-270715838-customer-ledger.png)
*Caption: The MediFlux customer ledger showing the left panel with the customer list and the right panel with Udhaar ledger entries.*

---

## Consolidated View: All Customer Entries
When no individual customer is selected, the right panel shows **All Customer Entries**, every transaction across all your customers combined in one view.

The entry type tabs at the top let you filter what you see:

| Tab | What it shows |
| --- | --- |
| **All** | Every transaction across all customers |
| **Payment** | Payments received from customers |
| **Sale** | Sale entries recorded for customers |
| **Returns** | Items returned by customers |
| **Refund** | Refunds issued to customers |
| **Credit Note** | Credit notes recorded for a customer |
| **Adjustment** | Manual balance corrections |

The consolidated table has the following columns:

| Column | Description |
| --- | --- |
| **Customer** | Name and contact number of the customer |
| **Date** | Date and time of the transaction |
| **Debit** | Amount reducing what the customer owes: returns and refunds |
| **Credit** | Amount increasing what the customer owes: sales, opening balance |
| **Receipt** | Receipt or reference number if recorded |
| **Notes** | Any notes added at the time of entry |
| **Actions** | Delete the entry |

![MediFlux Consolidated Pharmacy Customer Ledger View](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663231249-84345622-consolidated-view.png)
*Caption: View every transaction, payment, and Udhaar balance across all pharmacy customers in one combined MediFlux ledger view.*

---

## Individual Customer Ledger
Click on any customer name in the left panel to open their dedicated ledger. The right panel updates to show only that customer's transactions.

At the top of the individual ledger you'll see the customer's **name, address, and phone number**.

### Action Buttons
| Button | What it does |
| --- | --- |
| **Export** | Export this customer's ledger entries as PDF or Excel |
| **Add Payment** | Record a payment or refund against this customer |
| **Adjust** | Add a manual adjustment entry to correct the ledger balance |
| **Filter** | Filter entries by date range, entry type, and sort order |

![MediFlux Individual Customer Ledger Action Buttons](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663315727-882956436-customer-ledger-actionbuttons.png)
*Caption: Export, Add Payment, Adjust, and Filter buttons at the top of an individual pharmacy customer's Udhaar ledger in MediFlux.*

### Entry Type Tabs
Same as the consolidated view, filter by **All, Payment, Sale, Returns, Refund, Credit Note,** or **Adjustment**.

### Individual Ledger Columns
| Column | Description |
| --- | --- |
| **Date** | Date and time of the transaction, with the entry type shown as a label |
| **Debit** | Amount reducing what the customer owes |
| **Credit** | Amount increasing what the customer owes |
| **Balance** | Running outstanding balance after every entry: updates automatically with each transaction |
| **Receipt** | Receipt or reference number if recorded |
| **Notes** | Any notes added at the time of entry |
| **Actions** | Delete the entry |

![MediFlux Customer Ledger Running Balance Column](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663398217-757586122-balance-column.png)
*Caption: The running Udhaar balance column updates automatically after every pharmacy customer transaction in MediFlux.*

> **[Note]** The **Balance** column updates after every single entry, so you can trace exactly how the outstanding amount changed step by step from day one.

---

## Adding A Payment Or Refund
Click **Add Payment** on the individual customer ledger to open the **Add Customer Payment** dialog. It has two tabs, **Payment** and **Refund**.

The dialog also shows a **Recent Payments** table at the top with a quick link back to the full **Ledger**, listing recent entries with their Date, Type, Amount, Balance, Receipt, and payment method (Via).

### Payment Tab
| Field | Required | Description |
| --- | --- | --- |
| **Select Customer** | Yes | Search and select the customer |
| **Payment Amount** | Yes | The amount being paid by the customer |
| **Payment Method** | Yes | How the payment was made |
| **Payment Date** | Yes | Defaults to today's date. Can be changed |
| **Receipt Number** | No | Receipt or reference number |
| **Notes** | No | Any additional notes about this payment |

### Refund Tab
Use the **Refund** tab when you need to pay money back to a customer.

Click **Add Payment** to save. Click **Reset** to clear all fields.

---

## Adding An Adjustment Entry
Click **Adjust** on the individual customer ledger to manually correct the customer's balance, for example a price correction, rounding adjustment, or write-off.

| Field | Description |
| --- | --- |
| **Adjustment Amount** | Enter a positive number (e.g. `500`) if the customer owes you more, or a negative number (e.g. `-500`) if the customer owes you less |
| **Entry Date** | Defaults to today's date. Can be changed |
| **Receipt / Reference Number** | Optional reference number for this adjustment |
| **Notes** | Reason for the adjustment: e.g. price correction, rounding adjustment, write-off |

Click **Add** to save. Click **Reset** to clear all fields.

---

## Filtering The Ledger
Click **Filter** on the individual customer ledger to open the Ledger Filters panel.

![MediFlux Pharmacy Ledger Filter Icon](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663530792-583321130-filter-icon.png)
*Caption: Filter pharmacy customer ledger entries by date range and transaction type in MediFlux.*

## You can filter by:
| Filter | Options |
| --- | --- |
| **Date Range** | Today, This Month, Last Month, This Quarter, Last Quarter, This Year, Last Year: or set a custom Start and End date |
| **Entry Type** | All Types, Payment, Sale, Returns, Refund, Credit Note, Adjustment, Delete Credit Note |

Click **Apply** to apply the filters. Click **Clear** to reset them all.

![MediFlux Customer Ledger Filters Panel](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663622495-606285712-ledger-filters.png)
*Caption: Filter pharmacy customer ledger entries by date range and entry type with the dropdown expanded in MediFlux.*

---

## Exporting Ledger Entries
Click **Export** on the individual customer ledger to open the Export Options dialog. Choose a **date range** and an **export format**:

- **PDF Document**
- **Excel Spreadsheet**

Click **Export** to download.

![MediFlux Export Pharmacy Customer Ledger](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663737908-69399000-customer-export.png)
*Caption: Export pharmacy customer ledger entries to PDF or Excel format for accounting and Udhaar tracking in MediFlux.*

---

## Deleting A Ledger Entry
Click the **three-dot menu (⋯)** on any entry row and select **Delete Entry** to remove it.

![MediFlux Delete Customer Ledger Entry](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663856262-268376688-delete-entry.png)
*Caption: Access the delete option from the row actions menu to remove a specific pharmacy customer ledger entry in MediFlux.*

---

## Common Mistakes To Avoid
> **[Warning: Confusing Refund with Returns]** A **Return** records an item physically returned by the customer. A **Refund** records the money paid back to the customer. They can happen independently: a return doesn't always mean a refund was issued, and vice versa.

---

## From This Profile

  * [Ledger](/docs/customers/customer-ledger) - Track transactions, payments, and running balance.
  * [Billing Notes](/docs/customers/billing-notes) - Set special pricing or credit terms for this customer.
  * [Sales List](/docs/sales/sale-list) - View all sales and filter by this customer.
  * [Customer List](/docs/customers/customer-list) - Browse and manage all your customers.

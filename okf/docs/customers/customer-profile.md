---
type: Reference
title: Customer Profile
description: View a customer's complete sales history, outstanding balance, and manage their details from one page.
timestamp: "2026-08-27T10:54:01+05:30"
resource: /docs/customers/customer-profile
status: current
audience: User (Pharmacist/Cashier)
owner: ""
icon: User
---

# Customer Profile

Clicking on any customer's name in the Customer List opens their **Customer Profile**, a dedicated page showing everything about that customer in one place. From here you can view their sales history, track outstanding dues, and take actions like editing details or recording a new sale.

---

## Profile Header
At the top of the page you'll see:

- A **Created by You** badge, indicating this profile was created by you
- The customer's name in large text under the **CUSTOMER** label
- **Last edited** timestamp showing when the profile was last updated
- The customer's **phone number, email, and address** displayed on the right side of the header

![Profile header](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783662350918-645919954-customer-profile.png)
*Caption: Customer name, contact details, and last edited timestamp.*

---

## Summary Cards
Four stat cards sit below the header giving you a quick snapshot of this customer:

| Card | What it shows |
| --- | --- |
| **Total Sales** | The all-time total amount of sales made to this customer |
| **Number of Sales** | Total number of sales transactions with this customer |
| **Total Refund** | Total amount refunded to this customer |
| **You'll Pay / You'll Get** | Shows **You'll Pay** if you owe this customer money. Shows **You'll Get** if this customer owes you money |


![Summary cards, You'll Get](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783662247423-151895708-customer-summarycards.png)
*Caption: Example showing the You'll Get state when the customer owes you.*

![Summary cards, You'll Pay](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783662650990-966716158-customerprofile-youllpay.png)
*Caption: Example showing the You'll Pay state when you owe the customer.*

> **[Note]** The fourth card label changes depending on who owes whom, **You'll Pay** means you owe the customer (for example, after a refund or credit), while **You'll Get** means the customer has an outstanding balance owed to you.

---

## Page-Level Actions
Three buttons and a menu sit at the top-right of the customer profile:

| Button | What it does |
| --- | --- |
| **Add Sale** | Create a new sale entry directly linked to this customer |
| **Ledger** | Jump to this customer's individual ledger |
| **More** | Opens a dropdown with additional actions |

### Add Sale
Click **Add Sale** to create a new sale entry directly linked to this customer, without having to search for or select the customer again in the sale form.

### Ledger
Click **Ledger** to jump straight to this customer's individual ledger, showing their full transaction history, running balance, and options to add payments or adjustments.

![Action  buttons](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783662778870-66190072-page-level-actions.png)
*Caption: Quick access to the customer's sale and  transaction ledger.*

### More Menu Options
| Option | What it does |
| --- | --- |
| **Sales** | View all sales linked to this customer |
| **Edit** | Edit the customer's profile details |
| **Delete** | Delete this customer profile |

![More menu](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783662778869-687137828-more-button.png)
*Caption: Additional actions available from the dropdown menu.*

---

## Recent Sales
Below the summary cards, the **Recent Sales** table shows the latest sale entries recorded for this customer:

| Column | Description |
| --- | --- |
| **Date** | Date and time the sale was recorded |
| **Invoice** | Invoice number of the sale |
| **Drugs** | Number of drug line items in the sale |
| **Amount** | Total value of the sale |
| **Method** | Payment method used for the sale |
| **Actions** | Options to View, open Invoice, or Edit the sale entry |

![Recent Sales table](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783662928189-497719953-recent-sales-actions.png)
*Caption: Latest sales with actions menu open showing View, Invoice, and Edit options.*

---

## Notes
At the bottom of the profile, the **Notes** section displays any internal remarks entered when the customer was first created. If no notes were added, it shows **No remarks provided**.

To update the notes, use the **Edit** option from the **More** menu.

> **[Warning: Common mistake to avoid]** **Trying to edit the Opening Outstanding from the customer profile**
>
> The Opening Outstanding field is locked once the customer is saved and cannot be changed from the Edit form. If the original amount was wrong, you'll need to correct it through the customer's <a href="/docs/customers/customer-ledger">Ledger</a>.

---

## From This Profile

  * [Ledger](/docs/customers/customer-ledger) - Track transactions, payments, and running balance.
  * [Billing Notes](/docs/customers/billing-notes) - Set special pricing or credit terms for this customer.
  * [Sales List](/docs/sales/sale-list) - View all sales and filter by this customer.
  * [Customer List](/docs/customers/customer-list) - Browse and manage all your customers.

---
type: Guide
title: Returned
description: View all returned sales and process returns directly from the Sales List.
timestamp: "2026-08-27T10:54:01+05:30"
resource: /docs/sales/returned-sales
status: current
audience: User (Pharmacist/Cashier)
owner: ""
icon: CornerUpLeft
---

# Returned

The **Returned** page shows a complete record of every sale that has been returned in your pharmacy. Each entry is linked to the original sale and customer, making it easy to track what was returned, when, and how much was credited.

Navigate here from the sidebar: **Sales → Returned**.

![Returned Sales](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783674201991-896236346-returned-sidebar.png)
*Caption: Navigate to returned sales from sidebar.*

---

## How To Return A Sale
You can initiate a return directly from the **Sales List** without navigating away. Click the **three-dot menu (⋮)** on any sale row and select **Return Sale**.

A confirmation dialog appears showing:

- The customer name and sale number
- Current outstanding balance for this sale
- A warning that **this action cannot be undone**. All drugs in the sale will be returned to inventory

You'll also need to confirm whether a refund was initiated:

| Field | Description |
| --- | --- |
| **Refund Initiated?** | Select **Yes** if you are refunding money to the customer, or **No** if no refund is being given |
| **Refund Amount (₹)** | The amount being refunded to the customer |
| **Receipt Number** | Optional receipt or reference number for this return |

Click **Return Sale** to confirm, or **Cancel** to go back.

Once confirmed, a **"Sale returned successfully!"** message appears and the returned sale is recorded in the Returned page. All drugs from the sale are automatically added back to your inventory.

![Return Sale confirmation dialog](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783674321947-610601324-return-dialog.png)
*Caption: Customer name, sale number, outstanding balance, and refund details.*

![Sale returned successfully](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783674383467-370234699-returned-sale-selected.png)
*Caption: Toast message confirming the return has been processed.*

> **[Note]** Returning a sale cannot be undone. All drugs in the sale are returned to inventory immediately. Make sure the details are correct before confirming.

---

## Viewing Returned Sales
Each return is displayed as a card showing:

| Detail | Description |
| --- | --- |
| **Invoice number** | The original sale invoice number |
| **Returned badge** | A purple **Returned** tag confirming this sale has been returned |
| **Customer name** | The customer the original sale was made to |
| **Payment method** | Payment method used in the original sale |
| **Date and time** | When the return was processed |
| **Items count** | Number of items in the return |

The page shows a **Found X** count above the list indicating how many returns are recorded.

![Returned page](/images/returned-list.png)
*Caption: List of returned sales with invoice numbers, customer names, and return details.*

---

## Expanding A Return
Click the **chevron (▾)** on the right of any return card to expand it and see the full line item breakdown:

| Column | Description |
| --- | --- |
| **SR.** | Serial number |
| **HSN** | HSN code of the drug |
| **Product** | Name of the returned drug |
| **Batch** | Batch number |
| **Expiry** | Expiry date of the batch |
| **QTY** | Quantity returned |
| **MRP** | Maximum Retail Price |
| **Discount (%)** | Discount that was applied |
| **Total** | Total value of the returned item |

The **Grand Total** is shown at the bottom right of the expanded row.

![Expanded return row](/images/returned-expanded-row.png)
*Caption: Line item breakdown with HSN, product, batch, expiry, quantity, MRP, discount, and total.*

---

## Row Action, Print
Clicking the **three-dot menu (⋮)** on any return card gives you one action:

- **Print:** print the return record

---
## Common Follow Ups

  * [Drug List](/docs/inventory/drug-list) - Verify returned stock was added back to inventory.
  * [Customer Ledger](/docs/customers/customer-ledger) - Check if the refund affected the customer's outstanding balance.
  * [Add Credit Note](/docs/sales/add-credit-note) - Formalize the return with a proper credit note for records.
  * [Sales List](/docs/sales/sale-list) - View the original sale and check its return status.

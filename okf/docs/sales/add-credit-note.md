---
type: Guide
title: Add Credit Note
description: Issue a credit note against previously sold drugs, select the customer, choose the items, and create the note in seconds.
timestamp: "2026-08-27T10:54:01+05:30"
resource: /docs/sales/add-credit-note
status: current
audience: User (Pharmacist/Cashier)
owner: ""
icon: FileText
---

# Add Credit Note

A **Credit Note** is issued when a customer returns medicines that were previously sold to them. Instead of manually adjusting the bill, MediFlux lets you select the exact drugs from the customer's sales history and generate a credit note against those items, keeping your records accurate and your inventory updated.

Navigate here from the sidebar: **Sales → Add Credit Note**.
  ![Add Credit Note](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783673371852-466868674-creditnote-sidebar.png)
*Caption: Navigate to Add Credit Note from sidebar.*
---

## How To Create A Credit Note
1. **Select the date and customer**

   At the top of the page, set the **date** for the credit note and search for the **customer** whose items are being returned.

       Once a customer is selected, their profile appears below the search bar showing their name and phone number. Their complete list of previously sold drugs loads automatically, showing **X items** in total.

       ![Customer selected](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783673562434-486678178-drug-selected.png)
*Caption: Customer profile loaded with their complete drug sales history.*

2. **Select the drugs to return**

   The drug table shows every drug previously sold to this customer with the following columns:

       | Column | Description |
       | --- | --- |
       | **Drug** | Name of the drug |
       | **Expiry** | Expiry date of the batch. Shown in red if expired |
       | **Batch** | Batch number |
       | **Sold** | Quantity originally sold to the customer |
       | **Free** | Free units given at time of sale, if any |
       | **Rate** | Sale rate per unit |
       | **Disc%** | Discount applied at time of sale |
       | **CN Qty** | Quantity being returned in this credit note. Enter the number here |
       | **Returned** | Quantity already returned previously, if any |
       | **Sale** | Link icon to view the original sale entry |

       Tick the checkbox next to any drug to select it for the credit note. Once selected, enter the **CN Qty**, the number of units being returned. The **Disc%** field also becomes editable if you need to adjust it.

       You can search within the drug list using the **Search in sold drugs** bar, or use the **All** dropdown to filter by drug type.

       ![Drug selected for return](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783673814119-396692688-columns.png)
*Caption: CN Qty entered with summary bar showing live totals.*

3. **Review the summary and create**

   As you select drugs, the summary bar at the bottom updates live:

       **Items · After Disc + Tax = Total**

       Once you're happy with the selection, click **+ Create Credit Note** to finalise.

       Click **Clear** at the top-right to reset the entire form and start over.

---

## The Credit Note Invoice
Once you click **+ Create Credit Note**, a credit note invoice is generated automatically showing:

- Your store name, address, GSTIN, and DL number
- Credit Note number (e.g. `CN/2026001`) and date
- Customer name and phone number
- Payment status as **Credited**
- Full line item breakdown: Item, HSN, Batch, Expiry, Qty, Free, Rate, MRP, Discount, Tax, Total
- Summary: Sub Total, Discount, CGST+SGST, Net Amount, and current Outstanding balance

![Credit Note invoice](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783673960073-253465354-customer-invoice.png )
*Caption: Generated credit note showing store details, line items, and summary.*

Once created, this credit note is saved and can be viewed anytime from the customer's <a href="/docs/customers/billing-notes">Billing Notes</a>.

---
## After Creating A Credit Note

  * [Customer Ledger](/docs/customers/customer-ledger) - Verify the credit note reduced the customer's outstanding balance.
  * [Billing Notes](/docs/customers/billing-notes) - View the generated credit note invoice and print or share it.
  * [Drug List](/docs/inventory/drug-list) - Check that returned stock was added back to inventory.
  * [Sales List](/docs/sales/sale-list) - View the original sale alongside the credit note for complete history.

---
type: Guide
title: Add Wholesale
description: Learn how to create a wholesale pharmacy bill or Challan in MediFlux. Manage HSN codes, split taxes, adjusted returns, and bulk pricing easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/sales/add-wholesale
status: current
audience: User (Wholesaler/Admin)
owner: ""
icon: Truck
---

# Add Wholesale

The **Add Wholesale** page is where you **create wholesale pharmacy bills** and Challans for other pharmacies, distributors, and businesses in **MediFlux**. It supports both normal sale invoicing and **Challan mode** for delivery notes that can be converted to sales later. The wholesale layout includes additional columns for HSN codes, free units, discounts, and split tax breakdowns.

Navigate here from the sidebar: **Sales → Add Sale**, then click **Wholesale** at the top-right.

![MediFlux Add Wholesale Pharmacy Sale Page](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783937800722-967118673-add-sale-sidebar.png)
*Caption: The MediFlux wholesale sale page showing Challan toggle, customer selection, and the wholesale drug table.*

---

## Scan & Add Drugs

Click **Scan** at the top-right to open the **Scan & Add Drugs** panel. This is designed for **phones and tablets** and opens your device camera for two input methods:

| Option | What it does |
| --- | --- |
| **Barcode Scanner** | Scan drug barcodes with your phone or tablet camera to instantly add items to the bill |
| **Image (OCR)** | Photograph a prescription, drug label, or drug list with your camera. MediFlux reads the text and populates drugs automatically |

Camera permissions are required for both options on phones and tablets.

If you have a **physical barcode scanner device** connected to your computer, you can scan barcodes directly into the bill without opening the Scan panel. The drug is added instantly with auto-populated name, batch, expiry, MRP, and available stock.

> **[Note]** For detailed setup instructions, supported devices, OCR best practices, and troubleshooting, see the [Scan & OCR](/docs/sales/scan-and-ocr) guide.

---

## Drafts

Click **Drafts** at the top-right to access all saved draft bills. Any bill you save midway using **Save Draft** is stored here and can be resumed at any time.

If you are in the middle of adding a sale and need to navigate away, click **Save Draft** to save your progress. You can return to it anytime from Drafts.

![MediFlux Saved Wholesale Draft Bills Panel](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783937800716-13436338-wholesale-draft.png)
*Caption: Access and resume saved draft wholesale pharmacy bills anytime in MediFlux.*

---

## Left Panel

The left panel in Wholesale mode has two options:

| Option | What it does |
| --- | --- |
| **Sale Mode** `Shift+S` | Toggle between normal sale mode and Challan mode |
| **Local Sale (CGST/SGST)** | Toggle between Local Sale (CGST+SGST tax) and Out of State (IGST tax) |

![MediFlux Wholesale Sale Mode and Tax Toggle](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783937800715-605577947-sale-mode.png)
*Caption: The left panel in MediFlux wholesale sale showing the Sale Mode toggle and Local Sale tax switch.*

### Sale Mode: Normal vs Challan

| Mode | What it does |
| --- | --- |
| **Sale Mode** | Creates a standard wholesale invoice with full payment tracking |
| **Challan Mode** | Creates a delivery challan without immediate payment. The challan is saved as a pending delivery note and can be converted into a sale later |

Challan mode is useful when goods are dispatched before payment terms are finalised or when the exact invoice details need to be confirmed after delivery.

Once converted to a sale, the challan becomes a regular wholesale bill with payment status tracking.

---

## Customer and Salesperson

| Field | Description |
| --- | --- |
| **Customer Details** | Search and select the customer for this wholesale sale |
| **Select Salesperson** *(Optional)* | Assign a salesperson to this sale for tracking commissions and performance reporting |

![MediFlux Wholesale Customer and Salesperson Selection](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783938063319-96447838-customer-salesperson.png)
*Caption: Select a wholesale pharmacy customer and assign a salesperson for commission tracking in MediFlux.*

---

## Payment Status

Select the payment status for this sale:

| Status | Description |
| --- | --- |
| **Paid** | Full payment received |
| **Unpaid** | No payment received yet |
| **Partial** | Partial payment received |

![MediFlux Wholesale Payment Status Options](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783938063317-807345784-payment-options.png)
*Caption: Choose between Paid, Unpaid, or Partial payment status for wholesale pharmacy bills.*

When **Paid** or **Partial** is selected, additional fields appear:

| Field | Description |
| --- | --- |
| **Payment Method** | Cash, Card, UPI, or Net Banking |
| **Paid Amount** | Amount received |
| **Discount %** | Overall discount on the bill |

When **Cash** is selected as the payment method, no additional bank details are needed.

When **Card**, **UPI**, or **Net Banking** is selected, a **bank details dropdown** appears below showing your linked accounts. Select the appropriate account to record where the payment was received.

![MediFlux Linked Bank Account Details for Wholesale](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783938135349-539772848-bank-details.png)
*Caption: Select the linked bank account for Card, UPI, or Net Banking payments in MediFlux wholesale sales.*

When **Unpaid** is selected, the Payment Method defaults to **None**, Paid Amount and Discount % remain editable, and the bank details section is hidden.

---

## Adjusted Returns

**Adjusted Returns** allows you to adjust a customer's return amount against a new or existing wholesale sale or challan.

You can apply the adjustment while **adding a sale** or **editing an existing sale**.

There are two ways to adjust returns:

| Method | How it works |
| --- | --- |
| **Direct Return** | Enter a return amount directly in **Direct Return (₹)** |
| **Medicine Return** | Select **Rtn** beside individual medicines in the drug table |

> **[Note]** Adjusted Returns are available in **Wholesale Sale** and **Challan Mode**. You can also use the feature in Retail Sale when a customer is selected.

### Method 1: Direct Return

Use **Direct Return** when you want to adjust a return amount against the current bill without selecting individual medicines.

#### How to Apply a Direct Return

1. **Select a customer**

   Open **Sales → Add Sale**, switch to **Wholesale**, and select the customer.

   You can also open an existing wholesale sale for editing.

2. **Add medicines**

   Enter the medicines being sold, along with their quantities, rates, and applicable discounts.

3. **Enter the return amount**

   Locate **Direct Return (₹)** in the payment section.

   Enter the amount you want to adjust against the sale.

   For example, enter `1500` to adjust ₹1,500 against the current bill.

   ![MediFlux Direct Return Adjustment in Wholesale Billing](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/da1320d8-b064-4215-8f9a-1a6de563a5bf-adjusted-return-wholesale.png)
*Caption: Enter a return amount to adjust it against the current wholesale pharmacy sale in MediFlux.*

4. **Review the updated total**

   MediFlux deducts the return amount from the gross sale total.

   The bill summary updates to show the return adjustment and remaining amount.

5. **Choose the payment status**

   If an amount remains payable, select **Paid**, **Partial**, or **Unpaid** as appropriate.

6. **Complete the sale**

   Click **+ Add** to save the new sale or **Update** when editing an existing sale.

---

### How Direct Return Affects Payment

The adjustment depends on whether the return amount is equal to, less than, or greater than the sale amount.

#### Case 1: Return Amount Equals the Sale Amount

When the return amount equals the gross sale amount, the entire bill is adjusted against the return.

For example:

| Description | Amount |
| --- | ---: |
| Gross Sale Amount | ₹1,500 |
| Direct Return | -₹1,500 |
| Net Payable | ₹0 |

The sale is marked as **Paid by Cash**, with no remaining amount to collect.

---

#### Case 2: Return Amount Is Less Than the Sale Amount

When the return amount is less than the gross sale amount, MediFlux adjusts the return first.

For example:

| Description | Amount |
| --- | ---: |
| Gross Sale Amount | ₹2,435 |
| Direct Return | -₹1,500 |
| Remaining Amount | ₹935 |

The remaining ₹935 is handled according to the payment status:

| Payment Status | What happens |
| --- | --- |
| **Paid** | The remaining amount is recorded as paid by cash |
| **Partial** | The entered payment is deducted from the remaining amount, and the rest is recorded as customer credit |
| **Unpaid** | The entire remaining amount is recorded as customer credit |

##### Example: Partial Payment

Suppose the customer pays ₹200 after the return adjustment.

| Description | Amount |
| --- | ---: |
| Gross Sale Amount | ₹2,230 |
| Direct Return | -₹1,500 |
| Remaining Amount | ₹730 |
| Paid Amount | -₹200 |
| Outstanding Credit | ₹530 |

The remaining ₹530 is recorded as outstanding credit.

![MediFlux Wholesale Direct Return with Partial Payment](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/610538f0-57e7-4268-b209-45b5d05cd5f4-directreturn-partial-payment.png)
*Caption: The return is deducted from the wholesale sale first, and the unpaid portion is recorded as customer credit in MediFlux.*

You can review the outstanding balance in [Customer Ledger](/docs/customers/customer-ledger).

> **[Note]** The return amount is adjusted first. Any remaining amount is then handled according to the selected payment status.

---

#### Case 3: Return Amount Exceeds the Sale Amount

When the return amount exceeds the gross sale amount, MediFlux displays the **Return Amount Exceeds Sale Bill** dialog.

The dialog shows:

- **Gross Sale Total**
- **Return Total**
- **Excess Balance Owed**

For example:

| Description | Amount |
| --- | ---: |
| Gross Sale Total | ₹1,826 |
| Return Total | -₹2,000 |
| Excess Balance Owed | ₹174 |

You must choose how to handle the excess amount.

##### Option 1: Keep as Credit

Select **Keep as Credit** to retain the excess amount in the customer's account.

The excess is saved as advance credit for future purchases and reduces the customer's outstanding balance.

![MediFlux Keep Excess Wholesale Return as Customer Credit](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/d4b19b77-52c4-4d43-8bf3-a1d96177d045-wholesale-keepcredit.png)
*Caption: Retain the excess wholesale return amount as customer credit instead of issuing a refund in MediFlux.*

Click **Confirm & Complete Sale** to save the adjustment.

##### Option 2: Refund to Customer

Select **Refund to Customer** to return the excess amount to the customer.

The dialog provides:

| Field | Description |
| --- | --- |
| **Refund Amount (₹)** | Amount to refund, which can be edited |
| **Payment Method** | Cash, Card, UPI, or another available method |
| **Receipt / Transaction Ref** | Optional reference number for the refund |

1. **Select Refund to Customer**

   Choose **Refund to Customer** in the excess-return dialog.

2. **Enter the refund amount**

   Review or edit the amount shown in **Refund Amount (₹)**.

3. **Select a payment method**

   Choose the method used to refund the customer.

4. **Enter a reference if needed**

   Optionally enter a receipt or transaction reference.

5. **Confirm**

   Click **Confirm & Complete Sale** to complete the adjustment.

![MediFlux Refund Excess Wholesale Return to Customer](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/c11f4114-3522-4d3b-bc72-bc484e865ad3-wholesale-refund.png)
*Caption: Choose the refund amount and payment method before completing the wholesale pharmacy sale in MediFlux.*

> **[Note]** When the return amount exceeds the sale amount, MediFlux requires you to choose whether to keep the excess as customer credit or refund it.

---

### Method 2: Return Individual Medicines Using Rtn

Instead of entering a return amount directly, you can select individual medicines for return.

The **Rtn** column in the wholesale drug table contains a checkbox for each medicine row.

#### How to Return Individual Medicines

1. **Select a customer**

   Open **Add Sale** or **Edit Sale** in Wholesale mode and select the customer.

2. **Locate the medicines**

   Find the medicines being returned in the drug table.

3. **Select Rtn**

   Tick the **Rtn** checkbox beside each medicine you want to return.

4. **Review the adjustment**

   Check the return adjustment and updated sale totals.

5. **Save the sale**

   Click **+ Add** or **Update** to complete the sale.

> **[Note]** Use **Direct Return** when you want to enter a return amount manually. Use **Rtn** when the return applies to specific medicines.

---

### Viewing Adjusted Returns in the Sale Summary

After applying a return, the sale summary shows the original bill amount, return adjustment, and remaining net bill.

For example:

| Summary Field | Amount |
| --- | ---: |
| **Gross Total** | ₹2,435 |
| **Direct Return Amount** | ₹2,700 |
| **Return Adjustment** | -₹2,435 |
| **Net Payable** | ₹0.00 |

![MediFlux Wholesale Adjusted Return Summary Breakdown](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/8e788d57-2741-4e22-9de7-66d2a2c35a5b-wholesale-returned-sale.png)
*Caption: Review the gross total, return adjustment, and remaining net payable amount for wholesale pharmacy sales.*

When the sale is recorded, the confirmation dialog also shows that a return adjustment was applied.

---

### Adjusted Returns While Editing a Sale

Adjusted Returns can also be applied while editing an existing wholesale sale.

1. **Open Edit Sale**

   Open the wholesale sale you want to edit.

2. **Update the return**

   Enter or modify the **Direct Return (₹)** amount, or select **Rtn** for individual medicines.

3. **Review the payment details**

   Check the adjusted net bill and select the appropriate payment status.

4. **Save changes**

   Click **Update** to save the edited sale.

---

### Adjusted Returns in Challan Mode

Adjusted Returns are also available in **Challan Mode**.

When preparing a challan, you can enter a **Direct Return** amount or use **Rtn** to mark individual medicines for return.

1. **Switch to Challan Mode**

   Open **Sales → Add Sale → Wholesale**.

   Enable **Challan Mode** using the **Sale Mode** toggle.

2. **Select the customer**

   Choose the customer associated with the challan.

3. **Add medicines and returns**

   Enter the medicines being dispatched.

   Use **Direct Return (₹)** to adjust a return amount or select **Rtn** beside medicines being returned.

4. **Review and save**

   Review the adjusted totals and save the challan.

> **[Note]** A challan remains a delivery note until it is converted into a sale. The payment tracking described in the preceding examples applies to sale billing.

---

## Drug Table

The wholesale drug table contains additional columns for pricing, GST, and free quantities.

| Column | Description |
| --- | --- |
| **S.No** | Serial number |
| **Rtn** | Select the checkbox to mark an individual medicine for return |
| **Type** | Drug type: Rx, NRx, H1 |
| **Drug** | Drug name |
| **Batch** | Batch number |
| **Expiry** | Expiry date |
| **HSN** | HSN code of the drug |
| **Units** | Number of units per pack |
| **QTY** | Quantity sold |
| **FREE** | Free or bonus units given with this sale |
| **Rate** | Negotiated sale rate per unit |
| **MRP** | Maximum Retail Price |
| **DIS(%)** | Discount percentage |
| **CGST%** | Central GST percentage (for local sales) |
| **SGST%** | State GST percentage (for local sales) |
| **Subtotal** | Line item subtotal before tax |
| **Total** | Final line item total after tax |

Click the **grid icon (⊞)** at the bottom of the table to add more drug rows.

![MediFlux Wholesale Pharmacy Drug Table](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783938260260-548234085-drug-table.png)
*Caption: The MediFlux wholesale drug table with columns for HSN, free units, rate, MRP, discount, and split GST.*

---

## Quick Add Drug (Alt + D)

If a medicine is not available in your Drug List while creating a wholesale sale, you can add it directly without leaving the **Add Sale** page.

Press `Alt + D` to open the **Quick Add Drug** dialog. The medicine name you were searching for is automatically filled in, so you do not need to type it again.

![MediFlux Quick Add Drug from Wholesale Billing Screen](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/ce975837-6f34-4679-93c9-c9ad6d9cad50-wholesale-add-drug.png)
*Caption: Add a new medicine directly from the MediFlux Add Sale page using Alt + D without interrupting wholesale pharmacy billing.*

### How To Quickly Add A Drug

1. **Search for a medicine**

   On the **Add Sale** page in **Wholesale** mode, start typing the medicine name in the **Drug** field.

   If the medicine is not available in your inventory, press `Alt + D`.

   The **Quick Add Drug** dialog opens with the searched medicine name already filled in.

2. **Enter medicine details**

   Complete the required medicine information.

   | Field | Description |
   | --- | --- |
   | **Name** | Medicine name, prefilled from your search |
   | **Cost Price (₹)** | Purchase cost of the medicine |
   | **Unit Cost (₹)** | Cost per individual unit |
   | **MRP (₹)** | Maximum Retail Price |
   | **HSN Code** | HSN code for the medicine |
   | **Batch Number** | Medicine batch number, optional |
   | **Opening Stock** | Initial stock quantity |
   | **Expiry Date** | Expiry in `MM YY` format |
   | **Units Per Pack** | Number of units in each pack |
   | **Rack Number** | Storage rack or shelf location, optional |
   | **CGST (%)** | Central GST rate |
   | **SGST (%)** | State GST rate |
   | **IGST (%)** | Integrated GST rate |
   | **Dosage Form** | Medicine form, such as Tablet |
   | **Classification** | Medicine category, such as Rx |

   Fields marked with `*` are required.

3. **Save the medicine**

   Review the entered details and click **Save Drug**.

   The medicine is added to your inventory and becomes available for the current wholesale sale without requiring you to leave the billing page.

   Continue entering the remaining sale details as usual.

> **[Note]** The `Alt + D` shortcut lets you add a medicine that is missing from your Drug List while preparing a wholesale bill. You can create its inventory entry and continue billing without navigating to another page.

---

## Price Comparison

Once you select a drug and a customer, a hint appears below the drug table:

> Click on a drug and select a customer to view sale history and price comparison

![MediFlux Wholesale Drug Price Comparison History](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783938260255-28942719-previous-sale.png)
*Caption: View past wholesale transactions and negotiated rates for a specific drug and customer in MediFlux.*

If previous sale data exists for that drug and customer, clicking the hint opens a panel showing past transactions with date, batch, rate, and discount. This helps you maintain consistent pricing and quickly reference past negotiations.

If no previous data exists, the message shows: *[Drug name]: No previous sale data available for this customer*.

---

## Additional Notes

The **Additional Notes** field at the bottom is for entering specific instructions, delivery remarks, or terms of sale relevant to the wholesale transaction.

![MediFlux Additional Notes for Wholesale Pharmacy Sales](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783938260255-347513752-additional-notes.png)
*Caption: Enter delivery remarks, terms of sale, or specific instructions for wholesale pharmacy transactions in MediFlux.*

---

## Bill Summary Bar

At the bottom of the page, a fixed summary bar shows a live breakdown of the bill:

**Sub Total − Disc + Tax = Bill**

When an adjusted return is applied, the summary also shows the return adjustment and remaining net bill.

---

## Saving and Submitting

| Button | What it does |
| --- | --- |
| **Save Draft** | Saves the bill as a draft so you can resume it later from Drafts |
| **+ Add** | Finalises and saves the sale bill (or challan, if in Challan mode) |
| **Update** | Saves changes when editing an existing sale |

---

## Next Actions

After creating a wholesale bill, here's what most users do next:


  * [View Sales List](/docs/sales/sale-list) - Review and manage all your created wholesale and retail bills.
  * [Check Customer Ledger](/docs/customers/customer-ledger) - Track payments and outstanding dues for this wholesale customer.
  * [Scan & OCR](/docs/sales/scan-and-ocr) - Use barcode scanning or prescription OCR to add drugs faster.
  * [Returned Sales](/docs/sales/returned-sales) - Track returned sales and view their ledger entries.


> **[Info: Switch to Retail]** You can switch to **Retail** mode anytime using the toggle at the top-right for individual customer billing.

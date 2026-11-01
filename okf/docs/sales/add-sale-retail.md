---
type: Guide
title: Add Retail Sale
description: Learn how to create a retail pharmacy bill in MediFlux. Add customers, scan prescriptions, manage payments, and adjust returns quickly.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/sales/add-sale-retail
status: current
audience: User (Cashier)
owner: ""
icon: ShoppingCart
---

# Add Retail Sale

The **Add Sale** page is where you **create retail pharmacy bills** for individual customers, walk-in patients, and prescription-based sales in **MediFlux**. It is designed for fast, accurate billing with fields tailored to retail pharmacy workflows.

Navigate here from the sidebar: **Sales → Add Sale**. You can also click the **`+` button** on any screen and select **Add Sale**, which opens in Retail mode by default.

![MediFlux Add Retail Sale Page](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935731862-717775708-add-retail-sale-sidebar.png)
*Caption: The MediFlux retail sale page showing customer lookup, drug table, and payment options for fast pharmacy billing.*

---

## Sale Modes

At the top-right of the Add Sale page, you can switch between two modes:

| Mode | What it's for |
| --- | --- |
| **Retail** | Bills for individual customers, walk-in patients, and prescription-based sales |
| **Wholesale** | Bulk sale bills for other pharmacies and businesses |

---

## Scan & Add Drugs

Click **Scan** at the top-right to open the **Scan & Add Drugs** panel. This is designed for **phones and tablets** and opens your device camera for two input methods:

| Option | What it does |
| --- | --- |
| **Barcode Scanner** | Scan drug barcodes with your phone or tablet camera to instantly add items to the bill |
| **Image (OCR)** | Photograph a prescription, drug label, or drug list with your camera. MediFlux reads the text and populates drugs automatically |

Camera permissions are required for both options on phones and tablets.

![MediFlux Barcode Scanner and OCR Prescription Scan](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/154fd3cb-3d9d-4e55-a0f3-778a8db3aa1f-scan-retail-sale.png)
*Caption: Use the MediFlux barcode scanner or OCR image scan to quickly add drugs to a retail pharmacy bill.*

If you have a **physical barcode scanner device** connected to your computer, you can scan barcodes directly into the bill without opening the Scan panel.

The drug is added instantly with auto-populated name, batch, expiry, MRP, and available stock.

> **[Note]** For detailed setup instructions, supported devices, OCR best practices, and troubleshooting, see the [Scan & OCR](/docs/sales/scan-and-ocr) guide.

---

## Drafts

Click **Drafts** at the top-right to access all saved draft bills. Any bill you save midway using **Save Draft** is stored here and can be resumed at any time.

If you are in the middle of adding a sale and need to navigate away, click **Save Draft** to save your progress. You can return to it anytime from Drafts.

![MediFlux Saved Draft Bills Panel](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935770855-591226455-retail-drafts.png)
*Caption: Access and resume saved draft pharmacy bills anytime in MediFlux.*

---

## Retail Sale

The **Retail** mode is designed for fast, accurate billing with fields tailored to retail pharmacy workflows, customer lookup, doctor details, prescription uploads, and MRP-based pricing.

### Left Panel

The left panel in Retail mode has three options:

| Option | What it does |
| --- | --- |
| **Add Customer** `Ctrl+C` | Search for an existing customer or quickly add a new one. Shows **Currently Cash Sale** when no customer is selected |
| **Stock Issue Bill** | Switch to a Stock Issue bill for internal inventory reduction |
| **Local Sale (CGST/SGST)** | Toggle between Local Sale (CGST+SGST tax) and Out of State (IGST tax) |

![MediFlux Retail Sale Left Panel Options](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935818505-509551752-add-customer.png)
*Caption: The left panel in MediFlux retail sale showing Add Customer, Stock Issue Bill, and Local Sale tax toggle.*

#### Adding a Customer

Click **Add Customer** or press `Ctrl+C` to open the **Quick Add Customer** dialog. Search for an existing customer by name, phone, or Aadhaar number.

If the customer doesn't exist, press `Tab` or `Enter` to open a quick registration form:

| Field | Required | Description |
| --- | --- | --- |
| **Name** | Yes | Customer's full name |
| **Phone** | Yes | Contact number |
| **Address** | Yes | Customer's address |
| **State** | Yes | Customer's state |
| **Gender** | No | M / F / O |
| **Age** | No | Customer's age |
| **Aadhaar** | No | 12-digit Aadhaar number |
| **PMJAY / Ayushman Bharat Customer** | No | Tick if this is a PMJAY beneficiary |

Click **Save Customer** to create the profile and link them to the sale instantly.

![MediFlux Quick Add Customer Dialog](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935818504-697694370-add-customer-dialog.png)
*Caption: Search existing pharmacy customers or register a new consumer or business profile on the fly during billing.*

> **[Note]** For full details on customer management, see [Add a Customer](/docs/customers/add-customer).

---

### Doctor Details

The right panel in Retail mode shows fields for recording prescription information:

| Field | Description |
| --- | --- |
| **Doctor who prescribed** | Name of the prescribing doctor |
| **Doctor License No** | Doctor's license number |
| **OPD / Case Number** | OPD or case number for this prescription |

![MediFlux Doctor Details for Prescription Sales](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935868199-981150094-doctor-details.png)
*Caption: Record the prescribing doctor's name, license number, and OPD case number for pharmacy prescription sales.*

These fields are optional but recommended for prescription-based sales and audit trails.

---

### Payment Status

Select the payment status for this sale:

| Status | Description |
| --- | --- |
| **Paid** | Full payment received |
| **Unpaid** | No payment received yet |
| **Partial** | Partial payment received |

When **Paid** or **Partial** is selected, additional fields appear:

| Field | Description |
| --- | --- |
| **Payment Method** | Cash, Card, UPI, or Net Banking |
| **Paid Amount** | Amount received |
| **Discount %** | Overall discount on the bill |

When **Cash** is selected as the payment method, no additional bank details are needed.

![MediFlux Payment Status and Method Selection](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935868198-365651859-payment-methods.png)
*Caption: Select Paid, Unpaid, or Partial payment status with payment method and linked bank account details in MediFlux.*

When **Card**, **UPI**, or **Net Banking** is selected, a **bank details dropdown** appears below showing your linked accounts. Select the appropriate account to record where the payment was received.

When **Unpaid** is selected, the Payment Method defaults to **None**, Paid Amount and Discount % remain editable, and the bank details section is hidden.

---

## Adjusted Returns

**Adjusted Returns** lets you adjust a customer's return amount against a new or existing sale.

You can use this feature while **adding a new sale** or **editing an existing sale**.

Adjusted Returns are supported in:

- **Retail Sale**, when a customer is selected
- **Wholesale Sale**
- **Challan Sale**

> **[Warning: Customer selection is required]** Adjusted Returns cannot be used for walk-in customers. You must select a customer before applying a return adjustment.

### Ways to Adjust a Return

There are two ways to adjust returns:

| Method | How it works |
| --- | --- |
| **Direct Return** | Enter a return amount in the **Direct Return (₹)** field |
| **Medicine Return** | Select the **Rtn** checkbox beside individual medicines in the sale table |

Use **Direct Return** when you want to enter the return amount directly. Use **Rtn** when you want to return specific medicines.

### Method 1: Direct Return

The **Direct Return (₹)** field appears in the payment section of the sale form.

This field allows you to enter an amount that should be adjusted against the current sale bill.

#### How to Apply a Direct Return

1. **Select a customer**

   Go to **Sales → Add Sale** or open an existing sale for editing.

   Select the customer whose return amount you want to adjust.

   The **Direct Return (₹)** field is unavailable when no customer is selected.

   ![MediFlux Direct Return Disabled for Walk-in Sales](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/87be4e98-f12f-4668-947d-a828a04ed5bb-direct-return.png)
*Caption: The Direct Return field is disabled in MediFlux when no specific customer is selected for the pharmacy sale.*

2. **Add medicines**

   Enter the medicines being sold, including quantities and prices.

3. **Enter the return amount**

   Locate **Direct Return (₹)** in the payment section.

   Enter the amount to adjust.

   For example, enter `1500` to adjust ₹1,500 against the current bill.

   ![MediFlux Direct Return Adjustment Example](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/0bcd1aa5-2f6e-4df6-977f-60adecbe3e25-direct-return-sale-eg.png)
*Caption: A ₹1,500 direct return adjustment reduces the gross pharmacy sale amount of ₹2,276 to a net bill of ₹776.*

4. **Review the adjusted bill**

   MediFlux deducts the return amount from the gross sale total.

   The bottom summary bar updates to show the return adjustment and remaining net bill.

5. **Choose the payment status**

   Select **Paid**, **Partial**, or **Unpaid**, depending on how the remaining amount will be settled.

6. **Save the sale**

   Click **Add** to create the sale or **Update** when editing an existing sale.

---

### How Direct Return Affects the Sale Amount

The result depends on whether the return amount is equal to, less than, or greater than the sale amount.

#### Case 1: Return Amount Equals the Sale Amount

When the return amount equals the gross sale amount, the entire bill is adjusted against the return.

For example:

| Description | Amount |
| --- | ---: |
| Gross Sale Amount | ₹2,276 |
| Direct Return | -₹2,276 |
| Net Payable | ₹0 |

The sale is marked as **Paid by Cash**, with no remaining amount to collect.

---

#### Case 2: Return Amount Is Less Than the Sale Amount

When the return amount is less than the gross sale amount, the return is adjusted first.

The remaining balance is handled according to the selected payment status.

For example:

| Description | Amount |
| --- | ---: |
| Gross Sale Amount | ₹2,276 |
| Direct Return | -₹1,500 |
| Remaining Amount | ₹776 |

![MediFlux Return Amount Less Than Sale Amount](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/0bcd1aa5-2f6e-4df6-977f-60adecbe3e25-direct-return-sale-eg.png)
*Caption: A gross pharmacy bill of ₹2,276 is reduced by a ₹1,500 direct return, leaving ₹776 payable in MediFlux.*

You can handle the remaining ₹776 in three ways:

| Payment Status | What happens |
| --- | --- |
| **Paid** | The remaining ₹776 is recorded as paid by cash |
| **Partial** | The entered Paid Amount is deducted from ₹776, and the rest is recorded as customer credit |
| **Unpaid** | The entire remaining ₹776 is recorded as customer credit |

##### Example: Paid Sale

If you select **Paid**, the remaining ₹776 is recorded as paid by cash.

The sale is completed without an outstanding balance from this bill.

##### Example: Partial Sale

Suppose the customer pays ₹200 after the return adjustment.

| Description | Amount |
| --- | ---: |
| Gross Sale Amount | ₹2,276 |
| Direct Return | -₹1,500 |
| Remaining Amount | ₹776 |
| Paid Amount | -₹200 |
| Outstanding Credit | ₹576 |

The remaining ₹576 is recorded in the customer's ledger.

##### Example: Unpaid Sale

If you select **Unpaid**, the entire remaining ₹776 is recorded as credit against the customer's account.

You can review the outstanding balance in [Customer Ledger](/docs/customers/customer-ledger).

> **[Note]** The return amount is adjusted against the sale first. Any remaining amount is then handled according to the selected payment status.

---

#### Case 3: Return Amount Exceeds the Sale Amount

When the return amount exceeds the gross sale amount, MediFlux displays the **Return Amount Exceeds Sale Bill** dialog.

The dialog shows:

| Field | Description |
| --- | --- |
| **Gross Sale Total** | Total value of the current sale |
| **Return Total** | Total return amount being adjusted |
| **Excess Balance Owed** | Amount remaining after adjusting the entire sale |

For example:

| Description | Amount |
| --- | ---: |
| Gross Sale Total | ₹2,276 |
| Return Total | -₹2,500 |
| Excess Balance Owed | ₹224 |

The full ₹2,276 sale is adjusted, and ₹224 remains owed to the customer.

You must choose how to handle the excess ₹224 before completing the sale.

##### Option 1: Keep as Credit

Select **Keep as Credit** to retain the excess amount in the customer's account.

The amount is saved as advance credit for future purchases and reduces the customer's outstanding balance.

![MediFlux Keep Excess Return as Customer Credit](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/f5e7f60c-edb3-4e85-b08b-c0f0e526cbe5-keep-as-credit.png)
*Caption: Choose Keep as Credit in MediFlux to retain an excess pharmacy return amount in the customer's account for future purchases.*

Click **Confirm & Complete Sale** to save the adjustment.

##### Option 2: Refund to Customer

Select **Refund to Customer** to pay the excess amount back to the customer.

The dialog provides the following fields:

| Field | Description |
| --- | --- |
| **Refund Amount (₹)** | Amount to refund, which can be edited |
| **Payment Method** | Select the refund method, such as Cash, Card, or UPI |
| **Receipt / Transaction Ref** | Optional reference number for the refund |

1. **Select Refund to Customer**

   In the **Return Amount Exceeds Sale Bill** dialog, choose **Refund to Customer**.

2. **Review the refund amount**

   The excess balance appears in **Refund Amount (₹)**.

   In this example, the excess balance is ₹224.

   Edit the amount if required.

3. **Choose the payment method**

   Select the method used to refund the customer.

4. **Enter a reference if needed**

   Optionally enter a receipt or transaction reference.

5. **Complete the sale**

   Click **Confirm & Complete Sale** to record the sale and refund adjustment.

![MediFlux Refund Excess Return to Customer](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/5272327b-baa4-4fe1-9b50-6da7847c9407-refund-to-customer.png)
*Caption: Enter the refund amount, choose a payment method, and provide a transaction reference for excess pharmacy returns in MediFlux.*

> **[Note]** When the return amount exceeds the sale amount, MediFlux asks whether to retain the excess as customer credit or refund it to the customer.

---

### Method 2: Return Individual Medicines Using Rtn

You can also adjust returns by selecting specific medicines in the sale table.

The **Rtn** column contains a checkbox beside each medicine row.

Select this checkbox for the medicines being returned.

#### How to Return Individual Medicines

1. **Select a customer**

   Open **Add Sale** or **Edit Sale** and select the customer.

2. **Locate the medicines**

   In the drug table, find the medicines you want to return.

3. **Select Rtn**

   Tick the checkbox under **Rtn** beside each medicine being returned.

4. **Review the sale**

   Review the return adjustment and updated bill totals.

5. **Save the sale**

   Click **Add** or **Update** to complete the sale.

> **[Note]** Use **Direct Return** to enter a return amount manually. Use **Rtn** to select individual medicines for return.

---

### Viewing Adjusted Returns in the Sale Summary

After applying a return, the sale summary displays the adjustment alongside the bill totals.

For example:

| Summary Field | Amount |
| --- | ---: |
| **Subtotal** | ₹2,275.64 |
| **Total Discount** | ₹0 |
| **Total Tax** | ₹0 |
| **Gross Total** | ₹2,276 |
| **Direct Return Amount** | ₹1,500 |
| **Return Adjustment** | -₹1,500 |
| **Net Payable** | ₹776 |

The bottom summary bar also shows the return adjustment and remaining net bill.

![MediFlux Adjusted Return Calculation Breakdown](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/0bcd1aa5-2f6e-4df6-977f-60adecbe3e25-direct-return-sale-eg.png)
*Caption: The MediFlux summary shows ₹2,275.64 subtotal, ₹2,276 rounded gross total, ₹1,500 return adjustment, and ₹776 net payable.*

### Adjusted Returns in Sale Confirmation

When the sale is successfully recorded, the **Sale Recorded!** dialog displays the sale details and indicates that a return adjustment was applied.

For example:

`Return Adjusted: -₹1500.00`

The dialog also provides the usual options to view, print, or share the invoice.

![MediFlux Sale Recorded with Adjusted Return](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/b232a132-4e68-4e3c-9cc2-8c8f0c878c90-adjusted-sale.png)
*Caption: The MediFlux confirmation dialog shows that a return adjustment was successfully applied to the pharmacy sale.*

---

### Adjusted Returns While Editing a Sale

Adjusted Returns are also supported when editing an existing sale.

The **Edit Sale** page provides the same **Direct Return (₹)** field and **Rtn** checkboxes for individual medicines.

You can modify the return adjustment and review the updated totals before saving.

1. **Open the sale for editing**

   Open the existing sale in **Edit Sale**.

2. **Update the return**

   Enter or modify the **Direct Return (₹)** amount, or use **Rtn** to mark individual medicines for return.

3. **Review payment details**

   Check the updated net bill and choose the appropriate payment status.

   For example, with a ₹776 net bill, a ₹200 partial payment leaves ₹576 outstanding.

4. **Save the changes**

   Click **Update** to save the edited sale.

---

### Important Points About Adjusted Returns

- A customer must be selected before using Adjusted Returns.
- Adjusted Returns are not available for walk-in customers.
- You can use **Direct Return** or select individual medicines through **Rtn**.
- Returns can be adjusted while adding or editing a sale.
- If the return equals the sale amount, the sale is marked as paid by cash.
- If the return is less than the sale amount, the remaining amount follows the selected payment status.
- If the return exceeds the sale amount, the excess can be retained as customer credit or refunded.
- Unpaid amounts can be reviewed in the customer's ledger.

---

### Drug Table

| Column | Description |
| --- | --- |
| **S.No** | Serial number |
| **Rtn** | Select the checkbox to mark an individual medicine for return |
| **Type** | Drug type: Rx, NRx, H1 |
| **Drug** | Drug name |
| **Batch** | Batch number |
| **Expiry** | Expiry date |
| **QTY** | Quantity sold |
| **TABS** | Number of tablets/units |
| **MRP** | Maximum Retail Price |
| **DISC%** | Discount percentage |
| **Total** | Line item total |

Click the **grid icon (⊞)** at the bottom of the table to add more drug rows.

![MediFlux Pharmacy Drug Table in Retail Sale](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935922683-888144517-medicine-grid.png)
*Caption: Add drugs to the MediFlux retail sale with batch, expiry, quantity, MRP, discount, and individual return (Rtn) selection.*

---

### Quick Add Drug (Alt + D)

If a medicine is not available in your Drug List while creating a sale, you can add it directly without leaving the **Add Sale** page.

Press `Alt + D` to open the **Quick Add Drug** dialog. The medicine name you were searching for is automatically filled in, so you do not need to type it again.

![MediFlux Quick Add Drug from Billing Screen](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/5284e8b8-733f-40a2-9229-a47eb19c6713-quick-add-drug.png)
*Caption: Add a new medicine directly from the MediFlux Add Sale page using Alt + D without interrupting the pharmacy billing process.*

#### How To Quickly Add A Drug

1. **Search for a medicine**

   On the **Add Sale** page, start typing the medicine name in the **Drug** field.

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

   The medicine is added to your inventory and becomes available for the current sale without requiring you to leave the billing page.

   Continue entering the remaining sale details as usual.

> **[Note]** The `Alt + D` shortcut is useful when billing a medicine that has not yet been added to your Drug List. You can create its inventory entry and continue the same sale without navigating to a separate page.

---

### Additional Notes

Both Retail and Wholesale forms have an **Additional Notes** field for entering specific instructions, clinical notes, or delivery remarks.

![MediFlux Additional Notes for Pharmacy Sales](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935922678-913599840-additional-notes.png)
*Caption: Enter clinical notes, delivery remarks, or specific instructions for a pharmacy sale in MediFlux.*

---

### Prescription Management & Documents

If the customer has a physical prescription, you can upload it directly instead of manually entering each drug line by line. MediFlux will scan the prescription and fill in the drug details automatically, saving you time and reducing manual errors.

Click **+ Upload Prescription** to attach a scanned or photographed prescription. Once uploaded, the drugs from the prescription are read and added to the bill automatically.

You can also attach any additional supporting documents, reports, referral letters, or delivery notes using **+ Add More Files**.

![MediFlux Prescription Upload and OCR Scan](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935922677-222683802-upload-prescription.png)
*Caption: Upload physical prescriptions in MediFlux for automatic drug population and faster pharmacy billing via OCR.*

---

### Bill Summary Bar

At the bottom of the page, a fixed summary bar shows a live breakdown of the bill:

**Sub Total − Disc + Tax = Bill**

When an adjusted return is applied, the summary also shows the return deduction and the remaining net bill.

For example:

**₹2,276 Gross − ₹1,500 Return = ₹776 Net Bill**

---

### Saving and Submitting

| Button | What it does |
| --- | --- |
| **Save Draft** | Saves the bill as a draft so you can resume it later from Drafts |
| **+ Add** | Finalises and saves the sale bill |
| **Update** | Saves changes when editing an existing sale |

---

## Wholesale Sale

The **Wholesale** mode is for bulk sale bills to other pharmacies and businesses. Switch to Wholesale using the toggle at the top-right.

Adjusted Returns are also supported in Wholesale Sale.

For full details on bulk pricing and business customer fields, see [Add Wholesale Sale](/docs/sales/add-wholesale).

---

## After The Sale


  * [Sales List](/docs/sales/sale-list) - View, print, or share the invoice you just created.
  * [Customer Ledger](/docs/customers/customer-ledger) - Verify payment was recorded and check outstanding balance.
  * [Customer Profile](/docs/customers/customer-profile) - View this customer's full purchase history.
  * [Add Credit Note](/docs/sales/add-credit-note) - Correct the bill if you made an error.

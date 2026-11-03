---
type: Guide
title: AI Bill Scan
description: Scan pharmacy supplier invoices in MediFlux using OCR. Upload files or use your camera, map headers, and auto-import medicines into purchase bills.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/purchases/ai-bill-scan
status: current
audience: User (Pharmacist)
owner: ""
icon: Scan
---

# AI Bill Scan

The **AI Bill Scan** feature allows you to **scan pharmacy supplier invoices** using OCR instead of entering each medicine manually in **MediFlux**.

You can capture an invoice using your phone's camera or upload invoice files for MediFlux to scan and extract the medicine details.

Once the invoice is processed, you can review the scanned items, map the invoice columns to MediFlux fields, and import the medicines into the [Add Purchase](/docs/purchases/add-purchase) form.

Navigate to **Purchases → Add Purchase** and click **Scan** at the top-right.

![MediFlux AI Bill Scan Option on Add Purchase](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/2ac6035f-c22c-4fcf-a093-83f3a15ba24b-purchase-scan.png)
*Caption: The MediFlux Add Purchase page providing Scan, Import CSV, and Drafts options for entering pharmacy purchase data.*

---

## Available Scanning Methods

Click **Scan** to open the **Scan Invoice** dialog.

MediFlux provides two options depending on the device you are using.

| Method | Description | Availability |
| --- | --- | --- |
| **Camera** | Capture the supplier invoice using your device camera | Phone and tablet |
| **Upload Files** | Upload invoice photos or PDF documents | Phone, tablet, desktop, and laptop |

![MediFlux AI Bill Scan Options (Camera or Upload)](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/98633891-41a4-4f3b-819c-ac69ee860e92-scan-options.png)
*Caption: Choose Camera for a live pharmacy invoice scan or Upload Files to select invoice photos or PDFs in MediFlux.*

> **[Note]** On phones and tablets, you can use both **Camera** and **Upload Files**. On desktops and laptops, only **Upload Files** is available.

---

## Method 1: Scan Using Your Phone Camera

Use the **Camera** option when you have a physical supplier invoice and want to scan it directly.

1. **Open Add Purchase**

   Go to **Purchases → Add Purchase** on your phone or tablet.

2. **Open the scanner**

   Click **Scan** and select **Camera**.

   Allow camera access if your device requests permission.

3. **Capture the invoice**

   Position the supplier invoice within the camera view and capture it.

   Make sure the medicine names, batch numbers, quantities, prices, and other details are clearly visible.

4. **Wait for processing**

   After capturing the invoice, MediFlux processes the scanned document.

   The scanned invoice is available through **Purchase Drafts** while you continue the import workflow.

> **[Note]** For better scanning results, place the invoice on a flat surface, use sufficient lighting, and make sure the entire invoice is visible and readable.

---

## Method 2: Upload Invoice Files

Use **Upload Files** when you already have a digital copy or photograph of the supplier invoice.

This is the available scanning method on desktops and laptops.

1. **Open Scan Invoice**

   Navigate to **Purchases → Add Purchase**.

   Click **Scan** at the top-right.

2. **Select Upload Files**

   In the **Scan Invoice** dialog, select **Upload Files**.

   This option accepts invoice photos or PDF documents.

3. **Upload the invoice**

   Choose the invoice file or files from your device.

   MediFlux processes the uploaded documents to extract the purchase details.

4. **Access the scanned draft**

   Open **Drafts** to check the uploaded invoice and its processing status.

> **[Note]** **Scan** and **Import CSV** are separate features. Use **Scan** for invoice photos or PDFs. Use **Import CSV** when importing purchase data from a structured CSV file.

---

## Purchase Drafts

When you upload or scan a purchase invoice, it is stored in **Purchase Drafts** while the document is being processed.

This allows you to access the scanned invoice and continue working with it once processing is complete.

Click **Drafts** at the top-right of the **Add Purchase** page to open the **Purchase Drafts** panel.

![MediFlux Purchase Drafts Panel for Scanned Invoices](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/0b76d80c-a3e2-4559-8534-a6640b65ae24-purchase-drafts.png)
*Caption: View scanned pharmacy purchase drafts, OCR processing status, attached invoice files, and available draft actions in MediFlux.*

### Understanding the Draft Information

Each scanned draft displays information such as:

| Information | Description |
| --- | --- |
| **Draft Number** | Unique reference for the draft |
| **Date and Time** | When the draft was created |
| **Status** | Processing status, such as Scanned |
| **Files Attached** | Number of invoice files attached to the draft |
| **File Previews** | Thumbnails of the uploaded invoice documents |

Once a draft has been scanned, you can review it and choose how to proceed.

### Available Draft Actions

| Action | Description |
| --- | --- |
| **Edit** | Open the scanned draft for editing |
| **Rescan** | Scan the invoice again |
| **Append** | Add more files to the existing draft |
| **Insert** | Continue with importing the scanned invoice data |
| **Delete icon** | Delete the draft |

> **[Warning: Review before deleting]** Deleting a draft removes it from the Purchase Drafts list. Make sure you no longer need the draft before using the delete option.

### How to Continue a Scanned Draft

1. **Open Purchase Drafts**

   Click **Drafts** from the **Add Purchase** page.

2. **Find your invoice**

   Locate the draft using its reference number, date, or attached invoice previews.

   Check that its processing status shows **Scanned**.

3. **Review the available actions**

   You can use **Edit**, **Rescan**, or **Append** if the scanned draft needs further changes.

4. **Select Insert**

   When the scanned invoice is ready, click **Insert**.

   MediFlux opens the **Map Invoice Headers** dialog.

---

## Map Invoice Headers

Before importing the scanned medicines, you must review how the invoice's column headings are mapped to the corresponding fields in MediFlux.

Supplier invoices may use different column names for the same information.

For example, one invoice may use `Product Description` while another uses `Item Name`.

The **Map Invoice Headers** step ensures the extracted information is assigned to the correct purchase fields.

![MediFlux Map Invoice Headers for AI Bill Scan](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/cdda7c76-f74a-4ca2-a4dd-9f9353c6bcf3-mapping-purchase.png)
*Caption: Match detected pharmacy invoice columns with the corresponding MediFlux fields before importing scanned purchase data.*

### Understanding the Mapping Table

The mapping dialog displays two columns:

| Column | Description |
| --- | --- |
| **Detected Column** | Column name extracted from the scanned supplier invoice, along with a sample value |
| **Map To Field** | Corresponding MediFlux field where the extracted information should be imported |

For each detected column, select the correct field from the **Map To Field** dropdown.

### Common Header Mappings

| Detected Invoice Column | Map To Field |
| --- | --- |
| Product Description | Drug/Product Name |
| Pack | Units/Pack Size |
| HSN | HSN Code |
| Qty | Quantity |
| Free | Free Quantity |
| MRP | MRP |
| Batch | Batch Number |

The exact detected column names depend on the supplier's invoice.

> **[Warning: Check required fields]** Fields marked with `*` are required. Make sure they are mapped correctly before continuing.
>
> Pay particular attention to **Drug/Product Name**, **Quantity**, and **Batch Number**, as incorrect mapping can lead to incorrect purchase entries.

### How to Map Invoice Headers

1. **Review detected columns**

   Check each column name detected from the invoice.

   Use the sample value shown below the column name to understand what information it contains.

2. **Select the correct MediFlux field**

   Open the **Map To Field** dropdown and select the matching field.

   For example:

   - Map `Product Description` to **Drug/Product Name**
   - Map `Qty` to **Quantity**
   - Map `Batch` to **Batch Number**
   - Map `HSN` to **HSN Code**

3. **Check all required mappings**

   Scroll through the mapping list and make sure all required fields have been assigned correctly.

4. **Continue to review**

   Click **Next** to open the **Review & Import** step.

---

## Review Scanned Items Before Importing

After mapping the invoice headers, MediFlux displays the **Import Scanned Items** dialog.

This is the final review step before adding the extracted medicines to the purchase form.

![MediFlux Review Scanned Purchase Items Before Import](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/4b86d9fa-b090-4f92-8025-ac3b8fdd0d9b-import-headers.png)
*Caption: Preview extracted pharmacy medicines, quantities, rates, batches, MRP, subtotals, and HSN codes before importing into MediFlux.*

### What You Can Review

The dialog displays the number of items found in the scanned invoice and a preview of the extracted medicines.

Depending on the invoice, the preview can include:

| Detail | Description |
| --- | --- |
| **Drug Name** | Medicine name extracted from the invoice |
| **Dosage Form** | Medicine form, such as Tablet or Gel |
| **Quantity** | Purchased quantity |
| **Free Quantity** | Free units supplied, if applicable |
| **Rate** | Purchase rate |
| **Batch** | Batch number |
| **MRP** | Maximum Retail Price |
| **Subtotal** | Extracted line subtotal |
| **HSN** | HSN code |

For example, a scanned invoice might contain:

| Drug | Quantity | Rate | Subtotal |
| --- | ---: | ---: | ---: |
| PSI LIC-21/02241/30004488 | 2 | ₹23.50 | ₹47.00 |
| DAVERY GEL 30 GM | 6 + 1 free | ₹83.50 | ₹501.00 |
| MEGANERV-LC TAB | 3 | ₹16.85 | ₹50.55 |

Review the extracted details carefully before importing.

### Important: Existing Purchase Rows Will Be Replaced

> **[Warning: Import replaces current purchase entries]** Importing the scanned items will **replace all current entries in the purchase form**.
>
> If you have already entered medicines manually, review them before continuing with the import.

### Generic Items After Import

Scanned medicines are initially imported as **generic items**.

You can match them with medicines in your existing inventory after importing them into the purchase form.

> **[Note]** Importing scanned items does not automatically mean every medicine has been matched with an existing inventory record. Review and match the imported medicines as needed.

### How to Import Scanned Items

1. **Review the extracted medicines**

   Check the medicine names, quantities, rates, batch numbers, and other extracted details.

2. **Go back if corrections are needed**

   If the column mappings are incorrect, click **Back** to return to **Map Invoice Headers**.

   Correct the mappings and continue again.

3. **Confirm the import**

   Once the extracted data looks correct, click **Import**.

   MediFlux inserts the scanned medicines into the **Add Purchase** table.

---

## Review the Imported Purchase Bill

After importing, the extracted medicines appear as rows in the **Add Purchase** table.

You can review the imported values before saving the purchase.

![MediFlux Imported Medicines in Add Purchase Table](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/32d22eb7-b490-4a32-897c-ad109c7fcb86-review-purchase.png)
*Caption: Scanned pharmacy medicines populated in the MediFlux purchase table with drug names, batches, expiry dates, quantities, prices, and totals.*

### What to Check After Importing

Review the following information:

| Field | What to verify |
| --- | --- |
| **Drug** | Correct medicine name |
| **Units** | Correct units per pack |
| **HSN** | Correct HSN code |
| **Batch** | Correct batch number |
| **Expiry** | Correct expiry date |
| **QTY** | Correct purchased quantity |
| **Free** | Correct free quantity |
| **Cost** | Correct purchase rate |
| **MRP** | Correct maximum retail price |
| **SGST / CGST / IGST** | Correct applicable tax rates |
| **Subtotal / Total** | Correct calculated amounts |

You should also review the supplier, invoice number, invoice date, and warehouse selection before saving the purchase.

### Complete the Purchase

1. **Select the supplier**

   Choose the supplier associated with the scanned invoice.

2. **Enter invoice details**

   Enter or verify the invoice number and purchase date.

   Select a warehouse if the purchase should be assigned to a particular warehouse.

3. **Review the imported medicines**

   Check all imported medicine rows and correct any information that needs updating.

   Match generic items with your inventory where applicable.

4. **Review the bill summary**

   At the bottom of the page, review:

   - **Sub Total**
   - **Discount**
   - **Tax**
   - **Bill**
   - **Margin**

5. **Save the purchase**

   Click **+ Add** to record the purchase.

   Alternatively, click **Save Draft** if you want to complete it later.

---

## Complete Purchase Scanning Workflow

The complete process follows this order:

1. **Scan or upload**

   Open **Purchases → Add Purchase → Scan**.

   Use **Camera** on a phone or tablet, or **Upload Files** to upload invoice photos or PDFs.

2. **Wait for the scan**

   The uploaded invoice is stored in **Purchase Drafts** while processing.

3. **Open the scanned draft**

   Once the draft is scanned, open **Drafts** and locate the invoice.

   Use **Edit**, **Rescan**, or **Append** if needed.

4. **Insert the scanned invoice**

   Click **Insert** to continue with the import.

5. **Map the headers**

   Match the detected invoice columns with the correct MediFlux fields.

   Click **Next**.

6. **Review and import**

   Check the extracted medicine details.

   Click **Import** to populate the purchase table.

7. **Verify and save**

   Review the imported medicines, purchase details, and totals.

   Click **+ Add** to save the purchase.

---

## Important Things to Remember

- **Camera** and **Upload Files** are both available on phones and tablets.
- On desktops and laptops, use **Upload Files**.
- Scanned invoices are available through **Purchase Drafts** while processing.
- A scanned draft can be edited, rescanned, appended to, inserted, or deleted.
- Always review **Map Invoice Headers** before importing.
- The **Review & Import** step lets you check the extracted medicine details.
- Importing scanned items replaces the existing medicine entries in the purchase form.
- Imported medicines are initially treated as generic items and can be matched with inventory afterward.
- Review all medicine details, tax rates, and purchase totals before saving.

---

## Related Guides


  * [Add Purchase](/docs/purchases/add-purchase) - Learn how to create and save purchase bills.
  * [Drug List](/docs/inventory/drug-list) - Manage medicines and review existing inventory records.
  * [Warehouse](/docs/inventory/warehouse) - Manage warehouse locations for purchased stock.
  * [Scan & Image OCR for Sales](/docs/sales/scan-and-ocr) - Learn how barcode scanning and drug OCR work during sales.

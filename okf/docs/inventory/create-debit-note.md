---
type: Guide
title: Create Debit Note
description: Create debit notes from the Drug List, manually, or through full and partial purchase returns, including warehouse stock.
timestamp: "2026-10-12T16:09:19+05:30"
resource: /docs/inventory/create-debit-note
status: current
audience: User (Pharmacist)
owner: ""
icon: FilePlus
---

# Create Debit Note

> **Video:** [](https://www.youtube.com/watch?v=)

A **Debit Note** records medications being returned to a supplier, such as damaged, expired, or excess stock.

Creating a debit note deducts the returned quantity from your inventory, making that stock unavailable for sale.

There are three ways to create a debit note in MediFlux.

| Method | When to use it |
| --- | --- |
| **Method 1: From Drug List** | Select medications from your inventory and generate a debit note using prefilled details |
| **Method 2: From Create Debit Note** | Select a supplier, search for medications, and enter return details manually |
| **Method 3: From Purchase List** | Return an entire purchase or selected medications and quantities from an existing purchase |

> **[Note]** **Warehouse module:** Your **Main Store** is available by default. To add and manage additional warehouses, subscribe to and enable the **Warehouse** module under **Settings → Modules**.
>
> When enabled, you can also create debit notes for medications stored in warehouses.
>
> For more information, see [Modules](/docs/settings/modules).

---

## Method 1: From Drug List (Separated View)

This method lets you create a debit note directly from your existing inventory without entering medication details manually.

You can select one or more medications and adjust their return quantities, suppliers, discounts, and pricing before creating the debit note.

### How To Create A Debit Note From Drug List

1. **Select medications**

   Go to **Drugs → Drug List → Separated View**.

   Find the medications you want to return and select them using the checkboxes.

   Once selected, the bulk actions toolbar appears.

   Click **Generate Debit Note**.

   ![Generate Debit Note from Drug List](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/3bd1c372-b6e5-428c-bad0-4cb263e0b93a-generate-debit-note.png)
*Caption: Select medications in Separated View and click Generate Debit Note from the bulk actions toolbar.*

2. **Review the selected medications**

   The **Create Debit Note** dialog opens with the selected medications already added.

   MediFlux automatically fills in the available medication details, including the drug name, current stock, supplier, and unit cost.

   You can review and modify the return details before creating the debit note.

   ![Create Debit Note dialog](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/9a0db021-1387-45b3-a416-9fcc137fa373-review-debit-note.png)
*Caption: Review selected medications, current stock, return quantities, pricing, and suppliers.*

3. **Set return quantities**

   You can enter the return quantity manually using **Strips Qty** and **Tablets Qty**, where applicable.

   Alternatively, use **Return % Stock** to calculate the return quantities automatically.

   | Option | What it does |
   | --- | --- |
   | **25%** | Calculates 25% of available stock |
   | **50%** | Calculates 50% of available stock |
   | **75%** | Calculates 75% of available stock |
   | **100% (Full)** | Calculates the full available stock |
   | **Custom %** | Lets you enter a custom return percentage |

   Select the percentage and click **Apply**.

   MediFlux automatically fills the return quantity fields based on the selected percentage.

   You can adjust the calculated quantities manually.

   ![Return percentage](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/98aaffe1-ba33-46e0-aaff-9ad51d734fb4-return-percentage.png)
*Caption: Calculate return quantities using preset or custom percentages.*

4. **Review medication details**

   Each selected medication has its own row containing the following information:

   | Field | Description |
   | --- | --- |
   | **Medication Details** | Drug name and units per strip |
   | **Current Stock** | Available stock quantity |
   | **Strips Qty** | Number of strips to return |
   | **Tablets Qty** | Additional tablets to return |
   | **Free Qty** | Free quantity included in the return |
   | **Disc %** | Discount percentage |
   | **Unit Cost (₹)** | Cost per unit |
   | **Supplier** | Supplier against whom the debit note will be created |

   You can modify the return quantities, free quantity, discount, unit cost, and supplier.

5. **Assign suppliers**

   The **Supplier** field is populated automatically for each selected medication.

   If you want to create the debit note against a different supplier, select another supplier from that medication's dropdown.

   You can also use **Assign Supplier to All Medications** to select a common supplier for every medication in the dialog.

   ![Assign suppliers](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/66746e98-7ee7-40dc-b784-02c5daf4c164-assign-supplier.png)
*Caption: Change the supplier for an individual medication or assign one supplier to all selected medications.*

6. **Review totals**

   At the bottom of the dialog, MediFlux displays:

   - **Medications:** Number of medications included
   - **Total Units:** Total quantity selected for return

   Use **Reset** to reset the return quantities.

   You can also remove an individual medication using the delete icon beside its row.

7. **Create the debit note**

   Review the return quantities, pricing, discounts, and suppliers.

   Click **Create Debit Note**.

   A confirmation prompt appears showing the total quantity to be removed.

   Click **Confirm** to finalize the debit note or **Cancel** to return without submitting.

   ![Debit Note confirmation](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/c5fcfaa0-b34b-438c-842a-44634e250017-confirm-dialog.png)
*Caption: Review the total units being removed before confirming the debit note.*

   Once confirmed, the selected quantities are deducted from inventory.

> **[Note]** When using this method, the selected medications are already added to the debit note. You only need to review and adjust their return details before confirming.

---

## Method 2: From Drugs → Create Debit Note

This method lets you create a debit note manually without selecting medications from the Drug List first.

You can select the supplier, search for medications, and enter their return quantities and pricing information.

### How To Create A Debit Note Manually

1. **Open Create Debit Note**

   Go to **Drugs → Create Debit Note**.

   The page opens with a date field, supplier selection, and medication entry table.

   ![Create Debit Note page](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/15f39cdf-e230-4f2e-af8e-1eda1ea75627-create-debit-note.png)
*Caption: Create a debit note manually by selecting a supplier and entering medication details.*

2. **Select the date and supplier**

   At the top of the page, enter the debit note information.

   | Field | Description |
   | --- | --- |
   | **Date** | Date of the debit note |
   | **Search for suppliers** | Select the supplier against whom the debit note is being created |

3. **Search for medications**

   Click the **Drug Name** field.

   Start typing the medication name.

   MediFlux displays matching medications in a dropdown.

   Select the medication you want to return.

4. **Enter medication details**

   For each medication, enter or review the following information:

   | Field | Description |
   | --- | --- |
   | **Drug Name** | Medication being returned |
   | **Stock** | Current stock quantity |
   | **Qty** | Number of strips to return |
   | **Tablets** | Additional tablets to return |
   | **Batch** | Batch number |
   | **Expiry** | Expiry date in `MM/YY` format |
   | **Free** | Free quantity included in the return |
   | **Cost** | Cost price |
   | **MRP** | Maximum retail price |
   | **Disc %** | Discount percentage |
   | **CGST** | Central GST rate |
   | **SGST** | State GST rate |
   | **IGST** | Integrated GST rate |

   ![Medication return details](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/d376eb83-09ea-4b16-8cbf-ce78961bf578-debit-meds.png)
*Caption: Enter quantity, tablets, batch, expiry, free quantity, cost, MRP, discount, and GST rates.*

5. **Enter strips and tablets**

   You can enter both complete strips and individual tablets.

   For example, suppose a medication contains `10` tablets per strip.

   If you want to return `2` strips and `3` additional tablets:

   | Field | Value |
   | --- | --- |
   | **Qty** | `2` |
   | **Tablets** | `3` |
   | **Total tablets** | `23` |

   This allows you to return loose tablets along with complete strips.

6. **Add or remove medications**

   Click the **+** button below the table to add another medication row.

   To remove a medication, click the delete icon beside its row.

7. **Create the debit note**

   Review the supplier, medications, return quantities, and pricing.

   Click **Create Debit Note**.

   Once successfully submitted, the returned stock is deducted from inventory.

   The newly created debit note appears under **Drugs → Billing Notes → Debit Notes**.

> **[Note]** Unlike Method 1, this method starts with an empty medication entry table. You select the supplier and add the medications manually.

---

## Method 3: Purchase Returns

You can also create a debit note by returning medications from an existing purchase.

This method is useful when you want to return stock associated with a particular purchase without manually creating a separate debit note.

MediFlux provides two purchase return options:

| Return Type | Description |
| --- | --- |
| **Return Full Purchase** | Return the entire purchase |
| **Partial Return** | Return selected medications or quantities from a purchase |

Both options create a debit note for the returned stock.

### How To Start A Purchase Return

1. **Open Purchase List**

   Go to **Purchases → Purchase List**.

   Find the purchase you want to return.

   You can search using the supplier name, drug name, or challan/invoice number.

   ![Purchase List](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/4e1d3f72-5eab-40c9-b3f5-50d797814aa2-purchase-list.png)
*Caption: Find an existing purchase using supplier, medication, or invoice information.*

2. **Open purchase details**

   Select the purchase to open its details.

   The purchase details page displays the supplier, purchase date, invoice number, purchase summary, and purchased medications.

   At the top of the page, you can access **Invoice**, **Download**, **Print Labels**, and **More**.

   ![Purchase details](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/879efff1-b545-41d3-8134-814b4d1fd21e-list-options.png)
*Caption: View purchase information and access the available purchase actions.*

3. **Open Return Purchase**

   Click **More**.

   Expand **Return Purchase**.

   You will see:

   - **Return Full Purchase**
   - **Partial Return**

   ![Return Purchase options](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/3a9b6228-9664-4616-bd8e-ccf5acedc6e3-return-purchase.png)
*Caption: Choose Return Full Purchase or Partial Return from the purchase details page.*

### Option 1: Return Full Purchase

Use **Return Full Purchase** when you want to return the complete purchase to the supplier.

1. **Select Return Full Purchase**

   Open the purchase details page.

   Go to **More → Return Purchase → Return Full Purchase**.

2. **Review the purchase**

   Check the purchase information and ensure you intend to return the complete purchase.

3. **Complete the return**

   Proceed with the full purchase return.

   MediFlux creates the corresponding debit note and deducts the returned stock from inventory.

4. **Review the debit note**

   Go to **Drugs → Billing Notes → Debit Notes**.

   Find the debit note created for the purchase return.

> **[Warning: Returning an entire purchase]** Use **Return Full Purchase** only when you intend to return the complete purchase. If you want to return selected medications or quantities, choose **Partial Return**.

### Option 2: Partial Return

Use **Partial Return** when you want to return only certain medications or quantities from a purchase.

You do not need to return every medication included in the purchase.

#### How To Create A Partial Purchase Return

1. **Open Partial Return**

   Go to the purchase details page.

   Select **More → Return Purchase → Partial Return**.

   The **Partial Purchase Return** dialog opens.

   ![Partial Purchase Return](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/54e74415-9fd2-43ab-b836-74f7757cd8ae-partial-purchase.png)
*Caption: Select medications and specify the quantities to return from an existing purchase.*

2. **Review medication information**

   The dialog displays the medications included in the purchase.

   | Column | Description |
   | --- | --- |
   | **Select** | Checkbox to include a medication in the return |
   | **Drug Information** | Medication name, batch, and expiry |
   | **Total Stock** | Current stock quantity |
   | **Purchased** | Quantity originally purchased |
   | **Returned** | Quantity previously returned |
   | **Return Now** | Quantity to return in the current transaction |

3. **Select medications**

   Use the checkboxes to select the medications you want to return.

   You can select one or more medications.

4. **Enter return quantities**

   For each selected medication, enter the quantity in **Return Now**.

   For example:

   | Medication | Total Stock | Purchased | Returned | Return Now |
   | --- | ---: | ---: | ---: | ---: |
   | MUPICIP OINTMENT | `3` | `3` | `0` | `3` |
   | OFLOX OZ NF SUSP | `4` | `4` | `0` | `2` |
   | OTRIVIN FAST REL. | `3` | `3` | `0` | `0` |
   | BETADINE SOLUTION | `102` | `2` | `0` | `0` |
   | COREX DX | `11` | `11` | `0` | `7` |
   | ADHESIVE TAPE 10 CM | `2` | `2` | `0` | `0` |


   Only the selected medications and specified quantities are included in the return.

   ![Partial return quantities](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/30fd64b7-80c7-4500-8b0f-313d2ea5729c-partial-return-selected.png)
*Caption: Select medications and enter the quantity to return in the Return Now field.*

5. **Submit the return**

   Review the selected medications and quantities.

   Click **Submit Return**.

   MediFlux deducts the specified quantities from current stock and adjusts the supplier's ledger.

   A corresponding debit note is created.

> **[Note]** Review **Total Stock**, **Purchased**, and **Returned** before entering the quantity in **Return Now**.

---

## Creating Debit Notes For Warehouse Stock
If you have enabled the **Warehouse** module, you can create debit notes for medications stored in your warehouses using two methods:

| Method | How it works |
| --- | --- |
| **From Drug List** | Filter medications by warehouse, select them in **Separated View**, and click **Generate Debit Note** |
| **From Create Debit Note** | Search for a medication and select the correct warehouse stock entry using its warehouse label, such as `WH1` |

### Method 1: From Drug List

1. **Select the warehouse**

   Go to **Drugs → Drug List**.

   Use the warehouse filter to select the warehouse containing the medications you want to return.

   You can select a specific warehouse or **All Warehouses** to view stock across locations.

2. **Select warehouse medications**

   Switch to **Separated View**.

   Find the medications you want to return.

   Warehouse medications display a warehouse label, such as `WH1`, beside their names.

   Select the required medications using the checkboxes.

   ![Select warehouse medications](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/36afd34e-9857-47fa-a91d-41a11ffb88df-warehouse-debitnote.png)
*Caption: Select medications marked with their warehouse label in Separated View and access Generate Debit Note.*

3. **Generate the debit note**

   Click **Generate Debit Note**.

   The selected warehouse medications appear in the **Create Debit Note** dialog.

   Review the automatically populated details, return quantities, pricing, and suppliers.

   Click **Create Debit Note** and confirm the return.

### Method 2: From Create Debit Note

You can also select warehouse medications directly when creating a debit note manually.

1. **Open Create Debit Note**

   Go to **Drugs → Create Debit Note**.

   Select the date and supplier.

2. **Search for warehouse medications**

   Click the **Drug Name** field and start typing the medication name.

   The search dropdown displays matching medications.

   Warehouse medications show a label such as `WH1` beside their names.

   Each result also displays the available stock and units per pack.

   | Information | Description |
   | --- | --- |
   | **Drug Name** | Medication name |
   | **Warehouse Label** | Warehouse associated with the medication, such as `WH1` |
   | **Stock** | Available stock quantity |
   | **Units/Pack** | Number of units in each pack |

   For example, searching for **ACILOC** can display medications such as **ACILOC 300 TAB** and **ACILOC 150 TAB**, along with their warehouse labels and stock quantities.

   ![Search warehouse medications](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/dc344696-e533-437b-baae-b2b20b14d7ff-warehouse-debitnote3.png)
*Caption: Medication search results showing warehouse labels, available stock, and units per pack.*

3. **Select the correct warehouse medication**

   Select the medication entry associated with the warehouse from which you want to return stock.

   Check the warehouse label and stock quantity before selecting it.

4. **Complete the debit note**

   Enter the return quantities, batch, expiry, free quantity, cost, MRP, discount, and applicable GST information.

   Add other medications if needed.

   Click **Create Debit Note** to submit the return.

> **[Note]** When the same medication is available in multiple locations, check the warehouse label and stock quantity before selecting it.
>
> For information about enabling additional warehouses, see [**Modules**](/docs/settings/modules).

---

## Reviewing Created Debit Notes

Debit notes created using any of the three methods appear under:

**Drugs → Billing Notes → Debit Notes**

The page displays the debit notes recorded against suppliers.

| Column | Description |
| --- | --- |
| **Debit Note Details** | Debit note number and status |
| **Supplier** | Supplier associated with the debit note |
| **Amount** | Debit amount |
| **Actions** | Available actions for the debit note |

A debit note may display a status such as **Pending**.

![Debit Notes list](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/164943f3-dd02-4ff2-bb72-145b8168b1e0-billing_notes.png)
*Caption: View debit note numbers, supplier information, debit amounts, and statuses.*

For more information, see [Billing Notes](/docs/inventory/billing-notes).

---

## Mistakes To Avoid

> **[Warning: Selecting the wrong supplier]** When creating a debit note from the Drug List, check the supplier assigned to each medication.
>
> If you use **Assign Supplier to All Medications**, verify that the selected supplier is correct.

> **[Warning: Selecting the wrong warehouse]** When the **Warehouse** module is enabled, the same medication may be available in multiple locations.
>
> Check the warehouse label before selecting stock for return.

> **[Warning: Missing required details]** When creating a debit note manually, ensure the required batch, expiry, pricing, and applicable GST information is provided.
>
> Missing required details may prevent submission.

---

## Restock Or Review


  * [Billing Notes](/docs/inventory/billing-notes) - View and track debit notes created for supplier returns.
  * [Drug List](/docs/inventory/drug-list) - Review inventory and verify stock quantities after a return.
  * [Purchase List](/docs/purchases/purchase-list) - Review purchases and initiate full or partial purchase returns.
  * [Supplier Ledger](/docs/supplier/supplier-ledger) - Review supplier transactions and adjustments related to returns.

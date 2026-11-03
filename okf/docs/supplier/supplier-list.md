---
type: Reference
title: Supplier List
description: View and manage suppliers, track outstanding balances, record bulk payments, and perform bulk edit and delete actions.
timestamp: "2026-10-12T11:55:46+05:30"
resource: /docs/supplier/supplier-list
status: current
audience: User (Pharmacist)
owner: ""
icon: List
---

# Supplier List

The **Supplier List** is your main directory for managing all suppliers added to your pharmacy. From this page, you can search suppliers, check outstanding balances, view supplier details, record payments, and perform bulk actions on multiple suppliers.

Navigate to **Suppliers → Supplier List** from the sidebar.

---

## Summary Cards

At the top of the page, four summary cards provide an overview of your suppliers.

| Card | What it shows |
| --- | --- |
| **Total Suppliers** | Total number of suppliers added to your system |
| **Outstanding** | Click to view outstanding supplier balances |
| **Platform Suppliers** | Number of suppliers linked through the MediFlux platform |
| **Local Suppliers** | Number of local suppliers |

![Supplier summary cards](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/e1e7ff2b-d997-45fb-bcc1-ce2d1108710b-supplier-summary-cards.png)
*Caption: Overview of total suppliers, outstanding balances, platform suppliers, and local suppliers.*

---

## Searching Suppliers

Use the search bar at the top of the page to find suppliers by:

- Name
- Phone number
- Email address
- Address

Start typing to filter the supplier list.

The **All** dropdown beside the search bar allows you to change the search scope.

![Search suppliers](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/2741923e-2a33-49a2-9684-228ab770f1a7-supplier-search.png)
*Caption: Search suppliers by name, phone number, email address, or address.*

---

## Filter Chips

Below the search bar, you can use quick filters to narrow the supplier list.

| Filter | What it shows |
| --- | --- |
| **Outstanding Only** | Suppliers with pending outstanding balances |
| **No Outstanding** | Suppliers with no outstanding balance |
| **Platform Suppliers** | Suppliers linked through the MediFlux platform |
| **Local Suppliers** | Local suppliers |

Click a filter to apply it. Click it again to remove the filter.

![Supplier filters](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/3563b8f1-9228-4439-8cb6-488a1848ae19-supplier-filter-chips.png)
*Caption: Filter suppliers by outstanding balance or supplier type.*

---

## Supplier Table

The supplier table displays the following information:

| Column | Description |
| --- | --- |
| **Checkbox** | Select one or more suppliers for bulk actions |
| **Name** | Supplier name, with address displayed underneath |
| **Phone** | Supplier contact number |
| **Margin** | Click **Click to view** to check the supplier's margin details |
| **Outstanding** | Click **Click to view** to check the supplier's outstanding balance |
| **Last Payment** | Displays the last payment information, when available |
| **Actions** | Opens the three-dot menu for supplier-specific actions |

![Supplier table](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/bccbdc34-f8c1-4e1e-9de4-24b285c3505e-supplier-table.png)
*Caption: View supplier details, margins, outstanding balances, last payment, and actions.*

### Sorting the Table

Click the sorting arrows beside supported column headings to arrange suppliers in ascending or descending order.

You can use sorting to review suppliers by margin, outstanding balance, or last payment.

---

## Supplier Actions

At the top-right of the Supplier List, you will find:

- **+ Add Supplier**
- **Add Payment**
- **Actions**

The **Actions** dropdown contains the following options:

| Action | Description |
| --- | --- |
| **Bulk Payment** | Record payments for multiple suppliers |
| **Link** | Access the supplier linking option |
| **Import** | Import supplier data |
| **Export** | Export supplier data |

![Supplier actions dropdown](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/422aa0f2-1a62-46ce-8ca3-5f085af2553b-actions-supplier.png)
*Caption: Access Bulk Payment, Link, Import, and Export from the Actions menu.*

---

## Bulk Supplier Payment

The **Bulk Payment** feature allows you to record payments for multiple suppliers in a single workflow.

Instead of opening each supplier's ledger and recording payments individually, you can select the suppliers, enter their payment details, and submit them together.

### How to Record Bulk Supplier Payments

1. **Open Bulk Payment**

   Go to **Suppliers → Supplier List**.

   Click **Actions → Bulk Payment**.

   The **Bulk Supplier Payment** dialog opens.

2. **Select suppliers**

   The dialog displays a list of suppliers along with their outstanding balances.

   Use the checkboxes to select the suppliers you want to pay.

   You can also search for suppliers by name or address.

   ![Select suppliers for bulk payment](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/3f15b854-813d-4c32-9c56-ed4637c05fe5-select-supplier.png)
*Caption: Choose multiple suppliers and review their outstanding balances before recording payments.*

   Click **Next** to continue.

3. **Enter payment details**

   The next screen displays the selected suppliers and their current balances.

   At the top, you can set the payment date, payment method, and percentage of the amount.

   Each supplier has a separate payment section.

   | Field | Description |
   | --- | --- |
   | **Amount (₹)** | Amount to pay the supplier |
   | **Full Pay** | Quickly fill the amount required to clear the supplier's current balance |
   | **Payment Date** | Date of the payment |
   | **Method** | Payment method for that supplier |
   | **Receipt No.** | Optional payment receipt number |
   | **Notes** | Optional notes about the payment |

   ![Bulk Supplier Payment details](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/24ec5dde-6c0e-4aeb-a849-3a8272363528-bulk-payment.png)
*Caption: Enter individual payment amounts, dates, methods, receipt numbers, and notes for selected suppliers.*

4. **Review the total payment**

   At the bottom of the dialog, **Total Payment** shows the combined amount entered for the selected suppliers.

   Review the amounts and payment details before proceeding.

5. **Submit payments**

   Click **Submit** to record the bulk supplier payments.

> **[Note]** Each supplier has an individual payment amount and payment method. You can use **Full Pay** for suppliers whose outstanding balance you want to clear completely.

---

## Bulk Actions

The Supplier List also supports selecting multiple suppliers to perform bulk actions.

Available bulk actions include:

- **Bulk Edit**
- **Bulk Delete**

### Selecting Suppliers

1. **Select supplier records**

   Go to **Suppliers → Supplier List**.

   Tick the checkbox beside each supplier you want to include.

   You can also use the checkbox in the table header to select all suppliers currently displayed.

2. **Choose a bulk action**

   Once suppliers are selected, a selection bar appears above the table.

   It displays the number of selected suppliers and the available actions:

   - **Bulk Edit**
   - **Bulk Delete**
   - **Clear Selection**

   ![Bulk supplier selection](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/6db8628a-d393-43a6-a299-8805f4fa99fc-bulk-delete.png)
*Caption: Select multiple suppliers to access Bulk Edit, Bulk Delete, and Clear Selection.*

---

### Bulk Edit Suppliers

**Bulk Edit** allows you to update the **State** of multiple selected suppliers at once.

> **[Warning: Bulk Edit limitation]** Currently, Bulk Edit supports changing only the supplier's **State**. Other supplier details cannot be modified through this bulk action.

#### How to Bulk Edit Suppliers

1. **Select suppliers**

   Tick the checkboxes beside the suppliers you want to update.

2. **Open Bulk Edit**

   Click **Bulk Edit** in the selection bar.

   The **Bulk Edit Suppliers** dialog opens and displays the number of selected suppliers.

   ![Bulk Edit Suppliers](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/4bbc809f-6cc9-45a1-892f-93ef4ffbff84-bulk-edit.png)
*Caption: Update the State field for multiple selected suppliers.*

3. **Choose a state**

   Open the **State** dropdown and select the state you want to assign to the selected suppliers.

   The default option is **Select State (Unchanged)**.

4. **Apply the update**

   Click **Apply Updates** to save the state change for the selected suppliers.

> **[Note]** The selected state is applied to all suppliers included in the bulk edit operation.

---

### Bulk Delete Suppliers

**Bulk Delete** allows you to delete multiple selected supplier records in one operation.

1. **Select suppliers**

   Tick the checkboxes beside the suppliers you want to delete.

2. **Choose Bulk Delete**

   Click **Bulk Delete** in the selection bar.

3. **Review the deletion**

   Review the selected suppliers and any confirmation shown by MediFlux before proceeding.

> **[Warning: Check before deleting]** Make sure you have selected the correct suppliers before using Bulk Delete. The screenshots provided do not establish whether deleted suppliers can be restored, so do not assume this action is reversible.

### Clear Selection

Click **Clear Selection** to deselect all currently selected suppliers and close the bulk action bar.

---

## Row Actions and Supplier Details

Click the **three-dot menu (⋮)** in a supplier's row to access the available actions for that supplier.

To open the supplier's full profile, click the **supplier name**.

![Supplier row actions](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/b3400f3e-fea8-430c-9feb-989dda4c1ddb-individual-supplier-actions.png)
*Caption: Access supplier-specific actions from the three-dot menu.*

---

## Adding a Supplier

Click **+ Add Supplier** at the top-right to create a new supplier profile.

For detailed instructions, see [Add a Supplier](/docs/supplier/add-supplier).

---

## Common Follow-Ups


  * [Supplier Ledger](/docs/supplier/supplier-ledger) - Review supplier transactions, outstanding dues, and payment history.
  * [Add a Supplier](/docs/supplier/add-supplier) - Create a new supplier profile.
  * [Customer List](/docs/customers/customer-list) - View and manage customer records.
  * [Drug List](/docs/inventory/drug-list) - Review medicine inventory and stock details.

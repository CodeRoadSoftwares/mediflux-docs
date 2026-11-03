---
type: Reference
title: Customer List
description: View and manage customers, track outstanding balances and credit limits, record bulk payments, filter and export customer data, and perform bulk updates or deletions.
timestamp: "2026-10-12T11:55:46+05:30"
resource: /docs/customers/customer-list
status: current
audience: User (Pharmacist/Cashier)
owner: ""
icon: List
---

# Customer List

The **Customer List** is your main directory of customers linked to your pharmacy, including individual consumers and businesses.

It provides an overview of customer details, outstanding balances, credit limits, and payment history, with options to search, filter, record bulk payments, import, export, and manage multiple customers at once.

---

## Summary Cards

At the top of the page, four summary cards give you an overview of your customer base.

| Card | What it shows |
| --- | --- |
| **Total Customers** | Total number of customer profiles |
| **Outstanding** | Total outstanding amount across customers |
| **Linked Stores** | Number of pharmacy stores linked through MediFlux |
| **Local Customers** | Number of local customer profiles |

![Customer summary cards](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/c95643ae-4c19-4008-89d7-ddd19120bb5d-customer-summary-cards.png)
*Caption: Overview of total customers, outstanding balances, linked stores, and local customers.*

---

## Searching Customers

Use the search bar at the top of the **Customer List** to find customers by **name, phone number, email, or address**.

The **All** dropdown lets you narrow the search to a particular field.

![Search customers](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/b5f4c5fb-27ff-46ea-b777-bcc6f24b0f7c-search-customers.png)
*Caption: Search customer records using names, phone numbers, emails, or addresses.*

---

## Quick Filters

Below the search bar, two quick filters let you narrow the customer list.

| Filter | What it shows |
| --- | --- |
| **Linked Stores** | Customers who are other pharmacy stores linked through MediFlux |
| **Local Customers** | Local customers added to your store |

![Customer quick filters](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/2d84650c-b4d2-4046-a65a-d5d3b6c28169-customer-quickfilters.png)
*Caption: Filter customers by Linked Stores or Local Customers.*

---

## Customer Table

The **Customer List** displays customer information in a table.

| Column | Description |
| --- | --- |
| **Checkbox** | Select customers for bulk editing or deletion |
| **Name** | Customer name and customer type. Displays **Limit Exceeded** when the customer has exceeded their credit limit |
| **Phone** | Customer's contact number |
| **Outstanding** | Customer's current outstanding balance |
| **Last Payment** | Date of the customer's last recorded payment |
| **Actions** | Opens the individual customer's action menu |

![Customer List](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/88241ddc-2d7f-473b-afc8-fa0d8756a6d8-customer-list.png)
*Caption: Customer records showing names, phone numbers, outstanding balances, last payment dates, and actions.*

### Sorting The Table

The **Name** and **Outstanding** columns are sortable.

Click either column heading to change the sorting order between ascending and descending.

---

## Customer Credit Limit

MediFlux lets you set credit limits to control how much outstanding credit customers can accumulate.

You can set a **Global Customer Credit Limit** for your store or configure a separate limit for an individual customer.

When a customer's outstanding balance exceeds their applicable limit, MediFlux displays a **Limit Exceeded** indicator in the Customer List and warns you during the sales process.

### Setting a Global Customer Credit Limit

The **Global Customer Credit Limit** is a store-wide credit threshold that applies to customers who do not have an individual credit limit configured.

1. **Open Account Settings**

   Go to **Settings → Account**.

2. **Edit Account Information**

   Click **Edit** to open the account information form.

3. **Enter the global credit limit**

   Find **Global Customer Credit Limit (₹)** and enter the amount you want to set.

   For example, enter `1000` to set a global customer credit limit of ₹1,000.

4. **Save the changes**

   Save the updated account information.

   The global credit limit now applies to customers who do not have an individual credit limit.

{/* Add Figure: Global Customer Credit Limit field in Settings → Account → Edit */}

> **[Note]** A customer's individual credit limit overrides the global credit limit when one is configured.

### Setting an Individual Customer Credit Limit

You can also set a separate credit limit for a particular customer.

There are two ways to do this:

- **When creating a customer:** Enter the credit limit while adding a new customer profile.
- **When editing a customer:** Open the existing customer's details and update their credit limit.

For example, suppose your global credit limit is ₹1,000, but a particular customer has an individual limit of ₹5,000.

MediFlux uses the customer's individual limit of ₹5,000 instead of the global ₹1,000 limit.

### Identifying Customers Who Exceed Their Credit Limit

Go to **Customers → Customer List**.

Customers whose outstanding balance exceeds their applicable credit limit are marked with a red **Limit Exceeded** label beside their name.

For example:

| Customer | Credit Limit | Outstanding | Status |
| --- | ---: | ---: | --- |
| Naveed Anjum | ₹1,000 | ₹3,739 | **Limit Exceeded** |
| Another Customer | ₹1,000 | ₹500 | Within Limit |

This makes it easier to identify customers whose outstanding balances have crossed their allowed credit limit without opening each customer profile.

{/* Add Figure: Customer List showing Limit Exceeded labels beside customer names */}

### How Credit Limits Affect Sales

Customer credit limits are also checked when creating a sale.

When you search for a customer in **Add Sale**, MediFlux indicates whether their credit limit has already been exceeded.

#### Credit Limit Warning During Customer Search

In the **Quick Add Customer** search, customers who have exceeded their credit limit display a red **Limit Exceeded** label beside their name.

This allows you to identify the customer's credit status before selecting them.

{/* Add Figure: Quick Add Customer search showing Limit Exceeded */}

#### Restriction on Unpaid Sales

If you select a customer whose credit limit has already been reached or exceeded, MediFlux prevents an **Unpaid** sale.

A warning appears showing the customer's outstanding amount and credit limit.

For example:

**Credit limit exceeded for customer "Naveed Anjum"!**

`Outstanding: ₹3,739, Limit: ₹1,000`

This prevents additional unpaid sales when the customer's credit limit has already been reached.

{/* Add Figure: Add Sale showing the credit limit exceeded warning */}

> **[Note]** The credit limit applies to customer credit during sales. When the customer's applicable limit has already been reached or exceeded, an additional **Unpaid** sale is blocked.

---

## Filter And Sort

Select the **Filter** icon beside the quick filters to open additional filtering and sorting options.

| Option | What it does |
| --- | --- |
| **Sort By** | Sort customers by Name or Last Payment |
| **Last Payment Date Range** | Filter customers using a start and end date based on their last payment |

Select **Apply Filters** to apply your choices or **Reset** to clear them.

![Customer Filter and Sort](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783660640379-866791328-filterandsort-panel.png)
*Caption: Apply additional filters and sorting options to the Customer List.*

---

## Page-Level Actions

At the top of the **Customer List**, you can access the main customer management actions.

| Action | What it does |
| --- | --- |
| **Add Customer** | Opens the form to create a new customer profile |
| **Add Payment** | Opens the customer payment form |
| **Actions → Bulk Payment** | Record payments from multiple customers in a single operation |
| **Actions → Import** | Imports customer records from a file |
| **Actions → Export** | Exports customer data |

![Customer List actions](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/d24ca0cc-f03b-489a-af61-c21a7f6b7a5e-bulk-actions.png)
*Caption: Access Add Customer, Add Payment, Bulk Payment, Import, and Export from the Customer List.*

---

## Bulk Customer Payment

**Bulk Customer Payment** allows you to record payments received from multiple customers in a single operation.

Instead of opening each customer's ledger and recording payments separately, you can select multiple customers, enter their payment details, and submit the payments together.

This is useful when collecting outstanding payments from several customers.

### How to Record Bulk Customer Payments

1. **Open Bulk Payment**

   Go to **Customers → Customer List**.

   At the top-right, click **Actions → Bulk Payment**.

   The **Bulk Customer Payment** dialog opens.

2. **Select customers**

   The dialog displays customers along with their outstanding balances.

   Use the checkboxes to select the customers whose payments you want to record.

   You can search for customers by **name, phone number, or address**.

   | Column | Description |
   | --- | --- |
   | **Checkbox** | Select or deselect customers |
   | **Customer** | Customer name, phone number, and address |
   | **Outstanding** | Current outstanding amount for the customer |

   Customers with outstanding balances are shown with the amount in red, while customers with a zero balance are shown in green.

   ![Select customers for bulk payment](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/1a22e21f-0e99-4d8d-94dd-8027dd77fd08-bulk-customer-payment.png)
*Caption: Search and select customers while reviewing their outstanding balances.*

   After selecting the required customers, click **Next**.

3. **Enter payment details**

   The next screen displays a separate payment section for each selected customer.

   At the top of the dialog, you can set:

   | Field | Description |
   | --- | --- |
   | **Date** | Payment date |
   | **Payment Method** | Payment method selected at the top of the form |
   | **% of amt.** | Percentage field for calculating payment amounts |

   Each selected customer has their own payment details.

   | Field | Description |
   | --- | --- |
   | **Amount (₹)** | Amount received from the customer |
   | **Full Pay** | Fills the payment amount with the customer's current outstanding balance |
   | **Payment Date** | Date the customer's payment was received |
   | **Method** | Payment method for the individual customer |
   | **Receipt No.** | Optional payment receipt or transaction number |
   | **Notes** | Optional remarks about the payment |

   ![Enter bulk customer payment details](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/2c943fc5-c816-40bc-af45-4f0fe4fe9e13-bulk-payment-details.png)
*Caption: Record payment amounts, dates, methods, receipt numbers, and notes for multiple customers.*

4. **Review the total payment**

   At the bottom of the dialog, **Total Payment** displays the combined amount entered for all selected customers.

   The number of selected customers is also displayed beside the total.

   Review the individual payment amounts before submitting.

5. **Submit payments**

   Click **Submit** to record the customer payments.

   You can review the recorded payments and updated outstanding balances in the respective [**Customer Ledgers**](/docs/customers/customer-ledger).

### Example: Recording Payments for Two Customers

Suppose two customers have the following outstanding balances:

| Customer | Outstanding | Payment Received | Remaining |
| --- | ---: | ---: | ---: |
| Customer A | ₹14,622.65 | ₹5,000 | ₹9,622.65 |
| Customer B | ₹4,269 | ₹4,269 | ₹0 |
| **Total** | **₹18,891.65** | **₹9,269** | **₹9,622.65** |

Enter ₹5,000 for Customer A and use **Full Pay** for Customer B.

The **Total Payment** at the bottom displays ₹9,269.

After recording these payments, Customer A still has an outstanding balance, while Customer B's balance is cleared.

> **[Note]** You can enter different payment amounts and payment methods for each customer. Use **Full Pay** to fill the customer's complete outstanding amount, or enter a smaller amount to record a partial payment.

---

## Selecting Customers And Bulk Actions

You can select multiple customers to update or delete their records together.

Select the checkboxes beside the customers you want to manage.

Once at least one customer is selected, a bulk action toolbar appears above the table.

The toolbar displays the number of selected customers and provides:

| Action | What it does |
| --- | --- |
| **Bulk Edit** | Update State and Area for the selected customers |
| **Bulk Delete** | Delete selected customer profiles and ledger entries |
| **Clear Selection** | Deselect all selected customers |

![Customer bulk actions](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/883f4235-84de-4344-9182-36e882eb00d6-bulk-actions-customers.png)
*Caption: Select multiple customers to access Bulk Edit, Bulk Delete, and Clear Selection.*

---

## Bulk Edit Customers

**Bulk Edit** lets you update the address-related information of multiple customers at once.

You can change the **State** and **Area** without opening each customer profile individually.

### How To Bulk Edit Customers

1. **Select customers**

   Go to **Customers → Customer List**.

   Select the checkboxes beside the customers you want to update.

2. **Open Bulk Edit**

   Click **Bulk Edit** from the selection toolbar.

   The **Bulk Edit Customers** dialog opens and displays the number of selected customers.

3. **Enter the changes**

   You can update the following fields:

   | Field | Description |
   | --- | --- |
   | **State** | Select the state to apply to the selected customers |
   | **Area** | Enter the area to apply to the selected customers |

   Fields marked **Unchanged** are left as they are.

   You can update one field without changing the other.

   ![Bulk Edit Customers](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/4e7b1a65-fd4b-4e61-8a0f-036e3a557caf-customerbulk-edit.png)
*Caption: Update the State and Area of multiple selected customers.*

4. **Apply updates**

   Review your changes and click **Apply Updates**.

   The specified changes are applied to the selected customer profiles.

> **[Note]** Bulk Edit applies the same entered values to all selected customers. Leave a field unchanged if you do not want to modify it.

---

## Bulk Delete Customers

**Bulk Delete** lets you delete multiple customer profiles together.

When you select **Bulk Delete**, MediFlux opens a confirmation dialog showing the number of selected customers.

If the selected customers have outstanding balances, the dialog provides settlement options for handling positive and negative balances before deletion.

> **[Warning: Customer profiles and ledger entries will be deleted]** Bulk Delete removes the selected customer profiles and their ledger entries. Review the customers and balance settlement options carefully before confirming.

### How To Bulk Delete Customers

1. **Select customers**

   Go to **Customers → Customer List**.

   Select the customers you want to delete using the checkboxes.

2. **Open Bulk Delete**

   Click **Bulk Delete** from the selection toolbar.

   The **Bulk Delete Customers** dialog opens and displays the number of selected customers.

   ![Bulk Delete Customers](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/fe6c057a-323a-41d0-8129-e9f1e3fabda4-customer-bulk-delete.png)
*Caption: Review selected customers and available balance settlement options before deletion.*

3. **Choose positive balance settlement**

   If the selected customers have positive balances, choose how those balances should be settled.

   | Option | Description |
   | --- | --- |
   | **Refunded to Customer** | Record the balance as refunded to the customer |
   | **Customer Credit Write-off** | Write off the customer's remaining credit balance |

4. **Choose negative balance settlement**

   If the selected customers have negative balances, the **Negative Balance Settlement** field appears.

   Choose how the balance should be handled.

   | Option | Description |
   | --- | --- |
   | **Customer Paid** | Record the outstanding amount as paid by the customer |
   | **Bad Debt / Waive Off** | Write off the outstanding amount instead of collecting payment |

5. **Select the payment method**

   When a settlement involves a payment or refund, select the **Payment Method**.

   Available options include:

   - **Cash**
   - **Card**
   - **UPI**
   - **Net Banking**

6. **Confirm deletion**

   Review the selected customers and their balance settlement options.

   Click **Confirm Delete** to proceed or **Cancel** to return without deleting the customers.

> **[Note]** The settlement fields displayed depend on the balances of the selected customers. If your selection includes customers with both positive and negative balances, MediFlux provides options for handling both.

### Accounting Records For Balance Settlements

When customer balances are settled during bulk deletion, MediFlux automatically records the corresponding transactions in **Accounting → Journals**.

These records include:

| Settlement | Accounting record |
| --- | --- |
| **Refunded to Customer** | Records the customer refund |
| **Customer Credit Write-off** | Records the credit balance write-off |
| **Customer Paid** | Records the payment received from the customer |
| **Bad Debt / Waive Off** | Records the outstanding balance written off as bad debt |

This ensures that balance settlements remain traceable in accounting even after the customer profiles and ledger entries are deleted.

For more information, see [**Journals**](/docs/accounting/journals).

---

## Importing Customers

To import customer records in bulk, select **Actions → Import**.

The import process works in four steps:

1. **Upload**

   Upload your CSV or Excel file using **Select File** or drag and drop it into the upload area.

   You can also select **Download Template** to get a file with the expected column headers.

2. **Map Headers**

   Match the columns from your uploaded file to the corresponding MediFlux customer fields.

3. **Preview**

   Review the imported data and check for missing or incorrect information.

4. **Complete**

   Confirm the import to add the valid customer records to your Customer List.

![Import Customers](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783661173515-480779070-import-customers.png)
*Caption: Upload customer records using a CSV or Excel file.*

> **[Note]** Download the import template before preparing your file to make sure the column headers match the expected format.

---

## Exporting Customers

Select **Actions → Export** to open the **Export Customers** dialog.

You can choose which customer information to include, apply filters, and select the export format.

### Columns To Include

**Name** is included by default.

Additional columns include:

`GSTIN`, `License Number`, `Phone`, `Address`, `Created At`, `Last Payment Date`, `Last Bill Date`, and `Current Outstanding`.

Use **Deselect All** to clear the optional column selections.

### Filter By Date Ranges

You can filter the export using three date fields:

- **Created At**
- **Last Payment Date**
- **Last Bill Date**

Each supports date range options such as **All Time**, **This Month**, **Last Month**, **This Quarter**, **This Year**, **Last Year**, or a custom date range.

### Filter By Outstanding

| Option | What it does |
| --- | --- |
| **Has outstanding** | Includes customers with an outstanding balance |
| **No outstanding** | Includes customers with no outstanding balance |
| **All** | Includes customers regardless of outstanding balance |

You can also enter a **Min (₹)** and **Max (₹)** outstanding amount.

### Sort By

Choose the field and sorting order for the exported records.

### Export Format

Select the export format:

- **Export PDF**
- **Export Excel**

![Export Customers](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783661247374-941995045-export.png)
*Caption: Select customer columns, date filters, outstanding balance filters, and export format.*

---

## Where To Go From Here


  * [Add a Customer](/docs/customers/add-customer) - Create a new customer profile.
  * [Customer Ledger](/docs/customers/customer-ledger) - Track payments, credit, and outstanding dues.
  * [Accounting Journals](/docs/accounting/journals) - Review accounting entries created for customer balance settlements.
  * [Sales List](/docs/sales/sale-list) - View all sales and filter by customer.

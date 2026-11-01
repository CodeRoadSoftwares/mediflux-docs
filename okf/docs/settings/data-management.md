---
type: Guide
title: Data Management
description: Permanently delete all transactional data from your store to start fresh.
timestamp: "2026-08-27T10:54:01+05:30"
resource: /docs/settings/data-management
status: current
audience: User (Admin)
owner: ""
icon: Database
---

# Data Management

The **Data Management** tab gives you a single, irreversible action: permanently deleting all transactional data from your store. This is meant for stores that want a completely fresh start, or that have finished a testing phase and want to clear out test data before going live.

> **[Note]** This is a destructive, permanent action. Read this page carefully before using it.

---

## Danger Zone
Clearing your data performs a **permanent deletion** of all transactional records.

### What Will Be Deleted
|  |  |
| --- | --- |
| All Sales & Invoices | All Purchase Records |
| Inventory & Stock History | Customer & Supplier Ledgers |
| AI Assistant Conversations | Prescription History |
| Order Management Data | Financial Reports |

### What Is NOT Deleted
Your **login credentials** and **store settings** are not affected, only transactional data is deleted.

![Danger Zone](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/117826cd-1755-46db-9287-d46a51d80f35-data-management-1.png)
*Caption: Overview of what will be deleted and what remains untouched.*
---
![What Will Be Deleted](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/d16ae230-77cb-46b8-8368-3b69a7f897a9-data-management-2.png)
*Caption: Complete list of transactional data types that will be permanently removed.*

---

## Deleting All Data
Click **Delete All Data** to begin. A confirmation dialog asks you to type the phrase **delete my data** exactly to proceed.

> To confirm you want to delete all data, including all inventory, sales, purchases, customers, suppliers, and ledgers, type the following phrase:
> **delete my data**

Once typed correctly, click **Delete Data** to confirm.

![Delete All Data Confirmation](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/89e47349-f568-4c69-a525-41055537f814-data-management-3.png)
*Caption: Type 'delete my data' to confirm permanent deletion of all transactional records.*

> **[Note]** This action is irreversible and cannot be undone. Once confirmed, all your transactional records are permanently deleted, there is no way to recover them afterward.

---

## FAQs

  ### Will deleting all data affect my login or store settings?

No, only transactional data is deleted. Your login credentials, store profile, and settings configured elsewhere remain untouched.
  ### Can I undo Delete All Data after confirming it?

No, this action is permanent and cannot be reversed once confirmed.
  ### Why would I use this feature?

It's designed for stores that have been using MediFlux for testing and want to clear out test data before going live, or for stores that want to start completely fresh.


---

## Start Fresh
Your data is cleared. Rebuild your pharmacy records from the ground up.


  * [Add Purchase](/docs/purchases/add-purchase) - Restock your inventory first, you'll need drugs before you can sell.
  * [Add a Supplier](/docs/supplier/add-supplier) - Add your suppliers back so you can record purchases against them.
  * [Add a Customer](/docs/customers/add-customer) - Rebuild your customer base before creating sales.
  * [Add Sale](/docs/sales/add-sale-retail) - Start billing once your inventory and customers are back in place.

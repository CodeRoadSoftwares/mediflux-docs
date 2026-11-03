---
type: Reference
title: Supplier Trash
description: View and restore deleted supplier profiles, or permanently remove them from your system.
timestamp: "2026-09-10T14:01:19+05:30"
resource: /docs/supplier/supplier-trash
status: current
audience: User (Pharmacist)
owner: ""
icon: Trash2
---

# Supplier Trash

The **Trash** page holds all supplier profiles that have been deleted from your system. Deleted suppliers are not permanently removed immediately. They stay in Trash so you can restore them if needed.

Navigate here from the sidebar: **Suppliers → Trash**.

---

## The Trash Table
The Trash page shows the same table structure as the Supplier List, with the same columns:

| Column | Description |
| --- | --- |
| **Name** | Supplier store name |
| **Phone** | Primary contact number |
| **License Number** | Drug license number if added. Shows `—` if not provided |
| **Margin %** | Gross margin percentage from all purchases. Shows `—` if no purchases were recorded |
| **Outstanding** | Amount still owed to this supplier at the time of deletion |
| **Actions** | Options to manage the deleted supplier |

The page also shows a **Found X** count at the top indicating how many deleted suppliers are currently in Trash.

![Supplier Trash page](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783585149648-5985651-trash.png)
*Caption: Trash table showing a deleted supplier with all details and actions.*

---

## Searching In Trash
The search bar at the top works the same as the Supplier List. Search across **names, phone numbers, emails, and addresses** to find a specific deleted supplier quickly.

---

## Restoring Or Viewing A Deleted Supplier
Click the **three-dot menu (⋮)** on any row to see two options:

| Option | What it does |
| --- | --- |
| **View Purchases** | View all purchase history linked to this supplier even after deletion |
| **Restore** | Restores the supplier profile back to your active Supplier List |

![Row actions](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783585156758-593191751-actions.png)
*Caption: Three-dot menu showing View Purchases and Restore options.*

> **[Note]** Restoring a supplier brings back their full profile and all linked purchase history. Their outstanding balance is also restored as it was at the time of deletion.

---

## FAQs

  ### Can I permanently delete a supplier from Trash?

Currently deleted suppliers remain in Trash and can be restored at any time. Contact MediFlux support if you need a supplier permanently removed.
  ### Will deleting a supplier affect my purchase history?

No. All purchase records and ledger entries linked to a deleted supplier are preserved. You can still view them via <strong>View Purchases</strong> from the Trash page.
  ### Can I still see a deleted supplier's outstanding balance?

Yes. The outstanding balance at the time of deletion is still visible in the Trash table.
  ### What happens to my outstanding balance if I restore a supplier?

The supplier is restored with their full profile and outstanding balance exactly as it was when they were deleted.


## Common Follow-Ups

  * [Supplier List](/docs/supplier/supplier-list) - Find restored suppliers back in your active directory.
  * [Supplier Profile](/docs/supplier/supplier-profile) - View full details of a supplier after restoring them.
  * [Purchase List](/docs/purchases/purchase-list) - See all preserved purchases from restored suppliers.
  * [Add Purchase](/docs/purchases/add-purchase) - Record new stock from a restored supplier.

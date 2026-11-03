---
type: Guide
title: Drafts
description: Track the status of scanned purchase bills and clean up drafts you no longer need.
timestamp: "2026-08-27T10:54:01+05:30"
resource: /docs/purchases/drafts
status: current
audience: User (Pharmacist)
owner: ""
icon: FileText
---

# Drafts

The **Drafts** page lists every purchase bill that has been scanned via the **Add Purchase** page, along with its processing status. Use this page to check whether a scanned bill has finished processing, and to delete drafts you no longer need.

---

## Filtering By Status
Five tabs at the top let you filter drafts by their processing status:

| Tab | Shows |
| --- | --- |
| **All** | Every draft, regardless of status |
| **Awaiting** | Drafts waiting to be processed |
| **Scanning** | Drafts currently being scanned |
| **Completed** | Drafts that have finished scanning successfully |
| **Failed** | Drafts that failed to process |

A **Found X Drafts** count above the tabs shows how many drafts match the currently selected filter.

![Draft Status Tabs](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/c1100309-7afa-4412-b4ae-f39c93ac7ead-purchase-drafts.png)
*Caption: Filter drafts by All, Awaiting, Scanning, Completed, or Failed status.*

---

## The Drafts Table
Each row in the table represents one scanned purchase bill:

| Column | Description |
| --- | --- |
| **Draft ID** | Unique identifier for the draft |
| **Status** | Current processing status (e.g. **Completed**) |
| **Type** | The module the draft belongs to (**Purchase**) |
| **Source** | How the draft was created (e.g. **Scan**) |
| **Files** | Number of files attached to the draft |
| **Date** | Date the draft was created |
| **Actions** | Quick action menu for that draft row |

![Drafts Table](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/6ddcfbf6-e7d3-4af8-8798-d71bde73ce06-drafts-columns.png)
*Caption: List of scanned purchase drafts with ID, status, source, files, and date.*

---

## Row Actions
Clicking the **three-dot menu (⋮)** on any draft row opens a single option:

| Option | What it does |
| --- | --- |
| **Delete Draft** | Permanently removes the draft from the list |

![Draft Actions](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/3a7aa729-b206-4653-94e5-8fd735b569e4-row-actions.png)
*Caption: Delete a draft permanently from the actions menu.*

---

## Where Drafts Come From
Drafts are created automatically when you use **Scan** on the **Add Purchase** page. To act on a draft, inserting or appending it into a purchase bill,  go to **Add Purchase** and open the **Drafts** panel from there. See [Add Purchase](/docs/purchases/add-purchase) for details.

---

## Clear The Queue
Checked your scanned bills? Here's where to go from here.


  * [Add Purchase](/docs/purchases/add-purchase) - Insert or append completed drafts into a full purchase bill.
  * [Purchase List](/docs/purchases/purchase-list) - Review all finalised purchases once drafts are converted.
  * [Drug List](/docs/inventory/drug-list) - Verify inventory updated correctly after converting drafts.
  * [Trash](/docs/purchases/trash) - Recover deleted purchases if you removed the wrong draft.

---
type: Guide
title: Billing Notes
description: Track the debit notes you've raised to suppliers and the credit notes issued back to you.
timestamp: "2026-08-27T10:54:01+05:30"
resource: /docs/inventory/billing-notes
status: current
audience: User (Pharmacist)
owner: ""
icon: FileText
---

# Billing Notes

The **Billing Notes** page is where you track every debit note you've raised to a supplier and every credit note issued back to you once a debit note is accepted. It's split into two tabs: **Debit Notes** and **Credit Notes**, giving you a complete record of your return requests and their outcomes.

---

## Debit Notes
Every debit note you raise, whether from the Drug List's Separated View or from **Create Debit Note**, appears here.

### Searching
The search bar lets you search by **supplier** or **DRN number**. Use the **All** dropdown to the left to narrow the search to a specific field:

| Option | Searches by |
| --- | --- |
| **All** | Both fields combined |
| **Supplier** | Supplier name |
| **DRN** | Debit Reference Number |

![Search Bar](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783589077974-968209360-billing-searchbar.png)
*Caption: Search by supplir, DRN numbers.*
---

### The Debit Notes Table
| Column | Description |
| --- | --- |
| **Debit Note Details** | DRN number and status (e.g. Pending) |
| **Supplier** | Supplier the debit note was raised to, with the date and time it was raised |
| **Amount** | Debit amount |
| **Actions** | Opens a menu with View Details, Credit, and Cancel |

![Debit Notes tab](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783588917776-122328328-billingnotes-sidebar.png)
*Caption: List of pending and processed debit notes with supplier, amount, and actions.*

### Row Actions
| Action | What it does |
| --- | --- |
| **View Details** | Opens the full breakdown of the debit note |
| **Credit** | Marks the debit note as accepted, converting it into a credit note. It then moves to the Credit Notes tab |
| **Cancel** | Discards a pending debit note that hasn't been credited yet |

> **[Note]** A debit note stays in **Pending** status until it's either credited or cancelled. Once credited, it can no longer be edited or cancelled from here. It becomes a credit note instead.

---

## Credit Notes
Once a debit note is credited, it shows up here as a **Credit Note (CRN)**. This tab uses the same search and filtering as Debit Notes, but only offers **View Details** from the row's Actions menu, since a credit note reflects a completed transaction.

| Column | Description |
| --- | --- |
| **CRN** | Credit note number and status |
| **Supplier** | Supplier associated with the credit note, with the date and time it was created |
| **Amount** | Credit amount |
| **Actions** | View Details |

![Credit Notes tab](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783588917772-246911346-creditnote.png)
*Caption: List of completed credit notes with supplier, amount, and view action.*

---

## Viewing A Note'S Details
Clicking **View Details** on either a debit or credit note opens its full breakdown:

| Section | What it shows |
| --- | --- |
| **Header** | Who created the note, the supplier, and the note's reference number |
| **Dates & Amount** | Draft note date, credit note date (if credited), and total amount |
| **Summary** | Subtotal, Discount, Tax, and Grand Total, along with a line-item breakdown |
| **Drugs** | Every drug included in the note, with Qty, Free, Cost, Discount, Sub Total, Tax, and Total for each, plus a Grand Total row |
| **Remarks** | Any notes added when the debit note was created. Shows **No remarks provided** if none |

![Note detail view](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783588917771-265983922-noteview.png)
*Caption: Full breakdown of a debit or credit note with header, dates, summary, drugs, and remarks.*

---

## Track And Adjust

  * [Supplier Ledger](/docs/supplier/supplier-ledger) - Check how debit and credit notes affected supplier balances.
  * [Drug List](/docs/inventory/drug-list) - Verify stock levels after processing debit notes.
  * [Supplier List](/docs/supplier/supplier-list) - See which suppliers have pending or resolved billing notes.
  * [Create Debit Note](/docs/inventory/create-debit-note) - Raise another debit note if more stock needs returning.

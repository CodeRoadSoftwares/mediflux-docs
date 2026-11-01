---
type: FAQ
title: Why is the total wrong when I sell tablets instead of a full strip?
description: Wrong bill totals when selling loose tablets usually mean Units were not set correctly at the time of purchase.
tags:
  - sales
  - retail
  - calculation
  - units
  - tablets
timestamp: "2026-09-16T10:37:42+05:30"
resource: /help/sales/wrong-calculations
status: current
audience: User (Pharmacist/Cashier)
owner: ""
---

# Why is the total wrong when I sell tablets instead of a full strip?

When you sell loose tablets (for example 10 tablets from a strip of 20), the total is calculated from the unit price. If **Units** were not entered correctly when the stock was purchased, the calculation will be wrong.

---

## Why this happens

At the time of purchase, each item needs the correct **Units** value (tablets per strip / pack).

Example:
- Strip contains 20 tablets
- Purchase Qty = 1
- Units must be set to `20`

If Units is left as `1` or `0`, the system treats the whole strip price as the price of one tablet and the bill total becomes incorrect.

---

## How to fix it

### Option 1: Update the purchase (recommended if recent)

1. Go to the original purchase bill.
2. Edit the line for that drug.
3. Set the correct **Units** value (e.g. `20`).
4. Save the purchase.

### Option 2: Update from Drug List

1. Go to **Drugs → Drug List**.
2. Switch to **Separated View**.
3. Find the drug and batch.
4. Click **Edit** and enter the correct **Units**.
5. Save.

![Drug List – Separated View](/images/faqs/drug-list-separated-view.png)
*Caption: Separated View showing individual batches where you can edit Units.*

![Edit Units](/images/faqs/edit-units-on-drug.png)
*Caption: Edit the drug or batch and set the correct Units (tablets per strip).*

After Units are corrected, new sales of loose tablets will calculate the unit price correctly.

---

## Quick check while billing

In the **Add Sale** drug table:

- **QTY** = number of strips / packs
- **TABS** = number of loose tablets

If you are selling only tablets, keep QTY at `0` (or blank) and enter the tablet count in **TABS**.

> **[IMAGE PENDING]** Example calculation demonstrating an incorrect bill total when TABS is entered without Units set at purchase. Source this image or expand this section with the specific data.

---

> **[Note]** Always set **Units** correctly when recording a purchase. This prevents wrong calculations later when selling loose tablets.

## Related

* [Add Purchase](/docs/purchases/add-purchase)
* [Drug List](/docs/inventory/drug-list)

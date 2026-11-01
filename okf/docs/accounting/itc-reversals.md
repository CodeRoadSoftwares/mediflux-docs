---
type: Reference
title: ITC Reversals
description: Manage pharmacy ITC reversals in MediFlux. Track and reverse input tax credit for expired stock, charity, and personal use to ensure GST compliance.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/accounting/itc-reversals
status: current
audience: User (Accountant/Owner)
owner: ""
icon: Receipt
---

# ITC Reversals

The **ITC Reversals** page lists every pending **Input Tax Credit (ITC) reversal** that MediFlux has detected for your **pharmacy**. You can mark items as not applicable or reverse the credit so your GST liability stays accurate and compliant.

Navigate here from the sidebar: **Accounting → ITC Reversals**.

![MediFlux Pharmacy ITC Reversals Overview](/images/accounting/itc-reversals-overview.png)
*Caption: Pending ITC reversal lines with type, value, CGST, SGST, IGST, and actions for pharmacy GST compliance in MediFlux.*

---

## What Is ITC Reversal?

When you buy medicines or goods, you pay GST to the supplier. That GST is your **Input Tax Credit (ITC)**. You can normally use it to reduce the GST you collect from customers.

Sometimes you are **not allowed** to keep that credit. In those cases, the law requires you to **reverse** the ITC. This means you add the credit back to your GST liability (you effectively pay it back to the government).

Common situations in a pharmacy where ITC must be reversed:

| Situation | Why reversal is required |
|-----------|--------------------------|
| **Expired Stock** | Medicines that expired and cannot be sold. ITC claimed on their purchase must be reversed. |
| **Charity / Free Samples** | Goods given free or donated. No taxable supply is made, so ITC is not allowed. |
| **Personal Use** | Stock used for personal or non-business purposes. |
| **Other Non-Business Use** | Any case where the goods are not used for making taxable supplies. |

MediFlux automatically detects these cases (especially from stock adjustments, expired stock write-offs, and certain debit notes) and adds them to this page as **Pending** lines so you can review and act on them.

---

## Summary Cards

Three cards at the top show the current state of the list.

| Card | What it shows |
|------|---------------|
| **Pending Lines** | Number of ITC reversal lines still waiting for action |
| **Total GST Value** | Combined CGST + SGST + IGST of all pending lines |
| **Selected GST Value** | GST value of the rows you have currently checked |

![MediFlux ITC Reversals Summary Cards](/images/accounting/itc-reversals-summary-cards.png)
*Caption: Summary cards showing Pending Lines, Total GST Value, and Selected GST Value for pharmacy ITC reversals in MediFlux.*

---

## Understanding the Table

| Column | Description |
|--------|-------------|
| **Checkbox** | Select one or more rows for bulk actions |
| **Date** | Date the event that triggered the potential reversal occurred |
| **Type** | Reason for the reversal: Expired, Charity, Personal Use, etc. |
| **Value** | Taxable value of the goods involved |
| **CGST** | Central GST portion of the credit to be reversed |
| **SGST** | State GST portion of the credit to be reversed |
| **IGST** | Integrated GST portion (usually ₹0.00 for intra-state) |
| **Status** | Current state of the line (Pending) |
| **Actions** | **Mark N/A** or **Reverse** for that single line |

![MediFlux Pharmacy ITC Reversals Table](/images/accounting/itc-reversals-table.png)
*Caption: ITC Reversals table showing Date, Type, Value, CGST, SGST, IGST, Status, and row actions in MediFlux.*

---

## What You Can Do

### Reverse a Single Line

Click **Reverse** on any row. MediFlux creates the necessary journal entry that reverses the ITC (debiting the appropriate GST expense/reversal account and crediting the Input GST accounts). The line is then removed from the pending list.

### Mark a Line as N/A

Click **Mark N/A** if the line should not be reversed (for example, the stock was later sold, or the detection was incorrect). The line is cleared from the pending list without creating a reversal entry.

### Bulk Actions

| Button | What it does |
|--------|--------------|
| **Mark all N/A** | Marks every pending line as not applicable |
| **Reverse all** | Reverses ITC for every pending line in one go |

You can also check individual boxes and then use the bulk buttons if they support selected rows.

![MediFlux ITC Reversals Row and Bulk Actions](/images/accounting/itc-reversals-actions.png)
*Caption: Mark N/A and Reverse actions on each row, plus Mark all N/A and Reverse all bulk actions for pharmacy ITC in MediFlux.*

---

## Example Pending Lines

| Date | Type | Value | CGST | SGST | IGST | Status |
|------|------|-------|------|------|------|--------|
| 19 Aug 2026 | Expired | ₹5,576.58 | ₹538.02 | ₹538.02 | ₹0.00 | Pending |
| 19 Aug 2026 | Charity | ₹200.00 | ₹14.13 | ₹14.13 | ₹0.00 | Pending |
| 20 Aug 2026 | Personal Use | ₹773.80 | ₹53.57 | ₹53.57 | ₹0.00 | Pending |

In this example, the **Total GST Value** is ₹1,211.44 (sum of all CGST + SGST).

---

## How the Reversal Works in the Books

When you click **Reverse**:

1. MediFlux calculates the GST amounts (CGST, SGST, or IGST) that were originally claimed as ITC.
2. It posts a journal entry that:
   - Debits an ITC reversal / GST expense account
   - Credits the Input GST accounts (GST Input CGST, GST Input SGST, or GST Input IGST)
3. Your net ITC balance decreases and your GST liability increases by the same amount.
4. The line disappears from the ITC Reversals pending list.

This keeps your GSTR-3B and other GST returns accurate.

---

## Common Mistakes

> **[Warning: Leaving expired stock reversals pending]** Expired medicines are one of the most common reasons for ITC reversal in pharmacies. Leaving them in Pending status for a long time can cause your GST returns to understate liability.

> **[Warning: Reversing lines that should be Mark N/A]** Only reverse lines that genuinely require ITC reversal. If stock was later sold or the detection is wrong, use **Mark N/A** instead of **Reverse**.

---

## Frequently Asked Questions


  ### Does reversing ITC create a journal entry?

Yes. Every time you click **Reverse**, MediFlux posts a proper journal entry so the change is fully reflected in your ledgers, Trial Balance, and GST reports.
  ### What happens if I click Mark all N/A by mistake?

The pending lines are cleared without reversing credit. If you still need to reverse some of them, you will have to handle the reversal manually through a journal entry or wait for the system to re-detect the case.
  ### Why is IGST usually zero?

Most pharmacy purchases are intra-state, so only CGST and SGST apply. IGST appears when the original purchase was inter-state.
  ### Is this the same as a credit note from a supplier?

No. A supplier credit note reduces your purchase and the related ITC automatically. The ITC Reversals page handles cases where **you** must reverse ITC because of how the goods were later used or written off (expiry, charity, personal use, etc.).


---

## Next Steps


  * Journal Entries - View the reversal journals created when you reverse ITC.
  * [Daybook](/docs/accounting/daybook) - See the daily impact of ITC reversals on your accounts.
  * [Profit & Loss](/docs/accounting/profitandloss-statements.md) - ITC reversal expenses appear in your expense section.
  * [Chart of Accounts](/docs/accounting/ledger.md) - Locate the Input GST and ITC reversal accounts.

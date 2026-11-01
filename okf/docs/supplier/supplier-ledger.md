---
type: Reference
title: Supplier Ledger
description: Track pharmacy supplier ledgers in MediFlux. Monitor outstanding balances, record payments, credit notes, and purchase adjustments easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/supplier/supplier-ledger
status: current
audience: User (Pharmacist)
owner: ""
icon: BookOpen
---

# Supplier Ledger

The **Supplier Ledger** page gives you a complete financial record of all your **pharmacy supplier transactions** in **MediFlux**. You can view a consolidated ledger across all suppliers at once, or click into any individual supplier to see their dedicated ledger with a running outstanding balance.

Navigate here from the sidebar: **Suppliers → Ledger**. You can also jump directly using the keyboard shortcut `F6` from anywhere in the app.

---

## Page Layout
The Ledger page is split into two panels:

**Left panel: Supplier list**
Shows all your suppliers with their name, address, and individual outstanding balance in red. The total outstanding across all suppliers is shown at the bottom. Use the search bar to find a specific supplier instantly. Click **View All Suppliers** to go back to the full Supplier List page.

**Right panel: Ledger entries**
Shows the transactions for the selected supplier, or all entries across every supplier if no supplier is selected.

![MediFlux Pharmacy Supplier Ledger Page Layout](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783578949917-346657989-ledger-sidebar.png)
*Caption: The MediFlux supplier ledger showing the left panel with the supplier list and the right panel with outstanding ledger entries.*

---

## Consolidated View vs. Individual Supplier View
The two views share the same entry type tabs and almost the same columns. What changes is the **action buttons available** and whether a **Supplier** or **Balance** column is shown.

|  | Consolidated (no supplier selected) | Individual supplier |
| --- | --- | --- |
| **Buttons** | Export, Filter | Export, Add Payment, Adjust, Import, Filter |
| **Extra column** | Supplier (name and contact number) | Balance (running outstanding total) |

![MediFlux Consolidated Supplier Ledger View](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783580548214-520368422-consolidated-view.png)
*Caption: Export and Filter buttons available in the consolidated pharmacy supplier ledger view in MediFlux.*

![MediFlux Individual Supplier Ledger View](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783580620097-18271720-individual-view.png)
*Caption: Export, Add Payment, Adjust, Import, and Filter buttons available for individual pharmacy supplier ledgers in MediFlux.*

> **[Note]** **Add Payment** and **Adjust** only appear once you've selected an individual supplier, since payments and adjustments are always tied to a specific supplier. **Import** is currently unavailable (greyed out).

---

### Entry Type Tabs
Both views use the same tabs to filter what you see:

| Tab | What it shows |
| --- | --- |
| **All** | Every transaction |
| **Payment** | Payments you made to suppliers |
| **Purchase** | Purchase bills recorded against suppliers |
| **Credit Note** | Credit notes confirmed after a medicine return |
| **Adjustment** | Manual balance corrections |

![MediFlux Supplier Ledger Entry Type Tabs](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783580720293-720495856-filter-buttons.png)
*Caption: Filter pharmacy supplier ledger transactions by All, Payment, Purchase, Credit Note, or Adjustment in MediFlux.*

---

### Ledger Table Columns
| Column | Description |
| --- | --- |
| **Supplier** *(consolidated view only)* | Name and contact number of the supplier |
| **Date** | Date and time of the transaction, with the entry type shown as a label |
| **Debit** | Amount reducing what you owe: payments and credit notes |
| **Credit** | Amount increasing what you owe: purchases and opening balance |
| **Balance** *(individual view only)* | Running outstanding balance after every entry: updates automatically with each transaction |
| **Receipt** | Receipt or reference number if recorded |
| **Notes** | Any notes added at the time of entry |
| **Actions** | Delete the entry |

![MediFlux Consolidated Supplier Ledger Table](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783580928418-894092389-all-columns.png)
*Caption: Combined view showing all transactions, debits, and credits across all pharmacy suppliers in MediFlux.*

---

### Individual Supplier Ledger Table With Balance Column
![MediFlux Individual Supplier Ledger with Running Balance](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783580817831-15005426-balance-column.png)
*Caption: Dedicated pharmacy supplier ledger showing the running outstanding balance for a single distributor in MediFlux.*

> **[Note]** The **Balance** column updates after every single entry, so you can trace exactly how the outstanding amount changed step by step from day one. The consolidated view doesn't show this since it mixes entries across multiple suppliers.

---

## How The Outstanding Balance Works
MediFlux calculates your supplier outstanding automatically, you never need to update it manually:

- When you record a **Purchase** → the amount is added to Credit, increasing what you owe
- When you make a **Payment** → the amount is added to Debit, reducing what you owe
- When a **Credit Note** is confirmed → the return amount reduces your outstanding
- **Opening Balance** → any amount you owed before starting MediFlux is the starting point

---

## Adding An Adjustment Entry
If you need to manually correct a supplier's ledger balance, for example a price correction, rounding adjustment, or write-off, click **Adjust** on the individual supplier ledger.

![MediFlux Add Supplier Ledger Adjustment](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581158367-820452459-adjust-button.png)
*Caption: Button to open the dialog for manually correcting a pharmacy supplier's ledger balance in MediFlux.*

---

### Adjustment Fields
| Field | Description |
| --- | --- |
| **Adjustment Amount** | Enter a positive number (e.g. `500`) to increase what you owe, or a negative number (e.g. `-500`) to reduce what you owe |
| **Entry Date** | Defaults to today's date. Can be changed |
| **Receipt / Reference Number** | Optional reference number for this adjustment |
| **Notes** | Reason for the adjustment: e.g. price correction, rounding adjustment, write-off |

Click **Add** to save. Click **Reset** to clear all fields.

![MediFlux Supplier Ledger Adjustment Entry Dialog](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581008356-451368148-adjustment-entry.png)
*Caption: Dialog for manually correcting a pharmacy supplier's outstanding ledger balance with notes and reference numbers in MediFlux.*

---

## Filtering The Ledger
Click **Filter** on the individual supplier ledger to open the Ledger Filters panel.

![MediFlux Supplier Ledger Filter Icon](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581518414-293402188-click-filter.png)
*Caption: Click the filter icon to open the pharmacy supplier ledger filtering options in MediFlux.*

---

### You can filter by:
| Filter | Options |
| --- | --- |
| **Date Range** | Today, This Month, Last Month, This Quarter, Last Quarter, This Year, Last Year: or set a custom Start and End date |
| **Entry Type** | All Types, Payment, Purchase, Credit Note, Adjustment |
| **Payment Method** | All Methods, Cash, Card, UPI, Net Banking |
| **Sort By** | Sort field and order: ascending or descending |

Click **Apply** to apply the filters. Click **Clear** to reset them all.

![MediFlux Supplier Ledger Filters Panel](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581578241-728856781-filter-panel.png)
*Caption: Filter pharmacy supplier ledger entries by date range, entry type, payment method, and sort order in MediFlux.*

---

## Exporting Ledger Entries
Click **Export** on the individual supplier ledger to open the Export Options dialog.

![MediFlux Export Supplier Ledger Button](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581970226-813998766-export-button.png)
*Caption: Click Export to download pharmacy supplier ledger entries in MediFlux.*

---

### Choose A **Date Range** And An **Export Format**:
- **PDF Document**
- **Excel Spreadsheet**

Click **Export** to download.

![MediFlux Export Pharmacy Supplier Ledger Options](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581764686-363945475-export.png)
*Caption: Choose a date range and export format (PDF or Excel) for pharmacy supplier ledgers in MediFlux.*

---

## Keyboard Shortcuts
| Shortcut | Action |
| --- | --- |
| `F6` | Jump to Supplier Ledger from anywhere in the app |
| `F2` | Jump to Supplier List |
| `Esc` | Close the current panel or dialog |

---

## FAQs

  ### Can I delete a ledger entry?

Yes, click the three-dot menu on any entry row and select <strong>Delete Entry</strong>. Note that deleting a purchase or payment entry will affect your outstanding balance immediately.
  ### What is the difference between Debit and Credit in the ledger?

Debit entries reduce what you owe a supplier (these are payments and credit notes). Credit entries increase what you owe (these are purchase bills and opening balance). Your outstanding balance is always Credit minus Debit.
  ### Can I edit a payment or purchase entry after saving?

Purchase entries can be edited from the Purchases section. Payment and credit note entries cannot be edited; if you made an error, delete the entry and record it again with the correct details.
  ### Why does my Balance column not start from zero?

If you set an Opening Balance when adding the supplier, the Balance column starts from that amount. This represents the amount you already owed that supplier before starting MediFlux.
 

---

## Just Finished Reviewing The Ledger? Here's What Most Users Do:


  * [Supplier List](/docs/supplier/supplier-list) - Select another supplier to review their ledger.
  * [Add Purchase](/docs/purchases/add-purchase) - Record new stock that will appear in this supplier's ledger.
  * [Supplier Profile](/docs/supplier/supplier-profile) - View full supplier details, performance stats, and recent purchases.
  * [Purchase List](/docs/purchases/purchase-list) - See all purchases that feed into supplier ledgers.


> **[Note]** Press `F6` anytime to return to the Ledger from anywhere in the app.

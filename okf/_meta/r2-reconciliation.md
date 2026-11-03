# R2 Image Asset Reconciliation Manifest

This document audits the **14 unresolved dead image references** remaining in the MediFlux OKF documentation bundle (4 **CRITICAL**, 7 **SUPPORTING** from Batch 3, and 3 **SUPPORTING** promoted from Batch 2). Each dead reference has been matched against the 454 live external images (hosted on MediFlux Cloudflare R2 and AWS S3) across the repository to determine whether an existing live screenshot already covers the same UI screen.

---

## 1. Summary

- **Confidence Breakdown**:
  - **HIGH**: 2
  - **MEDIUM**: 7
  - **LOW**: 3
  - **NONE**: 2
  - **Total**: 14

These 2 HIGH matches, once verified visually, would rewire without sourcing new assets. Batch 3 would then require sourcing only the LOW+NONE count (5 images). If human visual review confirms any of the 7 MEDIUM candidates, the total asset sourcing burden could be reduced from 12 down to as few as 5 images.

---

## 2. Master Table

| # | Dead Ref File | Dead Image Filename | Criticality | Confidence | Top Candidate (URL or "—") | Notes |
| :-: | :--- | :--- | :---: | :---: | :--- | :--- |
| 1 | `okf/help/sales/create-debit-note.md` | `generate-debit-note-drug-list.png` | **CRITICAL** | **HIGH** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/3bd1c372-b6e5-428c-bad0-4cb263e0b93a-generate-debit-note.png` | Exact alt text & caption match in `docs/inventory/create-debit-note.md:55`. |
| 2 | `okf/help/sales/create-debit-note.md` | `create-debit-note-page.png` | **SUPPORTING** | **HIGH** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/15f39cdf-e230-4f2e-af8e-1eda1ea75627-create-debit-note.png` | Exact alt text & context match in `docs/inventory/create-debit-note.md:164`. |
| 3 | `okf/help/sales/nrx-sale.md` | `nrx-h1-type-column.png` | **CRITICAL** | **MEDIUM** | `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935922683-888144517-medicine-grid.png` | Add Sale retail drug table in `docs/sales/add-sale-retail.md:514` documents Type column. |
| 4 | `okf/help/sales/wrong-calculations.md` | `drug-list-separated-view.png` | **CRITICAL** | **MEDIUM** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/1319f545-c72d-4f7a-b678-caf662de6c34-seperated-view.png` | Separated View interface in `docs/inventory/drug-list.md:171`. |
| 5 | `okf/help/sales/create-credit-note.md` | `add-credit-note.png` | **SUPPORTING** | **MEDIUM** | `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783673814119-396692688-columns.png` | Credit Note drug return table with CN Qty in `docs/sales/add-credit-note.md:53`. |
| 6 | `okf/help/purchases/add-purchase-from-photo.md` | `add-purchase-scan.png` | **SUPPORTING** | **MEDIUM** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/98633891-41a4-4f3b-819c-ac69ee860e92-scan-options.png` | AI Bill Scan options modal in `docs/purchases/ai-bill-scan.md:39`. |
| 7 | `okf/help/ledgers/customer-adjust-entry.md` | `customer-ledger-adjust.png` | **SUPPORTING** | **MEDIUM** | `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663315727-882956436-customer-ledger-actionbuttons.png` | Individual customer ledger action buttons in `docs/customers/customer-ledger.md:80`. |
| 8 | `okf/help/ledgers/supplier-adjust-entry.md` | `supplier-ledger-adjust.png` | **SUPPORTING** | **MEDIUM** | `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581158367-820452459-adjust-button.png` | Supplier ledger manual adjustment button in `docs/supplier/supplier-ledger.md:107`. |
| 9 | `okf/docs/sales/returned-sales.md` | `returned-expanded-row.png` | **SUPPORTING** | **MEDIUM** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/d179244c-50cb-410b-ba5a-4535d5307c20-sale-dropdown.png` | Verbatim matching caption in `docs/sales/sale-list.md:88` showing expanded line items. |
| 10 | `okf/help/sales/wrong-calculations.md` | `edit-units-on-drug.png` | **CRITICAL** | **LOW** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/961a8c84-7200-451d-8b0f-53cdc824eb17-individual-drug-actions.png` | Actions menu in `docs/inventory/drug-list.md:195` mentions Edit; does not show Units field. |
| 11 | `okf/docs/sales/scan-and-ocr.md` | `scan-bar-code` | **SUPPORTING** | **LOW** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/4ae4ab31-84cf-4e67-864e-54bf97b84fc3-scan-option.png` | Sibling section in `docs/sales/scan-and-ocr.md:29` shows scan panel; lacks active viewfinder. |
| 12 | `okf/docs/sales/scan-and-ocr.md` | `scan-ocr-mode.png` | **SUPPORTING** | **LOW** | `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/4ae4ab31-84cf-4e67-864e-54bf97b84fc3-scan-option.png` | Shows scan tabs; does not show OCR viewfinder with camera capture shutter button. |
| 13 | `okf/help/account/reset-password.md` | `edit-profile-password.png` | **SUPPORTING** | **NONE** | — | No live screenshot captures personal profile avatar Edit Profile modal. |
| 14 | `okf/help/sales/wrong-calculations.md` | `wrong-tabs-calculation.png` | **SUPPORTING** | **NONE** | — | No live screenshot depicts billing calculation error states with loose tablets. |

---

## 3. Detail Blocks

### 1. `generate-debit-note-drug-list.png` — HIGH
- **In**: `okf/help/sales/create-debit-note.md`
- **Alt**: `Generate Debit Note from Drug List`
- **Caption**: `*Caption: Select medications in Separated View and click Generate Debit Note from the bulk actions toolbar.*`
- **Semantic intent**: Drug List interface switched to Separated View showing the bulk actions toolbar with the **Generate Debit Note** action button and selected batch checkboxes.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/3bd1c372-b6e5-428c-bad0-4cb263e0b93a-generate-debit-note.png` | alt: `Generate Debit Note from Drug List` | from: `okf/docs/inventory/create-debit-note.md:55` | match reason: 100% verbatim match for both alt text and caption line, illustrating the exact bulk actions toolbar in Separated View.
- **Recommendation**: REWIRE to candidate 1

### 2. `create-debit-note-page.png` — HIGH
- **In**: `okf/help/sales/create-debit-note.md`
- **Alt**: `Create Debit Note page`
- **Caption**: `*Caption: Create Debit Note page with supplier details and medication entry table.*`
- **Semantic intent**: Manual Create Debit Note form showing supplier selector, date field, drug line table (Drug, Qty, Batch, Expiry, Cost, Tax), and confirmation buttons.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/15f39cdf-e230-4f2e-af8e-1eda1ea75627-create-debit-note.png` | alt: `Create Debit Note page` | from: `okf/docs/inventory/create-debit-note.md:164` | match reason: Verbatim alt text match and identical form context for creating a debit note manually with supplier selection and medication entry table.
- **Recommendation**: REWIRE to candidate 1

### 3. `nrx-h1-type-column.png` — MEDIUM
- **In**: `okf/help/sales/nrx-sale.md`
- **Alt**: `Drug Type column`
- **Caption**: `*Caption: Type column in the Add Sale drug table showing Rx, NRx, or H1.*`
- **Semantic intent**: Add Sale billing table showing the **Type** column with scheduled drug compliance badges (`NRx` or `H1`) prompting for prescription details.
- **Candidates**:
  - Candidate 1: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935922683-888144517-medicine-grid.png` | alt: `MediFlux Pharmacy Drug Table in Retail Sale` | from: `okf/docs/sales/add-sale-retail.md:514` | match reason: Illustrates the retail sale drug table where the documented columns explicitly include Type (Rx, NRx, H1).
  - Candidate 2: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/789b8f72-0824-4177-afd3-706372f1bdbe-sales-filterchips.png` | alt: `Filter chips` | from: `okf/docs/sales/sale-list.md:47` | match reason: Illustrates sales filter chips showing NRx and H1 tags.
  - Candidate 3: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/f06f1f0d-0417-4ab4-95c1-747141f70247-dispense-prescription.png` | alt: `Add Sale opened from Dispense` | from: `okf/docs/clinics/prescriptions.md:193` | match reason: Shows retail billing drug table with Rx items pre-filled from clinic prescription.
- **Recommendation**: HUMAN REVIEW

### 4. `drug-list-separated-view.png` — MEDIUM
- **In**: `okf/help/sales/wrong-calculations.md`
- **Alt**: `Drug List – Separated View`
- **Caption**: `*Caption: Separated View showing individual batches where you can edit Units.*`
- **Semantic intent**: Drug List page showing the **Separated View** toggle switch active, listing individual batches per drug row with batch numbers.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/1319f545-c72d-4f7a-b678-caf662de6c34-seperated-view.png` | alt: `MediFlux Separated View Bulk Actions` | from: `okf/docs/inventory/drug-list.md:171` | match reason: Captures the MediFlux Drug List switched to Separated View showing individual stock entries.
  - Candidate 2: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/1a93aac2-620a-48e5-a98e-99071b908f6d-seperated-drug-info.png` | alt: `MediFlux Separated Drug Information Details` | from: `okf/docs/inventory/drug-list.md:422` | match reason: Shows inventory details specifically for a separated batch entry.
  - Candidate 3: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/9a9ddc91-38c6-41a2-b738-e1d84ddbe172-seperated-drug-activity.png` | alt: `MediFlux Separated Drug Activity History` | from: `okf/docs/inventory/drug-list.md:433` | match reason: Shows batch activity log in Separated View.
- **Recommendation**: HUMAN REVIEW

### 5. `add-credit-note.png` — MEDIUM
- **In**: `okf/help/sales/create-credit-note.md`
- **Alt**: `Add Credit Note`
- **Caption**: `*Caption: Credit Note page with customer selection, drug table, and CN Qty fields.*`
- **Semantic intent**: Create Credit Note interface displaying customer selection, return drug lines with **CN Qty** inputs, and credit summary calculation.
- **Candidates**:
  - Candidate 1: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783673814119-396692688-columns.png` | alt: `Drug selected for return` | from: `okf/docs/sales/add-credit-note.md:53` | match reason: Captures the credit note drug return table with CN Qty inputs and the live summary bar at the bottom.
  - Candidate 2: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783673562434-486678178-drug-selected.png` | alt: `Customer selected` | from: `okf/docs/sales/add-credit-note.md:29` | match reason: Illustrates loaded customer profile with sales history ready for credit note return.
  - Candidate 3: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783594672384-754899979-AddCreditNote-overview.png` | alt: `Add Credit Note` | from: `okf/docs/sales/overview.md:110` | match reason: General overview screenshot of the Add Credit Note feature.
- **Recommendation**: HUMAN REVIEW

### 6. `add-purchase-scan.png` — MEDIUM
- **In**: `okf/help/purchases/add-purchase-from-photo.md`
- **Alt**: `Scan supplier invoice`
- **Caption**: `*Caption: Use the Scan option on Add Purchase to upload a photo of the supplier bill.*`
- **Semantic intent**: Add Purchase page showing the supplier invoice bill scan/photo upload button and resulting draft line item generator.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/98633891-41a4-4f3b-819c-ac69ee860e92-scan-options.png` | alt: `MediFlux AI Bill Scan Options (Camera or Upload)` | from: `okf/docs/purchases/ai-bill-scan.md:39` | match reason: Depicts modal to choose Camera for live scan or Upload Files for supplier bill photo.
  - Candidate 2: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/2ac6035f-c22c-4fcf-a093-83f3a15ba24b-purchase-scan.png` | alt: `MediFlux AI Bill Scan Option on Add Purchase` | from: `okf/docs/purchases/ai-bill-scan.md:23` | match reason: Shows Add Purchase page layout highlighting the Scan option.
  - Candidate 3: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/5b60ce06-2b1d-4120-867f-829858435a98-scan.png` | alt: `MediFlux Scan Pharmacy Supplier Invoice with OCR` | from: `okf/docs/purchases/add-purchase.md:122` | match reason: Shows OCR supplier invoice scanning walkthrough on Add Purchase.
- **Recommendation**: HUMAN REVIEW

### 7. `customer-ledger-adjust.png` — MEDIUM
- **In**: `okf/help/ledgers/customer-adjust-entry.md`
- **Alt**: `Actions → Adjust`
- **Caption**: `*Caption: Actions dropdown on a customer ledger with the Adjust option.*`
- **Semantic intent**: Customer Ledger page showing the top-right **Actions → Adjust** dropdown menu and balance adjustment entry dialog.
- **Candidates**:
  - Candidate 1: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783663315727-882956436-customer-ledger-actionbuttons.png` | alt: `MediFlux Individual Customer Ledger Action Buttons` | from: `okf/docs/customers/customer-ledger.md:80` | match reason: Captures the top action bar of an individual customer ledger with the Adjust button.
  - Candidate 2: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581008356-451368148-adjustment-entry.png` | alt: `MediFlux Supplier Ledger Adjustment Entry Dialog` | from: `okf/docs/supplier/supplier-ledger.md:122` | match reason: Sibling ledger dialog illustrating balance adjustment input fields and notes.
- **Recommendation**: HUMAN REVIEW

### 8. `supplier-ledger-adjust.png` — MEDIUM
- **In**: `okf/help/ledgers/supplier-adjust-entry.md`
- **Alt**: `Actions → Adjust`
- **Caption**: `*Caption: Actions dropdown on a supplier ledger with the Adjust option.*`
- **Semantic intent**: Supplier Ledger page showing the top-right **Actions → Adjust** dropdown menu and balance adjustment entry dialog.
- **Candidates**:
  - Candidate 1: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581158367-820452459-adjust-button.png` | alt: `MediFlux Add Supplier Ledger Adjustment` | from: `okf/docs/supplier/supplier-ledger.md:107` | match reason: Specifically depicts the button and dropdown to open the manual balance adjustment dialog.
  - Candidate 2: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783581008356-451368148-adjustment-entry.png` | alt: `MediFlux Supplier Ledger Adjustment Entry Dialog` | from: `okf/docs/supplier/supplier-ledger.md:122` | match reason: Illustrates the actual modal dialog for entering adjustment amounts and notes on a supplier ledger.
  - Candidate 3: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783580620097-18271720-individual-view.png` | alt: `MediFlux Individual Supplier Ledger View` | from: `okf/docs/supplier/supplier-ledger.md:46` | match reason: Shows the individual supplier ledger header toolbar containing the Adjust button.
- **Recommendation**: HUMAN REVIEW

### 9. `returned-expanded-row.png` — MEDIUM
- **In**: `okf/docs/sales/returned-sales.md`
- **Alt**: `Expanded return row`
- **Caption**: `*Caption: Line item breakdown with HSN, product, batch, expiry, quantity, MRP, discount, and total.*`
- **Semantic intent**: Returned Sales card expanded via chevron showing 9-column line-item table (**SR**, **HSN**, **Product**, **Batch**, **Expiry**, **QTY**, **MRP**, **Discount**, **Total**) and **Grand Total**.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/d179244c-50cb-410b-ba5a-4535d5307c20-sale-dropdown.png` | alt: `Expanded sale row` | from: `okf/docs/sales/sale-list.md:88` | match reason: Verbatim matching caption line and identical 9-column expanded line-item breakdown with Grand Total.
  - Candidate 2: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/b08c5762-55ec-4e79-a256-a2e49478c78c-expanded-purchase-row.png` | alt: `Expanded Purchase Row` | from: `okf/docs/purchases/purchase-list.md:78` | match reason: Sibling expanded row breakdown showing HSN, batch, expiry, rate, and total.
- **Recommendation**: HUMAN REVIEW

### 10. `edit-units-on-drug.png` — LOW
- **In**: `okf/help/sales/wrong-calculations.md`
- **Alt**: `Edit Units`
- **Caption**: `*Caption: Edit the drug or batch and set the correct Units (tablets per strip).*`
- **Semantic intent**: Drug or batch edit dialog on the Drug List highlighting the **Units** (tablets per strip) input field.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/961a8c84-7200-451d-8b0f-53cdc824eb17-individual-drug-actions.png` | alt: `MediFlux Individual Drug Stock Actions` | from: `okf/docs/inventory/drug-list.md:195` | match reason: Displays the Separated View row actions menu containing the Edit option, but does not display the Units modal.
- **Recommendation**: SOURCE NEW ASSET

### 11. `scan-bar-code` — LOW
- **In**: `okf/docs/sales/scan-and-ocr.md`
- **Alt**: `Barcode Scanner`
- **Caption**: `*Caption: Align the barcode within the frame and use the torch icon for low-light scanning.*`
- **Semantic intent**: Barcode Scanner camera viewfinder displaying the alignment frame, torch toggle icon, and **"Align barcode within the frame"** prompt.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/4ae4ab31-84cf-4e67-864e-54bf97b84fc3-scan-option.png` | alt: `Scan & Add Drugs Panel` | from: `okf/docs/sales/scan-and-ocr.md:29` | match reason: Sibling section screenshot in the same guide showing the panel tabs, but not the active camera viewfinder frame.
  - Candidate 2: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/154fd3cb-3d9d-4e55-a0f3-778a8db3aa1f-scan-retail-sale.png` | alt: `MediFlux Barcode Scanner and OCR Prescription Scan` | from: `okf/docs/sales/add-sale-retail.md:46` | match reason: Shows retail billing toolbar with scan options, but not the camera viewfinder.
- **Recommendation**: SOURCE NEW ASSET

### 12. `scan-ocr-mode.png` — LOW
- **In**: `okf/docs/sales/scan-and-ocr.md`
- **Alt**: `Image (OCR)`
- **Caption**: `*Caption: Position the drug name or batch number inside the frame, then tap the capture button.*`
- **Semantic intent**: Packaging OCR text capture viewfinder showing camera shutter button and **"Position drug name / batch number inside frame"** framing guide.
- **Candidates**:
  - Candidate 1: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/4ae4ab31-84cf-4e67-864e-54bf97b84fc3-scan-option.png` | alt: `Scan & Add Drugs Panel` | from: `okf/docs/sales/scan-and-ocr.md:29` | match reason: Sibling section screenshot showing the Image (OCR) tab, but lacks the active mobile camera viewfinder.
  - Candidate 2: `https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783935922677-222683802-upload-prescription.png` | alt: `MediFlux Prescription Upload and OCR Scan` | from: `okf/docs/sales/add-sale-retail.md:591` | match reason: Shows prescription upload modal rather than drug packaging label viewfinder.
- **Recommendation**: SOURCE NEW ASSET

### 13. `edit-profile-password.png` — NONE
- **In**: `okf/help/account/reset-password.md`
- **Alt**: `Edit Profile`
- **Caption**: `*Caption: Password and Confirm Password fields in the Edit Profile form.*`
- **Semantic intent**: User profile settings dialog showing **Password** and **Confirm Password** input fields with the **Update** submission button.
- **Candidates**: none
- **Recommendation**: SOURCE NEW ASSET

### 14. `wrong-tabs-calculation.png` — NONE
- **In**: `okf/help/sales/wrong-calculations.md`
- **Alt**: `Wrong calculation example`
- **Caption**: `*Caption: Example where TABS is entered but Units were missing at purchase, causing an incorrect total.*`
- **Semantic intent**: Add Sale billing table showing an incorrect total calculation example when selling loose tablets under **TABS** without Units recorded at purchase.
- **Candidates**: none
- **Recommendation**: SOURCE NEW ASSET

---

## 4. Actionable Groupings

### Rewire Without Sourcing (HIGH — 2 rows)
These 2 images have verified live screenshots in `okf/docs/inventory/create-debit-note.md` with identical alt text, captions, and UI forms. They can be rewired directly to permanent R2 URLs without producing new screenshot assets:
- **Row 1**: `generate-debit-note-drug-list.png` (`okf/help/sales/create-debit-note.md`)  
  Proposed target: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/3bd1c372-b6e5-428c-bad0-4cb263e0b93a-generate-debit-note.png`
- **Row 2**: `create-debit-note-page.png` (`okf/help/sales/create-debit-note.md`)  
  Proposed target: `https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/15f39cdf-e230-4f2e-af8e-1eda1ea75627-create-debit-note.png`

### Human Review Needed (MEDIUM — 7 rows)
These 7 images have plausible candidate screenshots in the documentation bundle, but require visual pixel inspection before rewiring:
- **Row 3**: `nrx-h1-type-column.png` (`okf/help/sales/nrx-sale.md`) — 3 candidates (`medicine-grid.png`, `sales-filterchips.png`, `dispense-prescription.png`).
- **Row 4**: `drug-list-separated-view.png` (`okf/help/sales/wrong-calculations.md`) — 3 candidates (`seperated-view.png`, `seperated-drug-info.png`, `seperated-drug-activity.png`).
- **Row 5**: `add-credit-note.png` (`okf/help/sales/create-credit-note.md`) — 3 candidates (`columns.png`, `drug-selected.png`, `AddCreditNote-overview.png`).
- **Row 6**: `add-purchase-scan.png` (`okf/help/purchases/add-purchase-from-photo.md`) — 3 candidates (`scan-options.png`, `purchase-scan.png`, `5b60ce06...-scan.png`).
- **Row 7**: `customer-ledger-adjust.png` (`okf/help/ledgers/customer-adjust-entry.md`) — 2 candidates (`customer-ledger-actionbuttons.png`, `adjustment-entry.png`).
- **Row 8**: `supplier-ledger-adjust.png` (`okf/help/ledgers/supplier-adjust-entry.md`) — 3 candidates (`adjust-button.png`, `adjustment-entry.png`, `individual-view.png`).
- **Row 9**: `returned-expanded-row.png` (`okf/docs/sales/returned-sales.md`) — 2 candidates (`sale-dropdown.png`, `expanded-purchase-row.png`).

### Needs Sourcing or Retirement (LOW + NONE — 5 rows)
These 5 images have no suitable live screenshots in the bundle and must be captured from staging/production or retired:
- **Row 10**: `edit-units-on-drug.png` (`okf/help/sales/wrong-calculations.md`) — Context: Edit dialog with Units (tablets per strip) input on Drug List (**CRITICAL**).
- **Row 11**: `scan-bar-code` (`okf/docs/sales/scan-and-ocr.md`) — Context: Camera viewfinder alignment frame with torch icon for barcode scanning (**SUPPORTING**; source MDX missing extension).
- **Row 12**: `scan-ocr-mode.png` (`okf/docs/sales/scan-and-ocr.md`) — Context: Packaging text recognition viewfinder with shutter button (**SUPPORTING**).
- **Row 13**: `edit-profile-password.png` (`okf/help/account/reset-password.md`) — Context: Avatar profile settings modal with Password and Confirm Password inputs (**SUPPORTING**).
- **Row 14**: `wrong-tabs-calculation.png` (`okf/help/sales/wrong-calculations.md`) — Context: Billing line item demonstrating wrong loose tablet total calculation (**SUPPORTING**).

---

## 5. Duplicate-Screenshot Warning

During the live image scan across the bundle, two instances of identical image URLs being reused across different sections or alt texts were identified:

1. **`0bcd1aa5-2f6e-4df6-977f-60adecbe3e25-direct-return-sale-eg.png`** (Reused 3 times in `okf/docs/sales/add-sale-retail.md`):
   - Line 213: `![MediFlux Direct Return Adjustment Example]`
   - Line 266: `![MediFlux Return Amount Less Than Sale Amount]`
   - Line 437: `![MediFlux Adjusted Return Calculation Breakdown]`  
   *Note: All three occurrences point to the same ₹1,500 direct return calculation screenshot.*

2. **`74001ccb-0a2f-4617-90b8-c517945cc99f-create-appointment-form.png`** (Reused 2 times in `okf/docs/clinics/appointments.md`):
   - Line 62: `![Add Appointment button]`
   - Line 94: `![Add Appointment form]`  
   *Note: Used once to indicate the button and once to indicate the full appointment form.*

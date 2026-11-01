# Dead Image References Triage Manifest
This manifest audits the **32 dead local image references** identified in `okf/_meta/dangling-links.md` across the MediFlux documentation bundle. In the legacy MDX source repository, these images pointed to local `/images/...` paths that were never committed to the repository (unlike cloud-hosted R2 images). Each reference has been evaluated against a three-tier criticality rubric (**CRITICAL**, **SUPPORTING**, **DECORATIVE**) based on surrounding procedural and semantic prose. This document serves as the decision baseline for remediation in **Phase 4b**.
## 1. Summary at a Glance
### By Criticality
| Criticality | Count | Definition | Phase 4b Target Batch |
| :--- | :---: | :--- | :--- |
| **CRITICAL** | 4 | Visual is load-bearing inside a procedure; removing breaks comprehension | Batch 3 (needs assets) |
| **SUPPORTING** | 17 | Illustrates concept but surrounding prose stands alone | Batch 2 (rewrite) & Batch 3 |
| **DECORATIVE** | 11 | Overview, redundant table screenshot, or end-of-section visual | Batch 1 (mechanical removal) |
| **Total** | **32** | | |

### By Section
| Section | Total Images | CRITICAL | SUPPORTING | DECORATIVE |
| :--- | :---: | :---: | :---: | :---: |
| `docs/accounting` | 4 | 0 | 1 | 3 |
| `docs/clinics` | 1 | 0 | 0 | 1 |
| `docs/sales` | 4 | 0 | 3 | 1 |
| `help/account` | 7 | 0 | 5 | 2 |
| `help/getting-started` | 1 | 0 | 0 | 1 |
| `help/ledgers` | 2 | 0 | 2 | 0 |
| `help/purchases` | 1 | 0 | 1 | 0 |
| `help/sales` | 12 | 4 | 5 | 3 |
| **Total** | **32** | **4** | **17** | **11** |

---
## 2. Detailed Manifest
| # | Section | Concept file | Image (basename) | Alt text | Criticality | Status | Batch | Rewrite summary | Notes |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| 1 | `help/sales` | `create-debit-note.md` | `generate-debit-note-drug-list.png` | Generate Debit Note from Drug List | **CRITICAL** | pending | — | — | Shows Separated View bulk action toolbar to generate debit note; load-bearing for Method 2 procedure. |
| 2 | `help/sales` | `nrx-sale.md` | `nrx-h1-type-column.png` | Drug Type column | **CRITICAL** | pending | — | — | Shows Type column badge (Rx, NRx, H1) in billing table; load-bearing for scheduled drug compliance. |
| 3 | `help/sales` | `wrong-calculations.md` | `drug-list-separated-view.png` | Drug List – Separated View | **CRITICAL** | pending | — | — | Shows batch-level Separated View toggle; load-bearing for locating editable Units field per batch. |
| 4 | `help/sales` | `wrong-calculations.md` | `edit-units-on-drug.png` | Edit Units | **CRITICAL** | pending | — | — | Highlights Units field (tablets per strip) in batch edit dialog; load-bearing for fixing calculation error. |
| 5 | `docs/accounting` | `itc-reversals.md` | `itc-reversals-actions.png` | MediFlux ITC Reversals Row and Bulk Actions | **SUPPORTING** | rewritten (Batch 2) | 2 (done — rewritten) | Documents row-level Mark N/A & Reverse buttons and bulk Mark all N/A & Reverse all buttons above table | Illustrates row and bulk actions table; actions already described in markdown table. |
| 6 | `docs/sales` | `returned-sales.md` | `returned-expanded-row.png` | Expanded return row | **SUPPORTING** | promoted to Batch 3 | 2→3 (promoted) | Promoted: carried 9-column sample breakdown and specific product/pricing numbers already structurally tabulated above | Illustrates line item breakdown in expanded view; columns already tabulated in markdown. |
| 7 | `docs/sales` | `scan-and-ocr.md` | `scan-bar-code` | Barcode Scanner | **SUPPORTING** | pending | 3 | — | Data issue: Filename has no extension — verify source MDX; asset cannot be sourced without ext. Viewfinder guidance. |
| 8 | `docs/sales` | `scan-and-ocr.md` | `scan-ocr-mode.png` | Image (OCR) | **SUPPORTING** | pending | 3 | — | Illustrates OCR text recognition viewfinder on drug packaging. |
| 9 | `help/account` | `add-user.md` | `add-user.png` | Create New User | **SUPPORTING** | rewritten (Batch 2) | 2 (done — rewritten) | Documents that selecting Create User saves account, adds to Store Users list, and activates permissions | Illustrates completed user creation and permission form; procedural text stands alone. |
| 10 | `help/account` | `remove-user.md` | `remove-user.png` | Deactivate User | **SUPPORTING** | rewritten (Batch 2) | 2 (done — rewritten) | Documents Deactivate User toggle location under Other Options below permissions grid with Save/Cancel | Shows Deactivate User toggle switch in edit modal; procedure describes action fully. |
| 11 | `help/account` | `reset-password.md` | `edit-profile-password.png` | Edit Profile | **SUPPORTING** | promoted to Batch 3 | 2→3 (promoted) | Promoted: steps 1–4 already fully cover all depicted fields and buttons without redundant claims | Shows password update fields in personal profile dialog; steps stand alone. |
| 12 | `help/account` | `reset-password.md` | `user-management.png` | User Management | **SUPPORTING** | rewritten (Batch 2) | 2 (done — rewritten) | Documents Store Users table layout and clicking Edit under Actions to update credentials | Shows Store Users table with Edit action button; procedure stands alone. |
| 13 | `help/account` | `user-permission.md` | `change-user-permissions.png` | Change User Permissions | **SUPPORTING** | rewritten (Batch 2) | 2 (done — rewritten) | Documents module list (Sale, Purchase, Customer, Supplier, Reports) and Read/Write/Delete checkboxes | Shows user permission checkboxes in edit modal; steps describe procedure. |
| 14 | `help/ledgers` | `customer-adjust-entry.md` | `customer-ledger-adjust.png` | Actions → Adjust | **SUPPORTING** | pending | 3 | — | Visualizes Actions dropdown and Adjust dialog on customer ledger. |
| 15 | `help/ledgers` | `supplier-adjust-entry.md` | `supplier-ledger-adjust.png` | Actions → Adjust | **SUPPORTING** | pending | 3 | — | Visualizes Actions dropdown and Adjust dialog on supplier ledger. |
| 16 | `help/purchases` | `add-purchase-from-photo.md` | `add-purchase-scan.png` | Scan supplier invoice | **SUPPORTING** | pending | 3 | — | Shows bill scan option on Add Purchase interface; steps describe workflow. |
| 17 | `help/sales` | `create-credit-note.md` | `add-credit-note.png` | Add Credit Note | **SUPPORTING** | pending | 3 | — | Illustrates customer selection, drug table, and CN quantity calculation. |
| 18 | `help/sales` | `create-debit-note.md` | `create-debit-note-page.png` | Create Debit Note page | **SUPPORTING** | pending | 3 | — | Illustrates manual debit note creation table for Method 1. |
| 19 | `help/sales` | `draft-and-add-sale-diff.md` | `save-draft-vs-add.png` | Save Draft and Add | **SUPPORTING** | rewritten (Batch 2) | 2 (done — rewritten) | Documents billing footer locations and distinction between Save Draft (paused) and + Add (committed) | Shows Save Draft vs + Add button positions in billing footer. |
| 20 | `help/sales` | `return-sale.md` | `return-sale.png` | Return Sale | **SUPPORTING** | rewritten (Batch 2) | 2 (done — rewritten) | Documents Return Sale confirmation, Cancel option, and Sale returned successfully! toast message | Shows Return Sale confirmation modal with refund calculation; steps stand alone. |
| 21 | `help/sales` | `wrong-calculations.md` | `wrong-tabs-calculation.png` | Wrong calculation example | **SUPPORTING** | promoted to Batch 3 | 2→3 (promoted) | Promoted: illustrated concrete numerical billing calculation discrepancy requiring visual grounding | Illustrates symptom of wrong loose tablet calculation; prose explains cause and fix. |
| 22 | `docs/accounting` | `itc-reversals.md` | `itc-reversals-overview.png` | MediFlux Pharmacy ITC Reversals Overview | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Top-of-page UI screenshot introducing section; redundant with prose. |
| 23 | `docs/accounting` | `itc-reversals.md` | `itc-reversals-summary-cards.png` | MediFlux ITC Reversals Summary Cards | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Redundant screenshot of summary card metrics already tabulated in markdown. |
| 24 | `docs/accounting` | `itc-reversals.md` | `itc-reversals-table.png` | MediFlux Pharmacy ITC Reversals Table | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Redundant screenshot of table columns already detailed in markdown table. |
| 25 | `docs/clinics` | `overview.md` | `clinic-prescriptions-overview.png` | MediFlux Clinic Prescriptions Overview | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Section banner screenshot illustrating prescription list in overview page. |
| 26 | `docs/sales` | `returned-sales.md` | `returned-list.png` | Returned page | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. General overview screenshot of return list; columns tabulated in prose. |
| 27 | `help/account` | `change-store-details.md` | `change-store-details.png` | Store Information | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. End-of-article UI screenshot; prose explains editable vs restricted fields. |
| 28 | `help/account` | `login-troubleshoot.md` | `cannot-login.png` | MediFlux Login | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Screenshot of login screen with no procedural dependencies; prose stands alone. |
| 29 | `help/getting-started` | `how-do-i-sign-in.md` | `sign-in-steps.png` | Sign in steps | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Generic screenshot of login page following self-explanatory 3-step sign in. |
| 30 | `help/sales` | `cannot-find-a-sale.md` | `find-previous-sale.png` | Sales List | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Redundant screenshot of sales search filters; criteria described in prose. |
| 31 | `help/sales` | `print-or-share-bill.md` | `print-share-bill.png` | Invoice Actions | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Redundant dialog screenshot; bullet list fully details options in text. |
| 32 | `help/sales` | `update-sale.md` | `update-sale.png` | Update Sale | **DECORATIVE** | removed (Batch 1) | 1 (done) | — | prose-defect: no. Menu screenshot showing Update option; 3-step numbered procedure stands alone. |

---

## 3. Grouped Context & Disposition Recommendations


### CRITICAL Images (4 Total)

#### 1. `generate-debit-note-drug-list.png`
- **In**: `okf/help/sales/create-debit-note.md`
- **Image tag**: `![Generate Debit Note from Drug List](/images/faqs/generate-debit-note-drug-list.png)`
- **Before**: 4. Click **Generate Debit Note** from the bulk actions toolbar. 5. Enter the **Quantity to Remove** for each drug. 6. Click **Create Debit Note**, then **Confirm**.
- **After**: After creating the debit note, the selected drugs are removed from inventory immediately and the debit note is saved under **Sales → Debit Notes**.
- **Criticality**: **CRITICAL**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — essential visual showing the Separated View bulk actions toolbar; block until asset is sourced.

#### 2. `nrx-h1-type-column.png`
- **In**: `okf/help/sales/nrx-sale.md`
- **Image tag**: `![Drug Type column](/images/faqs/nrx-h1-type-column.png)`
- **Before**: 3. Search or scan the drug and add it to the bill. 4. Check the **Type** column in the drug table. It will show `NRx` or `H1` based on how the drug is configured in inventory.
- **After**: When an `NRx` or `H1` drug is added to the sale, MediFlux prompts you to enter the required prescription details before completing the bill.
- **Criticality**: **CRITICAL**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — critical visual cue for verifying scheduled drug compliance tags during retail billing.

#### 3. `drug-list-separated-view.png`
- **In**: `okf/help/sales/wrong-calculations.md`
- **Image tag**: `![Drug List – Separated View](/images/faqs/drug-list-separated-view.png)`
- **Before**: 1. Go to **Drugs → Drug List**. 2. Switch to **Separated View**. 3. Find the drug and batch. 4. Click **Edit** and enter the correct **Units**. 5. Save.
- **After**: Edit the drug or batch and set the correct Units (tablets per strip).
- **Criticality**: **CRITICAL**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — load-bearing visual distinguishing batch-level Separated View from grouped drug view.

#### 4. `edit-units-on-drug.png`
- **In**: `okf/help/sales/wrong-calculations.md`
- **Image tag**: `![Edit Units](/images/faqs/edit-units-on-drug.png)`
- **Before**: Separated View showing individual batches where you can edit Units.
- **After**: After Units are corrected, new sales of loose tablets will calculate the unit price correctly.
- **Criticality**: **CRITICAL**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — load-bearing visual showing the exact Units input field needed to resolve price calculation defects.


### SUPPORTING Images (17 Total)

#### 5. `itc-reversals-actions.png`
- **In**: `okf/docs/accounting/itc-reversals.md`
- **Image tag**: `![MediFlux ITC Reversals Row and Bulk Actions](/images/accounting/itc-reversals-actions.png)`
- **Before**: You can also check individual boxes and then use the bulk buttons if they support selected rows.
- **After**: ## What You Can Do ### Reverse a Single Line 1. Locate the line you want to reverse in the table.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — actions are already fully documented in table; inline description suffices.

#### 6. `returned-expanded-row.png`
- **In**: `okf/docs/sales/returned-sales.md`
- **Image tag**: `![Expanded return row](/images/returned-expanded-row.png)`
- **Before**: The **Grand Total** is shown at the bottom right of the expanded row.
- **After**: ## Frequently Asked Questions ### How long do returns stay in this list? Returns are stored indefinitely as part of your permanent audit trail.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — column structure is already transcribed in prose table; replace with inline note.

#### 7. `scan-bar-code`
- **In**: `okf/docs/sales/scan-and-ocr.md`
- **Image tag**: `![Barcode Scanner](/images/scan-bar-code)`
- **Before**: In **Barcode Scanner** mode, point your camera at a drug's barcode and align it within the on-screen frame, guided by the prompt **"Align barcode within the frame."** A torch/flash icon in the top-right corner lets you toggle your camera's flash for scanning in low light.
- **After**: When a barcode is recognized: - The drug name, manufacturer, and matching inventory details appear in a bottom sheet or confirmation card.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: leave pending — data issue: filename has no extension in source; investigate asset and migrate to R2 once extension is known.

#### 8. `scan-ocr-mode.png`
- **In**: `okf/docs/sales/scan-and-ocr.md`
- **Image tag**: `![Image (OCR)](/images/scan-ocr-mode.png)`
- **Before**: In **Image (OCR)** mode, position the drug's name or batch number within the frame, guided by the prompt **"Position drug name / batch number inside frame."** Tap the **capture button** (camera shutter icon) to take a photo of the packaging.
- **After**: MediFlux processes the image on-device or via server-side OCR to extract: - Drug / brand name - Batch number - Expiry date - MRP
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — camera viewfinder framing guide; helpful visual reference for text capture.

#### 9. `add-user.png`
- **In**: `okf/help/account/add-user.md`
- **Image tag**: `![Create New User](/images/faqs/add-user.png)`
- **Before**: Review the details and select **Create User**.
- **After**: > **[Note]** The permissions assigned to a user determine what they can view, add, or delete in MediFlux.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — form fields are already described in numbered steps; replace with inline note.

#### 10. `remove-user.png`
- **In**: `okf/help/account/remove-user.md`
- **Image tag**: `![Deactivate User](/images/faqs/remove-user.png)`
- **Before**: Enable **Deactivate User** and select **Save**.
- **After**: > **[Note]** Deactivating a user logs them out of any active session and prevents them from logging in to MediFlux.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — toggle switch action is fully explained in text; replace with descriptive text.

#### 11. `edit-profile-password.png`
- **In**: `okf/help/account/reset-password.md`
- **Image tag**: `![Edit Profile](/images/faqs/edit-profile-password.png)`
- **Before**: 1. Click your profile avatar (top-right) and select **Profile**. 2. On the Profile page, click **Edit Profile**. 3. Enter the new password in **Password** and **Confirm Password**, then click **Save**.
- **After**: ## Update password for other users (Admin) 1. Go to **Settings → User Management**.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — modal fields are fully listed in steps 1-3; drop image tag.

#### 12. `user-management.png`
- **In**: `okf/help/account/reset-password.md`
- **Image tag**: `![User Management](/images/faqs/user-management.png)`
- **Before**: 1. Go to **Settings → User Management**. 2. Find the user in the **Store Users** list. 3. Click **Edit**. 4. Update the password and save.
- **After**: > **[Note]** If you forgot your password and cannot sign in, use How do I reset my password?.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — steps 1-4 explicitly describe navigating to Store Users and clicking Edit.

#### 13. `change-user-permissions.png`
- **In**: `okf/help/account/user-permission.md`
- **Image tag**: `![Change User Permissions](/images/faqs/change-user-permissions.png)`
- **Before**: After updating the permissions, select **Save**.
- **After**: > **[Note]** Changing a user's permissions controls which features and actions they can access in MediFlux.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — permission toggling is fully explained in text; drop image tag.

#### 14. `customer-ledger-adjust.png`
- **In**: `okf/help/ledgers/customer-adjust-entry.md`
- **Image tag**: `![Actions → Adjust](/images/faqs/customer-ledger-adjust.png)`
- **Before**: 1. Go to **Customers → Ledger**. 2. Select the customer from the left panel. 3. Click **Actions** (top right) and select **Adjust**. 4. Enter the **Adjustment Amount**... 7. Click **Add**.
- **After**: > **[Note]** Opening Outstanding on a customer profile cannot be edited after saving. Use an Adjustment entry on the ledger to correct it.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — useful visual guide for customer adjustment entry dialog and fields.

#### 15. `supplier-ledger-adjust.png`
- **In**: `okf/help/ledgers/supplier-adjust-entry.md`
- **Image tag**: `![Actions → Adjust](/images/faqs/supplier-ledger-adjust.png)`
- **Before**: 1. Go to **Suppliers → Ledger**. 2. Select the supplier from the left panel. 3. Click **Actions** (top right) and select **Adjust**. 4. Enter the **Adjustment Amount**... 7. Click **Add**.
- **After**: > **[Note]** Opening Outstanding on a supplier profile cannot be edited after saving. Use an Adjustment entry on the ledger to correct it.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — useful visual guide for supplier adjustment entry dialog and fields.

#### 16. `add-purchase-scan.png`
- **In**: `okf/help/purchases/add-purchase-from-photo.md`
- **Image tag**: `![Scan supplier invoice](/images/faqs/add-purchase-scan.png)`
- **Before**: 5. MediFlux scans the image and creates a draft with pre-filled drug rows. 6. Open the draft from **Drafts**, review the drugs, quantities, batch, expiry, and prices. 7. Select **Add Purchase** to complete.
- **After**: > **[Note]** Always check drug names, quantities, and prices against the physical bill before adding the purchase.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — illustrates photo upload UI and camera scan button.

#### 17. `add-credit-note.png`
- **In**: `okf/help/sales/create-credit-note.md`
- **Image tag**: `![Add Credit Note](/images/faqs/add-credit-note.png)`
- **Before**: 4. Enter the **CN Qty** (quantity to return) for each selected drug. 5. Review the summary at the bottom. 6. Click **+ Create Credit Note**.
- **After**: The credit note is saved under **Sales → Credit Notes**.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — illustrates credit note form layout and return quantity inputs.

#### 18. `create-debit-note-page.png`
- **In**: `okf/help/sales/create-debit-note.md`
- **Image tag**: `![Create Debit Note page](/images/faqs/create-debit-note-page.png)`
- **Before**: 2. Select the **date** and the **supplier**. 3. Add drugs one by one in the table (Drug Name, Qty, Batch, Expiry, Cost, MRP, tax rates). 4. Click **Create Debit Note**, then **Confirm**.
- **After**: --- ### Method 2: From Drug List (recommended for expired stock) 1. Go to **Drugs → Drug List**.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: migrate to R2 — illustrates multi-column manual debit note table.

#### 19. `save-draft-vs-add.png`
- **In**: `okf/help/sales/draft-and-add-sale-diff.md`
- **Image tag**: `![Save Draft and Add](/images/faqs/save-draft-vs-add.png)`
- **Before**: Use **Save Draft** when you need to pause the billing process, review the details later, or complete the sale at another time. When you are ready to finalise it, open the draft and select **+ Add**.
- **After**: > **[Note]** A saved draft is not a completed sale. Saving it does not add the sale to your sales records.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — button distinction is already clear from prose; replace with inline description.

#### 20. `return-sale.png`
- **In**: `okf/help/sales/return-sale.md`
- **Image tag**: `![Return Sale](/images/faqs/return-sale.png)`
- **Before**: 3. **Confirm the return** Select **Return Sale** to confirm.
- **After**: > **[Warning: Important]** Returning a sale cannot be undone. All drugs in the sale are added back to inventory immediately.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — modal options and consequences are fully described in text; drop image tag.

#### 21. `wrong-tabs-calculation.png`
- **In**: `okf/help/sales/wrong-calculations.md`
- **Image tag**: `![Wrong calculation example](/images/faqs/wrong-tabs-calculation.png)`
- **Before**: In the **Add Sale** drug table: - **QTY** = number of strips / packs - **TABS** = number of loose tablets If you are selling only tablets, keep QTY at `0` (or blank) and enter the tablet count in **TABS**.
- **After**: > **[Note]** Always set **Units** correctly when recording a purchase. This prevents wrong calculations later when selling loose tablets.
- **Criticality**: **SUPPORTING**
- **Suggested disposition** [ASSUMPTION]: rewrite as text — calculation discrepancy is already fully described in text; drop image tag.


### DECORATIVE Images (11 Total)

#### 22. `itc-reversals-overview.png`
- **In**: `okf/docs/accounting/itc-reversals.md`
- **Image tag**: `![MediFlux Pharmacy ITC Reversals Overview](/images/accounting/itc-reversals-overview.png)`
- **Before**: Navigate here from the sidebar: **Accounting → ITC Reversals**.
- **After**: --- ## What Is ITC Reversal? When you buy medicines or goods, you pay GST to the supplier.
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — general top-of-page UI screenshot with no text dependencies; drop image tag.

#### 23. `itc-reversals-summary-cards.png`
- **In**: `okf/docs/accounting/itc-reversals.md`
- **Image tag**: `![MediFlux ITC Reversals Summary Cards](/images/accounting/itc-reversals-summary-cards.png)`
- **Before**: | **Pending Lines** | Number of ITC reversal lines still waiting for action | | **Total GST Value** | Combined CGST + SGST + IGST of all pending lines | | **Selected GST Value** | Total GST of only the lines you have currently selected |
- **After**: --- ## Understanding the Table | Column | Description |
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — redundant visual; summary card metrics are already fully tabulated in markdown table.

#### 24. `itc-reversals-table.png`
- **In**: `okf/docs/accounting/itc-reversals.md`
- **Image tag**: `![MediFlux Pharmacy ITC Reversals Table](/images/accounting/itc-reversals-table.png)`
- **Before**: | **IGST** | Integrated GST portion (usually ₹0.00 for intra-state) | | **Status** | Current state of the line (Pending) | | **Actions** | **Mark N/A** or **Reverse** for that individual line |
- **After**: --- ## What You Can Do ### Reverse a Single Line
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — redundant visual; table columns and descriptions are fully documented in the markdown table.

#### 25. `clinic-prescriptions-overview.png`
- **In**: `okf/docs/clinics/overview.md`
- **Image tag**: `![MediFlux Clinic Prescriptions Overview](/images/clinic-prescriptions-overview.png)`
- **Before**: ## Prescriptions The **Prescriptions** page keeps a record of every prescription issued by your doctors. Each prescription is linked back to the doctor who wrote it, the patient who received it, and the date it was created.
- **After**: --- ## Schedules The **Schedules** page lets you define when each doctor is available for appointments.
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — section landing illustration; prose describes prescription workflow stand-alone.

#### 26. `returned-list.png`
- **In**: `okf/docs/sales/returned-sales.md`
- **Image tag**: `![Returned page](/images/returned-list.png)`
- **Before**: | **Items count** | Number of items in the return | The page shows a **Found X** count above the list indicating how many returns are recorded.
- **After**: --- ## Expanding A Return Click the **chevron (▾)** on the right of any return card to expand it and see the full line item breakdown:
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — overview UI screenshot of return list; prose table describes fields stand-alone.

#### 27. `change-store-details.png`
- **In**: `okf/help/account/change-store-details.md`
- **Image tag**: `![Store Information](/images/faqs/change-store-details.png)`
- **Before**: The **Store Name** and **License Number** cannot be changed directly. To update either of these details, contact the **MediFlux Support Team**.
- **After**: ## Related * [Settings](/docs/settings/overview.md)
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — end-of-article UI screenshot; prose clearly details editable vs restricted store fields.

#### 28. `cannot-login.png`
- **In**: `okf/help/account/login-troubleshoot.md`
- **Image tag**: `![MediFlux Login](/images/faqs/cannot-login.png)`
- **Before**: If you still cannot access your account, contact the **MediFlux Support Team** for assistance.
- **After**: (End of document)
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — standard login screen screenshot with no procedural dependencies; prose provides troubleshooting steps.

#### 29. `sign-in-steps.png`
- **In**: `okf/help/getting-started/how-do-i-sign-in.md`
- **Image tag**: `![Sign in steps](/images/faqs/sign-in-steps.png)`
- **Before**: 1. Go to the MediFlux login page: [app.mediflux.in](https://app.mediflux.in). 2. Enter your registered email address and password. 3. Select **Sign in** to open your dashboard.
- **After**: --- ## Do not have a store yet? 1. Go to [mediflux.in](https://mediflux.in) or the registration page and create your store.
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — generic sign-in screen visual; numbered login steps are self-contained.

#### 30. `find-previous-sale.png`
- **In**: `okf/help/sales/cannot-find-a-sale.md`
- **Image tag**: `![Sales List](/images/faqs/find-previous-sale.png)`
- **Before**: You can search for a sale using the search bar. Enter a **Customer Name**, **Drug Name**, or **Invoice Number** to find the relevant sale. You can also use the available filters to narrow down the results by sale type or payment method.
- **After**: ## Related * [Sale List](/docs/sales/sale-list)
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — redundant screenshot of sales search filters; search criteria described in prose.

#### 31. `print-share-bill.png`
- **In**: `okf/help/sales/print-or-share-bill.md`
- **Image tag**: `![Invoice Actions](/images/faqs/print-share-bill.png)`
- **Before**: - **Print**: Print the invoice. - **Thermal**: Print the invoice using a thermal printer. - **Download**: Download the invoice to your device.
- **After**: ## Related * [Sale List](/docs/sales/sale-list)
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — redundant dialog screenshot; bullet points fully detail Download, Print, and Thermal options.

#### 32. `update-sale.png`
- **In**: `okf/help/sales/update-sale.md`
- **Image tag**: `![Update Sale](/images/faqs/update-sale.png)`
- **Before**: 3. **Update the sale** Make the required changes to the sale details and save the updates.
- **After**: ## Related * [Sale List](/docs/sales/sale-list)
- **Criticality**: **DECORATIVE**
- **Suggested disposition** [ASSUMPTION]: remove — end-of-procedure menu screenshot; 3-step numbered procedure stands alone.

---

## 4. Phase 4b Proposed Work Plan

The remediation of the 32 dead image references will be conducted in three distinct batches:

### Batch 1 (Mechanical Removal) — 11 Images
- **Scope**: All 11 **DECORATIVE** images (`prose-defect: no`).
- **Strategy**: Strip the dead `![alt](src)` markdown tag and its italicized `*Caption:*` line.
- **Safety**: None of these images have anchoring prose demonstratives in the subsequent sentence; prose flows naturally after removal without leaving awkward grammatical stubs.
- **Targets**: `itc-reversals-overview.png`, `itc-reversals-summary-cards.png`, `itc-reversals-table.png`, `clinic-prescriptions-overview.png`, `returned-list.png`, `change-store-details.png`, `cannot-login.png`, `sign-in-steps.png`, `find-previous-sale.png`, `print-share-bill.png`, `update-sale.png`.

### Batch 2 (Text Rewrite & Inline Clarification) — 10 Images (Completed: 7 Rewritten, 3 Promoted)
- **Scope**: 10 **SUPPORTING** images audited for inline text rewrites vs escape hatch promotion to Batch 3.
- **Status**: Completed in Phase 4b / Batch 2.
- **Rewritten (7)**: `itc-reversals-actions.png`, `add-user.png`, `remove-user.png`, `user-management.png`, `change-user-permissions.png`, `save-draft-vs-add.png`, `return-sale.png`.
- **Promoted to Batch 3 (3)**: `returned-expanded-row.png`, `edit-profile-password.md` (`edit-profile-password.png`), `wrong-tabs-calculation.png` (due to load-bearing tabular/numerical data or complete pre-existing coverage).

### Batch 3 (Asset Sourcing & R2 Cloud Migration) — 11 Images
- **Scope**: 4 **CRITICAL** images + 7 **SUPPORTING** images that carry unique visual information (plus 1 extension defect investigation).
- **Strategy**: Block image deletion. Source authentic UI screenshots from staging/production, upload to MediFlux Cloudflare R2 bucket (`https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/...`), and update image paths to permanent cloud URLs.
- **Special Action**: Image #7 (`scan-bar-code` in `docs/sales/scan-and-ocr.md`) has no file extension in source MDX; verify asset file format (.png / .webp) before R2 upload.
- **Targets**: `generate-debit-note-drug-list.png`, `nrx-h1-type-column.png`, `drug-list-separated-view.png`, `edit-units-on-drug.png`, `scan-bar-code`, `scan-ocr-mode.png`, `customer-ledger-adjust.png`, `supplier-ledger-adjust.png`, `add-purchase-scan.png`, `add-credit-note.png`, `create-debit-note-page.png`.

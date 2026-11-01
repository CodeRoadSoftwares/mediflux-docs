---
type: Guide
title: Scan & Image OCR
description: Use your device camera to scan barcodes or capture drug labels, adding drugs to your bill instantly without manual entry.
timestamp: "2026-10-08T16:56:09+05:30"
resource: /docs/sales/scan-and-ocr
status: current
audience: User (Pharmacist/Cashier)
owner: ""
icon: Scan
---

# Scan & Image OCR

The **Scan & Add Drugs** panel lets you add drugs to a bill using your phone or tablet's camera, instead of searching and selecting them manually. It's available from the **Scan** button on the **Add Sale** page, and is designed specifically for use on phones and tablets.

---

## Opening The Panel
Click **Scan** at the top-right of the Add Sale page to open the **Scan & Add Drugs** panel. It offers two modes, switchable via the tabs at the top:

| Mode | What it does |
| --- | --- |
| **Barcode Scanner** | Scan a drug's barcode using your camera to instantly add it to the bill |
| **Image (OCR)** | Photograph a drug label or batch details: MediFlux reads the text and adds the matching drug automatically |

Camera permissions are required for both modes on phone and tablet.

![Scan & Add Drugs Panel](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/09/4ae4ab31-84cf-4e67-864e-54bf97b84fc3-scan-option.png)
*Caption: Barcode Scanner and Image (OCR) tabs at the top of the panel.*

---

## Barcode Scanner
In **Barcode Scanner** mode, point your camera at a drug's barcode and align it within the on-screen frame, guided by the prompt **"Align barcode within the frame."** A torch/flash icon in the top-right corner lets you toggle your camera's flash for scanning in low light.

![Barcode Scanner](/images/scan-bar-code)
*Caption: Align the barcode within the frame and use the torch icon for low-light scanning.*

---

## Image (OCR)
In **Image (OCR)** mode, position the drug's name or batch number within the frame, guided by the prompt **"Position drug name / batch number inside the frame."** Tap the **capture button** to take the photo, MediFlux then reads the text and matches it to a drug in your inventory.

![Image (OCR)](/images/scan-ocr-mode.png)
*Caption: Position the drug name or batch number inside the frame, then tap the capture button.*

---

## Using A Physical Barcode Scanner
If you have a physical barcode scanner device connected to your computer, you don't need to open the Scan & Add Drugs panel at all, you can scan barcodes directly into the bill. The drug is added instantly, with its name, batch, expiry, MRP, and available stock auto-populated.

---

## Speed Up Your Billing
Scanning makes billing faster. Here's where it fits in your workflow.


  * [Add Sale](/docs/sales/add-sale-retail) - Use Scan & Add Drugs while creating a sale bill.
  * [Drug List](/docs/inventory/drug-list) - Verify scanned drugs are correctly matched in your inventory.
  * [Add Purchase](/docs/purchases/add-purchase) - Record stock coming in, uses a separate bill-upload scan feature.
  * [Settings](/docs/settings/account-info) - Configure your store details that appear on every scanned bill.

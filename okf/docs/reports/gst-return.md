---
type: Reference
title: GST Returns
description: Generate pharmacy GST returns in MediFlux. Easily configure GSTR-1, GSTR-2, and GSTR-3B reports, select periods, and ensure tax compliance.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/reports/gst-return
status: current
audience: User (Accountant/Owner)
owner: ""
icon: ChartColumnIncreasing
---

# GST Returns

The **GST Returns & Compliance** page helps you prepare and review **pharmacy GST reports** using your store's transaction data in **MediFlux**.

You can select a GST return type, choose a reporting period, and generate reports for review. For supported return types, you can also select which sections to include.

To review the transactions used in these reports, see [Sales List](/docs/sales/sale-list) and [Purchase List](/docs/purchases/purchase-list).

## Opening GST Returns & Compliance

1. **Open Reports**

   From the MediFlux sidebar, expand **Reports**.

2. **Select GST Returns**

   Click **GST Returns** to open the **GST Returns & Compliance** page.

3. **Choose a Return Type**

   Select the GST return you want to prepare from the tabs at the top of the page.

![MediFlux Pharmacy GST Returns & Compliance Page](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/5d8678e5-222c-4653-83d0-e363c1438b0b-gst-reports.png)
*Caption: The MediFlux GST Returns page displaying return tabs, reporting parameters, and section-selection controls for pharmacy tax compliance.*

## Available GST Return Types

The page displays four return tabs.

| Return | Purpose |
| --- | --- |
| **GSTR-1** | Review outward supply and sales-related GST information. |
| **GSTR-2** | Review purchase-related GST information. |
| **GSTR-3B** | Prepare a summary of GST-related information for the selected reporting period. |
| **GSTR-9** | Annual GST return option, currently disabled in the interface. |

> **[Note]** **GSTR-9** is displayed as a disabled tab and cannot currently be selected from this page.

## Configuring Report Parameters

The **Report Parameters** section allows you to choose the period for which you want to generate the GST report.

The same parameter controls are visible for GSTR-1, GSTR-2, and GSTR-3B.

### Frequency

Use the **Frequency** dropdown to select the reporting frequency.

The available options are:

- **Monthly**
- **Quarterly**
- **Annually**

![MediFlux GST Report Frequency Selection](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/300e55f7-c758-4394-b6c1-be9e19e6388f-frequency.png)
*Caption: Choose Monthly, Quarterly, or Annually from the Frequency dropdown for pharmacy GST reports in MediFlux.*

### Financial Year

Use **Financial Year** to choose the year for which you want to prepare the report.

For example, the screenshot shows the following available years:

- `2026-2027`
- `2025-2026`
- `2024-2025`
- `2023-2024`

![MediFlux GST Financial Year Selection](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/6238e0b9-e39f-48d7-976c-5e61633f976c-financial-year.png)
*Caption: Choose the financial year for which the pharmacy GST report should be generated in MediFlux.*

### Select Month

When using the monthly reporting view, use **Select Month** to choose the required month.

For example, you can select **October** for the financial year `2026-2027`.

![MediFlux GST Reporting Month Selection](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/9e3f6723-8d12-4eb2-afd6-5f4dac5fdcb2-select-month.png)
*Caption: Choose the specific month for which you want to fetch pharmacy GST report data in MediFlux.*

> **[Note]** The screenshots show the month selector for **Monthly** frequency. The period-selection behavior for **Quarterly** and **Annually** follows a similar pattern.

## Generating GSTR-1

**GSTR-1** provides outward-supply information organized into GST reporting sections.

1. **Select GSTR-1**

   Click the **GSTR-1** tab.

2. **Configure the Reporting Period**

   Choose the **Frequency**, **Financial Year**, and applicable reporting month.

3. **Select the Sections**

   Use the **Sections** panel to choose which parts of the report to include.

4. **Fetch the Report**

   Click **Fetch Report** to request the report for the selected period and sections.

### GSTR-1 Sections

The following sections are available in the interface:

| Section | Description |
| --- | --- |
| **B2B Invoices** | Transactions involving registered taxpayers. |
| **B2C Small** | Retail transactions. |
| **B2C Large** | High-value interstate transactions. |
| **HSN Summary** | Drug-wise aggregation for HSN reporting. |
| **CDNR** | Credit and debit notes for registered taxpayers. |
| **CDNUR** | Credit and debit notes for unregistered taxpayers. |
| **Documents Issued** | Document details associated with Table 13. |

Each section has a checkbox that allows you to include or exclude it.

You can also click **Deselect All** to clear the selected sections.

![MediFlux GSTR-1 Report Sections for Pharmacy](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/132f7ff6-6fbf-4a53-b37b-ff197ce5c3ce-gstr-1.png)
*Caption: The MediFlux GSTR-1 Sections panel includes B2B Invoices, B2C Small, B2C Large, HSN Summary, CDNR, CDNUR, and Documents Issued.*

## Generating GSTR-2

The **GSTR-2** tab provides purchase-related reporting options.

1. **Select GSTR-2**

   Click the **GSTR-2** tab.

2. **Choose the Reporting Period**

   Select the **Frequency**, **Financial Year**, and applicable month.

3. **Select the Required Sections**

   Choose the sections to include in the report.

4. **Fetch the Report**

   Click **Fetch Report**.

### GSTR-2 Sections

The interface displays the following options:

| Section | Description |
| --- | --- |
| **B2B Invoices** | Purchase invoices involving registered taxpayers. |
| **B2B Unregistered** | Transactions involving unregistered taxpayers. |
| **CDNR** | Credit and debit notes for registered taxpayers. |
| **CDNUR** | Credit and debit notes for unregistered taxpayers. |

![MediFlux GSTR-2 Report Configuration for Pharmacy](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/a52a6a65-93d8-4975-bbfb-15553f587bf4-gstr-2.png)
*Caption: The MediFlux GSTR-2 tab displays reporting parameters and section checkboxes for B2B Invoices, B2B Unregistered, CDNR, and CDNUR.*

> **[Note]** The **Sections** panel is different for GSTR-1 and GSTR-2. Select the relevant return tab before choosing sections.

## Generating GSTR-3B

The **GSTR-3B** tab provides a GST summary reporting view.

Unlike GSTR-1 and GSTR-2, the GSTR-3B screen shown here does not display a separate **Sections** panel.

1. **Select GSTR-3B**

   Click the **GSTR-3B** tab.

2. **Configure the Period**

   Choose the reporting **Frequency**, **Financial Year**, and applicable month.

3. **Fetch the Report**

   Click **Fetch Report** to request the GSTR-3B report for the selected period.

![MediFlux GSTR-3B Report Configuration for Pharmacy](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/c6be86c9-cb30-4e86-8e72-2795ade2c424-gstr-3.png)
*Caption: The MediFlux GSTR-3B tab displays reporting frequency, financial year, month selection, and the Fetch Report button.*

## Selecting and Deselecting Report Sections

For GSTR-1 and GSTR-2, the **Sections** panel determines which categories are included when fetching the report.

To customize the selection:

1. Open the required GST return tab.
2. Locate the **Sections** panel.
3. Use the checkboxes to select or deselect individual sections.
4. Click **Deselect All** if you want to clear the current selection.
5. Select the required sections and click **Fetch Report**.

## Important Things to Check

Before using GST report data for filing or reconciliation, review the following:

- Confirm that the correct **Financial Year** and reporting period are selected.
- Check that the required report sections are included.
- Review purchase and sales transactions for missing or incorrect GST details.
- Verify applicable GST rates, HSN codes, and invoice information.
- Reconcile the generated figures with your accounting records and relevant GST portal data.

> **[Warning]** Generating a GST report in MediFlux does not, by itself, mean that a GST return has been filed with the government. Review and reconcile the information before using it for statutory filing.

## FAQs

  ### Can I generate GST reports for previous financial years?

Yes. Use the **Financial Year** dropdown to select an available previous financial year.

  ### Can I choose which sections to include in GSTR-1?

Yes. The **Sections** panel allows you to select or deselect individual sections before clicking **Fetch Report**.

  ### Are the sections in GSTR-1 and GSTR-2 the same?

No. GSTR-1 and GSTR-2 have different section options. The available sections change based on the selected return type.

  ### Can I generate GSTR-3B without selecting sections?

Yes. The GSTR-3B page does not display a separate **Sections** panel. Select the reporting period and click **Fetch Report**.

  ### Can I access GSTR-9?

No. The **GSTR-9** tab is currently disabled.

  ### Does generating a GST report automatically file my return?

No. Generating a report in MediFlux does not automatically file it with the GST portal. Review and reconcile the report before filing.

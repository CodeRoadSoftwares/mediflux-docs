---
type: Guide
title: Add a Customer
description: Learn how to add a new pharmacy customer in MediFlux. Create Consumer or Business profiles, track Udhaar, and manage GST-ready ledgers easily.
timestamp: "2026-10-30T11:34:57+05:30"
resource: /docs/customers/add-customer
status: current
audience: User (Pharmacist/Cashier)
owner: ""
icon: UserPlus
---

# Add a Customer

> **Video:** [How to Add a Customer in MediFlux](https://www.youtube.com/watch?v=)

When you **add a new customer** in MediFlux, you can create either a **Consumer** profile (for individual, walk-in patients) or a **Business** profile (for businesses or other pharmacies you supply to). Both options are available from the Customer List page and from the **`+` quick-add menu** available on every screen.

---

## Opening The Add Customer Form
You can open the **Add New Customer** form in two ways:

- From the Customer List page, click **+ Add Customer**
- Click the **`+` menu** in the top-right corner of any screen and select **Add Customer**

![MediFlux Add New Pharmacy Customer Form](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783661642600-740603868-add-customer.png)
*Caption: The MediFlux form for adding a new customer, showing the Consumer and Business profile toggle at the top.*

---

## Option 1: Consumer
Use the **Consumer** tab to add an individual customer.

### Basic Details
| Field | Required | Description |
| --- | --- | --- |
| **Full Name** | Yes | Customer's full name |
| **Gender** | Yes | Select the customer's gender |
| **Phone Number** | Yes | Customer's primary contact number |
| **Email Address** | No | Customer's email address |
| **Aadhaar Number** | No | Customer's Aadhaar ID number |
| **Age** | No | Customer's age |

### PMJAY / Ayushman Bharat Customer
Tick the **PMJAY / Ayushman Bharat Customer** checkbox to mark this customer as a beneficiary of the Ayushman Bharat PMJAY scheme. This reveals additional fields:

| Field | Required | Description |
| --- | --- | --- |
| **Ayushman Card Number** | Yes | The customer's PMJAY card number |
| **Beneficiary ID** | No | Beneficiary ID, if available |
| **ABHA Number** | No, but recommended | The customer's Ayushman Bharat Health Account number |

> **[Note]** Marking a customer as a PMJAY beneficiary does not apply any automatic discount. It simply tags the customer so their sales can be handled separately during billing and tracked in dedicated PMJAY sales reports.

![MediFlux PMJAY / Ayushman Bharat Customer Details](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783661752801-133018284-pmjay-customers.png)
*Caption: The MediFlux consumer form with expanded PMJAY fields for Ayushman Card Number, Beneficiary ID, and ABHA Number.*

### Additional Information
| Field | Required | Description |
| --- | --- | --- |
| **State** | Yes | Customer's state |
| **Full Address** | Yes | Customer's complete address |
| **Notes** | No | Any internal notes about this customer |
| **Opening Outstanding** | No | Any existing amount this customer already owed you before adding them to MediFlux. Defaults to `0`. |
| **Customer Rating** | No | A manual 1–5 star rating reflecting how reliable or valued this customer is. |

![MediFlux Consumer Additional Information](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783661988626-617696622-consumer-form.png)
*Caption: Additional consumer fields in MediFlux, including State, Address, Notes, Opening Outstanding, and Customer Rating.*

---

## Option 2: Business
Use the **Business** tab to add a business or another pharmacy store as a customer.

### Basic Details
| Field | Required | Description |
| --- | --- | --- |
| **Business Name** | Yes | Name of the business, e.g., ABC Enterprises |
| **Phone Number** | Yes | Primary contact number |
| **Email Address** | No | Business email address |
| **License Number** | Yes | Drug license number of the business |
| **GSTIN** | No | GST Identification Number |

### Additional Information
| Field | Required | Description |
| --- | --- | --- |
| **State** | Yes | Business's state |
| **Full Address** | Yes | Business's complete address |
| **Notes** | No | Any internal notes about this customer |
| **Opening Outstanding** | No | Any existing amount this business already owed you before adding them to MediFlux. Defaults to `0`. |
| **Customer Rating** | No | A manual 1–5 star rating reflecting how reliable or valued this customer is. |

![MediFlux Business Pharmacy Customer Form](https://waibusiness.s3.ap-south-1.amazonaws.com/media/1783661988625-840150066-bussiness-form.png)
*Caption: The MediFlux business customer form filled out with required details like Business Name, License Number, and GSTIN.*

---

## Continue With This Customer

  * [Customer Profile](/docs/customers/customer-profile) - View and manage the customer you just created.
  * [Customer Ledger](/docs/customers/customer-ledger) - Record opening outstanding or track payment history.
  * [Billing Notes](/docs/customers/billing-notes) - Set special pricing or credit terms for this customer.
  * [Customer List](/docs/customers/customer-list) - See all customers including the new one.

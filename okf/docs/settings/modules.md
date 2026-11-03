---
type: Guide
title: Modules
description: Enable or disable optional MediFlux modules and manage subscriptions for additional features like Warehouse Management.
timestamp: "2026-10-12T11:55:46+05:30"
resource: /docs/settings/modules
status: current
audience: User (Admin)
owner: ""
icon: ToggleLeft
---

# Modules

The **Modules** tab lets you manage optional features for your store. You can enable or disable modules based on your pharmacy's requirements.

Some modules can be enabled directly, while others, such as the **Warehouse Module**, require an active subscription.

---

## Available Modules

| Module | What it does |
| --- | --- |
| **Clinic Module** | Enables medical features like patient records and prescriptions |
| **Warehouse Module** | Enables inventory tracking and management across multiple warehouses. Requires a subscription |
| **Accounting Module** | Enables accounting features like journal entries, ledgers, and reports |
| **Estimate Bills** | Enables the estimate bill feature for creating quotations and estimates |

Each module displays its current status, **Enabled** or **Disabled**, along with an option to manage it.

![Modules Page](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/73ceb65e-70e6-4b08-865a-e4ff95cfda9a-modules-page.png)
*Caption: Available MediFlux modules, including Clinic, Warehouse, Accounting, and Estimate Bills, with their current status and enable or disable options.*

---

## Enabling or Disabling a Module

For modules that do not require a subscription, you can enable or disable them directly.

1. **Open Modules**

   Go to **Settings → Modules**.

   You will see the available modules and their current status.

2. **Select a module**

   Find the module you want to enable or disable.

   Click **Enable** or **Disable** beside it.

3. **Confirm the change**

   A confirmation prompt appears before the change is applied.

   Click **Confirm** to proceed or **Cancel** to go back.

   ![Module Confirmation](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/f7242746-cf3b-4906-9e5c-e31b202b64f1-module2.png)
*Caption: Confirm whether you want to enable or disable the selected module.*

> **[Note]** Disabling a module hides its related features across MediFlux but does not delete existing data associated with it.
>
> For example, disabling the **Clinic Module** hides the Clinic section from the sidebar, but existing doctor and appointment records remain available when the module is enabled again.

---

## Warehouse Module

The **Warehouse Module** allows you to manage inventory across multiple warehouses instead of maintaining all stock in a single location.

With this module, you can:

- Track stock separately across warehouses.
- Transfer stock between warehouse locations.
- View stock movements and audit logs.
- Monitor inventory quantities across different locations.

Unlike the other modules, the **Warehouse Module requires a subscription** before you can use its features.

> **[Note]** The **Main Store** is available by default. You only need the Warehouse Module subscription if you want to manage stock in additional warehouses.

### How to Subscribe to the Warehouse Module

1. **Open the Warehouse Module**

   Go to **Settings → Modules**.

   Find **Warehouse Module** in the list.

   If it is not enabled, its status appears as **Disabled**.

   Click the module or the arrow beside it to open its details.

2. **View subscription plans**

   The **Warehouse Module** details page displays the module's activation status and available subscription plans.

   Under **Module Subscriptions**, you will find the **Warehouse Subscription Plans** section.

   ![Warehouse Module Subscription Plans](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/10/122844d3-e142-4ec5-bc21-2f7c5a86d5ca-module-subscription.png)
*Caption: Warehouse Module details showing its inactive status and available subscription plans.*

3. **Choose a subscription plan**

   Select the plan that suits your requirements.

   The available plans shown are:

   | Plan | Price | Duration |
   | --- | --- | --- |
   | **Annual Plan** | `₹500` | `365` days |
   | **Two-Year Plan** | `₹849` | `730` days |

   Both plans include:

   - **Dedicated Warehouse Storage**
   - **Stock Transfers & Audit Logs**
   - **Real-time Inventory Tracking**

   Click **Subscribe Now** on your preferred plan to proceed with the subscription.

4. **Enable the Warehouse Module**

   After completing the subscription, return to the **Warehouse Module** details page.

   Click **Enable Module** to activate the module.

   Once enabled, you can start using the warehouse features available in MediFlux.

> **[Note]** A subscription is required to use the **Warehouse Module**. Simply clicking **Enable** does not replace the subscription requirement.
>
> The subscription prices shown here are based on the available plans displayed in MediFlux and may change.

---

## FAQs



  ### What happens to my data if I disable a module?

Your existing data is not deleted. Disabling a module hides its related features until you enable it again.

  ### Is the Clinic Module required to use MediFlux?

No. The Clinic Module is optional. If your pharmacy does not manage a clinic, you can leave it disabled.

  ### Does the Warehouse Module require a subscription?

Yes. Unlike the other modules, the Warehouse Module requires a subscription to access its features.

  ### Do I need the Warehouse Module to manage stock in my Main Store?

No. Your Main Store is available by default. The Warehouse Module is intended for pharmacies that need to manage inventory across additional warehouses.

  ### What features are included in the Warehouse subscription?

The subscription includes dedicated warehouse storage, stock transfers and audit logs, and real-time inventory tracking.

  ### Can I enable the Warehouse Module without subscribing?

The Warehouse Module requires an active subscription to use its warehouse features. You can view the available plans under Settings → Modules.



---

## What's Next

After enabling the modules your pharmacy needs, you can start using their related features.


  * [Doctors](/docs/clinics/doctors) - Set up your clinic's doctor directory after enabling the Clinic Module.
  * [Accounting Settings](/docs/settings/account-info) - Configure your accounting preferences after enabling the Accounting Module.
  * [Drug List](/docs/inventory/drug-list) - View and manage inventory, including warehouse stock when the Warehouse Module is enabled.
  * [Add Sale](/docs/sales/add-sale-retail) - Create an estimate bill after enabling the Estimate Bills module.

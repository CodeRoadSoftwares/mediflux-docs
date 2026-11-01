---
type: Guide
title: Appointments
description: Manage patient appointments, share a public booking link, and track appointment status and payments.
timestamp: "2026-08-27T13:35:29+05:30"
resource: /docs/clinics/appointments
status: current
audience: User (Doctor/Staff)
owner: ""
icon: Calendar
---

# Appointments

The **Appointments** page is where every patient appointment booked with your clinic's doctors is tracked, whether added manually by you or booked by a patient through your public booking link.

---

## Searching And Filtering Appointments
The search bar lets you search by **patient name, phone, or email**.

Click **Filters** to open the **Filters** panel:

| Option | What it does |
| --- | --- |
| **Doctor** | Filter by a specific doctor |
| **Schedule** | Filter by a specific schedule |
| **Status** | Filter by appointment status |
| **Appointment Date Range** | This Week, This Month, Today, or a custom From/To range |
| **Follow-up Date Range** | This Week, This Month, Today, or a custom From/To range |
| **Sort By** | Sort by Appointment Date, in ascending or descending order |

Click **Apply Filters** to apply, or **Reset** to clear all filters.

You can also control how many appointments are shown per page, and use the refresh icon to reload the list.

![Search bar and Filters](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/a96b4707-37ad-43e3-ab6d-1a2e4d1e3088-appointment-searchbar.png)
*Caption: Search appointments by patient details and apply multiple filters*

---

## Public Booking Link
Below the search bar, MediFlux gives you a **Public Booking Link**, a link you can share with patients so they can book appointments themselves, without you needing to add them manually.

| Option | What it does |
| --- | --- |
| **Copy** | Copies the booking link |
| **Open Link** | Opens the booking link in a new tab |
| **Show QR Code** | Displays a scannable QR code version of the link, which can also be downloaded |

![Public Booking Link](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/34af717a-9f79-403e-92a9-7141ce24d64e-booking-link.png)
*Caption: Copy, open, or generate a QR code for your public booking link*
---
![QR Code view](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/a66f0517-36d9-4d05-b061-2616c58b3ea6-booking-QR.png)
*Caption: Scannable QR code that patients can use to book appointments*

---

## Adding An Appointment
Click **+ Add Appointment** to open a 4-step form:

![Add Appointment button](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/74001ccb-0a2f-4617-90b8-c517945cc99f-create-appointment-form.png)
*Caption: Button to start creating a new appointment*

1. **Schedule**

   Search by doctor name or speciality, or use **Filter by Days** to narrow doctors down by their available days. Only doctors with a matching schedule are shown, along with their available days and consultation fee.

2. **Date**

   Select an appointment date from the calendar. Only dates matching the selected doctor's available days can be chosen.

3. **Time**

   Select an available time slot for the chosen date. Each slot shows its start and end time.

4. **Details**

   | Field | Description |
       | --- | --- |
       | **Patient** | Search for an existing patient by name or phone (minimum 3 characters), required |
       | **Appointment Type** | e.g., Consultation |
       | **Symptoms** | Enter each symptom on a new line |
       | **Chief Complaint** | Describe the main reason for the visit |
       | **Notes** | Any additional notes |
       | **Consultation Fee** | Pulled from the selected schedule |
       | **Discount** | Discount applied, if any |
       | **Final Amount** | Calculated after discount |
       | **Paid Amount** | Amount paid at the time of booking |
       | **Payment Method** | e.g., Cash |

Click **Create Appointment** to save, or **Cancel** to discard.

![Add Appointment form](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/74001ccb-0a2f-4617-90b8-c517945cc99f-create-appointment-form.png)
*Caption: 4-step form for creating a new appointment with schedule, date, time, and patient details*
---
## Appointment Cards
Once created, each appointment appears as a card with:

| Field | Description |
| --- | --- |
| **Patient name and phone** | The patient the appointment is for |
| **Doctor** | The doctor the appointment is with |
| **Date and Time** | When the appointment is scheduled |
| **Status** | Scheduled, Confirmed, or Cancelled |
| **Payment status** | Shows if payment is Partially Paid, along with the remaining amount, and an **Add Payment** button |
| **Appointment Type** | e.g., Routine Checkup |

![Appointment card](https://pub-edab995818924e31a696b8a8c0fd961b.r2.dev/mediflux-docs/2026/07/da7f006e-d682-4ab8-8b2c-1f64f87a7ce9-appointment-cards.png)
*Caption: Appointment card showing patient details, doctor, time, status, and payment information*

### Updating Appointment Status
Click the status dropdown on any appointment card to change it between **Scheduled**, **Confirmed**, and **Cancelled**.

---

## FAQs


  ### Can patients book appointments themselves?

Yes, share your **Public Booking Link** (or its QR code) with patients, and they can book an appointment directly without you needing to add it manually.
  ### What happens if I mark an appointment as Cancelled?

The appointment's status changes to Cancelled and it's no longer treated as an active booking, though it remains on record.
  ### Can I record a partial payment for an appointment?

Yes, the appointment card shows a **Partially Paid** status with the remaining amount, and you can click **Add Payment** to record further payments.


---

## Common Mistake To Avoid
> **[Warning: Always check availability before booking]** Adding an appointment without checking the doctor's actual availability first can lead to double-bookings. Always go through the Schedule → Date → Time steps rather than assuming a slot is free.

---

## After The Appointment

  * [Pending Bookings](/docs/clinics/pending-bookings) - Confirm or reject new appointment requests.
  * [Prescriptions](/docs/clinics/prescriptions) - View prescriptions written during this appointment.
  * [Doctors](/docs/clinics/doctors) - View the doctor who handled this appointment.
  * [Schedules](/docs/clinics/schedules) - Adjust availability if appointments are overbooked.

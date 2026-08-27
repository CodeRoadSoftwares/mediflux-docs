from pathlib import Path

root = Path("content/docs")
mapper = {
    "/docs/sales/billing": "/docs/sales/add-sale-retail",
    "/docs/inventory/overview": "/docs/inventory/index",
    "/docs/purchases/overview": "/docs/purchases/index",
    "/docs/customers/credit-management": "/docs/customers/index",
    "/docs/reports/analytics": "/docs/reports/index",
    "/docs/introduction/security": "/docs/introduction/index",
    "/docs/introduction/quick-start": "/docs/introduction/getting-started",
    "/docs/introduction/video-tutorials": "/docs/introduction/getting-started",
    "/docs/introduction/dashboard-overview": "/docs/introduction/getting-started",
    "/docs/sales/scan-ocr": "/docs/sales/scan-and-ocr",
    "/docs/sales/returned": "/docs/sales/returned-sales",
    "/docs/sales/add-sale": "/docs/sales/add-sale-retail",
    "/docs/settings/account": "/docs/settings/account-info",
    "/docs/help-support": "/docs/settings/index",
    "/docs/supplier/trash": "/docs/supplier/supplier-trash",
    "/docs/customers/ledger": "/docs/customers/customer-ledger",
    "/docs/customers/store-requests": "/docs/customers/store-request",
    "/docs/sales/add-wholesale-sale": "/docs/sales/add-wholesale",
    "/docs/sales/sales-list": "/docs/sales/sale-list",
    # clinic pluralization
    "/docs/clinic/pending-bookings": "/docs/clinics/pending-bookings",
    "/docs/clinic/prescriptions": "/docs/clinics/prescriptions",
    "/docs/clinic/doctors": "/docs/clinics/doctors",
    "/docs/clinic/schedules": "/docs/clinics/schedules",
    "/docs/clinic/appointments": "/docs/clinics/appointments",
}

changed = []
for path in root.rglob("*.mdx"):
    text = path.read_text(encoding="utf-8")
    original = text
    for bad, good in mapper.items():
        text = text.replace(bad, good)
    if text != original:
        path.write_text(text, encoding="utf-8")
        changed.append(path)

print(f"Updated {len(changed)} files")
for p in changed:
    print(p)

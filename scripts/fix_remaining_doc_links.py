from pathlib import Path

root = Path("content/docs")
mapper = {
    "/docs/sales/create-sale": "/docs/sales/add-sale-retail",
    "/docs/sales/returns": "/docs/sales/returned-sales",
    "/docs/sales/add-retail-sale": "/docs/sales/add-sale-retail",
    "/docs/customers/trash": "/docs/customers/customer-trash",
    "/docs/sales/add-sale-retail-retail": "/docs/sales/add-sale-retail",
    "/docs/settings/account-info-info": "/docs/settings/account-info",
    "/docs/sales/returned-sales-sales": "/docs/sales/returned-sales",
    "/docs/accounting": "/docs/settings/accounting-settings",
    "/docs/settings/account-infoing-settings": "/docs/settings/account-info",
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

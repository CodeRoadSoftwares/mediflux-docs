from pathlib import Path
import re

root = Path("content/docs")
pattern = re.compile(r"href=[\"'](/docs/[^\"']+)[\"']")
seen = set()
bad = []

for path in root.rglob("*.mdx"):
    text = path.read_text(encoding="utf-8")
    for m in pattern.finditer(text):
        href = m.group(1)
        if href in seen:
            continue
        seen.add(href)
        route = href[len("/docs/"):]
        candidate = root / (route + ".mdx")
        candidate2 = root / route / "index.mdx"
        if not candidate.exists() and not candidate2.exists():
            bad.append((path, href, candidate, candidate2, candidate.exists(), candidate2.exists()))

print("total_hrefs", len(seen))
print("bad_count", len(bad))
for p, h, c1, c2, e1, e2 in bad:
    print("BROKEN", h, "from", p, "exists1", e1, "exists2", e2)

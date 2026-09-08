from pathlib import Path
import re

root = Path("content/docs")
patterns = []
results = {
    "missing_space": [],
    "duplicate_marker_group": [],
}

for path in sorted(root.rglob("*.mdx")):
    lines = path.read_text(encoding="utf-8").splitlines()
    for index, line in enumerate(lines, 1):
        m = re.match(r"^([ \t]*#{1,6})(.*)$", line)
        if not m:
            continue

        hashes, rest = m.groups()
        if rest and not rest.startswith((" ", "\t")):
            results["missing_space"].append((path.as_posix(), index, line))

        if re.search(r"(#{2,})", rest):
            results["duplicate_marker_group"].append((path.as_posix(), index, line))

for name, items in results.items():
    print(name, len(items))
    for path, index, line in items:
        print(f"{path}:{index}: {line}")

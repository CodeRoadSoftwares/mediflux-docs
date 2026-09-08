from pathlib import Path
import re

root = Path("content/docs")
pattern = re.compile(r'^(?P<indent>[ \t]*#{1,6}\s+)(?P<content>.*)$')
updated_files = []

for path in sorted(root.rglob("*.mdx")):
    text = path.read_text(encoding="utf-8")
    lines = []
    changed = False

    for line in text.splitlines(keepends=True):
        m = pattern.match(line)
        if m:
            content = m.group('content')
            title_content = re.sub(r"\b([a-z])", lambda x: x.group(1).upper(), content)
            new_line = f"{m.group('indent')}{title_content}"
            if new_line != line:
                line = new_line
                changed = True
        lines.append(line)

    if changed:
        path.write_text("".join(lines), encoding="utf-8")
        updated_files.append(path.as_posix())

print('updated', len(updated_files))
for p in updated_files:
    print(p)

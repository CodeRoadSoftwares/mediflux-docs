from pathlib import Path

root = Path("content/docs")
updated_files = []
for path in sorted(root.rglob("*.mdx")):
    text = path.read_text(encoding="utf-8")
    if "## FAQs<Accordions>" in text:
        text = text.replace("## FAQs<Accordions>", "## FAQs\n<Accordions>")
        path.write_text(text, encoding="utf-8")
        updated_files.append(path.as_posix())

print('updated', len(updated_files))
for p in updated_files:
    print(p)

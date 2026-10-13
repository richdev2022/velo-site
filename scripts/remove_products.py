#!/usr/bin/env python3
"""Remove non-Velo product entries from src/data/products.ts by slug.
Brace-balanced removal of each `{ ... }` object whose slug matches."""
import re
from pathlib import Path

TARGETS = {
    "invoice-management",
    "business-loans",
    "family-first",
    "property-investment",
    "safety-net",
    "community-impact",
}

p = Path("/home/z/my-project/velo-site/src/data/products.ts")
src = p.read_text()
lines = src.split("\n")
out = []
i = 0
removed = []

while i < len(lines):
    line = lines[i]
    if line.strip() == "{" and i + 1 < len(lines):
        m = re.match(r'\s*slug:\s*"([^"]+)"', lines[i + 1])
        if m and m.group(1) in TARGETS:
            # find matching closing brace for this object
            depth = 0
            j = i
            while j < len(lines):
                depth += lines[j].count("{") - lines[j].count("}")
                if depth == 0:
                    break
                j += 1
            removed.append((m.group(1), i + 1, j + 1))
            i = j + 1
            # swallow the trailing comma line? closing line is `},` already included
            continue
    out.append(line)
    i += 1

p.write_text("\n".join(out))
for slug, start, end in removed:
    print(f"removed {slug}: lines {start}-{end}")
print(f"total removed: {len(removed)}")

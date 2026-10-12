#!/usr/bin/env python3
"""
Velo dark-mode completion pass.

Adds explicit `dark:` utilities next to light-only tokens that CSS variable
overrides cannot reach (velo/navy colors are `@theme inline` literals, and
bg-white is shared with intentional white-alpha glass on dark sections).

Rules (applied per class-list string literal; each family is skipped when the
string already carries any `dark:` token of that property):
  text-navy-900            -> dark:{p}text-white
  text-velo-600            -> dark:{p}text-velo-400
  text-velo-700[/x]        -> dark:{p}text-velo-300
  text-mint-600            -> dark:text-mint-400
  text-gold-600            -> dark:text-gold-400
  bg-velo-50[/x]           -> dark:bg-velo-500/15
  from-velo-50[/x]         -> dark:from-velo-500/15
  to-velo-50[/x]           -> dark:to-velo-500/10
  border-velo-100[/x]      -> dark:{p}border-velo-400/30
  hover:border-velo-200    -> dark:hover:border-velo-400/40
  focus:ring-velo-100      -> dark:focus:ring-velo-400/25
  hover:bg-white           -> dark:hover:bg-white/10
  open:bg-white            -> dark:open:bg-white/5
  bg-white                 -> section: dark:bg-navy-950 | card: dark:bg-white/5
  bg-white/N (N>=55)       -> same classification (/5 or navy-950/90)
  to-white                 -> dark:to-navy-900
  via-white (exact)        -> dark:via-white/5
  shadow-slate-900/...     -> dark:shadow-none
"""
import re
import sys
from pathlib import Path

ROOT = Path("/home/z/my-project/velo-site/src")

P = r"(?:(hover|group-hover|open|focus|sm|md|lg|xl|2xl):)?"
FAMILIES = {
    "bg": re.compile(r"dark:(?:[\w-]+:)*bg-"),
    "text": re.compile(r"dark:(?:[\w-]+:)*text-"),
    "border": re.compile(r"dark:(?:[\w-]+:)*border-"),
    "ring": re.compile(r"dark:(?:[\w-]+:)*ring-"),
    "shadow": re.compile(r"dark:(?:[\w-]+:)*shadow-"),
    "from": re.compile(r"dark:(?:[\w-]+:)*from-"),
    "via": re.compile(r"dark:(?:[\w-]+:)*via-"),
    "to": re.compile(r"dark:(?:[\w-]+:)*to-"),
}

STRING_RE = re.compile(r'"[^"\n]*"|`[^`\n]*`')
RULES = [
    # (token regex incl optional prefix, family, replacement template {p}=prefix)
    (re.compile(P + r"text-navy-900\b"), "text", "dark:{p}text-white"),
    (re.compile(P + r"text-velo-600\b(?!/)"), "text", "dark:{p}text-velo-400"),
    (re.compile(P + r"text-velo-700\b"), "text", "dark:{p}text-velo-300"),
    (re.compile(P + r"text-mint-600\b"), "text", "dark:{p}text-mint-400"),
    (re.compile(P + r"text-gold-600\b"), "text", "dark:{p}text-gold-400"),
    (re.compile(P + r"bg-velo-50\b"), "bg", "dark:{p}bg-velo-500/15"),
    (re.compile(P + r"from-velo-50\b"), "from", "dark:{p}from-velo-500/15"),
    (re.compile(P + r"to-velo-50\b"), "to", "dark:{p}to-velo-500/10"),
    (re.compile(P + r"border-velo-100\b"), "border", "dark:{p}border-velo-400/30"),
    (re.compile(P + r"hover:border-velo-200\b"), "border", "dark:{p}hover:border-velo-400/40"),
    (re.compile(P + r"ring-velo-100\b"), "ring", "dark:{p}ring-velo-400/25"),
    (re.compile(r"\bto-white\b"), "to", "dark:to-navy-900"),
    (re.compile(r"(?<![\w/-])via-white(?![/\w-])"), "via", "dark:via-white/5"),
    (re.compile(r"\bshadow-slate-900/[\d.]+\b"), "shadow", "dark:shadow-none"),
]


def classify(s: str) -> str:
    """Decide dark surface for plain opaque bg-white tokens."""
    if re.search(r"\b(?:sm:|md:|lg:)?py-(?:1[0-9]|[2-9]\d)\b", s) and "rounded-" not in s:
        return "section"
    if s.strip() == "bg-white":
        return "section"
    if re.search(r"\b(rounded-|border-|p-\d|px-\d|py-\d)", s):
        return "card"
    return "section"


def process_string(s: str) -> str:
    # operate INSIDE the quote marks so additions land within className="..."
    quote = s[0] if len(s) >= 2 and s[0] == s[-1] and s[0] in "\"`" else ""
    inner = s[1:-1] if quote else s

    if not any(k in inner for k in ("bg-", "text-", "border-", "rounded-", "shadow-", "ring-", "from-", "via-", "to-")):
        return s
    has = {f: bool(rx.search(inner)) for f, rx in FAMILIES.items()}
    additions: list[str] = []

    for rx, fam, tmpl in RULES:
        if has[fam]:
            continue
        for m in rx.finditer(inner):
            groups = m.groups()
            prefix = (groups[0] if groups else None) or ""
            tok = tmpl.format(p=prefix + ":" if prefix else "")
            if tok not in inner and tok not in additions:
                additions.append(tok)

    # plain/hover/open bg-white handling
    if not has["bg"]:
        for m in re.finditer(r"(?<![\w/-])(hover:|open:)?bg-white(?:/(\d+))?(?![\w.-])", inner):
            prefix, n = m.group(1), m.group(2)
            if prefix == "hover:":
                tok = "dark:hover:bg-white/10"
            elif prefix == "open:":
                tok = "dark:open:bg-white/5"
            elif n is not None and int(n) < 55:
                continue  # intentional white-alpha glass
            else:
                kind = classify(inner)
                if n is None and kind == "card":
                    tok = "dark:bg-white/5"
                elif n is None:
                    tok = "dark:bg-navy-950"
                else:
                    tok = "dark:bg-white/5" if kind == "card" else "dark:bg-navy-950/90"
            if tok not in inner and tok not in additions:
                additions.append(tok)

    if not additions:
        return s
    return quote + inner + " " + " ".join(additions) + quote


def process_line(line: str) -> str:
    if line.lstrip().startswith(("//", "*", "/*")):
        return line
    return STRING_RE.sub(lambda m: process_string(m.group(0)), line)


def main() -> None:
    total = 0
    files_changed = 0
    for path in sorted(ROOT.rglob("*.tsx")):
        src = path.read_text()
        out_lines = []
        changed = 0
        for line in src.split("\n"):
            new = process_line(line)
            if new != line:
                changed += 1
            out_lines.append(new)
        if changed:
            path.write_text("\n".join(out_lines))
            total += changed
            files_changed += 1
            print(f"{changed:3d}  {path.relative_to(ROOT.parent)}")
    print(f"\n{total} lines updated across {files_changed} files")


if __name__ == "__main__":
    sys.exit(main())

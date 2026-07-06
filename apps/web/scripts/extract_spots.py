#!/usr/bin/env python3
"""
extract_spots — pull ink spot-drawings off a painted background when the
model ignores the transparent-background instruction.

Method: estimate the background as a heavy gaussian blur of the sheet
(the background dominates every neighborhood at radius 60), take the
per-pixel max-channel difference from that estimate, and map it to alpha
with a soft ramp. Then split into quadrants, trim transparent margins,
and write one RGBA PNG per spot.

Usage: python3 scripts/extract_spots.py <sheet.png> <outdir> [names,csv]
"""
import sys
from pathlib import Path

from PIL import Image, ImageFilter


def main() -> None:
    src = Path(sys.argv[1])
    outdir = Path(sys.argv[2])
    names = (sys.argv[3].split(",") if len(sys.argv) > 3 else ["a", "b", "c", "d"])
    outdir.mkdir(parents=True, exist_ok=True)

    rgb = Image.open(src).convert("RGB")
    bg = rgb.filter(ImageFilter.GaussianBlur(60))
    w, h = rgb.size
    px, bp = rgb.load(), bg.load()

    out = Image.new("RGBA", (w, h))
    op = out.load()
    LO, HI = 10, 42  # alpha ramp on max-channel diff
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            br, bgg, bb = bp[x, y]
            d = max(abs(r - br), abs(g - bgg), abs(b - bb))
            if d <= LO:
                a = 0
            elif d >= HI:
                a = 255
            else:
                a = round(255 * (d - LO) / (HI - LO))
            op[x, y] = (r, g, b, a)

    quads = [
        (0, 0, w // 2, h // 2),
        (w // 2, 0, w, h // 2),
        (0, h // 2, w // 2, h),
        (w // 2, h // 2, w, h),
    ]
    for name, box in zip(names, quads):
        q = out.crop(box)
        bbox = q.getbbox()  # trims fully-transparent margins
        if bbox:
            q = q.crop(bbox)
        f = outdir / f"spot-{name}.png"
        q.save(f)
        print(f, q.size)


if __name__ == "__main__":
    main()

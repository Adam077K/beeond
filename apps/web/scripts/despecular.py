#!/usr/bin/env python3
"""
despecular — remove glossy white specular highlights from HONEY cells in
Field Journal art (the image model insists on candy-gloss; the brand wants
matte gouache). Surgical, hue-aware:

A pixel is repainted only if BOTH
  (a) it is markedly brighter than its neighborhood, and
  (b) the surrounding ring's median color is honey-yellow (high R/G, low B).
Letter counters (ink ring), empty cells (pale paper ring) and paper are never
touched. Runs two passes to catch the soft halo around each gloss core.

Usage: python3 scripts/despecular.py <in.png> [<out.png>]
Default out: <in>-matte.png
"""
import sys
from pathlib import Path
from statistics import median

from PIL import Image


def ring_median(px, w, h, x, y, r):
    ring = []
    for dx in range(-r, r + 1, 2):
        for dy in range(-r, r + 1, 2):
            if max(abs(dx), abs(dy)) < r - 2:
                continue
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h:
                ring.append(px[nx, ny])
    if not ring:
        return None
    return tuple(int(median(c[i] for c in ring)) for i in range(3))


def is_honey(c) -> bool:
    r, g, b = c
    return r > 190 and g > 130 and b < 150 and (r - b) > 60 and (g - b) > 30


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    src = Path(args[0])
    out = Path(args[1]) if len(args) > 1 else src.with_name(src.stem + "-matte.png")

    im = Image.open(src).convert("RGB")
    w, h = im.size
    px = im.load()

    total = 0
    for _pass in range(2):
        changed = []
        for y in range(2, h - 2):
            for x in range(2, w - 2):
                p = px[x, y]
                if min(p) < 190:  # not bright enough to be gloss
                    continue
                rm = ring_median(px, w, h, x, y, 14)
                if rm is None or not is_honey(rm):
                    continue
                if min(p) - min(rm) > 18 or (p[2] - rm[2]) > 30:
                    changed.append((x, y, rm))
        for x, y, rm in changed:
            px[x, y] = rm
        total += len(changed)
        if not changed:
            break

    print(f"repainted {total} px")
    im.save(out)
    print(out)


if __name__ == "__main__":
    main()

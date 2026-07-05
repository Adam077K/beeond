#!/usr/bin/env python3
"""
normalize_paper — white-balance a Field Journal PNG so its paper hits the
brand ground token exactly (#FAF9F5), making the image edge invisible on-page.

Method: measure per-channel paper white as the 95th-percentile value inside a
border band (paper is the brightest, dominant region at every edge by prompt
design), then scale each channel so paper -> target. Scale-only mapping keeps
ink near-black intact; watercolor hues shift slightly *away* from sepia, which
is the direction we want.

Usage:
  python3 scripts/normalize_paper.py <in.png> [<out.png>] [--target FAF9F5]
If <out.png> is omitted: writes <in>-norm.png next to the input.
"""
import sys
from pathlib import Path

from PIL import Image


def paper_white(im: Image.Image, band: int = 48) -> tuple[int, int, int]:
    rgb = im.convert("RGB")
    w, h = rgb.size
    px = rgb.load()
    samples = []
    for x in range(0, w, 4):
        for y in list(range(0, min(band, h), 4)) + list(range(max(0, h - band), h, 4)):
            samples.append(px[x, y])
    for y in range(0, h, 4):
        for x in list(range(0, min(band, w), 4)) + list(range(max(0, w - band), w, 4)):
            samples.append(px[x, y])
    chans = []
    for i in range(3):
        vals = sorted(s[i] for s in samples)
        chans.append(vals[int(len(vals) * 0.95)])
    return tuple(chans)


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    target_hex = "FAF9F5"
    if "--target" in sys.argv:
        target_hex = sys.argv[sys.argv.index("--target") + 1].lstrip("#")
    target = tuple(int(target_hex[i : i + 2], 16) for i in (0, 2, 4))

    src = Path(args[0])
    out = Path(args[1]) if len(args) > 1 else src.with_name(src.stem + "-norm.png")

    im = Image.open(src)
    alpha = im.split()[3] if im.mode == "RGBA" else None
    rgb = im.convert("RGB")

    white = paper_white(rgb)
    scale = [t / max(w, 1) for t, w in zip(target, white)]
    lut = []
    for c in range(3):
        lut.extend(min(255, round(v * scale[c])) for v in range(256))
    balanced = rgb.point(lut)

    if alpha is not None:
        balanced.putalpha(alpha)
    balanced.save(out)

    check = paper_white(balanced.convert("RGB"))
    print(f"paper {white} -> {check} (target {target})")
    print(out)


if __name__ == "__main__":
    main()

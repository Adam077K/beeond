#!/usr/bin/env python3
"""
flatten_paper — after normalize_paper, push every near-paper pixel to the
EXACT ground token so paper texture/vignette vanish and the image edge is
truly invisible on-page. Ink and watercolor stay untouched: only pixels
within a tolerance of paper white are flattened, with a smooth blend band
so wash edges keep their feather.

Usage:
  python3 scripts/flatten_paper.py <in.png> [<out.png>] [--target FAF9F5]
     [--hard 14] [--soft 46]
  --hard: max distance-below-paper flattened fully (default 14)
  --soft: distance where blending ends (default 46)
"""
import sys
from pathlib import Path

from PIL import Image


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    argv = sys.argv

    def opt(name, default):
        return argv[argv.index(name) + 1] if name in argv else default

    target_hex = str(opt("--target", "FAF9F5")).lstrip("#")
    target = tuple(int(target_hex[i : i + 2], 16) for i in (0, 2, 4))
    hard = int(opt("--hard", 14))
    soft = int(opt("--soft", 46))

    src = Path(args[0])
    out = Path(args[1]) if len(args) > 1 else src.with_name(src.stem + "-flat.png")

    im = Image.open(src)
    alpha = im.split()[3] if im.mode == "RGBA" else None
    rgb = im.convert("RGB")
    px = rgb.load()
    w, h = rgb.size

    flattened = 0
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            # distance below paper, dominated by the darkest channel deficit
            d = max(target[0] - r, target[1] - g, target[2] - b, 0)
            if d <= hard:
                px[x, y] = target
                flattened += 1
            elif d < soft:
                t = (d - hard) / (soft - hard)  # 0 → paper, 1 → keep
                px[x, y] = (
                    round(target[0] + (r - target[0]) * t),
                    round(target[1] + (g - target[1]) * t),
                    round(target[2] + (b - target[2]) * t),
                )

    if alpha is not None:
        rgb.putalpha(alpha)
    rgb.save(out)
    print(f"flattened {flattened}/{w*h} px to {target}")
    print(out)


if __name__ == "__main__":
    main()

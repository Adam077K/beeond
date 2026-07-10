# Visual Generation — OpenAI Image Pipeline + Spend Guardrails

*How the site's art gets made without looking generic or blowing budget. The method survives the clean-slate reboot; the v6 ink *style* does not.*

---

## The core principle (learned the hard way on v4–v6)

**Beg the model for composition; enforce brand with code.** The image model drifts on color, paper tone, gloss, and scale — every time. So we never trust it for brand fidelity. We generate opaque art for *composition and idea*, then fix brand deterministically in post-processing.

```
  GENERATE (gpt-image-1)  →  DETERMINISTIC BRAND POST-PROCESS  →  INTEGRATE
  composition only            code fixes color/paper/gloss/scale    webp in public/art
```

This is why every v6 asset hit brand `#FAF9F5` exactly and passed a11y — not because the prompt asked nicely, but because `normalize_paper.py` / `flatten_paper.py` forced it after the fact.

---

## The proven pipeline (reuse it)

Scripts already exist and work — reuse, don't reinvent:

- `scripts/generate-art.mjs` — calls `gpt-image-1` directly (founder's OpenAI key). Prompts are the source of truth, committed.
- `scripts/normalize_paper.py` — white-balances the art's paper to ground `#FAF9F5`.
- `scripts/flatten_paper.py` — flattens near-paper pixels to the exact ground token (kills seams, no masks).
- `scripts/despecular.py` — hue-aware removal of glossy highlights.
- `scripts/extract_spots.py` — alpha-keys a multi-spot sheet into transparent per-asset PNGs.
- Output → `public/art/*.webp`, consumed by React art components.

**For v7:** the *style* the prompts target changes completely (no field-journal ink). But the generate→normalize→flatten→integrate machinery is identical. New style = new prompts + possibly new post-process constants (e.g. if the new look uses yellow fields, extend `despecular`/add a yellow-clamp so honey lands on `#FFDB5B`).

---

## When to generate vs. when NOT to

The reference sites teach restraint. **Oriol uses zero imagery** — type + color triad *is* the art. **Jasper** uses a tight illustration system. Decide per-direction (Session B):

- If the chosen direction is **Editorial-restraint (C)** → generate *very little*. The art budget is near-zero; the craft is typographic. Cheapest + best perf + best a11y.
- If **Swarm (A)** or **Comb-grid (B)** → the signature device may be **code/SVG/canvas, not raster** (a particle system or an SVG hex grid is sharper, lighter, animatable, and a11y-friendlier than a generated PNG). Prefer generated raster only for *hero showpiece stills / textures / concept moments*, not for UI.

**Rule:** never ship a generated raster where SVG/CSS/canvas would be crisper and lighter. Generated art is for warmth, texture, and hero moments — not for structure, icons, or anything that must scale/animate.

---

## Spend guardrails (founder: "watch the spend")

| Phase | What | Budget posture |
|-------|------|----------------|
| **Session B — concept probes** | 2–3 boards × 3 directions (Swarm/Comb/Editorial) | Low count, standard res. This is a *decision aid*, not final art. Cap: ~9–15 images total. Stop as soon as the founder can choose. |
| **Session C — final assets** | Only the hero showpiece + any texture the chosen direction truly needs | Generate once. Curate hard. Regenerate **only for composition**, never to "fix" color (post-process does that for free). Cap: small — most directions need ≤ 5 final raster assets; Editorial needs ~0. |

**Hard rules:**
- Never loop the generator to chase brand color — that's a deterministic post-process, $0.
- Batch a prompt's variations in one run; pick one; stop.
- Cache everything; committed art is regenerable from committed prompts, so we don't re-spend to reproduce.
- Log every generation batch (count + purpose) so spend is auditable. Concept and final art both get one line in the session file.
- If a direction can be done in SVG/CSS/canvas, **do that instead** — it's free, sharper, animatable, and on-gate.

---

## Prompt system (for whichever direction wins)

Each asset gets a committed prompt with these locked constraints, regardless of style:
- **Palette:** target cream `#FAF9F5` ground, `ink #141413`, honey `#FFDB5B` accents — *and* rely on post-process to force exact values (don't trust the model's hex).
- **No lettering** baked into art (text is SSR/HTML for a11y + i18n; art never carries load-bearing copy).
- **No stock-photo realism, no generic gradients, no AI-slop tells** — the whole point is anti-generic.
- **Opaque background** for large pieces (transparent only for small sprites — the v6 lesson: transparent large art gets sticker-halos).
- Scale/proportion called out explicitly (the model ignores scale at hero sizes — decompose + composite if needed, as v6 did with bee sprites).

Session B stages these prompts in `SPEC.md`; Session C runs them.

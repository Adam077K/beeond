# Contrast — every pair, computed

> GENERATED — do not edit, run `npm run build:tokens`.
> Source: `design/tokens/seeds.json`. WCAG 2.x relative-luminance ratio, rounded to 3dp.

**Computed:** 2026-08-30

Every figure below is recomputed on every run. `mission-control/client/src/styles.css` records what happens otherwise: its contrast figures were "all re-measured on 2026-08-13 after review found every one of them wrong — by 0.06 to 0.3, in both directions". A generator cannot carry a figure forward.

**The AA and AAA columns apply to TEXT** (WCAG SC 1.4.3, 4.5:1 · SC 1.4.6, 7:1, normal weight). For a pair of surfaces the ratio is the wrong metric entirely — contrast ratio is defined for legibility, and comparing a 1px rule to a full-row fill is a category error. The `note` column says which kind each row is; read it before reading the verdict.

| fg | bg | fg hex | bg hex | ratio | AA | AAA | note |
|---|---|---|---|---|---|---|---|
| `chapter-light-ink` | `chapter-light-ground` | `#141614` | `#f0ede6` | **15.556:1** | pass | pass | Body copy, light chapters. DESIGN-LANGUAGE.md target: AAA. No ratio is restated in any note here — the generated column is the only figure, because a carried figure is how the previous system's contrast table came to be wrong in both directions. |
| `chapter-dark-ink` | `chapter-dark-ground` | `#efede7` | `#000000` | **17.938:1** | pass | pass | Body copy, dark chapters, on true black. DESIGN-LANGUAGE.md target: AAA. True black is load-bearing, not a style choice: the ground showing through between marks is the mechanism of every glyph and dot treatment. |
| `chapter-light-muted` | `chapter-light-ground` | `#5e625c` | `#f0ede6` | **5.318:1** | pass | fail | Secondary text, light chapters. DESIGN-LANGUAGE.md target: AA. The lowest-contrast thing allowed to carry meaning in a light chapter. |
| `chapter-dark-muted` | `chapter-dark-ground` | `#8e938c` | `#000000` | **6.702:1** | pass | fail | Secondary text, dark chapters. DESIGN-LANGUAGE.md target: AA. The lowest-contrast thing allowed to carry meaning in a dark chapter. |
| `chapter-light-accent` | `chapter-light-ground` | `#1f4d3d` | `#f0ede6` | **8.212:1** | pass | pass | Accent as text on the light ground — deep pine on warm bone. DESIGN-LANGUAGE.md target: AAA. The accent appears only on the primary CTA, at most twice per page. |
| `chapter-dark-accent` | `chapter-dark-ground` | `#57b295` | `#000000` | **8.207:1** | pass | pass | Accent as text on the dark ground — pine tint on true black. DESIGN-LANGUAGE.md target: AAA. Same role as the row above, different chapter, different hex. |
| `chapter-light-ground` | `chapter-light-accent` | `#f0ede6` | `#1f4d3d` | **8.212:1** | pass | pass | CTA fill, light chapters: warm bone knocked out of deep pine. DESIGN-LANGUAGE.md target: AAA. This is the pair above inverted, and it is listed separately because a fill and a text colour are different jobs even at the same ratio. |
| `chapter-dark-ground` | `chapter-dark-accent` | `#000000` | `#57b295` | **8.207:1** | pass | pass | CTA fill, dark chapters: true black knocked out of pine tint. DESIGN-LANGUAGE.md target: AAA. |
| `chapter-dark-accent` | `chapter-light-ground` | `#57b295` | `#f0ede6` | **2.188:1** | fail | fail | REFUSAL, NOT A TARGET. The dark-chapter accent on the light ground. This row exists to FAIL and a pass here is the alarm: it would mean one of the two accents has been changed. DESIGN-LANGUAGE.md states this as the hard rule: the two accents are not interchangeable, so ship them bound to the chapter and never as one. The schema has no field for an expected failure — this note is the only channel. |
| `chapter-light-accent` | `chapter-dark-ground` | `#1f4d3d` | `#000000` | **2.187:1** | fail | fail | REFUSAL, NOT A TARGET. The light-chapter accent on the dark ground — the mirror of the row above, equally true and unwritten: DESIGN-LANGUAGE.md documents only the first direction. Encoding both is the point of a generated table. This row exists to FAIL and a pass here is the alarm. |
| `chapter-light-rule` | `chapter-light-ground` | `#dcd8cf` | `#f0ede6` | **1.216:1** | fail | fail | SURFACE PAIR, deliberately below the text threshold. The hairline that exposes the column grid in light chapters. DESIGN-LANGUAGE.md: hairlines are decorative structure, never interactive, never carrying information — so a text ratio is the wrong metric and a fail is the intended reading. Never a focus ring, never a control border. |
| `chapter-dark-rule` | `chapter-dark-ground` | `#242624` | `#000000` | **1.378:1** | fail | fail | SURFACE PAIR, deliberately below the text threshold. The hairline that exposes the column grid in dark chapters. Same rule as the row above: decorative structure only, and a fail is the intended reading. |

12 pair(s) over 12 colour(s).

# Measurement fixtures — NOT beeond's design references

*Ported from agentvibe 2026-08-30, with the design toolchain in `scripts/`.*

**If you arrived here looking for what beeond should look like, you are in the wrong
directory.** That is `docs/05-marketing/references/`, and the decision it feeds is
`docs/05-marketing/DESIGN-LANGUAGE.md`. This directory cannot answer that question and must
never be cited as though it could.

## What this is

Computed styles and geometry read off five public websites by
`scripts/extract-reference.mjs` on 2026-08-29, at 1440x900, logged out, after checking each
site's `/robots.txt`:

| Directory | Site | Surface | Captured | Expires |
|---|---|---|---|---|
| `linear-app/` | linear.app | marketing | 2026-08-29 | 2026-11-27 |
| `stripe-com/` | stripe.com | marketing | 2026-08-29 | 2026-11-27 |
| `docs-stripe-com/` | docs.stripe.com | docs | 2026-08-29 | 2026-11-27 |
| `vercel-com/` | vercel.com | marketing | 2026-08-29 | 2026-11-27 |
| `play-grafana-org/` | play.grafana.org | product | 2026-08-29 | 2026-11-27 |

Each carries `SOURCE.yml` (provenance and licence note), `measured.json` (the capture:
`type`, `colour`, `spacing`), and `seeds.suggestion.json`. All sixteen files are
byte-identical to agentvibe's, deliberately — a fixture that drifts between repositories
stops being a fixture.

## What this is NOT

**These are facts about renderings. They are not art direction, and nothing here is a design
decision for beeond.** That linear.app steps its display sizes by +16px is a measurement of
linear.app. It is not a recommendation, not a precedent, and not an argument that beeond
should do the same. No hex, spacing value or size in this directory has any authority over
the beeond site.

**beeond's art direction is LOCKED and it lives elsewhere.** `DESIGN-LANGUAGE.md` Layer 1 is
founder-approved: the system is neutral, photography owns colour, exactly one accent, on the
primary CTA only. `design/tokens/seeds.json` carries those hexes across unchanged — "not one
hex here was adjusted, rounded or reinterpreted." **Nothing in this directory may modify that,
and no colour in these captures is a candidate for anything.**

**The trap is specific, so here it is by name.** `docs/05-marketing/references/` holds
`board-2-linear.png` and `board-8-stripe.png`. This directory holds `linear-app/` and
`stripe-com/`. **Same two companies, two completely different roles**: over there they are
craft references a human chose to look at; here they are numeric fixtures a test suite reads.
Citing a measurement from this directory as though it were a board from that one is the exact
confusion this file exists to prevent.

This matters because beeond has already been burned by it. A prior session found a phantom
third brand system hardcoded across 27 agent files, and `docs/05-marketing/references/README.md`
carries its own decontamination warning for the same reason: **an unlabelled folder of other
companies' design data is how a direction nobody approved gets into the product.** Also note
what is NOT here — `docs/05-marketing/references/negative-*.png`, the anti-slop set. This
corpus has no opinion about quality at all.

## What they ARE for

Two jobs, both mechanical:

1. **The corpus the type-ramp derivation cites.** `design/tokens/seeds.json` states that its
   type is "DERIVED by arithmetic ... and measured against agentvibe's `design/references/`
   corpus", and its derivation cites these files specifically — vercel.com's measured +2
   marketing increment, the five UI sizes appearing in stripe.com's measured band, the modal
   +16 display increment across linear.app and stripe.com. Those citations resolve to this
   directory. *(That `$comment` says "agentvibe's" because it was written before this port; the
   corpus is now local. Whoever next edits `seeds.json` should reword it — this README is not
   the place to fix another file's prose.)*
2. **The fixture the refusal-message tests read.** `scripts/build-tokens.test.mjs` and
   `scripts/extract-reference.test.mjs` check that the generator's refusals quote figures
   **read from `measured.json`, not typed by an author.** With this directory empty those tests
   do not pass vacuously — they refuse, with `CONTROL: only 0 reference(s) in the corpus — the
   citation proves little`. That refusal is the feature. If you are tempted to delete this
   corpus, ten tests will start declining to render a verdict, which is the correct alarm.

`design/rules/type-scale.rules.json` is held against this corpus by
`node scripts/extract-reference.mjs --against design/rules/type-scale.rules.json --refs design/references`.

## Licence posture

Quoting `SOURCE.yml`, which is the authority and travels with each capture:

> Computed styles and geometry only, read from a logged-out page load after checking
> `/robots.txt`. No page content, markup, images or text is reproduced or redistributed.
> Measurements are facts about a rendering, not a copy of the work. Re-check robots.txt and
> the site terms before any re-capture: the risk that bites is contract, not the CFAA.

Every capture carries `expires: 2026-11-27`. A measurement of a live site is a claim with a
shelf life; past that date, re-capture or stop citing it.

## Related

| Path | What |
|---|---|
| `docs/05-marketing/DESIGN-LANGUAGE.md` | **The locked direction.** Layer 1 is founder-approved |
| `docs/05-marketing/references/` | **beeond's actual references** — 12 boards, the 4-image anti-slop set, `site-captures/`, and `founder-brain/` (106 images across `branding-feeling/`, `landing-page/`, `logo/`, with seven briefs) |
| `design/tokens/seeds.json` | The only hand-edited file in `design/tokens/`; cites this corpus for type |
| `scripts/extract-reference.mjs` | What captured these, and what re-captures them |

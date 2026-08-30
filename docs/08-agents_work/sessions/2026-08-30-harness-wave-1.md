---
date: 2026-08-30
role: builder
task: harness-wave-1-design-instruments
qa_verdict: PASS
tier: lite
branch: feat/harness-wave-1
source: agentvibe @ 173cc66
---
# Wave 1 — the design instruments

**Exit criterion MET:** `node scripts/build-tokens.mjs --check` exits **0**. beeond has a generated token
set for the first time. Rollback point: tag `pre-harness-port-2026-08-30`.

## What landed

Four scripts + four test files from agentvibe `scripts/`, per-file npm test invocations (agentvibe's
bundles were split — `test:probe-readonly` there also runs an unrelated sandbox tripwire). A root
`scripts` block in `package.json`, which had none. `design/tokens/seeds.json` **authored** from
`docs/05-marketing/DESIGN-LANGUAGE.md` Layer 1, and `tokens.json` · `tokens.css` · `tokens.ts` ·
`contrast.md` **generated** from it. The five-site measurement corpus, labelled — see
`design/references/README.md`.

Colour is **carried unchanged**: twelve hexes byte-identical to the locked language. Type is **derived**:
UI 12/14/16/18/20 (+2), display 32/48/64 (+16), join ratio 1.6. Contrast is **computed** on every run.

## The finding that justifies the wave

`contrast.md` carries **both** cross-chapter accent failures. `DESIGN-LANGUAGE.md` documents one —
`#57B295` on bone at 2.19:1. The mirror, `#1F4D3D` on true black, is **2.187:1** and appears in no
document. It is forced by arithmetic: both accents were tuned to ~8.21:1 against their own ground and the
grounds sit at the luminance extremes. A generated table emits both rows; a hand-written one emitted one.

## Test state — 211 pass · 7 fail · 1 skipped, against a 219 · 0 · 0 control

| File | beeond | agentvibe control |
|---|---|---|
| `design-lib` | 17 · 0 | 17 · 0 — MATCH |
| `extract-reference` | 61 · 0 | 61 · 0 — MATCH |
| `build-tokens` | 44 · 7 | 51 · 0 |
| `design-probe` | 89 · 0 · **1 skipped** | 90 · 0 · 0 |

**None is a defect in beeond, and none was silenced.** Three distinct coupling layers, only the
first of which the pre-port dependency analysis found:

1. **Scripts → nothing.** Confirmed clean. Zero npm dependencies, no `.claude/` or ledger coupling.
2. **Tests → the reference corpus.** Fixed by porting it. Recovered 9 failures, including all 4 in
   `extract-reference`. Before the corpus these tests *refused* rather than passing —
   `only 0 reference(s) in the corpus — the citation proves little`.
3. **Tests → the host project's own `seeds.json` (7 remaining, `build-tokens`).** NOT fixed. These build
   fixtures from the live seeds file, so they encode agentvibe's 11–15px control-plane band as a premise.
   beeond's band is 12–20px for prose, so e.g. *"a band that closes the gap to 20px was accepted"* tests a
   rule beeond's seeds legitimately do not violate. Several fail with `CONTROL: … this test proves
   nothing` — **they detect their own vacuity and refuse.** Correct behaviour, non-portable premise.
4. **One test → `mission-control/` (`design-probe`) — RESOLVED as a skip with a reason.** It re-derives
   a census from `mission-control/client/src`, which exists only in agentvibe, and it used to throw
   `ENOENT` — reading as a broken test rather than an absent subject. Only that arm is guarded; the
   portable arithmetic arm above it still runs and is the assertion that caught the 44-vs-45 fixture
   drift. **Verified in both directions on the same file: beeond 89 pass · 1 skipped, agentvibe 90 pass ·
   0 skipped.** A skip is not a pass, and the guard must never be satisfied by creating the directory.

**The fix for 3 and 4 belongs in agentvibe, not here** — a pinned test fixture instead of the live seeds
file. Patching beeond's copy alone would create two divergent implementations of one test suite, which is
a failure this system has already paid for.

## The portability defect is FIXED in the port, and proven in two cells

agentvibe's suite scores 48 of 48 with `TMPDIR` at a session scratchpad and 26 of 48 at the macOS
default, on identical bytes, because test fixtures are based at the ambient temp dir which the sandbox
denies. **Four live `os.tmpdir()` call sites were rewritten to base fixtures at the repo root during the
port** (7 occurrences in the source files → 3 here, and all 3 remaining are inside the comments that
explain the change; zero live call sites remain).

Verified by running every file in both cells rather than by reading the diff:

| File | `TMPDIR=/tmp/claude-501` | `TMPDIR=$(getconf DARWIN_USER_TEMP_DIR)` | |
|---|---|---|---|
| `design-lib` | 17 · 0 | 17 · 0 | identical |
| `build-tokens` | 44 · 7 | 44 · 7 | identical |
| `design-probe` | 89 · 0 | 89 · 0 | identical |
| `extract-reference` | 61 · 0 | 61 · 0 | identical |

The score no longer depends on an environment variable nobody sets deliberately. **This fix should be
back-ported to agentvibe**, where 37 files still carry the defect — the four here are the proof that the
repo-root pattern works.

## Three defects found IN AGENTVIBE by this port

1. **Unknown seed keys are accepted silently and emit nothing.** Proven, not inferred: a seeds copy
   carrying `motion: {duration, easing}` was accepted without refusal and produced zero output in all four
   artifacts. There is no unknown-key allowlist. Same class as the CI-parser hole closed in #114 —
   *declare what you read, refuse the rest* — applied there and not here.
2. **A serif family key is worse than absent.** `type.family` is read as `{sans, mono}` only. A serif key
   is carried into `tokens.json`'s `$extensions` while emitting nothing in CSS or TS, so a reader of the
   token file concludes the display face is bound when no stylesheet has it.
3. **The test suite is coupled to the host's design data** (points 3 and 4 above).

## Consequence to carry into G3/G4

**Instrument Serif has no slot.** The display band 32/48/64 inherits `--font-sans` (Schibsted Grotesk)
under these tokens alone. The display face must be bound at the component layer until the generator grows
a third family slot. This is a live constraint on the build, not a note.

**Not encoded, each named rather than approximated:** motion (asymmetric easing, 150–200ms — no group
exists), radius and gutter (no spacing group), the 65-character measure (a container width, not a type
token), uppercase-label letter-spacing (bound to case, not size), and "no bold" on display (no weight
axis).

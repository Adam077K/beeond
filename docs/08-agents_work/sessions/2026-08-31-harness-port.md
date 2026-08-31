---
date: 2026-08-31
role: orchestrator
task: harness-port-waves-1-6
qa_verdict: PASS
tier: irreversible
risk: irreversible
branch: feat/harness-wave-1
source: agentvibe @ 56fa9e4
---
# The harness port — six waves

Installed by `bin/fleet-install.mjs`. Provenance in `.harness-version`; verify with
`node bin/fleet-install.mjs --target <this repo> --verify` from agentvibe.

**Acceptance, measured 2026-08-31:**

```
fleet-install --verify   41 in sync · 14 localized · 0 drifted · 0 behind   exit 0
npm run check            8 of 8 passed · 0 failed · every step ran          exit 0
schema-lint              33 pass · 0 fail · 0 warnings                      exit 0
ledger lint              clean                                             exit 0
```

## What arrived

The four design instruments and beeond's first generated token set; a check runner and
**beeond's first CI**; the lenses, six playbooks and gates; the claim ledger, classifier and
verdict binding; two-tier skill discovery generated from beeond's own 147 skills; and seven
engines replacing 26 C-suite roles, each retired name kept as a shim.

## The claim this session earned

`DESIGN-LANGUAGE.md` documents one cross-chapter accent failure — `#57B295` on bone at
2.19:1 — and warns that the two accents are not interchangeable. **The mirror is equally
true and was written down nowhere:** `#1F4D3D` on true black is also 2.19:1. It is forced by
arithmetic, both accents having been tuned to ~8.21:1 against their own ground while the
grounds sit at the luminance extremes.

A generated table emits both rows. A hand-written one emitted one.

```claims
claims:
  - id: c-accent-refusals-are-symmetric
    assert: "Both cross-chapter accent pairs are carried as refusals in the generated contrast table, not only the one the design language documents"
    kind: internal-fact
    scope: project
    verified_by: command
    evidence: {cmd: "test $(grep -c 'REFUSAL, NOT A TARGET' design/tokens/contrast.md) -eq 2", expect_exit: 0}
    valid_until: 2027-08-31
    confidence: 0.99
```

## What is deliberately not true here

`schema-lint` passes 33 files, but **beeond's `STEPS` does not run it** — `lint:agents` is not
a step. The ledger is installed and `verify` is invoked by nothing. Several ported files carry
`POSTURE:` headers rewritten to say so, because agentvibe's originals claim enforcement that
does not exist in this repository.

Two steps are `EXCLUDED` with reasons: `test:check-suite` and `test:protected-write`, whose
non-vacuity floors are sized to agentvibe's 48-step suite. Excluding the first takes this
repository's own drift guard offline; its entry says so in its first line. Both name the
condition for removal.

`docs/07-history/**` and `.claude/memory/DECISIONS_ARCHIVE.md` still describe the three-layer
C-suite topology, unchanged and deliberately. A record of what was decided cannot drift.

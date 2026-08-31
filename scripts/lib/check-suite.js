'use strict';
// POSTURE: library. `scripts/run-checks.mjs` is its runner and IS `npm run check`;
// `scripts/check-suite.test.mjs` is its drift guard, and `.github/workflows/ci.yml` runs every
// STEP below as a step of its own.
//
// scripts/lib/check-suite.js — THE step list for `npm run check`, and the reachability rule that
// keeps package.json from drifting away from it.
//
// ── WHY THIS FILE IS AUTHORED HERE AND NOT COPIED ────────────────────────────────────────────
// The machinery below this header — scriptGraph, resolveChain, shellOperators, parseCiSteps,
// auditSuite and the rest — is byte-identical to agentvibe's, deliberately: it is generic library
// code and scripts/check-suite.test.mjs is its mutation gate. STEPS, EXCLUDED and
// CI_CHAINS_ALLOWED are NOT copied, because a step list describes ONE repository. bin/fleet-install
// refused to copy this file for that reason and it was right to: agentvibe's STEPS names
// `check:mc`, `test:sandbox`, `lint:agents` and 45 more, and every one of them would have been a
// step of beeond's suite naming a script beeond does not have.
//
// THE COMMENTS INSIDE THAT MACHINERY STILL NAME agentvibe's SCRIPTS — `check:mc`, `check:ledger`,
// `lint:agents`, `mission-control` — and they are kept verbatim ON PURPOSE. Every one is past
// tense about a defect that shaped the code beside it, and each is the evidence for why a branch
// exists; rewriting them into beeond's vocabulary would invent a history beeond does not have and
// delete the one it inherited. Read them as provenance. NOTHING BELOW THIS HEADER MAKES A CLAIM
// ABOUT beeond's TREE — the claims about beeond are STEPS, EXCLUDED and CI_CHAINS_ALLOWED, all
// three of which are above the machinery and all three of which auditSuite() enforces.
//
// ── WHY THE SHAPE IS WORTH KEEPING ───────────────────────────────────────────────────────────
// agentvibe's suite was a thirty-link `&&` chain inside package.json's `check` string. `&&` stops
// at the first non-zero exit, so a failing step 21 silently skipped steps 22 through 30 — every
// safety-hook test and the tests for the gate itself — while the output reported one failure. Two
// things live in this one file so that neither can drift from the other:
//
//     STEPS     the ordered suite. The ONE list. package.json's `check` is just the runner.
//     EXCLUDED  the governed scripts deliberately left out, each with a reason a human wrote.
//
// auditSuite() is what makes them binding: a `check:`/`test:`/`lint:`/`verify:`/`audit:` script
// that is reachable from neither is a FAILURE, so a check cannot be added to this repository and
// silently left unrun.
//
// ── WHAT THE REACHABILITY RULE CANNOT DO ─────────────────────────────────────────────────────
// `reachable()` finds `npm run <name>` inside script command strings, transitively. A script
// invoked by any other spelling — npm-run-all, a shell loop, or a `node scripts/x.mjs` that
// shells out on its own — is invisible to it and will be reported UNREACHABLE even though
// something runs it. That is the safe direction to be wrong in: the fix is an EXCLUDED entry
// with a reason a human wrote, not a pass granted to something nobody runs.
//
// It also cannot tell you a step is worth running, that its ordering is right, or that it
// asserts anything. It checks wiring, not value.
//
// ── WHAT IS NOT GOVERNED HERE, STATED SO ITS ABSENCE IS NOT READ AS COVERAGE ─────────────────
// `apps/web` is a separate package with its own package.json, its own pnpm lockfile and its own
// `lint` script. Nothing in this file reaches it: auditSuite() reads the ROOT package.json only,
// so `apps/web`'s scripts are neither STEPS nor EXCLUDED — they are outside the guard entirely.
// That is a real gap and it is written down rather than papered over; see the note on
// `apps/web`'s eslint in the CI workflow.

/**
 * The suite, in execution order. `npm run check` runs every one of these and reports every
 * failure; it does not stop at the first.
 *
 * Ordering intent: the workflow's chain check comes first because it is the only structural check
 * left in the suite, then the three disk-vs-generated comparisons, then the design instruments. The
 * whole list is under ten seconds on a cold tree with no installs.
 *
 * *This read "the two disk-vs-generated comparisons" until `check:skill-routers` joined them. The
 * number is in the prose because the ordering RULE is what matters and a bare count would not say
 * why those steps sit together; it is corrected rather than removed for the same reason.*
 *
 * *This paragraph read "the two structural guards come first — the tripwire's own wiring proof and
 * this file's drift guard — so a suite that has stopped describing the repository fails loudly
 * before anything slower runs" until 2026-08-31. Both of those guards are EXCLUDED now and the
 * sentence would have described an ordering the list no longer has. The intent it stated was
 * right and is what the two exclusions below are written to get back.*
 *
 * NO STEP DEPENDS ON AN EARLIER ONE HAVING PASSED — and that is a statement about EXECUTION, not
 * about VALIDITY. Every step runs whatever the ones before it did, which is the whole point of the
 * runner. But one pair here is a gate and its checker: `test:build-tokens` is the mutation gate
 * over the generator that `check:tokens` runs in `--check` mode, so a green `check:tokens` beside
 * a red `test:build-tokens` means the drift comparison is unproven, not that the tokens are fine.
 * READ THE FAILURE LIST, not just the tally.
 *
 * EVERY ENTRY IS ONE COMMAND, AND ONE COMMAND MEANS ONE EXIT CODE. auditSuite() REFUSES a step
 * whose RESOLVED command carries a shell control operator, so an `&&` chain cannot arrive through
 * package.json — nor through a wrapper script — after being kept out of here. beeond has no
 * delegating parents at all today, which is why there are no alias entries in EXCLUDED below.
 */
const STEPS = [
  // THE TWO STRUCTURAL GUARDS ARE NOT HERE, AND THEIR ABSENCE IS THE MOST IMPORTANT THING ABOUT
  // THIS LIST. `test:protected-write` and `test:check-suite` are the checks that say whether the
  // other checks are being watched, and both are EXCLUDED below because the ported files assert
  // against agentvibe's own STEPS and EXCLUDED contents rather than against the mechanism. Read
  // those two entries before reading this list: while they stand, NOTHING automated checks that
  // this list still describes package.json.
  //
  // The workflow's own chain check. agentvibe EXCLUDES the identical script, on the ground that
  // `test:check-suite` asserts the same predicate and a second name for one property is the name
  // that goes stale. THAT REASONING DOES NOT TRANSFER WHILE `test:check-suite` IS EXCLUDED: this
  // entry point is not a duplicate of anything, it is the ONLY thing in beeond that reads the
  // workflow at all. It survives the exclusions above because `ciChainFindings()` is pure over the
  // workflow text and carries no assertion about which steps a repository has, which is exactly
  // the property the two excluded files lack. FALSIFY THIS: re-port an adapted
  // scripts/check-suite.test.mjs, get it green, and this step becomes the duplicate agentvibe says
  // it is — at which point it belongs in EXCLUDED with agentvibe's reason, not here.
  'check:ci-chains',
  // The skills manifest: MANIFEST.json is generated from disk, and this fails when the two differ.
  'check:skills-manifest',
  // The skill routers: .claude/skills/routers/ is generated from .claude/skills/CURATION.yml plus
  // the manifest plus the directory, and this fails when the committed files differ from a fresh
  // generation. It ALSO fails, before writing anything, when the namespace map has a skill in no
  // namespace, a skill in two, or a name that is not on disk — the three states that make the
  // discovery tier silently wrong at READ time. Its generator half, `build:skill-routers`, is
  // ungoverned on purpose: this entry is its assertive counterpart, the same arrangement
  // `check:tokens` has with `build:tokens`.
  'check:skill-routers',
  // The token pipeline. Gate first, then the checker it guards.
  'test:build-tokens',
  'check:tokens',
  // The remaining design instruments. Each is hermetic — it constructs what it reads, needs no
  // network and no browser, and skips the one Playwright-dependent case when Chromium is absent.
  'test:design-lib',
  'test:design-probe',
  'test:extract-reference',
];

/**
 * Scripts matching a GOVERNED prefix that are deliberately NOT in the suite.
 *
 * Every key needs a reason someone can argue with, and the drift guard fails an entry naming a
 * script that no longer exists — so this list cannot rot into a list of names nobody recognises.
 *
 * ALL SIX ENTRIES BELOW ARE ONE FINDING SEEN SIX TIMES: bin/fleet-install.mjs copied agentvibe's
 * test files byte-for-byte, and each asserts against agentvibe's own tree — its agent roster, its
 * tier map, its launcher, and, in the two meta-tests, its literal STEPS and EXCLUDED contents.
 * They are registered as scripts and excluded here rather than left unnamed, because
 * absent-with-no-entry is the silent omission this whole guard exists to catch and it looks
 * identical, from the outside, to a considered decision. Every figure below was measured on
 * 2026-08-31 at the repo root with `node --test scripts/<file>`; re-run those commands rather than
 * trusting the numbers.
 *
 * THE FIRST TWO ARE NOT LIKE THE OTHER FOUR AND MUST NOT BE READ AS ROUTINE. `test:check-suite`
 * and `test:protected-write` are the checks that watch the other checks. The other four exclusions
 * cost beeond coverage of a subject; these two cost it coverage of ITSELF, and one of them takes
 * this file's own enforcement offline. Both are temporary by construction — the fix is upstream
 * and is in flight — and both name the condition that ends them.
 */
const EXCLUDED = {
  'test:check-suite':
    'THE DRIFT GUARD OVER THIS FILE, AND EXCLUDING IT TAKES THIS FILE\'S OWN ENFORCEMENT OFFLINE. Read ' +
    'this entry before any other one here. Measured 2026-08-31: 44 of 75 pass, 31 fail, and every one of ' +
    'the 31 asserts against agentvibe\'s LITERAL STEPS AND EXCLUDED CONTENTS rather than against the ' +
    'mechanism those contents are fed to. The messages, quoted rather than paraphrased so the shape is ' +
    'unmistakable: "deleting lint:agents from STEPS did not bite:" — beeond has no lint:agents; ' +
    '"check:ledger in package.json no longer delegates to exactly the links this test pins" — beeond has ' +
    'none of the five delegating aliases; "check:mc left STEPS with no EXCLUDED entry — that is the ' +
    'silent omission, wearing the fix as a hat" — beeond has no check:mc; "only 9 run-steps found — the ' +
    'parser is not reaching the job", a non-vacuity floor of 40 calibrated to agentvibe\'s 48-step suite; ' +
    '"the setup steps changed — re-decide whether they should carry the guard", pinned at 3 because ' +
    'agentvibe needs a Bun toolchain and beeond needs 2; "CONTROL: only 13 test files found — the listing ' +
    'is aimed wrong"; and eleven of the form "the by-name mutation matched nothing, so its proof is ' +
    'vacuous", each of which mutates the string `npm run test:sandbox` in a workflow that has never ' +
    'contained it. THE MACHINERY IS NOT IMPLICATED and that was checked rather than assumed: the ~1,590 ' +
    'lines from scriptGraph() to the end of this file are BYTE-IDENTICAL to agentvibe\'s, diffed line for ' +
    'line, so only STEPS, EXCLUDED and CI_CHAINS_ALLOWED differ and those three are the inputs the failing ' +
    'cases read. ' +
    'WHAT beeond LOSES WHILE THIS STANDS, said plainly because it is load-bearing and glossing it is how ' +
    'a temporary exclusion becomes permanent: auditSuite() IS CALLED FROM NOWHERE ELSE IN THIS ' +
    'REPOSITORY. Not from a script, not from a step, not from a workflow — grep it. So the rule that a ' +
    'check:/test:/lint:/verify:/audit: script must be a STEP or carry a written reason is, right now, ' +
    'documentation. A new governed script can be added to package.json and run nowhere and nothing will ' +
    'say so; a step can be deleted from STEPS and nothing will say so; an entry in this very object can go ' +
    'stale, name a script that no longer exists, or have its reason emptied to the word "later", and ' +
    'nothing will say so. Gone with it: the assertions that every STEP has a counterpart step under ' +
    '.github/workflows/, that every run: step there carries the !cancelled() guard, that ' +
    'continue-on-error never appears as a key, and that no step invokes a test runner or the aggregate ' +
    'suite directly. `check:ci-chains` is a STEP and covers the shell-chain predicate over the workflow ' +
    'and NOTHING ELSE of that list. NOTHING WAS WIDENED TO COMPENSATE, deliberately: a substitute guard ' +
    'written in a hurry would be a second implementation of a rule that already has one upstream, and ' +
    'this repository has already recorded what two implementations of one check cost. ' +
    'THE EXIT CONDITION, WHICH IS AN EVENT AND NOT A DATE: agentvibe is fixing this at the source, by ' +
    'having these cases build a SYNTHETIC suite fixture instead of reading the live one. When that lands ' +
    'and the file is re-ported through bin/fleet-install.mjs, delete this entry and put test:check-suite ' +
    'back as the second STEP with a matching step under .github/workflows/. THAT IS THE WHOLE REASON THIS ' +
    'IS AN EXCLUSION AND NOT A DELETION. FALSIFY THIS: after the re-port, run `npm run test:check-suite`; ' +
    'if it passes, this entry is describing a repository that no longer exists and must not survive.',
  'test:protected-write':
    'THE PROOF THAT THE TRIPWIRE FIRES, EXCLUDED FOR TWO NON-VACUITY FLOORS SIZED TO agentvibe. Measured ' +
    '2026-08-31: 4 of 6 pass, 2 fail, and both failures are scale controls rather than behaviour. Quoted ' +
    'exactly: "only 9 scripts reachable from check — the walk is not finding them", from ' +
    'assert.ok(scripts.size > 20) — a floor written to catch a traversal that had silently stopped ' +
    'finding anything, which fires on a CORRECT nine-step suite because agentvibe\'s is 48; and "the scan ' +
    'is not reaching outside scripts/ — gate-logic.test.mjs is guarded and must be read", which requires ' +
    '.claude/workflows/lib/gate-logic.test.mjs to be named by a suite script, a file beeond does not have. ' +
    'A third floor, files.length >= 24, sits behind the second and would fire next. THE THREE SUBSTANTIVE ' +
    'CASES ALL PASS HERE — the tripwire refuses a write into .claude/agents/ and names the path, it ' +
    'permits an ordinary fixture write elsewhere so it is not a blanket refusal, and the PROTECTED list ' +
    'still names every directory whose contents are the harness. That last one passes against beeond\'s ' +
    'REPOINTED list, which added design/tokens, so the case is doing real work here and not merely ' +
    'agreeing with itself. ' +
    'WHAT beeond LOSES WHILE THIS STANDS: the tripwire ITSELF still runs — every test script in ' +
    'package.json carries --require ./scripts/protected-write-tripwire.cjs and a fixture written into a ' +
    'protected path still throws EPROTECTEDWRITE. What stops is the WIRING check. Nothing now verifies ' +
    'that a NEWLY ADDED `node --test` script carries the preload, so the next test script written without ' +
    'it joins the suite unguarded and every run stays green — which is precisely the silent-omission ' +
    'shape this file exists to catch, arriving through the one guard that watched for it. Also gone: the ' +
    'grep that reports a guarded test reaching for an async or promise fs API the tripwire does not wrap. ' +
    'Until it returns, the preload is a convention rather than a checked fact, and a reviewer adding a ' +
    'test script has to remember it. ' +
    'THE EXIT CONDITION IS THE SAME EVENT AS THE ENTRY ABOVE: the upstream fix that makes these cases ' +
    'build a synthetic fixture instead of reading the live suite, then a re-port. The narrower repair, if ' +
    'the upstream one is ever abandoned, is to DERIVE both floors from STEPS.length rather than typing a ' +
    'number — and NOT to delete them, because a walk that finds nothing is exactly what they exist to ' +
    'catch. FALSIFY THIS: after the re-port, run `npm run test:protected-write`; 6 of 6 means this entry ' +
    'must not survive.',
  'test:claims':
    'PORTED FROM agentvibe AND ASSERTS AGAINST agentvibe\'s AGENT ROSTER. Measured 2026-08-31: 79 of ' +
    '80 pass, 1 fails, and the one failure is `ENOENT ... .claude/agents/reviewer-readonly.md` — the ' +
    'case named "DIVERGENCE 4 (the sixth loss): an odd apostrophe in a body kills the WHOLE document" ' +
    'reads a real agent file out of the tree to prove its YAML parser diverges from the reference on ' +
    'live content. agentvibe has reviewer-readonly.md; beeond\'s .claude/agents/ holds a different, ' +
    'older roster and has no such file. THE LIBRARY UNDER TEST IS FINE — scripts/lib/claims.js came ' +
    'across unmodified and 79 of its cases pass here — so this is a fixture that names another ' +
    'repository, not a defect in the parser. WHAT IS LOST WHILE THIS SITS HERE: nothing about the ' +
    'claim parser runs in beeond at all, including the 79 that pass, because an excluded script runs ' +
    'nowhere. THE FIX IS ONE EDIT: repoint that case at a file beeond actually has, or at a fixture ' +
    'the test writes itself, then move this name into STEPS and add a matching step under ' +
    '.github/workflows/. FALSIFY THIS: run `node --test scripts/claims.test.mjs`; if it comes ' +
    'back 80 of 80 the fixture was fixed and this entry must not survive. ' +
    'ON WORDING, so the next editor is not mystified: this entry names the DIRECTORY and never the ' +
    'workflow FILE, and the other three entries here follow the same rule. The guard in ' +
    'scripts/check-suite.test.mjs reads ANY exclusion reason matching /ci\\.yml/ as a claim that the ' +
    'workflow still covers that script, and fails when it does not. These four entries claim the ' +
    'OPPOSITE — that nothing runs them — so spelling the filename turns them red for saying so. That ' +
    'was measured rather than guessed: an earlier draft of this reason spelled it, and this entry was ' +
    'the single finding that guard produced against beeond. The over-breadth is a real limitation of ' +
    'the guard, recorded here rather than worked around in silence.',
  'test:classifier':
    'PORTED FROM agentvibe AND ASSERTS AGAINST agentvibe\'s TIER MAP, WHICH IS THE ONE FILE THAT WAS ' +
    'CORRECTLY NOT COPIED. Measured 2026-08-31: 15 of 28 pass, 13 fail. The failures name ' +
    'mission-control routes, a trust allowlist, a network binding and a sandbox policy — thirteen ' +
    'assertions about paths in agentvibe\'s tree. beeond\'s .claude/qa-tier-floor.yml was authored for ' +
    'beeond\'s own paths and is right; the test is what describes the wrong repository. Note the ' +
    'direction of the error, because it is the dangerous one: a copied test that fails is loud, but ' +
    'the same copy could have PASSED against a tier map that had also been copied, and then the ' +
    'classifier would have been certified against paths that do not exist here. THE FIX: rewrite the ' +
    'thirteen cases against beeond\'s rules — the tier map already carries a reason string per rule to ' +
    'assert on — then promote to STEPS with a workflow step. FALSIFY THIS: run `node --test ' +
    'scripts/classifier.test.mjs`; 28 of 28 means this entry must not survive.',
  'test:ledger':
    'CANNOT LOAD AT ALL — a missing import, not a failing assertion, and the distinction matters ' +
    'because the two look the same in a tally. Measured 2026-08-31: 1 test, 0 pass, 1 fail, and the ' +
    'error is `ERR_MODULE_NOT_FOUND: Cannot find module scripts/claim-append.test.mjs imported from ' +
    'scripts/ledger.test.mjs`. The wave-4 install brought ledger.test.mjs and not the sibling file it ' +
    'imports, so the module graph never resolves and NOT ONE of its cases is evaluated. A step here ' +
    'would report one failure standing for an unknown number of unrun assertions, which is the exact ' +
    'shape of under-reporting the runner in this directory was written to end. THE FIX is an install ' +
    'question and not a test question: port scripts/claim-append.test.mjs, or cut the import if the ' +
    'claim-append MCP server is not part of beeond. FALSIFY THIS: run `node --test ' +
    'scripts/ledger.test.mjs` and read the tally — a number larger than 1 means the graph resolves ' +
    'and this entry needs re-deciding on its merits.',
  'test:merge-gate':
    'DEPENDS ON A LAUNCHER beeond DOES NOT HAVE. Measured 2026-08-31: 20 of 64 pass, 44 fail, and the ' +
    'failures are `ENOENT ... /bin/warroom` and `ENOENT ... state/events.jsonl` — the fixtures copy ' +
    'bin/warroom into a temp harness and drive it. beeond\'s bin/ holds init-from-template.sh, ' +
    'install-war-room.sh and install.js, and no `warroom` launcher; the war-room wave was not ' +
    'installed here. So this is a missing SUBJECT, not a broken test: the 44 failures say the thing ' +
    'under test is absent, which is true. THE FIX IS AN INSTALL DECISION, NOT AN EDIT — either the ' +
    'launcher wave lands and this becomes a step, or it does not and this file should be removed ' +
    'rather than excluded, because an exclusion for a test of a subject nobody intends to install is ' +
    'a permanent entry pretending to be a deferral. FALSIFY THIS: install the launcher, run `node ' +
    '--test scripts/merge-gate.test.mjs`, and if it is 64 of 64 this entry must not survive.',
};

/**
 * A script name whose wiring this guard is responsible for.
 *
 * These are the prefixes that mean "this script ASSERTS something", and being governed is what
 * makes removal from STEPS loud: an unreached governed script fails; an unreached ungoverned one
 * is invisible. `lint:`, `verify:` and `audit:` name nothing in beeond today and are kept so the
 * next assertive script does not arrive through a gap — the prefix list was widened in agentvibe
 * only after `lint:agents` was found deletable from the suite with the guard staying green.
 *
 * The other prefixes in package.json are deliberately out: `build:` is a generator, and its
 * assertive half is already a step under a governed name (`check:tokens` for `build:tokens`,
 * `check:skills-manifest` for `build:skills-manifest`). Governing a generator would demand an
 * EXCLUDED entry for every tool in the repo, which is how a guard becomes noise.
 *
 * THE TRAP THIS PATTERN SETS, recorded because it has already been walked into here: a script
 * named with any OTHER prefix — `fleet:test`, say — reads as registered and is invisible to this
 * guard, so it can sit in package.json running nowhere and nothing reports it. If you add a script
 * that asserts anything, give it a governed prefix.
 *
 * A prefix list can only ever be a list, so it is not the whole defence: auditSuite() separately
 * fails any STEP that this pattern does not match, which catches the next prefix without anyone
 * having predicted it.
 */
const GOVERNED = /^(?:check|test|lint|verify|audit):/;

/** The entry point. Named here because the guard asserts package.json still points `check` at it. */
const RUNNER = 'scripts/run-checks.mjs';

/** Build name -> [names it invokes via `npm run`], for scripts that exist. */
function scriptGraph(scripts) {
  const edges = new Map();
  for (const name of Object.keys(scripts)) {
    const kids = new Set();
    for (const m of String(scripts[name]).matchAll(/\bnpm\s+run\s+([\w:-]+)/g)) {
      if (Object.prototype.hasOwnProperty.call(scripts, m[1])) kids.add(m[1]);
    }
    edges.set(name, [...kids]);
  }
  return edges;
}

/**
 * Split what shellOperators() returned into the two kinds of finding it can produce.
 *
 * `operators` mean "this is more than one command". `unmodelled` means "this checker cannot tell",
 * which is not the same statement and does not take the same remedy — so the two call sites that
 * report them, auditSuite() here and ciChainFindings() below, must not each re-derive the split.
 * Written out twice, two lists of one thing disagree silently; that is the defect that put `$1` in
 * the `$`-vocabulary and not in ARITH_OPERAND.
 */
function splitFindings(findings) {
  return {
    operators: findings.filter((t) => SHELL_OPERATORS.includes(t)),
    unmodelled: findings.filter((t) => !SHELL_OPERATORS.includes(t)),
  };
}

/**
 * The bar a written exemption has to clear, spelled once.
 *
 * EXCLUDED entries and CI_CHAINS_ALLOWED entries are the same governance mechanism pointed at two
 * files: an exemption a reader can disagree with instead of guessing at. They each carried their
 * own `40`, so raising the bar in one would have raised it in one.
 */
const REASON_MIN_LENGTH = 40;
const hasSubstantiveReason = (reason) =>
  typeof reason === 'string' && reason.trim().length >= REASON_MIN_LENGTH;

/**
 * A command whose ENTIRE body is one `npm run <name>` — a wrapper, and nothing else.
 *
 * ONE PATTERN, TWO CALLERS, and that is deliberate rather than tidy. aliasLinks() asks it of each
 * `&&`-separated part and resolveChain() asks it of a whole body, but both are asking the same
 * question — "is this nothing but a delegation to a name I can go and check?" — and both docs below
 * describe the narrowness in the same words. Written twice, a narrowing meant for one of them
 * silently left the other behind; written once, the coupling is real and
 * `both callers of DELEGATION agree on what a bare delegation is` in scripts/check-suite.test.mjs
 * fails when they stop agreeing.
 */
const DELEGATION = /^npm\s+run\s+([\w:-]+)$/;

/**
 * The links of an ALIAS: a script whose entire body is `npm run` calls joined by `&&`, kept so a
 * documented command spelling keeps working after its links became steps of their own.
 *
 * Returns null for anything else — a single command, or a chain with a non-`npm run` link. That
 * narrowness is deliberate: only a pure delegation can be excused from the suite on the grounds
 * that its links are in it, because only then is every link a name this file can go and check.
 */
function aliasLinks(command) {
  const parts = String(command).split('&&').map((part) => part.trim());
  if (parts.length < 2) return null;
  const links = [];
  for (const part of parts) {
    const m = DELEGATION.exec(part);
    if (!m) return null;
    links.push(m[1]);
  }
  return links;
}

/**
 * A shell control operator inside a command string breaks "one step, one exit code".
 *
 * The runner spawns `npm run <step>` and reads ONE exit code; it cannot see inside a step. So every
 * operator below hides a link, and the two failure modes are not equally loud:
 *
 *     &&   stops at the first non-zero exit — the later links never run, and the step at least
 *          goes red, which is how the original 30-link chain was eventually noticed
 *     ;    STRICTLY WORSE, and it is the reason this check is not about `&&`. `bash -c 'false ;
 *     |    true'` exits 0, `bash -c 'false | true'` exits 0, `bash -c 'false & true'` exits 0 — the
 *     &    step's exit code becomes the LAST command's and the failure vanishes with no red step
 *          anywhere. All three were accepted by the `&&`-only check that preceded this one,
 *          measured 2026-08-26: `;`, `||` and `|` each returned zero findings against auditSuite().
 *     ||   masks it the other way — the step passes whenever the FALLBACK passes
 *     \n   a newline in a JSON script body is a sequence, with `;` semantics
 *     <(   PROCESS SUBSTITUTION, and it is the worst of them: the inner command's exit status does
 *     >(   not reach the outer exit code AT ALL. Measured 2026-08-26 —
 *          `cat <(false; echo INNER_RAN); echo exit=$?` prints INNER_RAN then `exit=0`, and
 *          `true <(exit 7); echo exit=$?` prints `exit=0`. Where `;` at least hands back the LAST
 *          command's status, this hands back a status the inner command never touched. Added
 *          2026-08-26: until then `npm run good <(npm run bad)` returned [] — a complete bypass.
 *
 * Quote-aware on purpose, and this is not hypothetical: package.json's `usage` script is a
 * `node -e "…;…"` one-liner whose semicolons are inside a double-quoted argument and separate
 * nothing. A substring scan would refuse that shape the day someone made it a step, and a guard
 * that fires on correct code gets weakened rather than obeyed.
 *
 * QUOTE-AWARE IS NOT THE SAME AS "DOUBLE QUOTES ARE OPAQUE", and reading them as opaque was a hole
 * that survived until 2026-08-26. `$(…)` and backticks RE-ENTER COMMAND CONTEXT inside double
 * quotes, so every operator above works in there. Measured in bash, which is the only authority
 * that settles it:
 *
 *     echo "$(exit 7; exit 0)"        exits 0 — the 7 is GONE, and no step goes red
 *     echo "`exit 7; exit 0`"         exits 0 — same, in the backtick spelling
 *     echo '$(exit 7; exit 0)'        prints the text, runs nothing — single quotes DO suppress it
 *
 * The first two returned [] from this function, so a STEPS entry shaped that way was accepted with
 * zero findings while dropping a failure silently — which is the exact threat model in the header,
 * arriving through the one construct the scanner had decided not to look inside. The third is
 * correct and is pinned: single quotes stay opaque, backslash and all.
 *
 * So the scanner tracks a STACK of command contexts rather than one quote flag. Each frame carries
 * its own quote state, because a substitution re-arms quoting one level in: in
 * `"$(echo 'a;b')"` bash prints `a;b` — that semicolon is single-quoted INSIDE the substitution and
 * separates nothing, and a depth counter alone would report it.
 *
 * `$((…))` is a fourth kind of frame and NOT a command context: its operators are arithmetic, so
 * they are not reported. It is ENTERED rather than skipped, and that distinction was measured, not
 * reasoned — the first cut of this fix skipped the whole expansion and
 * `x="$(( $(exit 7; echo 1) + 1 ))"` then returned [], while bash runs the inner commands and drops
 * the 7 exactly as it does anywhere else.
 *
 * Returns the operators found, in a stable order, or [] for a single command.
 */
const SHELL_OPERATORS = ['&&', '||', ';', '|', '&', '<(', '>(', '\\n'];

/**
 * Where a `$((` at `open` really ends, IF it ends as `))`. Returns that index, or -1.
 *
 * `$((` DOES NOT MEAN ARITHMETIC. It means arithmetic only when the region closes with `))`;
 * otherwise bash reads it as command substitution wrapping a subshell — `$( (cmd); rest )` — and
 * runs every command in it. Measured 2026-08-26, and this is the whole rule:
 *
 *     echo "$((echo RAN); echo RAN2)"    RAN / RAN2, exit 0    BOTH RAN — no `))` anywhere
 *     echo "$((exit 7); echo RAN2)"      exit 0                the 7 is LAUNDERED
 *     echo "$((a|b); echo RAN2)"         a, b run as commands through a PIPE, then RAN2
 *     echo "$((echo RAN))"               exit 1                arithmetic syntax error, nothing ran
 *     echo "$(( (echo RAN) ))"           exit 1                "missing `)'" — still arithmetic
 *
 * So the previous predicate — "the parens balance" — granted non-command status to the exact case
 * that IS a command context, and one step shaped `echo "$((npm run a); npm run b)"` returned zero
 * findings from this function, from auditSuite() and from the ci.yml check at once. THE SPECIAL
 * CASE ADDED TO AVOID FIRING ON `$((6|1))` WAS ITSELF THE BYPASS; that is the general shape, and it
 * is why granting the exemption now takes two independent checks that must both agree.
 *
 * This is the STRUCTURAL one: the `(` at `open + 1` must be closed by the `)` immediately before
 * the one that closes `open`. `$((6|1))` satisfies it; `$((echo RAN); echo RAN2)` closes its inner
 * paren early and does not. isArithmeticBody() is the second, on the text between them.
 *
 * -1 is also what an unbalanced `$((` gets, for the same reason as before: treating a typo as
 * opaque would make it the one place a chain could still hide.
 */
function arithmeticEnd(src, open) {
  let depth = 0;
  let innerClose = -1;
  for (let i = open; i < src.length; i += 1) {
    if (src[i] === '(') depth += 1;
    else if (src[i] === ')') {
      depth -= 1;
      if (depth === 1 && innerClose === -1) innerClose = i;
      if (depth === 0) return i === innerClose + 1 ? i : -1;
    }
  }
  return -1;
}

/**
 * Characters that never appear in a bash arithmetic expression, each of which can start or separate
 * a command.
 *
 * `#` IS FORBIDDEN ONLY WHEN IT IS NOT `$#`. It begins a comment in command context, which is why
 * it is here at all — but `$#` is an ordinary arithmetic operand, and bash prints 3 for
 * `set -- a b c; echo "$(($#|1))"`. Banning it outright made this rule refuse correct code. The
 * lookbehind-free form `(?:^|[^$])#` keeps base-N notation refused, because the `#` in `16#ff` is
 * preceded by a digit — pinned, since that refusal is a deliberate over-report with its own case.
 */
const ARITH_FORBIDDEN = /[;`'"\\\n\r]|(?:^|[^$])#/;
/**
 * A number, an identifier, `$name`, or `${name}`.
 *
 * The numeric branch carried `[\w#]` for base-N notation until 2026-08-26. THAT `#` WAS
 * UNREACHABLE: ARITH_FORBIDDEN rejects the whole body before this pattern ever runs, because `#`
 * begins a comment in command context. Removing it changes nothing and puts the base-N refusal in
 * one place — `$((16#ff&1))` is refused by ARITH_FORBIDDEN, and the case asserting that says so.
 */
/**
 * The special parameters, spelled ONCE and consumed by both places that need them.
 *
 * isModelledDollar() enumerates them as the `$`-vocabulary; ARITH_OPERAND needs the same set,
 * because `$?` and `$1` are ordinary operands inside `$((…))`. Written out twice, the two lists
 * disagree silently — which is this file's own recurring defect, and it is exactly how
 * `echo "$(($1|1))"` came to be reported as a pipe while bash printed 7.
 */
const SPECIAL_PARAMETERS = '@*?-$!#';

/** The same set as a character class. Built from the string so the two cannot drift apart. */
const SPECIAL_PARAMETER_CLASS = `[${SPECIAL_PARAMETERS.replace(/[-\]\\^]/g, '\\$&')}]`;

// `$1` and `$@` come BEFORE the `$?name` alternative so that `$name` and `${name}` match exactly as
// they did — the new branch cannot reach a name, because a digit run and a special parameter are
// disjoint from `[A-Za-z_]`.
const ARITH_OPERAND = new RegExp(
  `^(?:\\$?\\{\\s*[A-Za-z_]\\w*\\s*\\}|\\$(?:\\d+|${SPECIAL_PARAMETER_CLASS})|\\$?[A-Za-z_]\\w*|\\d\\w*)`
);
/** Unary, where an operand is expected. */
const ARITH_PREFIX = /^(?:\+\+|--|[-+!~])/;
/**
 * Binary, where an operator is expected. `?` and `:` are handled separately so they must pair.
 *
 * ORDERED LONGEST-FIRST, and that ordering is load-bearing rather than tidy: alternation takes the
 * FIRST match, so the two-pipe alternative has to precede the compound-assignment class or `||`
 * would be read as `|` followed by junk, and `<<=` has to precede `<<`. Verified by execution on
 * the inputs that discriminate — `||` matches `||` and not `|`, `|=` matches `|=`, `&=` matches
 * `&=`, `<<=` matches `<<=`. (The class is not spelled in this comment because it contains the
 * two characters that end a block comment.)
 *
 * Compound assignment was missing until 2026-08-26, so `$((x|=2))` — which bash evaluates to 3 —
 * was reported as a pipe.
 */
const ARITH_INFIX = /^(?:\*\*=|<<=|>>=|\*\*|<<|>>|<=|>=|==|!=|&&|\|\||[-+*/%&|^]=|[-+*/%&|^<>=,])/;

/**
 * Does the text between `$((` and `))` read as arithmetic bash would evaluate?
 *
 * THE SECOND, INDEPENDENT CHECK, and it exists because the structural one above is a rule about
 * parentheses and this file has now been bitten twice by a rule about parentheses. Measurement says
 * a region closing in `))` is arithmetic — bash errors rather than falling back, on every shape
 * probed — so structurally this is belt and braces. It is written anyway because the asymmetry is
 * total: a false positive costs one command rewritten without `$((`, a false negative is a complete
 * bypass of both guards at once, and the last two rounds were both lost on that trade.
 *
 * A CONSERVATIVE ALLOWLIST, and everything outside it FAILS CLOSED to command substitution — where
 * the interior is scanned under normal command rules, so `;`, `&&`, `||` and `|` are reported. What
 * that rejects, deliberately:
 *
 *   `;`, a newline, a backtick, a quote, a backslash, `#`   never arithmetic; each starts or
 *                                                           separates a command
 *   `$(`                                                    a nested command substitution. It is
 *                                                           legal INSIDE arithmetic, but its
 *                                                           interior is command text, so scanning
 *                                                           it costs nothing and reading it as
 *                                                           arithmetic would cost everything
 *   two bare words — `npm run a`                            two operands with only space between
 *                                                           them is not an expression, and this is
 *                                                           the one a character allowlist misses
 *   `:` with no `?`                                         `a:b|c` is an arithmetic syntax error
 *                                                           in bash, measured
 *
 * It also rejects some VALID arithmetic — postfix `x++`, an empty body — and that costs nothing:
 * the fallback scans the body as command text, and a body bash accepts as arithmetic contains no
 * `;` or newline, so the only operators there are `&`/`|` forms, which is exactly what the
 * allowlist below is precise about. Confirm before widening it: a shape whose classification does
 * not change the returned operators does not need to be here.
 */
function isArithmeticBody(body) {
  if (ARITH_FORBIDDEN.test(body) || body.includes('$(')) return false;

  let i = 0;
  let expect = 'operand';
  let depth = 0;
  let ternaries = 0;

  while (i < body.length) {
    const rest = body.slice(i);

    const ws = /^\s+/.exec(rest);
    if (ws) { i += ws[0].length; continue; }

    if (rest[0] === '(') {
      if (expect !== 'operand') return false;
      depth += 1; i += 1; continue;
    }
    if (rest[0] === ')') {
      if (expect !== 'operator' || depth === 0) return false;
      depth -= 1; i += 1; continue;
    }

    if (expect === 'operand') {
      const prefix = ARITH_PREFIX.exec(rest);
      if (prefix) { i += prefix[0].length; continue; }
      const operand = ARITH_OPERAND.exec(rest);
      if (!operand) return false;
      i += operand[0].length;
      expect = 'operator';
      continue;
    }

    if (rest[0] === '?') { ternaries += 1; i += 1; expect = 'operand'; continue; }
    if (rest[0] === ':') {
      if (ternaries === 0) return false;
      ternaries -= 1; i += 1; expect = 'operand'; continue;
    }
    const infix = ARITH_INFIX.exec(rest);
    if (!infix) return false;
    i += infix[0].length;
    expect = 'operand';
  }

  return depth === 0 && ternaries === 0 && expect === 'operator';
}

/**
 * Is the `$` at `i` one of the forms this scanner MODELS?
 *
 * `$(` and `$((` never reach here — they are handled earlier and consume themselves. What is left
 * is the rest of bash's expansion surface, enumerated:
 *
 *     $        at end of string, or before whitespace — a literal dollar
 *     ${…}     parameter expansion. Scanned through: its contents are text, and a `$(` inside one
 *              still opens a command frame, so `${x:-$(a;b)}` reports the `;`
 *     $name    a named or positional parameter — no command context
 *     $@ $* $? $- $$ $! $#   the special parameters — likewise
 *     $'…'     ANSI-C quoting — handled at the call site, which is why it is not listed here
 *     $"…"     locale translation — likewise
 *
 * ANYTHING ELSE IS NOT MODELLED, and the caller reports it rather than scanning past it. That is
 * the inversion this function needed: the vocabulary is finite and written down, so an expansion
 * form nobody thought of is a FINDING instead of a silent `[]`.
 */
function isModelledDollar(src, i, inDoubleQuote) {
  const next = src[i + 1];
  if (next === undefined || /\s/.test(next)) return true;
  if (next === '{') return true;
  if (/[A-Za-z0-9_]/.test(next)) return true;
  if (SPECIAL_PARAMETERS.includes(next)) return true;

  // THE ONLY TWO FORMS DOUBLE QUOTES SUPPRESS, and the narrowness is the whole point. Outside
  // quotes these never reach here — the branches at the call site consume them. Inside, they are
  // literal and there is nothing to model. Measured 2026-08-26, every form in one line:
  //
  //     "$[1+2]" -> 3    "${x}" -> 9    "$x" -> 9    "$(echo S)" -> S    "$((1+1))" -> 2
  //     "$'a'"   -> $'a'      "$"  -> $ (the quote ends the string)
  //
  // Everything except those last two EXPANDS inside double quotes, so a gate that skipped the
  // whole class in there certified `echo "result is $[1+2]"` as one clean command — which it is
  // not, and which contradicted this file's own stated guarantee.
  return Boolean(inDoubleQuote) && (next === "'" || next === '"');
}

function shellOperators(command) {
  const src = String(command);
  const found = new Set();
  const unmodelled = new Set();

  // INDICES THE SCAN CONSUMED AS AN ESCAPED CHARACTER. The redirect guard below needs to tell a
  // redirect OPERATOR from a literal `<` or `>` sitting inside a word, and this scan is the only
  // thing that knows the difference — it is what consumed the backslash. Testing the byte instead
  // was a laundering bypass: see the guard.
  const escaped = new Set();

  /** Is `src[j]` one of `chars`, as an OPERATOR this scan recognised rather than an escaped literal? */
  const redirectOperatorAt = (j, chars) => chars.includes(src[j]) && !escaped.has(j);

  // One frame per COMMAND CONTEXT, innermost last. `base` is the command line itself; `$(` pushes
  // a `paren` frame and a backtick a `tick` frame. `parens` counts subshells nested inside a `$(`
  // so that `$( (a; b) )` closes on the right `)` rather than the first one.
  const stack = [{ kind: 'base', quote: null, parens: 0 }];

  // IS THE SCAN AT THE START OF A WORD? Only the `#` branch asks, and it is tracked FORWARD — from
  // what this scan consumed — rather than read backwards off `src[i - 1]`, because the two disagree
  // on exactly the case that decides a comment. Measured 2026-08-26: `echo $(echo x)#y` prints
  // `x#y` (that `)` closed a SUBSTITUTION, so the word continues and `#y` is literal) while
  // `(echo a)#y` prints `a` (that `)` closed a SUBSHELL, so `#y` IS a comment). Both strings end
  // the construct in `)`; only the frame stack tells them apart, and a backwards byte test cannot.
  let atWordStart = true;

  for (let i = 0; i < src.length; i += 1) {
    const frame = stack[stack.length - 1];
    const c = src[i];

    // Every branch below leaves the scan MID-WORD unless it says otherwise. The exceptions say so
    // at their own branch — the control operators, the openers that begin a fresh command — and the
    // metacharacter rule at the BOTTOM of this loop catches whitespace and the characters that have
    // no operator branch at all.
    const wordStart = atWordStart;
    atWordStart = false;

    // SINGLE QUOTES ARE OPAQUE, backslash and all — `echo '$(exit 7; exit 0)'` prints the text and
    // runs nothing. This branch is first because it must win over every branch below it.
    if (frame.quote === "'") {
      if (c === "'") frame.quote = null;
      continue;
    }

    // A backslash escapes the next character, quoted or not — `echo a \; b` prints `a ; b`, one
    // command. Inside double quotes it is also what stops an ESCAPED substitution from opening a
    // frame: `"\$(exit 7; exit 0)"` and "\`exit 7; exit 0\`" both print literally and run nothing.
    if (c === '\\') { escaped.add(i + 1); i += 1; continue; }

    // ARITHMETIC — checked before `$(` so the longer token wins, and inside double quotes too,
    // where `"$((6|1))"` is just as much a number. TWO INDEPENDENT CHECKS MUST BOTH AGREE before
    // the exemption is granted: the region has to close as `))`, and the text between has to read
    // as arithmetic. Either one failing falls through to `$(` below, where the interior is scanned
    // as commands — the safe direction, and the one the balance-only predicate got wrong.
    if (c === '$' && src[i + 1] === '(' && src[i + 2] === '(') {
      const end = arithmeticEnd(src, i + 1);
      if (end !== -1 && isArithmeticBody(src.slice(i + 3, end - 1))) {
        stack.push({ kind: 'arith', quote: null, parens: 2 });
        i += 2;
        continue;
      }
    }

    // COMMAND SUBSTITUTION — the hole. Both spellings open a frame from ANY non-single-quoted
    // context, INCLUDING from inside arithmetic, which is where the first cut of this fix leaked.
    if (c === '$' && src[i + 1] === '(') {
      stack.push({ kind: 'paren', quote: null, parens: 1 });
      i += 1;
      atWordStart = true; // a fresh command starts inside, so a `#` immediately after it is a comment
      continue;
    }
    if (c === '`') {
      // Backticks do not nest — the same character opens and closes — so this pops or pushes.
      // OPENING one starts a command; CLOSING one does not, because the substitution's result is
      // part of the surrounding word — measured, \`echo \`echo x\`#y\` prints `x#y`, not `x`.
      if (frame.kind === 'tick') stack.pop();
      else { stack.push({ kind: 'tick', quote: null, parens: 0 }); atWordStart = true; }
      continue;
    }

    // ── THE VOCABULARY GATE, and it is the reason this function stopped being a sequence of ──────
    // patches. Everything above models a construct by name. `$` introduces the rest of bash's
    // expansion surface, and that surface is the ONE place this scanner can UNDER-report: inside
    // a form whose quoting rules it does not know, its quote parity desyncs from the shell's and a
    // real chain comes back as `[]`. Measured 2026-08-26, and this is the third instance of that
    // exact shape:
    //
    //     bash -c "echo $'a\'b'; echo SECOND_RAN"     a'b / SECOND_RAN, exit 0 — TWO COMMANDS
    //     shellOperators("echo $'a\'b'; npm run x")   []  — the `;` was swallowed
    //
    // Inside `$'…'` a `\'` is an ESCAPED QUOTE that does not close the string; a scanner that
    // toggles on every bare `'` closes early, and every character after it is read in the wrong
    // state. Modelling ANSI-C quoting would fix that one case and leave the surface open, so the
    // rule is inverted instead: what is modelled is enumerated, and everything else is reported.
    //
    // IT RUNS INSIDE DOUBLE QUOTES TOO, and getting that wrong was a whole round. This block sat
    // BELOW the double-quote early exit, justified by one true measurement — `echo "$'a'"` prints
    // `$'a'` literally, so flagging it there would fire on correct code. That fact is about `$'`
    // and `$"`. It is NOT about `$`: measured, `echo "$[1+2]"` prints 3. Skipping the whole class
    // inside quotes certified `echo "result is $[1+2]"` as one clean command. A rule established by
    // one construct was applied to its entire class; the suppression is now exactly two forms wide
    // and lives in isModelledDollar(), where it is stated rather than implied by placement.
    //
    // Scanning STOPS at the first unmodelled form. Past it the frame stack describes a string this
    // function does not understand, and operators read out of a desynced state would be guesses
    // presented as findings. What was found BEFORE it is kept and returned alongside.
    //
    // THE TWO FORMS THAT PROMPTED THE GATE ARE ALSO MODELLED, and both together is the point: the
    // gate is what makes the guarantee stateable, and modelling these two is what keeps the gate
    // from firing on the shapes it was written for. Each was measured rather than looked up.
    //
    //     $'…'   Literal text with backslash escapes and NO expansions — `echo $'a$(echo X)b'`
    //            prints `a$(echo X)b`. It ends at the first UNESCAPED `'`: `echo $'a\'b'` prints
    //            `a'b`, and `echo $'a\\'` prints `a\`, so an escaped backslash does let the next
    //            quote close. Skipped whole, which is exact, because nothing in it runs.
    //     $"…"   A double-quoted string that is also translated. Same quoting and the SAME
    //            expansions — `echo $"a$(echo X)b"` prints `aXb`, `$"a\"b"` prints `a"b`, and a
    //            `;` inside is literal. So it is the double-quote frame with one extra character.
    const inDoubleQuote = frame.quote === '"';

    if (c === '$' && !inDoubleQuote && src[i + 1] === "'") {
      let j = i + 2;
      while (j < src.length && src[j] !== "'") { if (src[j] === '\\') j += 1; j += 1; }
      i = j; // the closing quote, or the end of an unterminated one — which bash refuses to run
      continue;
    }
    if (c === '$' && !inDoubleQuote && src[i + 1] === '"') { frame.quote = '"'; i += 1; continue; }

    if (c === '$' && !isModelledDollar(src, i, inDoubleQuote)) {
      unmodelled.add(`$${src[i + 1]}`);
      break;
    }
    // `$$` IS ONE FORM, so its second `$` must not be re-read as the start of another. Without this
    // the scan reached `$|` in `$(($$|1))` and reported an unmodelled construct for a body bash
    // evaluates to a process id — the gate firing on correct code, which is how a gate gets
    // deleted. It is the only vocabulary member that is itself a `$`.
    if (c === '$' && src[i + 1] === '$') { i += 1; continue; }

    // Inside double quotes and outside any substitution, nothing below separates commands. This is
    // the `usage` script's case and it must keep returning [].
    if (frame.quote === '"') {
      if (c === '"') frame.quote = null;
      continue;
    }

    if (c === '"' || c === "'") { frame.quote = c; continue; }

    // `parens` counts every paren still open in this frame — both of `$((`, the one of `$(` — so a
    // subshell inside a substitution closes on the right `)`: `$( (a; b) )` ends at the second.
    if (frame.kind === 'paren' || frame.kind === 'arith') {
      if (c === '(') { frame.parens += 1; atWordStart = true; continue; }
      if (c === ')') {
        frame.parens -= 1;
        if (frame.parens === 0) stack.pop();
        continue;
      }
    }

    // ARITHMETIC IS NOT A COMMAND CONTEXT. Reached only after the branch above, so a `$(` nested
    // inside arithmetic has already opened a command frame and is reported from there.
    if (frame.kind === 'arith') continue;

    // ── `#`, A COMMENT — MODELLED, NOT REFUSED, and that choice was re-derived for this construct
    // rather than inherited from the `$`-vocabulary gate above. Failing closed on `#` would report a
    // finding for every ordinary script carrying a comment, which is the trade this file already
    // refuses ("a rule that fires on correct code gets weakened rather than obeyed") — and it would
    // not even fix the defect, because the defect is not the `#`. It is that an APOSTROPHE inside a
    // comment opened a real single-quote frame and swallowed everything after it. Measured
    // 2026-08-26 against the code this replaces:
    //
    //     bash -c "npm run test:foo # don't forget this<NL>npm run bad ; npm run worse"
    //                                                    runs ALL THREE commands
    //     shellOperators(that string)                    []       — the `;` and the \n both gone
    //     shellOperators(it, with the apostrophe removed)  [';', '\n']
    //
    // Modelling it costs nothing measurable HERE AND NOW: zero of the 114 governed commands — 70
    // package.json scripts plus 44 ci.yml `run:` values — contains a `#` at any position, so this
    // changes no live verdict. It is the future comment that this is written for.
    //
    // IT BEGINS A COMMENT ONLY AT THE START OF A WORD. `echo a#b` prints `a#b`, and `wordStart` is
    // the only thing that knows the difference — WHICH IS ALSO THE WHOLE OF THE PROTECTION, stated
    // that way because the first draft of this comment claimed otherwise. It said quoting and
    // arithmetic were handled "by the branches above", and two mutations refuted it: moving this
    // branch above the `arith` continue killed no test, and neither did moving it above the
    // double-quote early exit. Neither placement matters, because nothing inside a quote and no
    // operand of an arithmetic body ever leaves the scan AT a word start — `echo $((2#101))` prints
    // 5 and that `#` follows a digit; `echo "x"#y` prints `x#y` and that one follows a quote. The
    // placement is where a reader expects it; `wordStart` is what makes it correct.
    //
    // The PROCESS SUBSTITUTION branch below is the opposite case, and the contrast is why both are
    // written down: its position under the `arith` continue IS load-bearing, and the mutation that
    // moves it up turns `echo $((1<(2)))` — which prints 1 — into a finding.
    //
    // The scan resumes ON the newline, not past it, so the branch below still records `\n`. A
    // comment ends a line; it does not merge two.
    if (c === '#' && wordStart) {
      const rest = src.slice(i).search(/[\n\r]/);
      if (rest === -1) break; // the comment runs to the end of the string — nothing follows it
      i += rest - 1;
      continue;
    }

    // ── PROCESS SUBSTITUTION — MODELLED **AND** REPORTED. That is two decisions, and each was made
    // for this construct on its own measurement.
    //
    // MODELLED rather than added to the unmodelled set, because unlike `$'…'` the interior genuinely
    // IS a command list — `cat <(echo A; echo B)` prints A and B — so entering it keeps quote parity
    // in sync with the shell's and reports an inner chain as well as the construct.
    //
    // REPORTED rather than merely entered, and this half is easy to leave out: pushing a frame and
    // saying nothing would still return [] for `npm run good <(npm run bad)`, which is the exact
    // verdict being fixed. The construct hides a whole command by itself, even when what is inside
    // it is a single one, so it belongs in SHELL_OPERATORS — see the measurement in that list's
    // header for why it is the worst member of it rather than a peer of `;`.
    //
    // NO `!escaped.has(i)` GUARD HERE, and its absence is the considered half. The redirect guard
    // below needs one because it asks about a NEIGHBOUR index; this branch asks about the current
    // one, and `escaped` only ever holds indices the loop SKIPS — the backslash branch does
    // `escaped.add(i + 1); i += 1`, so an escaped character never gets its own iteration and
    // `escaped.has(i)` is unconditionally false here. It was written with the guard first; the
    // mutation that deleted it killed no test, because there is no input that reaches it. An
    // always-true condition that reads as a safety check is worse than none.
    //
    // The behaviour it was meant to produce holds anyway and is pinned: `echo \<(x)` returns [],
    // through the backslash branch. bash refuses that string outright — it is a SYNTAX ERROR — so
    // there is no command behind the empty verdict. `<\(` is a different string and correctly not
    // matched here: it is a redirect from a file named `(x)`, which is one command.
    //
    // Reached only after the `arith` continue above, which is load-bearing rather than incidental:
    // `echo $((1<(2)))` prints 1, so inside arithmetic `<(` is a comparison against a parenthesised
    // operand and not a substitution at all.
    if ((c === '<' || c === '>') && src[i + 1] === '(') {
      found.add(`${c}(`);
      stack.push({ kind: 'paren', quote: null, parens: 1 });
      i += 1;
      atWordStart = true;
      continue;
    }

    if (c === '&' && src[i + 1] === '&') { found.add('&&'); i += 1; atWordStart = true; continue; }
    if (c === '|' && src[i + 1] === '|') { found.add('||'); i += 1; atWordStart = true; continue; }
    if (c === '|') { found.add('|'); atWordStart = true; continue; }
    if (c === ';') { found.add(';'); atWordStart = true; continue; }
    // A `&` ADJACENT TO `>` IS A REDIRECT, NOT BACKGROUNDING — `2>&1`, `>&2`, `&>log`. It does not
    // hide a command and it does not touch the exit code: `bash -c 'false 2>&1'` exits 1. Reporting
    // it would attach this rule's message — "the step's exit code becomes the last command's" — to a
    // case where that sentence is simply false, and a rule that fires on correct code with a wrong
    // explanation is one someone deletes rather than obeys. Latent when fixed 2026-08-26: no script
    // in the tree used the shape. A pipe alongside a redirect is still reported, on the pipe.
    // `<&` IS THE INPUT SIDE OF THE SAME THING — `0<&3`, `3<&-`, `exec 3<&0` duplicate or close an
    // input descriptor and run one command, and each exits 0. Only on the left for `<`, never
    // `src[i + 1] === '<'`: `&<` is not a bash construct, so exempting it would widen this for
    // nothing. Adjacency with NO whitespace tolerance is what keeps `npm run a < file & npm run b`
    // reported on its real trailing `&`.
    //
    // IT ASKS WHETHER THAT CHARACTER WAS A REDIRECT OPERATOR, NOT WHETHER IT WAS THAT BYTE, and
    // the difference was a laundering bypass. A backslash-escaped `<` is a LITERAL `<` inside a
    // word — the escape branch above consumes the backslash and leaves the `<` at `src[i - 1]` —
    // so the `&` after it is a real control operator. Measured with a marker oracle, where a
    // laundered chain is both markers present AND exit 0:
    //
    //     LEFT \<& RIGHT      exit 0, both ran   LEFT's exit 7 is GONE
    //     LEFT \<\<& RIGHT    exit 0, both ran
    //     LEFT \>& RIGHT      exit 0, both ran   the `>` arm, wrong the same way since it was written
    //
    // The `<` arm was introduced here and made the scan strictly worse than before it; the `>` arm
    // had the defect from the start. One predicate covers both, because fixing half a class is
    // how the other half gets forgotten.
    if (c === '&' && (redirectOperatorAt(i - 1, '<>') || redirectOperatorAt(i + 1, '>'))) continue;
    if (c === '&') { found.add('&'); atWordStart = true; continue; }
    if (c === '\n' || c === '\r') { found.add('\\n'); atWordStart = true; continue; }

    // WHAT REACHES HERE: ordinary word characters, whitespace, and the metacharacters that have no
    // operator branch of their own — `(` and `)` at the base frame, and `<`/`>` used as redirects.
    // Bash starts a word after every one of them, so a `#` next is a comment. One probe per
    // character, 2026-08-26, and each is the shape that discriminates:
    //
    //     echo a #b     -> a                 whitespace
    //     echo a;#b     -> a                 `;`
    //     echo a&#b     -> a                 `&`
    //     echo a|#b     -> SYNTAX ERROR      the pipe lost its right side to the comment
    //     echo a>#f     -> SYNTAX ERROR      same, the redirect lost its target
    //     (echo a)#y    -> a                 `)` closing a subshell
    //
    // Against which `echo a#b` -> `a#b`, `echo a=#b` -> `a=#b` and `echo -#b` -> `-#b` are NOT
    // comments and must stay mid-word — they reach here on their own first character and fail this
    // test, which is why the rule is a character CLASS and not "anything that is not a letter".
    if (/[\s|&;()<>]/.test(c)) atWordStart = true;
  }

  // Operators first in their canonical order, then the unmodelled constructs. Both are reasons the
  // command is not certifiably one command; `SHELL_OPERATORS.includes(t)` tells a caller which kind
  // it is holding, and the two carry different remedies so they carry different messages.
  return [...SHELL_OPERATORS.filter((op) => found.has(op)), ...[...unmodelled].sort()];
}

/**
 * The commands a step really runs: its own body, then the body of anything it delegates to.
 *
 * ONE HOP WAS ENOUGH TO DEFEAT THE OPERATOR CHECK, and it was measured that way (2026-08-26):
 * with `test:sandbox` set to `npm run check:inner` and `check:inner` set to an `&&` chain,
 * auditSuite() returned zero findings. The wrapper changes nothing the runner can see — it still
 * spawns one command and reads one exit code — so the walk follows the whole delegation chain
 * rather than a fixed number of hops, and a cycle terminates it.
 *
 * Its narrowness is the same narrowness as aliasLinks(): only a BARE `npm run <name>` is followed.
 * `npm run x --silent`, `npx`, npm-run-all, `sh -c "npm run a && npm run b"` (the chain is inside
 * quotes, so the scanner correctly does not see it) and a script that shells out on its own are
 * invisible here and will be walked past. That is the safe direction — this check under-reports
 * rather than refusing a command it did not understand — and it is the same limitation the header
 * records for reachable().
 *
 * THREE OF THOSE SHAPES ARE PINNED BY A TEST, and that is not the same as covering them.
 * `the three DISCLOSED holes in resolveChain are pinned` in scripts/check-suite.test.mjs asserts
 * that `--silent`, `npx` and a quoted chain currently produce NO finding. Without it, a future
 * narrowing of the regex would be indistinguishable from the hole documented here — both look like
 * "this case does not fire" — so the test exists to make the difference visible in a diff. If one
 * of these shapes ever appears in package.json, widen this function and turn that case positive.
 *
 * Returns [{ name, command }] starting with `name` itself. An unknown name returns [].
 */
function resolveChain(scripts, name) {
  const chain = [];
  const seen = new Set();
  let current = name;

  while (current && Object.prototype.hasOwnProperty.call(scripts, current) && !seen.has(current)) {
    seen.add(current);
    const command = String(scripts[current]);
    chain.push({ name: current, command });
    const m = DELEGATION.exec(command.trim());
    current = m ? m[1] : null;
  }

  return chain;
}

/**
 * Every script reachable from `steps`, transitively through `npm run` references.
 *
 * SUPERSEDED 2026-08-26, and it had inverted. This paragraph read: "`check:ledger` runs
 * test:claims/test:classifier/test:ledger, `check:dispatch` runs test:dispatch, `check:warroom`
 * runs test:warroom, `check:memory` runs test:memory, `check:dispatch-prompt` runs
 * test:dispatch-prompt — those five are reached and must NOT be duplicated into STEPS to satisfy
 * the guard." Measured against the tree it describes, all five are reached = FALSE. They were split
 * into their links, which are steps of their own — six for check:ledger, six of six in STEPS — and
 * the five parents became EXCLUDED aliases precisely BECAUSE nothing reaches them. auditSuite()
 * now fails an EXCLUDED entry the suite does reach, so a reader following the old text would have
 * concluded those five entries were the defect.
 *
 * WHY THE WALK STILL MATTERS, which is what the paragraph was for: the alias check depends on it.
 * An alias is excused from the suite because its links are in it, and that is only checkable by
 * walking. Every STEP is a single command today, so reach over the real tree returns the steps
 * themselves and the property would pass vacuously against it — `transitive reach still counts` in
 * scripts/check-suite.test.mjs proves the mechanism against a constructed graph instead.
 */
function reachable(scripts, steps = STEPS) {
  const edges = scriptGraph(scripts);
  const seen = new Set();
  const queue = steps.filter((s) => Object.prototype.hasOwnProperty.call(scripts, s));
  while (queue.length) {
    const name = queue.shift();
    if (seen.has(name)) continue;
    seen.add(name);
    for (const kid of edges.get(name) || []) if (!seen.has(kid)) queue.push(kid);
  }
  return seen;
}

/**
 * The drift guard, as a pure function so the test can run it against a MUTATED package.json and
 * watch it fail. A guard only ever exercised on a tree where it passes is not evidence.
 *
 * Returns { failures: string[] } — empty means the wiring is intact.
 */
function auditSuite({ scripts, steps = STEPS, excluded = EXCLUDED, runner = RUNNER } = {}) {
  const failures = [];
  const has = (n) => Object.prototype.hasOwnProperty.call(scripts, n);

  for (const step of steps) {
    if (!has(step)) {
      failures.push(
        `STEPS names "${step}", which is not a script in package.json. Add the script, or remove the step ` +
          `from STEPS in scripts/lib/check-suite.js.`
      );
    }
  }

  // A STEP that is itself a shell chain is this file's own defect, one level down. `check:ledger`
  // was six links behind one name: `&&` stopped at the first failure, the runner reported one
  // failed step, and `ledger lint`, `ledger build --check` and `ledger verify` had not run. The
  // runner cannot see inside a step — it spawns `npm run <step>` and reads one exit code — so the
  // only place this is catchable is here, on the command string.
  //
  // THE CHECK IS ON THE RESOLVED COMMAND, NOT THE STEP'S OWN STRING, and it covers every operator
  // rather than `&&`. Until 2026-08-26 it was `String(scripts[step]).includes('&&')`, which three
  // one-line mutations walked straight past — `;`, `||` and `|` each returned zero findings — and
  // which one wrapper script defeated outright. `;` is the dangerous one: `&&` at least reddens
  // the step, while a `;` chain hands back the LAST command's exit code and the failure is gone.
  for (const step of steps) {
    if (!has(step)) continue;
    for (const link of resolveChain(scripts, step)) {
      const findings = shellOperators(link.command);
      if (!findings.length) continue;

      const { operators: ops, unmodelled } = splitFindings(findings);

      // A CONSTRUCT THE SCANNER DOES NOT MODEL IS NOT A PASS, and it is not an operator either —
      // different cause, different remedy, so it does not borrow the operator message. There is no
      // per-step exemption for it on purpose: EXCLUDED governs reachability, not chains, and a step
      // that needs an exotic quoting form can be given its own script instead.
      if (unmodelled.length) {
        const list = unmodelled.map((u) => `\`${u}\``).join(', ');
        const via = link.name === step ? '' : ` (through "${link.name}")`;
        failures.push(
          `STEPS names "${step}"${via}, whose command contains ${unmodelled.length > 1 ? 'constructs' : 'a construct'} ` +
            `this checker does not model: ${list} — ${link.command}. It CANNOT be certified as one command. Inside a ` +
            `form whose quoting rules the scanner does not know, its quote parity desyncs from the shell's and a real ` +
            `chain comes back with NO findings at all: measured, \`echo $'a\\'b'; echo SECOND\` runs both commands ` +
            `because the \`\\'\` does not close the string. Rewrite the command without it, or give the exotic part its ` +
            `own script and its own entry in STEPS.`
        );
      }

      if (!ops.length) continue;

      const list = ops.map((op) => `\`${op}\``).join(', ');
      const where =
        link.name === step
          ? `whose command carries ${ops.length > 1 ? 'shell operators' : 'the shell operator'} ${list}`
          : `which delegates to "${link.name}", whose command carries ` +
            `${ops.length > 1 ? 'shell operators' : 'the shell operator'} ${list}`;

      failures.push(
        `STEPS names "${step}", ${where}: ${link.command}. A step is ONE command and the runner reads ONE ` +
          `exit code from it — a wrapper does not change that. \`&&\` stops at the first non-zero exit so the ` +
          `later links never run; \`;\`, \`|\` and \`&\` are worse, because the step's exit code becomes the ` +
          `last command's and the failure disappears entirely (\`bash -c 'false ; true'\` exits 0); \`||\` ` +
          `passes the step whenever the fallback passes; \`<(\` and \`>(\` are worse than all of them, because ` +
          `the substituted command's status is not merged, masked or last — it is DISCARDED, and ` +
          `\`bash -c 'true <(exit 7); echo exit=$?'\` prints exit=0. Give each link its own script and its own entry in ` +
          `STEPS, and keep "${step}" — if a doc cites it — as an alias in EXCLUDED.`
      );
    }
  }

  // A step this guard does not govern can be deleted from STEPS in silence: nothing then reports
  // it as unreached, because only GOVERNED names are checked for reachability. `lint:agents` was
  // exactly that for as long as GOVERNED read /^(?:check|test):/ — a step of the suite that the
  // drift guard was not guarding. Checked here rather than only widening the pattern, because a
  // pattern is a list of the prefixes someone thought of.
  for (const step of steps) {
    if (GOVERNED.test(step)) continue;
    failures.push(
      `STEPS names "${step}", whose prefix is outside GOVERNED in scripts/lib/check-suite.js. A step that ` +
        `is not governed can be REMOVED from the suite without this guard noticing, which is the whole ` +
        `defect it exists to catch. Add the prefix to GOVERNED, or rename the script under one already ` +
        `there.`
    );
  }

  const dupes = steps.filter((s, i) => steps.indexOf(s) !== i);
  for (const d of new Set(dupes)) {
    failures.push(`STEPS lists "${d}" more than once — running it twice hides which run failed.`);
  }

  const reached = reachable(scripts, steps);

  for (const name of Object.keys(scripts)) {
    if (!GOVERNED.test(name)) continue;
    if (reached.has(name)) continue;
    if (Object.prototype.hasOwnProperty.call(excluded, name)) continue;
    failures.push(
      `"${name}" is a check:/test: script in package.json that nothing in the suite reaches, directly or ` +
        `through an \`npm run\` reference. It would never run under \`npm run check\`. Either add it to STEPS ` +
        `in scripts/lib/check-suite.js, or add it to EXCLUDED there with the reason written down.`
    );
  }

  for (const [name, reason] of Object.entries(excluded)) {
    if (!has(name)) {
      failures.push(
        `EXCLUDED names "${name}", which is no longer a script in package.json. Delete the entry — a stale ` +
          `exemption reads as a considered decision and is not one.`
      );
      continue;
    }
    if (reached.has(name)) {
      failures.push(
        `EXCLUDED names "${name}", but the suite does reach it. Delete the entry; an exemption that exempts ` +
          `nothing will be trusted the next time it does.`
      );
    }
    // An alias is excused from the suite BECAUSE its links are in it. That is a checkable claim,
    // so it is checked: exempting `check:ledger` while `check:ledger-verify` is in no step list
    // would read as a considered split and be a check running nowhere.
    const links = aliasLinks(scripts[name]);
    if (links) {
      const orphans = links.filter((link) => !reached.has(link));
      if (orphans.length) {
        failures.push(
          `EXCLUDED names "${name}", an alias for ${links.join(', ')} — but ${orphans.join(', ')} is reached ` +
            `by nothing in the suite either. An alias is out of the suite because its links are in it; with a ` +
            `link missing, this entry exempts a check that then runs nowhere.`
        );
      }
    }

    if (!hasSubstantiveReason(reason)) {
      failures.push(
        `EXCLUDED["${name}"] has no substantive reason. Write why it is out of the suite, so the next reader ` +
          `can disagree with the decision instead of guessing at it.`
      );
    }
  }

  if (!String(scripts.check || '').includes(runner)) {
    failures.push(
      `package.json's "check" script no longer runs ${runner} — it is "${scripts.check}". The suite is a ` +
        `single runner on purpose: an \`&&\` chain stops at the first failure and silently skips the rest, ` +
        `which is the defect this file exists to prevent.`
    );
  }

  return { failures };
}


// ── ci.yml, the OTHER file that runs these checks ────────────────────────────────────────────────
//
// MOVED HERE 2026-08-26 from scripts/check-suite.test.mjs, where all of it lived. That broke the
// lib/test separation this very file enforces on the package.json side: the parser, the allowlist
// and the chain predicate were assertions with no library behind them and no way to run them except
// by running 48 tests. `npm run check:ci-chains` is the entry point; ciChainFindings() stays PURE
// over both of its inputs so a test can drive it against MUTATED workflow text and watch it fail.
//
// The functions below take the workflow as a STRING and never read the filesystem — that is what
// makes the mutation proofs possible, and it is why CI_PATH and the file read stayed in the test.

/** The guard, spelled once. `!cancelled()` and not `always()`: a cancelled run must actually stop. */
const CI_GUARD = '${{ !cancelled() }}';

/**
 * The marker that says a finding is a REFUSAL rather than a chain, spelled once and exported.
 *
 * scripts/check-ci-chains.mjs prints a different remedy for each kind, and until 2026-08-26 it
 * chose by testing whether the message contained the words "cannot decode" — dispatching on a
 * substring of a generated English sentence, so rewording the message would have silently switched
 * every reader onto the wrong instruction. A constant both sides import cannot drift that way.
 */
const UNPARSED_PREFIX = 'UNPARSED:';


/**
 * The four keys a step is read for, spelled once — and the two whose VALUE is safety-bearing.
 *
 * `key in step` was the test until 2026-08-26, and it meant every field the PARSER hangs on a step
 * — `line`, and now `unparsed` — was also a YAML key a workflow could write into.
 *
 * NOT A DE-DUPLICATION, and the JSDoc here claimed to be one until 2026-08-26. The object literal
 * in the loop below still spells `name`, `run`, `uses`, `if` because it also carries `line` and
 * `unparsed`, which are not YAML keys and must not be recordable; building it from this list would
 * have to add them back one at a time. One list, two spellings, and this line is the reason they
 * are allowed to differ rather than a claim that they do not.
 *
 * SAFETY_KEYS is the narrower list, and the narrowness was derived rather than assumed. A wrong
 * `run:` hides a shell chain; a wrong `if:` hides a step with no `!cancelled()` guard — both are
 * compared BY VALUE (`step.if !== CI_GUARD`). `name:` and `uses:` are only ever tested for
 * identity or non-null, so misreading one cannot hide a command. That matters because the refusal
 * below is a CI failure: scoping it to all four would fail a workflow over `name: "Build: step 1"`,
 * which is ordinary, correct, harmless YAML.
 */
const STEP_KEYS = ['name', 'run', 'uses', 'if'];
const SAFETY_KEYS = ['run', 'if'];

/**
 * A `run:`/`if:` value this parser REFUSES to read, because reading it means implementing YAML.
 *
 * ROUND 9, AND THE POINT IS THE DELETION. Round 8 modelled these shapes: quoted flow scalars were
 * unquoted through a 17-entry escape table, and plain multi-line scalars were folded. Both were
 * exact against PyYAML on 42 probes. Both are gone, and this predicate replaces them, because the
 * gate then found a P1 IN THE MODELLING — and the shape of that P1 is the argument:
 *
 *     run: "npm run good <\        real YAML: an escaped line break collapses to NOTHING, so the
 *       (npm run bad)"             value is `npm run good <(npm run bad)` — a process substitution
 *
 *     the fold joined the continuation with a SPACE, then the decode read the leftover `\`+space
 *     as the ordinary escaped-space escape, and the value came out `npm run good < (npm run bad)`
 *     — a phantom space, `<(` never adjacent, ciChainFindings -> []. A SILENT CLEAN on exactly the
 *     construct round 8 added detection for.
 *
 * That is the ninth bypass in this function and the third in the YAML layer. The rule from round 3
 * applies: when a fix is the third of its kind, the defect is the approach. So the approach is
 * inverted the same way the `$`-vocabulary gate inverted it one layer down — DECLARE WHAT IS READ,
 * REFUSE THE REST — and the read set is the census of what the file actually contains: a plain
 * single-line scalar, or a block scalar. Measured 2026-08-26 across all 44 `run:` values in
 * .github/workflows/ci.yml: 44 plain single-line, 0 quoted, 0 multi-line, 0 starting with any
 * indicator below. The refusal changes ZERO live verdicts.
 *
 * THE CHARACTER CLASS IS WIDER THAN "A QUOTE", and that width came from a bypass the quote-only
 * version would have left open. `run: *c`, with `&c npm run a && npm run b` anchored anywhere
 * earlier in the file, is a YAML ALIAS: PyYAML 6.0.3 resolves it to the chain, and this parser read
 * the four characters `*c` and returned []. That was true before round 8 as well as after, so it is
 * a hole this refusal closes rather than one it was written for. `!!str npm run a && npm run b`
 * is the same class through a tag. Both are indicators, so both are refused now.
 *
 * `|` and `>` are NOT here: they reach the block-scalar branch above this check and never get to
 * it. That is deliberate and it is what makes the refusal cost nothing — a block scalar has no
 * escapes and no quoting rules, so ANY command that cannot be a plain scalar can be written as
 * one. Measured: `run: |-` carries `node -e "a: 1" && npm run b`, `npm run a # literal`,
 * `{echo a; echo b;}` and `*glob npm run a` through PyYAML byte for byte, and every one of those
 * is either invalid or differently-parsed as a plain scalar.
 *
 * THE HATCH IS TOTAL; THE READING OF IT IS NOT, and the first version of this passage said only the
 * first half. It read "The escape hatch is total", which is a claim about what is ENFORCED made by
 * a sentence — the defect this repo exists to refuse — and P1-1 of round 9's review proved the
 * gap: a block header carrying an explicit indentation indicator was read WRONG, silently, on
 * `main` as well as here. That shape is refused now, so the two halves agree again; the sentence
 * is left in two parts so the next reader can see which half is the claim and which is the check.
 */
const NON_PLAIN_SCALAR = /^["'&*!%@`{}[\],]/;


/**
 * The steps of EVERY job in ci.yml, read off the indentation.
 *
 * Zero dependencies in this repo means no YAML parser, so this is a line scanner — and it derives
 * every indent from the file rather than hardcoding 6 and 8, so a reindent does not turn it
 * vacuous. It handles a `run: |` block scalar, which nothing in the file uses today; that is the
 * shape a future multi-command step would arrive in, and a scanner that skipped it would report
 * such a step as having no `run:` at all.
 *
 * ROUND 11, AND THE DEFECT WAS ONE SENTENCE: a shape this parser did not read was indistinguishable
 * from a step that runs nothing. `run: null` is what both look like, and every check downstream
 * filters on it. EIGHT shapes of VALID YAML carrying `npm run x && npm run y` were SILENT on
 * `main` (244e8db) — ciChainFindings -> [], unguardedSteps -> [] — and each is checked against
 * PyYAML 6.0.3 in scripts/check-suite.test.mjs's fixtures:
 *
 *     run : npm run x && npm run y       a space before the colon
 *     "run": npm run x && npm run y      a quoted key
 *     - {run: npm run x && …}            a flow mapping as the item
 *     - <<: *base                        a merge key pulling the run in from an anchor
 *     -  name: A  /  run: …              a two-space dash: the keys sit at +3, not +2
 *     steps: [{run: …}]                  a flow sequence: stepsIndent was never set, 0 steps parsed
 *     a second job                       `break` on the first dedent out of job one's steps
 *     steps: / - at the same column      a FLUSH sequence; see the dedent branch in the loop
 *
 * THE EIGHTH IS A REGRESSION THIS FILE INTRODUCED AND A REVIEW CAUGHT, not a pre-existing hole, and
 * it is listed with the others because the reader needs the shape either way. Round 11's first cut
 * replaced the `break` with a resume; the `break` had been collapsing the parse to ZERO steps on a
 * flush job, which tripped the CI_CHAINS_ALLOWED rot-check and nine tests. An ACCIDENTAL backstop,
 * named by nothing and tested by nothing — so removing it left every test green. That is the exact
 * class this file warns about in four other places, committed by the change closing seven of them.
 *
 * The first four are the same silence in record(); the fifth is a hardcoded key column; the sixth
 * and seventh are structural. THE CURE IS THE ONE ROUND 9 USED — declare what is read and refuse
 * the rest — applied one layer up, at the LINE rather than at the value. Measured across the real
 * ci.yml BEFORE making the change: 50 item lines and 97 step-key lines, of which 0 are anything but
 * a plain `key: value` pair, 1 job, 0 inline `steps:`, 0 bare `-`. The refusals change ZERO live
 * verdicts, and the parser's counts agree with PyYAML's exactly.
 *
 * THE TWO LINE COUNTS ARE PROVENANCE, NOT A LIVE FIGURE. This same change adds two steps to ci.yml,
 * so they are 52 and 101 now — and stating them as current is the rot this file spends its length
 * warning about. The load-bearing number is the ZERO, which is why the refusals cost nothing, and
 * `check:ci-chains` re-derives it on every run rather than trusting this paragraph.
 *
 * IT READS EXACTLY TWO SHAPES, and refuses every other one. A `run:`/`if:` value is either a plain
 * single-line scalar — taken verbatim, which is what all 44 of ci.yml's `run:` values are — or a
 * block scalar, joined literally. Anything else is an UNPARSED finding: a value continued onto a
 * following line, and a value beginning with a YAML indicator (see NON_PLAIN_SCALAR).
 *
 * ROUND 8 MODELLED THOSE TWO SHAPES INSTEAD, AND THAT IS WHAT THIS DELETES. It folded plain
 * continuations and unquoted flow scalars through a 17-entry escape table, exact against PyYAML on
 * 42 probes — and the gate found a P1 inside the modelling anyway: a double-quoted value wrapped
 * across an ESCAPED LINE BREAK folded with a space, the leftover `\`+space decoded as the
 * escaped-space escape, and `<(` came out as `< (`. Silent clean, on the construct round 8 existed
 * to detect. Nine bypasses in this file, the last three in this layer; the round-3 rule says the
 * third fix of a kind means the approach is the defect, so the approach is inverted rather than
 * patched again. Refusing cannot under-report: there is no decoding left to get wrong.
 *
 * WHAT REFUSING COSTS, enumerated rather than waved past. A chain inside a quoted scalar was
 * SILENTLY CLEAN before round 8, decoded during it, and is a LOUD finding now. A plain multi-line
 * continuation was SILENTLY DROPPED before, folded during, and is a LOUD finding now. Both are
 * strictly safer than the state this file shipped in for the whole of its life before round 8; what
 * is lost is only the precision of the MESSAGE — "this cannot be read" rather than "this carries
 * `&&`" — and the remedy is actionable either way. Measured cost today: ZERO, across 44 `run:`
 * values, 0 quoted, 0 multi-line, 0 indicator-initial.
 *
 * Returns [{ line, name, run, uses, if, unparsed }] — `null` for a key the step does not carry, and
 * `unparsed` listing the refusals, which ciChainFindings() reports as their own kind. An `unparsed`
 * entry with `key: null` is a LINE the parser could not read, so it carries its own `line`; one
 * with a key names the value it could not decode.
 */
function parseCiSteps(workflow) {
  const lines = workflow.split('\n');
  const steps = [];
  let stepsIndent = null;
  let itemIndent = null;
  // The column the step's KEYS sit at, derived from the width of the `- ` that opened the item
  // rather than fixed at itemIndent + 2. `-  name: A` is ordinary YAML and puts them at +3; the
  // fixed offset read that step's `run:` as belonging to no key at all. See the item branch.
  let itemKeyIndent = null;
  let current = null;
  let block = null; // { key, indent, parts[] } while inside a `key: |` scalar
  let open = null; // { key, keyIndent } while a plain scalar could still be CONTINUED on a later line
  // The enclosing key chain OUTSIDE a steps block, innermost last, by indentation. It exists to
  // answer one question — is this `steps:` a JOB's steps — and nothing else reads it.
  const parents = []; // [{ indent, key }]

  const indentOf = (line) => /^ */.exec(line)[0].length;

  /**
   * Record a refusal against a step, ONCE per key.
   *
   * ONE ENTRY PER KEY, not per offending line: a value split over four lines is one value this
   * parser could not read, and four identical findings would read as four defects. Scoped to
   * SAFETY_KEYS, because this refusal FAILS A BUILD and `name: "Build: step 1"` is correct YAML.
   */
  const refuse = (step, key, why) => {
    if (!SAFETY_KEYS.includes(key)) return;
    if (step.unparsed.some((u) => u.key === key)) return;
    step.unparsed.push({ key, why, value: step[key] });
  };

  /**
   * Record a refusal against a LINE, for a shape whose key this parser never got to read.
   *
   * `key: null` IS THE POINT, not a placeholder. refuse() above knows which key it could not read
   * and can therefore scope itself to SAFETY_KEYS; here the failure IS the key — `run : x`,
   * `"run": x`, `{run: x}` and `<<: *base` are all valid YAML that record()'s pattern does not
   * match, so the parser cannot say whether a `run:` or an `if:` is hiding on the line. Scoping is
   * not available, and refusing is the only answer that does not read as "this step runs nothing".
   *
   * ONE PER STEP, not one per line, for refuse()'s reason: a step this parser could not read is one
   * problem, and three findings about it would read as three.
   */
  const refuseLine = (step, lineNo, text, why) => {
    if (step.unparsed.some((u) => u.key === null)) return;
    step.unparsed.push({ key: null, line: lineNo, why, value: text });
  };

  // THE LIST IS AN ILLUSTRATION, NOT A CLOSURE, and it says so — it read as exhaustive and was not.
  // `- # comment` and a bare `-` are both valid YAML that reach this refusal and are none of the four
  // named, so a contributor matching their line against the list would conclude the message was about
  // someone else's problem. Naming the RULE first and the examples second is what keeps it true as the
  // set of shapes it catches grows.
  const NOT_A_KEY_LINE =
    'this parser reads exactly one shape at a step key position — a plain `key: value` pair at the ' +
    'start of the line — and refuses everything else rather than guessing. Valid YAML that lands here ' +
    'includes, and is not limited to, a quoted key, a space before the colon, a flow mapping, a merge ' +
    'key, an item carrying only a comment, and a bare `-`';

  /** True when `text` was read as a key line; false when it is a shape this parser does not read. */
  const record = (step, text, keyIndent) => {
    // NO `open = null` HERE, and its absence is measured rather than assumed. The first draft reset
    // the watch at the top of this function AND in the loop below, on the reasoning that a key line
    // ends the previous key's. Both are true and they are REDUNDANT: mutating either one alone
    // killed no test, and mutating both together failed with `a with: body was folded into the
    // uses: above it`. Two guards for one rule means neither can be shown to work, so the general
    // one — the loop's, which also covers lines this function never sees — is the one that stayed.
    const m = /^([\w-]+):\s*(.*)$/.exec(text);
    // THE ONE `false` PATH, and every other return below is a line this parser DID read. Until
    // 2026-08-26 this was a bare `return` and the caller ignored it, so four shapes of valid YAML
    // left the step with `run: null` — indistinguishable, to every check downstream, from a step
    // that runs no command at all. See refuseLine().
    if (!m) return false;
    const [, key, rawValue] = m;
    // `with:`, `env:` and friends are not what this asserts on. Returning BEFORE the watch is armed
    // is tidiness rather than correctness, and it is labelled that way because a mutation proved
    // it: arming it here too writes into `step.with` / `step.env`, which nothing reads, and changed
    // nothing on the public surface across 45 inputs. What DOES keep a `with:` body out of the
    // `uses:` above it is the watch reset in the loop, and that one fails a test when removed.
    if (!STEP_KEYS.includes(key)) return true;
    // AN EXPLICIT INDENTATION INDICATOR IS REFUSED, and this is round 10's whole change. The header
    // regex accepted `|2`, and then the body's baseline was taken from the FIRST CONTENT LINE
    // instead of from the indicator — so a first line indented DEEPER than the indicator sets a
    // baseline every later line falls short of, and every later line then closes the block.
    // Measured 2026-08-26 on `main` (7f7bddd) and on round 9 (bff6bbe), IDENTICALLY on both, so
    // this is older than Wave 1 and not something this branch introduced:
    //
    //     run: |2            PyYAML -> "    npm run test:gate\n  && npm run some:unreviewed:step\n"
    //       npm run test:gate          (14 spaces)
    //     && npm run some:unreviewed:step   (12 spaces)
    //
    //     this parser -> "npm run test:gate"      ciChainFindings -> []      SILENT CLEAN
    //
    // `>2`, `|2+` and `|-2` do the same; `|9` is invalid YAML outright. REFUSED RATHER THAN
    // HONOURED, which is one more deletion and not one more model — the same trade round 9 made,
    // and the reason it is safe is the same: nothing in ci.yml uses one (0 of 44), and a block
    // scalar without an indicator expresses everything one with an indicator can.
    //
    // CHOMPING STAYS READ, and that was verified here rather than inherited. `|-` and `|+` change
    // only the TRAILING newline — measured, `|-` gives `npm run a\n&& npm run b` and `|+` gives the
    // same plus a trailing `\n` — and a trailing newline is not a second command. Both produce the
    // identical finding on both trees.
    // A BLOCK INDICATOR MAY CARRY A TRAILING YAML COMMENT — `run: | # note` is valid, and PyYAML
    // reads it as a block scalar. Without the comment arm this pattern missed it and the value was
    // read as the plain scalar `| # note`, which `main` still does today: it reports a phantom
    // `` `|` `` operator on a one-command step. The block branch is FIRST, which is what keeps `|`
    // and `>` out of NON_PLAIN_SCALAR: they are the two indicators this parser does read, and they
    // are the escape hatch that makes refusing the others cost nothing.
    //
    // ONE PATTERN, AND THE HEADER IS CAPTURED — both halves fix a live defect. Round 10 wrote this
    // as TWO regexes, one spanning the header AND its comment for the refusal test and a narrower
    // one for the read, then applied `/\d/` to the WHOLE value. A digit anywhere in the COMMENT
    // therefore satisfied it, and `run: | # step 2 of 3` was refused with a message stating it
    // carried an indentation indicator — which it does not. That is a regression against round 9,
    // which read all four of these correctly, and it is live rather than theoretical: this repo's
    // own ci.yml comments are dense with numbers. Measured 2026-08-26 before the fix —
    //
    //     | # note                  clean          | # step 2 of 3        REFUSED, falsely
    //     | # 44 sequential checks  REFUSED        |- # bun 1.3.10       REFUSED, falsely
    //     | # see #106              REFUSED        |2 # step 2 of 3      REFUSED, correctly
    //
    // — and the last row is why the test below pins BOTH directions: a case asserting only the
    // refusal passes under the bug that produced it.
    //
    // Capturing also means there is now ONE place that decides whether a value is a block header.
    // Two patterns for one question is how they come to disagree, which is what happened here.
    const header = /^([|>][-+\d]*)(?:\s+#.*)?$/.exec(rawValue);

    // AN EXPLICIT INDENTATION INDICATOR IS REFUSED, tested against the HEADER and not the comment.
    if (header && /\d/.test(header[1])) {
      step[key] = rawValue.trim();
      refuse(step, key, 'its block header carries an explicit indentation indicator, which this parser does not honour');
      return true;
    }
    if (header) {
      // `keyIndent` is the column of the KEY, and the block ends at the first non-blank line that
      // is not indented past it. Anchoring to the first CONTENT line instead was a defect: see the
      // loop below.
      block = { key, keyIndent, indent: null, parts: [] };
      step[key] = '';
      return true;
    }
    step[key] = rawValue.trim();
    // REFUSED BUT STILL STORED. The raw text stays on the step so `run !== null` keeps meaning
    // "this step runs something" for every other check here; what the refusal buys is that
    // ciChainFindings() reports it and does NOT then scan it, which is the contradiction round 8
    // shipped — a message saying the value was not scanned, printed beside a finding from scanning
    // it.
    if (NON_PLAIN_SCALAR.test(step[key])) {
      refuse(step, key, 'it begins with a YAML indicator, so it is not a plain scalar and this parser does not decode it');
      return true;
    }
    open = { key, keyIndent };
    return true;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (block) {
      // A BLANK LINE IS CONTENT AND MUST NEVER SET THE BASELINE. It did, and that was the defect:
      // a `run: |` beginning with a blank line took its indent from the NEXT non-blank line, which
      // for a block that has no content at all is the `- name:` of the FOLLOWING step. Reproduced
      // 2026-08-26 on `run: |` / blank / `- name: After`: the parser returned TWO steps where three
      // exist, and After's `name`, `if` and `run` were swallowed into the block's `run` value. Every
      // check here that iterates steps then passes it in silence — including the `!cancelled()`
      // guard, so a genuinely unguarded step becomes undetectable. Dormant only because ci.yml has
      // no block scalar today, which is a property of the input and not of this parser.
      if (!line.trim()) { block.parts.push(''); continue; }
      const indent = indentOf(line);
      if (indent > block.keyIndent) {
        if (block.indent === null) block.indent = indent;
        if (indent >= block.indent) {
          block.parts.push(line.slice(block.indent));
          current[block.key] = block.parts.join('\n').trim();
          continue;
        }
      }
      // Out of the block. NOT consumed — execution falls through to the step parsing below, so a
      // `- name:` on this line opens the next step instead of vanishing into the previous one.
      block = null;
    }

    // A BLANK LINE DOES NOT END A PLAIN SCALAR — measured with PyYAML, `run: npm run a` / blank /
    // `  ; npm run b` is the ONE string `npm run a\n; npm run b`. So the continuation watch has to
    // survive a blank line, or a value split across one is refused on the wrong grounds and, worse,
    // is not refused at all when the continuation then reads as an unrelated line.
    if (!line.trim()) continue;
    // A YAML comment TERMINATES a plain scalar — measured, a continuation line after one is a
    // parse error, not a continuation — so it closes the watch rather than being caught by it.
    if (/^\s*#/.test(line)) { open = null; continue; }

    if (stepsIndent === null) {
      // WHICH `steps:` IS A JOB'S STEPS — asked of the block structure, not of the four characters.
      //
      // The pattern here was `/^( *)steps:(.*)$/`, matching ANY line beginning `steps:` at any
      // depth, and the multi-job resume above makes that reachable between every pair of jobs. So
      //
      //     strategy:
      //       matrix:
      //         steps: [1, 2]      <- correct YAML, and a BLOCKING finding
      //
      // failed the build, with a message reading "this parser reads no step of this job at all"
      // while parseCiSteps returned three steps INCLUDING that job's. False about the input, and
      // fatal to a build. A rule that fires on correct code gets weakened, which this repo has
      // already learned twice, so it is scoped instead.
      //
      // `parents` is the enclosing key chain by indentation, and it answers exactly one question:
      // is this key's parent a job, and its grandparent `jobs:`? That is a fact about the document
      // structure the scanner already walks, not a model of YAML semantics — the distinction that
      // separates this from the escape-table modelling rounds 8 and 9 deleted.
      const key = /^( *)([\w-]+):(.*)$/.exec(line);
      const nonPlainKey = !key && /^ *["']?steps["']?\s*:/.test(line);
      const depth = key ? key[1].length : indentOf(line);
      while (parents.length && parents[parents.length - 1].indent >= depth) parents.pop();
      const atJobChild = parents.length === 2 && parents[0].key === 'jobs';

      if (nonPlainKey && atJobChild) {
        // THE OPENER LAYER GETS THE SAME CURE AS THE ITEM AND KEY LAYERS, and it did not have it:
        // `"steps":` or `steps :` at a job's child level names a steps block this parser cannot
        // read, and it was skipped in silence — the same shape as the four closed one layer down.
        // Scoped to the job-child position by `parents`, so it cannot fire on a `matrix:` key.
        steps.push({
          line: i + 1,
          name: null,
          run: null,
          uses: null,
          if: null,
          unparsed: [{
            key: null,
            line: i + 1,
            why: 'it names a job\'s `steps` key in a form this parser does not read — a plain ' +
              '`steps:` at the start of the line is the only one it opens a block for',
            value: line.trim(),
          }],
        });
        continue;
      }
      if (key) parents.push({ indent: depth, key: key[2] });
      if (!key || key[2] !== 'steps' || !atJobChild) continue;

      // A BLOCK SEQUENCE OR NOTHING. `steps:` with a value on the same line is a flow sequence —
      // `steps: [{name: A, run: npm run x && npm run y}]` is valid YAML that GitHub runs — and the
      // `\s*$` this pattern used to end with simply did not match it, so stepsIndent was never set,
      // parseCiSteps returned [] and every check downstream reported a clean file. A trailing YAML
      // comment is not a value and does not trigger the refusal.
      const trailing = key[3].replace(/\s+#.*$/, '').trim();
      if (trailing) {
        steps.push({
          line: i + 1,
          name: null,
          run: null,
          uses: null,
          if: null,
          unparsed: [{
            key: null,
            line: i + 1,
            // SAYS ONLY WHAT IS CHECKED. This read "…and this parser reads no step of this job at
            // all", which was false whenever the scan carried on into another job and found some.
            why: 'its `steps:` key carries a value on the same line, so the steps of this job are a ' +
              'flow sequence and this parser reads block sequences only',
            value: line.trim(),
          }],
        });
      } else {
        stepsIndent = depth;
        itemIndent = null;
        itemKeyIndent = null;
        current = null;
      }
      continue;
    }

    const indent = indentOf(line);

    // A FLUSH SEQUENCE IS A STEP, NOT A DEDENT — and this is the hole the `break` used to cover.
    // YAML lets a block sequence sit at the SAME column as the key that owns it, so
    //
    //     steps:              <- column 4
    //     - name: A           <- column 4, and this is a step of that `steps:`
    //       run: npm run x && npm run y
    //
    // is ordinary YAML that GitHub runs. `indent <= stepsIndent` read the item as the end of the
    // block, the reset below stepped over the whole job, and the parse carried on into the NEXT
    // job — so a flush-style job prepended to the real ci.yml produced a view BYTE-IDENTICAL to the
    // pristine file: 52 steps, 49 `run:` values, 0 findings, 0 unguarded. Measured 2026-08-26.
    //
    // ON `main` THE SAME INPUT BLOCKS, AND THAT IS WHY THIS IS A REGRESSION RATHER THAN A RESIDUAL.
    // `break` collapsed the parse to ZERO steps on meeting the shape, which tripped the
    // CI_CHAINS_ALLOWED rot-check and nine tests in scripts/check-suite.test.mjs. It was an
    // ACCIDENTAL backstop — nothing named it, nothing tested it — and replacing the `break` with a
    // resume removed it while every existing test stayed green. A deletion attracts no test cases;
    // this comment and the case below are the ones it should have attracted.
    //
    // READ, NOT REFUSED. The two shapes are the same sequence written two ways, so the honest
    // finding is the chain itself rather than "this cannot be read" — and the item branch already
    // derives its own column, so nothing else needed changing. `- ` at exactly `stepsIndent` cannot
    // be anything else: a SIBLING key of `steps:` sits at that column too, but a sibling is
    // `key:`-shaped, never `- `-shaped, so the two do not collide.
    const flushItem = indent === stepsIndent && /^ *- /.test(line) &&
      (itemIndent === null || itemIndent === stepsIndent);

    if (indent <= stepsIndent && !flushItem) {
      // OUT OF THIS JOB'S STEPS BLOCK — AND THAT IS NOT THE END OF THE FILE. This was `break`, and
      // the `break` was a total bypass: a workflow's SECOND job was never parsed, so a step there
      // was invisible to the chain check, to the `!cancelled()` guard and to the runner ban alike.
      // Measured 2026-08-26 on `main` (244e8db) against the real ci.yml with a second job appended
      // whose items sit at 8 spaces: ciChainFindings -> [], unguardedSteps -> [], and every
      // raw-line cross-check in scripts/check-suite.test.mjs still agreed with the parser, because
      // those count `/^ {6}- /` and the injected items are not at six. Nothing in the repo saw it.
      //
      // ci.yml has ONE job today, so this changes no live verdict — it removes the shape in which a
      // second one would have arrived unread. The state reset is the whole of it: `i -= 1` hands
      // this same line back to the `steps:` detector above, which is the one place that decides
      // what opens a steps block.
      stepsIndent = null;
      itemIndent = null;
      itemKeyIndent = null;
      current = null;
      open = null;
      block = null;
      i -= 1;
      continue;
    }

    // ── A CONTINUATION LINE: the value carries on past the line its key is on, so this parser has
    // not seen the whole of it. REFUSED, not folded — folding is what round 8 did and what the P1
    // came out of.
    //
    // THE `continue` IS INERT, and it is labelled that way rather than defended. The first draft of
    // this comment claimed the line must be consumed "or it falls through and is read as something
    // else"; a mutation deleting the `continue` killed no test, and a differential over 58 inputs
    // found none that tells the two apart. It cannot: a line reaching here is deeper than
    // itemIndent + 2, so falling through it would be dropped by the key dispatch anyway. It stays
    // because a line this parser has declared unread should not travel on to code written for key
    // lines — a structural preference, not a correctness claim, and the difference is the point.
    //
    // Armed only by a key record() stored a plain scalar into, so a nested mapping under `with:`
    // still falls through and is dropped as it always was. The guard is `indent > open.keyIndent`
    // and not `>=`: measured, a continuation at the SAME column as its key is a YAML ERROR, so a
    // workflow shaped that way does not run at all. An item line cannot reach here either — `- `
    // sits at itemIndent and every key is at itemIndent + 2 or deeper.
    if (current && open && indent > open.keyIndent) {
      refuse(current, open.key, 'its value continues onto the line(s) below it, so this parser has not read all of it');
      continue;
    }
    // ANY line that is not a continuation ENDS the watch — a key at the step's own indent, the `- `
    // of the next item, or a nested mapping's first line. `with:` is the case that matters and it
    // is in the real ci.yml three times: its body is more indented than the `uses:` above it, and
    // treating that as a continuation would refuse three correct steps. This is the ONLY place the
    // watch is closed; see record() for why there is not a second one.
    open = null;

    // THE ITEM LINE, AND THE KEY COLUMN IS READ OFF IT rather than assumed to be itemIndent + 2.
    // `-  name: A` — two spaces, ordinary YAML, PyYAML reads it as an ordinary step — puts the
    // step's keys at +3, and the fixed offset then matched none of them: the `run:` below it was
    // dropped without a word. `item[2]` is the run of spaces after the dash, so the column is
    // computed from what is written.
    const item = /^( *)-( *)(.*)$/.exec(line);
    if (item && (itemIndent === null || item[1].length === itemIndent)) {
      itemIndent = item[1].length;
      itemKeyIndent = itemIndent + 1 + item[2].length;
      current = { line: i + 1, name: null, run: null, uses: null, if: null, unparsed: [] };
      steps.push(current);
      if (!record(current, item[3], itemKeyIndent)) {
        refuseLine(current, i + 1, line.trim(), NOT_A_KEY_LINE);
        // A BARE `-` opens a step whose keys align with nothing on this line — valid YAML, and the
        // column is whatever the first key line uses. The step is already refused, so this is only
        // about giving the lines below it a plausible column to be read at rather than dropping
        // them silently; ci.yml has no bare item (0 of 50), so it costs nothing either way.
        if (!item[3]) itemKeyIndent = itemIndent + 2;
      }
      continue;
    }

    if (current && indent === itemKeyIndent) {
      // REFUSED RATHER THAN DROPPED, and this is the other half of the four bypasses. `run : x`,
      // `"run": x` and `{run: x}` are all valid YAML whose key record() does not match; before
      // 2026-08-26 it returned in silence and the step kept `run: null`, which every check
      // downstream reads as "this step runs nothing".
      if (!record(current, line.trim(), indent)) refuseLine(current, i + 1, line.trim(), NOT_A_KEY_LINE);
    }
  }

  return steps;
}

/**
 * The `run:` steps that do NOT carry the `!cancelled()` guard, by line number.
 *
 * SPELLED HERE BECAUSE IT WAS SPELLED TWICE. Two copies of this filter lived in
 * scripts/check-suite.test.mjs — one in the block-scalar case, one in the guard case — and the fix
 * below had to land in both or the two would disagree about the same workflow. That is the defect
 * this file names in three other places; it is not allowed a fourth.
 *
 * A STEP WHOSE `if:` COULD NOT BE READ IS NOT REPORTED UNGUARDED, and that exclusion is the fix.
 * `if: "${{ !cancelled() }}"` is a correctly guarded step written with quotes: parseCiSteps refuses
 * the quoted scalar (deliberately — see NON_PLAIN_SCALAR) and leaves the raw text on the step, so a
 * plain `s.if !== CI_GUARD` test then ALSO reported it as carrying no guard. One true finding and
 * one false one about the same line, and the false one says the opposite of what is there.
 *
 * PROVENANCE, because it decides how this reads: `main` (7f7bddd) reports that same step unguarded
 * too — measured — so this is NOT a defect the round-9 deletion introduced. Round 8 masked it as a
 * side effect of unquoting every scalar, and deleting the decode took the mask away. The reasoning
 * that keeps `name:` and `uses:` out of SAFETY_KEYS applies here word for word and was not carried
 * through at the time.
 *
 * NOT FAIL-OPEN, which is the question to ask of any exclusion: a refused `if:` is itself a
 * BLOCKING finding from ciChainFindings(), so `if: "${{ always() }}"` — quoted AND weakened — still
 * fails the build. What changes is that it fails once, with a true message.
 *
 * A `key: null` REFUSAL IS EXCLUDED FOR THE SAME REASON AND NO OTHER, added 2026-08-26. There the
 * parser could not read the LINE, so it does not know which key was on it — and `"if": ${{
 * !cancelled() }}` is a correctly guarded step written with a quoted key. The exclusion stays
 * exactly two cases wide: a refusal that NAMES `run:` still counts as unguarded, because a step
 * whose `run:` was refused says nothing about whether it carries a guard.
 */
function unguardedSteps(workflow, guard = CI_GUARD) {
  return parseCiSteps(workflow)
    .filter((s) => s.run !== null && !s.unparsed.some((u) => u.key === 'if' || u.key === null) && s.if !== guard)
    .map((s) => s.line);
}

/**
 * The commands ci.yml actually RUNS — the only text any claim about coverage may be read against.
 *
 * Every check in this section goes through here rather than through the raw file, because ci.yml's
 * comments name the very commands its steps run. On 2026-08-26 a comment naming
 * `npm run check:mc` was enough to satisfy the guard protecting the Mission Control step, and the
 * step could then be deleted in silence.
 */
const ciRunCommands = (workflow) => parseCiSteps(workflow).filter((s) => s.run !== null).map((s) => s.run);

/**
 * ci.yml `run:` values that MAY carry a shell chain, keyed by the EXACT run string.
 *
 * EVERYTHING THE OPERATOR CHECK PROTECTS REACHES IT THROUGH package.json. shellOperators(),
 * resolveChain(), aliasLinks() and auditSuite() only ever see script bodies found by
 * `resolveChain(scripts, step)`; ci.yml's `run:` text is never fed to any of them. So
 * `run: npm run a && npm run b` written straight into the workflow bypasses package.json and STEPS
 * entirely and reintroduces the silent skip this file exists to close — `&&` skips the rest on the
 * first failure, and `;`, `|` and `&` hand back the LAST command's status, so the failure
 * disappears with no red step at all.
 *
 * KEYED BY THE RUN STRING, NOT THE STEP NAME, and the difference is the point: the command is what
 * is exempted, so editing it re-opens the decision, while renaming a step does not silently move an
 * exemption onto different code.
 *
 * Same three properties EXCLUDED carries above, for the same reasons — a substantive written
 * reason; no entry exempting a command that carries no chain; and, the one that matters, NO ENTRY
 * THAT MATCHES NO LIVE STEP. An exemption that outlives its step reads as a considered decision and
 * is not one.
 *
 * IT IS EMPTY, AND EMPTY IS A DECISION RATHER THAN A DEFAULT. beeond's workflow runs nine steps and
 * every one of them is a single `npm run <name>`; there is no install to sequence and nothing to
 * chain, because the root package.json has zero dependencies and every step is pure Node. agentvibe
 * carries exactly one entry here, `bun install --frozen-lockfile --cwd mission-control && npm run
 * check:mc`, and it is setup-then-run for a workspace beeond does not have. THE MOMENT AN INSTALL
 * STEP IS ADDED — `apps/web`'s eslint is the obvious candidate and needs a pnpm install — this is
 * where its exemption goes, with the reason written out. Adding one is not a defeat; adding one
 * without an entry here is.
 */
const CI_CHAINS_ALLOWED = {};

/**
 * Findings against ci.yml's `run:` values: an unexempted chain, or an exemption that has rotted.
 *
 * Pure over BOTH inputs, so the test can mutate the workflow or the allowlist and watch it bite. A
 * guard only ever run against a tree where it passes is not evidence, which is this file's whole
 * method.
 */
function ciChainFindings(workflow, allowed = CI_CHAINS_ALLOWED) {
  const findings = [];
  const parsed = parseCiSteps(workflow);

  // A VALUE THE PARSER REFUSED IS ITS OWN KIND OF FINDING, and it carries UNPARSED_PREFIX so a
  // caller can tell the kinds apart without matching a substring of an English sentence — which is
  // what scripts/check-ci-chains.mjs did until 2026-08-26, meaning a reworded message silently
  // changed which remedy it printed. It is not an operator and not an unmodelled shell construct:
  // it is the layer below both saying it could not read the value. There is no allowlist entry for
  // it on purpose — CI_CHAINS_ALLOWED is keyed by the EXACT run string, and a string this parser
  // cannot read is one it cannot key on either.
  const refused = new Set();
  for (const step of parsed) {
    for (const u of step.unparsed) {
      if (u.key === 'run') refused.add(step);
      // TWO SHAPES, BECAUSE THERE ARE TWO THINGS TO SAY. A keyed refusal names the value it could
      // not read. A `key: null` refusal is the layer above: the parser could not read the LINE, so
      // it does not know which key was on it — and it must not claim the `run:` was not scanned,
      // because a step may carry a perfectly readable `run:` alongside an unreadable line, and
      // that one IS still scanned below. Round 8 shipped a message contradicting the code beside
      // it; two templates is what keeps each one true.
      findings.push(
        u.key === null
          ? `${UNPARSED_PREFIX} ci.yml:${u.line} was NOT read — ${u.why}. A \`run:\` or an \`if:\` written ` +
            `there is invisible to this parser, so this step cannot be certified as one command: ${u.value}`
          : `${UNPARSED_PREFIX} ci.yml:${step.line} \`${u.key}:\` was NOT read — ${u.why}. It is not scanned for ` +
            `shell operators, so it cannot be certified as one command: ${u.value}`
      );
    }
  }

  const steps = parsed.filter((s) => s.run !== null);
  const exempt = (run) => Object.prototype.hasOwnProperty.call(allowed, run);

  for (const step of steps) {
    // A REFUSED `run:` IS NOT THEN SCANNED, and this line is the whole of round 8's second P2. The
    // refusal message says the value was not scanned for shell operators; round 8 printed that
    // message and then scanned the raw text anyway, so a single step produced two findings that
    // contradicted each other — and the test asserting on it used `.some()`, which cannot see a
    // second entry. The tests for this branch assert the exact findings ARRAY.
    if (refused.has(step)) continue;
    const found = shellOperators(step.run);
    if (!found.length || exempt(step.run)) continue;
    const { operators: ops, unmodelled } = splitFindings(found);
    // An unmodelled construct is reported as ITS OWN KIND, not as an operator: the scanner cannot
    // certify the step, which is a different statement from "the step chains commands". The
    // allowlist covers both, because a step that genuinely needs one is exempted the same way.
    if (unmodelled.length) {
      findings.push(
        `ci.yml:${step.line} contains ${unmodelled.map((u) => `\`${u}\``).join(', ')}, which this checker does not ` +
          `model, so it cannot be certified as one command — ${step.run}`
      );
    }
    if (ops.length) {
      findings.push(`ci.yml:${step.line} carries ${ops.map((op) => `\`${op}\``).join(', ')} — ${step.run}`);
    }
  }

  const live = new Set(steps.map((s) => s.run));
  for (const [run, reason] of Object.entries(allowed)) {
    if (!live.has(run)) {
      findings.push(`CI_CHAINS_ALLOWED exempts a command no step in ci.yml runs — ${run}`);
      continue;
    }
    if (!shellOperators(run).length) {
      findings.push(`CI_CHAINS_ALLOWED exempts a single command, which needs no exemption — ${run}`);
    }
    if (!hasSubstantiveReason(reason)) {
      findings.push(`CI_CHAINS_ALLOWED has no substantive reason for — ${run}`);
    }
  }

  return findings;
}

/**
 * The two shapes no ci.yml step may run, spelled once.
 *
 * DIRECT_TEST_RUNNER: `node … --test …` runs the same tests WITHOUT
 * `--require ./scripts/protected-write-tripwire.cjs`, which every npm test script carries, so that
 * one step would be unguarded while every other one is and a green run looks identical.
 * `(?![\\w-])` so `--test-reporter=tap` alone is not a hit.
 *
 * AGGREGATE_RUNNER: `npm run check` in ci.yml would nest every step behind ONE exit code — the
 * precise opacity the per-step `if:` guards exist to remove, arriving from the other direction.
 * Right-anchored: `check:curation` and `check:ledger-verify` are not hits.
 */
const DIRECT_TEST_RUNNER = /\bnode\b[^&|;]*--test(?![\w-])/;
const AGGREGATE_RUNNER = /npm run check(?![\w:-])|run-checks\.mjs/;


module.exports = {
  STEPS,
  EXCLUDED,
  GOVERNED,
  RUNNER,
  SHELL_OPERATORS,
  scriptGraph,
  reachable,
  aliasLinks,
  shellOperators,
  resolveChain,
  auditSuite,
  splitFindings,
  REASON_MIN_LENGTH,
  hasSubstantiveReason,
  CI_GUARD,
  CI_CHAINS_ALLOWED,
  STEP_KEYS,
  SAFETY_KEYS,
  NON_PLAIN_SCALAR,
  UNPARSED_PREFIX,
  parseCiSteps,
  unguardedSteps,
  ciRunCommands,
  ciChainFindings,
  DIRECT_TEST_RUNNER,
  AGGREGATE_RUNNER,
};

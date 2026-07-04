#!/usr/bin/env node
/**
 * generate-art — direct line to OpenAI's image model (gpt-image-1) for the
 * Founders' Field Journal asset pack (docs/05-marketing/ART_DIRECTION_PROMPTS.md v2).
 *
 * Key resolution (never committed, never printed):
 *   1. env OPENAI_API_KEY
 *   2. ~/.beeond/openai.key  (plain file containing only the key)
 *
 * Usage:
 *   node scripts/generate-art.mjs probe                    # cheap 1024 style test
 *   node scripts/generate-art.mjs hero-annotated           # P1, high quality
 *   node scripts/generate-art.mjs hero-clean --n 2
 *   node scripts/generate-art.mjs all-stills               # the full still set
 *   flags: --quality low|medium|high (default high; probe forces low)
 *          --n 1..4 (default 1)
 * Output: art-src/<asset>-<stamp>-<i>.png  (gitignored raw sources)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const STYLE_LOCK = `Hand-drawn scientific-sketchbook illustration in the style of a naturalist's field journal: fine scratchy ink fineliner linework in warm near-black (#141413) with wobbly, confident hand-drawn double-stroked edges and faint pencil construction lines still visible; loose transparent watercolor washes in warm honey amber, golden ochre and pale mustard, with occasional warm-grey wash accents; painted on warm cream cotton paper (#FAF9F5) with subtle paper tooth, faint tea-stain blooms, one or two tiny pigment splatters. Honeybees are small, naturalistic, sketched in the same ink: striped abdomens in ink and amber wash, translucent double-line wings, small dot heads with fine antennae — NO cartoon faces, NO eyes, NO smiles, NO mascot cuteness. Flight paths are thin dashed ink lines with playful loops. Any hand-lettering uses small, imperfect but legible warm-ink script, like quick margin notes. Generous breathing negative space of clean paper. No words other than those explicitly specified. No blue, no purple, no green, no pink, no pure white, no solid black background (unless the dark-paper variant is specified), no gradients, no 3D render, no photorealism, no flat vector look, no neon, no drop shadows.`;

const DARK_LOCK = STYLE_LOCK.replace(
  "painted on warm cream cotton paper (#FAF9F5)",
  "painted on deep warm charcoal paper (#0A0A0A with a warm undertone), ink lines in pale warm cream, watercolor luminous",
);

const HERO_BODY = `A wide page from the founders' field journal, composed like a working master plan. THE RIGHT 42% OF THE FRAME: a large hand-sketched honeycomb cluster of about thirteen hexagon cells in visibly different construction states, reading as a system being built — at the cluster's ragged outer edge, two or three cells exist only as faint pencil ghost lines; moving inward, cells gain confident double-stroked ink outlines; further in, three cells are washed in transparent warm-grey; five cells are filled with luminous transparent honey-amber watercolor at different fill levels, one of them only half-full with a fine straight ink meniscus line and a single wet drip of honey running just over its lower wall; and at the visual heart of the cluster, ONE slightly larger hexagon cell is flooded with solid warm near-black ink, containing a small minimal geometric bee icon drawn in thin golden-amber outline strokes — hexagonal wings, three-band abdomen, an abstract emblem, clearly a drawn symbol rather than a realistic insect. Along the comb's upper-right outer wall, a few tiny engineer's ruler tick-marks in fine ink. FIVE naturalistic honeybees: two flying in from the left along thin dashed looping flight paths, one banking in from the top, one caught in the moment of landing on a cell rim with wings as ghosted double-lines, one already at rest drinking at the honey meniscus.`;

const HERO_LEFT_CLEAN = ` THE LEFT 55% OF THE FRAME: almost empty warm cream paper — one faint dashed flight path and one tiny distant bee, fading to completely clean paper at the far left edge. Museum-specimen mood: warm, precise, alive, unmistakably drawn by a person.`;

const PROMPTS = {
  probe: {
    size: "1024x1024",
    quality: "low",
    prompt: `${STYLE_LOCK} A small study: three hand-sketched hexagon comb cells, one filled with honey-amber watercolor with a fine ink meniscus line, one naturalistic honeybee landing on a rim, one short dashed looping flight path, on mostly empty warm cream paper. No words.`,
  },
  "hero-annotated": {
    size: "1536x1024",
    prompt: `${STYLE_LOCK} ${HERO_BODY} HAND-LETTERED ANNOTATIONS in small warm-ink script, exactly these and nothing else: "one swarm" written along the longest dashed flight path near the left; "every channel" beside the comb's upper edge with a small arrow pointing into the cluster; "GEO" beside the dark keystone cell with a short arrow to it, and beneath that word a single quick stroke of yellow watercolor like a hand-made underline. THE LEFT 55% OF THE FRAME: almost empty warm cream paper — one faint dashed path, one tiny distant bee, a pale coffee-cup ring stain in the lower-left third, a small strip of aged washi tape at the top-left edge as if the page were pinned into the journal — fading to completely clean paper at the far left so text can live there. Museum-specimen mood: warm, precise, alive, unmistakably drawn by a person.`,
  },
  "hero-clean": {
    size: "1536x1024",
    prompt: `${STYLE_LOCK} ${HERO_BODY}${HERO_LEFT_CLEAN}`,
  },
  "anti-generic": {
    size: "1536x1024",
    prompt: `${STYLE_LOCK} A journal page comparing two small honeycomb studies side by side. LEFT STUDY: five identical hexagon cells stamped in flat lifeless warm-grey, mechanically perfect, evenly spaced like a rubber stamp repeated, no bees, no honey, a thin ink X struck once through the whole group with a single decisive stroke, and beneath it the hand-lettered word "generic" in small warm-ink script with one strike-through line across the word itself. RIGHT STUDY: a small living comb of five cells drawn with wobbly confident ink lines, two cells glowing with honey-amber wash, one wet drip, one naturalistic honeybee landing on a rim, a short dashed path; beneath it the hand-lettered word "calibrated" with a single quick stroke of yellow watercolor underlining it. A small hand-drawn ink arrow curves from the crossed-out left study to the right one. Generous clean paper around both. No other words.`,
  },
  "night-page": {
    size: "1536x1024",
    prompt: `${DARK_LOCK} A quiet nocturnal journal page. On the right half, a thirteen-cell hand-sketched honeycomb cluster at rest at night: cell outlines in fine pale-cream scratchy ink, most cell faces left dark, two washed in faint warm grey — and the central keystone cell filled with luminous honey-amber watercolor that bleeds a soft warm halo of glow onto the dark paper around it, a minimal golden bee icon inside it barely darker than the glow. Five honeybees asleep on cell rims, drawn in pale cream ink with faint amber. One thin dashed pale flight path enters from the left across mostly empty dark paper and ends at the comb — the last bee already home. No words. Warm, safe, and still.`,
  },
  vessel: {
    size: "1024x1024",
    prompt: `${STYLE_LOCK} One large hand-sketched hexagon cell centered on warm cream paper, drawn with confident double-stroked ink walls and a visible inner wall line giving real comb thickness, two small strips of aged washi tape across its top corners as if a photograph will be pinned inside, the interior left as completely clean empty paper, a small pool of honey-amber watercolor settled at the inner floor with a fine meniscus line and one tiny bubble, one naturalistic honeybee perched on the upper-left rim and a second approaching on a short dashed looping path from the right, three faint partial neighbor cells in pale grey wash behind, one tiny ink ruler-tick detail on the right wall. Generous clean margin. No words, no face, no person.`,
  },
  "build-line": {
    size: "1536x1024",
    prompt: `${STYLE_LOCK} Three hexagon cells in a loose, deliberately uneven horizontal row across the middle of a warm cream page, connected by ONE continuous thin dashed ink flight path that dips and loops between them and ends in a small solid yellow watercolor dot just past the third cell. First cell: bare confident ink outlines with pencil ghosts. Second cell: half-washed in honey-amber, wet edge visible. Third cell: fully honey-filled with meniscus, a naturalistic honeybee just landing on its rim. Hand-lettered beneath each cell in small warm-ink script, exactly: "wk 1-4" under the first, "wk 4-8" under the second, "wk 8-12" under the third. Generous empty paper above and below the row. No other words.`,
  },
  "nothing-connects": {
    size: "1536x1024",
    prompt: `${STYLE_LOCK} Three lone hexagon cells scattered far apart on a mostly empty warm cream page, deliberately disconnected: one only pencil ghost-lines, one outlined in ink but empty, one with a small dried matte honey stain and a hairline crack in its wall. Three short dashed flight paths that start toward each other but stop dead without meeting. One confused honeybee hovering in the empty middle, its own path a tangled little loop. Hand-lettered once in small warm-ink script near the bottom: "nothing connects". No other words.`,
  },
  "cited-answer": {
    size: "1536x1024",
    prompt: `${STYLE_LOCK} A specimen study of a single open hexagon cell on warm cream paper, drawn large like a display case: inside the cell, instead of honey, a neat small stack of three thin hand-sketched paper sheets with faint ruled ink lines and no letters on them, the top sheet slightly lifted at a corner. A naturalistic honeybee stands on the cell's lower rim, antennae bent toward the sheets, as if reading. A dashed flight path arrives from the left with one loop. Hand-lettered beside the cell with a small arrow, exactly: "the answer" — with a single quick yellow watercolor stroke under those words. No other words.`,
  },
  "og-backdrop": {
    size: "1536x1024",
    prompt: `${DARK_LOCK} A nocturnal journal page: a hand-sketched honeycomb cluster of about nine cells placed on the LEFT 40% of the frame, outlines in fine pale-cream ink, one central cell glowing with luminous honey-amber watercolor and a soft warm halo, three honeybees asleep on rims in pale cream ink, one dashed pale flight path trailing off; the RIGHT 60% of the frame completely clean dark warm-charcoal paper. No words.`,
  },
  "404-spot": {
    size: "1024x1024",
    prompt: `${STYLE_LOCK} One empty hexagon cell in bare confident ink outlines on clean warm cream paper, a single naturalistic honeybee hovering directly above it looking down, its dashed flight path ending in a small drawn loop above the cell, one faint honey stain beside the cell as if something was here once. Generous empty paper all around. No words.`,
  },
};

const STILL_SET = [
  "hero-annotated",
  "hero-clean",
  "anti-generic",
  "night-page",
  "vessel",
  "build-line",
  "nothing-connects",
  "cited-answer",
  "og-backdrop",
  "404-spot",
];

function getKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY.trim();
  const kf = join(homedir(), ".beeond", "openai.key");
  if (existsSync(kf)) return readFileSync(kf, "utf8").trim();
  console.error(
    "No API key. Either `export OPENAI_API_KEY=...` or put the key in ~/.beeond/openai.key",
  );
  process.exit(1);
}

async function generate(name, { quality, n }) {
  const spec = PROMPTS[name];
  if (!spec) {
    console.error(`Unknown asset "${name}". Known: probe, all-stills, ${Object.keys(PROMPTS).join(", ")}`);
    process.exit(1);
  }
  const key = getKey();
  const body = {
    model: "gpt-image-1",
    prompt: spec.prompt,
    size: spec.size,
    quality: spec.quality ?? quality,
    n,
  };
  process.stdout.write(`→ ${name} (${body.size}, ${body.quality}, n=${n}) ... `);
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error(`\n✗ ${res.status}: ${err.slice(0, 400)}`);
    process.exit(1);
  }
  const json = await res.json();
  const dir = join(process.cwd(), "art-src");
  mkdirSync(dir, { recursive: true });
  const stamp = new Date(json.created * 1000).toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const files = [];
  json.data.forEach((d, i) => {
    const f = join(dir, `${name}-${stamp}-${i}.png`);
    writeFileSync(f, Buffer.from(d.b64_json, "base64"));
    files.push(f);
  });
  console.log(`✓\n${files.join("\n")}`);
  if (json.usage) console.log(`tokens: ${JSON.stringify(json.usage)}`);
  return files;
}

const args = process.argv.slice(2);
const name = args[0];
const quality = args.includes("--quality") ? args[args.indexOf("--quality") + 1] : "high";
const n = args.includes("--n") ? Number(args[args.indexOf("--n") + 1]) : 1;

if (!name) {
  console.log(`Assets: probe, all-stills, ${Object.keys(PROMPTS).join(", ")}`);
  process.exit(0);
}
if (name === "all-stills") {
  for (const a of STILL_SET) await generate(a, { quality, n });
} else {
  await generate(name, { quality, n });
}

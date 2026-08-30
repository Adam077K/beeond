// GENERATED — do not edit, run `npm run build:tokens`.
// Source: design/tokens/seeds.json. Type is DERIVED, colour is CARRIED, contrast is COMPUTED.

export const fontFamily = {
  sans: "'Schibsted Grotesk', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
} as const;

/** Every size in the ramp. There is no other size. */
export const type = {
  'ui-0': { size: 12, lineHeight: 1.41, tracking: 0.0012, band: 'ui' },
  'ui-1': { size: 14, lineHeight: 1.46, tracking: 0, band: 'ui' },
  'ui-2': { size: 16, lineHeight: 1.51, tracking: -0.0012, band: 'ui' },
  'ui-3': { size: 18, lineHeight: 1.56, tracking: -0.0024, band: 'ui' },
  'ui-4': { size: 20, lineHeight: 1.51, tracking: -0.0036, band: 'ui' },
  'display-0': { size: 32, lineHeight: 1, tracking: -0.0108, band: 'display' },
  'display-1': { size: 48, lineHeight: 1, tracking: -0.0204, band: 'display' },
  'display-2': { size: 64, lineHeight: 1, tracking: -0.03, band: 'display' },
} as const;

export const color = {
  'chapter-light-ground': '#f0ede6',
  'chapter-light-surface': '#ffffff',
  'chapter-light-ink': '#141614',
  'chapter-light-muted': '#5e625c',
  'chapter-light-rule': '#dcd8cf',
  'chapter-light-accent': '#1f4d3d',
  'chapter-dark-ground': '#000000',
  'chapter-dark-surface': '#0e0e0e',
  'chapter-dark-ink': '#efede7',
  'chapter-dark-muted': '#8e938c',
  'chapter-dark-rule': '#242624',
  'chapter-dark-accent': '#57b295',
} as const;

export type TypeToken = keyof typeof type;
export type ColorToken = keyof typeof color;

/** Adjacent ratios of the UI band, and the jump into the display band. */
export const uiAdjacentRatios = [1.167,1.143,1.125,1.111] as const;
export const bandJoinRatio = 1.6;

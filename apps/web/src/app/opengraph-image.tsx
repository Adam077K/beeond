import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { COLORS, COPY } from "@/lib/brand.lock";

/**
 * The OG card — a designed brand asset (reversed Bee⬡nd wordmark, category
 * line, one hex cell), rendered by satori at build. Never an auto-screenshot.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `Beeond — ${COPY.h1.en[0]} ${COPY.h1.en[1]}`;

const hexPoints = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "node_modules", "@expo-google-fonts", "rubik");
  const [bold, medium] = await Promise.all([
    readFile(join(fontDir, "700Bold", "Rubik_700Bold.ttf")),
    readFile(join(fontDir, "500Medium", "Rubik_500Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: COLORS.ink,
          color: COLORS.ground,
          fontFamily: "Rubik",
          position: "relative",
          padding: 80,
        }}
      >
        {/* one large hex cell, off-canvas right — the brand's atomic unit */}
        <svg
          width="720"
          height="790"
          viewBox="0 0 200 220"
          style={{ position: "absolute", top: -60, right: -200 }}
        >
          <polygon
            points={hexPoints(100, 110, 92)}
            fill="none"
            stroke={COLORS.ground}
            strokeOpacity={0.16}
            strokeWidth={1.2}
          />
          <polygon
            points={hexPoints(100, 110, 62)}
            fill="none"
            stroke={COLORS.yellow}
            strokeOpacity={0.55}
            strokeWidth={0.9}
          />
          <circle cx="100" cy="148" r="3.4" fill={COLORS.yellow} />
          <circle cx="86" cy="138" r="2.6" fill={COLORS.yellow} opacity={0.85} />
          <circle cx="112" cy="132" r="2.6" fill={COLORS.yellow} opacity={0.7} />
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* eyebrow — category line with the hex bullet */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="22" height="24" viewBox="0 0 20 22">
              <polygon
                points={hexPoints(10, 11, 9)}
                fill={COLORS.yellow}
                stroke={COLORS.ink}
                strokeWidth={1}
              />
            </svg>
            <div style={{ fontSize: 28, fontWeight: 500, opacity: 0.85 }}>
              {COPY.eyebrow.en}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* reversed Bee⬡nd wordmark — hex-"o" in yellow */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: 148,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              <span>Bee</span>
              <svg
                width="88"
                height="100"
                viewBox="0 0 88 100"
                style={{ margin: "0 6px", transform: "translateY(-6px)" }}
              >
                <polygon
                  points={hexPoints(44, 50, 44)}
                  fill={COLORS.yellow}
                  stroke={COLORS.ground}
                  strokeWidth={0}
                />
              </svg>
              <span>nd</span>
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 500,
                opacity: 0.75,
                maxWidth: 760,
                lineHeight: 1.25,
              }}
            >
              {`${COPY.h1.en[0]} ${COPY.h1.en[1]}`}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 24, fontWeight: 500, opacity: 0.5 }}>
            {`beeond.ai — ${COPY.launchHold.en}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Rubik", data: bold, weight: 700, style: "normal" },
        { name: "Rubik", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}

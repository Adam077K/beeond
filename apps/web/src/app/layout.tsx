import type { Metadata } from "next";
import { preload } from "react-dom";
import { COPY } from "@/lib/brand.lock";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beeond.ai"),
  title: `Beeond — ${COPY.h1.en[0]} ${COPY.h1.en[1]}`,
  description: COPY.subhead.en,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload("/fonts/rubik-latin.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
    fetchPriority: "high",
  });
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-ground font-sans text-ink antialiased">
        {/* runs before paint: gates reveal-hiding on JS actually being present */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

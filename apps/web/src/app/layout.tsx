import type { Metadata } from "next";
import { preload } from "react-dom";
import { COPY } from "@/lib/brand.lock";
import "./globals.css";

export const metadata: Metadata = {
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
  });
  return (
    <html lang="en">
      <body className="bg-ground font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

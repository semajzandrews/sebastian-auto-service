import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = { themeColor: "#0e0f12" };

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "Sebastian Auto Service — Auto Repair in City of Orange, NJ · (973) 731-1111",
  description:
    "Full-service auto repair on S Jefferson St in the City of Orange, NJ. Diagnostics, brakes, oil and fluids, batteries, suspension, A/C, foreign and domestic. 4.7 stars across 117 reviews. Call (973) 731-1111.",
  openGraph: {
    title: "Sebastian Auto Service — Dialed In",
    description:
      "Full-service auto repair in the City of Orange, NJ. Precise diagnostics, honest work, 4.7 stars across 117 reviews.",
    type: "website",
    locale: "en_US",
    siteName: "Sebastian Auto Service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geistMono.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=switzer@400,500,600,700&display=swap"
        />
        <style>{`
          :root {
            --font-cabinet: "Cabinet Grotesk";
            --font-switzer: "Switzer";
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}

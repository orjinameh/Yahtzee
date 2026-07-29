import type { Metadata } from "next";
import { Anton, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex" });

export const metadata: Metadata = {
  title: "Roll for $2,700 — The Boxcars Yahtzee Open",
  description:
    "Register for the Boxcars Yahtzee Open. $50 entry. $2,700 prize pool (1st: $1,500, 2nd: $800, 3rd: $400). Played online in the Yahtzee with Buddies app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${plex.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}

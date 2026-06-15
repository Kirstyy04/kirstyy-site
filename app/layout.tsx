import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "./MouseGlow";
import { EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirsten Michaela",
  description: "A little bit of Kirsten",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "kirst",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body>
        <MouseGlow />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
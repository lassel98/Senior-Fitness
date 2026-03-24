import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Senioren Fitness Würzburg | Sicher & Fit im Alltag",
  description: "Personal Training speziell für Senioren in Würzburg & Mainfranken. Vor-Ort oder Live-Online. Jetzt kostenloses Erstgespräch anfordern.",
  keywords: "Senioren Fitness Würzburg, Personal Trainer Senioren, Sturzprävention, Beweglichkeit im Alter, Mainfranken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-base text-foreground bg-background`}
      >
        {children}
      </body>
    </html>
  );
}

import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tadeu Garcia - Senior Product Designer",
  description: "Tadeu Garcia - Senior Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PFF2359" />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

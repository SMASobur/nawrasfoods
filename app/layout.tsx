import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NawrasFoods ",
  description: "Access and download sortiment lista frän NawrasFoods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

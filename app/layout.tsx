import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NawrasFoods ",
  description: "Access and download important documents from NawrasFoods",
  icons: {
    icon: "/favicon.ico",
  },
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

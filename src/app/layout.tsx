import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benvenuto Club Sanremo",
  description: "Benvenuto Club Sanremo",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

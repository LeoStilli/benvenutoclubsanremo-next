"use client";

import Metadata from "../../components/Metadata";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Metadata />
      <body>{children}</body>
    </html>
  );
}

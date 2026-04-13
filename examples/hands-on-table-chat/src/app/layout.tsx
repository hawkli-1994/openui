import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "感知未来 + Handsontable — AI-Powered Spreadsheet",
  description:
    "An Excel-like spreadsheet with AI capabilities using 感知未来 and Handsontable",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

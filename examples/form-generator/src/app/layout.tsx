import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "感知未来 Form Generator",
  description: "Generate and refine forms from natural language prompts using 感知未来 + HeroUI",
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

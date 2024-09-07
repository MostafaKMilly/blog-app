import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Simple blog app",
  description: "Simple blog app created by Mostafa Milly",
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

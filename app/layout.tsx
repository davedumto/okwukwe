import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okwukwe - Child Model Portfolio",
  description: "Professional portfolio for Okwukwe, a 6-year-old child model. View editorial, commercial, catalog, and lifestyle work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen bg-[var(--bg-primary)]">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}

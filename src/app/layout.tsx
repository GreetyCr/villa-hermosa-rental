import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Casa Guarguaridad| Luxury Rental in Playa Hermosa, Costa Rica",
  description:
    "Book your dream vacation at our luxury villa in Playa Hermosa, Costa Rica. Private pool, lake access, 2 bedrooms, modern amenities.",
  keywords: [
    "playa hermosa",
    "costa rica",
    "luxury villa",
    "vacation rental",
    "private pool",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kraftino.org"),
  title: {
    default: "Kraftino Paper Industries — Paper Plate, Cup & Spoon Manufacturer India",
    template: "%s | Kraftino Paper Industries",
  },
  description:
    "Leading manufacturer, exporter & trader of biodegradable paper plates, cups, and spoons in New Delhi, India. Eco-friendly disposable tableware for global markets. FSC certified, FDA approved.",
  keywords: [
    "paper plate manufacturer India",
    "paper cup manufacturer Delhi",
    "disposable spoon manufacturer New Delhi",
    "biodegradable packaging India",
    "eco-friendly tableware supplier",
    "compostable plates manufacturer",
    "paper tableware exporter India",
    "sustainable packaging company New Delhi",
  ],
  authors: [{ name: "Kraftino Paper Industries" }],
  creator: "Kraftino Paper Industries",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kraftino.org",
    siteName: "Kraftino Paper Industries",
    title: "Kraftino Paper Industries — Paper Plate, Cup & Spoon Manufacturer India",
    description:
      "Leading manufacturer, exporter & trader of biodegradable paper plates, cups, and spoons in New Delhi, India. Eco-friendly disposable tableware for global markets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraftino Paper Industries — Eco-Friendly Paper Tableware India",
    description:
      "Leading manufacturer, exporter & trader of biodegradable paper plates, cups, and spoons in New Delhi, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} grain font-body antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

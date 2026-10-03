import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import ExporterContent from "./ExporterContent";

export const metadata: Metadata = {
  title: "Paper Tableware Exporter India — Kraftino Paper Industries",
  description:
    "Exporting biodegradable paper plates, cups & spoons to 30+ countries. FDA, EU & FSC certified. Competitive FOB/CIF pricing from New Delhi, India.",
  keywords: [
    "paper tableware exporter India",
    "biodegradable plate export",
    "paper cup exporter Delhi",
    "disposable tableware supplier worldwide",
    "FSC certified paper export India",
    "FDA approved tableware exporter",
    "eco-friendly packaging exporter",
    "compostable plate export India",
    "paper product wholesale export",
    "sustainable packaging global supplier",
  ],
  openGraph: {
    title: "Paper Tableware Exporter India — Kraftino Paper Industries",
    description:
      "Exporting biodegradable paper plates, cups & spoons to 30+ countries. FDA, EU & FSC certified. Competitive FOB/CIF pricing from India.",
    url: "https://kraftino.org/exporter",
    siteName: "Kraftino Paper Industries",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Tableware Exporter India — Kraftino Paper Industries",
    description:
      "Exporting biodegradable paper plates, cups & spoons to 30+ countries. FDA, EU & FSC certified.",
  },
  alternates: {
    canonical: "https://kraftino.org/exporter",
  },
};

export default function ExporterPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kraftino.org" },
      { "@type": "ListItem", position: 2, name: "Exporter", item: "https://kraftino.org/exporter" },
    ],
  };

  return (
    <>
      <SeoJsonLd data={breadcrumbSchema} />
      <ExporterContent />
    </>
  );
}

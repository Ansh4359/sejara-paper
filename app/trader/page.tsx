import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import TraderContent from "./TraderContent";

export const metadata: Metadata = {
  title: "Paper Pulp & Raw Material Trader — Kraftino Paper Industries",
  description:
    "Trading premium FSC-certified paper pulp, bio-based coatings & plant-derived inks. Trusted global supply network for sustainable packaging materials in New Delhi, India.",
  keywords: [
    "paper pulp trader India",
    "raw material supplier Delhi",
    "FSC certified paper trade",
    "bio-based coating supplier India",
    "PLA coating trader",
    "soy ink supplier India",
    "recycled paper fiber trade",
    "sustainable packaging material India",
    "compostable raw material supplier",
    "eco-friendly packaging input New Delhi",
  ],
  openGraph: {
    title: "Paper Pulp & Raw Material Trader — Kraftino Paper Industries",
    description:
      "Trading premium FSC-certified paper pulp, bio-based coatings & plant-derived inks. Trusted global supply network.",
    url: "https://kraftino.org/trader",
    siteName: "Kraftino Paper Industries",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Pulp & Raw Material Trader — Kraftino Paper Industries",
    description:
      "Trading premium FSC-certified paper pulp, bio-based coatings & plant-derived inks.",
  },
  alternates: {
    canonical: "https://kraftino.org/trader",
  },
};

export default function TraderPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kraftino.org" },
      { "@type": "ListItem", position: 2, name: "Trader", item: "https://kraftino.org/trader" },
    ],
  };

  return (
    <>
      <SeoJsonLd data={breadcrumbSchema} />
      <TraderContent />
    </>
  );
}

import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import ManufacturerContent from "./ManufacturerContent";

export const metadata: Metadata = {
  title: "Paper Tableware Manufacturer India — Sejara Industries",
  description:
    "FSC-certified paper plate, cup & spoon manufacturing in New Delhi, India. 500M+ units/year capacity. Custom sizes, private labeling, bulk orders. FDA & EU compliant.",
  keywords: [
    "paper plate manufacturer India",
    "paper cup manufacturing Delhi",
    "disposable spoon manufacturer New Delhi",
    "paper tableware factory India",
    "bulk paper plate production",
    "private label paper cups India",
    "FSC certified manufacturer Delhi",
    "OEM paper tableware India",
    "custom paper plate manufacturer",
    "biodegradable packaging manufacturer New Delhi",
  ],
  openGraph: {
    title: "Paper Tableware Manufacturer India — Sejara Industries",
    description:
      "FSC-certified paper plate, cup & spoon manufacturing in New Delhi, India. 500M+ units/year capacity. Custom sizes, private labeling, bulk orders.",
    url: "https://sejaraindustries.com/manufacturer",
    siteName: "Sejara Industries",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Tableware Manufacturer India — Sejara Industries",
    description:
      "FSC-certified paper plate, cup & spoon manufacturing in New Delhi, India. 500M+ units/year capacity.",
  },
  alternates: {
    canonical: "https://sejaraindustries.com/manufacturer",
  },
};

export default function ManufacturerPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Paper Tableware Products",
    itemListElement: [
      {
        "@type": "Product",
        name: "Paper Plates",
        description: "Round, square & compartmentalized paper plates. Grease-resistant, fully compostable.",
        brand: { "@type": "Brand", name: "Sejara Industries" },
        manufacturer: { "@type": "Organization", name: "Sejara Industries" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "Product",
        name: "Paper Cups",
        description: "Hot & cold variants. Double-wall insulated, leak-proof, custom printable.",
        brand: { "@type": "Brand", name: "Sejara Industries" },
        manufacturer: { "@type": "Organization", name: "Sejara Industries" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "Product",
        name: "Paper Spoons",
        description: "High-density pressed pulp. Bend-resistant, taste-neutral, industrial compostable.",
        brand: { "@type": "Brand", name: "Sejara Industries" },
        manufacturer: { "@type": "Organization", name: "Sejara Industries" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sejaraindustries.com" },
      { "@type": "ListItem", position: 2, name: "Manufacturer", item: "https://sejaraindustries.com/manufacturer" },
    ],
  };

  return (
    <>
      <SeoJsonLd data={productSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <ManufacturerContent />
    </>
  );
}

import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import HomeContent from "./home/HomeContent";

export const metadata: Metadata = {
  title: "Kraftino Paper Industries — Paper Plate, Cup & Spoon Manufacturer India",
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
    "FSC certified paper products India",
    "bulk paper plates supplier India",
  ],
  openGraph: {
    title: "Kraftino Paper Industries — Paper Plate, Cup & Spoon Manufacturer India",
    description:
      "Leading manufacturer, exporter & trader of biodegradable paper plates, cups, and spoons in New Delhi, India. Eco-friendly disposable tableware for global markets.",
    url: "https://kraftino.org",
    siteName: "Kraftino Paper Industries",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraftino Paper Industries — Paper Plate, Cup & Spoon Manufacturer India",
    description:
      "Leading manufacturer, exporter & trader of biodegradable paper plates, cups, and spoons in New Delhi, India.",
  },
  alternates: {
    canonical: "https://kraftino.org",
  },
};

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kraftino Paper Industries",
    url: "https://kraftino.org",
    logo: "https://kraftino.org/images/kraftino-logo.png",
    description:
      "Leading manufacturer, exporter & trader of biodegradable paper plates, cups, and spoons in New Delhi, India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "VISHAL BAGH, Narela",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110040",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-95608-71839",
      contactType: "sales",
      email: "info@kraftino.org",
    },
    sameAs: [],
    foundingDate: "2012",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 200,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kraftino Paper Industries",
    url: "https://kraftino.org",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kraftino.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kraftino.org",
      },
    ],
  };

  return (
    <>
      <SeoJsonLd data={orgSchema} />
      <SeoJsonLd data={websiteSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <HomeContent />
    </>
  );
}

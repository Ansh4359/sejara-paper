"use client";

import {
  Globe,
  Ship,
  Box,
  Shield,
  Truck,
  Award,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import StatsBar from "@/components/ui/StatsBar";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureList from "@/components/ui/FeatureList";
import CTASection from "@/components/ui/CTASection";
import SectionTag from "@/components/ui/SectionTag";
import ShowcaseCards from "@/components/ui/ShowcaseCards";
import DarkFeature from "@/components/ui/DarkFeature";
import { useInView } from "@/hooks/useInView";
import SeoHiddenText from "@/components/SeoHiddenText";

const services = [
  {
    icon: Globe,
    title: "Global Distribution",
    desc: "Established supply chain spanning 30+ countries across North America, Europe, Middle East, Asia-Pacific, and Africa.",
  },
  {
    icon: Ship,
    title: "Export Documentation",
    desc: "Complete handling of phytosanitary certificates, certificates of origin, customs declarations, and trade compliance.",
  },
  {
    icon: Box,
    title: "Custom Packaging",
    desc: "Export-grade packaging designed for international transit. Moisture-barrier wrapping, palletized loading, container optimization.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    desc: "Products pre-certified for FDA (USA), EU Food Contact Regulation, BIS (India), and GCC standards.",
  },
  {
    icon: Truck,
    title: "Logistics Management",
    desc: "FOB, CIF, and DDP shipping terms. Partnerships with major freight forwarders for competitive ocean and air rates.",
  },
  {
    icon: Award,
    title: "Private Label Export",
    desc: "White-label solutions for international brands. Custom branding, localized packaging, and market-specific sizing.",
  },
];

const regions = [
  { name: "North America", c: "USA, Canada, Mexico" },
  { name: "Europe", c: "UK, Germany, France, Netherlands, Spain" },
  { name: "Middle East", c: "UAE, Saudi Arabia, Qatar, Oman" },
  { name: "Asia Pacific", c: "Japan, Australia, Singapore, Malaysia" },
  { name: "Africa", c: "South Africa, Kenya, Nigeria, Egypt" },
  { name: "South America", c: "Brazil, Chile, Argentina, Colombia" },
];

function RegionCard({
  n,
  name,
  countries,
  delay,
}: {
  n: string;
  name: string;
  countries: string;
  delay: number;
}) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 border border-leaf-100 card-lift transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-4xl font-light text-leaf-200 leading-none">{n}</span>
        <span className="flex-1 h-px bg-leaf-100" />
      </div>
      <h3 className="font-display text-xl font-semibold text-leaf-950 mb-2">{name}</h3>
      <p className="text-sm text-leaf-800/40">{countries}</p>
    </div>
  );
}

export default function ExporterContent() {
  return (
    <div className="page-enter">
      <SeoHiddenText>
        Paper tableware exporter from India. Biodegradable plate export, disposable cup supplier
        worldwide, eco-friendly packaging exporter Delhi. FSC certified paper product export
        India, FDA approved tableware exporter, EU compliant paper plates export. Sustainable
        packaging exporter to USA, Europe, Middle East, Asia Pacific. Compostable tableware
        bulk export, paper cup wholesale exporter India, green packaging solutions export.
      </SeoHiddenText>
      <PageHero
        tag="Global Reach"
        title="Exporting"
        accent="worldwide"
        sub="Trusted by importers and distributors in over 30 countries. We bring sustainable paper tableware to every corner of the globe."
        gradient="bg-gradient-to-br from-moss-800 via-leaf-700 to-leaf-900"
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80"
      />
      <StatsBar
        stats={[
          { num: "30+", label: "Countries served" },
          { num: "150+", label: "Export clients" },
          { num: "98%", label: "On-time delivery" },
          { num: "6", label: "Continents" },
        ]}
      />
      <ShowcaseCards
        tag="Logistics"
        heading={
          <>
            From New Delhi to <span className="italic text-leaf-700">the world</span>
          </>
        }
        tint
        items={[
          {
            title: "Port Network",
            tag: "30+ countries",
            desc: "Shipments routed through major deep-water ports across six continents.",
            image:
              "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
          },
          {
            title: "Export Warehousing",
            tag: "Pallet-ready",
            desc: "Moisture-barrier wrapping and container-optimized pallet loading on site.",
            image:
              "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
          },
          {
            title: "Retail-Ready Packing",
            tag: "Private label",
            desc: "Case-packed, barcode-labelled units prepared for direct shelf intake.",
            image:
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
          },
        ]}
      />
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionTag>Export Services</SectionTag>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
              Seamless <span className="italic text-leaf-700">global trade</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-leaf-50 relative">
        <div className="absolute inset-0 green-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionTag>Our Reach</SectionTag>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
              Serving <span className="italic text-leaf-700">six continents</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((r, i) => (
              <RegionCard
                key={r.name}
                n={String(i + 1).padStart(2, "0")}
                name={r.name}
                countries={r.c}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag>How We Export</SectionTag>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 leading-tight tracking-tight mb-8">
                From our factory to <span className="italic text-leaf-700">your warehouse</span>
              </h2>
              <FeatureList
                title="Export Process"
                features={[
                  "Inquiry & sample dispatch within 48 hours",
                  "Custom quotation based on volume and Incoterms",
                  "Production scheduling with real-time updates",
                  "Pre-shipment quality inspection and third-party testing",
                  "Export documentation prepared and verified",
                  "Container loading, sealing, and photographic evidence",
                  "Real-time shipment tracking until delivery",
                  "Post-delivery support and reorder management",
                ]}
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-xl p-6">
                <div className="font-display text-5xl font-light text-white">30+</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/60 mt-1">
                  Countries Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DarkFeature
        label="Global Standards"
        title={
          <>
            Certified for
            <br />
            <span className="italic text-leaf-300">every market we serve</span>
          </>
        }
        items={[
          {
            n: "01",
            t: "FDA (USA)",
            d: "Food-safe coatings verified for direct food contact.",
          },
          {
            n: "02",
            t: "EU Compliant",
            d: "Meets EU Food Contact Regulation 1935/2004.",
          },
          {
            n: "03",
            t: "BIS (India)",
            d: "Bureau of Indian Standards certified production lines.",
          },
          {
            n: "04",
            t: "GCC Ready",
            d: "Gulf conformity documentation prepared per shipment.",
          },
        ]}
        certs="FDA · EU 1935/2004 · BIS · GCC"
      />
      <CTASection
        title={
          <>
            Ready to import <span className="italic">sustainable</span> tableware?
          </>
        }
        sub="Request samples, get a custom quotation, or schedule a virtual factory tour. Our export team responds within 24 hours."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80"
      />
    </div>
  );
}

"use client";

import {
  Ship,
  Shield,
  Box,
  Truck,
  Recycle,
  Globe,
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
    icon: Ship,
    title: "Raw Material Sourcing",
    desc: "We trade premium-grade paper pulp, food-safe coatings, and sustainable additives from certified suppliers worldwide.",
  },
  {
    icon: Shield,
    title: "Supplier Verification",
    desc: "Rigorous vetting of all international suppliers. On-site audits, quality certifications, and ethical labor practice verification.",
  },
  {
    icon: Box,
    title: "Quality Testing",
    desc: "Every batch undergoes comprehensive testing — moisture content, food-safety compliance, and material integrity.",
  },
  {
    icon: Truck,
    title: "Customs & Compliance",
    desc: "Full trade documentation handling including bills of lading, customs clearance, duty optimization, and regulatory filings.",
  },
  {
    icon: Recycle,
    title: "Sustainable Inputs",
    desc: "Prioritizing recycled and renewable raw materials. Bio-based coatings, compostable adhesives, and plant-derived additives.",
  },
  {
    icon: Globe,
    title: "Global Supply Network",
    desc: "Established relationships with suppliers in Scandinavia, Southeast Asia, South America, and North America.",
  },
];

const materials = [
  {
    name: "Virgin Paper Pulp",
    origin: "Scandinavia & Brazil",
    cert: "FSC / PEFC",
    desc: "High-quality bleached and unbleached pulp for premium tableware production.",
  },
  {
    name: "Recycled Paper Fiber",
    origin: "Europe & Japan",
    cert: "Blue Angel / EU Ecolabel",
    desc: "Post-consumer recycled fiber for eco-conscious product lines.",
  },
  {
    name: "Bio-Based Coatings",
    origin: "Germany & USA",
    cert: "FDA / EU Compliant",
    desc: "PLA and water-based barrier coatings replacing traditional PE lamination.",
  },
  {
    name: "Plant-Derived Inks",
    origin: "Netherlands & India",
    cert: "Soy Ink / EN 71",
    desc: "Soy and vegetable-based printing inks for safe, vibrant custom branding.",
  },
];

function MaterialCard({
  name,
  origin,
  cert,
  desc,
  delay,
}: {
  name: string;
  origin: string;
  cert: string;
  desc: string;
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
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-xl font-semibold text-leaf-950">{name}</h3>
        <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-leaf-600 bg-leaf-50 px-3 py-1 rounded-full flex-shrink-0 ml-3">
          {cert}
        </span>
      </div>
      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-leaf-500 mb-3">
        Origin: {origin}
      </div>
      <p className="text-sm text-leaf-800/40 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function TraderContent() {
  return (
    <div className="page-enter">
      <SeoHiddenText>
        Paper pulp trader India, biodegradable raw material supplier Delhi. FSC certified
        paper trade, food-grade coating supplier India, PLA coating trade, soy ink supplier
        India. Sustainable packaging raw material trade, recycled paper fiber supplier,
        bio-based coating trader India, plant-derived ink supplier Delhi. Paper tableware
        raw material sourcing India, eco-friendly packaging material trade, compostable
        material supplier New Delhi.
      </SeoHiddenText>
      <PageHero
        tag="Global Sourcing"
        title="Trading"
        accent="excellence"
        sub="We source the finest biodegradable raw materials from trusted global partners, ensuring every product we make starts with the best ingredients."
        gradient="bg-gradient-to-br from-leaf-800 via-moss-700 to-leaf-900"
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
      />
      <StatsBar
        stats={[
          { num: "15+", label: "Supplier countries" },
          { num: "50+", label: "Verified suppliers" },
          { num: "100%", label: "Traceable sourcing" },
          { num: "48hr", label: "Customs clearance" },
        ]}
      />
      <ShowcaseCards
        tag="What We Trade"
        heading={
          <>
            Raw materials, <span className="italic text-leaf-700">responsibly sourced</span>
          </>
        }
        tint
        items={[
          {
            title: "Virgin Pulp Rolls",
            tag: "FSC · PEFC",
            desc: "Bleached & unbleached grades sourced from Scandinavia and Brazil.",
            image:
              "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
          },
          {
            title: "Recycled Fiber",
            tag: "Post-consumer",
            desc: "EU Ecolabel fibre lines for eco-conscious product ranges.",
            image:
              "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
          },
          {
            title: "Bio Coatings & Inks",
            tag: "PLA · Soy",
            desc: "Water-based barriers and plant-derived inks from Germany & NL.",
            image:
              "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
          },
        ]}
      />
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionTag>Trading Capabilities</SectionTag>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
              Sourcing <span className="italic text-leaf-700">the best</span> globally
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
            <SectionTag>What We Trade</SectionTag>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
              Premium <span className="italic text-leaf-700">raw materials</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materials.map((m, i) => (
              <MaterialCard
                key={m.name}
                name={m.name}
                origin={m.origin}
                cert={m.cert}
                desc={m.desc}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative order-2 lg:order-1">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-xl p-6">
                <div className="font-display text-5xl font-light text-white">15+</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/60 mt-1">
                  Supplier Countries
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionTag>Our Process</SectionTag>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 leading-tight tracking-tight mb-8">
                Vetted, tested, <span className="italic text-leaf-700">trusted</span>
              </h2>
              <FeatureList
                title="Trading Workflow"
                features={[
                  "Market research and supplier identification",
                  "Request for samples and initial quality testing",
                  "On-site factory audit and compliance verification",
                  "Contract negotiation with clear quality benchmarks",
                  "Order placement with production timeline agreement",
                  "Pre-shipment inspection at origin facility",
                  "Freight booking, customs documentation, and clearance",
                  "Incoming quality check and inventory integration",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <DarkFeature
        label="Responsible Sourcing"
        title={
          <>
            Every input traced,
            <br />
            <span className="italic text-leaf-300">every partner vetted</span>
          </>
        }
        items={[
          {
            n: "01",
            t: "Supplier Audits",
            d: "On-site verification across Scandinavia, Brazil & Southeast Asia.",
          },
          {
            n: "02",
            t: "Batch Testing",
            d: "Moisture, food-safety and integrity checks on every lot.",
          },
          {
            n: "03",
            t: "Traceable Freight",
            d: "Chain-of-custody documented from origin to our warehouse.",
          },
          {
            n: "04",
            t: "Compostable Inputs",
            d: "Bio-based coatings and adhesives only — no PE, ever.",
          },
        ]}
        certs="FSC · PEFC · Blue Angel · EU Ecolabel"
      />
      <CTASection
        title={
          <>
            Looking for premium <span className="italic">sustainable</span> materials?
          </>
        }
        sub="Connect with our sourcing team to discuss raw material requirements, sample requests, and supply agreements."
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
      />
    </div>
  );
}

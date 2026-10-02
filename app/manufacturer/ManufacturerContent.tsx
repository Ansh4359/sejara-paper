"use client";

import {
  Factory,
  Recycle,
  Shield,
  Box,
  Award,
  Truck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import StatsBar from "@/components/ui/StatsBar";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureList from "@/components/ui/FeatureList";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CTASection from "@/components/ui/CTASection";
import SectionTag from "@/components/ui/SectionTag";
import ShowcaseCards from "@/components/ui/ShowcaseCards";
import DarkFeature from "@/components/ui/DarkFeature";
import SeoHiddenText from "@/components/SeoHiddenText";

const services = [
  {
    icon: Factory,
    title: "Custom Manufacturing",
    desc: "From design to production — we manufacture paper plates, cups, and spoons to your exact specifications, including custom sizes, shapes, and embossing.",
  },
  {
    icon: Recycle,
    title: "Eco-Certified Materials",
    desc: "We use only FSC-certified paper pulp and food-grade, water-based coatings. Every raw material is traceable and sustainably sourced.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "In-house testing lab ensures every batch meets international food-safety standards including FDA, EU, and BIS compliance.",
  },
  {
    icon: Box,
    title: "Bulk Production",
    desc: "Annual capacity of 500M+ units across our three production lines. Scalable output with consistent quality for large-volume orders.",
  },
  {
    icon: Award,
    title: "Private Labeling",
    desc: "Full white-label and private-label services with custom printing, branded packaging, and retail-ready presentation.",
  },
  {
    icon: Truck,
    title: "Packaging & Logistics",
    desc: "Zero-waste packaging with recyclable materials. Integrated logistics for domestic distribution and export-ready preparation.",
  },
];

export default function ManufacturerContent() {
  return (
    <div className="page-enter">
      <SeoHiddenText>
        Paper plate manufacturer in New Delhi India. Custom paper cup manufacturing, bulk
        disposable spoon production, private label paper tableware manufacturer. FSC certified
        paper tableware factory, eco-friendly packaging manufacturer India, biodegradable plate
        production facility New Delhi. OEM paper cup supplier, white label disposable tableware
        manufacturer, food-grade paper packaging production India.
      </SeoHiddenText>
      <PageHero
        tag="Manufacturing Excellence"
        title="Crafted with"
        accent="precision"
        sub="Our state-of-the-art facility in Narela, New Delhi combines cutting-edge technology with sustainable practices to produce world-class paper tableware."
        gradient="bg-gradient-to-br from-leaf-800 via-leaf-700 to-leaf-900"
        image="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1600&q=80"
      />
      <StatsBar
        stats={[
          { num: "500M+", label: "Units produced yearly" },
          { num: "3", label: "Production lines" },
          { num: "99.2%", label: "Quality pass rate" },
          { num: "24/7", label: "Operations" },
        ]}
      />
      <ShowcaseCards
        tag="What We Produce"
        heading={
          <>
            Our <span className="italic text-leaf-700">Production</span>
          </>
        }
        tint
        items={[
          {
            title: "Paper Plates",
            tag: '6" – 12"',
            desc: "Round, square & compartmentalized. Grease-resistant, fully compostable.",
            image:
              "https://static.vecteezy.com/system/resources/thumbnails/074/828/676/small_2x/eco-friendly-tableware-and-paper-bag-on-white-table-photo.jpg",
          },
          {
            title: "Paper Cups",
            tag: "4 oz – 20 oz",
            desc: "Hot & cold variants. Double-wall insulated, leak-proof, custom printable.",
            image:
              "https://static.vecteezy.com/system/resources/thumbnails/005/121/262/small_2x/wooden-forks-and-paper-cups-with-plates-on-kraft-paper-background-free-photo.jpg",
          },
          {
            title: "Wooden Cutlery",
            tag: "4 variants",
            desc: "High-density pressed pulp spoons & forks. Bend-resistant, taste-neutral.",
            image:
              "https://static.vecteezy.com/system/resources/thumbnails/039/333/552/small_2x/disposable-bamboo-cutlery-in-a-paper-cup-on-a-yellow-background-top-view-free-photo.jpg",
          },
        ]}
      />
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionTag>What We Do</SectionTag>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
              Manufacturing <span className="italic text-leaf-700">Services</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag>Our Facility</SectionTag>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 leading-tight tracking-tight mb-8">
                Built for <span className="italic text-leaf-700">sustainability</span>
              </h2>
              <p className="text-base text-leaf-800/50 leading-relaxed mb-8">
                Our 50,000 sq. ft. manufacturing facility is designed from the ground up for minimal
                environmental impact. Every process is optimized for energy efficiency, waste
                reduction, and worker safety.
              </p>
              <FeatureList
                title="Facility Highlights"
                features={[
                  "State-of-the-art hydraulic pressing and thermoforming machinery",
                  "Automated quality inspection with AI-powered defect detection",
                  "In-house tooling workshop for rapid prototyping",
                  "Solar-powered facility generating 60% of energy",
                  "Closed-loop water recycling — zero liquid discharge",
                  "Dedicated R&D team for product innovation",
                ]}
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-xl p-6">
                <div className="font-display text-5xl font-light text-white">50K</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/60 mt-1">
                  sq. ft. solar-powered facility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ProcessSteps />
        </div>
      </section>
      <DarkFeature
        label="Our Commitment"
        title={
          <>
            Made clean,
            <br />
            <span className="italic text-leaf-300">from pulp to pallet</span>
          </>
        }
        items={[
          {
            n: "01",
            t: "FSC Materials",
            d: "Every sheet traced to certified, replanted forests.",
          },
          {
            n: "02",
            t: "60% Solar",
            d: "On-site solar arrays power the majority of production.",
          },
          {
            n: "03",
            t: "Zero Discharge",
            d: "Closed-loop water recycling — nothing leaves the site.",
          },
          {
            n: "04",
            t: "Plastic-Free",
            d: "Water-based coatings only. No PE lamination, ever.",
          },
        ]}
        certs="FSC · ISO 14001 · BPI Compostable"
      />
      <CTASection
        title={
          <>
            Need a reliable <span className="italic">manufacturing</span> partner?
          </>
        }
        sub="From small batch custom orders to large-scale production runs, we deliver quality at every volume."
        image="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1600&q=80"
      />
    </div>
  );
}

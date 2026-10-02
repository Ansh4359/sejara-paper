"use client";

import Link from "next/link";
import { Factory, Globe, Ship, ArrowRight, Leaf } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import FloatingLeaves from "@/components/ui/FloatingLeaves";
import SectionTag from "@/components/ui/SectionTag";
import ProcessSteps from "@/components/ui/ProcessSteps";
import ContactSection from "@/components/ui/ContactSection";
import SeoHiddenText from "@/components/SeoHiddenText";

const roles = [
  {
    title: "Manufacturer",
    desc: "In-house production with eco-certified raw materials, precision machinery, and zero-waste processes.",
    href: "/manufacturer",
    icon: Factory,
    bg: "bg-leaf-700",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80",
  },
  {
    title: "Exporter",
    desc: "Delivering sustainable tableware to 30+ countries across five continents with reliable logistics.",
    href: "/exporter",
    icon: Globe,
    bg: "bg-moss-600",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
  {
    title: "Trader",
    desc: "Sourcing premium biodegradable raw materials and sustainable inputs from trusted global partners.",
    href: "/trader",
    icon: Ship,
    bg: "bg-leaf-600",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
];

const products = [
  {
    name: "Paper Plates",
    sizes: '6" – 12"',
    desc: "Round, square & compartmentalized. Grease-resistant, fully compostable.",
    color: "bg-leaf-600",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/074/828/676/small_2x/eco-friendly-tableware-and-paper-bag-on-white-table-photo.jpg",
  },
  {
    name: "Paper Cups",
    sizes: "4 oz – 20 oz",
    desc: "Hot & cold variants. Double-wall insulated, leak-proof, custom printable.",
    color: "bg-moss-600",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/005/121/262/small_2x/wooden-forks-and-paper-cups-with-plates-on-kraft-paper-background-free-photo.jpg",
  },
  {
    name: "Paper Spoons",
    sizes: "4 variants",
    desc: "High-density pressed pulp. Bend-resistant, taste-neutral, industrial compostable.",
    color: "bg-leaf-700",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/039/333/552/small_2x/disposable-bamboo-cutlery-in-a-paper-cup-on-a-yellow-background-top-view-free-photo.jpg",
  },
];

const marqueeItems = [
  "Paper Plates",
  "Paper Cups",
  "Wooden Cutlery",
  "100% Compostable",
  "FSC Certified",
  "Factory Direct",
];

function Stat({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const n = useCountUp(value, active);
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-leaf-700">
        {n}
        {suffix}
      </div>
      <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-leaf-600/50 mt-1">
        {label}
      </div>
    </div>
  );
}

export default function HomeContent() {
  const [cardsRef, cardsVisible] = useInView();
  const [aboutRef, aboutVisible] = useInView();
  const [productsRef, productsVisible] = useInView();
  const [sustainRef, sustainVisible] = useInView();

  return (
    <div className="page-enter">
      <SeoHiddenText>
        Sejara Industries is a leading paper plate manufacturer in India, based in Narela,
        New Delhi. We specialize in eco-friendly disposable tableware including paper plates,
        paper cups, and paper spoons. As a trusted paper tableware exporter, we supply
        biodegradable packaging to over 30 countries. Our compostable products are FSC
        certified, FDA approved, and EU food contact compliant. Contact us for bulk orders,
        private labeling, and custom manufacturing of sustainable paper tableware in India.
        Paper cup manufacturer Delhi, disposable plates supplier India, biodegradable
        packaging company New Delhi, compostable tableware exporter.
      </SeoHiddenText>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-leaf-50 via-white to-moss-50">
        <FloatingLeaves />
        <div className="absolute inset-0 green-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display text-[10rem] lg:text-[16rem] font-light text-leaf-200/20 leading-none whitespace-nowrap">
            Sejara
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24 w-full">
          <div className="grid lg:grid-cols-[1.15fr_auto] gap-10 xl:gap-16 items-center">
            <div>
              <div className="max-w-2xl">
                <div className="anim-fade-up">
                  <SectionTag>Rooted in Nature · Crafted with Care</SectionTag>
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-light text-leaf-950 leading-[1.02] tracking-tight mb-6 anim-fade-up d1">
                  Paper tableware
                  <br />
                  <span className="italic text-leaf-700">from earth,</span>
                  <br />
                  for earth.
                </h1>
                <p className="font-body text-base lg:text-lg text-leaf-800/50 max-w-xl leading-relaxed mb-9 anim-fade-up d2">
                  Sejara Industries manufactures, exports, and trades sustainable disposable
                  plates, cups, and spoons — because every meal deserves a planet-conscious
                  choice.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 anim-fade-up d3">
                <Link
                  href="#contact"
                  className="btn-green text-white font-mono text-xs tracking-[0.12em] uppercase px-8 py-4 rounded-full inline-flex items-center gap-2"
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#products"
                  className="border border-leaf-300 text-leaf-900 hover:bg-white/70 font-mono text-xs tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-all duration-300"
                >
                  Explore Products
                </Link>
              </div>
              <div className="mt-7 flex items-center gap-3 anim-fade-up d4">
                <span className="w-8 h-px bg-leaf-300 inline-block" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-leaf-500/80">
                  FSC · FDA · EU Compliant · ISO 14001
                </span>
              </div>
            </div>

            {/* COLLAGE */}
            <div className="relative hidden lg:block w-[360px] h-[430px] anim-fade-up d4">
              <div className="absolute top-0 left-0 w-64 h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-leaf-900/20 -rotate-3 anim-float z-10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://static.vecteezy.com/system/resources/thumbnails/074/828/676/small_2x/eco-friendly-tableware-and-paper-bag-on-white-table-photo.jpg)",
                  }}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-56 h-72 rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-leaf-900/20 rotate-6 anim-float-slow">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80)",
                  }}
                />
              </div>
              <div className="absolute -bottom-5 left-4 z-20 bg-white/85 backdrop-blur-xl border border-leaf-100 rounded-2xl pl-4 pr-6 py-4 shadow-lg shadow-leaf-900/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-leaf-600 text-white flex items-center justify-center">
                  <Leaf size={18} />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-leaf-950 leading-tight">
                    12+ Years
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-leaf-600/70 mt-0.5">
                    FSC Certified · Zero Plastic
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-16 anim-fade-up d5"
          >
            {roles.map((r, i) => (
              <Link
                key={r.title}
                href={r.href}
                className={`group relative text-left rounded-2xl overflow-hidden h-72 card-lift transition-all duration-700 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${r.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/90 via-leaf-950/50 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${r.bg} text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <r.icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-3">{r.desc}</p>
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-leaf-300 group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-up d8">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-leaf-400">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-leaf-300 to-transparent anim-breathe" />
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden="true" className="relative bg-leaf-950 py-7 overflow-hidden border-y border-white/[0.06]">
        <div className="absolute inset-0 leaf-dots opacity-10" />
        <div className="anim-marquee flex w-max whitespace-nowrap relative">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {marqueeItems.map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 pr-8">
                  <span
                    className={`font-display text-3xl md:text-4xl font-light italic ${
                      i % 2 === 0 ? "text-leaf-100/90" : "text-outline"
                    }`}
                  >
                    {item}
                  </span>
                  <span className="w-2 h-2 rotate-45 bg-leaf-500/60 inline-block shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" ref={productsRef} className="py-24 lg:py-32 bg-leaf-50 relative">
        <div className="absolute inset-0 green-mesh" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              productsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionTag>What We Make</SectionTag>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
              Our <span className="italic text-leaf-700">Products</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={`group bg-white rounded-2xl overflow-hidden border border-leaf-100 card-lift transition-all duration-700 ${
                  productsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="h-56 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.14em] uppercase text-leaf-700 bg-white/85 backdrop-blur px-3 py-1 rounded-full">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-2xl font-semibold text-leaf-950">{p.name}</h3>
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-leaf-500 bg-leaf-50 px-3 py-1 rounded-full">
                      {p.sizes}
                    </span>
                  </div>
                  <p className="text-sm text-leaf-800/40 leading-relaxed">{p.desc}</p>
                  <Link
                    href="#contact"
                    className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-leaf-600 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Enquire
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section ref={aboutRef} className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div
              className={`transition-all duration-1000 ${
                aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200&q=80)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/25 to-transparent" />
                <div className="absolute inset-0 leaf-dots opacity-15" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-xl p-6">
                  <div className="font-display text-5xl font-light text-white">12+</div>
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/60 mt-1">
                    Years of sustainable manufacturing
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`transition-all duration-700 ${
                  aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <SectionTag>Our Story</SectionTag>
              </div>
              <h2
                className={`font-display text-4xl lg:text-5xl font-light text-leaf-950 leading-tight mb-8 tracking-tight transition-all duration-700 delay-100 ${
                  aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Where tradition meets
                <br />
                <span className="italic text-leaf-700">responsibility</span>
              </h2>
              <p
                className={`text-base text-leaf-800/50 leading-relaxed mb-6 transition-all duration-700 delay-200 ${
                  aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Founded with a vision to replace single-use plastics with nature&apos;s own solutions,
                Sejara Industries has grown from a small workshop into a trusted global supplier of
                biodegradable paper tableware.
              </p>
              <p
                className={`text-base text-leaf-800/50 leading-relaxed mb-10 transition-all duration-700 delay-300 ${
                  aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Every plate, cup, and spoon we produce is made from sustainably sourced paper and
                food-grade coatings — fully compostable, naturally strong, and designed to return to
                the earth after use.
              </p>
              <div
                className={`grid grid-cols-3 gap-8 border-t border-leaf-100 pt-8 transition-all duration-700 delay-400 ${
                  aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <Stat value={30} suffix="+" label="Countries" active={aboutVisible} />
                <Stat value={500} suffix="M+" label="Units / Year" active={aboutVisible} />
                <Stat value={100} suffix="%" label="Biodegradable" active={aboutVisible} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section ref={sustainRef} className="py-24 lg:py-32 bg-leaf-900 relative overflow-hidden">
        <div className="absolute inset-0 leaf-dots opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-leaf-700/20 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              sustainVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-leaf-400 inline-block" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-leaf-400">
                Our Commitment
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight max-w-xl">
              Sustainability isn&apos;t a feature —
              <br />
              <span className="italic text-leaf-300">it&apos;s our foundation</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                n: "01",
                t: "Sustainable Sourcing",
                d: "All paper from FSC-certified forests. For every tree used, three are planted.",
              },
              {
                n: "02",
                t: "Clean Manufacturing",
                d: "60% renewable energy. Water treated and recycled on-site.",
              },
              {
                n: "03",
                t: "Zero-Waste Packaging",
                d: "100% recyclable shipping. Soy-based inks. No plastic, ever.",
              },
              {
                n: "04",
                t: "Full Lifecycle",
                d: "Products compost in 90 days. Partners in 15+ countries.",
              },
            ].map((p, i) => (
              <div
                key={p.n}
                className={`p-8 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl transition-all duration-700 ${
                  sustainVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="font-display text-4xl font-light text-white/[0.06] mb-4">
                  {p.n}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{p.t}</h3>
                <p className="font-mono text-xs leading-relaxed text-white/40">{p.d}</p>
              </div>
            ))}
          </div>
          <div
            className={`mt-16 pt-8 border-t border-white/[0.06] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 transition-all duration-700 delay-700 ${
              sustainVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="font-display text-xl italic text-white/40 max-w-md">
              &quot;We don&apos;t inherit the earth from our ancestors — we borrow it from our
              children.&quot;
            </p>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-leaf-400">
              FSC · ISO 14001 · BPI Compostable
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ProcessSteps />
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </div>
  );
}

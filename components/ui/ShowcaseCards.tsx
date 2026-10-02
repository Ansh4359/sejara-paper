"use client";

import { useInView } from "@/hooks/useInView";
import SectionTag from "./SectionTag";

interface ShowcaseItem {
  title: string;
  tag: string;
  desc: string;
  image: string;
}

interface ShowcaseCardsProps {
  tag: string;
  heading: React.ReactNode;
  items: ShowcaseItem[];
  tint?: boolean;
}

export default function ShowcaseCards({ tag, heading, items, tint = false }: ShowcaseCardsProps) {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`py-24 lg:py-32 relative ${tint ? "bg-leaf-50" : "bg-white"}`}
    >
      {tint && <div className="absolute inset-0 green-mesh" />}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionTag>{tag}</SectionTag>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-white rounded-2xl overflow-hidden border border-leaf-100 card-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="h-56 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-semibold text-leaf-950">{item.title}</h3>
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-leaf-500 bg-leaf-50 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-leaf-800/40 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

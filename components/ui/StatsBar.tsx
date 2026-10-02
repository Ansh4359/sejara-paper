"use client";

import { useInView } from "@/hooks/useInView";

interface Stat {
  num: string;
  label: string;
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const [ref, isVisible] = useInView();

  return (
    <div ref={ref} className="bg-white border-y border-leaf-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="font-display text-4xl lg:text-5xl font-light text-leaf-700 mb-1">
              {s.num}
            </div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-leaf-600/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

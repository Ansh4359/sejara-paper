"use client";

import { useInView } from "@/hooks/useInView";

interface DarkFeatureItem {
  n: string;
  t: string;
  d: string;
}

interface DarkFeatureProps {
  label: string;
  title: React.ReactNode;
  items: DarkFeatureItem[];
  quote?: string;
  certs?: string;
}

export default function DarkFeature({ label, title, items, quote, certs }: DarkFeatureProps) {
  const [ref, isVisible] = useInView();
  const gridCols = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-leaf-900 relative overflow-hidden">
      <div className="absolute inset-0 leaf-dots opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-leaf-700/20 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-leaf-400 inline-block" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-leaf-400">
              {label}
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight max-w-xl">
            {title}
          </h2>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${gridCols}`}>
          {items.map((p, i) => (
            <div
              key={p.n}
              className={`p-8 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="font-display text-4xl font-light text-white/[0.06] mb-4">{p.n}</div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">{p.t}</h3>
              <p className="font-mono text-xs leading-relaxed text-white/40">{p.d}</p>
            </div>
          ))}
        </div>
        {(quote || certs) && (
          <div
            className={`mt-16 pt-8 border-t border-white/[0.06] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {quote && (
              <p className="font-display text-xl italic text-white/40 max-w-md">&quot;{quote}&quot;</p>
            )}
            {certs && (
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-leaf-400">
                {certs}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

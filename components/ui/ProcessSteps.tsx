"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  { n: "01", t: "Source", d: "FSC-certified paper pulp arrives at our facility" },
  { n: "02", t: "Form", d: "Precision-molded into plates, cups, and spoons" },
  { n: "03", t: "Coat", d: "Food-safe water-based barrier applied" },
  { n: "04", t: "Test", d: "Quality and food-safety compliance verified" },
  { n: "05", t: "Ship", d: "Packed in recyclable materials, delivered worldwide" },
];

export default function ProcessSteps() {
  const [ref, isVisible] = useInView();

  return (
    <div ref={ref}>
      <div
        className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-px bg-leaf-500 inline-block" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-leaf-600">
            How It Works
          </span>
          <span className="w-10 h-px bg-leaf-500 inline-block" />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 tracking-tight">
          From <span className="italic text-leaf-700">forest</span> to table
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`relative bg-leaf-50 rounded-2xl p-8 text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${200 + i * 100}ms` }}
          >
            <div className="font-display text-4xl font-light text-leaf-200 mb-4">{s.n}</div>
            <h3 className="font-display text-xl font-semibold text-leaf-950 mb-2">{s.t}</h3>
            <p className="font-mono text-[11px] text-leaf-800/40 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

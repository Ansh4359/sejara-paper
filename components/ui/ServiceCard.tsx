"use client";

import { useState } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, desc, index }: ServiceCardProps) {
  const [ref, isVisible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-white rounded-2xl p-8 lg:p-10 border border-leaf-100 card-lift transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          hovered ? "bg-leaf-700 text-white scale-110" : "bg-leaf-50 text-leaf-600"
        }`}
      >
        <Icon size={24} />
      </div>
      <h3 className="font-display text-2xl font-semibold text-leaf-950 mb-3">{title}</h3>
      <p className="text-sm text-leaf-800/50 leading-relaxed">{desc}</p>
      <div
        className={`mt-6 flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-300 ${
          hovered ? "text-leaf-700 gap-3" : "text-leaf-500"
        }`}
      >
        <span>Learn more</span>
        <ArrowRight size={14} />
      </div>
    </div>
  );
}

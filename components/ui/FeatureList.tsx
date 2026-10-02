"use client";

import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface FeatureListProps {
  title: string;
  features: string[];
}

export default function FeatureList({ title, features }: FeatureListProps) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h3 className="font-display text-2xl font-semibold text-leaf-950 mb-6">{title}</h3>
      <div className="space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-leaf-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-leaf-600">
              <Check size={14} />
            </div>
            <span className="text-sm text-leaf-800/60 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

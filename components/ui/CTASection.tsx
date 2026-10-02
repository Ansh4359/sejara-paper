"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

interface CTASectionProps {
  title: React.ReactNode;
  sub: string;
  image?: string;
}

export default function CTASection({ title, sub, image }: CTASectionProps) {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden bg-leaf-900"
    >
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/95 via-leaf-900/75 to-leaf-900/55" />
        </>
      )}
      <div className="absolute inset-0 leaf-dots opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-leaf-500/10 rounded-full blur-3xl" />
      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
          {title}
        </h2>
        <p className="text-base text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-white text-leaf-800 font-mono text-xs tracking-[0.12em] uppercase px-8 py-4 rounded-full hover:bg-leaf-50 transition-all duration-300 hover:shadow-lg text-center"
          >
            Request a Quote
          </Link>
          <Link
            href="/"
            className="border border-white/20 text-white font-mono text-xs tracking-[0.12em] uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

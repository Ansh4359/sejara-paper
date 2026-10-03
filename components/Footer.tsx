import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-leaf-950 text-white/60 relative overflow-hidden">
      <div className="absolute inset-0 leaf-dots opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div>
            <div className="mb-5">
              <Image
                src="/images/kraftino-logo.png"
                alt="Kraftino Paper Industries"
                width={280}
                height={78}
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Sustainable paper tableware for a plastic-free world. Manufacturing, exporting, and
              importing with purpose since 2012.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-leaf-400 mb-5">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { l: "Home", href: "/" },
                { l: "Manufacturer", href: "/manufacturer" },
                { l: "Exporter", href: "/exporter" },
                { l: "Trader", href: "/trader" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {item.l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-leaf-400 mb-5">
              Products
            </h4>
            <div className="flex flex-col gap-3">
              {["Paper Plates", "Paper Cups", "Paper Spoons", "Custom Orders", "Bulk Supply"].map(
                (item) => (
                  <span key={item} className="text-sm text-white/40">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-leaf-400 mb-5">
              Certifications
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "FSC Certified",
                "ISO 14001",
                "BPI Compostable",
                "FDA Approved",
                "EU Food Contact",
              ].map((item) => (
                <span key={item} className="text-sm text-white/40">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[11px] text-white/25">
            &copy; 2026 Kraftino Paper Industries. All rights reserved.
          </span>
          <span className="font-mono text-[11px] text-white/25 flex items-center gap-1.5">
            <Leaf size={12} className="text-white/25" />
            Crafted with care for the planet
          </span>
        </div>
      </div>
    </footer>
  );
}

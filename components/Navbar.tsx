"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollY } from "@/hooks/useScrollY";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Manufacturer", href: "/manufacturer" },
  { label: "Exporter", href: "/exporter" },
  { label: "Trader", href: "/trader" },
];

export default function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 50;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(14,59,14,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="group">
          <Image
            src="/images/sejara.png"
            alt="Sejara Industries"
            width={200}
            height={56}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-[11px] tracking-[0.12em] uppercase px-5 py-2 rounded-full transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-leaf-700 text-white"
                  : "text-leaf-800/60 hover:text-leaf-800 hover:bg-leaf-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-green text-white font-mono text-[11px] tracking-[0.1em] uppercase px-6 py-2.5 rounded-full ml-3"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-6 h-0.5 bg-leaf-800 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-leaf-800 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-leaf-800 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2 w-6" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-leaf-100 px-6 py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`font-mono text-xs tracking-[0.1em] uppercase py-3 px-4 rounded-lg transition-all text-left ${
                isActive(item.href)
                  ? "bg-leaf-100 text-leaf-800"
                  : "text-leaf-700/60 hover:bg-leaf-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

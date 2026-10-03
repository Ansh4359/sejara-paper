"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionTag from "./SectionTag";

const inputClass =
  "w-full font-body text-sm px-5 py-3.5 bg-white border border-leaf-200 rounded-xl text-leaf-950 placeholder:text-leaf-400 focus:outline-none focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 transition-all";

export default function ContactSection() {
  const [ref, isVisible] = useInView();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "manufacturer",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-leaf-50 relative">
      <div className="absolute inset-0 green-mesh" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionTag>Get In Touch</SectionTag>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-leaf-950 leading-tight tracking-tight mb-6">
              Let&apos;s build a
              <br />
              <span className="italic text-leaf-700">greener future</span> together
            </h2>
            <p className="text-base text-leaf-800/50 leading-relaxed mb-10">
              Whether you&apos;re looking for a reliable manufacturer, exploring export partnerships, or
              sourcing premium biodegradable materials — we&apos;d love to hear from you.
            </p>
            <div className="space-y-6">
              {[
                { l: "Email", v: "info@kraftino.org" },
                { l: "Phone", v: "+91 95608 71839" },
                {
                  l: "Address",
                  v: "VISHAL BAGH, Narela, New Delhi, Delhi, 110040, India",
                },
              ].map((item) => (
                <div key={item.l}>
                  <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-leaf-500 mb-1">
                    {item.l}
                  </div>
                  <div className="font-body text-sm text-leaf-950">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-leaf-100 shadow-xl shadow-leaf-900/[0.03]"
            >
              <div className="flex gap-2 mb-6">
                {["Manufacturer", "Exporter", "Trader"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm({ ...form, type: t.toLowerCase() })}
                    className={`flex-1 font-mono text-[10px] tracking-[0.1em] uppercase py-2.5 rounded-lg transition-all ${
                      form.type === t.toLowerCase()
                        ? "bg-leaf-700 text-white"
                        : "bg-leaf-50 text-leaf-500 hover:bg-leaf-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <input
                type="text"
                placeholder="Company name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={`${inputClass} mb-4`}
              />
              <textarea
                placeholder="Tell us about your requirements..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} mb-6 resize-none`}
              />
              <button
                type="submit"
                className={`w-full font-mono text-xs tracking-[0.12em] uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  sent ? "bg-leaf-500 text-white" : "btn-green text-white"
                }`}
              >
                {sent ? (
                  "✓ Message Sent — Thank You"
                ) : (
                  <span className="flex items-center gap-2">
                    Send Inquiry <ArrowRight size={16} />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-10 h-px bg-leaf-500 inline-block" />
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-leaf-600">
        {children}
      </span>
    </div>
  );
}

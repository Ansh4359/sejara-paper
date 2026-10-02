export default function SeoHiddenText({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute w-px h-px overflow-hidden"
      style={{ clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

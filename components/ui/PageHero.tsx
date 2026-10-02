import FloatingLeaves from "./FloatingLeaves";
import SectionTag from "./SectionTag";

interface PageHeroProps {
  tag: string;
  title: string;
  accent: string;
  sub: string;
  gradient: string;
  image?: string;
}

export default function PageHero({ tag, title, accent, sub, gradient, image }: PageHeroProps) {
  return (
    <section className={`relative min-h-[70vh] flex items-end overflow-hidden ${gradient}`}>
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/95 via-leaf-900/60 to-leaf-900/30" />
      <FloatingLeaves />
      <div className="absolute inset-0 leaf-dots opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[10rem] lg:text-[16rem] font-light text-white/[0.03] leading-none whitespace-nowrap">
          {accent || title}
        </span>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 pt-32 w-full">
        <div className="anim-fade-up">
          <SectionTag>{tag}</SectionTag>
        </div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6 anim-fade-up d1">
          {title}
          <br />
          <span className="italic font-light text-leaf-200">{accent}</span>
        </h1>
        <p className="font-body text-base lg:text-lg text-white/60 max-w-xl leading-relaxed anim-fade-up d2">
          {sub}
        </p>
      </div>
    </section>
  );
}

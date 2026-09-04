import Link from "next/link";
import Image from "next/image";
import SwingTag from "@/components/SwingTag";
import Swatch from "@/components/Swatch";

const CATEGORIES = [
  {
    code: "F/01",
    name: "Formal",
    desc: "Crisp, structured shirting built for boardrooms and black oxford shoes.",
    tone: "bone",
    img: "/products/safari-utility-shirt.jpg",
  },
  {
    code: "F/02",
    name: "Casual",
    desc: "Relaxed weaves and easy collars for everyday wear, off the clock.",
    tone: "brass",
    img: "/products/suede-trim-utility-shirt.jpg",
  },
  {
    code: "F/03",
    name: "Party Wear",
    desc: "Statement prints and finishes for evenings that call for more.",
    tone: "wine",
    img: "/products/wine-beaded-embroidered-shirt.jpg",
  },
  {
    code: "F/04",
    name: "Custom & Bulk",
    desc: "Private-label and bulk manufacturing, built to your specification sheet.",
    tone: "ink",
    img: "/products/workshop-rack.jpg",
  },
];

const PROCESS = [
  { n: "01", t: "Design", d: "Silhouette, collar and fabric direction locked with the buyer." },
  { n: "02", t: "Fabric Sourcing", d: "Yarn and weave selected for hand-feel, drape and durability." },
  { n: "03", t: "Cutting", d: "Precision pattern cutting to size chart and grading rules." },
  { n: "04", t: "Stitching", d: "Line assembly with checkpoints at every seam." },
  { n: "05", t: "Finishing & QC", d: "Pressing, trims and a full quality pass before packing." },
  { n: "06", t: "Dispatch", d: "Retail-ready or bulk-packed, shipped on your timeline." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-bone hero-legacy overflow-hidden">
        <div className="container-px pt-8 pb-12 sm:pt-12 md:pt-16 lg:pt-24 md:pb-24 lg:pb-32">
          <div className="flex justify-between items-start mb-6 sm:mb-10 md:mb-16 lg:mb-24 flex-col sm:flex-row gap-4">
            <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-widest2 uppercase text-white">
              Avi Couture Private Limited
              <br className="hidden sm:block" /> New Delhi, India
            </p>
            <SwingTag code="AC—MFG" label="Est. Manufacturing" tone="ink" rotate="rotate-2" className="hidden sm:inline-flex" />
          </div>

          <h1 className="font-display text-[7vw] sm:text-4xl md:text-6xl lg:text-8xl leading-[0.95] max-w-5xl mb-4 sm:mb-6 md:mb-8">
            Every stitch
            <br />
            is a <em className="italic text-brass font-medium">decision.</em>
          </h1>

          <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-xl text-bone/70 text-sm sm:text-base md:text-lg leading-relaxed">
            FLIRT HOMME is the shirt label of Avi Couture Private Limited —
            formal, casual and party wear, cut in our New Delhi workshop and
            manufactured at scale for retailers and partners.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col xs:flex-row gap-3 xs:gap-4">
            <Link
              href="/products"
              className="font-mono text-[10px] sm:text-[11px] tracking-widest2 uppercase bg-brass text-ink px-4 sm:px-6 py-3 sm:py-4 hover:bg-brass-light transition-colors text-center sm:text-left"
            >
              View the Collection
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[10px] sm:text-[11px] tracking-widest2 uppercase border border-bone/30 px-4 sm:px-6 py-3 sm:py-4 hover:border-bone/70 transition-colors text-center sm:text-left"
            >
              Request a Bulk Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-bone">
        <div className="container-px py-10 md:py-20 lg:py-28 grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 lg:gap-20">
          <div>
            <p className="font-mono text-[10px] sm:text-[11px] tracking-widest2 uppercase text-brass mb-3 sm:mb-5">
              About the Label
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-snug max-w-md text-ink mb-4 sm:mb-6">
              A manufacturing house first. A shirt label because of it.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-md mb-4 sm:mb-6" style={{color: "#410042"}}>
              Avi Couture Private Limited builds garments for a living —
              FLIRT HOMME is where that manufacturing discipline shows up as a
              finished shirt. Every piece that carries the tag has gone
              through the same cutting floor, the same stitching line, and
              the same quality pass, whether it&rsquo;s one shirt or ten
              thousand.
            </p>
            <Link
              href="/about"
              className="inline-block font-mono text-[10px] sm:text-[11px] tracking-widest2 uppercase border-b border-ink pb-1 hover:text-brass hover:border-brass transition-colors text-ink"
            >
              Read the Full Story →
            </Link>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center">
            <div className="flex items-center justify-between border-b hairline pb-3 sm:pb-4">
              <span className="font-mono text-[9px] sm:text-xs tracking-widest2 uppercase text-ink/50">Based In</span>
              <span className="font-display text-base sm:text-lg text-ink">New Delhi, India</span>
            </div>
            <div className="flex items-center justify-between border-b hairline pb-3 sm:pb-4">
              <span className="font-mono text-[9px] sm:text-xs tracking-widest2 uppercase text-ink/50">Product Lines</span>
              <span className="font-display text-base sm:text-lg text-ink">4 Categories</span>
            </div>
            <div className="flex items-center justify-between border-b hairline pb-3 sm:pb-4">
              <span className="font-mono text-[9px] sm:text-xs tracking-widest2 uppercase text-ink/50">Order Type</span>
              <span className="font-display text-base sm:text-lg text-ink">Retail &amp; Bulk</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="font-mono text-[9px] sm:text-xs tracking-widest2 uppercase text-ink/50">Label</span>
              <span className="font-display text-base sm:text-lg text-ink">FLIRT HOMME</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="bg-ink third-section">
        <div className="container-px py-10 md:py-20 lg:py-28">
          <div className="flex items-end justify-between mb-8 md:mb-12 flex-wrap gap-4">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">What We Cut</h2>
            <SwingTag code="04" label="Product Lines" tone="ink" rotate="-rotate-1" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {CATEGORIES.map((c) => (
              <Link
                key={c.name}
                href="/products"
                className="group block border border-line-dark hover:border-brass transition-colors overflow-hidden"
              >
                {c.img ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <Swatch tone={c.tone} label="Product Photo" className="aspect-[4/5]" />
                )}
                <div className="p-3 sm:p-4 md:p-5">
                  <p className="font-mono text-[9px] sm:text-[10px] tracking-widest2 uppercase text-white mb-2">
                    {c.code}
                  </p>
                  <h3 className="font-display text-white sm:text-xl mb-2">{c.name}</h3>
                  <p className="text-xs sm:text-sm text-bone/60 leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-bone">
        <div className="container-px py-10 md:py-20 lg:py-28">
          <p className="font-mono text-[10px] sm:text-[11px] tracking-widest2 uppercase text-brass mb-3 sm:mb-5">
            How a Shirt Gets Made Here
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl max-w-lg mb-8 md:mb-14 text-ink">
            From fabric roll to folded shirt.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {PROCESS.map((s) => (
              <div key={s.n} className="border-t hairline pt-4 sm:pt-5">
                <span className="font-display text-2xl sm:text-3xl text-brass">{s.n}</span>
                <h3 className="font-display text-lg sm:text-xl mt-3 mb-2 text-ink">{s.t}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-ink text-bone">
        <div className="container-px py-10 md:py-20 lg:py-24 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl max-w-lg leading-tight">
            Building a private label, or placing a bulk order?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 font-mono text-[10px] sm:text-[11px] tracking-widest2 uppercase bg-brass text-ink px-4 sm:px-6 lg:px-7 py-3 sm:py-4 hover:bg-brass-light transition-colors text-center sm:text-left min-h-[44px] flex items-center justify-center"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}

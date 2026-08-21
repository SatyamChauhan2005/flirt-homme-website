import Link from "next/link";
import SwingTag from "@/components/SwingTag";
import Swatch from "@/components/Swatch";

const CATEGORIES = [
  {
    code: "F/01",
    name: "Formal",
    desc: "Crisp, structured shirting built for boardrooms and black oxford shoes.",
    tone: "bone",
  },
  {
    code: "F/02",
    name: "Casual",
    desc: "Relaxed weaves and easy collars for everyday wear, off the clock.",
    tone: "brass",
  },
  {
    code: "F/03",
    name: "Party Wear",
    desc: "Statement prints and finishes for evenings that call for more.",
    tone: "wine",
  },
  {
    code: "F/04",
    name: "Custom & Bulk",
    desc: "Private-label and bulk manufacturing, built to your specification sheet.",
    tone: "ink",
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
      <section className="relative bg-ink text-bone overflow-hidden">
        <div className="container-px pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="flex justify-between items-start mb-16 md:mb-24">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-bone/50">
              Avi Couture Private Limited
              <br className="hidden sm:block" /> New Delhi, India
            </p>
            <SwingTag code="AC—MFG" label="Est. Manufacturing" tone="ink" rotate="rotate-2" className="hidden sm:inline-flex" />
          </div>

          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl sm:leading-[0.95] max-w-5xl">
            Every stitch
            <br />
            is a <em className="italic text-brass font-medium">decision.</em>
          </h1>

          <p className="mt-8 md:mt-10 max-w-xl text-bone/70 text-base md:text-lg leading-relaxed">
            FLIRT HOMME is the shirt label of Avi Couture Private Limited —
            formal, casual and party wear, cut in our New Delhi workshop and
            manufactured at scale for retailers and private-label partners.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="font-mono text-[11px] tracking-widest2 uppercase bg-brass text-ink px-6 py-4 hover:bg-brass-light transition-colors"
            >
              View the Collection
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[11px] tracking-widest2 uppercase border border-bone/30 px-6 py-4 hover:border-bone/70 transition-colors"
            >
              Request a Bulk Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-px py-20 md:py-28 grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
          <div>
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-5">
              About the Label
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-snug max-w-md">
              A manufacturing house first. A shirt label because of it.
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed max-w-md">
              Avi Couture Private Limited builds garments for a living —
              FLIRT HOMME is where that manufacturing discipline shows up as a
              finished shirt. Every piece that carries the tag has gone
              through the same cutting floor, the same stitching line, and
              the same quality pass, whether it&rsquo;s one shirt or ten
              thousand.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 font-mono text-[11px] tracking-widest2 uppercase border-b border-ink pb-1 hover:text-brass hover:border-brass transition-colors"
            >
              Read the Full Story →
            </Link>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className="flex items-center justify-between border-b hairline pb-4">
              <span className="font-mono text-xs tracking-widest2 uppercase text-ink/50">Based In</span>
              <span className="font-display text-lg">New Delhi, India</span>
            </div>
            <div className="flex items-center justify-between border-b hairline pb-4">
              <span className="font-mono text-xs tracking-widest2 uppercase text-ink/50">Product Lines</span>
              <span className="font-display text-lg">4 Categories</span>
            </div>
            <div className="flex items-center justify-between border-b hairline pb-4">
              <span className="font-mono text-xs tracking-widest2 uppercase text-ink/50">Order Type</span>
              <span className="font-display text-lg">Retail &amp; Bulk</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="font-mono text-xs tracking-widest2 uppercase text-ink/50">Label</span>
              <span className="font-display text-lg">FLIRT HOMME</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-px py-20 md:py-28">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-display text-3xl md:text-4xl">What We Cut</h2>
            <SwingTag code="04" label="Product Lines" tone="ink" rotate="-rotate-1" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((c) => (
              <Link
                key={c.name}
                href="/products"
                className="group block border border-line-dark hover:border-brass/60 transition-colors"
              >
                <Swatch tone={c.tone} label="Product Photo" className="aspect-[4/5]" />
                <div className="p-5">
                  <p className="font-mono text-[10px] tracking-widest2 uppercase text-brass mb-2">
                    {c.code}
                  </p>
                  <h3 className="font-display text-xl mb-2">{c.name}</h3>
                  <p className="text-sm text-bone/60 leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-px py-20 md:py-28">
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-5">
            How a Shirt Gets Made Here
          </p>
          <h2 className="font-display text-3xl md:text-4xl max-w-lg mb-14">
            From fabric roll to folded shirt.
          </h2>

          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            {PROCESS.map((s) => (
              <div key={s.n} className="border-t hairline pt-5">
                <span className="font-mono text-3xl text-brass">{s.n}</span>
                <h3 className="font-display text-xl mt-3 mb-2">{s.t}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-px py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-display text-3xl md:text-4xl max-w-lg">
            Building a private label, or placing a bulk order?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 font-mono text-[11px] tracking-widest2 uppercase bg-brass text-ink px-7 py-4 hover:bg-brass-light transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}

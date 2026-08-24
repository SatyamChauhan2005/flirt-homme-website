import SwingTag from "@/components/SwingTag";
import Swatch from "@/components/Swatch";
import Link from "next/link";

export const metadata = {
  title: "About — FLIRT HOMME | Avi Couture Private Limited",
  description:
    "Avi Couture Private Limited is a New Delhi based garment manufacturer. FLIRT HOMME is its designer shirt label for formal, casual, party wear and private-label production.",
};

const VALUES = [
  {
    code: "01",
    t: "Cutting Floor Discipline",
    d: "Pattern grading and cutting is done in-house, so fit stays consistent across every size run.",
  },
  {
    code: "02",
    t: "Quality at Every Checkpoint",
    d: "Fabric, stitching and finishing are inspected at each stage, not just before packing.",
  },
  {
    code: "03",
    t: "Retail and Bulk, Same Standard",
    d: "A single shirt and a ten-thousand-piece order go through the same process end to end.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-bone text-ink">
        <div className="container-px py-20 md:py-28">
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-5">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight">
            A garment manufacturer that puts its own name on the label.
          </h1>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-px py-20 md:py-28 grid md:grid-cols-[1fr_1fr] gap-14 items-start">
          <Swatch tone="brass" label="Workshop Photo" className="aspect-[4/5] w-full" />

          <div>
            <h2 className="font-display text-3xl mb-6">Who We Are</h2>
            <p className="text-black leading-relaxed mb-5">
              Avi Couture Private Limited is a garment manufacturing company
              based in Moti Nagar, New Delhi. We build shirts — formal,
              casual and party wear — for retail shelves and for brands that
              need a manufacturing partner they can hand a spec sheet to and
              trust.
            </p>
            <p className="text-black leading-relaxed mb-5">
              FLIRT HOMME is our own shirt label, and the clearest example of
              what we do: fabric sourced with intent, patterns cut precisely,
              and a finish that holds up whether the shirt is going to a
              single customer or a chain of stores.
            </p>
            <p className="text-black leading-relaxed">
              We also manufacture on a private-label and bulk basis — your
              design, your brand, our cutting floor and stitching line.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 font-mono text-[11px] tracking-widest2 uppercase bg-ink text-bone px-6 py-4 hover:bg-ink-soft transition-colors"
            >
              Discuss a Private-Label Order
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bone text-ink">
        <div className="container-px py-20 md:py-28">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <h2 className="font-display text-3xl md:text-4xl">
              What We Stand On
            </h2>
            <SwingTag code="AC" label="Manufacturing Values" tone="bone" rotate="rotate-1" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {VALUES.map((v) => (
              <div key={v.code} className="border-t hairline-dark pt-6">
                <span className="font-mono text-xs tracking-widest2 text-brass">{v.code}</span>
                <h3 className="font-display text-xl mt-3 mb-2">{v.t}</h3>
                <p className="text-sm text-black leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-px py-20 md:py-24 grid md:grid-cols-2 gap-10">
          <div className="border hairline p-8">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-3">
              Location
            </p>
            <p className="font-display text-2xl mb-2">New Delhi, India</p>
            <p className="text-ink/60 text-sm">Moti Nagar — full address on our Contact page.</p>
          </div>
          <div className="border hairline p-8">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-3">
              What We Manufacture
            </p>
            <p className="font-display text-2xl mb-2">Formal · Casual · Party · Custom</p>
            <p className="text-ink/60 text-sm">Retail-ready pieces and bulk private-label orders.</p>
          </div>
        </div>
      </section>
    </>
  );
}

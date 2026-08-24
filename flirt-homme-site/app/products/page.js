import Link from "next/link";
import Image from "next/image";
import SwingTag from "@/components/SwingTag";
import Swatch from "@/components/Swatch";

export const metadata = {
  title: "Products — FLIRT HOMME | Avi Couture Private Limited",
  description:
    "Browse FLIRT HOMME shirt categories — formal, casual, party wear and custom bulk manufacturing — from Avi Couture Private Limited, New Delhi.",
};

const LINES = [
  {
    code: "F/01",
    name: "Formal",
    tone: "bone",
    intro:
      "Structured shirting for the workday — clean collars, tailored blocks, fabrics chosen to hold their press.",
    items: [
      { name: "Classic Oxford Shirt", tag: "Slim Fit" },
      { name: "Twill Formal Shirt", tag: "Regular Fit" },
      { name: "Striped Business Shirt", tag: "Slim Fit" },
    ],
  },
  {
    code: "F/02",
    name: "Casual",
    tone: "brass",
    intro:
      "Easy weaves and relaxed collars, built for wear that doesn't need to be perfectly ironed.",
    items: [
      {
        name: "Safari Utility Shirt",
        tag: "Cargo Pocket · 5 Colourways",
        img: "/products/safari-utility-shirt.jpg",
      },
      {
        name: "Contrast-Stitch Overshirt",
        tag: "Resort Fit",
        img: "/products/navy-overshirt.jpg",
      },
    ],
  },
  {
    code: "F/03",
    name: "Party Wear",
    tone: "wine",
    intro:
      "Prints, textures and finishes for the evenings that call for a little more presence.",
    items: [
      {
        name: "Horse Embroidered Shirt",
        tag: "4 Colourways",
        img: "/products/horse-embroidered-shirt.jpg",
      },
      {
        name: "Pheasant Embroidered Shirt",
        tag: "4 Colourways",
        img: "/products/pheasant-embroidered-shirt.jpg",
      },
    ],
  },
];

export default function Products() {
  return (
    <>
      <section className="bg-ink text-bone">
        <div className="container-px py-20 md:py-28">
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-5">
            Products
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight">
            Four lines. One cutting floor.
          </h1>
          <p className="mt-6 max-w-xl text-bone/70 leading-relaxed">
            This is a working catalog — final photography and SKUs will
            replace the placeholders below. For pricing, MOQs or a custom
            specification, use the enquiry button on any piece.
          </p>
        </div>
      </section>

      {LINES.map((line, i) => (
        <section key={line.code} className={i % 2 === 0 ? "bg-bone" : "bg-ink text-bone"}>
          <div className="container-px py-16 md:py-24">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className={`font-mono text-[11px] tracking-widest2 uppercase mb-3 ${i % 2 === 0 ? "text-brass" : "text-brass"}`}>
                  {line.code}
                </p>
                <h2 className="font-display text-3xl md:text-4xl">{line.name}</h2>
                <p className={`mt-3 max-w-lg text-sm leading-relaxed ${i % 2 === 0 ? "text-ink/60" : "text-bone/60"}`}>
                  {line.intro}
                </p>
              </div>
              <SwingTag
                code={line.code}
                label={line.name}
                tone={i % 2 === 0 ? "bone" : "ink"}
                rotate={i % 2 === 0 ? "-rotate-2" : "rotate-2"}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {line.items.map((item) => (
                <div
                  key={item.name}
                  className={`border ${i % 2 === 0 ? "hairline" : "hairline-dark"}`}
                >
                  {item.img ? (
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <Swatch tone={line.tone} label="Product Photo" className="aspect-[4/5]" />
                  )}
                  <div className="p-5">
                    <p className="font-mono text-[10px] tracking-widest2 uppercase text-brass mb-2">
                      {item.tag}
                    </p>
                    <h3 className="font-display text-lg mb-4">{item.name}</h3>
                    <Link
                      href="/contact"
                      className="font-mono text-[11px] tracking-widest2 uppercase border-b border-current pb-0.5 hover:text-brass hover:border-brass transition-colors"
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom & Bulk */}
      <section className="bg-bone">
        <div className="container-px py-20 md:py-28 grid md:grid-cols-[1fr_1fr] gap-14 items-center">
          <div>
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-5">
              F/04 — Custom &amp; Bulk
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 max-w-md">
              Bring us a spec sheet. We&rsquo;ll bring you the shirt.
            </h2>
            <p className="text-ink/70 leading-relaxed mb-4 max-w-md">
              Private-label manufacturing for brands and retailers — your
              design, fabric preference and branding, produced at the volume
              you need.
            </p>
            <ul className="space-y-2 text-sm text-ink/70 mb-8">
              <li>— Custom fabric sourcing</li>
              <li>— Size range &amp; grading built to your chart</li>
              <li>— Private-label tagging and packaging</li>
              <li>— Flexible minimum order quantities</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block font-mono text-[11px] tracking-widest2 uppercase bg-ink text-bone px-6 py-4 hover:bg-ink-soft transition-colors"
            >
              Request a Bulk Quote
            </Link>
          </div>
          <Swatch tone="ink" label="Bulk Production Photo" className="aspect-[4/5] w-full" />
        </div>
      </section>
    </>
  );
                }

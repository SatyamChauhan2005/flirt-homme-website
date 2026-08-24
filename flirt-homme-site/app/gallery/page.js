import Image from "next/image";
import SwingTag from "@/components/SwingTag";

export const metadata = {
  title: "Gallery — FLIRT HOMME | Avi Couture Private Limited",
  description:
    "A look inside the FLIRT HOMME workshop and collection — real pieces, real embroidery detail, real production floor.",
};

const TILES = [
  { img: "/products/workshop-rack.jpg", label: "On the Rack", span: "row-span-2" },
  { img: "/products/coffee-brooch-embroidered-shirt.jpg", label: "Brooch Embroidery Detail" },
  { img: "/products/wine-beaded-embroidered-shirt.jpg", label: "Hand-Beaded Panel" },
  { img: "/products/suede-cuff-detail.jpg", label: "Suede Cuff & Pocket Detail" },
  { img: "/products/cream-floral-embroidered-shirt.jpg", label: "Floral Embroidery", span: "row-span-2" },
  { img: "/products/mauve-jacquard-shirt.jpg", label: "Jacquard Weave" },
  { img: "/products/navy-dress-shirt.jpg", label: "Striped Placket Detail" },
  { img: "/products/pheasant-embroidered-shirt.jpg", label: "Pheasant Embroidery — 4 Colourways" },
];

export default function Gallery() {
  return (
    <>
      <section className="bg-ink text-bone">
        <div className="container-px py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-5">
                Gallery
              </p>
              <h1 className="font-display text-4xl md:text-6xl max-w-2xl leading-tight">
                Inside the workshop, on the rack.
              </h1>
            </div>
            <SwingTag code="AC" label="Real Pieces" tone="ink" rotate="-rotate-2" />
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-px py-16 md:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-5">
            {TILES.map((t, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden border hairline ${t.span || ""}`}
              >
                <Image
                  src={t.img}
                  alt={t.label}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3">
                  <p className="font-mono text-[10px] tracking-widest2 uppercase text-bone">
                    {t.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

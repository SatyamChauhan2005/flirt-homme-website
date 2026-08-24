import SwingTag from "@/components/SwingTag";
import Swatch from "@/components/Swatch";

export const metadata = {
  title: "Gallery — FLIRT HOMME | Avi Couture Private Limited",
  description:
    "A look inside the FLIRT HOMME workshop and collection — photography placeholders ready to be replaced with your own.",
};

const TILES = [
  { tone: "bone", label: "Lookbook — Formal", span: "row-span-2" },
  { tone: "brass", label: "Workshop — Cutting Floor" },
  { tone: "wine", label: "Lookbook — Party Wear" },
  { tone: "ink", label: "Fabric Detail" },
  { tone: "bone", label: "Lookbook — Casual", span: "row-span-2" },
  { tone: "brass", label: "Workshop — Stitching Line" },
  { tone: "wine", label: "Collar Detail" },
  { tone: "ink", label: "Finished Goods — Packed" },
];

export default function Gallery() {
  return (
    <>
      <section className="bg-bone text-ink">
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
            <SwingTag code="AC" label="Photography Pending" tone="bone" rotate="-rotate-2" />
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-px py-16 md:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-5">
            {TILES.map((t, idx) => (
              <Swatch
                key={idx}
                tone={t.tone}
                label={t.label}
                className={`h-full ${t.span || ""}`}
              />
            ))}
          </div>
          <p className="mt-10 text-sm text-ink/50 max-w-md">
            These tiles are placeholders sized for real lookbook and workshop
            photography — swap each one for a photo of the same aspect ratio.
          </p>
        </div>
      </section>
    </>
  );
}

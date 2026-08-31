import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#21575C] text-white border-t border-white/15">
      <div className="container-px py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/flirt-logo.png"
            alt="FLIRT HOMME"
            width={150}
            height={50}
            className="h-9 w-auto mb-5"
          />
          <p className="text-white text-sm leading-relaxed max-w-xs font-semibold">
            The designer shirt label of Avi Couture Private Limited — manufactured in New Delhi, worn everywhere.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest uppercase text-white mb-4">
            Navigate
          </p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="text-white hover:text-[#FCF203] transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-[#FCF203] transition-colors">About</Link></li>
            <li><Link href="/products" className="text-white hover:text-[#FCF203] transition-colors">Products</Link></li>
            <li><Link href="/gallery" className="text-white hover:text-[#FCF203] transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="text-white hover:text-[#FCF203] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest uppercase text-white mb-4">
            Lines
          </p>
          <ul className="space-y-2.5 text-sm">
            <li className="text-white font-medium">Formal Shirts</li>
            <li className="text-white font-medium">Casual Shirts</li>
            <li className="text-white font-medium">Party Wear</li>
            <li className="text-white font-medium">Custom &amp; Bulk Orders</li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest uppercase text-white mb-4">
            Reach Us
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="mailto:mis@avicouture.com" className="text-white hover:text-[#FCF203] transition-colors font-medium">
                mis@avicouture.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

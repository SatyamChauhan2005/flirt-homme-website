import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-px py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/flirt-logo.png"
            alt="FLIRT HOMME"
            width={150}
            height={50}
            className="h-9 w-auto mb-5"
          />
          <p className="text-bone/60 text-sm leading-relaxed max-w-xs">
            The designer shirt label of Avi Couture Private Limited —
            manufactured in New Delhi, worn everywhere.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-4">
            Navigate
          </p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="text-bone/75 hover:text-bone">Home</Link></li>
            <li><Link href="/about" className="text-bone/75 hover:text-bone">About</Link></li>
            <li><Link href="/products" className="text-bone/75 hover:text-bone">Products</Link></li>
            <li><Link href="/gallery" className="text-bone/75 hover:text-bone">Gallery</Link></li>
            <li><Link href="/contact" className="text-bone/75 hover:text-bone">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-4">
            Lines
          </p>
          <ul className="space-y-2.5 text-sm text-bone/75">
            <li>Formal Shirts</li>
            <li>Casual Shirts</li>
            <li>Party Wear</li>
            <li>Custom &amp; Bulk Orders</li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-4">
            Reach Us
          </p>
          <ul className="space-y-2.5 text-sm text-bone/75">
            <li>
              <a href="mailto:mis@avicouture.com" className="hover:text-bone">
                mis@avicouture.com
              </a>
            </li>
            <li>
              <a href="tel:+91XXXXXXXXXX" className="hover:text-bone">
                +91 XXXXX XXXXX
              </a>
            </li>
            <li className="text-bone/60">
              Moti Nagar, New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono tracking-widest2 uppercase text-bone/45">
          <span>&copy; {new Date().getFullYear()} Avi Couture Private Limited</span>
          <span>FLIRT HOMME — Designed &amp; Manufactured in Delhi, India</span>
        </div>
      </div>
    </footer>
  );
}

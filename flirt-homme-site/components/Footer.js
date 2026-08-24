import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#21575C] text-[#FFFFFF] border-t border-white/15">
      <div className="container-px py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/flirt-logo.png"
            alt="FLIRT HOMME"
            width={150}
            height={50}
            className="h-9 w-auto mb-5"
          />
          <p className="text-white text-sm leading-relaxed max-w-xs">
            The designer shirt label of Avi Couture Private Limited —
            manufactured in New Delhi, worn everywhere.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-4">
            Navigate
          </p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="text-white hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-white">About</Link></li>
            <li><Link href="/products" className="text-white hover:text-white">Products</Link></li>
            <li><Link href="/gallery" className="text-white hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="text-white hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-4">
            Lines
          </p>
          <ul className="space-y-2.5 text-sm">
            <li className="text-white">Formal Shirts</li>
            <li className="text-white">Casual Shirts</li>
            <li className="text-white">Party Wear</li>
            <li className="text-white">Custom &amp; Bulk Orders</li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-4">
            Reach Us
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="mailto:sales@avicouture.com" className="text-white hover:text-white">
                mis@avicouture.com
              </a>
            </li>
            <li>
              <a href="tel:+91 82877 79400" className="text-white hover:text-white">
                +91 82877 79400
              </a>
            </li>
            <li className="text-white">
              25, Najafgarh Road Ind. Area, Zakhira, Moti Nagar, New Delhi,  &amp; 110015
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono tracking-widest2 uppercase text-white">
          <span>&copy; {new Date().getFullYear()} Avi Couture Private Limited</span>
          <span>FLIRT HOMME — Designed &amp; Manufactured in Delhi, India</span>
        </div>
      </div>
    </footer>
  );
}

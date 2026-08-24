"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
<header className="sticky top-0 z-50 bg-gradient-to-r from-[#615D15] to-[#666308] text-white border-b border-white/15">
    <div className="container-px flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/flirt-logo.png"
            alt="FLIRT HOMME"
            width={140}
            height={48}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden sm:block h-8 w-px bg-white/20" />
          <span className="hidden sm:block font-mono text-[10px] tracking-widest2 uppercase text-white/60">
            Avi Couture Pvt. Ltd.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[12px] tracking-widest2 uppercase pb-1 border-b transition-colors ${
                  active
                    ? "border-[#FCF203] text-[#FCF203]"
                    : "border-transparent text-white hover:text-[#FCF203] hover:border-[#FCF203]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="font-mono text-[12px] tracking-widest2 uppercase bg-brass text-white px-4 py-2 hover:bg-brass-light transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-px w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/15 bg-[#000530]">
          <ul className="container-px py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-mono text-xs tracking-widest2 uppercase border-b border-white/15 ${
                    pathname === item.href
                      ? "text-[#FCF203] border-[#FCF203]"
                      : "text-white hover:text-[#FCF203] hover:border-[#FCF203]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

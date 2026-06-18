"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, whatsappUrl } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[60] transition-[background,backdrop-filter,border-color] duration-300"
      style={{
        background: scrolled ? "rgba(34,26,20,.88)" : "rgba(34,26,20,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,.10)" : "rgba(255,255,255,0)"}`,
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4">
        <Link href="/#top" className="flex flex-none items-center gap-3 no-underline">
          <Image
            src="/marca/monogram-cream.png"
            alt=""
            width={34}
            height={34}
            className="h-[34px] w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[19px] font-medium tracking-[0.2em] text-cream">
              DESIRÉE PARADA
            </span>
            <span className="mt-[7px] text-[9px] font-semibold uppercase tracking-[0.34em] text-gold-light">
              Estratégia Jurídica Empresarial
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-[0.01em] text-mist-soft no-underline transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-3.5 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            className="rounded-[2px] border border-white/25 px-[18px] py-[11px] text-[13.5px] font-semibold text-white no-underline transition-colors hover:border-gold hover:text-gold"
          >
            WhatsApp
          </a>
          <Link
            href="/#contato"
            className="rounded-[2px] bg-gold px-5 py-3 text-[13.5px] font-bold text-night no-underline transition-colors hover:bg-gold-light"
          >
            Agendar Diagnóstico
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-none items-center justify-center rounded-[2px] border border-white/25 bg-transparent lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 bg-[rgba(34,26,20,.97)] px-6 pb-[22px] pt-3.5 backdrop-blur-xl lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/[0.07] py-3 text-base font-medium text-[#E9E2D6] no-underline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contato"
            onClick={() => setOpen(false)}
            className="mt-3.5 rounded-[2px] bg-gold p-3.5 text-center text-[15px] font-bold text-night no-underline"
          >
            Agendar Diagnóstico Estratégico
          </Link>
        </div>
      )}
    </header>
  );
}

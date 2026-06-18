import Link from "next/link";
import Image from "next/image";
import { addressLine1, addressLine2, mapsUrl, pegMark, site, whatsappUrl } from "@/lib/site";
import { InstagramIcon, LinkedInIcon } from "@/components/icons";

const footerNav = [
  { href: "/#riscos", label: "Mapa de Riscos" },
  { href: "/#atuacao", label: "Áreas de Atuação" },
  { href: "/#metodo", label: `Método PEG${pegMark}` },
  { href: "/#sobre", label: "Sobre" },
];

export default function Footer() {
  return (
    <footer className="bg-darknight px-6 pb-10 pt-[72px] text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/marca/logo-cream.png"
              alt="Desirée Parada — Advocacia & Consultoria"
              width={240}
              height={156}
              className="mb-2 h-auto w-[200px]"
            />
            <div className="mb-[22px] text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
              Estratégia Jurídica Empresarial
            </div>
            <p className="m-0 max-w-[340px] text-[15px] leading-[1.6] text-slate-muted">
              Estratégia jurídica para empresas, patrimônios e sucessão. Atendimento mediante
              agendamento.
            </p>
          </div>
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#A89079]">
              Contato
            </div>
            <div className="flex flex-col gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                className="text-[15px] text-mist-soft no-underline hover:text-gold"
              >
                WhatsApp · {site.phoneDisplay}
              </a>
              <a
                href={`tel:${site.landlineE164}`}
                className="text-[15px] text-mist-soft no-underline hover:text-gold"
              >
                Tel · {site.landlineDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-[15px] text-mist-soft no-underline hover:text-gold"
              >
                {site.email}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener"
                className="group mt-1 flex items-start gap-2.5 no-underline"
              >
                <svg
                  className="mt-[3px] flex-none"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1.5c-2.5 0-4.5 2-4.5 4.5C3.5 9.5 8 14.5 8 14.5s4.5-5 4.5-8.5C12.5 3.5 10.5 1.5 8 1.5Z"
                    stroke="#A8862E"
                    strokeWidth="1.3"
                  />
                  <circle cx="8" cy="6" r="1.6" stroke="#A8862E" strokeWidth="1.3" />
                </svg>
                <address className="text-[15px] not-italic leading-[1.5] text-mist-soft group-hover:text-gold">
                  {addressLine1}
                  <br />
                  {addressLine2}
                </address>
              </a>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram de Desirée Parada"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:border-gold hover:bg-gold hover:text-night"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn de Desirée Parada"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:border-gold hover:bg-gold hover:text-night"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#A89079]">
              Navegação
            </div>
            <div className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] text-mist-soft no-underline hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="m-0 mt-7 max-w-[900px] text-xs leading-[1.7] text-[#8E745D]">
          Direito Empresarial · Compliance · Governança Corporativa · NR-1 · Riscos Psicossociais ·
          Holding Familiar · Holding Patrimonial · Planejamento Sucessório · Proteção Patrimonial ·
          LGPD
        </p>
        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <span className="text-[13px] text-[#8E745D]">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </span>
          <span className="text-[13px] text-[#8E745D]">Consultoria jurídica estratégica</span>
        </div>
      </div>
    </footer>
  );
}

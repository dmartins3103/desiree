import Link from "next/link";
import { pegMark, site, whatsappUrl } from "@/lib/site";

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
            <div className="mb-2.5 font-serif text-[21px] font-medium tracking-[0.2em] text-white">
              DESIRÉE PARADA
            </div>
            <div className="mb-[22px] text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Estratégia Jurídica Empresarial
            </div>
            <p className="m-0 max-w-[340px] text-[15px] leading-[1.6] text-slate-muted">
              Estratégia jurídica para empresas, patrimônios e sucessão. Atendimento mediante
              agendamento.
            </p>
          </div>
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#6B7A93]">
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
                href={`mailto:${site.email}`}
                className="text-[15px] text-mist-soft no-underline hover:text-gold"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#6B7A93]">
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
        <p className="m-0 mt-7 max-w-[900px] text-xs leading-[1.7] text-[#5A6880]">
          Direito Empresarial · Compliance · Governança Corporativa · NR-1 · Riscos Psicossociais ·
          Holding Familiar · Holding Patrimonial · Planejamento Sucessório · Proteção Patrimonial ·
          LGPD
        </p>
        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <span className="text-[13px] text-[#5A6880]">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </span>
          <span className="text-[13px] text-[#5A6880]">Consultoria jurídica estratégica</span>
        </div>
      </div>
    </footer>
  );
}

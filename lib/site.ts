/**
 * Configuração central do site. Altere aqui o domínio/contatos
 * e tudo (metadata, canonical, sitemap, JSON-LD) é atualizado.
 */
export const site = {
  name: "Desirée Parada",
  shortName: "Desirée Parada",
  tagline: "Estratégia Jurídica Empresarial",
  // URL canônica de produção (sem barra final).
  url: "https://desiree-chi.vercel.app",
  locale: "pt_BR",
  description:
    "Assessoria jurídica estratégica em Direito Empresarial, Compliance, Governança Corporativa, NR-1, riscos psicossociais, holding familiar e patrimonial e planejamento sucessório.",
  email: "desiree@morisakieparada.com.br",
  phoneDisplay: "(21) 97596-9696",
  phoneE164: "+5521975966969",
  whatsappNumber: "5521975966969",
  whatsappMessage:
    "Olá Desirée, gostaria de agendar um diagnóstico estratégico.",
  areaServed: "Brasil",
  pegRegistered: true,
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const pegMark = site.pegRegistered ? "®" : "";

export const nav = [
  { href: "/#riscos", label: "Riscos" },
  { href: "/#atuacao", label: "Atuação" },
  { href: "/#metodo", label: "Método" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;

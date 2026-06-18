/**
 * Configuração central do site. Altere aqui o domínio/contatos
 * e tudo (metadata, canonical, sitemap, JSON-LD) é atualizado.
 */
export const site = {
  name: "Desirée Parada",
  shortName: "Desirée Parada",
  tagline: "Estratégia Jurídica Empresarial",
  // URL canônica de produção (sem barra final).
  url: "https://www.desireeparada.com.br",
  locale: "pt_BR",
  // Meta description do Google (ideal ≤ ~155 caracteres, persuasiva e com palavras-chave).
  description:
    "Assessoria jurídica estratégica para empresas e famílias empresárias: NR-1, compliance, governança, holding familiar e sucessão. Agende seu diagnóstico.",
  email: "desiree@desireeparada.com.br",
  phoneDisplay: "(21) 97596-6969",
  phoneE164: "+5521975966969",
  landlineDisplay: "(21) 3596-9162",
  landlineE164: "+552135969162",
  whatsappNumber: "5521975966969",
  whatsappMessage:
    "Olá Desirée, gostaria de agendar um diagnóstico estratégico.",
  instagramHandle: "@desireeparada.adv",
  instagramUrl: "https://instagram.com/desireeparada.adv",
  linkedinUrl: "https://www.linkedin.com/in/desir%C3%A9e-parada-370b7239a/",
  areaServed: "Brasil",
  pegRegistered: true,
  address: {
    street: "Av. das Américas, 3.500, Bl. 06, sala 409",
    neighborhood: "Barra da Tijuca",
    city: "Rio de Janeiro",
    state: "RJ",
    postalCode: "22640-102",
    country: "BR",
  },
} as const;

// Endereço formatado para exibição.
export const addressLine1 = site.address.street;
export const addressLine2 = `${site.address.neighborhood}, ${site.address.city} — ${site.address.state}, ${site.address.postalCode}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.neighborhood}, ${site.address.city} - ${site.address.state}, ${site.address.postalCode}`,
)}`;

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

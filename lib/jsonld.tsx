import { site, whatsappUrl } from "./site";
import { faqs } from "./content";
import type { Post } from "./posts";

/** Identidade da profissional + serviço jurídico — reconhecida por Google e por LLMs. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService"],
    "@id": `${site.url}/#organization`,
    name: `${site.name} — ${site.tagline}`,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    description: site.description,
    email: site.email,
    telephone: site.phoneE164,
    priceRange: "$$$",
    areaServed: { "@type": "Country", name: site.areaServed },
    knowsLanguage: "pt-BR",
    sameAs: [whatsappUrl],
    founder: {
      "@type": "Person",
      name: site.name,
      jobTitle: "Advogada — Estratégia Jurídica Empresarial",
      image: `${site.url}/fotos/retrato.jpg`,
      worksFor: { "@id": `${site.url}/#organization` },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Cândido Mendes",
        },
        { "@type": "CollegeOrUniversity", name: "Fundação Getulio Vargas (FGV)" },
      ],
      memberOf: {
        "@type": "Organization",
        name: "Ordem dos Advogados do Brasil (OAB)",
      },
      hasCredential: [
        "MBA em Direito Tributário (FGV)",
        "MBA em Holding (EBPÓS)",
        "Especialização em Compliance (FGV)",
        "Especialização em Contratos",
      ].map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c,
      })),
    },
    knowsAbout: [
      "Direito Empresarial",
      "Compliance",
      "Governança Corporativa",
      "NR-1",
      "Riscos Psicossociais",
      "Holding Familiar",
      "Holding Patrimonial",
      "Planejamento Sucessório",
      "Proteção Patrimonial",
      "LGPD",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de Atuação",
      itemListElement: [
        "NR-1 e Riscos Psicossociais",
        "Compliance e Governança",
        "Direito Empresarial",
        "Holding Familiar e Patrimonial",
      ].map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: `${site.name} — ${site.tagline}`,
    inLanguage: "pt-BR",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(post: Post) {
  const plain = post.body
    .map((b) => b.replace(/^[#>*-]+\s*/, "").replace(/\*\*(.+?)\*\*/g, "$1"))
    .join(" ");
  const wordCount = plain.split(/\s+/).filter(Boolean).length;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}/blog/${post.slug}/opengraph-image`,
    inLanguage: "pt-BR",
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.cat,
    wordCount,
    keywords: post.cat,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Componente utilitário para injetar JSON-LD. */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import ArticleCover from "@/components/ArticleCover";
import { ArrowRight } from "@/components/icons";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { categories } from "@/lib/content";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Insights Jurídicos para Empresas",
  description:
    "Artigos sobre NR-1, riscos psicossociais, compliance, holding familiar e patrimonial, governança corporativa e planejamento sucessório.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Insights Jurídicos para Empresas | Desirée Parada",
    description:
      "Conhecimento que antecipa decisões: NR-1, compliance, holding e planejamento sucessório.",
    url: `${site.url}/blog`,
    type: "website",
  },
};

const dateFmt = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />
      <Nav />
      <main id="top">
        <section className="bg-ink px-6 pb-20 pt-[148px] text-white">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="max-w-[720px]">
              <Eyebrow tone="light">Insights &amp; Conteúdo</Eyebrow>
              <h1 className="m-0 mb-5 font-serif text-[clamp(34px,4.4vw,54px)] font-normal leading-[1.1] tracking-[-0.01em]">
                Conhecimento que antecipa decisões.
              </h1>
              <p className="m-0 text-lg leading-[1.6] text-mist">
                Artigos sobre NR-1, riscos psicossociais, compliance, holding familiar e
                patrimonial, governança corporativa e planejamento sucessório.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-cloud px-6 py-[clamp(64px,8vw,104px)]">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mb-10 flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-[2px] border border-line-soft bg-white px-4 py-[9px] text-[13px] font-semibold text-[#6E5547]"
                >
                  {cat}
                </span>
              ))}
            </Reveal>
            <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal
                  key={p.slug}
                  as="article"
                  className="flex h-full flex-col overflow-hidden rounded-[3px] border border-line-soft bg-white transition-[box-shadow,transform] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(94,68,53,.10)]"
                >
                  <Link href={`/blog/${p.slug}`} className="flex h-full flex-col no-underline">
                    <div className="relative aspect-[16/10] [container-type:inline-size]">
                      <ArticleCover cat={p.cat} index={i} />
                    </div>
                    <div className="flex flex-1 flex-col gap-3.5 p-[26px] pb-[30px]">
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">
                        <span>{p.cat}</span>
                        <span className="text-line-soft">·</span>
                        <time dateTime={p.date} className="font-semibold text-[#A89079]">
                          {dateFmt.format(new Date(p.date))}
                        </time>
                      </div>
                      <h2 className="m-0 font-serif text-[21px] font-medium leading-[1.26] text-ink">
                        {p.title}
                      </h2>
                      <p className="m-0 flex-1 text-[14.5px] leading-[1.55] text-[#7A6353]">
                        {p.excerpt}
                      </p>
                      <span className="mt-1 inline-flex items-center gap-2 text-[13.5px] font-bold text-gold-dark">
                        Ler artigo
                        <ArrowRight color="#8A6D24" size={14} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

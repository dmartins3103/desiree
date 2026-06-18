import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/ArticleBody";
import ArticleCover from "@/components/ArticleCover";
import { ArrowRight } from "@/components/icons";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { site, whatsappUrl } from "@/lib/site";
import { getPost, posts } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
      section: post.cat,
    },
  };
}

const dateFmt = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const postIndex = posts.findIndex((p) => p.slug === post.slug);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Início", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
            { name: post.title, url: `${site.url}/blog/${post.slug}` },
          ]),
        ]}
      />
      <Nav />
      <main id="top">
        <article>
          {/* Cabeçalho */}
          <header className="bg-cloud px-6 pb-16 pt-[140px] text-espresso">
            <div className="mx-auto max-w-[760px]">
              <nav aria-label="Trilha" className="mb-7 text-[13px] text-taupe">
                <Link href="/" className="text-taupe no-underline hover:text-gold-dark">
                  Início
                </Link>
                <span className="mx-2 text-gold-dark/50">/</span>
                <Link href="/blog" className="text-taupe no-underline hover:text-gold-dark">
                  Blog
                </Link>
              </nav>
              <div className="mb-5 flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.14em] text-gold-dark">
                <span>{post.cat}</span>
                <span className="text-gold-dark/40">·</span>
                <time dateTime={post.date} className="text-taupe">
                  {dateFmt.format(new Date(post.date))}
                </time>
                <span className="text-gold-dark/40">·</span>
                <span className="text-taupe">{post.readingTime}</span>
              </div>
              <h1 className="m-0 font-serif text-[clamp(30px,4vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                {post.title}
              </h1>
              <p className="m-0 mt-5 text-lg leading-[1.6] text-[#6E5547]">{post.excerpt}</p>
            </div>
          </header>

          {/* Capa */}
          <div className="bg-white px-6">
            <div className="mx-auto -mt-12 max-w-[920px]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[3px] border border-line-soft shadow-[0_24px_60px_rgba(34,26,20,.35)] [container-type:inline-size]">
                <ArticleCover cat={post.cat} index={postIndex} />
              </div>
            </div>
          </div>

          {/* Corpo */}
          <div className="bg-white px-6 pt-[clamp(40px,5vw,64px)] pb-[clamp(56px,7vw,96px)]">
            <div className="mx-auto max-w-[760px]">
              <ArticleBody body={post.body} />

              {/* CTA inline */}
              <div className="mt-12 rounded-[3px] border border-line-soft bg-cloud p-8 sm:p-10">
                <h2 className="m-0 mb-3 font-serif text-[26px] font-medium leading-[1.2] text-ink">
                  Quer aplicar isso na sua empresa?
                </h2>
                <p className="m-0 mb-6 text-base leading-[1.6] text-[#7A6353]">
                  Agende um diagnóstico estratégico e receba um plano claro e priorizado para
                  reduzir riscos e proteger seu patrimônio.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 rounded-[2px] bg-gold px-7 py-4 text-[15px] font-bold text-night no-underline transition-colors hover:bg-gold-light"
                >
                  Agendar Diagnóstico Estratégico
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Relacionados */}
        {related.length > 0 && (
          <section aria-label="Artigos relacionados" className="bg-cloud px-6 py-[clamp(56px,7vw,96px)]">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="m-0 mb-8 font-serif text-[28px] font-medium text-ink">
                Continue lendo
              </h2>
              <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="flex flex-col gap-3 rounded-[3px] border border-line-soft bg-white p-7 no-underline transition-[box-shadow,transform] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(94,68,53,.10)]"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">
                      {p.cat}
                    </span>
                    <h3 className="m-0 font-serif text-[20px] font-medium leading-[1.26] text-ink">
                      {p.title}
                    </h3>
                    <p className="m-0 text-[14.5px] leading-[1.55] text-[#7A6353]">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

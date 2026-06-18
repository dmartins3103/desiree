import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import ArticleCover from "@/components/ArticleCover";
import { ArrowRight, Check, CheckCircle } from "@/components/icons";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";
import { pegMark, whatsappUrl } from "@/lib/site";
import {
  areas,
  benefits,
  categories,
  credentials,
  faqs,
  risks,
  testimonials,
} from "@/lib/content";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Nav />
      <main id="top">
        {/* ===================== HERO ===================== */}
        <section
          aria-label="Apresentação"
          className="relative overflow-hidden bg-cloud px-6 pb-24 pt-[148px] text-espresso"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-44 h-[540px] w-[540px] rounded-full"
            style={{
              background:
                "radial-gradient(circle,rgba(168,134,46,.10) 0%,rgba(168,134,46,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <Reveal>
                <Eyebrow>Estratégia Jurídica Empresarial</Eyebrow>
                <h1 className="m-0 mb-[26px] font-serif text-[clamp(38px,5.1vw,64px)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
                  Protegemos empresas, patrimônios e gestores{" "}
                  <span className="italic text-gold-dark">
                    antes que os problemas aconteçam.
                  </span>
                </h1>
                <p className="m-0 mb-[38px] max-w-[560px] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-[#6E5547]">
                  Assessoria jurídica estratégica para empresários, executivos e famílias
                  empresárias que desejam crescer com segurança, reduzir riscos e preservar
                  patrimônio.
                </p>
                <div className="flex flex-wrap gap-3.5">
                  <Link
                    href="/#contato"
                    className="inline-flex items-center gap-2.5 rounded-[2px] bg-gold px-7 py-[17px] text-[15px] font-bold text-night no-underline transition-colors hover:bg-gold-light"
                  >
                    Agendar Diagnóstico Estratégico
                    <ArrowRight />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2.5 rounded-[2px] border border-espresso/25 px-[26px] py-[17px] text-[15px] font-semibold text-espresso no-underline transition-colors hover:border-gold-dark hover:text-gold-dark"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
                <div className="mt-11 flex flex-wrap items-center gap-x-[22px] gap-y-2.5 border-t border-espresso/15 pt-[30px]">
                  {[
                    "Direito Empresarial",
                    "Compliance",
                    "Governança",
                    "NR-1",
                    "Holding · Sucessão",
                  ].map((tag, i) => (
                    <span key={tag} className="flex items-center gap-x-[22px]">
                      {i > 0 && <span className="text-gold/60">·</span>}
                      <span className="text-[12.5px] font-semibold uppercase tracking-[0.04em] text-taupe">
                        {tag}
                      </span>
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-espresso/15">
                  <Image
                    src="/fotos/hero.jpg"
                    alt="Desirée Parada, advogada especialista em estratégia jurídica empresarial"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-top"
                  />
                  <span className="absolute left-4 top-4 z-10 h-[34px] w-[34px] border-l-[1.5px] border-t-[1.5px] border-gold" />
                  <span className="absolute bottom-4 right-4 z-10 h-[34px] w-[34px] border-b-[1.5px] border-r-[1.5px] border-gold" />
                </div>
                <div className="absolute -bottom-[26px] -left-[26px] hidden max-w-[230px] rounded-[3px] bg-white px-[22px] py-[18px] text-ink shadow-[0_24px_60px_rgba(0,0,0,.4)] sm:block">
                  <div className="mb-2 flex items-center gap-[9px]">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-dark">
                      Método PEG{pegMark}
                    </span>
                  </div>
                  <p className="m-0 text-sm font-medium leading-[1.45] text-[#6E5547]">
                    Proteção · Estruturação · Governança
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================== AUTORIDADE ===================== */}
        <section aria-label="Autoridade" className="bg-white px-6 py-[clamp(80px,9vw,128px)]">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-[72px]">
              <div>
                <Eyebrow>Autoridade</Eyebrow>
                <h2 className="m-0 font-serif text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                  Segurança jurídica para os desafios da nova economia.
                </h2>
              </div>
              <div className="pt-2">
                <p className="m-0 mb-[22px] text-lg leading-[1.66] text-[#6E5547]">
                  Empresas modernas precisam lidar com novas exigências regulatórias, riscos
                  psicossociais, governança corporativa, proteção patrimonial e sucessão
                  empresarial.
                </p>
                <p className="m-0 text-lg leading-[1.66] text-[#6E5547]">
                  Nossa atuação combina visão jurídica, estratégia empresarial e prevenção de
                  passivos — transformando complexidade em estrutura, previsibilidade e proteção.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== RISCOS ===================== */}
        <section
          id="riscos"
          aria-label="Mapa de Riscos"
          className="scroll-mt-20 bg-white px-6 py-[clamp(80px,9vw,128px)] text-espresso"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mb-[60px] max-w-[760px]">
              <Eyebrow>Mapa de Riscos</Eyebrow>
              <h2 className="m-0 mb-5 font-serif text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                Sua empresa está preparada para os riscos de hoje?
              </h2>
              <p className="m-0 text-lg leading-[1.6] text-[#6E5547]">
                Riscos invisíveis hoje tornam-se passivos caros amanhã. Cada frente abaixo gera
                impacto financeiro, operacional e jurídico.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {risks.map((r) => (
                <Reveal
                  key={r.n}
                  className="rounded-[3px] border border-line-soft bg-cloud p-7 transition-[box-shadow,border-color] hover:border-gold/50 hover:shadow-[0_16px_40px_rgba(94,68,53,.08)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-serif text-[22px] text-gold-dark">{r.n}</span>
                    <span className="rounded-[2px] border border-espresso/15 px-2.5 py-[5px] text-[10.5px] font-semibold uppercase tracking-[0.16em] text-taupe">
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="m-0 mb-5 font-serif text-[21px] font-medium leading-[1.22] text-ink">
                    {r.title}
                  </h3>
                  <dl className="m-0 flex flex-col gap-3">
                    {[
                      ["Financeiro", r.fin],
                      ["Operacional", r.op],
                      ["Jurídico", r.jur],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-3">
                        <dt className="w-[78px] flex-none pt-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-gold-dark">
                          {label}
                        </dt>
                        <dd className="m-0 text-[13.5px] leading-[1.5] text-[#6E5547]">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== ÁREAS DE ATUAÇÃO ===================== */}
        <section
          id="atuacao"
          aria-label="Áreas de Atuação"
          className="scroll-mt-20 bg-cloud px-6 py-[clamp(80px,9vw,128px)]"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mb-14 max-w-[760px]">
              <Eyebrow>Áreas de Atuação</Eyebrow>
              <h2 className="m-0 font-serif text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                Soluções jurídicas desenhadas para proteger e fazer crescer.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {areas.map((a) => (
                <Reveal
                  key={a.n}
                  as="article"
                  className="rounded-[3px] border border-line-soft bg-white p-10 transition-[box-shadow,transform] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(94,68,53,.10)]"
                >
                  <span className="font-serif text-lg font-medium text-gold">{a.n}</span>
                  <h3 className="m-0 mb-3.5 mt-3.5 font-serif text-[25px] font-medium leading-[1.2] text-ink">
                    {a.title}
                  </h3>
                  <p className="m-0 mb-6 text-[15.5px] leading-[1.6] text-[#7A6353]">{a.desc}</p>
                  <div className="mb-[22px] h-px bg-[#ECE6DB]" />
                  <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-3 p-0 sm:grid-cols-2">
                    {a.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2.5 text-sm font-medium leading-[1.4] text-[#5E4435]"
                      >
                        <Check />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== MÉTODO PEG ===================== */}
        <section
          id="metodo"
          aria-label="Método PEG"
          className="relative scroll-mt-20 overflow-hidden bg-sand px-6 py-[clamp(80px,9vw,128px)] text-espresso"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle,rgba(168,134,46,.07) 0%,rgba(168,134,46,0) 68%)",
            }}
          />
          <div className="relative mx-auto max-w-[1200px]">
            <Reveal className="mx-auto mb-16 max-w-[680px] text-center">
              <Eyebrow centered>
                Metodologia Exclusiva
              </Eyebrow>
              <h2 className="m-0 mb-4 font-serif text-[clamp(36px,4.6vw,58px)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
                Método PEG{pegMark}
              </h2>
              <p className="m-0 text-base font-semibold uppercase tracking-[0.18em] text-taupe">
                Proteção <span className="text-gold-dark">•</span> Estruturação{" "}
                <span className="text-gold-dark">•</span> Governança
              </p>
            </Reveal>
            <Reveal className="flex flex-col items-stretch gap-5 lg:flex-row lg:gap-0">
              {[
                {
                  n: "01",
                  t: "Proteção",
                  d: "Identificação de riscos empresariais, patrimoniais e regulatórios.",
                },
                {
                  n: "02",
                  t: "Estruturação",
                  d: "Desenvolvimento de soluções jurídicas e organizacionais sob medida.",
                },
                {
                  n: "03",
                  t: "Governança",
                  d: "Monitoramento, conformidade e continuidade ao longo do tempo.",
                  highlight: true,
                },
              ].map((step, i) => (
                <div key={step.n} className="contents">
                  <div
                    className={`flex-1 rounded-[3px] border p-8 ${
                      step.highlight
                        ? "border-gold/40 bg-gold/[0.10]"
                        : "border-line-soft bg-white"
                    }`}
                  >
                    <div
                      className={`mb-[18px] font-serif text-[46px] leading-none ${
                        step.highlight ? "text-gold-dark" : "text-gold-dark/45"
                      }`}
                    >
                      {step.n}
                    </div>
                    <h3 className="m-0 mb-3 font-serif text-2xl font-medium text-ink">
                      {step.t}
                    </h3>
                    <p
                      className={`m-0 text-[15px] leading-[1.6] ${
                        step.highlight ? "text-[#5E4435]" : "text-[#6E5547]"
                      }`}
                    >
                      {step.d}
                    </p>
                  </div>
                  {i < 2 && (
                    <div className="hidden w-16 flex-none items-center justify-center lg:flex">
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none" aria-hidden="true">
                        <path
                          d="M0 8h34M30 3l5 5-5 5"
                          stroke="#A8862E"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===================== BENEFÍCIOS ===================== */}
        <section
          id="beneficios"
          aria-label="Benefícios"
          className="bg-white px-6 py-[clamp(80px,9vw,128px)]"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mb-[52px] max-w-[760px]">
              <Eyebrow>O Que Você Ganha</Eyebrow>
              <h2 className="m-0 font-serif text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                Resultados que sustentam o crescimento.
              </h2>
            </Reveal>
            <Reveal className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex flex-col gap-3.5 rounded-[3px] border border-[#ECE6DB] bg-cloud p-6"
                >
                  <CheckCircle />
                  <span className="text-[15.5px] font-semibold leading-[1.4] text-[#4A3528]">
                    {b}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===================== SOBRE ===================== */}
        <section
          id="sobre"
          aria-label="Sobre Desirée Parada"
          className="scroll-mt-20 bg-cloud px-6 py-[clamp(80px,9vw,128px)]"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[72px]">
              <Reveal className="relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3px] border border-[#E6DFD4]">
                  <Image
                    src="/fotos/retrato.jpg"
                    alt="Retrato de Desirée Parada"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <span className="absolute -right-px top-[18px] z-10 h-9 w-9 border-r-[1.5px] border-t-[1.5px] border-gold" />
              </Reveal>
              <Reveal>
                <Eyebrow>Quem Conduz</Eyebrow>
                <h2 className="m-0 mb-6 font-serif text-[clamp(30px,3.8vw,46px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                  Conheça Desirée Parada
                </h2>
                <p className="m-0 mb-[18px] text-[17.5px] leading-[1.66] text-[#6E5547]">
                  Desirée Parada atua na interseção entre Direito, Estratégia Empresarial e Proteção
                  Patrimonial.
                </p>
                <p className="m-0 mb-9 text-[17.5px] leading-[1.66] text-[#6E5547]">
                  Sua missão é ajudar empresas, gestores e famílias empresárias a construir
                  estruturas jurídicas sólidas, capazes de sustentar crescimento, reduzir riscos e
                  preservar patrimônio ao longo das gerações.
                </p>
                <div className="overflow-hidden rounded-[3px] border border-line-soft">
                  {credentials.map((c, i) => (
                    <div
                      key={c.label}
                      className={`bg-white px-6 py-5 ${i > 0 ? "border-t border-line-soft" : ""}`}
                    >
                      <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">
                        {c.label}
                      </div>
                      {Array.isArray(c.value) ? (
                        <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                          {c.value.map((v) => (
                            <li
                              key={v}
                              className="flex items-start gap-2 text-sm leading-[1.5] text-[#7A6353]"
                            >
                              <span className="mt-[2px] text-gold-dark">·</span>
                              <span>{v}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-sm leading-[1.5] text-[#7A6353]">{c.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================== DEPOIMENTOS ===================== */}
        <section aria-label="Depoimentos" className="bg-sand px-6 py-[clamp(80px,9vw,128px)] text-espresso">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mb-14 max-w-[680px]">
              <Eyebrow>Confiança</Eyebrow>
              <h2 className="m-0 font-serif text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                O que dizem quem já estruturou com segurança.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal
                  key={i}
                  as="figure"
                  className="m-0 flex flex-col gap-6 rounded-[3px] border border-line-soft bg-white p-[30px]"
                >
                  <span aria-hidden="true" className="h-6 font-serif text-[54px] leading-[0.6] text-gold-dark/35">
                    &ldquo;
                  </span>
                  <blockquote className="m-0 flex-1 font-serif text-lg italic leading-[1.5] text-[#5E4435]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="border-t border-line-soft pt-[18px]">
                    <div className="text-sm font-bold text-ink">{t.role}</div>
                    <div className="mt-[3px] text-[13px] text-taupe">{t.org}</div>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section
          id="faq"
          aria-label="Perguntas Frequentes"
          className="scroll-mt-20 bg-white px-6 py-[clamp(80px,9vw,128px)]"
        >
          <div className="mx-auto max-w-[920px]">
            <Reveal className="mb-12">
              <Eyebrow>Perguntas Frequentes</Eyebrow>
              <h2 className="m-0 font-serif text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                Dúvidas comuns, respostas diretas.
              </h2>
            </Reveal>
            <Reveal className="border-t border-line-soft">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line-soft">
                  <summary className="flex items-center justify-between gap-5 py-6 font-serif text-xl font-medium text-ink">
                    <span>{f.q}</span>
                    <span className="faq-mark flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border border-[#D9C29A] text-lg leading-none text-gold-dark transition-colors">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">–</span>
                    </span>
                  </summary>
                  <p className="m-0 mb-[26px] max-w-[760px] text-base leading-[1.65] text-[#7A6353]">
                    {f.a}
                  </p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===================== CTA FINAL ===================== */}
        <section
          id="contato"
          aria-label="Contato"
          className="relative scroll-mt-20 overflow-hidden bg-night px-6 py-[clamp(84px,9vw,132px)] text-white"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[200px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle,rgba(168,134,46,.12) 0%,rgba(168,134,46,0) 66%)",
            }}
          />
          <Reveal className="relative mx-auto max-w-[820px] text-center">
            <Eyebrow tone="light" centered>
              Diagnóstico Estratégico
            </Eyebrow>
            <h2 className="m-0 mb-[22px] font-serif text-[clamp(34px,4.6vw,58px)] font-normal leading-[1.1] tracking-[-0.01em]">
              Sua empresa está preparada para os próximos anos?
            </h2>
            <p className="mx-auto m-0 mb-10 max-w-[620px] text-lg leading-[1.6] text-mist">
              Descubra como reduzir riscos, fortalecer sua governança e proteger seu patrimônio
              através de uma estratégia jurídica moderna.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 rounded-[2px] bg-gold px-8 py-[18px] text-[15.5px] font-bold text-night no-underline transition-colors hover:bg-gold-light"
              >
                Agendar Diagnóstico Estratégico
                <ArrowRight />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 rounded-[2px] border border-white/[0.28] px-[30px] py-[18px] text-[15.5px] font-semibold text-white no-underline transition-colors hover:border-gold hover:text-gold"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </section>

        {/* ===================== BLOG ===================== */}
        <section
          id="blog"
          aria-label="Insights e Conteúdo"
          className="scroll-mt-20 bg-cloud px-6 py-[clamp(80px,9vw,128px)]"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[600px]">
                <Eyebrow>Insights &amp; Conteúdo</Eyebrow>
                <h2 className="m-0 font-serif text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                  Conhecimento que antecipa decisões.
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13.5px] font-bold text-gold-dark no-underline hover:text-gold"
              >
                Ver todos os artigos
                <ArrowRight color="#8A6D24" size={14} />
              </Link>
            </Reveal>
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
            <Reveal className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="flex flex-col overflow-hidden rounded-[3px] border border-line-soft bg-white no-underline transition-[box-shadow,transform] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(94,68,53,.10)]"
                >
                  <div className="relative aspect-[16/10] [container-type:inline-size]">
                    <ArticleCover cat={p.cat} index={i} />
                  </div>
                  <div className="flex flex-1 flex-col gap-3.5 p-[26px] pb-[30px]">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">
                      {p.cat}
                    </span>
                    <h3 className="m-0 font-serif text-[21px] font-medium leading-[1.26] text-ink">
                      {p.title}
                    </h3>
                    <p className="m-0 flex-1 text-[14.5px] leading-[1.55] text-[#7A6353]">
                      {p.excerpt}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-2 text-[13.5px] font-bold text-gold-dark">
                      Ler artigo
                      <ArrowRight color="#8A6D24" size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

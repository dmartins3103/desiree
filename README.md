# Desirée Parada — Site Institucional

Site de alta performance e otimizado para SEO/AEO, construído a partir do design original
(`Desiree Parada.dc.html`) e pronto para deploy no **Vercel**.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- Tudo gerado estaticamente (SSG) — máxima velocidade e Core Web Vitals.

## Otimizações de SEO e IA (GEO/AEO)

- Metadados completos (title/description/keywords), canonical e Open Graph (`app/layout.tsx`).
- **Imagem OG dinâmica** gerada em `/opengraph-image`.
- **Dados estruturados JSON-LD**: `LegalService`, `WebSite`, `Person`, `FAQPage`,
  `Article` e `BreadcrumbList` (`lib/jsonld.tsx`).
- **`sitemap.xml`** e **`robots.txt`** automáticos, liberando explicitamente crawlers de IA
  (GPTBot, ClaudeBot, PerplexityBot, Google-Extended etc.) para favorecer citações em
  assistentes de IA.
- HTML semântico (`main`, `section`, `article`, `nav`, `dl`, `blockquote`), `lang="pt-BR"`,
  acessibilidade e `prefers-reduced-motion`.
- Blog estático com artigos completos — conteúdo é o que mais ajuda no ranqueamento e na AEO.

## Como rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de produção

```bash
npm run build
npm run start
```

## Deploy no Vercel

1. Suba este repositório para o GitHub/GitLab.
2. Em [vercel.com](https://vercel.com) → **New Project** → importe o repositório.
3. O Vercel detecta Next.js automaticamente. Clique em **Deploy**. Nada a configurar.

## Como editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Domínio, telefone, e-mail, WhatsApp | `lib/site.ts` |
| Riscos, áreas, benefícios, FAQ, depoimentos | `lib/content.ts` |
| Artigos do blog | `lib/posts.ts` |
| Dados estruturados (JSON-LD) | `lib/jsonld.tsx` |

> **Importante:** ao publicar em domínio próprio (ex.: `desireeparada.adv.br`),
> atualize `url` em `lib/site.ts` — canonical, sitemap, OG e JSON-LD se ajustam sozinhos.

## Substituir imagens placeholder

O design usa marcadores para foto da Desirée, hero e capas de artigos. Coloque as imagens reais
em `public/` e troque os blocos com `repeating-linear-gradient` por `next/image` nos componentes.

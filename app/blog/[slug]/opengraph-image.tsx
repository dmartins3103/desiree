import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const alt = "Artigo — Desirée Parada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? site.name;
  const cat = post?.cat ?? "Insights Jurídicos";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F172A",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* topo */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "sans-serif",
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: 22, letterSpacing: 6 }}>
            DESIRÉE PARADA
          </span>
          <span
            style={{
              color: "#D4AF37",
              fontSize: 16,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {cat}
          </span>
        </div>

        {/* título */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 56, height: 3, background: "#D4AF37", marginBottom: 28 }} />
          <div
            style={{
              color: "#FFFFFF",
              fontSize: title.length > 70 ? 50 : 60,
              lineHeight: 1.12,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        {/* rodapé */}
        <div
          style={{
            color: "#AEBACE",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          Estratégia Jurídica Empresarial
        </div>
      </div>
    ),
    { ...size },
  );
}

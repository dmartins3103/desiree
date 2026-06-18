import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#221A14",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 40, height: 3, background: "#A8862E" }} />
          <div
            style={{
              color: "#A8862E",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Estratégia Jurídica Empresarial
          </div>
        </div>
        <div
          style={{
            color: "#F4F1EA",
            fontSize: 70,
            lineHeight: 1.1,
            letterSpacing: 8,
            marginBottom: 28,
          }}
        >
          DESIRÉE PARADA
        </div>
        <div
          style={{
            color: "#C9B79A",
            fontSize: 30,
            lineHeight: 1.4,
            maxWidth: 900,
            fontFamily: "sans-serif",
          }}
        >
          Protegemos empresas, patrimônios e gestores antes que os problemas
          aconteçam.
        </div>
      </div>
    ),
    { ...size },
  );
}

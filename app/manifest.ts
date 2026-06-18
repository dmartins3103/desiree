import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#221A14",
    theme_color: "#221A14",
    lang: "pt-BR",
    icons: [
      { src: "/icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}

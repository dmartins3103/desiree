import sharp from "sharp";
import { mkdirSync } from "fs";

const SRC = "Identidade Visual/assets";
mkdirSync("public/marca", { recursive: true });

// Logos/monogramas otimizados para a web (PNG com transparência).
const jobs = [
  { src: "logo-tight-cream.png", out: "public/marca/logo-cream.png", width: 720 },
  { src: "logo-tight.png", out: "public/marca/logo.png", width: 720 },
  { src: "monogram-cream.png", out: "public/marca/monogram-cream.png", width: 200 },
  { src: "monogram-gold.png", out: "public/marca/monogram-gold.png", width: 200 },
];

for (const j of jobs) {
  await sharp(`${SRC}/${j.src}`)
    .resize({ width: j.width, withoutEnlargement: true })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(j.out);
  console.log("ok:", j.out);
}

// Favicon: monograma dourado sobre tile café (Café Escuro #221A14).
const size = 256;
const mono = await sharp(`${SRC}/monogram-gold.png`)
  .resize({ width: Math.round(size * 0.66), withoutEnlargement: true })
  .toBuffer();
const tile = await sharp({
  create: {
    width: size,
    height: size,
    channels: 4,
    background: { r: 0x22, g: 0x1a, b: 0x14, alpha: 1 },
  },
})
  .composite([{ input: mono, gravity: "center" }])
  .png()
  .toBuffer();
await sharp(tile).toFile("app/icon.png");
await sharp(tile).toFile("app/apple-icon.png");
await sharp(tile).resize(180, 180).png().toFile("public/icon.png");
console.log("ok: favicon (app/icon.png, app/apple-icon.png, public/icon.png)");
console.log("DONE");

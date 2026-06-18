import sharp from "sharp";
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "fs";

const dir = "public/fotos";
// origem (.jpeg) -> saída (.jpg) com largura máxima adequada ao uso
const jobs = [
  { src: "hero.jpeg", out: "hero.jpg", width: 1100 },
  { src: "retrato.jpeg", out: "retrato.jpg", width: 1000 },
  { src: "artigo-nr1.jpeg", out: "artigo-nr1.jpg", width: 1280 },
  { src: "artigo-holding.jpeg", out: "artigo-holding.jpg", width: 1280 },
  { src: "artigo-compliance.jpeg", out: "artigo-compliance.jpg", width: 1280 },
];

const kb = (n) => (n / 1024).toFixed(0) + " KB";

for (const j of jobs) {
  const inPath = `${dir}/${j.src}`;
  const outPath = `${dir}/${j.out}`;
  if (!existsSync(inPath)) {
    console.log(`(pulado: ${j.src} nao encontrado)`);
    continue;
  }
  const before = readFileSync(inPath).length;
  const buf = await sharp(inPath)
    .rotate() // respeita orientacao EXIF
    .resize({ width: j.width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toBuffer();
  writeFileSync(outPath, buf);
  unlinkSync(inPath); // remove o .jpeg original pesado
  console.log(`${j.out.padEnd(24)} ${kb(before).padStart(9)} -> ${kb(buf.length).padStart(8)}`);
}
console.log("OK");

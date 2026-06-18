/**
 * Capa gráfica de marca para os artigos (sem foto).
 * Preenche o container (que deve ser `relative` e ter aspect-ratio).
 * Consistente com a identidade: marinho + dourado, tipografia serifada.
 */
const glows = [
  "radial-gradient(circle at 80% 15%,rgba(212,175,55,.18) 0%,rgba(212,175,55,0) 55%)",
  "radial-gradient(circle at 20% 80%,rgba(212,175,55,.16) 0%,rgba(212,175,55,0) 55%)",
  "radial-gradient(circle at 85% 85%,rgba(212,175,55,.16) 0%,rgba(212,175,55,0) 55%)",
];

export default function ArticleCover({
  cat,
  index = 0,
}: {
  cat: string;
  index?: number;
}) {
  const n = String((index % 9) + 1).padStart(2, "0");
  const glow = glows[index % glows.length];

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {/* trama diagonal sutil */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg,rgba(255,255,255,.035) 0 1px,transparent 1px 16px)",
        }}
      />
      {/* brilho dourado */}
      <div className="absolute inset-0" style={{ background: glow }} />

      {/* numeral editorial */}
      <span
        className="absolute -bottom-5 right-2 select-none font-serif leading-none text-gold/10"
        style={{ fontSize: "clamp(120px,30cqw,220px)" }}
        aria-hidden="true"
      >
        {n}
      </span>

      {/* conteúdo */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="font-serif text-[15px] font-medium tracking-[0.22em] text-white/70">
          DP
        </span>
        <div>
          <span className="block h-px w-9 bg-gold" />
          <span className="mt-3 block font-serif text-[clamp(18px,4cqw,26px)] font-medium leading-tight text-white">
            {cat}
          </span>
          <span className="mt-2 block text-[10.5px] font-semibold uppercase tracking-[0.2em] text-gold">
            Insights Jurídicos
          </span>
        </div>
      </div>

      {/* cantos */}
      <span className="absolute right-4 top-4 h-6 w-6 border-r border-t border-gold/40" />
      <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-gold/40" />
    </div>
  );
}

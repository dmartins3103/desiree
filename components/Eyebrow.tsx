export default function Eyebrow({
  children,
  tone = "dark",
  centered = false,
}: {
  children: React.ReactNode;
  /** "dark" = sobre fundo claro (dourado escuro) · "light" = sobre fundo escuro */
  tone?: "dark" | "light";
  centered?: boolean;
}) {
  const color = tone === "light" ? "text-gold" : "text-gold-dark";
  return (
    <div
      className={`mb-6 inline-flex items-center gap-3 ${centered ? "justify-center" : ""}`}
    >
      <span className="h-px w-[30px] bg-gold" />
      <span className={`text-xs font-semibold uppercase tracking-[0.24em] ${color}`}>
        {children}
      </span>
      {centered && <span className="h-px w-[30px] bg-gold" />}
    </div>
  );
}

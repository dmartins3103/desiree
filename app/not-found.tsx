import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cloud px-6 text-center text-espresso">
      <span className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
        Erro 404
      </span>
      <h1 className="m-0 mb-4 font-serif text-[clamp(34px,5vw,56px)] font-normal leading-[1.1] text-ink">
        Página não encontrada
      </h1>
      <p className="m-0 mb-9 max-w-[440px] text-lg leading-[1.6] text-[#6E5547]">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 rounded-[2px] bg-gold px-7 py-4 text-[15px] font-bold text-night no-underline transition-colors hover:bg-gold-light"
      >
        Voltar ao início
        <ArrowRight />
      </Link>
    </main>
  );
}

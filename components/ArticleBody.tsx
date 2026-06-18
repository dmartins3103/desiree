import { Fragment, type ReactNode } from "react";

/** Converte **negrito** em <strong> dentro de um trecho de texto. */
function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/**
 * Renderiza o corpo de um artigo a partir de blocos de texto.
 * Sintaxe suportada por bloco:
 *  - "## "  → subtítulo H2
 *  - "### " → subtítulo H3
 *  - linhas iniciadas por "- " → lista
 *  - "> "   → citação em destaque
 *  - demais → parágrafo
 */
export default function ArticleBody({ body }: { body: string[] }) {
  return (
    <>
      {body.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="m-0 mb-4 mt-12 font-serif text-[clamp(24px,3vw,32px)] font-medium leading-[1.2] text-ink"
            >
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="m-0 mb-3 mt-8 font-serif text-[clamp(20px,2.4vw,24px)] font-medium leading-[1.25] text-ink"
            >
              {block.replace(/^###\s+/, "")}
            </h3>
          );
        }
        if (/^\*[^*].*\*$/.test(block)) {
          return (
            <p
              key={i}
              className="m-0 mb-6 mt-10 border-t border-line-soft pt-6 text-sm italic leading-[1.6] text-[#7C879A]"
            >
              {block.slice(1, -1)}
            </p>
          );
        }
        if (block.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="m-0 my-8 border-l-2 border-gold bg-cloud py-5 pl-6 pr-5 font-serif text-[19px] italic leading-[1.6] text-ink"
            >
              {renderInline(block.replace(/^>\s+/, ""))}
            </blockquote>
          );
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").map((l) => l.replace(/^-\s+/, ""));
          return (
            <ul key={i} className="m-0 mb-6 flex list-none flex-col gap-3 p-0">
              {items.map((it, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-[17px] leading-[1.7] text-[#33405A]"
                >
                  <svg
                    className="mt-[7px] flex-none"
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5l3 3 7-7.5"
                      stroke="#94772A"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{renderInline(it)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="m-0 mb-6 text-[17.5px] leading-[1.75] text-[#33405A]">
            {renderInline(block)}
          </p>
        );
      })}
    </>
  );
}

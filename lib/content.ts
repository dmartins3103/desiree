/** Conteúdo da landing page (extraído fielmente do design original). */

export type Risk = {
  n: string;
  tag: string;
  title: string;
  fin: string;
  op: string;
  jur: string;
};

export const risks: Risk[] = [
  {
    n: "01",
    tag: "Saúde & Conformidade",
    title: "NR-1 e Riscos Psicossociais",
    fin: "Multas e indenizações por descumprimento.",
    op: "Afastamentos e queda de produtividade.",
    jur: "Passivos trabalhistas e ações coletivas.",
  },
  {
    n: "02",
    tag: "Trabalhista",
    title: "Passivos Trabalhistas",
    fin: "Condenações e acordos de alto valor.",
    op: "Rotatividade e clima organizacional frágil.",
    jur: "Reclamações e fiscalizações recorrentes.",
  },
  {
    n: "03",
    tag: "Societário",
    title: "Conflitos entre Sócios",
    fin: "Bloqueio de investimentos e diluição.",
    op: "Paralisia decisória na gestão.",
    jur: "Disputas societárias e judicialização.",
  },
  {
    n: "04",
    tag: "Conformidade",
    title: "Falhas de Compliance",
    fin: "Penalidades regulatórias e sanções de LGPD.",
    op: "Perda de contratos e de reputação.",
    jur: "Responsabilização pessoal de gestores.",
  },
  {
    n: "05",
    tag: "Patrimônio",
    title: "Exposição Patrimonial",
    fin: "Bens pessoais atingidos por dívidas da empresa.",
    op: "Insegurança na continuidade do negócio.",
    jur: "Desconsideração da personalidade jurídica.",
  },
  {
    n: "06",
    tag: "Sucessão",
    title: "Planejamento Sucessório",
    fin: "Custos e impostos elevados na transmissão.",
    op: "Disputas que travam a operação.",
    jur: "Inventários longos e litigiosos.",
  },
];

export type Area = {
  n: string;
  title: string;
  desc: string;
  services: string[];
};

export const areas: Area[] = [
  {
    n: "01",
    title: "NR-1 e Riscos Psicossociais",
    desc: "Adequação às exigências da NR-1, prevenção de passivos trabalhistas e fortalecimento da governança organizacional.",
    services: [
      "Diagnóstico de conformidade",
      "Avaliação de riscos psicossociais",
      "Políticas internas",
      "Treinamento de lideranças",
      "Apoio jurídico preventivo",
    ],
  },
  {
    n: "02",
    title: "Compliance e Governança",
    desc: "Estruturação de mecanismos de proteção corporativa e conformidade regulatória sustentável.",
    services: [
      "Compliance corporativo",
      "Canal de denúncias",
      "Código de conduta",
      "Adequação à LGPD",
      "Governança empresarial",
    ],
  },
  {
    n: "03",
    title: "Direito Empresarial",
    desc: "Suporte jurídico estratégico para empresas em crescimento e em momentos de decisão.",
    services: [
      "Contratos empresariais",
      "Direito societário",
      "Acordo de sócios",
      "Reestruturações",
      "Consultoria preventiva",
    ],
  },
  {
    n: "04",
    title: "Holding Familiar e Patrimonial",
    desc: "Proteção patrimonial, sucessão estruturada e preservação de legado entre gerações.",
    services: [
      "Estruturação de holdings",
      "Planejamento sucessório",
      "Governança familiar",
      "Organização patrimonial",
    ],
  },
];

export const benefits: string[] = [
  "Redução de riscos jurídicos",
  "Menor exposição trabalhista",
  "Segurança patrimonial",
  "Conformidade regulatória",
  "Continuidade empresarial",
  "Preservação do legado familiar",
  "Governança corporativa sólida",
  "Mais previsibilidade para crescer",
];

export type Credential = { label: string; value: string | string[] };

export const credentials: Credential[] = [
  {
    label: "Formação Acadêmica",
    value:
      "Graduação em Direito (2010) — Universidade Cândido Mendes, Rio de Janeiro.",
  },
  {
    label: "Especializações",
    value: [
      "MBA em Direito Tributário — FGV",
      "MBA em Holding — EBPÓS",
      "Especialização em Compliance — FGV",
      "Especialização em Contratos",
      "Extensão em Planejamento Patrimonial, Sucessório e Holding",
    ],
  },
  {
    label: "Certificações",
    value: "Membro do Tribunal de Ética e Disciplina da OAB desde 2020.",
  },
];

export type Testimonial = { quote: string; role: string; org: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Trouxe clareza sobre riscos que nem sabíamos que corríamos. Saímos com um plano concreto e priorizado.",
    role: "Diretor-Presidente",
    org: "Indústria de médio porte",
  },
  {
    quote:
      "A estruturação da nossa holding deu segurança para a família e organizou a sucessão sem conflitos.",
    role: "Sócio-fundador",
    org: "Grupo empresarial familiar",
  },
  {
    quote:
      "A adequação à NR-1 foi conduzida com método e profundidade jurídica. Reduzimos exposição de forma real.",
    role: "Diretora de Pessoas",
    org: "Empresa de serviços",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "O que mudou na NR-1?",
    a: "A NR-1 passou a exigir o gerenciamento dos riscos psicossociais no trabalho — como sobrecarga, assédio e estresse ocupacional — dentro do Programa de Gerenciamento de Riscos (PGR), com documentação e ações concretas.",
  },
  {
    q: "Minha empresa precisa se adequar?",
    a: "Praticamente toda empresa com empregados precisa estruturar a gestão de riscos ocupacionais, incluindo os psicossociais. O nível de exigência varia conforme porte e grau de risco da atividade.",
  },
  {
    q: "O que são riscos psicossociais?",
    a: "São fatores ligados à organização do trabalho que podem afetar a saúde mental dos colaboradores — como jornada excessiva, pressão por metas, assédio e falta de clareza de funções.",
  },
  {
    q: "Quando vale a pena criar uma holding?",
    a: "Quando há patrimônio relevante, múltiplos sócios ou herdeiros, ou intenção de organizar a sucessão e proteger bens. A decisão é sempre baseada em uma análise personalizada.",
  },
  {
    q: "Holding reduz impostos?",
    a: "Pode trazer eficiência tributária em determinadas situações, mas o objetivo central é organização, proteção patrimonial e sucessão — sempre dentro da legalidade.",
  },
  {
    q: "Qual a diferença entre holding patrimonial e empresa comum?",
    a: "A holding patrimonial é criada para deter e administrar bens e participações, com foco em proteção e sucessão, e não na exploração de uma atividade operacional do dia a dia.",
  },
  {
    q: "Como funciona o diagnóstico estratégico?",
    a: "É uma análise estruturada dos riscos jurídicos, societários e patrimoniais da empresa, que resulta em um plano de ação claro, priorizado e orientado a resultados.",
  },
  {
    q: "Quais empresas precisam de compliance?",
    a: "Qualquer empresa exposta a riscos regulatórios, trabalhistas ou de imagem se beneficia — especialmente as que lidam com dados, contratos relevantes ou crescimento acelerado.",
  },
];

export const categories: string[] = [
  "NR-1",
  "Compliance",
  "Direito Empresarial",
  "Holding Familiar",
  "Holding Patrimonial",
  "Planejamento Sucessório",
  "Governança Corporativa",
  "LGPD",
];

/**
 * Posts do blog (estáticos). Cada post é renderizado como uma página
 * própria (/blog/[slug]) com Article JSON-LD para SEO e AEO.
 * Para adicionar um artigo, basta incluir um novo objeto aqui.
 *
 * Sintaxe do corpo (ver components/ArticleBody.tsx):
 *  - "## "  → subtítulo H2        - "### " → subtítulo H3
 *  - "- "   → item de lista        - "> "   → citação em destaque
 *  - **texto** → negrito           - demais → parágrafo
 */
export type Post = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "nr-1-riscos-psicossociais-o-que-muda",
    cat: "NR-1",
    title: "NR-1 e riscos psicossociais: o que muda para a sua empresa",
    excerpt:
      "A NR-1 passou a exigir o gerenciamento dos riscos psicossociais. Entenda o que mudou, quem precisa se adequar e como estruturar a conformidade antes da fiscalização.",
    date: "2026-05-20",
    readingTime: "9 min de leitura",
    body: [
      "A atualização da Norma Regulamentadora nº 1 (NR-1) marcou uma virada na forma como as empresas brasileiras precisam tratar a saúde no trabalho. Pela primeira vez, os **riscos psicossociais** — fatores ligados à organização do trabalho que afetam a saúde mental dos colaboradores — passaram a ser exigidos de forma expressa dentro do Gerenciamento de Riscos Ocupacionais (GRO) e do Programa de Gerenciamento de Riscos (PGR).",
      "Na prática, isso significa que sobrecarga, assédio, pressão excessiva por metas e clima organizacional tóxico deixaram de ser apenas \"questões de RH\" e passaram a ser **riscos ocupacionais formais**, sujeitos a identificação, avaliação, controle e documentação — com o mesmo rigor já aplicado aos riscos físicos, químicos e ergonômicos.",
      "## O que é a NR-1 e por que ela foi atualizada",
      "A NR-1 é a norma que estabelece as disposições gerais e as diretrizes de gerenciamento de riscos de todas as demais Normas Regulamentadoras. Ela define que toda organização com empregados deve implementar o GRO, documentado no PGR, identificando os perigos a que os trabalhadores estão expostos e adotando medidas de prevenção.",
      "A atualização incorporou de forma explícita a gestão dos **fatores de risco psicossocial relacionados ao trabalho**, acompanhando uma tendência internacional e o reconhecimento de que adoecimento mental, burnout e afastamentos por transtornos psíquicos cresceram de forma expressiva nos últimos anos. O recado regulatório é claro: prevenir o adoecimento mental é obrigação do empregador, não liberalidade.",
      "## O que são riscos psicossociais",
      "Riscos psicossociais são condições da organização e da gestão do trabalho — somadas ao contexto social do ambiente laboral — capazes de causar dano psicológico, físico ou social ao trabalhador. Eles não estão na máquina ou no produto químico, mas na **forma como o trabalho é organizado, cobrado e conduzido**.",
      "### Exemplos de fatores de risco psicossocial",
      "- Sobrecarga de trabalho e jornadas excessivas ou imprevisíveis\n- Pressão desproporcional por metas e prazos\n- Assédio moral, assédio sexual e violência no ambiente de trabalho\n- Falta de clareza sobre funções, responsabilidades e expectativas\n- Ausência de autonomia e de participação nas decisões\n- Relações hostis com lideranças ou entre pares\n- Insegurança quanto à manutenção do emprego\n- Desequilíbrio entre esforço exigido e reconhecimento recebido",
      "## O que a atualização passa a exigir",
      "A nova abordagem não pede um documento isolado, e sim a **integração dos riscos psicossociais ao ciclo de gestão já existente**. Em linhas gerais, a empresa precisa:",
      "- **Identificar** os fatores de risco psicossocial presentes em suas atividades e setores;\n- **Avaliar** o nível de exposição e o potencial de dano;\n- **Implementar medidas de controle** — organizacionais, de gestão e de prevenção;\n- **Documentar** tudo no PGR, com plano de ação, responsáveis e prazos;\n- **Monitorar e revisar** periodicamente a eficácia das medidas adotadas.",
      "Diferentemente de um risco físico, o controle aqui costuma envolver mudanças em políticas internas, revisão de metas, capacitação de lideranças e canais efetivos de escuta e denúncia — e não apenas equipamentos de proteção.",
      "## Quem precisa se adequar",
      "Praticamente **toda empresa com empregados** está sujeita ao gerenciamento de riscos ocupacionais e, portanto, à gestão dos riscos psicossociais. O nível de profundidade exigido varia conforme o porte da organização e o grau de risco da atividade.",
      "Microempresas e empresas de pequeno porte têm regras simplificadas em determinadas situações, mas isso **não as isenta** de avaliar e tratar os riscos a que seus trabalhadores estão expostos. Ignorar o tema por se considerar \"pequeno demais\" é um dos erros mais comuns — e mais arriscados.",
      "## Passo a passo para a adequação",
      "### 1. Diagnóstico de conformidade",
      "O ponto de partida é um diagnóstico que cruze a realidade da empresa com as exigências da norma: como o trabalho está organizado, quais setores concentram maior exposição e o que já existe (ou falta) em termos de políticas e registros.",
      "### 2. Avaliação dos riscos psicossociais",
      "A avaliação pode combinar instrumentos como questionários validados, indicadores de afastamento e rotatividade, escuta qualificada e análise de incidentes. O objetivo é transformar percepções difusas em dados que orientem decisões.",
      "### 3. Plano de ação e medidas de controle",
      "Com os riscos mapeados, define-se um plano de ação concreto: revisão de metas e jornadas, políticas de prevenção ao assédio, fluxos de comunicação, programas de apoio e capacitação de gestores. Cada medida precisa de responsável e prazo.",
      "### 4. Documentação e integração ao PGR",
      "Tudo deve ser formalizado no PGR e nos registros da empresa. A documentação não é burocracia: é a **prova de diligência** que protege a organização em fiscalizações e eventuais ações judiciais.",
      "### 5. Monitoramento contínuo",
      "Risco psicossocial não se resolve uma única vez. A norma pressupõe revisão periódica, acompanhamento de indicadores e ajuste das medidas — um ciclo permanente de melhoria.",
      "## Consequências do descumprimento",
      "Deixar de gerenciar os riscos psicossociais expõe a empresa a um passivo que se manifesta em três frentes simultâneas:",
      "- **Financeira:** autuações e multas administrativas, além de indenizações por danos morais e doenças ocupacionais reconhecidas judicialmente;\n- **Operacional:** afastamentos, absenteísmo, presenteísmo, alta rotatividade e queda de produtividade e de qualidade;\n- **Jurídica e reputacional:** ações trabalhistas individuais e coletivas, atuação do Ministério Público do Trabalho e desgaste de imagem perante clientes, talentos e investidores.",
      "> Riscos invisíveis hoje tornam-se passivos caros amanhã. A prevenção quase sempre custa uma fração do que custa remediar.",
      "## Como a assessoria jurídica preventiva atua",
      "A adequação à NR-1 não é apenas um projeto de medicina e segurança do trabalho — é também um tema jurídico estratégico. A atuação preventiva conecta a conformidade técnica à proteção contra passivos, traduzindo a norma em políticas válidas, documentação consistente e governança capaz de sustentar a empresa em uma eventual fiscalização ou litígio.",
      "Mais do que evitar multas, uma estrutura bem desenhada reduz adoecimento, melhora o clima organizacional e fortalece a marca empregadora. Conformidade, nesse cenário, deixa de ser custo e se torna vantagem competitiva.",
      "## Conclusão",
      "A inclusão dos riscos psicossociais na NR-1 consolidou a saúde mental como parte inseparável da gestão de riscos ocupacionais. As empresas que se anteciparem — estruturando diagnóstico, plano de ação e documentação antes da fiscalização — não apenas cumprirão a norma, mas construirão ambientes mais saudáveis, produtivos e juridicamente seguros.",
      "*Este conteúdo tem caráter informativo e não substitui a análise jurídica individualizada de cada caso.*",
    ],
  },
  {
    slug: "holding-familiar-quando-estruturar-e-erros-a-evitar",
    cat: "Holding Familiar",
    title: "Holding familiar: quando estruturar e quais erros evitar",
    excerpt:
      "Quando a holding familiar faz sentido, quais benefícios reais ela traz para patrimônio e sucessão e os erros mais comuns que comprometem o resultado.",
    date: "2026-04-12",
    readingTime: "10 min de leitura",
    body: [
      "A holding familiar tornou-se uma das ferramentas mais procuradas por empresários e famílias que desejam organizar patrimônio, proteger bens e estruturar a sucessão. Mas, como toda solução poderosa, ela só entrega resultado quando é desenhada sob medida — a partir de uma análise real da família, do patrimônio e dos objetivos. Usada como \"fórmula pronta\", pode gerar mais problemas do que resolve.",
      "Neste artigo, explico **o que é uma holding familiar, quando vale a pena estruturá-la, os benefícios concretos que ela oferece e os erros mais comuns** que comprometem todo o planejamento.",
      "## O que é uma holding familiar",
      "Holding é uma sociedade constituída para **deter e administrar bens e participações** — imóveis, cotas e ações de outras empresas, aplicações e demais ativos. Quando esse veículo é criado para organizar o patrimônio de uma família, fala-se em holding familiar.",
      "Em vez de cada bem estar diretamente no nome das pessoas físicas, ele passa a integrar o patrimônio da holding, e os membros da família tornam-se sócios. Essa simples mudança de titularidade abre espaço para um nível de **organização, proteção e governança** que dificilmente se alcança com bens dispersos em nome de várias pessoas.",
      "## Quando faz sentido estruturar",
      "A holding não é para todos, nem para qualquer momento. Ela costuma fazer sentido quando estão presentes um ou mais dos seguintes sinais:",
      "- Patrimônio relevante, especialmente com **vários imóveis** ou participações empresariais;\n- Existência de **múltiplos sócios, herdeiros ou núcleos familiares**;\n- Desejo de **organizar a sucessão em vida**, evitando um inventário longo e litigioso;\n- Necessidade de **proteger bens** da exposição a riscos da atividade empresarial;\n- Atividade de **administração de imóveis** (locação) que possa ganhar eficiência;\n- Intenção de **profissionalizar a gestão** do patrimônio e prevenir conflitos.",
      "Quando nenhum desses elementos está presente, é possível que estruturas mais simples já atendam — e a holding apenas adicionaria custo e complexidade. Por isso o diagnóstico vem sempre antes da decisão.",
      "## Os benefícios reais de uma holding familiar",
      "### Proteção patrimonial",
      "Ao separar o patrimônio pessoal e familiar dos riscos da atividade empresarial, a holding cria uma camada de proteção. Bem estruturada, ela dificulta que oscilações ou passivos de uma empresa operacional atinjam diretamente o patrimônio da família — sempre dentro dos limites da lei e sem qualquer intenção de fraude a credores.",
      "### Organização e planejamento sucessório",
      "Este é, com frequência, o maior benefício. A holding permite **antecipar a sucessão ainda em vida**, por meio da doação de cotas aos herdeiros com reserva de usufruto — o patriarca ou a matriarca mantém o controle e os rendimentos enquanto vive, e a transmissão ocorre de forma planejada, sem a necessidade de um inventário demorado e custoso.",
      "### Governança familiar",
      "Por meio do contrato social e, sobretudo, do **acordo de sócios**, a família estabelece regras claras: como as decisões são tomadas, o que acontece em caso de falecimento, divórcio ou saída de um sócio, como entram (ou não) cônjuges e genros/noras, e como se resolvem impasses. É a governança que previne os conflitos antes que eles surjam.",
      "### Eficiência tributária — com a devida cautela",
      "Em determinadas situações, a holding pode trazer eficiência tributária, por exemplo na forma de tributação de receitas de locação ou na transmissão de cotas. **Porém — e este ponto é essencial — economia de impostos não deve ser o objetivo central nem a justificativa única da estrutura.** O propósito legítimo é organização, proteção e sucessão. Estruturas criadas apenas para reduzir tributos, sem substância, são frágeis e podem ser questionadas pelo Fisco.",
      "## Erros comuns que comprometem o resultado",
      "Boa parte dos problemas com holdings não vem da ferramenta, e sim de como ela foi montada. Os erros mais frequentes são:",
      "- **Tratar a holding apenas como economia de imposto**, ignorando seu propósito patrimonial e sucessório e expondo-se a autuações;\n- **Não elaborar um acordo de sócios**, deixando a convivência societária sem regras e a porta aberta para conflitos;\n- **Copiar modelos genéricos** de internet ou de outras famílias, sem considerar a realidade específica do patrimônio e das relações familiares;\n- **Ignorar a regra da legítima** e os direitos dos herdeiros necessários no planejamento das doações;\n- **Esquecer cláusulas de proteção** nas doações — como incomunicabilidade, impenhorabilidade, inalienabilidade e reversão;\n- **Desconsiderar custos e obrigações contínuas** de manutenção da estrutura (contábeis, fiscais e societárias);\n- **Montar a holding às pressas**, sem diagnóstico, em vez de tratá-la como parte de um planejamento maior.",
      "> A holding familiar não é um produto que se compra pronto. É uma estrutura jurídica viva, que precisa refletir a sua família, o seu patrimônio e os seus objetivos.",
      "## Holding não é fórmula mágica",
      "Vale reforçar: a holding não blinda patrimônio contra fraudes, não anula direitos de herdeiros necessários e não existe para esconder bens. Quando usada com essas intenções, torna-se um risco — passível de desconsideração e questionamento. Seu valor está exatamente no **uso legítimo, transparente e bem documentado**.",
      "## Como estruturar com segurança",
      "Um processo bem conduzido costuma seguir etapas claras: diagnóstico do patrimônio e dos objetivos da família; definição do tipo societário e da arquitetura da estrutura; elaboração de contrato social e acordo de sócios sob medida; planejamento das doações e cláusulas de proteção; e, por fim, a implementação acompanhada de governança e revisão periódica.",
      "O papel da assessoria jurídica é integrar todas essas peças — societária, sucessória, patrimonial e tributária — em uma estrutura coerente, dentro da legalidade e alinhada ao que a família realmente deseja preservar.",
      "## Conclusão",
      "A holding familiar, quando bem estruturada, organiza o patrimônio, protege bens, profissionaliza a gestão e permite uma sucessão tranquila, sem disputas e sem o desgaste de um inventário litigioso. O segredo não está na ferramenta em si, mas no **planejamento personalizado** que a sustenta. Antes de criar uma, a pergunta certa não é \"quanto vou economizar de imposto?\", e sim \"que legado eu quero proteger e como quero que ele seja transmitido?\".",
      "*Este conteúdo tem caráter informativo e não substitui a análise jurídica individualizada de cada caso.*",
    ],
  },
  {
    slug: "compliance-trabalhista-reduzindo-passivos",
    cat: "Compliance",
    title: "Compliance trabalhista: reduzindo passivos antes que surjam",
    excerpt:
      "Como a prevenção jurídica reduz passivos trabalhistas, protege a empresa e resguarda a responsabilidade pessoal de gestores e administradores.",
    date: "2026-03-03",
    readingTime: "9 min de leitura",
    body: [
      "Passivo trabalhista raramente nasce de um único grande erro. Na maioria das vezes, ele se acumula em silêncio — em políticas inexistentes, registros mal feitos, jornadas controladas de forma frágil e práticas informais que se repetem ano após ano. Quando a conta chega, na forma de reclamações, fiscalizações ou acordos de alto valor, o custo é muito maior do que teria sido o investimento em prevenção.",
      "É exatamente isso que o **compliance trabalhista** busca evitar: em vez de reagir ao problema, a empresa estrutura mecanismos que reduzem o risco na origem — protegendo o negócio, a reputação e a responsabilidade pessoal de quem o administra.",
      "## O que é compliance trabalhista",
      "Compliance trabalhista é o conjunto de **políticas, processos e controles** que asseguram que a empresa cumpra a legislação trabalhista e previdenciária e atue de acordo com padrões éticos consistentes nas relações de trabalho. Vai além de \"seguir a CLT\": trata-se de criar uma cultura e uma estrutura que tornem a conformidade parte da rotina, e não uma corrida de última hora diante de uma notificação.",
      "## Por que prevenir custa menos que remediar",
      "A lógica do compliance é econômica antes de ser jurídica. Uma condenação trabalhista soma verbas, juros, correção, honorários e, muitas vezes, danos morais — sem contar o tempo e a energia da gestão consumidos pelo litígio. Multiplicado por dezenas de empregados em situação semelhante, um único equívoco recorrente se transforma em passivo expressivo.",
      "> Prevenir é quase sempre uma fração do custo de remediar. O compliance trabalhista é, antes de tudo, uma decisão de gestão de risco.",
      "## Principais fontes de passivo trabalhista",
      "Os passivos mais comuns — e mais evitáveis — costumam ter origem em:",
      "- **Controle de jornada frágil**, com horas extras não registradas ou pagas de forma incorreta;\n- **Desvio e acúmulo de função** sem o devido enquadramento e remuneração;\n- **Terceirização e pejotização** mal estruturadas, que podem ser reconhecidas como vínculo;\n- **Falta de políticas internas** claras sobre conduta, assédio e uso de ferramentas;\n- **Ambiente inadequado** e descumprimento de normas de saúde e segurança (inclusive os riscos psicossociais da NR-1);\n- **Tratamento inadequado de dados** de candidatos e empregados, em desacordo com a LGPD.",
      "## Os pilares de um programa eficaz",
      "### Políticas internas e código de conduta",
      "Tudo começa com regras escritas, claras e comunicadas: código de conduta, política de prevenção ao assédio, regras de jornada, home office, uso de e-mail e redes. Políticas bem redigidas orientam o comportamento e, quando aplicadas de forma consistente, constituem prova da diligência da empresa.",
      "### Canal de denúncias",
      "Um canal seguro, acessível e que garanta a não retaliação permite que problemas sejam identificados e corrigidos internamente — antes de se transformarem em ação judicial ou em crise de imagem. Mais do que um item de conformidade, é um instrumento de inteligência sobre os riscos reais da organização.",
      "### Gestão de jornada e documentação",
      "Registro de ponto confiável, controle correto de horas extras, banco de horas formalizado e guarda adequada de documentos são a espinha dorsal da defesa trabalhista. Grande parte das condenações decorre não do fato em si, mas da **ausência de prova** de que a empresa agiu corretamente.",
      "### LGPD e dados dos trabalhadores",
      "A relação de trabalho movimenta um volume enorme de dados pessoais — muitos deles sensíveis. Tratá-los em conformidade com a LGPD, com base legal adequada e segurança da informação, evita um passivo que hoje caminha lado a lado com o trabalhista.",
      "### Treinamento de lideranças",
      "Boa parte dos riscos trabalhistas se materializa no dia a dia da gestão: na forma de cobrar, conceder folgas, conduzir feedbacks e lidar com conflitos. Capacitar líderes é transformar a política do papel em prática — e é, muitas vezes, a medida de maior impacto e menor custo.",
      "## A responsabilidade pessoal dos gestores",
      "Há um ponto que costuma passar despercebido: em um cenário de responsabilização crescente, administradores e diretores podem ser pessoalmente alcançados por decisões e omissões da empresa. Um programa de compliance bem documentado demonstra diligência e **reduz a exposição pessoal** de quem ocupa cargos de gestão — protegendo não só a pessoa jurídica, mas as pessoas por trás dela.",
      "## A integração com a NR-1 e a governança",
      "Compliance trabalhista não vive isolado. Ele se conecta diretamente à gestão de saúde e segurança — incluindo os riscos psicossociais que a NR-1 passou a exigir — e à governança corporativa da empresa. Tratados de forma integrada, esses temas deixam de ser obrigações dispersas e passam a compor um sistema único de prevenção e proteção.",
      "## Conclusão",
      "Compliance trabalhista é, na essência, **prevenção com método**. Empresas que estruturam políticas claras, controlam jornada com rigor, capacitam lideranças e documentam suas práticas reduzem drasticamente a probabilidade e o valor de futuras condenações — e ainda fortalecem reputação, clima organizacional e marca empregadora. O melhor momento para começar não é depois da primeira reclamação; é antes que ela exista.",
      "*Este conteúdo tem caráter informativo e não substitui a análise jurídica individualizada de cada caso.*",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

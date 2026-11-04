import type { PerfilSolarId } from "@/lib/perfis-solares";

type Detalhe = {
  resumo: string;
  necessidade: string;
  solucao: string;
  pontos: readonly string[];
  etapas: readonly { titulo: string; texto: string }[];
  faq: readonly { pergunta: string; resposta: string }[];
};

export const detalhesSolares = {
  residencial: {
    resumo: "Um projeto de energia solar pensado para o consumo e as características da sua casa.",
    necessidade: "Cada residência tem uma rotina de consumo. Antes de escolher um sistema, é importante conhecer a conta de energia, o espaço disponível e as condições do imóvel.",
    solucao: "Para avaliar um projeto residencial, é importante reunir informações sobre o consumo e o imóvel. Converse com a equipe sobre o escopo da análise, as possibilidades de instalação e as condições da proposta.",
    pontos: ["Perfil de consumo da residência", "Espaço e condições para instalação", "Proposta adequada ao imóvel"],
    etapas: [
      { titulo: "Descreva a casa", texto: "Informe a cidade e as características do imóvel." },
      { titulo: "Reúna o consumo", texto: "Se possível, tenha em mãos uma conta de energia e o histórico de consumo." },
      { titulo: "Conte sobre a rotina", texto: "Informe horários de uso e mudanças previstas, como novos equipamentos." },
    ],
    faq: [
      { pergunta: "Preciso saber meu consumo para entrar em contato?", resposta: "Não. Esse dado é opcional no formulário. Uma conta de energia pode ajudar na análise, mas você pode começar a conversa apenas com seus dados de contato." },
      { pergunta: "O mesmo sistema atende qualquer casa?", resposta: "O dimensionamento depende do consumo e das condições do imóvel. A proposta deve considerar o seu caso, em vez de partir de um tamanho único." },
      { pergunta: "Posso pedir uma proposta para uma casa em outra cidade?", resposta: "Informe a cidade no contato para que a equipe confirme a possibilidade de atendimento e as condições do projeto." },
    ],
  },
  comercial: {
    resumo: "Energia solar para o perfil de consumo e a rotina do seu negócio.",
    necessidade: "Horários de funcionamento, equipamentos e consumo variam de uma empresa para outra. Essas informações ajudam a avaliar como um projeto solar pode se integrar à operação.",
    solucao: "O consumo, os horários de funcionamento e as condições do local ajudam a preparar a avaliação. Escopo, prazos e possíveis impactos na operação devem ser esclarecidos na proposta.",
    pontos: ["Consumo e horários da operação", "Condições do imóvel comercial", "Escopo e planejamento do projeto"],
    etapas: [
      { titulo: "Apresente a atividade", texto: "Informe a cidade, a atividade da empresa e os horários de funcionamento." },
      { titulo: "Reúna os dados de consumo", texto: "Separe as contas disponíveis e descreva os principais equipamentos." },
      { titulo: "Explique os planos do negócio", texto: "Conte sobre mudanças previstas e restrições da operação." },
    ],
    faq: [
      { pergunta: "Quais informações ajudam na primeira conversa?", resposta: "A cidade e uma conta de energia ajudam a contextualizar a necessidade. A equipe poderá orientar sobre outras informações para a análise." },
      { pergunta: "O horário de funcionamento faz diferença?", resposta: "Sim. A distribuição do consumo ao longo do dia é uma das informações relevantes ao estudo do projeto." },
      { pergunta: "Como ficam os prazos e a rotina da empresa?", resposta: "Prazos, acesso ao imóvel e planejamento da instalação precisam ser definidos na proposta e alinhados com os responsáveis pela operação." },
    ],
  },
  industrial: {
    resumo: "O cliente produz energia em sua propriedade rural e compensa o consumo de energia da sua indústria na cidade.",
    necessidade: "O local de geração na propriedade rural e o consumo da indústria na cidade precisam ser considerados na conversa sobre o projeto.",
    solucao: "Apresente as informações disponíveis sobre a propriedade e a indústria. Converse com a equipe para esclarecer as condições do projeto e o que precisa ser avaliado antes de uma proposta.",
    pontos: ["Local de geração na propriedade rural", "Consumo da indústria na cidade", "Condições do projeto a esclarecer com a equipe"],
    etapas: [
      { titulo: "Apresente os dois locais", texto: "Informe onde ficam a propriedade rural e a indústria." },
      { titulo: "Reúna os dados disponíveis", texto: "Se possível, separe as contas de energia e as informações sobre o local de geração." },
      { titulo: "Converse sobre o projeto", texto: "Esclareça com a equipe as condições, o escopo e as próximas informações necessárias." },
    ],
    faq: [
      { pergunta: "Qual é o cenário apresentado neste serviço?", resposta: "O cliente produz energia em sua propriedade rural e compensa o consumo de energia da sua indústria na cidade." },
      { pergunta: "O que posso levar para a primeira conversa?", resposta: "As cidades dos dois locais, as contas de energia disponíveis e suas dúvidas sobre o projeto ajudam a contextualizar o atendimento." },
      { pergunta: "Essa descrição confirma as condições de qualquer projeto?", resposta: "As condições do seu projeto precisam ser esclarecidas com a equipe. Esta apresentação não substitui uma avaliação específica nem apresenta projeções de economia." },
    ],
  },
} as const satisfies Record<PerfilSolarId, Detalhe>;

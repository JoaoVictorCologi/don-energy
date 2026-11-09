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
      { pergunta: "Preciso saber meu consumo para entrar em contato?", resposta: "Você pode conversar diretamente pelo WhatsApp. Para preparar uma mensagem pelo formulário de proposta, informe o valor da conta ou o consumo mensal." },
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
    resumo: "Energia solar planejada para o consumo e as condições da operação industrial.",
    necessidade: "Os turnos de produção, os equipamentos e as características do imóvel ajudam a entender a demanda de energia da indústria.",
    solucao: "A equipe pode avaliar as contas de energia e as condições do local para conversar sobre o projeto e o planejamento da instalação.",
    pontos: ["Consumo e turnos de produção", "Área disponível para instalação", "Planejamento de acesso e execução"],
    etapas: [
      { titulo: "Apresente a operação", texto: "Informe a cidade e descreva os turnos de produção." },
      { titulo: "Separe as contas", texto: "Reúna as contas de energia e informações sobre mudanças previstas no consumo." },
      { titulo: "Converse com a equipe", texto: "Apresente as condições do imóvel e as restrições da operação." },
    ],
    faq: [
      { pergunta: "Quais informações ajudam na avaliação?", resposta: "As contas de energia, os horários de funcionamento e as condições do local ajudam a contextualizar o projeto." },
    ],
  },
  "autoconsumo-remoto": {
    resumo: "Geração de energia em um imóvel para compensar o consumo em outro, conforme as condições do projeto.",
    necessidade: "O local disponível para geração e as unidades que consomem energia precisam ser avaliados em conjunto.",
    solucao: "Apresente as informações disponíveis sobre os locais de geração e consumo. Converse com a equipe para esclarecer as condições do projeto e o que precisa ser avaliado antes de uma proposta.",
    pontos: ["Local disponível para geração", "Contas das unidades de consumo", "Condições do projeto a esclarecer com a equipe"],
    etapas: [
      { titulo: "Apresente os dois locais", texto: "Informe onde ficam os imóveis de geração e consumo." },
      { titulo: "Reúna os dados disponíveis", texto: "Se possível, separe as contas de energia e as informações sobre o local de geração." },
      { titulo: "Converse sobre o projeto", texto: "Esclareça com a equipe as condições, o escopo e as próximas informações necessárias." },
    ],
    faq: [
      { pergunta: "Qual é o cenário apresentado neste serviço?", resposta: "Um exemplo é gerar energia em uma propriedade rural para compensar o consumo de uma indústria na cidade, conforme a avaliação do projeto." },
      { pergunta: "O que posso levar para a primeira conversa?", resposta: "As cidades dos dois locais, as contas de energia disponíveis e suas dúvidas sobre o projeto ajudam a contextualizar o atendimento." },
      { pergunta: "Essa descrição confirma as condições de qualquer projeto?", resposta: "As condições do seu projeto precisam ser esclarecidas com a equipe. Esta apresentação não substitui uma avaliação específica nem apresenta projeções de economia." },
    ],
  },
} as const satisfies Record<PerfilSolarId, Detalhe>;

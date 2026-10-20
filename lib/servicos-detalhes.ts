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
    solucao: "A proposta solar residencial considera essas informações para avaliar o dimensionamento e as possibilidades de instalação. A análise técnica define as condições do projeto.",
    pontos: ["Perfil de consumo da residência", "Espaço e condições para instalação", "Proposta adequada ao imóvel"],
    etapas: [
      { titulo: "Conte sobre sua casa", texto: "Informe a cidade e, se tiver em mãos, o consumo ou o valor da conta de energia." },
      { titulo: "Avalie as possibilidades", texto: "Converse sobre as características do imóvel e as informações necessárias à análise técnica." },
      { titulo: "Conheça a proposta", texto: "Confira o escopo, as condições e os próximos passos antes de decidir." },
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
    solucao: "O estudo da solução comercial parte do consumo e das condições do local. O escopo e o planejamento da instalação devem ser discutidos com a equipe, considerando a rotina do negócio.",
    pontos: ["Consumo e horários da operação", "Condições do imóvel comercial", "Escopo e planejamento do projeto"],
    etapas: [
      { titulo: "Apresente seu negócio", texto: "Compartilhe a cidade, a atividade e as informações de consumo disponíveis." },
      { titulo: "Converse sobre a operação", texto: "Indique horários, equipamentos e particularidades que precisam ser considerados na análise." },
      { titulo: "Analise a proposta", texto: "Avalie o dimensionamento, o escopo e as condições apresentados para a sua empresa." },
    ],
    faq: [
      { pergunta: "Quais informações ajudam na primeira conversa?", resposta: "A cidade e uma conta de energia ajudam a contextualizar a necessidade. A equipe poderá orientar sobre outras informações para a análise." },
      { pergunta: "O horário de funcionamento faz diferença?", resposta: "Sim. A distribuição do consumo ao longo do dia é uma das informações relevantes ao estudo do projeto." },
      { pergunta: "Como ficam os prazos e a rotina da empresa?", resposta: "Prazos, acesso ao imóvel e planejamento da instalação precisam ser definidos na proposta e alinhados com os responsáveis pela operação." },
    ],
  },
  rural: {
    resumo: "Uma solução solar avaliada a partir das necessidades da sua propriedade rural.",
    necessidade: "Equipamentos, atividades e períodos de produção influenciam o consumo no campo. O local disponível e as condições de instalação também fazem parte da avaliação.",
    solucao: "O projeto solar rural deve considerar a atividade da propriedade e seu perfil de consumo. A análise técnica orienta o dimensionamento e as condições para uma proposta específica.",
    pontos: ["Rotina e sazonalidade da propriedade", "Consumo dos equipamentos", "Condições do local de instalação"],
    etapas: [
      { titulo: "Descreva a propriedade", texto: "Informe a cidade, as principais atividades e os dados de consumo que tiver disponíveis." },
      { titulo: "Avalie o local", texto: "Converse sobre equipamentos, sazonalidade e possibilidades de instalação para orientar o estudo." },
      { titulo: "Confira o projeto proposto", texto: "Analise o escopo e as condições antes de combinar os próximos passos." },
    ],
    faq: [
      { pergunta: "O consumo muda durante o ano. Isso importa?", resposta: "Sim. Informe os períodos de maior consumo e as atividades sazonais para que sejam considerados na análise." },
      { pergunta: "Posso informar o consumo de equipamentos específicos?", resposta: "Sim. Informações sobre os equipamentos ajudam a entender o perfil da propriedade. A equipe orientará quais dados são necessários ao projeto." },
      { pergunta: "É preciso definir o local da instalação antes de conversar?", resposta: "Não. Você pode apresentar as possibilidades e esclarecer com a equipe o que precisa ser avaliado tecnicamente." },
    ],
  },
  usina: {
    resumo: "Avaliação de projetos de geração solar com foco em usinas de investimento.",
    necessidade: "Uma usina exige uma avaliação específica do local, do projeto e das condições de implantação. Antes de uma decisão, é necessário entender o escopo e as premissas do estudo.",
    solucao: "A primeira conversa reúne os objetivos e as informações disponíveis para avaliar as possibilidades do projeto. Viabilidade, condições e responsabilidades devem ser detalhadas na proposta, sem promessa de retorno fixo.",
    pontos: ["Objetivos e características do projeto", "Condições do local e da implantação", "Premissas e escopo da avaliação"],
    etapas: [
      { titulo: "Apresente seu objetivo", texto: "Informe a cidade e o que você tem em mente para o projeto de geração solar." },
      { titulo: "Reúna as informações", texto: "Converse com a equipe sobre o local e os dados necessários à avaliação de viabilidade." },
      { titulo: "Revise as condições", texto: "Analise as premissas, o escopo e as responsabilidades descritos antes de decidir." },
    ],
    faq: [
      { pergunta: "Existe um retorno financeiro garantido?", resposta: "Não é possível afirmar um retorno fixo nesta página. A avaliação depende das condições e premissas específicas do projeto, que precisam ser apresentadas e analisadas." },
      { pergunta: "Já preciso ter um terreno definido?", resposta: "Você pode iniciar a conversa informando seu objetivo e as opções disponíveis. A equipe indicará quais informações sobre o local serão necessárias à avaliação." },
      { pergunta: "Quais informações devo enviar no primeiro contato?", resposta: "Informe seu nome, telefone e cidade, selecione usina de investimento e conte mais sobre seu objetivo durante a conversa no WhatsApp." },
    ],
  },
} as const satisfies Record<PerfilSolarId, Detalhe>;

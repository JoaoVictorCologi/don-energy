export const depoimentos = [
  {
    nome: "Dival Oliveira",
    texto:
      "Empresa com profissionais competentes, desde a apresentação à venda e instalação. Gostei muito do atendimento pós-venda: sempre que precisei de alguma dúvida ou informação fui atendido e a dúvida foi solucionada. Meu sistema está operando agora no verão a 95% da capacidade, mesmo com alguns momentos de baixa insolação! Recomendo!",
  },
  {
    nome: "Sonia Capellari Rezende",
    texto:
      "Serviço muito bem executado, com extremo profissionalismo por profissionais da área, sabendo exatamente o que precisa ser feito. O resultado não poderia ser outro: estamos atingindo acima de 100% em captação de energia! Parabéns a toda equipe do Don Energy Mococa.",
  },
  {
    nome: "Carlos Moraes",
    texto: "Muito satisfatório o atendimento e a execução do serviço, nota dez.",
  },
  {
    nome: "Anderson Leite",
    texto:
      "Serviço e atendimento top, atencioso, e quando precisa de alguma assistência tem suporte na hora.",
  },
  {
    nome: "Israel David Spalato",
    texto:
      "Muito bom trabalho, gostei da instalação e do atendimento dos colaboradores. É uma empresa muito boa de se trabalhar, podem confiar. Obrigado!",
  },
] as const;

type Avaliacao = {
  id: string;
  nome: string;
  tema: string;
  texto: string;
  originalConferido?: boolean;
  perfilAutor?: string;
  linkAvaliacao?: string;
  verificada: boolean;
  autorizada: boolean;
};

export const perfilGoogle = "https://www.google.com/maps/place/Don+Energy+-+Energia+Solar/data=!4m2!3m1!1s0x0:0x63ac62916127a52f";

export const notaGoogle = { media: 4.8, total: 100, consultadoEm: "2026-11-09" } as const;

// O acervo acima permanece separado dos relatos liberados para reprodução.
const avaliacoesRegistradas: readonly Avaliacao[] = [
  {
    id: "leandro",
    nome: "Leandro Franchi Valente",
    tema: "Instalação",
    texto: "Pessoal extremamente profissional. Sistema instalado e funcionando perfeitamente. Estou muito satisfeito com os resultados.",
    originalConferido: true,
    perfilAutor: "https://www.google.com/maps/contrib/117834654240404896909/reviews?hl=pt-BR",
    verificada: true,
    autorizada: true,
  },
  {
    id: "nei-nei",
    nome: "Nei Nei",
    tema: "Preço e atendimento",
    texto: "Considerou o preço justo, elogiou a agilidade na execução e disse que teve todas as dúvidas esclarecidas.",
    perfilAutor: "https://www.google.com/maps/contrib/115213981795498009240/reviews?hl=pt-BR",
    verificada: true,
    autorizada: true,
  },
  {
    id: "carlos",
    nome: "Carlos Moraes",
    tema: "Execução do serviço",
    texto: "Muito satisfatória atendimento e execução do serviço nota dez",
    originalConferido: true,
    perfilAutor: "https://www.google.com/maps/contrib/117779547553232165975/reviews?hl=pt-BR",
    verificada: true,
    autorizada: true,
  },
  {
    id: "elisa",
    nome: "Elisa Mariah Brito Bazili",
    tema: "Atendimento e prazo",
    texto: "Gostei muito do atendimento prestado, estabeleceu prazos conforme a logística e cumpriu todos, o preço tbm é muito bom, estou feliz com minha aquisição. Esclareceram todas as minhas dúvidas.\nSuper indico essa empresa, aliás já indiquei para uns conhecidos.",
    originalConferido: true,
    perfilAutor: "https://www.google.com/maps/contrib/109284845181262759505/reviews?hl=pt-BR",
    verificada: true,
    autorizada: true,
  },
  {
    id: "israel",
    nome: "Israel David Spalato",
    tema: "Instalação e equipe",
    texto: "Elogia o trabalho de instalação e o atendimento dos colaboradores.",
    verificada: true,
    autorizada: true,
  },
];

export const previaAvaliacoes = process.env.DON_ENERGY_PREVIA_AVALIACOES === "1";
export const avaliacoesVisiveis = avaliacoesRegistradas.filter(
  ({ verificada, autorizada }) => verificada && (autorizada || previaAvaliacoes),
);

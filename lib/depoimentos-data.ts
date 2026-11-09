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
  texto: string;
  perfilAutor?: string;
  linkAvaliacao?: string;
  verificada: boolean;
  autorizada: boolean;
};

export const perfilGoogle = "https://www.google.com/maps/place/Don+Energy+-+Energia+Solar/data=!4m2!3m1!1s0x0:0x63ac62916127a52f";

// O acervo acima permanece separado dos relatos liberados para reprodução.
const avaliacoesRegistradas: readonly Avaliacao[] = [
  {
    id: "leandro",
    nome: "Leandro Franchi Valente",
    texto: "Destaca o profissionalismo da equipe e relata que o sistema instalado está funcionando como esperado.",
    perfilAutor: "https://www.google.com/maps/contrib/117834654240404896909/reviews?hl=pt-BR",
    verificada: true,
    autorizada: false,
  },
  {
    id: "nei-nei",
    nome: "Nei Nei",
    texto: "Considerou o preço justo, elogiou a agilidade na execução e disse que teve todas as dúvidas esclarecidas.",
    perfilAutor: "https://www.google.com/maps/contrib/115213981795498009240/reviews?hl=pt-BR",
    verificada: true,
    autorizada: false,
  },
  {
    id: "carlos",
    nome: "Carlos Moraes",
    texto: "Descreve a experiência como muito satisfatória e elogia o atendimento e a execução do serviço.",
    perfilAutor: "https://www.google.com/maps/contrib/117779547553232165975/reviews?hl=pt-BR",
    verificada: true,
    autorizada: false,
  },
  {
    id: "elisa",
    nome: "Elisa Mariah Brito Bazili",
    texto: "Conta que recebeu esclarecimentos, que os prazos combinados foram cumpridos no caso dela e que considerou o preço bom.",
    perfilAutor: "https://www.google.com/maps/contrib/109284845181262759505/reviews?hl=pt-BR",
    verificada: true,
    autorizada: false,
  },
  {
    id: "israel",
    nome: "Israel David Spalato",
    texto: "Elogia o trabalho de instalação e o atendimento dos colaboradores.",
    verificada: true,
    autorizada: false,
  },
];

export const previaAvaliacoes = process.env.DON_ENERGY_PREVIA_AVALIACOES === "1";
export const avaliacoesVisiveis = avaliacoesRegistradas.filter(
  ({ verificada, autorizada }) => verificada && (autorizada || previaAvaliacoes),
);

import { perfisSolares } from "@/lib/perfis-solares";
import { detalhesSolares } from "@/lib/servicos-detalhes";

const servicosBase = [
  {
    id: "residencial",
    titulo: "Residencial",
    intro: "Reduza sua conta de luz em até 90% — sem trocar seus hábitos, só a fonte da energia.",
    beneficios: [
      "Sistema dimensionado pro seu consumo real, não um pacote genérico",
      "Você para de refém de reajuste de tarifa da concessionária",
      "Instalação sem bagunça, sem obra grande, sem parar sua rotina",
      "Suporte pós-venda de verdade — a gente não some depois que liga o sistema",
    ],
  },
  {
    id: "comercial",
    titulo: "Comercial",
    intro: "Energia é custo fixo todo mês. Energia solar vira custo que cai pra quase zero.",
    beneficios: [
      "Payback calculado antes de você assinar qualquer coisa",
      "Instalação fora do horário de funcionamento, zero interrupção no negócio",
      "Projeto pensado pro seu perfil de consumo, não um modelo padrão",
      "Mais margem no fim do mês, mais competitividade no seu setor",
    ],
  },
  {
    id: "rural",
    titulo: "Rural",
    intro: "Irrigação, resfriamento, maquinário — energia rural pesa no bolso. A solar resolve isso.",
    beneficios: [
      "Sistema robusto pra alto consumo de propriedade produtiva",
      "Linhas de crédito facilitadas pra produtor rural, a gente ajuda a encontrar",
      "Instalação em galpão, curral, sede — onde sua operação precisar",
      "Menos custo de energia, mais margem na produção",
    ],
  },
  {
    id: "usina",
    titulo: "Usina de investimento",
    intro: "Gere energia, venda o excedente, receba todo mês — é ativo, não gasto.",
    beneficios: [
      "Do estudo de viabilidade até a usina operando, cuidamos de tudo",
      "Retorno previsível, projetado antes de você investir um real",
      "Opção de diversificar patrimônio fora da bolsa e da renda fixa",
      "Gestão contínua depois da instalação — não é 'vendeu e sumiu'",
    ],
  },
] as const;


export const servicos = perfisSolares.map((perfil) => {
  const base = servicosBase.find((item) => item.id === perfil.id);
  if (!base) throw new Error("Perfil solar sem dados: " + perfil.id);
  return { ...base, ...perfil, ...detalhesSolares[perfil.id] };
});

export type Servico = (typeof servicos)[number];

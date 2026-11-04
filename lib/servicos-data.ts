import { perfisSolares } from "@/lib/perfis-solares";
import { detalhesSolares } from "@/lib/servicos-detalhes";

const servicosBase = [
  {
    id: "residencial", titulo: "Residencial",
    intro: "Energia solar para o consumo e as características da sua casa.",
    beneficios: ["Consumo de energia ao longo do ano", "Área disponível e condições da cobertura", "Horários de uso e mudanças previstas na rotina", "Informações para conversar sobre o projeto"],
  },
  {
    id: "comercial", titulo: "Comercial",
    intro: "Um projeto solar começa pelo perfil de consumo e pela rotina do negócio.",
    beneficios: ["Horários de funcionamento da empresa", "Consumo dos equipamentos e variações de demanda", "Condições do imóvel e espaço disponível", "Planos de ampliação da operação"],
  },
  {
    id: "industrial", titulo: "Autoconsumo Remoto - Industrial",
    intro: "O cliente produz energia em sua propriedade rural e compensa o consumo de energia da sua indústria na cidade.",
    beneficios: ["Local de geração na propriedade rural", "Consumo da indústria na cidade", "Informações dos dois locais", "Condições a esclarecer com a equipe"],
  },
] as const;

export const servicos = perfisSolares.map((perfil) => {
  const base = servicosBase.find((item) => item.id === perfil.id);
  if (!base) throw new Error("Perfil solar sem dados: " + perfil.id);
  return { ...base, ...perfil, ...detalhesSolares[perfil.id] };
});
export type Servico = (typeof servicos)[number];

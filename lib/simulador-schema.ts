import { z } from "zod";
import { perfisSolares, type PerfilSolarId } from "@/lib/perfis-solares";

export const estadosBrasileiros = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"] as const;
export const ligacoes = [
  { id: "nao-sei", titulo: "Não sei" },
  { id: "monofasica", titulo: "Monofásica" },
  { id: "bifasica", titulo: "Bifásica" },
  { id: "trifasica", titulo: "Trifásica" },
] as const;

// Valida somente a escrita de um valor declarado; não converte R$ em energia.
export function valorDeclaradoValido(value: string) {
  const texto = value.trim();
  return /^\d+(?:,\d+)?$/.test(texto) && Number.isFinite(Number(texto.replace(",", "."))) && Number(texto.replace(",", ".")) > 0;
}

export const simuladorSchema = z.object({
  perfil: z.enum(["residencial", "comercial", "rural", "usina"], "Selecione o perfil do projeto."),
  cidade: z.string().trim().min(2, "Informe a cidade.").max(100, "Use até 100 caracteres.").refine(v => /\p{L}/u.test(v), "Informe o nome da cidade."),
  uf: z.enum(estadosBrasileiros, "Selecione a UF."),
  tipoDado: z.enum(["nao-sei", "consumo", "conta"]),
  valor: z.string().trim().max(30, "Use até 30 caracteres, sem símbolos ou unidades."),
  ligacao: z.enum(["nao-sei", "monofasica", "bifasica", "trifasica"]),
}).superRefine((dados, ctx) => {
  if (dados.perfil !== "usina" && dados.tipoDado !== "nao-sei" && !valorDeclaradoValido(dados.valor)) {
    ctx.addIssue({ code: "custom", path: ["valor"], message: "Informe um valor maior que zero, usando números e vírgula decimal. Não use pontos, símbolos ou unidades." });
  }
});

export type DadosSimulador = z.infer<typeof simuladorSchema>;
export type ContextoSimulador = {
  perfil: PerfilSolarId;
  cidade: string;
  consumoOuConta: string;
  ligacao: string;
};

export function contextoParaContato(dados: DadosSimulador): ContextoSimulador {
  const usina = dados.perfil === "usina";
  const valor = dados.valor.trim().replace(/^0+(?=\d)/, "");
  return {
    perfil: dados.perfil,
    cidade: dados.cidade + " / " + dados.uf,
    consumoOuConta: usina ? "Não informado — interesse em usina de investimento" : dados.tipoDado === "nao-sei" ? "Não informado" : dados.tipoDado === "conta" ? "Conta informada: R$ " + valor + "/mês" : "Consumo informado: " + valor + " kWh/mês",
    ligacao: usina ? "Não se aplica a esta preparação de atendimento" : ligacoes.find(item => item.id === dados.ligacao)!.titulo,
  };
}

export function nomePerfil(perfil: PerfilSolarId) {
  return perfisSolares.find(item => item.id === perfil)!.titulo;
}

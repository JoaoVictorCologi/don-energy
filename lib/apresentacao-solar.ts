import type { PerfilSolarId } from "@/lib/perfis-solares";

// Residencial/rural informados em 26/10/2026. Demais fotos são composição, sem classificação inferida.
export const apresentacaoSolar = {
  residencial: { foto: "12", legenda: "Projeto residencial · Limeira · SP", abertura: "O ponto de partida é a sua casa.", contexto: "Sua rotina vem antes do dimensionamento." },
  comercial: { foto: "01", legenda: "Fotografia do acervo Don Energy.", abertura: "Entenda o consumo do seu negócio.", contexto: "A operação ajuda a explicar a conta." },
  industrial: { foto: "14", legenda: "Pão de Queijo Francini · Propriedade rural · Mococa · SP", abertura: "Autoconsumo Remoto - Industrial", contexto: "Geração na propriedade rural. Consumo na indústria." },
} as const satisfies Record<PerfilSolarId, { foto: string; legenda: string; abertura: string; contexto: string }>;

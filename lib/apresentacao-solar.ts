import { imagemIndustrial } from "@/lib/imagem-industrial";
import type { PerfilSolarId } from "@/lib/perfis-solares";

type Apresentacao = { foto?: string; legenda: string; abertura: string; contexto: string };

// As legendas registram a identificação do acervo. O uso em um serviço é ilustrativo.
export const apresentacaoSolar: Record<PerfilSolarId, Apresentacao> = {
  manutencao: { legenda: "Fotografia ilustrativa de limpeza de módulos solares.", abertura: "Limpeza e Manutenção de Energia Solar", contexto: "Conte como está seu sistema." },
  residencial: { foto: "12", legenda: "Projeto residencial · Limeira · SP", abertura: "O ponto de partida é a sua casa.", contexto: "Sua rotina vem antes do dimensionamento." },
  comercial: { foto: "01", legenda: "Fotografia do acervo Don Energy.", abertura: "Entenda o consumo do seu negócio.", contexto: "A operação ajuda a explicar a conta." },
  industrial: { legenda: imagemIndustrial.credito, abertura: "Energia Solar Industrial", contexto: "Consumo e rotina da indústria." },
  rural: { foto: "11", legenda: "Fotografia do acervo Don Energy.", abertura: "Energia Solar Rural", contexto: "A rotina da propriedade orienta o projeto." },
  "autoconsumo-remoto": { foto: "14", legenda: "Pão de Queijo Francini · Propriedade rural · Mococa · SP", abertura: "Energia Solar Autoconsumo Remoto", contexto: "Geração e consumo em locais diferentes." },
};

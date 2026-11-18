import type { Servico } from "@/lib/servicos-data";

export function EtapasProposta({ etapas }: { etapas: Servico["etapas"] }) {
  return <section className="site-section novo-etapas"><div className="site-shell">
    <div className="novo-cabecalho-secao" data-revelar><div><p className="site-eyebrow">Antes da proposta</p><h2 className="site-title">Informações para a primeira conversa.</h2></div><p>Escopo, prazos e responsabilidades precisam ser esclarecidos na proposta do projeto.</p></div>
    <ol data-revelar className="novo-etapas-trilho">{etapas.map((etapa, indice) => <li key={etapa.titulo} data-revelar style={{ animationDelay: indice * 120 + "ms" }}><span className="novo-etapa-numero" aria-hidden="true">0{indice + 1}</span><h3>{etapa.titulo}</h3><p>{etapa.texto}</p></li>)}</ol>
  </div></section>;
}

import Link from "next/link";
import { AberturaPagina } from "@/components/abertura-pagina";
import { fundoPorDoSol } from "@/lib/visual-site";

export default function NotFound() {
  return <main id="conteudo" tabIndex={-1} className="flex-1">
    <AberturaPagina titulo="Página não encontrada" rotulo="Erro 404" introducao="Confira o endereço ou volte à página inicial da Don Energy." fundo={fundoPorDoSol}>
      <Link href="/" className="visual-botao-claro">Voltar ao início</Link>
    </AberturaPagina>
  </main>;
}

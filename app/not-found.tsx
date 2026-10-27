import Link from "next/link";

export default function NotFound() {
  return <main id="conteudo" tabIndex={-1} className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start gap-5 px-6 py-20">
    <p className="font-semibold text-brand-green-dark">Erro 404</p>
    <h1 className="font-heading text-3xl font-medium text-brand-green-dark">Página não encontrada</h1>
    <p>Confira o endereço ou volte à página inicial da Don Energy.</p>
    <Link href="/" className="inline-flex min-h-11 items-center rounded-md bg-brand-green px-5 font-semibold text-brand-ink">Voltar ao início</Link>
  </main>;
}

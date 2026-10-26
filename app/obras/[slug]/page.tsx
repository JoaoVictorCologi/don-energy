import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { obrasConfirmadas, obraPorSlug } from "@/lib/obras-data";
import { DetalheObra } from "@/components/detalhe-obra";

export const dynamicParams = false;
export function generateStaticParams() { return obrasConfirmadas.map(obra => ({ slug: obra.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const obra = obraPorSlug((await params).slug); if (!obra) notFound();
  const title = obra.titulo + " — Don Energy", description = obra.descricao, url = "/obras/" + obra.slug + "/";
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, images: ["/og-image.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] } };
}
export default async function ObraPage({ params }: Props) {
  const obra = obraPorSlug((await params).slug); if (!obra) notFound();
  return <main id="conteudo" tabIndex={-1} className="flex-1"><DetalheObra obra={obra} /></main>;
}

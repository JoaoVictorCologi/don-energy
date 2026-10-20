import { obras, legendaObra } from "@/lib/obras-data";
import { FotoAcervo } from "@/components/foto-acervo";

export function ObrasGallery() {
  const destaques = [obras[8], obras[0], obras[10]];
  const restantes = obras.filter(obra => !destaques.includes(obra));
  const foto = (obra: (typeof obras)[number]) => <figure key={obra.file}><FotoAcervo numero={obra.file.slice(5,7)} sizes="(min-width: 1200px) 355px, (min-width: 768px) 30vw, 100vw" /><figcaption className="mt-4 text-xs leading-relaxed text-muted-foreground">{legendaObra(obra)}</figcaption></figure>;
  return <section id="obras" className="site-section scroll-mt-[var(--header-height)]"><div className="site-shell"><p className="site-eyebrow">Fotografias do acervo</p><h2 className="site-title">A energia solar ganha forma.</h2><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Um olhar sobre as instalações. Descrições e dados de cada obra estão em conferência.</p><div className="mt-10 grid gap-8 md:grid-cols-3">{destaques.map(foto)}</div><details className="mt-10 border-y border-border py-3"><summary className="min-h-12 cursor-pointer rounded-sm py-3 font-semibold text-brand-blue">Ver mais fotografias do acervo</summary><div className="grid gap-8 py-7 md:grid-cols-3">{restantes.map(foto)}</div></details></div></section>;
}

import { obras, legendaObra } from "@/lib/obras-data";

export function ObrasGallery() {
  return (
    <section id="obras" className="scroll-mt-[var(--header-height)] bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Obras realizadas</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Conheça algumas instalações. Os dados de identificação e potência de cada obra estão em conferência.</p>
        <div className="mt-10 grid grid-cols-1 gap-5 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {obras.map((obra) => (
            <figure key={obra.file} className="overflow-hidden rounded-lg border bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={"/obras/otimizadas/" + obra.file.replace(".webp", "-640.webp")} srcSet={[320, 640].map((width) => "/obras/otimizadas/" + obra.file.replace(".webp", "-" + width + ".webp") + " " + width + "w").join(", ")} sizes="(min-width: 1152px) 260px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, (min-width: 380px) 50vw, 100vw" alt={"Instalação de painéis solares — " + legendaObra(obra)} width="640" height="640" loading="lazy" className="aspect-square w-full object-cover" />
              <figcaption className="break-words p-3 text-xs leading-relaxed text-muted-foreground">{legendaObra(obra)}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

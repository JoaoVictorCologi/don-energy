import Image from "next/image";

import { obras } from "@/lib/obras-data";

export function ObrasGallery() {
  return (
    <section
      id="obras"
      className="scroll-mt-[var(--header-height)] bg-background px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Obras realizadas
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Projetos entregues em residências, comércios, propriedades rurais e
          usinas de investimento na região.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {obras.map((obra) => (
            <div
              key={obra.file}
              className="reveal-on-scroll group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={`/obras/${obra.file}`}
                alt={obra.desc}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{obra.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

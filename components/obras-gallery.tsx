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
          Obras entregues
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {obras.map((obra) => (
            <div
              key={obra.file}
              className="reveal-on-scroll relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={`/obras/${obra.file}`}
                alt={obra.desc}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

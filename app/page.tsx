import { Depoimentos } from "@/components/depoimentos";
import { Hero } from "@/components/hero";
import { ObrasGallery } from "@/components/obras-gallery";
import { Servicos } from "@/components/servicos";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Servicos />
      <ObrasGallery />
      <Depoimentos />
    </main>
  );
}

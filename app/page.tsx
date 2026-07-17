import { Hero } from "@/components/hero";
import { ObrasGallery } from "@/components/obras-gallery";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ObrasGallery />
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-brand-blue px-6 py-24 text-center text-white">
      <Image
        src="/logo/don-energy-logo.png"
        alt="Don Energy - Energia Solar"
        width={320}
        height={214}
        priority
      />
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">
        Esqueleto do projeto pronto
      </h1>
      <p className="max-w-xl text-white/80">
        Base Next.js 16 + TypeScript + Tailwind 4 configurada para static export,
        com cores, fontes e ativos da Don Energy já no lugar. As seções reais
        (hero definitivo, serviços, portfólio, depoimentos, formulário) entram
        a partir daqui.
      </p>
    </main>
  );
}
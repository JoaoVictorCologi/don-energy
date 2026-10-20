import Image from "next/image";

// Seleção para composição. O número do arquivo não define o perfil da obra.
export function FotoAcervo({ numero, className = "", sizes = "(min-width: 1200px) 550px, (min-width: 768px) 45vw, 100vw" }: { numero: string; className?: string; sizes?: string }) {
  return <Image src={"/obras/otimizadas/obra-" + numero + "-640.webp"} width={640} height={640} sizes={sizes} alt="Módulos solares sobre uma cobertura, em fotografia do acervo Don Energy" className={"aspect-[3/2] w-full rounded-md object-cover " + className} loading="lazy" />;
}

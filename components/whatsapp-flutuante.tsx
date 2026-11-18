"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconeWhatsApp } from "@/components/icone-whatsapp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsappFlutuante() {
  const [oculto, setOculto] = useState(false);
  const atalho = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const paginaComAtalho = pathname === "/" || /^\/servicos(?:\/|$)/.test(pathname);

  useEffect(() => {
    if (!paginaComAtalho) return;
    let frame = 0;
    const contato = document.getElementById("contato");
    const elementos = Array.from(document.querySelectorAll<HTMLElement>(
      "main h1, main h2, main h3, main p, main li, main label, main legend, main summary, main a, main button, main input, main select, main textarea, main figcaption, footer a, footer h3, footer address, footer dl, footer p"
    ));
    const atualizar = () => {
      frame = 0;
      const link = atalho.current;
      if (!link || document.activeElement === link) return;
      const areaContato = contato?.getBoundingClientRect();
      if (areaContato && areaContato.bottom > 0 && areaContato.top < innerHeight) {
        setOculto(true);
        return;
      }
      const area = link.getBoundingClientRect();
      const colide = (rect: DOMRect) => rect.width > 0 && rect.height > 0 && rect.right > area.left - 8 && rect.left < area.right + 8 && rect.bottom > area.top - 8 && rect.top < area.bottom + 8;
      // Medir só os blocos próximos. Textos usam suas linhas reais, não a largura vazia do parágrafo.
      // Iframes externos podem inserir campos depois da montagem. Medir o quadro atual sem acessar seu conteúdo.
      const sobreIframe = Array.from(document.querySelectorAll("main iframe")).some(iframe => colide(iframe.getBoundingClientRect()));
      setOculto(sobreIframe || elementos.some(elemento => {
        if (!colide(elemento.getBoundingClientRect())) return false;
        if (elemento.matches("a, button, input, select, textarea, summary")) return true;
        const range = document.createRange();
        range.selectNodeContents(elemento);
        return Array.from(range.getClientRects()).some(colide);
      }));
    };
    const agendar = () => { if (!frame) frame = requestAnimationFrame(atualizar); };
    const observer = new ResizeObserver(agendar);
    document.querySelectorAll("main, footer").forEach(elemento => observer.observe(elemento));
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    document.addEventListener("focusout", agendar);
    void document.fonts.ready.then(agendar);
    agendar();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      document.removeEventListener("focusout", agendar);
    };
  }, [pathname, paginaComAtalho]);
  if (!paginaComAtalho) return null;
  return (
    <a
      ref={atalho}
      aria-hidden={oculto}
      tabIndex={oculto ? -1 : 0}
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={(oculto ? "invisible opacity-0 pointer-events-none " : "") + "fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-brand-ink shadow-lg transition-transform hover:scale-105"}
    >
      <IconeWhatsApp className={"size-7 " + (oculto ? "invisible" : "")} />
    </a>
  );
}

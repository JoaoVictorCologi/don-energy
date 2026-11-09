"use client";

import dynamic from "next/dynamic";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { linksPrincipais, linkAtivo } from "@/lib/navegacao";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const MenuMobile = dynamic(() => import("./menu-mobile").then(module => module.MenuMobile), {
  ssr: false,
  loading: () => <span role="status" aria-label="Carregando menu" className="flex size-11 items-center justify-center rounded-md border border-current"><Menu aria-hidden="true" className="size-5" /></span>,
});

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuAtivado, setMenuAtivado] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  return (
    <header className={pathname === "/" ? "relative z-50 -mb-[var(--header-height)] shrink-0 bg-brand-green/90 text-brand-ink" : "relative z-50 shrink-0 bg-brand-green/90 text-brand-ink"}>
      {/* O recorte da marca tem fundo verde opaco. Atenue o verde na exibição do cabeçalho. */}
      <svg aria-hidden="true" className="pointer-events-none absolute size-0" focusable="false">
        <defs>
          <filter id="logo-sem-fundo-verde" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 -2.15 2.15 1.02 0" />
          </filter>
        </defs>
      </svg>
      <div className="site-shell flex items-center justify-between gap-4 py-[var(--header-py)]">
        <Link href="/" aria-label="Don Energy — página inicial" className="flex min-h-11 items-center rounded-sm"><Image src={siteConfig.logo.src} alt="Don Energy" width={siteConfig.logo.width} height={siteConfig.logo.height} loading="eager" className="h-[var(--header-logo-size)] w-auto object-contain [filter:url(#logo-sem-fundo-verde)]" /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 text-sm lg:flex">{linksPrincipais.map(link => <a key={link.href} href={link.href} aria-current={linkAtivo(pathname,link.href)?"page":undefined} className="inline-flex min-h-11 items-center rounded-sm font-medium underline-offset-8 hover:underline aria-[current=page]:underline">{link.label}</a>)}</nav>
        <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="site-button hidden lg:inline-flex">Falar no WhatsApp</a>
        <div className="lg:hidden">{menuAtivado ? <MenuMobile open={open} onOpenChange={setOpen} links={linksPrincipais} /> : <button type="button" aria-haspopup="dialog" aria-expanded={false} aria-label="Abrir menu" onPointerEnter={() => {void import("./menu-mobile");}} onFocus={() => {void import("./menu-mobile");}} onClick={() => {setMenuAtivado(true);setOpen(true);}} className="flex size-11 items-center justify-center rounded-md border border-current"><Menu aria-hidden="true" className="size-5" /></button>}</div>
      </div>
    </header>
  );
}

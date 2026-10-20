"use client";

import dynamic from "next/dynamic";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const MenuMobile = dynamic(() => import("./menu-mobile").then((module) => module.MenuMobile), {
  ssr: false,
  loading: () => <span role="status" aria-label="Carregando menu" className="flex size-11 items-center justify-center rounded-md border border-white/40"><Menu aria-hidden="true" className="size-5" /></span>,
});

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#obras", label: "Obras" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuAtivado, setMenuAtivado] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand-blue-header text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-[var(--header-py)]">
        <Link href="/" aria-label="Don Energy — página inicial" className="flex min-h-11 items-center gap-3 rounded-sm">
          <Image src={siteConfig.logo.src} alt="Don Energy — Energia Solar" width={siteConfig.logo.width} height={siteConfig.logo.height} loading="eager" className="h-[var(--header-logo-size)] w-auto object-contain" />
          <span className="text-sm font-semibold tracking-wide sm:text-base">Don Energy</span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium underline-offset-4 hover:underline">{link.label}</a>)}
        </nav>
        <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hidden min-h-11 items-center rounded-md bg-brand-orange px-4 text-sm font-semibold text-brand-ink hover:bg-brand-orange/90 md:inline-flex">Falar no WhatsApp</a>
        <div className="md:hidden">
          {menuAtivado ? <MenuMobile open={open} onOpenChange={setOpen} links={links} /> : (
            <button type="button" aria-haspopup="dialog" aria-expanded={false} aria-label="Abrir menu"
              onPointerEnter={() => { void import("./menu-mobile"); }}
              onFocus={() => { void import("./menu-mobile"); }}
              onClick={() => { setMenuAtivado(true); setOpen(true); }}
              className="flex size-11 items-center justify-center rounded-md border border-white/40">
              <Menu aria-hidden="true" className="size-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

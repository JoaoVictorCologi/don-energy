import type { Metadata, Viewport } from "next";
import { Sora, Inter, Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappFlutuante } from "@/components/whatsapp-flutuante";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site-config";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: SITE_URL (lib/site-config.ts) ainda é um placeholder até o
  // domínio de produção ser registrado.
  metadataBase: new URL(SITE_URL),
  title: "Don Energy — Energia Solar em Mococa e Região",
  description:
    "Soluções completas em energia solar para residências, comércios, propriedades rurais e usinas de investimento em Mococa-SP e região.",
  openGraph: {
    title: "Don Energy — Energia Solar em Mococa e Região",
    description:
      "Soluções completas em energia solar para residências, comércios, propriedades rurais e usinas de investimento em Mococa-SP e região.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Don Energy — Energia Solar",
      },
    ],
  },
};

// viewportFit: "cover" é o que permite env(safe-area-inset-bottom) resolver
// pra um valor real em iPhones com barra de gestos — usado pelo botão
// flutuante do WhatsApp (components/whatsapp-flutuante.tsx). Sem isso, o
// env() sempre resolve pra 0 silenciosamente, sem erro nenhum.
export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", sora.variable, inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <WhatsappFlutuante />
      </body>
    </html>
  );
}
const WHATSAPP_NUMBER = "5519996274747";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Don Energy e gostaria de saber mais sobre os serviços de energia solar.";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

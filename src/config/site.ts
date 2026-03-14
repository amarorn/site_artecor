export const SITE_CONFIG = {
  name: "Artecor",
  slogan: "Pintura e Manutenção Predial com Qualidade e Segurança",
  description:
    "Especialistas em pintura de prédios, casas, condomínios, limpeza de fachadas e serviços em altura. Qualidade, prazos e segurança garantidos.",
  phone: "5584996939057",
  phoneDisplay: "+55 84 99693-9057",
  email: "contato@artecor.com.br",
  address: "São Paulo, SP",
  whatsappMessage:
    "Olá, vim pelo site e gostaria de solicitar um orçamento.",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

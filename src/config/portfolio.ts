export type PortfolioFilter = "todos" | "pintura-predial" | "pintura-residencial" | "limpeza-fachada" | "antes-depois";

export const PORTFOLIO_FILTERS: { value: PortfolioFilter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "pintura-predial", label: "Pintura Predial" },
  { value: "pintura-residencial", label: "Pintura Residencial" },
  { value: "limpeza-fachada", label: "Limpeza de Fachada" },
  { value: "antes-depois", label: "Antes e Depois" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Edifício Comercial Centro",
    category: "pintura-predial",
    description: "Pintura completa da fachada e áreas comuns.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    location: "São Paulo, SP",
  },
  {
    id: 2,
    title: "Residência Unifamiliar",
    category: "pintura-residencial",
    description: "Pintura externa e muro.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    location: "Guarulhos, SP",
  },
  {
    id: 3,
    title: "Condomínio Residencial",
    category: "pintura-predial",
    description: "Fachada e áreas de lazer.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    location: "São Paulo, SP",
  },
  {
    id: 4,
    title: "Limpeza de Fachada em Vidro",
    category: "limpeza-fachada",
    description: "Limpeza profissional de fachada envidraçada.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    location: "São Paulo, SP",
  },
  {
    id: 5,
    title: "Antes e Depois - Fachada",
    category: "antes-depois",
    description: "Pintura e recuperação de fachada.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    location: "Osasco, SP",
  },
  {
    id: 6,
    title: "Casa de Alto Padrão",
    category: "pintura-residencial",
    description: "Pintura completa com acabamento premium.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    location: "Alphaville, SP",
  },
] as const;

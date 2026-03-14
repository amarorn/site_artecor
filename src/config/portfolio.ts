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
    title: "Limpeza de Fachada com Hidrojateamento",
    category: "limpeza-fachada",
    description: "Limpeza profissional de fachada com equipamento de alta pressão.",
    image: "/portfolio/portfolio-1.png",
    location: "",
  },
  {
    id: 2,
    title: "Pintura Predial com Andaime",
    category: "pintura-predial",
    description: "Obra de pintura predial com andaimes em prédio residencial.",
    image: "/portfolio/portfolio-2.png",
    location: "",
  },
  {
    id: 3,
    title: "Fachada Residencial",
    category: "pintura-residencial",
    description: "Detalhes de fachada em pintura residencial.",
    image: "/portfolio/portfolio-3.png",
    location: "",
  },
  {
    id: 4,
    title: "Pintura em Edifício",
    category: "pintura-predial",
    description: "Pintura de fachada em edifício de múltiplos andares.",
    image: "/portfolio/portfolio-4.png",
    location: "",
  },
  {
    id: 5,
    title: "Reforma de Fachada",
    category: "pintura-predial",
    description: "Trabalho de pintura em prédio com andaime montado.",
    image: "/portfolio/portfolio-5.png",
    location: "",
  },
  {
    id: 6,
    title: "Aplicação de Tinta com Rolo",
    category: "pintura-predial",
    description: "Equipe em execução de pintura externa.",
    image: "/portfolio/portfolio-6.png",
    location: "",
  },
] as const;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Galeria de projetos de pintura predial, residencial, limpeza de fachadas e antes e depois.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

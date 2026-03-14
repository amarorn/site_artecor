"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Pintura Predial - Edifício Centro",
    category: "pintura-predial",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: 2,
    title: "Fachada Residencial",
    category: "pintura-residencial",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 3,
    title: "Limpeza de Fachada",
    category: "limpeza-fachada",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62]">
            Portfólio
          </h2>
          <p className="mt-4 text-lg text-[#2F3640]/80 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos realizados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href="/portfolio" className="block group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-[#0A3D62] group-hover:text-[#F39C12] transition-colors">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#0A3D62] font-semibold hover:text-[#F39C12] transition-colors"
          >
            Ver portfólio completo →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

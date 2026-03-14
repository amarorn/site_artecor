"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_FILTERS,
  type PortfolioFilter,
} from "@/config/portfolio";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<PortfolioFilter>("todos");

  const filteredItems =
    filter === "todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <div>
      <section className="py-16 md:py-24 bg-[#0A3D62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Portfólio</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl">
            Conheça nossos projetos realizados em pintura e manutenção predial.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                  filter === f.value
                    ? "bg-[#0A3D62] text-white"
                    : "bg-gray-100 text-[#2F3640] hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredItems.map((item) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#0A3D62]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#2F3640]/80">
                        {item.description}
                      </p>
                      {item.location && (
                        <p className="mt-2 text-xs text-[#2F3640]/60">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <p className="text-center text-[#2F3640]/80 py-12">
                Nenhum projeto encontrado para este filtro.
              </p>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

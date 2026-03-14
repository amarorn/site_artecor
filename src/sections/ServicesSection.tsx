"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/config/services";
import { WHATSAPP_LINK } from "@/config/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62]">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-[#2F3640]/80 max-w-2xl mx-auto">
            Soluções completas em pintura e manutenção predial com profissionais
            especializados
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0A3D62]/10 flex items-center justify-center mb-4">
                <span className="text-[#0A3D62] text-xl font-bold">
                  {service.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#0A3D62]">
                {service.title}
              </h3>
              <p className="mt-2 text-[#2F3640]/80">{service.shortDesc}</p>
              <Link
                href={`/servicos#${service.id}`}
                className="mt-4 inline-flex items-center text-[#F39C12] font-medium hover:text-[#0A3D62]"
              >
                Saiba mais →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F39C12] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E08E0B] transition-colors"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}

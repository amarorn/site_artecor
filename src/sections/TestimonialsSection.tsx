"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "João Silva",
    role: "Síndico - Condomínio Residencial",
    text: "Excelente trabalho! A equipe foi muito profissional, cumpriu os prazos e o resultado superou nossas expectativas.",
  },
  {
    name: "Maria Santos",
    role: "Proprietária",
    text: "Recomendo a Artecor. Pintura impecável e atendimento de primeira. Voltarei a contratar para manutenção.",
  },
  {
    name: "Carlos Oliveira",
    role: "Administrador Predial",
    text: "Serviços em altura realizados com total segurança. Equipe qualificada e materiais de qualidade.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62]">
            Depoimentos
          </h2>
          <p className="mt-4 text-lg text-[#2F3640]/80 max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nós
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <p className="text-[#2F3640] italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4">
                <p className="font-semibold text-[#0A3D62]">{t.name}</p>
                <p className="text-sm text-[#2F3640]/70">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

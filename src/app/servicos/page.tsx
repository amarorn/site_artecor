import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/config/services";
import { SERVICES_DETAIL } from "@/config/services-detail";
import { WHATSAPP_LINK } from "@/config/site";

export const metadata = {
  title: "Serviços",
  description:
    "Pintura predial, residencial, condomínios, limpeza de fachadas e grades. Serviços em altura com segurança e qualidade.",
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";

export default function ServicosPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-[#0A3D62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Nossos Serviços</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl">
            Soluções completas em pintura e manutenção predial. Qualidade,
            segurança e compromisso com prazos.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES.map((service) => {
            const detail = SERVICES_DETAIL[service.slug as keyof typeof SERVICES_DETAIL];
            if (!detail) return null;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">
                      {detail.title}
                    </h2>
                    <p className="mt-4 text-[#2F3640]/80 leading-relaxed">
                      {detail.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {detail.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-[#2F3640]"
                        >
                          <span className="text-[#F39C12]">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                  <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
                    <Image
                      src={DEFAULT_IMAGE}
                      alt={detail.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0A3D62]">
            Não encontrou o que precisa?
          </h2>
          <p className="mt-2 text-[#2F3640]/80">
            Entre em contato e conte-nos sobre seu projeto.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: "Sobre",
  description: `Conheça a ${SITE_CONFIG.name}. História, missão, valores e compromisso com segurança em obras de pintura e manutenção predial.`,
};

export default function SobrePage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-[#0A3D62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Sobre nós</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl">
            Compromisso com qualidade, prazos e segurança desde o primeiro
            contato.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0A3D62]">Nossa história</h2>
            <p className="mt-4 text-[#2F3640]/80 leading-relaxed">
              A {SITE_CONFIG.name} nasceu da experiência de profissionais
              especializados em pintura e manutenção predial. Ao longo dos anos,
              desenvolvemos expertise em obras complexas, incluindo serviços em
              altura, pintura de edifícios e limpeza de fachadas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A3D62]">Missão</h2>
            <p className="mt-4 text-[#2F3640]/80 leading-relaxed">
              Oferecer serviços de pintura e manutenção predial com excelência,
              cumprindo prazos, garantindo segurança e superando expectativas
              dos clientes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A3D62]">Valores</h2>
            <ul className="mt-4 space-y-3 text-[#2F3640]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#F39C12] mt-0.5">•</span>
                <span>Qualidade no serviço</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F39C12] mt-0.5">•</span>
                <span>Cumprimento de prazos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F39C12] mt-0.5">•</span>
                <span>Segurança no trabalho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F39C12] mt-0.5">•</span>
                <span>Responsabilidade com o cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F39C12] mt-0.5">•</span>
                <span>Experiência em serviços complexos em altura</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A3D62]">
              Compromisso com segurança
            </h2>
            <p className="mt-4 text-[#2F3640]/80 leading-relaxed">
              Em todas as obras, seguimos rigorosamente as normas de segurança do
              trabalho, especialmente a NR-35 para trabalhos em altura. Nossa
              equipe é treinada e utiliza equipamentos de proteção individual e
              coletiva adequados a cada situação.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

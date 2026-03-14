import Link from "next/link";
import { SITE_CONFIG, WHATSAPP_LINK } from "@/config/site";
import { SERVICES } from "@/config/services";

export function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {SITE_CONFIG.slogan}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servicos#${s.id}`}
                    className="text-white/90 hover:text-white text-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-white/90 hover:text-white text-sm">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-white/90 hover:text-white text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white/90 hover:text-white text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          {SITE_CONFIG.name} - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}

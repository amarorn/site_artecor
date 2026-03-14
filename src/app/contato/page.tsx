import { ContatoForm } from "./ContatoForm";

export const metadata = {
  title: "Contato",
  description:
    "Entre em contato para solicitar orçamento de pintura predial, residencial e limpeza de fachadas.",
};

export default function ContatoPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-[#0A3D62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contato</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl">
            Entre em contato para solicitar um orçamento ou tirar dúvidas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContatoForm />
        </div>
      </section>
    </div>
  );
}

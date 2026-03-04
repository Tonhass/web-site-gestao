import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle2, BarChart3, Users2, ShieldCheck } from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton'; // Importa aqui!
import { COMPANY } from '@/constants/company';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Padding top para o header fixo não cobrir o conteúdo */}
        
        {/* Hero Section com Gradiente */}
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-green-900 uppercase bg-green-50 rounded-full">
                Contabilidade Digital & Humana
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Sua empresa em <span className="text-green-900">boas mãos.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Reduza impostos, organize seu financeiro e foque no que você faz de melhor: crescer o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-green-900 text-black px-8 py-4 rounded-xl font-bold text-lg hover:text-green-600 transition-all transform hover:-translate-y-1 shadow-xl shadow-green-100">
                  Chamar no WhatsApp
                </button>
              </div>
            </div>
            
            {/* Elemento Decorativo (Simulando uma imagem/dashboard) */}
            <div className="relative">
              <div className=" rounded-3xl shadow-2xl rotate-3 flex items-center justify-center">
                  <img src="/img_predio.jpg" width={1600} />
              </div>
            </div>
          </div>
        </section>

        {/* Cards de Serviços com Hover */}
        <section id="servicos" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Especialistas em você</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos soluções completas para todas as fases da sua jornada empreendedora.</p>
          </div>

          {/* Cards */}
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {COMPANY.services.map((service, index) => (
            <div key={index} className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
            ))}
          </div>

        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
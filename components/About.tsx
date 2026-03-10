import Image from 'next/image';
import { COMPANY } from '@/constants/company';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-10 md:py-24 bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Imagem com efeito decorativo */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-slate-100 rounded-3xl -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/foto_equipe-.jpeg" 
                alt="Escritório moderno"
                width={800}
                height={600}
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* Lado Direito: Texto e Stats */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-green-900 font-semibold tracking-wide uppercase mb-3">Nossa História</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Mais que contadores, somos parceiros do seu <span className="text-green-900">crescimento.</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Fundada com a missão de desmistificar a burocracia brasileira, a {COMPANY.shortName} une 
                tecnologia de ponta com um atendimento humano e personalizado. Acreditamos que 
                cada número conta uma história e estamos aqui para garantir que a sua seja de sucesso.
              </p>
            </div>

            {/* Lista de diferenciais rápidos */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Atendimento Digital', 'Consultoria Proativa', 'Segurança de Dados', 'Foco em Resultado'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle size={20} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {COMPANY.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-green-900">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
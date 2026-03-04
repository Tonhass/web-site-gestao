import Image from 'next/image';
import { COMPANY } from '@/constants/company'; // Importa a constante
import { Phone, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <Image 
            src="/sub_logo_gestao.png"
            alt="Logo Gestao"
            width={120}      // Largura visual
            height={120}     // Altura visual
            priority        // Isso avisa ao Next para carregar a logo primeiro que tudo
            className="object-contain"
          />
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            {COMPANY.name}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition">Início</a>
          <a href="#servicos" className="hover:text-blue-600 transition">Serviços</a>
          <a href="#sobre" className="hover:text-blue-600 transition">Sobre Nós</a>
          <button className="bg-green-900 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-green-600 transition shadow-lg shadow-blue-200">
            <Phone size={16} />
            Falar com Consultor
          </button>
        </nav>

        <div className="md:hidden">
          <Menu className="text-slate-800" />
        </div>
      </div>
    </header>
  );
}
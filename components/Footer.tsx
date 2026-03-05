import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { COMPANY } from '@/constants/company'; // Importa a constante

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Coluna 1: Sobre */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <span className="text-xl font-bold tracking-tight">{COMPANY.name}</span>
          </div>
          <p className="text-sm leading-relaxed">
            Especialistas em contabilidade consultiva, transformando números em estratégias de crescimento para o seu negócio desde 2022.
          </p>
          <div className="flex gap-4">
            <a href={COMPANY.socials.instagram} target='blanck'><Instagram size={20} className="hover:text-blue-400 cursor-pointer transition" /></a>
            {/* <Linkedin size={20} className="hover:text-blue-400 cursor-pointer transition" /> */}
            {/* <Facebook size={20} className="hover:text-blue-400 cursor-pointer transition" /> */}
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-6">Navegação</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition">Início</a></li>
            <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
            <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato Escrito */}
        <div className="space-y-4">
          <h4 className="text-white font-bold mb-6">Contato</h4>
          <div className="flex items-start gap-3 text-sm">
            <MapPin size={20} className="text-blue-500 shrink-0" />
            <span>{COMPANY.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone size={20} className="text-blue-500 shrink-0" />
            <span>{COMPANY.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail size={20} className="text-blue-500 shrink-0" />
            <span>{COMPANY.email}</span>
          </div>
        </div>
        {/* Coluna 4: Mapa Google */}
        <div className="h-48 lg:h-full min-h-[200px] rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shadow-lg">
          <iframe
            src={COMPANY.mapIframe}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Linha Final: Copyright */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-center text-xs">
        <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
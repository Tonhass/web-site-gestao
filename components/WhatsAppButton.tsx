'use client'; // Importante: como usamos eventos de scroll, este é um Client Component

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/constants/company'; // Importa a constante

export function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);

  // Lógica para mostrar o botão apenas após scroll de 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpeza do evento
  }, []);

  const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${COMPANY.mensagemApiWhatsapp}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2 
        bg-green-500 text-white 
        p-4 rounded-full shadow-2xl
        transition-all duration-500 transform
        hover:bg-green-600 hover:scale-110
        ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
    >
      <span className="font-semibold px-2 hidden md:inline">Falar com Especialista</span>
      <MessageCircle size={28} fill="currentColor" />
      
      {/* Ping de animação (aquele efeito de "atenção" no botão) */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
      </span>
    </a>
  );
}
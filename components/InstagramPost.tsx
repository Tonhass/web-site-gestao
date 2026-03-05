'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface InstagramPostProps {
  url: string;
}

export function InstagramPost({ url }: InstagramPostProps) {
  
  // Função para processar o embed toda vez que o componente montar
  useEffect(() => {
    // @ts-ignore - O Instagram injeta o objeto 'instgrm' no window
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="flex justify-center w-full overflow-hidden rounded-xl border border-slate-100 shadow-sm bg-white p-4">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: '100%', margin: '0 auto' }}
      >
        {/* Link reserva caso o script falhe */}
        <a href={url} target="_blank" rel="noopener noreferrer">
          Ver postagem no Instagram
        </a>
      </blockquote>

      {/* Carrega o script oficial do Instagram de forma otimizada */}
      <Script 
        src="https://www.instagram.com/embed.js" 
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.instgrm.Embeds.process();
        }}
      />
    </div>
  );
}
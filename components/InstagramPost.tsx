'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface InstagramPostProps {
  url: string;
}

export function InstagramPost({ url }: InstagramPostProps) {
  
  // Função para processar o embed toda vez que o componente montar
useEffect(() => {
  const ig = (window as any).instgrm;

  if (ig) {
    ig.Embeds.process();
  }
}, [url]);

  return (
    <div className="self-start flex justify-center overflow-hidden p-4 min-w-[90%] max-h-[550px]">
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
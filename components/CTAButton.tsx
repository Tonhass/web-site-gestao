import { getWhatsAppUrl } from '@/constants/company';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  message?: string;
  className?: string; // Para podermos customizar a cor/tamanho de fora
}

export function CTAButton({ children, message, className }: CTAButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`

        ${className || ''}
      `}
    >
      {children}
    </a>
  );
}
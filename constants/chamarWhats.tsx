import { COMPANY } from '@/constants/company'; // Importa a constante

export function ChamarWhats() {

  const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${COMPANY.mensagemApiWhatsapp}`;

  return (
    <a
      href={url}
    />
  );
}
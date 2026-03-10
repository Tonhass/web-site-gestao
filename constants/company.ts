
export interface Service {
  title: string;
  description: string;
}

export interface Stats {
  label: string;
  value: string;
}

export interface CompanyConfig {
  name: string;
  shortName: string;
  phone: string;
  whatsappNumber: string;
  mensagemApiWhatsapp: string;
  email: string;
  address: string;
  addressLink: string;
  mapIframe: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
  services: Service[];
  stats: Stats[];
}

export const COMPANY: CompanyConfig = {
  name: "Gestão Contabilidade e Associados",
  shortName: "Gestão Contabilidade",
  phone: "(68) 99206-4774",
  whatsappNumber: "6892064774",
  mensagemApiWhatsapp: "Olá, vim pelo site. Poderia me ajudar?",
  email: "gcontabilidade01@gmail.com",
  address: "R. Frei Caneca, 1468 - Doca Furtado, Rio Branco - AC",
  addressLink: "https://maps.app.goo.gl/dsbAQfqFKTVJzBH37",
  mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4661.243824817969!2d-67.83422732496918!3d-9.96996229013389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8ddb9fce34a3%3A0xe314a26c5ae99dc7!2sGest%C3%A3o%20Contabilidade%20e%20Associados!5e1!3m2!1spt-BR!2sbr!4v1772657950063!5m2!1spt-BR!2sbr",
  socials: {
    instagram: "https://www.instagram.com/gestaocontabil01",
    linkedin: "https://linkedin.com/company/",
    facebook: "https://facebook.com/",
  },
  services: [
    {
      title: "Abertura de Empresa",
      description: "Abrimos sua empresa e cuidamos de todo o processo de CNPJ, alvarás e enquadramento tributário."
    },
    {
      title: "Alteração de Empresa",
      description: "Alteramos seu CNPJ com agilidade."
    },
    {
      title: "Gestão Mensal (BPO)",
      description: "Terceirização financeira e contábil completa para sua tranquilidade."
    },
    {
      title: "Consultoria Tributária",
      description: "Análise profunda para reduzir seus impostos de forma legal."
    },
    {
      title: "Imposto de Renda",
      description: "Planejamento e declaração para pessoa física e jurídica."
    },
        {
      title: "Consultoria Tributária",
      description: "Análise profunda para reduzir seus impostos de forma legal."
    }
  ],
  stats: [
    { 
      label: 'Anos de Experiência', value: '20+' 
    },
    { 
      label: 'Clientes Atendidos', value: '950+' 
    },
    { 
      label: 'Empresas Abertas', value: '1300+' 
    },
    { 
      label: 'Impostos Recuperados', value: 'R$ 5M' 
    }
  ]

};

export const getWhatsAppUrl = (message?: string) => {
  const defaultMessage = "Olá! Gostaria de falar com um especialista.";
  const text = encodeURIComponent(message || defaultMessage);
return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
};
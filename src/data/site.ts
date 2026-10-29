export interface NavItem {
  label: string;
  href: string;
}

export interface MenuNavItem extends NavItem {
  index: string;
}

export interface Step {
  number: string;
  title: string;
  text: string;
}

export interface Therapy {
  symptom: string;
  title: string;
  text: string;
  linkLabel: string;
}

export type PortraitVariant = 'sage' | 'clay' | 'moss';

export interface TeamMember {
  name: string;
  crp: string;
  area: string;
  tags: string[];
  initial: string;
  portrait: PortraitVariant;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocalFact {
  term: string;
  description: string;
}

export interface CredFact {
  value: string;
  label: string;
  small?: boolean;
}

export const primaryNav: NavItem[] = [
  { label: 'A Casulo', href: '#casulo' },
  { label: 'Terapias', href: '#terapias' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const menuNav: MenuNavItem[] = [
  { index: '01', label: 'A Casulo', href: '#casulo' },
  { index: '02', label: 'Terapias', href: '#terapias' },
  { index: '03', label: 'Equipe', href: '#equipe' },
  { index: '04', label: 'Dúvidas', href: '#duvidas' },
  { index: '05', label: 'Onde estamos', href: '#local' },
];

export const footerNav: NavItem[] = [
  { label: 'A Casulo', href: '#casulo' },
  { label: 'Terapias', href: '#terapias' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Conteúdo', href: '#' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const steps: Step[] = [
  {
    number: '01',
    title: 'Conversa de 30 minutos',
    text: 'Um encontro online ou na clínica. Você conta o que quiser, no ritmo que conseguir — não precisa explicar tudo de uma vez.',
  },
  {
    number: '02',
    title: 'Combinamos o formato',
    text: 'Juntos, definimos a abordagem, a frequência e o valor. Se preferir, seguimos por mensagem antes de marcar a primeira sessão.',
  },
  {
    number: '03',
    title: 'Acompanhamento',
    text: 'Sessões semanais ou quinzenais com o mesmo psicólogo. O ritmo acompanha a sua vida, não o contrário.',
  },
];

export const therapies: Therapy[] = [
  {
    symptom: '“acordar já cansado, com o peito apertado”',
    title: 'Ansiedade',
    text: 'Quando a cabeça não desliga e o corpo vive em alerta, o acompanhamento ajuda a reconhecer o que acontece e a encontrar outro jeito de responder.',
    linkLabel: 'Entender o acompanhamento',
  },
  {
    symptom: '“trabalhar muito e sentir que nunca é suficiente”',
    title: 'Burnout',
    text: 'O cansaço que não passa com uma noite de sono costuma pedir uma pausa maior. A terapia ajuda a olhar para os limites e para o que sustenta essa rotina.',
    linkLabel: 'Entender o acompanhamento',
  },
  {
    symptom: '“a perda recente e as datas que voltam todo ano”',
    title: 'Luto',
    text: 'Cada luto tem o seu tempo. O acompanhamento oferece um lugar para a saudade existir sem precisar ser resolvida às pressas.',
    linkLabel: 'Entender o acompanhamento',
  },
  {
    symptom: '“conversas que sempre terminam igual”',
    title: 'Relações',
    text: 'Para casais, famílias e vínculos que repetem o mesmo impasse. A terapia cria espaço para ouvir e ser ouvido sem ataque.',
    linkLabel: 'Entender o acompanhamento',
  },
];

export const credFacts: CredFact[] = [
  { value: '12', label: 'psicólogos na equipe' },
  { value: '9 anos', label: 'de clínica na Vila Madalena' },
  { value: 'CRP 06/12345', label: 'registro no Conselho Regional', small: true },
];

export const team: TeamMember[] = [
  {
    name: 'Helena Prado',
    crp: 'CRP 06/48213',
    area: 'Ansiedade, burnout e transições de carreira.',
    tags: ['Ansiedade', 'Burnout'],
    initial: 'H',
    portrait: 'sage',
  },
  {
    name: 'Marcos Bittencourt',
    crp: 'CRP 06/39117',
    area: 'Casais, famílias e comunicação.',
    tags: ['Casais', 'Famílias'],
    initial: 'M',
    portrait: 'clay',
  },
  {
    name: 'Nina Albuquerque',
    crp: 'CRP 06/55802',
    area: 'Luto, perdas e saúde da mulher.',
    tags: ['Luto', 'Saúde da mulher'],
    initial: 'N',
    portrait: 'moss',
  },
];

export const faq: FaqItem[] = [
  {
    question: 'Quanto custa uma sessão?',
    answer:
      'A primeira conversa é gratuita. O valor da sessão varia conforme o profissional e a frequência. Tudo é acertado antes de qualquer compromisso, sem surpresa na fatura.',
  },
  {
    question: 'Vocês atendem convênio?',
    answer:
      'Não atendemos convênios. Emitimos recibo para reembolso, caso o seu plano ofereça essa possibilidade.',
  },
  {
    question: 'O que eu falar é sigiloso?',
    answer:
      'Sim. O sigilo é um dever ético do psicólogo e vale para tudo o que for dito nas sessões, com as exceções previstas em lei.',
  },
  {
    question: 'Com que frequência acontecem as sessões?',
    answer:
      'Em geral, uma vez por semana. Em alguns casos, quinzenal. A frequência é definida junto, considerando o que você procura e a sua rotina.',
  },
  {
    question: 'O atendimento online é diferente?',
    answer:
      'Não. A sessão online tem a mesma duração e o mesmo sigilo, em uma plataforma segura. Você só precisa de um lugar reservado e de uma conexão estável.',
  },
  {
    question: 'Preciso avisar se não puder ir?',
    answer:
      'Sim, com 24 horas de antecedência não há cobrança. Imprevistos acontecem — é só avisar pelo WhatsApp ou por e-mail.',
  },
];

export const localFacts: LocalFact[] = [
  {
    term: 'Horários',
    description: 'Segunda a sexta, 8h às 20h · Sábado, 8h às 13h',
  },
  {
    term: 'Estacionamento',
    description: 'Convênio com o estacionamento da Rua das Acácias, 200 — a 40 metros.',
  },
  {
    term: 'Acessibilidade',
    description: 'Entrada sem escadas, banheiro adaptado e atendimento em Libras sob agendamento.',
  },
];

export const contact = {
  addressLine1: 'Rua das Acácias, 214',
  addressLine2: 'Vila Madalena — São Paulo/SP',
  menuAddress: 'Rua das Acácias, 214 — Vila Madalena, São Paulo/SP',
  email: 'oi@casulo.com.br',
  emailHref: 'mailto:oi@casulo.com.br',
  scheduleHref: 'mailto:oi@casulo.com.br?subject=Primeira%20conversa',
  crp: 'CRP 06/12345',
} as const;

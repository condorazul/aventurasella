/**
 * Blog posts · PT · metadados para a versão portuguesa de cada artigo.
 *
 * Estrutura paralela a blog-posts.ts (ES) e blog-posts-en.ts. Mesma forma,
 * cópia traduzida.
 * Usado por:
 *  - BlogPostLayout quando currentLocale === 'pt'
 *  - hub /pt/blog/
 *  - geração do sitemap para PT
 */

export interface BlogPostPt {
  slug: string;
  title: string;
  h1: string;
  description: string;
  excerpt: string;
  keyword: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  category: string;
  relatedPages: { label: string; href: string }[];
  relatedPosts?: string[];
}

export const BLOG_POSTS_PT: BlogPostPt[] = [
  {
    slug: 'que-levar-descida-do-sella',
    title: 'O que levar para a descida do Sella · guia completo (2026)',
    h1: 'O que levar para a descida do Sella',
    description: 'O que levar para a descida do Sella: roupa, calçado, comida, telemóvel, proteção solar. A lista completa 2026 de uma equipa com 25 anos em Arriondas.',
    excerpt: 'A lista definitiva do que levar (e do que deixar em casa) antes de remar no Sella. 25 anos resumidos num guia prático.',
    keyword: 'que levar descida sella',
    image: 'includes-b',
    imageAlt: 'Equipamento da descida do Sella — canoa, remo duplo, coletes salva-vidas e bidão estanque',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Preparação',
    relatedPages: [
      { label: 'O que está incluído na descida', href: '/pt/reserva-premium/' },
      { label: 'Preços e condições',             href: '/pt/precos/' },
      { label: 'Como chegar',                    href: '/pt/como-chegar/' },
    ],
    relatedPosts: ['melhor-hora-descida-do-sella', 'descida-do-sella-com-criancas-pequenas'],
  },
  {
    slug: 'melhor-hora-descida-do-sella',
    title: 'Melhor hora do dia para descer o Sella · comparativo',
    h1: 'Melhor hora para descer o Sella',
    description: 'A melhor hora do dia para a descida do Sella segundo o caudal, a temperatura e a afluência. Tabela horária real de quem está há anos no rio.',
    excerpt: 'Primeira hora ou depois de almoço? Saímos quase todos os dias do ano — contamos qual horário muda a experiência e porquê.',
    keyword: 'melhor hora descida sella',
    image: 'blog-mejorhora-cover',
    imageAlt: 'Fim do percurso da descida do Sella em Fríes — luz de tarde sobre o rio',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Planeamento',
    relatedPages: [
      { label: 'Melhor época',     href: '/pt/melhor-epoca/' },
      { label: 'Quanto tempo dura', href: '/pt/quanto-tempo-dura/' },
      { label: 'Percurso e mapa',  href: '/pt/percurso-e-mapa/' },
    ],
    relatedPosts: ['que-levar-descida-do-sella', 'quiosques-descida-do-sella'],
  },
  {
    slug: 'descida-do-sella-com-criancas-pequenas',
    title: 'Descida do Sella com crianças pequenas · guia real',
    h1: 'Descida do Sella com crianças pequenas',
    description: 'Descida do Sella com crianças pequenas: idade mínima, altura, o que levar, como organizar o dia. Guia real de quem desce o rio com famílias todas as épocas.',
    excerpt: 'Idade mínima, altura, distância realista, piquenique e os quatro medos típicos de qualquer família — resolvemos em 90 segundos antes de sair.',
    keyword: 'descida sella criancas pequenas',
    image: 'con-peques',
    imageAlt: 'Família com crianças pequenas a descer o rio Sella em canoa',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 9,
    category: 'Família',
    relatedPages: [
      { label: 'Descida com crianças', href: '/pt/com-criancas/' },
      { label: 'Quanto tempo dura',    href: '/pt/quanto-tempo-dura/' },
      { label: 'Preços por idade',     href: '/pt/precos/' },
    ],
    relatedPosts: ['que-levar-descida-do-sella', 'melhor-hora-descida-do-sella'],
  },
  {
    slug: 'pozo-del-arco-sella',
    title: 'Pozo del Arco · a melhor praia fluvial do Sella',
    h1: 'Pozo del Arco: a praia fluvial do Sella',
    description: 'Pozo del Arco: como chegar, o que encontrar, porque é a melhor praia fluvial do Sella. Aparece na descida entre Arriondas e Toraño — km 3,5.',
    excerpt: 'Águas turquesas, areia fina, uma ponte medieval ao fundo. O recanto que transforma uma descida numa tarde de postal.',
    keyword: 'pozo del arco sella',
    image: 'pozo-del-arco',
    imageAlt: 'Pozo del Arco — praia fluvial no rio Sella com águas cristalinas',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 6,
    category: 'Lugares do Sella',
    relatedPages: [
      { label: 'Percurso e mapa',  href: '/pt/percurso-e-mapa/' },
      { label: 'Melhor época',     href: '/pt/melhor-epoca/' },
      { label: 'Quanto tempo dura', href: '/pt/quanto-tempo-dura/' },
    ],
    relatedPosts: ['quiosques-descida-do-sella', 'melhor-hora-descida-do-sella'],
  },
  {
    slug: 'historia-descida-do-sella',
    title: 'História da descida do Sella · desde 1929',
    h1: 'História da descida do Sella',
    description: 'A história da descida do Sella desde 1929: Dionisio de la Huerta, a primeira canoa, a Descida Internacional e como se tornou Festa de Interesse Turístico Internacional.',
    excerpt: '1929. Dionisio de la Huerta e quatro amigos lançam-se ao Sella com uma canoa improvisada. O que começou como uma aposta foi declarado Festa de Interesse Turístico Internacional em 1980.',
    keyword: 'historia descida sella',
    image: 'blog-historia-cover',
    imageAlt: 'Descida Internacional do Sella · canoístas no rio durante a competição oficial',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 10,
    category: 'História',
    relatedPages: [
      { label: 'Descida Internacional do Sella', href: '/pt/descida-internacional-do-sella/' },
      { label: 'Quem somos',                     href: '/pt/quem-somos/' },
      { label: 'Percurso e mapa',                href: '/pt/percurso-e-mapa/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'quiosques-descida-do-sella'],
  },
  {
    slug: 'quiosques-descida-do-sella',
    title: 'Quiosques do Sella · o que provar em cada um',
    h1: 'Quiosques da descida do Sella',
    description: 'Os 6 quiosques da descida do Sella: Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. O que pedir, onde fica cada um, e o favorito da casa.',
    excerpt: 'Seis paragens, seis momentos diferentes. Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. O guia honesto.',
    keyword: 'quiosques descida sella',
    image: 'blog-chiringuitos-cover',
    imageAlt: 'Quiosque junto ao rio Sella · uma das paragens típicas da descida turística',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Rota',
    relatedPages: [
      { label: 'Percurso e mapa',  href: '/pt/percurso-e-mapa/' },
      { label: 'Quanto tempo dura', href: '/pt/quanto-tempo-dura/' },
      { label: 'O que está incluído', href: '/pt/reserva-premium/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'melhor-hora-descida-do-sella'],
  },
  {
    slug: 'cansa-descida-do-sella',
    title: 'A descida do Sella cansa muito? Resposta real',
    h1: 'A descida do Sella cansa muito?',
    description: 'A descida do Sella cansa? A resposta honesta de quem está há 25 anos a remar: não é um desporto, é um passeio. O que esperar fisicamente segundo idade e forma.',
    excerpt: 'Pergunta real do balcão. A resposta curta é "não". A longa, melhor lê-la antes de reservar: não é um desporto, é um passeio com remo.',
    keyword: 'cansa descida sella',
    image: 'canoa_sola',
    imageAlt: 'Descida do Sella em canoa — ritmo tranquilo pelo rio',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Preparação',
    relatedPages: [
      { label: 'Quanto tempo dura', href: '/pt/quanto-tempo-dura/' },
      { label: 'Percurso e mapa',   href: '/pt/percurso-e-mapa/' },
      { label: 'Com crianças',      href: '/pt/com-criancas/' },
    ],
    relatedPosts: ['que-levar-descida-do-sella', 'melhor-hora-descida-do-sella'],
  },
  {
    slug: 'descida-do-sella-grupos-despedidas',
    title: 'Descida do Sella em grupo · despedidas e empresas',
    h1: 'Descida do Sella em grupo',
    description: 'Descida do Sella em grupo: despedidas de solteiro/a, aniversários, empresas, grupos de amigos. Organização, preços, piquenique e recomendações reais.',
    excerpt: 'Despedidas de solteira, empresas, aniversários, grupos de amigos. Como organizamos o dia para que toda a gente desfrute, sem importar o nível de cada um.',
    keyword: 'descida sella grupo despedida',
    image: 'blog-grupos-cover',
    imageAlt: 'Grupo de despedida na descida do Sella — canoas e boa onda em Arriondas',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Planos',
    relatedPages: [
      { label: 'Reserva Premium', href: '/pt/reserva-premium/' },
      { label: 'Preços',          href: '/pt/precos/' },
      { label: 'Contacto',        href: '/pt/contacto/' },
    ],
    relatedPosts: ['quiosques-descida-do-sella', 'que-levar-descida-do-sella'],
  },
  {
    slug: 'o-que-fazer-apos-descida-do-sella-ribadesella',
    title: 'O que fazer após a descida do Sella · Ribadesella e arredores',
    h1: 'O que fazer após a descida do Sella',
    description: 'O que visitar após a descida do Sella: Ribadesella, Cangas de Onís, Lastres, Covadonga. Planos de tarde e noite para completar o dia nas Astúrias.',
    excerpt: 'Já desceste o Sella. São 15:00, estás tomado banho e tens tarde pela frente. Cinco planos reais para completar o dia no oriente das Astúrias.',
    keyword: 'que ver ribadesella apos descida',
    image: 'blog-despues-cover',
    imageAlt: 'Santuário de Covadonga · um dos planos recomendados após a descida do Sella no oriente asturiano',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Astúrias',
    relatedPages: [
      { label: 'Como chegar',     href: '/pt/como-chegar/' },
      { label: 'Percurso e mapa', href: '/pt/percurso-e-mapa/' },
      { label: 'Melhor época',    href: '/pt/melhor-epoca/' },
    ],
    relatedPosts: ['quiosques-descida-do-sella', 'historia-descida-do-sella'],
  },
  {
    slug: 'onde-ficar-perto-descida-do-sella',
    title: 'Onde ficar perto da descida do Sella · Arriondas',
    h1: 'Onde ficar perto da descida do Sella',
    description: 'Onde dormir perto da descida do Sella: hotéis, casas rurais, apartamentos e campismo em Arriondas e arredores. Como escolher segundo família, casal ou grupo.',
    excerpt: 'Antes ou depois da descida toca dormir perto. Tipos de alojamento em Arriondas e arredores, como escolher e em que reparar. Nós não reservamos — só orientamos.',
    keyword: 'alojamento arriondas descida sella',
    image: 'blog-alojamiento-inline',
    imageAlt: 'Hotel rural asturiano perto da descida do Sella · alojamento com encanto a poucos quilómetros de Arriondas',
    datePublished: '2026-04-24',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Planeamento',
    relatedPages: [
      { label: 'Como chegar',     href: '/pt/como-chegar/' },
      { label: 'Melhor época',    href: '/pt/melhor-epoca/' },
      { label: 'Contacto',        href: '/pt/contacto/' },
    ],
    relatedPosts: ['o-que-fazer-apos-descida-do-sella-ribadesella', 'melhor-hora-descida-do-sella'],
  },
];

/** Helper · devolve um artigo por slug */
export function getPostBySlugPt(slug: string): BlogPostPt | undefined {
  return BLOG_POSTS_PT.find(p => p.slug === slug);
}

/** Helper · devolve artigos relacionados a partir de um slug atual */
export function getRelatedPostsPt(currentSlug: string, limit = 2): BlogPostPt[] {
  const current = getPostBySlugPt(currentSlug);
  if (current?.relatedPosts?.length) {
    return current.relatedPosts
      .map(slug => getPostBySlugPt(slug))
      .filter((p): p is BlogPostPt => !!p)
      .slice(0, limit);
  }
  return BLOG_POSTS_PT.filter(p => p.slug !== currentSlug).slice(0, limit);
}

/** Formatar ISO → "23 de abril de 2026" */
export function formatDatePt(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return `${d} de ${months[m - 1]} de ${y}`;
}

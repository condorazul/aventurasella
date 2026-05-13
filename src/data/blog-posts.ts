/**
 * Blog posts · metadata compartido entre hub (/blog/) y cada entrada individual.
 *
 * Autoritativo para:
 *  - tarjetas del listado en /blog/
 *  - schema BlogPosting en cada entrada
 *  - sitemap generation
 *  - related posts (siblings) en el footer de cada artículo
 *
 * Cada entrada vive en src/pages/blog/<slug>.astro con el contenido completo.
 * Este archivo NO contiene el cuerpo del artículo, solo la metadata.
 */

export interface BlogPost {
  /** Slug URL · `/blog/<slug>/` */
  slug: string;
  /** Title SEO (≤ 60 chars recomendado) */
  title: string;
  /** H1 de la entrada (puede ser distinto del title SEO) */
  h1: string;
  /** Meta description (140-160 chars recomendado) */
  description: string;
  /** Excerpt para la tarjeta del hub */
  excerpt: string;
  /** Keyword principal long-tail */
  keyword: string;
  /** Imagen de portada (basename, sin extensión · debe existir en /images/optimized/) */
  image: string;
  /** Alt de la imagen de portada */
  imageAlt: string;
  /** Fecha de publicación (ISO 8601 · YYYY-MM-DD) */
  datePublished: string;
  /** Fecha de última modificación (ISO 8601) */
  dateModified: string;
  /** Tiempo de lectura estimado en minutos */
  readingTime: number;
  /** Categoría editorial para la tarjeta */
  category: string;
  /** Páginas hermanas del clúster a las que enlazar desde esta entrada */
  relatedPages: { label: string; href: string }[];
  /** Posts relacionados (para recirculación al final del artículo) */
  relatedPosts?: string[]; // slugs
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'que-llevar-al-descenso-del-sella',
    title: 'Qué llevar al descenso del Sella · guía completa (2026)',
    h1: 'Qué llevar al descenso del Sella',
    description: 'Qué llevar al descenso del Sella: ropa, calzado, comida, móvil, protección solar. La lista completa actualizada 2026 de quien lleva 25 años en Arriondas.',
    excerpt: 'La lista definitiva de qué meter (y qué dejar en casa) antes de bajar el Sella en canoa. 25 años resumidos en una guía práctica.',
    keyword: 'qué llevar descenso sella',
    image: 'includes-b',
    imageAlt: 'Equipo del descenso del Sella — canoa, pala doble, chalecos y bidón estanco',
    datePublished: '2026-04-23',
    dateModified: '2026-05-11',
    readingTime: 8,
    category: 'Preparación',
    relatedPages: [
      { label: 'Qué incluye el descenso', href: '/reserva-premium/' },
      { label: 'Precios y condiciones',   href: '/precios/' },
      { label: 'Cómo llegar',             href: '/como-llegar/' },
    ],
    relatedPosts: ['mejor-hora-descenso-sella', 'descenso-sella-con-ninos-pequenos'],
  },
  {
    slug: 'mejor-hora-descenso-sella',
    title: 'Mejor hora del día para bajar el Sella · comparativa',
    h1: 'Mejor hora para bajar el Sella',
    description: 'La mejor hora del día para el descenso del Sella según el caudal, la temperatura y la afluencia. Tabla horaria real de quien lleva años en el río.',
    excerpt: '¿Primera hora o después de comer? Salimos casi todos los días del año; te contamos qué horario cambia la experiencia y por qué.',
    keyword: 'mejor hora descenso sella',
    image: 'blog-mejorhora-cover',
    imageAlt: 'Final del recorrido del descenso del Sella en Fríes — luz de tarde sobre el río',
    datePublished: '2026-04-23',
    dateModified: '2026-05-11',
    readingTime: 7,
    category: 'Planificación',
    relatedPages: [
      { label: 'Mejor época',     href: '/mejor-epoca/' },
      { label: 'Cuánto dura',     href: '/cuanto-dura/' },
      { label: 'Recorrido y mapa', href: '/recorrido-y-mapa/' },
    ],
    relatedPosts: ['que-llevar-al-descenso-del-sella', 'chiringuitos-descenso-sella'],
  },
  {
    slug: 'descenso-sella-con-ninos-pequenos',
    title: 'Descenso del Sella con niños pequeños · guía real',
    h1: 'Descenso del Sella con niños pequeños',
    description: 'Descenso del Sella con niños pequeños: edad mínima, altura, qué llevar, cómo organizar el día. Guía real de quien baja el río con familias cada temporada.',
    excerpt: 'Edad mínima, altura, distancia realista, picnic y los cuatro miedos típicos de cualquier familia que vamos resolviendo en 90 segundos antes de salir.',
    keyword: 'descenso sella niños pequeños',
    image: 'con-peques',
    imageAlt: 'Familia con niños pequeños bajando el río Sella en canoa',
    datePublished: '2026-04-23',
    dateModified: '2026-05-11',
    readingTime: 9,
    category: 'Familia',
    relatedPages: [
      { label: 'Descenso con niños', href: '/con-ninos/' },
      { label: 'Cuánto dura',        href: '/cuanto-dura/' },
      { label: 'Precios por edad',   href: '/precios/' },
    ],
    relatedPosts: ['que-llevar-al-descenso-del-sella', 'mejor-hora-descenso-sella'],
  },
  {
    slug: 'pozo-del-arco-sella',
    title: 'Pozo del Arco · la mejor playa fluvial del Sella',
    h1: 'Pozo del Arco: la playa fluvial del Sella',
    description: 'Pozo del Arco: cómo llegar, qué encontrar, por qué es la mejor playa fluvial del Sella. Aparece en el descenso entre Arriondas y Toraño — km 3,5.',
    excerpt: 'Aguas turquesas, arena fina, un puente medieval de fondo. El rincón que convierte un descenso en una tarde de postal.',
    keyword: 'pozo del arco sella',
    image: 'pozo-del-arco',
    imageAlt: 'Pozo del Arco — playa fluvial en el río Sella con aguas cristalinas',
    datePublished: '2026-04-23',
    dateModified: '2026-05-11',
    readingTime: 6,
    category: 'Lugares del Sella',
    relatedPages: [
      { label: 'Recorrido y mapa',    href: '/recorrido-y-mapa/' },
      { label: 'Mejor época',         href: '/mejor-epoca/' },
      { label: 'Cuánto dura',         href: '/cuanto-dura/' },
    ],
    relatedPosts: ['chiringuitos-descenso-sella', 'mejor-hora-descenso-sella'],
  },
  {
    slug: 'historia-descenso-sella',
    title: 'Historia del descenso del Sella · desde 1929',
    h1: 'Historia del descenso del Sella',
    description: 'La historia del descenso del Sella desde 1929: Dionisio de la Huerta, la primera piragua, el Descenso Internacional y cómo se convirtió en Fiesta de Interés Turístico Internacional.',
    excerpt: '1929. Dionisio de la Huerta y cuatro amigos se tiran al Sella con una piragua improvisada. Lo que empezó como apuesta fue declarado Fiesta de Interés Turístico Internacional en 1980.',
    keyword: 'historia descenso sella',
    image: 'blog-historia-cover',
    imageAlt: 'Descenso Internacional del Sella · piragüistas en el río durante la competición oficial',
    datePublished: '2026-04-23',
    dateModified: '2026-05-11',
    readingTime: 10,
    category: 'Historia',
    relatedPages: [
      { label: 'Descenso Internacional', href: '/descenso-internacional-del-sella/' },
      { label: 'Quiénes somos',          href: '/quienes-somos/' },
      { label: 'Recorrido y mapa',       href: '/recorrido-y-mapa/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'chiringuitos-descenso-sella'],
  },
  {
    slug: 'chiringuitos-descenso-sella',
    title: 'Chiringuitos del Sella · qué probar en cada uno',
    h1: 'Chiringuitos del descenso del Sella',
    description: 'Los 6 chiringuitos del descenso del Sella: Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. Qué pedir, a qué km está cada uno y cuál es el favorito de la casa.',
    excerpt: 'Seis paradas, seis momentos distintos. Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. La guía honesta.',
    keyword: 'chiringuitos descenso sella',
    image: 'blog-chiringuitos-cover',
    imageAlt: 'Chiringuito junto al río Sella · una de las paradas típicas del descenso turístico',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Ruta',
    relatedPages: [
      { label: 'Recorrido y mapa', href: '/recorrido-y-mapa/' },
      { label: 'Cuánto dura',      href: '/cuanto-dura/' },
      { label: 'Qué incluye',      href: '/reserva-premium/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'mejor-hora-descenso-sella'],
  },
  {
    slug: 'cansa-descenso-sella',
    title: '¿Cansa mucho el descenso del Sella? Respuesta real',
    h1: '¿Cansa mucho el descenso del Sella?',
    description: '¿Cansa el descenso del Sella? La respuesta honesta de quien lleva 25 años remando: no es un deporte, es un paseo. Qué esperar físicamente según edad y forma.',
    excerpt: 'Pregunta real de cada mostrador. La respuesta corta es "no". La larga, mejor leerla antes de reservar: no es un deporte, es un paseo con pala.',
    keyword: 'cansa descenso sella',
    image: 'canoa_sola',
    imageAlt: 'Descenso del Sella en canoa — ritmo tranquilo por el río',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Preparación',
    relatedPages: [
      { label: 'Cuánto dura',      href: '/cuanto-dura/' },
      { label: 'Recorrido y mapa', href: '/recorrido-y-mapa/' },
      { label: 'Con niños',        href: '/con-ninos/' },
    ],
    relatedPosts: ['que-llevar-al-descenso-del-sella', 'mejor-hora-descenso-sella'],
  },
  {
    slug: 'descenso-sella-grupos-despedidas',
    title: 'Descenso del Sella en grupo · despedidas y empresas',
    h1: 'Descenso del Sella en grupo',
    description: 'Descenso del Sella en grupo: despedidas de soltero/a, cumpleaños, empresas, grupos de amigos. Organización, precios, picnic y recomendaciones reales.',
    excerpt: 'Despedidas de soltera, empresas, cumpleaños, grupos de amigos. Cómo organizamos el día para que todo el mundo disfrute, sin importar el nivel de cada uno.',
    keyword: 'descenso sella grupo despedida',
    image: 'blog-grupos-cover',
    imageAlt: 'Grupo de despedida en el descenso del Sella — canoas y buen rollo en Arriondas',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Planes',
    relatedPages: [
      { label: 'Reserva Premium',  href: '/reserva-premium/' },
      { label: 'Precios',          href: '/precios/' },
      { label: 'Contacto',         href: '/contacto/' },
    ],
    relatedPosts: ['chiringuitos-descenso-sella', 'que-llevar-al-descenso-del-sella'],
  },
  {
    slug: 'que-hacer-despues-descenso-sella-ribadesella',
    title: 'Qué hacer después del descenso del Sella · Ribadesella y alrededores',
    h1: 'Qué hacer después del descenso del Sella',
    description: 'Qué visitar después del descenso del Sella: Ribadesella, Cangas de Onís, Lastres, Covadonga. Planes de tarde y noche para completar el día en Asturias.',
    excerpt: 'Ya has bajado el Sella. Son las 15:00, estás duchado y tienes tarde por delante. Cinco planes reales para redondear el día en el oriente de Asturias.',
    keyword: 'que ver ribadesella despues descenso',
    image: 'blog-despues-cover',
    imageAlt: 'Santuario de Covadonga · uno de los planes recomendados tras el descenso del Sella en el oriente asturiano',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Asturias',
    relatedPages: [
      { label: 'Cómo llegar',      href: '/como-llegar/' },
      { label: 'Recorrido y mapa', href: '/recorrido-y-mapa/' },
      { label: 'Mejor época',      href: '/mejor-epoca/' },
    ],
    relatedPosts: ['chiringuitos-descenso-sella', 'historia-descenso-sella'],
  },
  {
    slug: 'donde-alojarse-cerca-descenso-sella',
    title: 'Dónde alojarse cerca del descenso del Sella · Arriondas',
    h1: 'Dónde alojarse cerca del descenso del Sella',
    description: 'Dónde dormir cerca del descenso del Sella: hoteles, casas rurales, apartamentos y camping en Arriondas y alrededores. Cómo elegir según familia, pareja o grupo.',
    excerpt: 'Antes o después del descenso toca dormir cerca. Tipos de alojamiento en Arriondas y alrededores, cómo elegir y en qué fijarse. Nosotras no reservamos — solo te orientamos.',
    keyword: 'alojamiento arriondas descenso sella',
    image: 'blog-alojamiento-inline',
    imageAlt: 'Hotel rural asturiano cerca del descenso del Sella · alojamiento con encanto a pocos kilómetros de Arriondas',
    datePublished: '2026-04-24',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Planificación',
    relatedPages: [
      { label: 'Cómo llegar',      href: '/como-llegar/' },
      { label: 'Mejor época',      href: '/mejor-epoca/' },
      { label: 'Contacto',         href: '/contacto/' },
    ],
    relatedPosts: ['que-hacer-despues-descenso-sella-ribadesella', 'mejor-hora-descenso-sella'],
  },
];

/** Helper · devuelve una entrada por slug */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}

/** Helper · devuelve posts relacionados dado un slug actual */
export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (current?.relatedPosts?.length) {
    return current.relatedPosts
      .map(slug => getPostBySlug(slug))
      .filter((p): p is BlogPost => !!p)
      .slice(0, limit);
  }
  // fallback: los más recientes excluyendo el actual
  return BLOG_POSTS.filter(p => p.slug !== currentSlug).slice(0, limit);
}

/** Formatear fecha ISO → "23 de abril de 2026" */
export function formatDateES(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return `${d} de ${months[m - 1]} de ${y}`;
}
